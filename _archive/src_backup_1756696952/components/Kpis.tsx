"use client";

const KPIS = [
  { label: "Ports covered", value: "67+" },
  { label: "p95 API latency", value: "< 300ms" },
  { label: "Replay window", value: "30 days" },
  { label: "SLA availability", value: "99.9%" },
];

export default function Kpis() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-6">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-xl border bg-white p-4 text-center">
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{k.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
