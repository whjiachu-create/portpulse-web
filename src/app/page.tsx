"use client";
import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import Link from "next/link";
import CorridorChips from "@/components/CorridorChips";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TrendMini = dynamic(() => import("@/components/TrendMini"), { ssr: false, loading: () => <div className="h-56 rounded-xl border border-slate-200 animate-pulse" /> });
const D3WorldPortsMap = dynamic(() => import("@/components/D3WorldPortsMap"), { ssr: false, loading: () => <div className="h-[420px] rounded-xl border border-slate-200 animate-pulse" /> });

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";

function Hero() {
  const [status, setStatus] = useState<"online" | "degraded" | "offline">("offline");
  useEffect(() => {
    (async () => {
      try { const r = await fetch(`${API_BASE}/v1/health`, { cache: "no-store" }); setStatus(r.ok ? "online" : "degraded"); }
      catch { setStatus("offline"); }
    })();
  }, []);
  const pill = status === "online" ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : status === "degraded" ? "bg-amber-50 text-amber-800 ring-1 ring-amber-200" : "bg-rose-50 text-rose-700 ring-1 ring-rose-200";

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#0b2533] to-[#142332]">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero-port.jpg" alt="Port operations background" fill sizes="100vw" className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2533]/40 to-[#0b2533]" />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Real-time port visibility & predictive insights</h1>
          <div className="mt-3">
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${pill}`}>
              <span className="size-2 rounded-full bg-current/70" /> Status: {status}
            </span>
          </div>
          <p className="mt-4 text-lg text-slate-200">
            Unified APIs for congestion, dwell, berth wait and ETA/ETB forecasts — plus corridor snapshots, trends and alerts.
            Get running in 5 minutes; production-ready in ~30.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://docs.useportpulse.com/EXAMPLES.md" className="rounded-md bg-white/95 text-slate-900 px-4 py-2" target="_blank" rel="noreferrer noopener">Quickstart</a>
            <Link href="/contact" className="rounded-md border border-white/40 px-4 py-2 text-white">Book a demo</Link>
          </div>
          <CorridorChips />
          <div className="sr-only">
            {/* small links moved to footer */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <StatsBar />

      <section id="product" className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["API-first", "Unified schema, backwards compatible, ETag/304, JSON/CSV."],
            ["Measurable quality", "Coverage, freshness and p95 latency are monitored."],
            ["Easy integration", "Run in 5 minutes, production-ready in ~30 minutes."],
          ].map(([t, d], i) => (
            <div key={i} className="rounded-xl border bg-white p-6">
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-4">
        <div className="rounded-2xl border border-slate-200 p-6">
          <div className="mb-2 flex items-center justify-between">
            <div className="font-medium">USLAX · 7-day trend</div>
            <a className="text-sm text-slate-500 underline underline-offset-4" href="https://docs.useportpulse.com/openapi.json" target="_blank" rel="noreferrer noopener">OpenAPI</a>
          </div>
          <TrendMini unlocode="USLAX" days={7} height={224} />
        </div>
      </section>

      <D3WorldPortsMap />

      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border bg-gradient-to-br from-[#0b2533] to-[#142332] p-8 md:p-12 text-white">
          <h3 className="text-2xl font-semibold">Ready to start?</h3>
          <p className="mt-2 text-slate-200">Check the Quickstart or contact sales to book a live demo.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://docs.useportpulse.com/EXAMPLES.md" className="rounded-md bg-white text-slate-900 px-4 py-2" target="_blank" rel="noreferrer noopener">Quickstart →</a>
            <Link href="/contact" className="rounded-md border border-white/40 px-4 py-2 text-white">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
