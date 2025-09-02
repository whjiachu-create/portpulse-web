export const dynamic = "force-static";
export default function AlertsProduct() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Port Health Alerts (Optional)</h1>
      <p className="mt-2 text-black/60 max-w-3xl">Turn thresholds and anomalies into actionable alerts via Webhook / Email / Slack.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Rules"><ul className="list-disc pl-5 text-black/70">
          <li>Waiting time &gt; p90 for 3 consecutive days</li><li>Momentum drop &gt; 20% WoW</li><li>Queue surge vs baseline</li>
        </ul></Card>
        <Card title="Integrations"><ul className="list-disc pl-5 text-black/70">
          <li>Webhook (signed)</li><li>Email templates</li><li>Slack channels</li>
        </ul></Card>
      </div>
      <div className="mt-8 flex gap-3">
        <a href="/contact?intent=sales" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 hover:opacity-90 transition">Talk to us</a>
        <a href="/docs/api" className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5 transition">Read API</a>
      </div>
    </div>
  );
}
function Card({title, children}:{title:string; children:React.ReactNode}) {
  return <div className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="text-lg font-medium">{title}</h2><div className="mt-2">{children}</div></div>;
}
