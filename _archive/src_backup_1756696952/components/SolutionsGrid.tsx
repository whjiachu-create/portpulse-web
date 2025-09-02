export default function SolutionsGrid() {
  const items = [
    ["Container & Port Tracking", "Unified events and port snapshots via API."],
    ["Predictive ETAs & Alerts", "Actionable exceptions with reasons."],
    ["Port Congestion & Dwell", "Plan with reliable waiting time signals."],
    ["Terminal Events & APIs", "Import/export milestones in one schema."],
  ] as const;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, d], i) => (
            <div key={i} className="rounded-xl border bg-white p-5">
              <div className="text-base font-semibold">{t}</div>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
