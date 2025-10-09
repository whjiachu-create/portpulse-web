// src/app/use-cases/tech/page.tsx
export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platforms & Integrators — PortPulse Use Cases",
  description:
    "Add standardized port-level congestion & momentum metrics to your TMS/BI with stable SLAs and a developer-first API.",
};

export default function PlatformsIntegratorsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Platforms & Integrators</h1>
        <p className="text-black/70 mt-2">
          Add port-level congestion & momentum to your TMS/BI with stable SLAs. One schema, reproducible methods,
          audit-friendly freshness.
        </p>
      </header>

      {/* Hero */}
      <figure className="mt-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-white">
          {/* native img to avoid Next/Image loader constraints */}
          <img
            src="/use-cases3/platforms/hero.jpg"
            alt="Embed PortPulse API into platforms with standardized metrics and SLAs"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <figcaption className="text-xs text-black/60 mt-2">
          Standardized metrics, clear SLOs, and partner-friendly licensing accelerate time-to-market.
        </figcaption>
      </figure>

      {/* Pain / Help / KPIs */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Pain</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>DIY port definitions cause inconsistency across regions.</li>
            <li>Coverage gaps and stale snapshots break SLAs.</li>
            <li>CSV/JSON mismatch and missing strong ETag/304.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">How we help</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Unified schema & comparable metrics across ports.</li>
            <li>Freshness SLO (p95 ≤ 2h) with traceable timestamps.</li>
            <li>Resale-friendly licensing and partner support.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Result KPIs</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Faster time-to-market (weeks → days).</li>
            <li>Contractual SLO with monitoring & alerts.</li>
            <li>Lower maintenance cost vs. DIY pipelines.</li>
          </ul>
        </div>
      </section>

      {/* Story + Demo */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">A partner story</h3>
          <p className="mt-2 text-sm leading-7">
            A TMS vendor serving forwarders needed reliable port congestion across APAC, EU, and NA. Their DIY
            scrapers produced inconsistent “wait time” fields and frequent outages. PortPulse replaced ad-hoc ingest
            with a contract-first API: the same definitions for <em>avg_wait_hours</em>, <em>congestion_score</em>,
            and <em>dwell</em> across ports, backed by freshness SLO and strong caching. The integration went live in
            days—partners now ship a single widget across regions with unified thresholds and alerts.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`curl -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/USLAX/trend?days=30&fields=date,avg_wait_hours,congestion_score"`}</pre>
          </div>
          <p className="text-xs text-black/60 mt-2">
            JSON and CSV return the same definitions. CSV ships strong ETag for conditional GETs (304).
          </p>
        </div>

        <figure className="rounded-xl border border-black/10 bg-white p-3">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10">
            <img
              src="/use-cases3/platforms/mini.png"
              alt="Sample embedded trend widget showing comparable congestion across ports"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-black/60 mt-2">
            Example “trend” widget embedded in a platform. One schema across ports → one reusable component.
          </figcaption>
        </figure>
      </section>

      {/* Quick integration patterns */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Integration pattern — server fetch</h3>
          <p className="text-sm mt-2">
            Use conditional requests with ETag to keep pulls fast and cost-efficient.
          </p>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`GET /v1/ports/SGSIN/snapshot
If-None-Match: "etag-from-last-call"

200 OK
ETag: "abc123"
as_of: "2025-09-08T12:00:00Z"
...

304 Not Modified (no body)`}</pre>
          </div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Integration pattern — widget config</h3>
          <p className="text-sm mt-2">
            Cross-port thresholds with a normalized <em>congestion_score</em> make alerts consistent.
          </p>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "ports": ["USLAX","NLRTM","SGSIN"],
  "window": "30d",
  "fields": ["date","avg_wait_hours","congestion_score"],
  "alert": { "threshold": 0.65, "consecutive_days": 5 }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">API endpoints (v1)</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li>GET /v1/health</li>
            <li>GET /v1/meta/sources</li>
            <li>GET /v1/ports/{"{code}"}/overview</li>
            <li>GET /v1/ports/{"{code}"}/trend</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>GET /v1/ports/{"{code}"}/snapshot</li>
            <li>GET /v1/ports/{"{code}"}/dwell</li>
            <li>GET /v1/ports/{"{code}"}/alerts</li>
            <li>GET /v1/hs/{"{code}"}/imports (beta)</li>
          </ul>
        </div>
        <p className="text-xs text-black/60 mt-3">
          Contract-first design: v1 is frozen; breaking changes go to v1beta with a ≥90-day deprecation window.
        </p>
      </section>

      {/* Why us */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Comparable by design</h4>
          <p className="text-sm mt-2">
            Definitions for <em>avg_wait_hours</em>, <em>queue_length</em>, <em>berth_efficiency</em>, and a normalized{" "}
            <em>congestion_score</em>. No more apples-to-oranges across regions.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Transparent SLO</h4>
          <p className="text-sm mt-2">
            Freshness p95 ≤ 2h, edge p95 &lt; 300ms with ≥60% cache-hit target. Timestamps and ETags exposed for audit.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Partner-friendly</h4>
          <p className="text-sm mt-2">
            Redistribution terms, staged rollouts, sandbox keys, and assisted QA to speed up your GTM.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Ready to integrate?</h3>
        <p className="text-sm text-black/70 mt-2">
          Start a 14-day evaluation (up to 5 ports) or talk to us about bundle/redistribution terms.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm hover:bg-black/90 transition"
          >
            See pricing
          </a>
          <a
            href="/contact?intent=partners"
            className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition"
          >
            Partner with us
          </a>
          <a
            href="/play"
            className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition"
          >
            Try the API
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h3 className="text-base font-semibold">FAQ</h3>
        <div className="mt-3 space-y-3">
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">
              Can we redistribute the data in our product?
            </summary>
            <p className="text-sm mt-2">
              Yes. We offer partner licensing for redistribution. Talk to us for bundle pricing and SLO alignment.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">How do you measure freshness?</summary>
            <p className="text-sm mt-2">
              Each response includes <code>as_of</code> / <code>last_updated</code>. Our SLO targets freshness p95 ≤ 2h
              across ports, with monitoring and alerts.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Do JSON and CSV match exactly?</summary>
            <p className="text-sm mt-2">
              Yes. CSV is a first-class contract with strong ETag/304 support for cache-friendly pulls.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}