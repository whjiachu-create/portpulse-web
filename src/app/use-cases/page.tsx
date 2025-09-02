export const dynamic = "force-static";
export default function UseCasesHub() {
  const cards = [
    { href: "/use-cases/lsp", title: "3PL / Freight Forwarders", desc: "Plan networks with port-level signals to reduce cost-to-serve." },
    { href: "/use-cases/shippers", title: "Shippers & Manufacturers", desc: "Stabilize inbound plans by anticipating port volatility." },
    { href: "/use-cases/tech", title: "Logistics Tech / Analytics Vendors", desc: "Embed standardized metrics to accelerate GTM." },
    { href: "/use-cases/macro", title: "Macro & Quant", desc: "Early trade signals from throughput proxies and momentum." },
  ];
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Use Cases</h1>
      <p className="mt-2 text-black/60">Pick a path that matches your workflow.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
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
