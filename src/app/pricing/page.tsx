import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingTable from "@/components/PricingTable";

export const metadata = {
  title: "Pricing — PortPulse APIs",
  description: "Simple, scalable pricing for port-level congestion & trade momentum APIs. Lite, Starter, and Pro tiers.",
  openGraph: {
    title: "Pricing — PortPulse APIs",
    description: "Simple, scalable pricing for port-level congestion & trade momentum APIs.",
    url: "https://useportpulse.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — PortPulse APIs",
    description: "Lite, Starter, and Pro tiers with clear limits.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <section className="bg-[#F0F7FF]">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
          <p className="mt-2 text-black/60 max-w-3xl">
            Port packages and request bundles with clear upgrades. Developer-first, cache-friendly APIs.
          </p>
          <div className="mt-6">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">What’s included</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Card title="Standard schema" desc="Comparable metrics across regions, one contract, one schema." />
          <Card title="Freshness targets" desc="Published SLO, with benchmarks for key ports." />
          <Card title="Easy to embed" desc="ETag/304, CSV/JSON, examples in cURL/JS/Python." />
        </div>
        <div id="contact" className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-lg font-medium">Need Enterprise or resale license?</div>
              <p className="text-black/60 text-sm">100+ ports, dedicated instances/SLA, or redistribution terms.</p>
            </div>
            <a href="/contact?intent=enterprise" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 text-sm hover:opacity-90">Talk to sales</a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "PortPulse APIs",
            description: "Port-level congestion and trade momentum APIs.",
            offers: [
              { "@type": "Offer", name: "Lite", price: "199", priceCurrency: "USD", priceValidUntil: "2026-12-31" },
              { "@type": "Offer", name: "Starter", price: "399", priceCurrency: "USD", priceValidUntil: "2026-12-31" },
              { "@type": "Offer", name: "Pro", price: "899", priceCurrency: "USD", priceValidUntil: "2026-12-31" }
            ]
          }),
        }}
      />
  {/* === Pricing FAQ (floating cards) === */}
  <PricingFAQ />
</main>
  );
}

function Card({ title, desc }:{title:string; desc:string}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">{title}</div>
      <p className="text-sm text-black/70 mt-1">{desc}</p>
    </div>
  );
}


