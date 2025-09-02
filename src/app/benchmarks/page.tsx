export const metadata = {
  title: "Quality Benchmarks",
  description: "Freshness and latency snapshots, plus data quality checklist for PortPulse indices.",
};
export default function BenchmarksPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Quality Benchmarks</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Transparent snapshots of freshness and latency. Replace charts with your BI exports when ready.
      </p>
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Freshness distribution (key ports)"><Placeholder /></Card>
        <Card title="API latency p95 by region"><Placeholder /></Card>
      </section>
      <section className="mt-6">
        <Card title="Data quality checklist">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Field completeness (≥ 99% on key metrics)</li>
            <li>Anomaly rate &lt; 1% after correction</li>
            <li>Consistent port definitions across regions</li>
            <li>Change logs and deprecation policy</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
function Card({ title, children }:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium mb-2">{title}</div>
      {children}
    </div>
  );
}
function Placeholder() {
  return (
    <div className="h-40 rounded-xl bg-[#F0F7FF] grid place-items-center text-black/40 text-sm">
      Chart placeholder
    </div>
  );
}
