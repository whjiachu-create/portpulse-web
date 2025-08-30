"use client";

import Link from "next/link";
import PricingFAQ from "@/components/PricingFAQ";

const PLANS = [
  {
    name: "Lite",
    price: 199,
    tagline: "Self-serve, cost-efficient",
    features: [
      "Up to 10 ports",
      "≤ 500k requests / month",
      "Core metrics: trend / congestion / dwell / snapshots",
      "Email support (best-effort)",
      "No custom SLA",
    ],
    cta: { label: "Start 14-day trial", href: "/contact" },
  },
  {
    name: "Starter",
    price: 399,
    popular: true,
    tagline: "Most teams start here",
    features: [
      "Up to 25 ports",
      "≤ 2M requests / month",
      "Priority support (business days)",
      "Weekly report & Slack alerts",
      "Auto-upgrade on overage",
    ],
    cta: { label: "Start 14-day trial", href: "/contact" },
  },
  {
    name: "Pro",
    price: 899,
    tagline: "For production & scale",
    features: [
      "50–100 ports",
      "≤ 5–10M requests / month",
      "99.9% SLA & status page",
      "Customer success onboarding",
      "Apply for custom fields / thresholds",
    ],
    cta: { label: "Talk to sales", href: "/contact" },
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-14">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-3 text-slate-600">
          Three simple plans. 14-day full-feature trial (limited to 5 ports & reasonable quota).{" "}
          <span className="inline-block rounded-full bg-amber-50 text-amber-800 ring-1 ring-amber-200 px-2 py-0.5 text-xs ml-1">
            Yearly: pay 10 months, get 12
          </span>
        </p>
      </header>

      <section className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* left: plans + FAQ */}
        <div className="space-y-8">
          {/* plans */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border bg-white p-6 ${p.popular ? "border-slate-900" : "border-slate-200"}`}
              >
                {p.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-2 py-0.5 text-xs text-white">
                    Popular
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-slate-500 text-sm">{p.tagline}</span>
                </div>
                <div className="mt-3 flex items-end gap-1">
                  <div className="text-3xl font-semibold">${p.price}</div>
                  <div className="text-slate-500">/ mo</div>
                </div>
                <div className="mt-1 text-xs text-slate-500">Yearly: ${p.price * 10}/yr (12 months)</div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-slate-900" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.cta.href}
                  className={`mt-6 inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm ${
                    p.popular ? "bg-slate-900 text-white hover:bg-slate-800" : "border hover:bg-slate-50"
                  }`}
                >
                  {p.cta.label}
                </Link>
              </div>
            ))}
          </div>

          {/* policy blurb */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <p>
              <strong>Overage policy:</strong> for v1 we keep it simple — when you exceed your plan limits,
              we automatically upgrade you to the appropriate tier for the current billing cycle. No per-request
              metered billing at this time.
            </p>
          </div>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-semibold mb-3">FAQ</h2>
            <div className="space-y-3">
              <details className="rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Do you offer refunds?</summary>
                <p className="mt-2 text-sm text-slate-700">
                  Monthly plans can be cancelled anytime with no further charges. We don’t offer partial refunds for
                  the current cycle. Yearly plans are prepaid (10 months price for 12 months) and non-refundable after activation.
                </p>
              </details>
              <details className="rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">What happens if I go over the limits?</summary>
                <p className="mt-2 text-sm text-slate-700">
                  v1 uses <em>auto-upgrade</em>: if you exceed ports or monthly request quota, we’ll move you
                  to the next tier to keep your service uninterrupted. You’ll see the change in your invoice.
                </p>
              </details>
              <details className="rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Billing cycles & taxes</summary>
                <p className="mt-2 text-sm text-slate-700">
                  Monthly or yearly prepaid. Prices in USD. Taxes (VAT/GST) handled by Stripe Tax based on your billing profile.
                </p>
              </details>
              <details className="rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">SLA & support</summary>
                <p className="mt-2 text-sm text-slate-700">
                  Lite: best-effort email support. Starter: business-day priority + weekly report/Slack alerts.
                  Pro: 99.9% SLA, status page, and customer success onboarding.
                </p>
              </details>
              <details className="rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Trial terms</summary>
                <p className="mt-2 text-sm text-slate-700">
                  14-day full-feature trial with 5 ports and reasonable quotas. We don’t discount the plans; as an early-bird
                  benefit we may extend ports/reports upon request during trial.
                </p>
              </details>
            </div>
          </section>
        </div>

        {/* right: sticky CTA */}
        <aside className="self-start lg:sticky lg:top-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="font-medium">Need a higher tier?</div>
            <p className="mt-1 text-sm text-slate-600">
              Enterprise (≥ $10k / yr), custom fields, data residency, or SOC2? Talk to us.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full justify-center rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
            >
              Contact sales →
            </Link>
            <a
              href="mailto:sales@useportpulse.com"
              className="mt-2 block text-center text-sm underline underline-offset-4"
            >
              Or email sales@useportpulse.com
            </a>
            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
              <div className="font-medium mb-1">What you get</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Unified schema & ETag/304</li>
                <li>Coverage/freshness/latency monitoring</li>
                <li>cURL / Postman / SDK samples</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      <PricingFAQ />
</main>
  );
}
