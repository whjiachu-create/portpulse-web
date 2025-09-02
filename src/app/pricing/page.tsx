import Link from "next/link";

export const metadata = {
  title: "Pricing",
  description: "Simple tiers by ports, requests, history and SLO.",
};

type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$199 / mo",
    blurb: "For trials and small integrations",
    features: [
      "Up to 5 ports",
      "100k requests / mo",
      "30-day history",
      "Freshness: daily / ≤6h",
      "Community support",
    ],
    cta: "Start trial",
    href: "/contact?intent=trial",
  },
  {
    name: "Growth",
    price: "$399 / mo",
    blurb: "For production teams",
    features: [
      "Up to 15 ports",
      "500k requests / mo",
      "180-day history",
      "Freshness: ≤2h key ports",
      "Email support, basic SLA",
    ],
    cta: "Talk to sales",
    href: "/contact?intent=sales",
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "For networks & vendors",
    features: [
      "Unlimited ports (contracted)",
      "Custom quotas & burst",
      "Multi-year backfill",
      "SLO by contract, priority support",
      "On-request expansions (2–4 weeks)",
    ],
    cta: "Book a call",
    href: "/contact?intent=sales",
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-2 text-black/60">Fair quotas, standardized schema, and contractual SLO options.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-lg transition">
            <div className="text-sm text-black/60">{t.name}</div>
            <div className="text-2xl font-medium mt-1">{t.price}</div>
            <p className="text-sm text-black/70 mt-2">{t.blurb}</p>
            <ul className="mt-3 text-sm list-disc pl-5 text-black/70">
              {t.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="mt-4">
              <Link href={t.href} className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90">{t.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
