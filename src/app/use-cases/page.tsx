/* eslint-disable @next/next/no-img-element */
// src/app/use-cases/page.tsx
export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — PortPulse",
  description:
    "Where PortPulse fits: platforms & integrators, shippers & manufacturers, macro & quant, and freight forwarders (3PL). Comparable metrics, clear SLOs, and a developer-first API.",
};

type Card = {
  title: string;
  href: string;
  blurb: string;
  bullets: string[];
  img: string; // 16:9, 1200×675 or 1280×720
  alt: string;
  label: string;
};

const cards: Card[] = [
  {
    title: "Platforms & Integrators",
    href: "/use-cases/tech",
    blurb:
      "Add standardized port congestion & momentum into your TMS/BI. One schema across ports; transparent freshness SLO.",
    bullets: [
      "Comparable metrics across regions",
      "CSV/JSON parity with strong ETag/304",
      "Partner-friendly redistribution terms",
    ],
    img: "/use-cases3/platforms/hero.jpg",
    alt: "Embed PortPulse API into platforms",
    label: "SLO ≤ 2h • Edge p95 < 300ms",
  },
  {
    title: "Shippers & Manufacturers",
    href: "/use-cases/shippers",
    blurb:
      "Stabilize inbound S&OP. Use comparable signals to set buffers, qualify alternate gateways, and align suppliers.",
    bullets: [
      "Lead-time buffers from objective signals",
      "Cross-port thresholds for simple rules",
      "Auditable freshness in every response",
    ],
    img: "/use-cases3/shippers/hero.jpg",
    alt: "Inbound planning with standardized congestion metrics",
    label: "100+ ports live",
  },
  {
    title: "Macro & Quant",
    href: "/use-cases/macro",
    blurb:
      "Throughput proxies and momentum factors with replay windows and stable /v1 contracts for research → production.",
    bullets: [
      "Normalized congestion_score for comparability",
      "30-day replay & request IDs for audit",
      "CSV/JSON 1:1 for backtests",
    ],
    img: "/use-cases3/macro/hero.jpg",
    alt: "Macro research using port momentum",
    label: "Replay 30d • Versioned",
  },
  {
    title: "Freight forwarders (3PL)",
    href: "/use-cases/forwarders",
    blurb:
      "Turn exceptions into automation. Trigger SLA-aligned alerts and embed reusable widgets across customer portals.",
    bullets: [
      "Dwell/queue alerts with thresholds",
      "Reusable widgets across POL/POD",
      "Contract-first API you can trust",
    ],
    img: "/use-cases3/forwarders/hero.jpg",
    alt: "3PL exception management and customer portals",
    label: "Alerts • Widgets • API",
  },
];

export default function UseCasesIndexPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Use Cases</h1>
        <p className="text-black/70 mt-2">
          Where PortPulse fits. Comparable metrics across ports, clear freshness SLOs, and a developer-first API
          so you can move from ad-hoc dashboards to production automation—fast.
        </p>
      </header>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {cards.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-black/10 bg-white p-4 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10 bg-white">
              {/* native <img> to avoid loader constraints */}
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition"
              />
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px]">
                {c.label}
              </span>
            </div>

            <p className="text-sm text-black/70 mt-1">{c.blurb}</p>

            <ul className="mt-3 grid gap-1 text-sm text-black/80">
              {c.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 text-sm text-[#0B2740] underline underline-offset-4">
              Explore {c.title} →
            </div>
          </a>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Try the API on your flow</h3>
        <p className="text-sm text-black/70 mt-2">
          Start a 14-day evaluation (up to 5 ports), or talk to us about bundles tailored to your network.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm hover:bg-black/90 transition"
          >
            See pricing
          </a>
          <a
            href="/play"
            className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition"
          >
            Try the API
          </a>
          <a
            href="/contact?intent=sales"
            className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition"
          >
            Talk to sales
          </a>
        </div>
      </section>
    </main>
  );
}