"use client";
export default function DataKPI() {
  const items = [
    { k: "Ports in view", v: "67+", tip: "Sample coverage; ask for your corridor" },
    { k: "p95 latency", v: "< 300ms", tip: "Measured at edge / cached" },
    { k: "Freshness SLO", v: "≤ 2h (p95)", tip: "Hi-Confidence ports tighter" },
    { k: "Replay window", v: "30 days", tip: "Time travel for audits" },
  ];
  return (
    <section className="bg-white/60 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 md:grid-cols-4 md:gap-4 md:px-6">
        {items.map((x) => (
          <div
            key={x.k}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            title={x.tip}
          >
            <div className="text-xs text-slate-500">{x.k}</div>
            <div className="mt-1 text-xl font-semibold text-slate-900">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
