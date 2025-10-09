// src/app/use-cases/lsp/page.tsx
export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freight Forwarders (3PL) — PortPulse Use Cases",
  description:
    "Stabilize routing and capacity with comparable, port-level congestion & momentum signals. Build lane buffers, exceptions, and alternatives with an API-first contract.",
};

export default function FreightForwardersPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Freight forwarders (3PL)</h1>
        <p className="text-black/70 mt-2">
          Stabilize routing and capacity with port-level truth. Comparable metrics across regions let ops teams
          set lane buffers, trigger exceptions, and evaluate alternative POL/POD before booking.
        </p>
      </header>

      {/* Hero */}
      <figure className="mt-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-white">
          <img
            src="/use-cases3/lsp/hero.jpg"
            alt="3PL control tower using PortPulse congestion & momentum signals"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <figcaption className="text-xs text-black/60 mt-2">
          One schema, reproducible methods, audit-friendly freshness for lane planning and exception automation.
        </figcaption>
      </figure>

      {/* Pain / Help / KPIs */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Pain</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Volatile delays across trunk & feeder legs; weekend bunching.</li>
            <li>DIY “wait time” definitions differ by port and vendor.</li>
            <li>Stale snapshots and opaque freshness break customer updates.</li>
            <li>Hard to compare gateways for alternative routings.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">How we help</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Comparable <em>avg_wait_hours</em>, <em>dwell</em>, and normalized <em>congestion_score</em>.</li>
            <li>Freshness SLO (p95 ≤ 2h) with <code>as_of</code>/<code>last_updated</code> for audit.</li>
            <li>Lane-level rules, alerts, and buffer recommendations you can automate.</li>
            <li>CSV/JSON parity with strong ETag/304 to keep pulls fast and cheap.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Result KPIs</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Lower average delay vs. plan on key SKUs.</li>
            <li>Fewer exceptions & rehandles in cut-off weeks.</li>
            <li>Reduced demurrage & detention (D&amp;D) exposure.</li>
            <li>Higher OTIF and customer trust in status updates.</li>
          </ul>
        </div>
      </section>

      {/* Story + Demo */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Ops story — from screens to contract</h3>
          <p className="mt-2 text-sm leading-7">
            A regional control tower relied on screenshots and vendor dashboards to flag port issues, but the
            definitions behind “waiting time” varied. Weekend bunching in South China caused last-minute truck
            reschedules and rolled cargo. PortPulse exposed consistent <em>avg_wait_hours</em> and a normalized{" "}
            <em>congestion_score</em> across LA/LB, Singapore, and feeder hubs. Within a week, the team moved to
            lane rules and Slack/webhook alerts. Rolled cargo dropped, and buffer days could be justified with data.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`curl -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/CNSZX/trend?days=30&fields=date,avg_wait_hours,congestion_score"`}</pre>
          </div>
          <p className="text-xs text-black/60 mt-2">
            Use the same fields for every port. Add a single cross-port threshold (e.g., <code>congestion_score ≥ 0.65</code>)
            to standardize alerts and buffers.
          </p>
        </div>

        <figure className="rounded-xl border border-black/10 bg-white p-3">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10">
            <img
              src="/use-cases3/lsp/mini.png"
              alt="Lane widget showing 30-day wait trend and a buffer suggestion"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-black/60 mt-2">
            A reusable “lane” widget: last 30 days, current percentile, and a recommended buffer window.
          </figcaption>
        </figure>
      </section>

      {/* Playbook */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">3PL playbook — monitor → decide → act</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-3">
          <div>
            <h4 className="text-sm font-semibold">Monitor</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Track <em>avg_wait_hours</em> and <em>congestion_score</em> for origin POL and downstream hubs.</li>
              <li>Watch weekend bunching patterns on feeder transshipment hubs.</li>
              <li>Keep an eye on p95 dwell for risky terminals (rollover hotspots).</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Decide</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Raise lane buffer when score ≥ 0.65 for 5 consecutive days.</li>
              <li>Prefer alternative gateway with lower p95 dwell in the last 14 days.</li>
              <li>Escalate when feeder rollover ratio exceeds policy threshold.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Act</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Push Slack/webhook exception with last 5 points and action hint.</li>
              <li>Auto-populate customer status with consistent definitions & freshness.</li>
              <li>Trigger booking rules to switch gateway or adjust cut-off.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rule templates */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Rule template — raise lane buffer</h3>
          <p className="text-sm mt-2">Use a single, cross-port policy for apples-to-apples automation.</p>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "lane": "APAC -> USWC",
  "ports": ["CNSZX","CNSHA","USLAX","USLGB"],
  "signal": "congestion_score",
  "threshold": 0.65,
  "consecutive_days": 5,
  "action": { "type": "raise_buffer_days", "value": 1 }
}`}</pre>
          </div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Rule template — choose alternative gateway</h3>
          <p className="text-sm mt-2">Compare percentiles on recent dwell and pick the safer gateway.</p>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "candidate_ports": ["NLRTM","BEANR","FRLEH"],
  "metric": "dwell_p95_hours",
  "lookback": "14d",
  "select": "min",
  "action": { "type": "recommend_gateway" }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Quick demo: fetch & rank */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Quick demo — fetch & rank gateways</h3>
        <p className="text-sm mt-2">
          Pull last 30 days and compute a simple risk score that blends absolute hours and normalized congestion.
        </p>
        <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
          <pre className="p-3">{`curl -s -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/NLRTM/trend?days=30&fields=date,avg_wait_hours,congestion_score" | jq '.'

// Combine with BEANR/FRLEH, compute:
// risk = 0.6 * p95(avg_wait_hours) + 0.4 * max(congestion_score)
// Pick the min-risk gateway for the week.`}</pre>
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
          Contract-first: v1 is frozen; breaking changes go to v1beta with a ≥90-day deprecation window.
        </p>
      </section>

      {/* Why us */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Comparable by design</h4>
          <p className="text-sm mt-2">
            <em>avg_wait_hours</em>, <em>queue_length</em>, <em>berth_efficiency</em>, and normalized{" "}
            <em>congestion_score</em> — definitions you can inspect and trust.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Transparent SLO</h4>
          <p className="text-sm mt-2">
            Freshness p95 ≤ 2h; edge p95 &lt; 300ms with ≥60% cache-hit target; timestamps & ETags for audit.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Ops-ready</h4>
          <p className="text-sm mt-2">
            Lane rules, alerts, and buffers map directly to 3PL workflows and customer updates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Start in days, not months</h3>
        <p className="text-sm text-black/70 mt-2">
          Start a 14-day evaluation (up to 5 ports) or talk to us about bundles for network-wide coverage.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm hover:bg-black/90 transition"
          >
            See pricing
          </a>
          <a
            href="/contact?intent=sales"
            className="inline-flex items-center rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition"
          >
            Talk to sales
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
              How do we set the same rule across different ports?
            </summary>
            <p className="text-sm mt-2">
              Use the normalized <em>congestion_score</em> with a common threshold (e.g., 0.65) and consecutive-day
              logic. Combine with absolute hours for guardrails.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Can we automate customer updates?</summary>
            <p className="text-sm mt-2">
              Yes. Use our snapshot/trend endpoints to drive a templated status message with consistent definitions
              and <code>as_of</code> freshness.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Does CSV match JSON exactly?</summary>
            <p className="text-sm mt-2">
              Yes — CSV is a first-class contract. It supports strong ETag/304 for cache-friendly pulls in schedulers.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">What about transshipment volatility?</summary>
            <p className="text-sm mt-2">
              Track feeder rollover and yard dwell p95 at key hubs. Use rule templates to raise buffer or route via
              a safer gateway when variance spikes.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}