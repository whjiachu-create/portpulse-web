export const dynamic = "force-static";
export default function MethodsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Data & Methods</h1>
      <p className="mt-2 text-black/60 max-w-3xl">How we construct congestion, throughput proxies and momentum indices — inputs, normalization and quality controls.</p>
      <section className="mt-8 grid gap-4">
        <Card title="Inputs"><ul className="mt-2 list-disc pl-5 text-black/70">
          <li>AIS movement & port call events</li><li>Schedules and public statistics</li><li>Advisories and disruptions where applicable</li>
        </ul></Card>
        <Card title="Normalization"><ul className="mt-2 list-disc pl-5 text-black/70">
          <li>Port geometry: anchorage/berth/basin mapping layers</li><li>Dedup & noise removal; timezone/daily cut-off alignment</li><li>Comparable definitions across regions</li>
        </ul></Card>
        <Card title="Indices"><ul className="mt-2 list-disc pl-5 text-black/70">
          <li><strong>Congestion</strong>: waiting time, queue length, berth efficiency</li>
          <li><strong>Throughput proxy</strong>: port/route level activity proxies</li>
          <li><strong>Momentum</strong>: standardized 0–100 with MoM/YoY deltas</li>
        </ul></Card>
        <Card title="SLO & Quality"><ul className="mt-2 list-disc pl-5 text-black/70">
          <li>Freshness tiers: ≤2h (tier-1), ≤6h (tier-2), daily (long tail)</li><li>Backfill and consistency checks with sampling windows</li>
        </ul></Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/api" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Read API</a>
        <a href="/docs/examples" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Quickstart</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
