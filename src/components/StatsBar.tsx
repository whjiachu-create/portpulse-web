// src/components/StatsBar.tsx
"use client";

export default function StatsBar() {
  const stats = [
    ["67+", "ports"],
    ["≤ 2h", "freshness (p95)"],
    ["< 300 ms", "latency (p95)"],
    ["JSON / CSV", "ETag / 304"],
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-6">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {stats.map(([v, k]) => (
            <div key={k} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center shadow-sm">
              <div className="text-lg font-semibold text-slate-900">{v}</div>
              <div className="text-xs text-slate-600">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}