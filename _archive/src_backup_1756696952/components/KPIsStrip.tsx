export default function KPIsStrip() {
  const items = [
    { k: "67+ ports", v: "coverage today" },
    { k: "< 300ms", v: "p95 latency" },
    { k: "30 days", v: "replay window" },
    { k: "99.9%", v: "SLA target" },
  ] as const;

  return (
    <section className="bg-gradient-to-r from-sky-50 via-cyan-50 to-sky-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((x) => (
          <div key={x.k} className="rounded-xl bg-white/70 backdrop-blur p-4 border border-slate-200 text-center">
            <div className="text-lg font-semibold text-slate-900">{x.k}</div>
            <div className="text-xs text-slate-600">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
