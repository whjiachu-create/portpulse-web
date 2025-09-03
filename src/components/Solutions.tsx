export default function Solutions() {
  const items = [
    { title: "Container & Port Tracking", desc: "Unified events and port snapshots via API." },
    { title: "Predictive ETAs & Alerts", desc: "Actionable exceptions with reasons." },
    { title: "Port Congestion & Dwell", desc: "Plan with reliable waiting time signals." },
    { title: "Terminal Events & APIs", desc: "Import/export milestones in one schema." },
  ];
  return (
    <section aria-labelledby="solutions" className="mt-10">
      <h2 id="solutions" className="text-2xl font-semibold tracking-tight">Solutions</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <article key={it.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
