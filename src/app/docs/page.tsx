export const dynamic = "force-static";

export default function DocsHome() {
  const cards = [
    { href: "/docs/api", title: "API Reference", desc: "OpenAPI reference rendered with RapiDoc." },
    { href: "/docs/examples", title: "Quickstart & Examples", desc: "cURL / Python / JavaScript — copy & run." },
    { href: "/docs/sdk", title: "SDK Samples", desc: "Minimal clients in Python and JavaScript." },
  ];
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Documentation</h1>
      <p className="mt-2 text-black/60">Developer-first docs for PortPulse APIs.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map(c => (
          <a key={c.href} href={c.href} className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition">
            <h2 className="text-lg font-medium">{c.title}</h2>
            <p className="mt-1 text-black/60 text-sm">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
