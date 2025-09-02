// src/app/pricing/page.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";

/** ---------- Types ---------- */
type PlanName = "Lite" | "Starter" | "Pro";
type Plan = {
  name: PlanName;
  price: number;          // monthly USD
  ports: string;
  req: string;
  history: string;
  support: string;
  alerts: string;
  sla: string;
  cta: string;
  popular?: boolean;
};

/** ---------- Data ---------- */
const plans: readonly Plan[] = [
  {
    name: "Lite",
    price: 199,
    ports: "≤10",
    req: "≤500k",
    history: "30d",
    support: "Email support",
    alerts: "—",
    sla: "—",
    cta: "/contact",
  },
  {
    name: "Starter",
    price: 399,
    ports: "≤25",
    req: "≤2M",
    history: "90d",
    support: "Weekday priority",
    alerts: "Weekly report / Slack",
    sla: "—",
    cta: "/contact",
    popular: true,
  },
  {
    name: "Pro",
    price: 899,
    ports: "≤50–100",
    req: "≤5M–10M",
    history: "365d",
    support: "Customer Success",
    alerts: "Email / Slack / Webhook",
    sla: "99.9%",
    cta: "/contact",
  },
] as const;

/** ---------- Page ---------- */
export default function PricingPage() {
  const nf = useMemo(() => new Intl.NumberFormat("en-US"), []);

  return (
    <main className="bg-gradient-to-b from-sky-50/40 via-cyan-50/20 to-white" data-testid="pricing-page">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-2 max-w-2xl text-slate-600" data-testid="yearly-note">
          Tiers by ports / monthly requests / history window. <b>Yearly billing</b> = pay for 10 months.
        </p>

        {/* 主体布局：左侧计划卡 + 右侧粘性 CTA */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_330px]">
          {/* 计划卡 */}
          <div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-testid="plans-grid">
              {plans.map((p) => {
                const yearly = `$${nf.format(p.price * 10)}`;
                const base =
                  "relative rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 " +
                  "hover:-translate-y-0.5 hover:shadow-lg";
                const popularRing = p.popular ? " ring-1 ring-sky-600/20" : "";

                return (
                  <div
                    key={p.name}
                    className={base + popularRing + " p-6"}
                    data-testid={`plan-${p.name.toLowerCase()}`}
                  >
                    {p.popular && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-sky-700 px-2 py-0.5 text-xs text-white shadow-sm">
                        Popular
                      </span>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="font-medium">{p.name}</div>
                    </div>

                    <div className="mt-3 text-3xl font-semibold">
                      ${p.price}
                      <span className="text-base font-normal text-slate-500">/mo</span>
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Yearly: <span className="font-medium">{yearly}</span>{" "}
                      <span className="opacity-70">(10 months price)</span>
                    </div>

                    <ul className="mt-4 space-y-1 text-sm text-slate-700">
                      <li>Ports: {p.ports}</li>
                      <li>Requests/mo: {p.req}</li>
                      <li>History window: {p.history}</li>
                      <li>Support: {p.support}</li>
                      <li>Alerts: {p.alerts}</li>
                      <li>SLA: {p.sla}</li>
                    </ul>

                    <Link
                      href={p.cta}
                      className={
                        "mt-6 inline-flex w-full justify-center rounded-md px-4 py-2 text-sm text-white shadow-sm " +
                        (p.popular ? "bg-sky-700 hover:bg-sky-800" : "bg-slate-900 hover:bg-black")
                      }
                    >
                      Talk to sales
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* 下方信息：更疏朗，分两张卡 */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Add-ons / Overage / Trial */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-slate-700 leading-6">
                  <b>Add-ons:</b> Port Packs <b>+$99</b>/+10 ports/mo; Hi-Confidence Pack <b>+$199</b>/5
                  high-confidence ports/mo; Alerts/Slack plugin <b>+$49–$99</b>/mo.
                  <br />
                  <b>Overage:</b> simplified for v1 — usage beyond plan automatically upgrades to the next tier.
                  <br />
                  <b>Trial:</b> 14-day full feature trial (limited to 5 ports &amp; reasonable quota).
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-testid="faq-block">
                <h2 className="mb-3 text-lg font-medium">FAQ</h2>

                <details className="group border-b border-slate-200 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    What happens if we exceed plan limits?
                    <span className="transition group-open:rotate-180 text-slate-400">▾</span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    For v1 we keep it simple: overage triggers an automatic upgrade to the next tier. We notify the
                    billing contact ahead of time.
                  </p>
                </details>

                <details className="group border-b border-slate-200 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    Do you offer refunds or proration?
                    <span className="transition group-open:rotate-180 text-slate-400">▾</span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Monthly plans can be cancelled any time and won’t renew next cycle. Yearly plans are prepaid;
                    changes apply at renewal. See our SLA/Policies for details.
                  </p>
                </details>

                <details className="group border-b border-slate-200 py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    What does “Hi-Confidence ports” include?
                    <span className="transition group-open:rotate-180 text-slate-400">▾</span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    A curated set of ports with tighter freshness targets (≤2h p95) and event-level signals
                    (anchorage/berth, ATA/ATD), suitable for alerts and operational decisions.
                  </p>
                </details>

                <details className="group py-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                    Do you support Enterprise contracts?
                    <span className="transition group-open:rotate-180 text-slate-400">▾</span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    Yes — SSO/SIEM, private networking, stricter SLAs, invoicing, and data residency are available.
                    Contact sales for a tailored quote.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* 粘性侧栏 CTA */}
          <aside
            className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:sticky md:top-24"
            data-testid="sticky-cta"
          >
            <div className="text-lg font-medium">Talk to a human</div>
            <p className="mt-2 text-sm text-slate-600">
              We’ll map your use case to the right tier and share sample responses from your target ports. Typical
              response time: within 1 business day.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-black"
            >
              Contact sales
            </Link>
            <a className="mt-3 block text-center text-sm underline underline-offset-4" href="mailto:sales@useportpulse.com">
              Or email sales@useportpulse.com
            </a>

            <div className="mt-6 rounded-lg bg-slate-50 p-4 text-xs text-slate-600">
              <div className="font-medium">What you’ll get</div>
              <ul className="mt-1 list-disc pl-5 space-y-1">
                <li>Port list review &amp; coverage suggestions</li>
                <li>Sample API results (JSON/CSV)</li>
                <li>Trial setup (14 days)</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}