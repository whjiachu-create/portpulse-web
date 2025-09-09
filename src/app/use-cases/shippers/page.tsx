/* eslint-disable @next/next/no-img-element */
// src/app/use-cases/shippers/page.tsx
export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shippers & Manufacturers — PortPulse Use Cases",
  description:
    "Stabilize inbound S&OP by anticipating port volatility. Comparable congestion & momentum metrics you can wire into planning calendars and supplier playbooks.",
};

export default function ShippersManufacturersPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Shippers &amp; Manufacturers</h1>
        <p className="text-black/70 mt-2">
          Anticipate port volatility and align inbound S&amp;OP. Use comparable congestion &amp; momentum signals
          to set lead-time buffers, qualify alternative gateways, and keep customer promises.
        </p>
      </header>

      {/* Hero */}
      <figure className="mt-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-white">
          <img
            src="/use-cases3/shippers/hero.jpg"
            alt="Inbound planning and S&OP using PortPulse standardized congestion metrics"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <figcaption className="text-xs text-black/60 mt-2">
          One schema across ports, transparent freshness SLOs, and reproducible methods for audit.
        </figcaption>
      </figure>

      {/* Pain / Help / KPIs */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Pain</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Inbound plans whipsaw with hidden weekend bunching and feeder rollovers.</li>
            <li>“Wait time” means different things by port/vendor — hard to compare.</li>
            <li>Freshness is opaque, snapshots are stale during cut-off weeks.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">How we help</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Comparable <em>avg_wait_hours</em>, <em>dwell</em>, and normalized <em>congestion_score</em>.</li>
            <li>Freshness SLO (p95 ≤ 2h) with <code>as_of</code>/<code>last_updated</code> in every response.</li>
            <li>Lane-level rules → auto buffer, gateway alternative, supplier comms.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Result KPIs</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Higher OTIF and fewer expedite costs.</li>
            <li>Lead-time variance down on critical SKUs.</li>
            <li>Cleaner S&amp;OP handoffs with auditable freshness.</li>
          </ul>
        </div>
      </section>

      {/* Story + Demo */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Inbound story — align S&amp;OP to real port momentum</h3>
          <p className="mt-2 text-sm leading-7">
            A consumer electronics OEM faced late-quarter bunching at Asian hubs and rising D&amp;D at destination
            gateways. Screenshots and vendor charts weren’t comparable across ports. With PortPulse, the S&amp;OP team
            wired <em>avg_wait_hours</em> and <em>congestion_score</em> into their planning calendar. Buffer rules
            triggered a controlled +1d on selected lanes, and alternative gateways were evaluated on p95 dwell. OTIF
            improved while expediting dropped double digits.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`curl -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/USNYC/trend?window=30d&fields=date,avg_wait_hours,congestion_score"`}</pre>
          </div>
          <p className="text-xs text-black/60 mt-2">
            The same fields for every port → one rulebook for buffers and exceptions across regions.
          </p>
        </div>

        <figure className="rounded-xl border border-black/10 bg-white p-3">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10">
            <img
              src="/use-cases3/shippers/mini.png"
              alt="Inbound dashboard widget showing current percentile and suggested lead-time buffer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-black/60 mt-2">
            Reusable “inbound lane” widget with last 30 days, current percentile, and a buffer recommendation.
          </figcaption>
        </figure>
      </section>

      {/* Playbook */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Inbound playbook — sense → plan → communicate</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-3">
          <div>
            <h4 className="text-sm font-semibold">Sense</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Track origin POL and downstream hubs for <em>avg_wait_hours</em>/p95 dwell.</li>
              <li>Detect weekend bunching on feeders and transshipment terminals.</li>
              <li>Monitor <em>congestion_score</em> cross-port for simple thresholds.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Plan</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Apply +1d buffer when score ≥ 0.65 for 5 consecutive days.</li>
              <li>Qualify an alternate gateway with lower 14d p95 dwell.</li>
              <li>Route time-sensitive SKUs via the safer hub for the week.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Communicate</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Auto-generate supplier/customer updates with <code>as_of</code> freshness.</li>
              <li>Escalate only on consecutive breaches to avoid alert fatigue.</li>
              <li>Capture exceptions with request IDs for audit.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rule templates */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Rule — buffer day on consecutive breach</h3>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "lane": "CN -> USNE",
  "ports": ["CNSZX","CNSHA","USNYC"],
  "signal": "congestion_score",
  "threshold": 0.65,
  "consecutive_days": 5,
  "action": { "type": "raise_buffer_days", "value": 1 }
}`}</pre>
          </div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Rule — select alternate gateway</h3>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "candidate_ports": ["NLRTM","BEANR","DEHAM"],
  "metric": "dwell_p95_hours",
  "lookback": "14d",
  "select": "min",
  "action": { "type": "recommend_gateway" }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Quick demo */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Quick demo — S&amp;OP buffer helper</h3>
        <p className="text-sm mt-2">Blend absolute hours and normalized score for a weekly buffer suggestion.</p>
        <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
          <pre className="p-3">{`curl -s -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/USNYC/trend?window=30d&fields=date,avg_wait_hours,congestion_score" | jq '.'

// buffer_days = (p95(avg_wait_hours) > 20 ? 1 : 0) + (max(congestion_score) >= 0.7 ? 1 : 0)`}</pre>
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
            Inspectable definitions for <em>avg_wait_hours</em>, <em>dwell</em>, and <em>congestion_score</em>.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Transparent SLO</h4>
          <p className="text-sm mt-2">Freshness p95 ≤ 2h; edge p95 &lt; 300ms; ≥60% cache-hit target.</p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">S&amp;OP-ready</h4>
          <p className="text-sm mt-2">Rules map to buffers, gateway choices, and supplier/customer updates.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Ready to stabilize inbound?</h3>
        <p className="text-sm text-black/70 mt-2">
          Start a 14-day evaluation (up to 5 ports) or talk to us about bundles aligned to your inbound network.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/pricing" className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm hover:bg-black/90 transition">
            See pricing
          </a>
          <a href="/contact?intent=sales" className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">
            Talk to sales
          </a>
          <a href="/play" className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">
            Try the API
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h3 className="text-base font-semibold">FAQ</h3>
        <div className="mt-3 space-y-3">
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">How do we align signals to S&amp;OP cycles?</summary>
            <p className="text-sm mt-2">
              Use daily trend plus 14/30-day windows to drive weekly buffer calls. Our timestamps map cleanly to your calendar.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Can we build supplier-facing scorecards?</summary>
            <p className="text-sm mt-2">
              Yes. Snapshot + trend provide stable inputs; CSV parity simplifies batch jobs with strong ETags.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Do you cover our gateways?</summary>
            <p className="text-sm mt-2">100+ ports live; on-request additions usually onboard within 2–4 weeks under the same schema &amp; SLO.</p>
          </details>
        </div>
      </section>
    </main>
  );
}