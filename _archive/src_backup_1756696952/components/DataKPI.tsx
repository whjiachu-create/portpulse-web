export default function DataKPI() {
  const items = [
    ["67+ ports", "current coverage"],
    ["p95 < 300ms", "API latency (cached)"],
    ["30-day replay", "historical window"],
    ["99.9% SLA", "availability target"],
  ] as const;

  return (
    <section className="bg-slate-50/70 border-t border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map(([a, b], i) => (
            <div key={i} className="rounded-xl border bg-white p-5 text-center">
              <div className="text-xl font-semibold">{a}</div>
              <div className="mt-1 text-sm text-slate-600">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
