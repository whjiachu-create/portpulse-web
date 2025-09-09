export default function WhatYouGet() {
  return (
    <div>
      <h2 className="text-xl font-medium">What you get</h2>
      <p className="text-black/60">
        Actionable metrics with one schema across regions. Easy to embed, cache-friendly, and verifiable.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Card title="Congestion metrics" desc="Waiting hours, queue length, berth efficiency. Comparable across regions." href="/docs/api" />
        <Card title="Trade momentum (0–100)" desc="Throughput proxies and momentum deltas for planning and macro signals." href="/product/momentum" />
        <Card title="Alerts (optional)" desc="Thresholds &amp; anomalies to webhook/Slack. Keep the team proactive." href="/product/alerts" />
      </div>
    </div>
  );
}
function Card({ title, desc, href }:{title:string; desc:string; href:string}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">{title}</div>
      <p className="text-sm text-black/70 mt-1" dangerouslySetInnerHTML={{__html: desc}} />
      <a href={href} className="inline-block mt-3 text-sm underline text-[#0B2740]">View schema →</a>
    </div>
  );
}
