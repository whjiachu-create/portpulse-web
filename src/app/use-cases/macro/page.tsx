export const dynamic = "force-static";
export default function MacroUseCase() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Macro & Quant</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Use port-level throughput proxies and momentum indices as early trade signals.
        Data comes in standardized JSON/CSV with caching guidance for stable backfills.
      </p>
      <section className="mt-8 grid gap-4">
        <Card title="Pain points">
          <ul className="list-disc pl-5 text-black/70">
            <li>Official macro indicators are lagging.</li>
            <li>Heterogeneous sources and unstable definitions across regions.</li>
          </ul>
        </Card>
        <Card title="How we help">
          <ul className="list-disc pl-5 text-black/70">
            <li>Standardized 0–100 momentum with MoM/YoY deltas.</li>
            <li>Route/port-level throughput proxies for cycle turning points.</li>
          </ul>
        </Card>
        <Card title="Implementation">
          <ul className="list-disc pl-5 text-black/70">
            <li>CSV/JSON endpoints; ETag/304 for caching.</li>
            <li>Freshness SLO tiers; stable sampling windows for backtest.</li>
          </ul>
        </Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/examples" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Run a demo</a>
        <a href="/contact?intent=sales" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Talk to us</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5">
    <h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div>
  </div>;
}
