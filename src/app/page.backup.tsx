"use client";

import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import DataKPI from "@/components/DataKPI";
import Solutions from "@/components/Solutions";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-port.jpg"
          alt="Global container terminals"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* 浅色叠加，保证标题可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/25" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Predictive port operations API
          </h1>

          <p className="mt-5 max-w-2xl text-xl text-white/90">
            Standardized endpoints for <span className="font-medium">congestion</span>, <span className="font-medium">yard dwell</span>, <span className="font-medium">berth wait &amp; ETA/ETB forecasts</span> — plus corridor snapshots, historical trends and alerts. Measurable coverage, p95 &lt;300&nbsp;ms, 30-day replay.
          </p>

          {/* live status pill */}
          <div className="mt-4">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${pill}`}>
              <span className="size-2 rounded-full bg-current/70" />
              Status: {status}
            </span>
          </div>

          <p className="mt-4 text-lg text-white/90">
            PortPulse provides reproducible data for trends, congestion, dwell, snapshots and alerts. Get running in 5 minutes, integrate in 30.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="https://docs.useportpulse.com/EXAMPLES.md"
              className="rounded-md bg-white/95 px-4 py-2 text-slate-900 hover:bg-white"
              target="_blank"
              rel="noreferrer"
            >
              Quickstart
            </a>
            <Link href="/contact" className="rounded-md border border-white/40 bg-white/10 px-4 py-2 text-white hover:bg-white/15">
              Contact sales / Book a demo
            </Link>
          </div>

          {/* 快捷链接（保留，权重降低） */}
          <div className="mt-6 text-sm text-white/80 space-x-2">
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/PRICING.md">Pricing</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/SLA.md">SLA</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/ERRORS.md">Errors</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/CHANGELOG.md">Changelog</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/postman/portpulse_postman.json">Postman</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/openapi.json">OpenAPI</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://docs.useportpulse.com/SDK.md">SDK Samples</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://status.useportpulse.com/">Status</a><span>·</span>
            <a className="underline-offset-4 hover:underline" href="https://useportpulse.com/contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}


/** -------------------- d3-geo world mini map -------------------- **/
const WORLD_TOPO = "https://unpkg.com/world-atlas@2/countries-110m.json";
const DEMO_PORTS = [
  { code: "USLAX", name: "Los Angeles", coord: [-118.264, 33.732] },
  { code: "USLGB", name: "Long Beach", coord: [-118.215, 33.767] },
  { code: "SGSIN", name: "Singapore", coord: [103.75, 1.26] },
  { code: "CNSHA", name: "Shanghai", coord: [121.5, 31.3] },
  { code: "NLRTM", name: "Rotterdam", coord: [4.48, 51.95] },
  { code: "DEHAM", name: "Hamburg", coord: [9.97, 53.54] },
];

type CountriesTopo = Topology & { objects: { countries: GeometryCollection } };

function D3WorldPortsMap() {
  const [paths, setPaths] = useState<string[]>([]);
  const [points, setPoints] = useState<Array<{ code: string; x: number; y: number }>>([]);

  // Canvas size
  const width = 720;
  const height = 380;

  // d3 projection + path
  const projection = useMemo(
    () => geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" } as GeoPermissibleObjects),
    [width, height]
  );
  const pathGen = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    async function load() {
      async function loadFrom(url: string) {
        const res = await fetch(url);
        const world = (await res.json()) as CountriesTopo;

        const countries = feature(world, world.objects.countries) as FeatureCollection<Geometry, GeoJsonProperties>;

        const ps = (countries.features ?? []).map(
          (f: Feature<Geometry, GeoJsonProperties>) =>
            pathGen(f as unknown as GeoPermissibleObjects) ?? ""
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

      const pts = DEMO_PORTS.map((p) => {
        const xy = projection(p.coord as [number, number]);
        return xy ? { code: p.code, x: xy[0], y: xy[1] } : null;
      }).filter((v): v is { code: string; x: number; y: number } => v !== null);
      setPoints(pts);
    }

    load();
  }, [pathGen, projection]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="mb-4 text-2xl font-semibold">Global coverage (sample)</h2>
        <div className="rounded-xl border bg-white p-3">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[420px] w-full">
            <defs>
              <radialGradient id="sea" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#eef6ff" />
                <stop offset="100%" stopColor="#ffffff" />
              </radialGradient>
            </defs>
            <rect width={width} height={height} fill="url(#sea)" />
            <g className="fill-slate-200 stroke-slate-400/60">
              {paths.map((d, i) => (
                <path key={i} d={d} strokeWidth={0.5} />
              ))}
            </g>
            <g>
              {points.map((p) => (
                <g key={p.code} transform={`translate(${p.x},${p.y})`}>
                  <circle r="3" className="fill-gray-900" />
                  <text y={-10} textAnchor="middle" className="fill-gray-700 text-[10px]">
                    {p.code}
                  </text>
                </g>
              ))}
            </g>
          </svg>
          <p className="mt-3 text-xs text-gray-500">Illustrative only. Ask sales for your target corridor.</p>
        </div>
      </div>
    </section>
  );
}

/** -------------------- Photo gallery -------------------- **/
// 本地 6 图（覆盖原来的外链 GALLERY）
const GALLERY: { src: string; alt: string }[] = [
  { src: "/images/gallery-1.jpg", alt: "Port of Los Angeles" },
  { src: "/images/gallery-2.jpg", alt: "Port cranes" },
  { src: "/images/gallery-3.jpg", alt: "Containers" },
  { src: "/images/gallery-4.jpg", alt: "Singapore" },
  { src: "/images/gallery-5.jpg", alt: "Rotterdam" },
  { src: "/images/gallery-6.jpg", alt: "Shanghai" },
];

function PortGallery() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Ports in view</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY.map((it, i) => (
            <div key={i} className="group overflow-hidden rounded-lg border bg-white">
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
          v:
            typeof p.congestion_score === "number"
              ? p.congestion_score
              : typeof p.vessels === "number"
                ? p.vessels
                : 0,
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
    <div className="rounded-xl border border-slate-200">
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
            <Tooltip />
            <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="px-4 py-3 text-xs text-rose-600">{err ? `Failed to load: ${err}` : "\u00A0"}</div>
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

      {/* 新增：KPI条 + 解决方案四卡（对标竞品信息架构） */}
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
              <div key={i} className="rounded-xl border bg-white p-6">
                <div className="text-lg font-semibold">{t}</div>
                <p className="mt-2 text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend card */}
      <section className="container mx-auto px-4 pb-4">
        <div className="rounded-2xl border border-slate-200 p-6">
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