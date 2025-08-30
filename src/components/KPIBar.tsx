// src/components/KPIBar.tsx
type KPI = { k: string; v: string; note?: string };
const KPIS = [
  { v: "67+", k: "Ports (today)" },
  { v: "<300ms", k: "p95 latency" },
  { v: "30d", k: "Replay window" },
  { v: "99.9%", k: "SLA" },
] as const satisfies ReadonlyArray<KPI>;

export default function KPIBar() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {KPIS.map((x) => (
            <div key={x.k} className="rounded-xl border bg-white p-5 text-center">
              <div className="text-2xl font-semibold text-slate-900">{x.v}</div>
              <div className="mt-1 text-sm text-slate-600">{x.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
