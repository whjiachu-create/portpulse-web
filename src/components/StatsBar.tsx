"use client";

type Stat = { label: string; value: string; hint?: string };

const STATS: Stat[] = [
  { label: "Ports covered", value: "50+",
    hint: "Core corridors: USWC, USEC, Europe, Asia" },
  { label: "Freshness (p95)", value: "≤ 2h",
    hint: "Core ports SLO；长尾 6–12h" },
  { label: "Uptime", value: "99.9%", hint: "Status page & probes" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-6">
      <div className="grid gap-4 rounded-2xl border bg-white p-6 md:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
            <div className="text-sm text-slate-600">{s.label}</div>
            {s.hint && <div className="mt-1 text-xs text-slate-500">{s.hint}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
