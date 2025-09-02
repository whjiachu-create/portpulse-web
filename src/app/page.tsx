import Image from "next/image";
import Solutions from "@/components/Solutions";
import TrendMini from "@/components/TrendMini";
import WorldMiniMap from "@/components/WorldMiniMap";
import CoverageStrip from "@/components/CoverageStrip";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] grid place-items-center">
        <Image
          src="/images/hero-port.jpg"
          alt="PortPulse Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="relative container mx-auto px-4 py-20 md:py-24 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Predictive port operations API
          </h1>
          <p className="mt-3 text-white/90 max-w-2xl">
            Unified endpoints for congestion, yard dwell, berth efficiency and momentum —
            plus snapshots, trends and alerts. Reproducible JSON/CSV, cache-friendly,
            p95 &lt; 300ms, freshness SLO.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/docs/examples" className="rounded-xl bg-white text-black px-5 py-2 font-medium hover:opacity-90 transition">Quickstart</a>
            <a href="/contact?intent=sales" className="rounded-xl border border-white/30 px-5 py-2 hover:bg-white/10 transition">Contact sales</a>
          </div>
        </div>
      </section>

      {/* KPI strip (lightweight – keep simple here) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Stat label="Ports covered" value="50+" />
          <Stat label="Freshness (p95)" value="≤ 2h" />
          <Stat label="API latency (p95)" value="≤ 300ms" />
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-4 py-8">
        <Solutions />
      </section>

      {/* Live Trend minis */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-medium">Live trends</h2>
        <p className="text-black/60">Recent 14d snapshots by port.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <h3 className="text-sm font-medium mb-2">USLAX — 14d</h3>
            <TrendMini unlocode="USLAX" days={14} />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <h3 className="text-sm font-medium mb-2">USNYC — 14d</h3>
            <TrendMini unlocode="USNYC" days={14} />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <h3 className="text-sm font-medium mb-2">SGSIN — 14d</h3>
            <TrendMini unlocode="SGSIN" days={14} />
          </div>
        </div>
      </section>

      {/* Mini world map */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-medium">Global activity</h2>
        <p className="text-black/60">Pulse markers highlight major ports. Hover for details.</p>
        <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
          <WorldMiniMap />
        </div>
      </section>

      {/* Coverage & expansion */}
      <section className="container mx-auto px-4 py-8">
        <CoverageStrip />
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

function Stat({label,value}:{label:string;value:string}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <div className="text-sm text-black/60">{label}</div>
      <div className="text-2xl font-medium mt-1">{value}</div>
    </div>
  );
}
