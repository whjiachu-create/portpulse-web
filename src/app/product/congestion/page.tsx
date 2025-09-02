import TrendMini from "@/components/TrendMini";
export const dynamic = "force-static";
export default function CongestionProduct() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Port Congestion API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Normalize waiting time and operational flow metrics across regions. One schema, consistent definitions.</p>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <TrendMini title="USLAX — 14d dwell" unlocode="USLAX" />
        <TrendMini title="USNYC — 14d dwell" unlocode="USNYC" />
        <TrendMini title="SGSIN — 14d dwell" unlocode="SGSIN" />
      </section>
      <section className="mt-8 grid gap-4">
        <Card title="Key Metrics"><ul className="list-disc pl-5 text-black/70">
          <li>Waiting time & queue length (anchorage/berth)</li><li>Berth efficiency & operation time</li><li>Daily and weekly granularity</li>
        </ul></Card>
        <Card title="SLO & Coverage"><ul className="list-disc pl-5 text-black/70">
          <li>Tier-1 ports ≤2h freshness; tier-2 ≤6h; long tail daily</li>
          <li>50+ live; more on-request with 2–4 weeks onboarding</li>
        </ul></Card>
        <Card title="Quickstart">
          <pre className="text-sm overflow-x-auto p-3 rounded-lg bg-black/5">{`curl -sS -H "X-API-Key: dev_demo_123" \\
"https://api.useportpulse.com/v1/ports/USLAX/trend?days=7" | jq .`}</pre>
        </Card>
      </section>
      <div className="mt-8 flex gap-3">
        <a href="/docs/examples" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Try the API</a>
        <a href="/coverage" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">See coverage</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
