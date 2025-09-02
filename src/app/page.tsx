"use client";

import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import DataKPI from "@/components/DataKPI";
import Solutions from "@/components/Solutions";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LineChart, Line, ResponsiveContainer, Tooltip as RTooltip, XAxis, YAxis } from "recharts";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";

/** ---------- shared types ---------- */
type Pt = { ts: string | number; v: number };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

/** -------------------- Hero -------------------- **/
function Hero() {
  const [status, setStatus] = useState<"online" | "degraded" | "offline">("offline");

  useEffect(() => {
    const run = async () => {
      try {
        const r = await fetch(`${API_BASE}/v1/health`, { cache: "no-store" });
        setStatus(r.ok ? "online" : "degraded");
      } catch {
        setStatus("offline");
      }
    };
    run();
  }, []);

  const pill =
    status === "online"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      : status === "degraded"
        ? "bg-amber-50 text-amber-800 ring-1 ring-amber-200"
        : "bg-rose-50 text-rose-700 ring-1 ring-rose-200";

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* 背景：本地 hero-port.jpg + 渐变遮罩，保证可读 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-port.jpg"
          alt="Global container terminals"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/30" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Predictive port operations API
          </h1>

          <p className="mt-5 max-w-2xl text-xl text-white/90">
            Unified endpoints for <span className="font-medium">congestion</span>, <span className="font-medium">yard dwell</span>,{" "}
            <span className="font-medium">berth wait &amp; ETA/ETB forecasts</span> — plus snapshots, trends and alerts.
            Reproducible JSON/CSV, cache-friendly, p95 &lt; 300ms, 30-day replay.
          </p>

          <div className="mt-4">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${pill}`}>
              <span className="size-2 rounded-full bg-current/70" />
              Status: {status}
            </span>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://docs.useportpulse.com/EXAMPLES.md"
              className="rounded-md bg-white/95 px-4 py-2 text-slate-900 hover:bg-white"
              target="_blank"
              rel="noreferrer"
            >
              Quickstart
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 bg-white/10 px-4 py-2 text-white hover:bg-white/15"
            >
              Contact sales / Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** -------------------- d3-geo world mini map (升级：悬浮提示 + 脉冲动画) -------------------- **/
const WORLD_TOPO = "https://unpkg.com/world-atlas@2/countries-110m.json";
type CountriesTopo = Topology & { objects: { countries: GeometryCollection } };

const DEMO_PORTS = [
  { code: "USLAX", name: "Los Angeles", coord: [-118.264, 33.732] as [number, number] },
  { code: "USLGB", name: "Long Beach",  coord: [-118.215, 33.767] as [number, number] },
  { code: "SGSIN", name: "Singapore",    coord: [103.75, 1.26] as [number, number] },
  { code: "CNSHA", name: "Shanghai",     coord: [121.5, 31.3] as [number, number] },
  { code: "NLRTM", name: "Rotterdam",    coord: [4.48, 51.95] as [number, number] },
  { code: "DEHAM", name: "Hamburg",      coord: [9.97, 53.54] as [number, number] },
] as const;

type PtXY = { code: string; name: string; x: number; y: number };

function D3WorldPortsMap() {
  // SVG 逻辑尺寸（视窗会等比缩放，tooltip 用百分比定位避免测量 DOM）
  const width = 720;
  const height = 380;

  const projection = useMemo(
    () => geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" } as GeoPermissibleObjects),
    [width, height]
  );
  const pathGen = useMemo(() => geoPath(projection), [projection]);

  const [paths, setPaths] = useState<string[]>([]);
  const [points, setPoints] = useState<PtXY[]>([]);
  const [hover, setHover] = useState<PtXY | null>(null);

  useEffect(() => {
    async function load() {
      async function loadFrom(url: string) {
        const res = await fetch(url);
        const world = (await res.json()) as CountriesTopo;
        const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry, GeoJsonProperties>;
        const ps = (countries.features ?? []).map(
          (f: Feature<Geometry, GeoJsonProperties>) => pathGen(f as unknown as GeoPermissibleObjects) ?? ""
        );
        setPaths(ps);
      }
      try {
        await loadFrom(WORLD_TOPO);
      } catch {
        try {
          await loadFrom("/world-110m.json");
        } catch {
          setPaths([]);
        }
      }

      // 坐标 -> 视口 XY
      const xy: PtXY[] = DEMO_PORTS.reduce<PtXY[]>((acc, p) => {
        const prj = projection(p.coord);
        if (prj) acc.push({ code: p.code, name: p.name, x: prj[0], y: prj[1] });
        return acc;
      }, []);
      setPoints(xy);
    }
    load();
  }, [pathGen, projection]);

  // 工具：把 SVG 坐标转为容器百分比，便于 tooltip 定位
  const toPct = (n: number, total: number) => `${(n / total) * 100}%`;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="mb-4 text-2xl font-semibold">Global coverage (sample)</h2>

        {/* 相对容器：承载 SVG + 绝对定位的 tooltip */}
        <div className="relative rounded-xl border bg-white p-3">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[420px] w-full">
            <defs>
              <radialGradient id="sea" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#eef6ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </radialGradient>

              {/* 脉冲动画样式（内联到 SVG，避免全局 CSS 依赖） */}
              <style>{`
                @keyframes ping {
                  0%   { r: 0;   opacity: .7 }
                  60%  { r: 12;  opacity: 0  }
                  100% { r: 12;  opacity: 0  }
                }
                .ping { animation: ping 2.4s cubic-bezier(0,0,.2,1) infinite; transform-origin: center; }
                .dot  { transition: transform .2s ease; }
                .mark:hover .dot { transform: scale(1.2); }
              `}</style>
            </defs>

            {/* 海面底色 */}
            <rect width={width} height={height} fill="url(#sea)" />

            {/* 陆地 */}
            <g className="fill-slate-200 stroke-slate-400/60">
              {paths.map((d, i) => (
                <path key={i} d={d} strokeWidth={0.5} />
              ))}
            </g>

            {/* 港口点（带脉冲） */}
            <g>
              {points.map((p) => (
                <g
                  key={p.code}
                  className="mark"
                  transform={`translate(${p.x},${p.y})`}
                  onMouseEnter={() => setHover(p)}
                  onMouseLeave={() => setHover(null)}
                  role="button"
                  aria-label={`${p.name} (${p.code})`}
                  tabIndex={0}
                >
                  {/* 脉冲外圈 */}
                  <circle className="ping" r="0" fill="#0EA5E9" />
                  {/* 实心点 */}
                  <circle className="dot" r="3" fill="#111827" />
                </g>
              ))}
            </g>
          </svg>

          {/* 悬浮提示（绝对定位到容器内，使用百分比避免测量 DOM） */}
          {hover && (
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-3 rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-xs shadow-md"
              style={{
                left: toPct(hover.x, width),
                top: toPct(hover.y, height),
              }}
            >
              <div className="font-medium text-slate-900">{hover.name} <span className="text-slate-500">({hover.code})</span></div>
              <div className="text-slate-600">Sample coverage & freshness</div>
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-gray-500">Illustrative only. Ask sales for your target corridor.</p>
      </div>
    </section>
  );
}

/** -------------------- Photo gallery -------------------- **/
const GALLERY = [
  { src: "/images/gallery-1.jpg", alt: "Port of Los Angeles" },
  { src: "/images/gallery-2.jpg", alt: "Port cranes" },
  { src: "/images/gallery-3.jpg", alt: "Containers" },
  { src: "/images/gallery-4.jpg", alt: "Singapore" },
  { src: "/images/gallery-5.jpg", alt: "Night terminal lights" },
  { src: "/images/gallery-6.jpg", alt: "Global shipping map" },
];

function PortGallery() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Ports in view</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY.map((it, i) => (
            <div key={i} className="group overflow-hidden rounded-lg border bg-white shadow-sm">
              <Image
                src={it.src}
                alt={it.alt}
                width={800}
                height={600}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-3 text-sm text-gray-600">{it.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** -------------------- Trend widget -------------------- **/
type TrendMiniProps = {
  unlocode: string;
  days?: number;
  height?: number;
};

function TrendMini({ unlocode, days = 7, height = 224 }: TrendMiniProps) {
  const [data, setData] = useState<Pt[]>([]);
  const [err, setErr] = useState<string | null>(null);

  type TrendPoint = { date: string; congestion_score?: number; vessels?: number };
  type TrendResponse = { points?: TrendPoint[] };

  useEffect(() => {
    let disposed = false;
    async function run() {
      try {
        const res = await fetch(`${API_BASE}/v1/ports/${unlocode}/trend?days=${days}`, {
          headers: DEMO_KEY ? { "X-API-Key": DEMO_KEY } : {},
          next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error(`${res.status}`);

        const j = (await res.json()) as TrendResponse;

        const pts: Pt[] = (j.points ?? []).map((p) => ({
          ts: p.date,
          v: typeof p.congestion_score === "number" ? p.congestion_score : typeof p.vessels === "number" ? p.vessels : 0,
        }));

        if (!disposed) {
          setData(pts);
          setErr(null);
        }
      } catch (e) {
        if (!disposed) setErr(e instanceof Error ? e.message : String(e));
      }
    }
    run();
    return () => {
      disposed = true;
    };
  }, [unlocode, days]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
        <div className="text-sm font-medium">
          {unlocode} · {days}-day trend
        </div>
        <a
          className="text-xs text-slate-500 hover:text-slate-700"
          href="https://docs.useportpulse.com/openapi.json"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenAPI
        </a>
      </div>
      <div className="px-3" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="ts" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <RTooltip />
            <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {err ? (
        <div className="mx-3 my-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
          <b>Failed to load.</b>{" "}
          {err === "Failed to fetch" ? "Check your network or API base URL." : `Error: ${err}`}
        </div>
      ) : (
        <div className="h-3" />
      )}

      <div className="px-3 pb-3">
        <pre className="whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-3 text-[11px] leading-relaxed">
          {`curl -sS -H "X-API-Key: ${DEMO_KEY || "dev_demo_123"}" \\
  "${API_BASE}/v1/ports/${unlocode}/trend?days=${days}" | jq .`}
        </pre>
      </div>
    </div>
  );
}

/** -------------------- ResourcesStrip -------------------- **/
function ResourcesStrip() {
  const items = [
    { href: "/pricing", label: "Pricing" },
    { href: "https://docs.useportpulse.com/openapi.json", label: "OpenAPI", ext: true },
    { href: "https://docs.useportpulse.com/EXAMPLES.md", label: "Quickstart", ext: true },
    { href: "https://docs.useportpulse.com/SDK.md", label: "SDK Samples", ext: true },
    { href: "https://docs.useportpulse.com/GLOSSARY.md", label: "Glossary", ext: true },
  ] as const satisfies ReadonlyArray<{ href: string; label: string; ext?: boolean }>;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap gap-3">
          {items.map((x) =>
            ("ext" in x && x.ext) ? (
              <a
                key={x.label}
                href={x.href}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-1.5 rounded-lg bg-white text-sm border border-slate-200"
              >
                {x.label}
              </a>
            ) : (
              <Link key={x.label} href={x.href} className="px-3 py-1.5 rounded-lg bg-white text-sm border border-slate-200">
                {x.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/** -------------------- Page -------------------- **/
export default function Home() {
  return (
    <main>
      <Hero />

      {/* KPI条 + 解决方案四卡 */}
      <DataKPI />
      <Solutions />

      <TrustBar />
      <StatsBar />

      {/* Value props */}
      <section className="bg-slate-50/60 border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["API-first", "Unified schema, backward compatible, ETag/304, JSON/CSV."],
              ["Measurable quality", "Coverage, freshness and p95 latency are monitored."],
              ["Easy integration", "Run in 5 minutes, production-ready in ~30 minutes."],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <div className="text-lg font-semibold">{t}</div>
                <p className="mt-2 text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend card */}
      <section className="container mx-auto px-4 pb-4">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          <div className="mb-2 flex items-center justify-between">
            <div className="font-medium">USLAX · 7-day trend</div>
            <a
              className="text-sm text-slate-500 underline underline-offset-4"
              href="https://docs.useportpulse.com/openapi.json"
              target="_blank"
              rel="noreferrer"
            >
              OpenAPI
            </a>
          </div>
          <TrendMini unlocode="USLAX" days={7} height={224} />
          <div className="mt-4">
            <code className="block whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
              {`curl -sS -H "X-API-Key: ${DEMO_KEY}" \\
  "${API_BASE}/v1/ports/USLAX/trend?days=7" | jq .`}
            </code>
            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(
                  `curl -sS -H "X-API-Key: ${DEMO_KEY}" "${API_BASE}/v1/ports/USLAX/trend?days=7" | jq .`
                )
              }
              className="mt-2 rounded-md border px-3 py-1.5 text-xs hover:bg-slate-50"
            >
              Copy cURL
            </button>
          </div>
        </div>
      </section>

      {/* Visuals */}
      <D3WorldPortsMap />
      <PortGallery />

      {/* Resources strip */}
      <ResourcesStrip />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-night p-8 md:p-12">
          <Image
            src="/images/cta-port.jpg"
            alt="Container terminal at night"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-night via-night/80 to-transparent mix-blend-multiply" />

          <div className="relative">
            <h3 className="text-2xl font-semibold text-white">Ready to start?</h3>
            <p className="mt-2 text-slate-200">
              Check the Quickstart or contact sales to book a live demo.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://docs.useportpulse.com/EXAMPLES.md"
                className="inline-flex items-center gap-1 rounded-md bg-white/95 px-4 py-2 text-slate-900 hover:bg-white"
                target="_blank"
                rel="noreferrer"
              >
                Quickstart →
              </a>
              <Link href="/contact" className="rounded-md border border-white/30 bg-white/10 px-4 py-2 text-white hover:bg-white/15">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
