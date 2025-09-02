export default function HowItWorks() {
  const steps = [
    ["Discovery", "Share ports/corridors and success criteria."],
    ["Tech alignment", "OpenAPI + sample responses + trial key."],
    ["Integrate", "5 minutes to run, ~30 minutes to production."],
  ] as const;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-xl border bg-white p-6">
              <div className="text-sm text-slate-500 mb-1">Step {i + 1}</div>
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-slate-600 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
