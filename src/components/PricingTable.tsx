import CheckoutButton from "./CheckoutButton";

type Tier = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: { href: string; label: string };
  highlight?: boolean;
};

export default function PricingTable() {
  const tiers: Tier[] = [
    {
      name: "Lite",
      price: "$199",
      subtitle: "Up to 10 ports · 0.5M req/mo · No custom SLA",
      features: [
        "Standardized JSON/CSV",
        "Hourly freshness targets",
        "Email support (best-effort)",
      ],
      cta: { href: "/contact?intent=start-lite", label: "Start Lite" },
    },
    {
      name: "Starter",
      price: "$399",
      subtitle: "Up to 25 ports · 2M req/mo · Weekday support",
      features: [
        "Freshness (p95) ≤ 2h on key ports",
        "Cache-friendly endpoints (ETag/304)",
        "Slack/Email weekly summaries",
      ],
      cta: { href: "/pricing#contact", label: "Start evaluation" },
      highlight: true,
    },
    {
      name: "Pro",
      price: "$899",
      subtitle: "Up to 50–100 ports · 5–10M req/mo · 99.9% SLA",
      features: [
        "Priority support & success",
        "Alerts & webhooks included",
        "Extended history & index deltas",
      ],
      cta: { href: "/contact?intent=start-pro", label: "Talk to sales" },
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <Card key={t.name} tier={t} />
      ))}
    </div>
  );
}

function Card({ tier }: { tier: Tier }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/10 bg-white p-6 shadow-sm relative" +
        (tier.highlight ? " ring-2 ring-[#26B1FF]" : "")
      }
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-4 rounded-full bg-[#0B2740] text-white text-xs px-3 py-1 shadow">
          Popular
        </div>
      )}
      <div className="text-sm text-black/60">{tier.name}</div>
      <div className="text-3xl font-semibold mt-1">
        {tier.price}
        <span className="text-base font-normal text-black/50"> /mo</span>
      </div>
      <div className="text-sm text-black/70 mt-1">{tier.subtitle}</div>
      <ul className="mt-4 space-y-2 text-sm text-black/80">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-[#26B1FF] inline-block"></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA：Lite/Starter 走 Checkout；Pro 保持“Talk to sales”跳转 */}
      {tier.name === "Lite" ? (
        <CheckoutButton priceEnvVar="PRICE_LITE_MONTH" label={tier.cta.label} />
      ) : tier.name === "Starter" ? (
        <CheckoutButton priceEnvVar="PRICE_STARTER_MONTH" label={tier.cta.label} />
      ) : (
        <a
          href={tier.cta.href}
          className="mt-5 inline-block rounded-xl bg-[#0B2740] text-white px-4 py-2 text-sm hover:opacity-90"
        >
          {tier.cta.label}
        </a>
      )}

      <div className="mt-3 text-xs text-black/50">Yearly: pay 10 months, get 12.</div>
    </div>
  );
}