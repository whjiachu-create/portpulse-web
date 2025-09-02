export const dynamic = "force-static";
export default function ProductHub() {
  const cards = [
    { href: "/product/congestion", title: "Port Congestion API", desc: "Waiting time, queue length, berth efficiency — normalized across regions." },
    { href: "/product/momentum", title: "Trade Momentum API", desc: "Throughput proxies and momentum indices at port/route level." },
    { href: "/product/alerts", title: "Port Health Alerts (optional)", desc: "Thresholds & anomaly alerts via Webhook/Email/Slack." },
  ];
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Product</h1>
      <p className="mt-2 text-black/60">APIs for port operations and trade momentum.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map(c => (
          <a key={c.href} href={c.href} className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition">
            <h2 className="text-lg font-medium">{c.title}</h2>
            <p className="mt-1 text-sm text-black/60">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
