import Link from "next/link";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, scalable plans. Pick ports and requests, upgrade as you grow.",
};

type Tier = {
  name: string;
  price: string;
  badge?: "Popular" | "Best value";
  blurb: string;
  features: string[];
  cta: string;
  href: string;
};

const tiers: Tier[] = [
  {
    name: "Lite",
    price: "$199 / mo",
    blurb: "For small teams and pilots",
    features: [
      "Up to 10 ports",
      "Up to 500k requests / mo",
      "Basic email support",
      "No custom SLA",
      "14-day evaluation available",
    ],
    cta: "Start evaluation",
    href: "/contact?intent=trial",
  },
  {
    name: "Starter",
    price: "$399 / mo",
    badge: "Popular",
    blurb: "For production use in growing teams",
    features: [
      "Up to 25 ports",
      "Up to 2M requests / mo",
      "Freshness SLO: ≤ 6h typical",
      "Weekday priority support",
      "Slack/Email alerts (add-on)",
    ],
    cta: "Start now",
    href: "/contact?intent=sales",
  },
  {
    name: "Pro",
    price: "$899 / mo",
    blurb: "For networks and analytics vendors",
    features: [
      "Up to 50–100 ports",
      "Up to 5–10M requests / mo",
      "99.9% SLA available",
      "Customer success onboarding",
      "Custom fields / thresholds eligible",
    ],
    cta: "Talk to sales",
    href: "/contact?intent=sales",
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Port-level congestion and momentum APIs with clear limits and simple upgrades.
        Pay monthly or get 2 months off with annual billing.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-lg transition relative"
          >
            {t.badge && (
              <div className="absolute -top-3 right-4 rounded-full bg-black text-white text-xs px-3 py-1 shadow">
                {t.badge}
              </div>
            )}
            <div className="text-sm text-black/60">{t.name}</div>
            <div className="text-2xl font-medium mt-1">{t.price}</div>
            <p className="text-sm text-black/70 mt-2">{t.blurb}</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-black/70 space-y-1">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href={t.href}
                className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90"
              >
                {t.cta}
              </Link>
            </div>
            <div className="mt-3 text-xs text-black/50">
              Annual billing: pay 10 months, get 12 months.
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-5">
        <h2 className="text-lg font-medium">Add-ons & overages</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
          <li>Extra ports: $20 / port / mo (Lite/Starter; Pro/Enterprise by quote)</li>
          <li>Extra requests: $5 / 10k requests (tiered; ≥1M / mo by quote)</li>
          <li>Historical backfill: from $500 / port / year (12–24 months)</li>
          <li>Alerts (webhook/Slack): $99 / 10 ports / mo</li>
          <li>Dedicated instance / custom SLA: +10–20%</li>
          <li>Resale rights: revenue share by agreement</li>
        </ul>
      </section>

      {/* FAQ (concise) */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Faq
          q="What happens if we exceed limits?"
          a="We’ll notify you and recommend the next tier. For v1 we keep billing simple: upgrade rather than per-request overage."
        />
        <Faq
          q="Do you offer annual pricing?"
          a="Yes. Annual billing gives you 12 months for the price of 10. Invoices in USD; Stripe Tax handles VAT/GST."
        />
        <Faq
          q="Can you add new ports on request?"
          a="Yes. Typical onboarding is 2–4 weeks. New ports follow the same schema and SLO."
        />
        <Faq
          q="Do you provide SLAs?"
          a="Pro and Enterprise can include 99.9% SLA and custom support terms."
        />
      </section>

      {/* Enterprise CTA */}
      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-medium">Enterprise & OEM</h2>
        <p className="text-black/70 text-sm mt-1">
          Need unlimited ports, multi-year history, custom fields, or resale rights? Let’s scope an enterprise agreement.
        </p>
        <div className="mt-3">
          <Link href="/contact?intent=enterprise" className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90">
            Book a call
          </Link>
        </div>
      </section>
    </main>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4">
      <div className="text-sm font-medium">{q}</div>
      <div className="text-sm text-black/70 mt-1">{a}</div>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Product",
          name:"PortPulse APIs",
          description:"Port-level congestion and trade momentum APIs with clear limits and simple upgrades.",
          offers:[
            {"@type":"Offer","name":"Lite","price":"199","priceCurrency":"USD"},
            {"@type":"Offer","name":"Starter","price":"399","priceCurrency":"USD"},
            {"@type":"Offer","name":"Pro","price":"899","priceCurrency":"USD"}
          ]
        })
      }} />
    </div>); }
    