import Image from "next/image";
import Solutions from "@/components/Solutions";
import TrendMini from "@/components/TrendMini";
import WorldMiniMap from "@/components/WorldMiniMap";
import CoverageStrip from "@/components/CoverageStrip";
import WhatYouGet from "@/components/WhatYouGet";
import MethodsMini from "@/components/MethodsMini";
import PortComparator from "@/components/PortComparator";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] grid place-items-center">
        <Image
          src="/images/hero-port.jpg"
          alt="PortPulse Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-4 py-20 md:py-24 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Plan with port-level truth
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            50+ ports covered. Congestion and momentum in standardized JSON/CSV with freshness SLO. p95 latency ≤ 300ms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/pricing" className="rounded-xl bg-white text-black px-5 py-2 font-medium hover:opacity-90 transition shadow">
              Start 14-day evaluation
            </a>
            <a href="/docs/examples" className="rounded-xl border border-white/30 px-5 py-2 hover:bg-white/10 transition">
              See live demo
            </a>
          </div>
          {/* trust badges */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <Badge label="Ports covered" value="50+" />
            <Badge label="Freshness (p95)" value="≤ 2h" />
            <Badge label="API latency (p95)" value="≤ 300ms" />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#F0F7FF]">
        <div className="container mx-auto px-4 py-10">
          <WhatYouGet />
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-4 py-10">
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="p-6">
            <Solutions />
          </div>
        </div>
      </section>

      {/* Live Trend minis */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Live trends</h2>
        <p className="text-black/60">Recent 14d snapshots by port.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-medium mb-2">USLAX — 14d</h3>
            <TrendMini unlocode="USLAX" days={14} />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-medium mb-2">USNYC — 14d</h3>
            <TrendMini unlocode="USNYC" days={14} />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-medium mb-2">SGSIN — 14d</h3>
            <TrendMini unlocode="SGSIN" days={14} />
          </div>
        </div>
      </section>

      {/* Mini world map */}
      <section className="bg-[#F7FBFF]">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-xl font-medium">Global activity</h2>
          <p className="text-black/60">Pulse markers highlight major ports. Hover for details.</p>
          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <WorldMiniMap />
          </div>
        </div>
      </section>

      {/* Port comparator */}
      <section className="container mx-auto px-4 py-10">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium">Compare ports</h2>
              <p className="text-black/60 text-sm">Side-by-side 14-day trends. Try your favorite pair.</p>
            </div>
            <a href="/docs/api" className="text-sm underline text-[#0B2740]">Open docs</a>
          </div>
          <div className="mt-4">
            <PortComparator ports={["USLAX","USNYC","SGSIN","CNSHA","CNNGB","HKHKG","NLRTM","BEANR"]} days={14} />
          </div>
        </div>
      </section>

      {/* Coverage & expansion */}
      <section className="bg-[#EEF6FF]">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-4">
            <h2 className="text-xl font-medium">Global Coverage & Expansion</h2>
            <p className="text-black/60 text-sm">Live: <b>50+</b> · On-request: <b>100+</b> · Typical onboarding: <b>2–4 weeks</b></p>
          </div>
          <CoverageStrip />
        </div>
      </section>

      {/* Methods mini */}
      <section className="container mx-auto px-4 py-10">
        <MethodsMini />
      </section>

      {/* Dark CTA */}
      <section className="bg-[#0B2740] text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl font-medium">Add port-level truth to your planning</h2>
          <p className="text-white/80 mt-1">5 ports · fair quota · full features for 14 days</p>
          <div className="mt-5 flex gap-3">
            <a href="/pricing" className="rounded-xl bg-white text-black px-5 py-2 font-medium hover:opacity-90 transition">Start evaluation</a>
            <a href="/docs/api" className="rounded-xl border border-white/30 px-5 py-2 hover:bg-white/10 transition">Read the API</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({label, value}:{label:string; value:string}) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 px-4 py-2 shadow-sm">
      <div className="text-xs text-white/80">{label}</div>
      <div className="text-base font-medium">{value}</div>
    </div>
  );
}
