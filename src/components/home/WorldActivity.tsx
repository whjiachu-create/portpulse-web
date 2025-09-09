// src/components/home/WorldActivity.tsx
"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  geoNaturalEarth1,
  geoPath,
  geoGraticule10,
  type GeoProjection,
  type GeoPermissibleObjects,
} from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection } from "geojson";
import type { GeometryObject, Topology } from "topojson-specification";
import { useRouter } from "next/navigation";
// JSON 无类型：用 Topology 进行 **类型安全** 断言（不是 any）
import land110m from "world-atlas/land-110m.json";

type SeedPoint = {
  name: string;
  unlocode: string;
  lon: number;
  lat: number;
  /** 0–100: 代表“热度/流量”，用于点大小 */
  value?: number;
  x?: number;
  y?: number;
};

type Props = {
  title?: string;
  height?: number;     // 组件高度
  topN?: number;       // 取前 N 个点
  points?: SeedPoint[]; // 可替换为 API 数据
};

// P1 演示点位（可随时替换为真实 API）
const SEED: SeedPoint[] = [
  { name: "Los Angeles", unlocode: "USLAX", lon: -118.247, lat: 33.737, value: 90 },
  { name: "New York", unlocode: "USNYC", lon: -74.006, lat: 40.7128, value: 82 },
  { name: "Singapore", unlocode: "SGSIN", lon: 103.82, lat: 1.29, value: 96 },
  { name: "Shanghai", unlocode: "CNSHA", lon: 121.5, lat: 31.2, value: 88 },
  { name: "Rotterdam", unlocode: "NLRTM", lon: 4.48, lat: 51.92, value: 84 },
  { name: "Hong Kong", unlocode: "CNHKG", lon: 114.17, lat: 22.3, value: 79 },
];

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

/** 点位去重（投影后像素距离 > minDist） */
function dedupeByDistance(pts: SeedPoint[], proj: GeoProjection, minDist = 8) {
  const placed: SeedPoint[] = [];
  for (const p of pts) {
    const projected = proj([p.lon, p.lat]);
    if (!projected) continue;
    const [x, y] = projected as [number, number];
    let ok = true;
    for (const q of placed) {
      const dx = (q.x ?? 0) - x;
      const dy = (q.y ?? 0) - y;
      if (Math.hypot(dx, dy) < minDist) { ok = false; break; }
    }
    if (ok) placed.push({ ...p, x, y });
  }
  return placed;
}

export default function WorldActivity({
  title = "Global activity",
  height = 360,
  topN = 60,
  points = SEED,
}: Props) {
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<
    | null
    | { x: number; y: number; screenX: number; screenY: number; name: string; code: string }
  >(null);

  const w = wrapRef.current?.clientWidth ?? 960;
  const m = 16;
  const width = w;
  const heightPx = Math.max(320, Math.min(height, 520));

  /** TopoJSON → GeoJSON（无 any） */
  const landGeo: GeoPermissibleObjects = useMemo(() => {
    type LandTopology = Topology<{ land: GeometryObject }>;
    const topo = land110m as unknown as LandTopology;
    const obj = topo.objects.land;
    // feature 返回 Feature | FeatureCollection，二者都是 GeoPermissibleObjects 的子集
    return feature(topo, obj) as Feature | FeatureCollection;
  }, []);

  const { graticule, proj, path } = useMemo(() => {
    const proj = geoNaturalEarth1()
      .fitExtent([[m, m], [width - m, heightPx - m]], { type: "Sphere" } as GeoPermissibleObjects)
      .precision(0.5);
    const path = geoPath(proj);
    const graticule = geoGraticule10();
    return { graticule, proj, path };
  }, [width, heightPx, m]);

  const renderDots = useMemo(() => {
    const sorted = (points && points.length ? [...points] : []).sort(
      (a, b) => (b.value ?? 0) - (a.value ?? 0)
    );
    return dedupeByDistance(sorted.slice(0, topN), proj, 10);
  }, [points, proj, topN]);

  const openPort = (code: string) => router.push(`/coverage?port=${encodeURIComponent(code)}`);

  const tooltipPos = useMemo(() => {
    if (!hover || !wrapRef.current) return null;
    const rect = wrapRef.current.getBoundingClientRect();
    const pad = 10;
    const left = clamp(hover.screenX - rect.left + 12, pad, rect.width - 160);
    const top = clamp(hover.screenY - rect.top - 10, pad, rect.height - 48);
    return { left, top };
  }, [hover]);

  return (
    <div ref={wrapRef} className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-floating">
        <div className="flex items-center justify-between px-4 pt-3">
          <h3 className="text-sm font-medium text-slate-700">{title}</h3>
          <span className="text-xs text-slate-500">Top {Math.min(topN, renderDots.length)} ports</span>
        </div>

        <div className="relative">
          <svg
            viewBox={`0 0 ${width} ${heightPx}`}
            width="100%"
            height={heightPx}
            role="img"
            aria-label="Global activity map"
          >
            {/* 背景 / 经纬网 / 陆地 */}
            <rect x={0} y={0} width={width} height={heightPx} fill="#F6F8FB" rx={12} />
            <path d={path(geoGraticule10()) ?? ""} fill="none" stroke="#E5E7EB" strokeWidth={0.6} />
            <path d={path(landGeo) ?? ""} fill="#E2E8F0" stroke="#CBD5E1" strokeWidth={0.6} />

            {/* 点位 */}
            <g>
              {renderDots.map((p, i) => {
                const r = 2.4 + ((p.value ?? 50) / 100) * 2.2; // 大小≈流量
                const label = `${p.name} (${p.unlocode}) — click to open`;
                return (
                  <circle
                    key={`${p.unlocode}-${i}`}
                    cx={p.x} cy={p.y} r={r}
                    fill="#0B2740" fillOpacity={0.75}
                    role="button" tabIndex={0} aria-label={label}
                    onClick={() => openPort(p.unlocode)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPort(p.unlocode); }
                    }}
                    onMouseEnter={(e) =>
                      setHover({ x: p.x!, y: p.y!, screenX: e.clientX, screenY: e.clientY, name: p.name, code: p.unlocode })
                    }
                    onMouseMove={(e) =>
                      setHover({ x: p.x!, y: p.y!, screenX: e.clientX, screenY: e.clientY, name: p.name, code: p.unlocode })
                    }
                    onMouseLeave={() => setHover(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <title>{`${p.name} (${p.unlocode})`}</title>
                  </circle>
                );
              })}
            </g>
          </svg>

          {/* 悬浮提示 */}
          {hover && tooltipPos && (
            <div
              className="pointer-events-none absolute z-10 rounded-md bg-slate-900/90 px-2 py-1 text-xs text-white shadow-lg"
              style={{ left: tooltipPos.left, top: tooltipPos.top }}
            >
              <div className="font-medium">{hover.name}</div>
              <div className="opacity-80">{hover.code}</div>
            </div>
          )}
        </div>

        {/* 图例（仅一行说明） */}
        <div className="border-t border-slate-200 px-4 py-3">
          <div className="text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0B2740]" />
              Dot size ≈ traffic &nbsp;&nbsp; Color ≈ congestion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}