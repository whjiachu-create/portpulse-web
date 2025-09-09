// src/components/CoverageStrip.tsx
import { PORTS100 } from "@/data/ports100";

const regionOrder = ["North America", "Europe", "APAC", "Middle East", "LATAM", "Africa"] as const;

export default function CoverageStrip() {
  // 统计各区域数量（数字直接来自 PORTS100）
  const counts = regionOrder.map((r) => ({
    region: r,
    count: PORTS100.filter((p) => p.region === r).length,
  }));
  const live = PORTS100.length; // 100

  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-4 md:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-medium">Global coverage & expansion</div>
          <p className="text-sm text-black/60">
            PortPulse currently covers <b>{live} live</b> ports. New ports follow the same schema and freshness SLO for
            cross-port comparability. Typical onboarding: <b>2–4 weeks</b>.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {counts.map(({ region, count }) => (
            <span
              key={region}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs"
            >
              {region} {count}
            </span>
          ))}
          <a
            href="/coverage"
            className="rounded-xl bg-[#0B2740] text-white text-sm px-3.5 py-1.5 hover:opacity-90 transition"
          >
            View full list
          </a>
        </div>
      </div>
      <p className="mt-2 text-xs text-black/50">
        Schema: JSON/CSV, versioned; Freshness SLO p95 ≤ 2h; API latency p95 ≤ 300ms; 30-day replay.
      </p>
    </div>
  );
}