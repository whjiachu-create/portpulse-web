export default function StatsBar() {
  const stats = [
    { k: "67+ ports", v: "today" },
    { k: "p95 < 300ms", v: "API latency" },
    { k: "30-day replay", v: "history" },
    { k: "SLA 99.9%", v: "Pro+" },
  ];
  return (
    <section aria-label="Network stats" className="mt-8">
      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="flex items-baseline justify-between rounded-xl bg-white p-4 shadow-sm">
            <span className="text-base font-semibold">{s.k}</span>
            <span className="text-xs text-slate-500">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
