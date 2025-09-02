export default function Solutions() {
  const items = [
    {
      title: "Port Congestion API",
      desc: "Waiting time, queue length, berth efficiency — normalized across regions.",
      href: "/product/congestion",
    },
    {
      title: "Trade Momentum API",
      desc: "Port/route throughput proxies and momentum indices for planning & macro.",
      href: "/product/momentum",
    },
    {
      title: "Port Health Alerts (optional)",
      desc: "Thresholds & anomaly alerts via Webhook/Email/Slack.",
      href: "/product/alerts",
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((x) => (
        <a key={x.title} href={x.href} className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition">
          <h3 className="text-lg font-medium">{x.title}</h3>
          <p className="mt-1 text-black/60 text-sm">{x.desc}</p>
        </a>
      ))}
    </div>
  );
}
