export default function StatsBar() {
  const items = [
    { label: "Ports", value: "67+" },
    { label: "API p95", value: "< 300ms" },
    { label: "Replay", value: "30 days" },
    { label: "Availability", value: "99.9% SLA" },
  ];
  return (
    <section className="relative z-10 container mx-auto px-4 -mt-8 md:-mt-10">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="card px-5 py-4">
            <div className="text-2xl font-semibold">{it.value}</div>
            <div className="text-sm text-slate-600">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
