/* eslint-disable @next/next/no-img-element */
// src/app/use-cases/macro/page.tsx
export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Macro & Quant — PortPulse Use Cases",
  description:
    "Throughput proxies and momentum for macro & quant teams. Standardized time series, replay windows, and CSV/JSON parity for robust signals.",
};

export default function MacroQuantPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold">Macro &amp; Quant</h1>
        <p className="text-black/70 mt-2">
          Build shipping-based throughput proxies and momentum factors with standardized, auditable series. Use
          replay windows to backtest; deploy to production with a stable /v1 contract.
        </p>
      </header>

      {/* Hero */}
      <figure className="mt-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-white">
          <img
            src="/use-cases3/macro/hero.jpg"
            alt="Macro and quant research using PortPulse congestion & throughput proxies"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <figcaption className="text-xs text-black/60 mt-2">
          Comparable congestion/throughput proxies, transparent freshness, and a 30-day replay for audit &amp; backtests.
        </figcaption>
      </figure>

      {/* Pain / Help / KPIs */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Pain</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Heterogeneous sources; inconsistent fields and survivorship bias.</li>
            <li>Latency unclear; snapshots mutate without audit trail.</li>
            <li>CSV vs JSON mismatch breaks pipelines and checks.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">How we help</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Unified definitions (e.g., <em>avg_wait_hours</em>, normalized <em>congestion_score</em>).</li>
            <li>Freshness SLO (p95 ≤ 2h), <code>as_of</code>/<code>last_updated</code>, and request IDs.</li>
            <li>CSV/JSON parity with strong ETag/304; 30-day replay window.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-semibold">Result KPIs</h3>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>Faster time-to-signal for nowcasts.</li>
            <li>Higher hit-rate of factors in live.</li>
            <li>Lower maintenance and fewer schema breaks.</li>
          </ul>
        </div>
      </section>

      {/* Story + Demo */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Research note — shipping momentum as a proxy</h3>
          <p className="mt-2 text-sm leading-7">
            A macro fund needed a robust port congestion momentum factor to improve cyclical exposure timing. DIY feeds
            suffered from mutation and definitional drift. With PortPulse, the team built a rolling z-score of{" "}
            <em>avg_wait_hours</em> blended with a bounded <em>congestion_score</em>. A 30-day replay window ensured
            auditability, and CSV parity simplified backtests with reproducible pulls.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`curl -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/SGSIN/trend?window=180d&fields=date,avg_wait_hours,congestion_score"`}</pre>
          </div>
          <p className="text-xs text-black/60 mt-2">
            Replay windows + timestamps → stable research &amp; live parity. Use ETags for efficient re-pulls.
          </p>
        </div>

        <figure className="rounded-xl border border-black/10 bg-white p-3">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-black/10">
            <img
              src="/use-cases3/macro/mini.png"
              alt="Example factor widget with rolling z-score and bounded congestion index"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-black/60 mt-2">
            Example factor visualization: rolling z-score of wait hours blended with a bounded congestion index.
          </figcaption>
        </figure>
      </section>

      {/* Playbook */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Macro/Quant playbook — design → backtest → deploy</h3>
        <div className="grid gap-4 md:grid-cols-3 mt-3">
          <div>
            <h4 className="text-sm font-semibold">Design</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Choose ports that proxy your trade flows or indices.</li>
              <li>Normalize with <em>congestion_score</em> for cross-port comparability.</li>
              <li>Use p95 hours to reduce outlier impact.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Backtest</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Pull replay windows and freeze vintages for audit.</li>
              <li>Blend daily series into weekly factors to match re-hedge cadence.</li>
              <li>Track look-ahead bias by aligning timestamps explicitly.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Deploy</h4>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
              <li>Guardrails on freshness; alert on SLO breach.</li>
              <li>Cache with ETag/304; fall back to last good snapshot if needed.</li>
              <li>Version factors and store request IDs for reproducibility.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Signal templates */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Signal — rolling z-score of wait hours</h3>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "ports": ["SGSIN","NLRTM","USLAX"],
  "lookback": "180d",
  "signal": "zscore(avg_wait_hours, window=60)",
  "blend": { "congestion_score": 0.3 }
}`}</pre>
          </div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5">
          <h3 className="text-base font-semibold">Event — change-point on congestion</h3>
          <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
            <pre className="p-3">{`{
  "port": "SGSIN",
  "series": "congestion_score",
  "method": "change_point",
  "min_magnitude": 0.15,
  "action": { "type": "notify", "channel": "research-slack" }
}`}</pre>
          </div>
        </div>
      </section>

      {/* Quick demo */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Quick demo — simple momentum</h3>
        <p className="text-sm mt-2">
          Create a bounded momentum signal from last 90 days (0–1), then test correlation with your target series.
        </p>
        <div className="mt-3 rounded-lg bg-slate-900 text-slate-100 text-xs overflow-auto">
          <pre className="p-3">{`curl -s -H "X-API-Key: DEMO_KEY" \\
"https://api.useportpulse.com/v1/ports/NLRTM/trend?window=90d&fields=date,avg_wait_hours,congestion_score" | jq '.'

// momentum = 0.6 * zscore(avg_wait_hours, 45d) + 0.4 * max(congestion_score_last_7d)`}</pre>
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
          Contract-first: v1 is frozen; breaking changes move to v1beta with a ≥90-day deprecation window.
        </p>
      </section>

      {/* Why us */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Comparable by design</h4>
          <p className="text-sm mt-2">Normalized fields across ports; inspectable definitions &amp; methods.</p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Replay &amp; audit</h4>
          <p className="text-sm mt-2">30-day replay; timestamps &amp; request IDs; CSV parity for research jobs.</p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4">
          <h4 className="text-sm font-semibold">Production-ready</h4>
          <p className="text-sm mt-2">ETags, freshness SLOs, and a frozen /v1 contract for stable deployment.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-xl border border-black/10 bg-white p-5">
        <h3 className="text-base font-semibold">Ship your factor faster</h3>
        <p className="text-sm text-black/70 mt-2">
          Start a 14-day evaluation (up to 5 ports) or talk to us about coverage packs tailored to your universe.
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
            <summary className="cursor-pointer text-sm font-medium">How do you prevent series mutation?</summary>
            <p className="text-sm mt-2">
              We expose <code>as_of</code>/<code>last_updated</code> and provide a 30-day replay window. Keep vintages to lock research.
            </p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Do CSV and JSON match 1:1?</summary>
            <p className="text-sm mt-2">Yes. CSV is a first-class contract with strong ETag/304 for efficient pulls.</p>
          </details>
          <details className="rounded-lg border border-black/10 bg-white p-4">
            <summary className="cursor-pointer text-sm font-medium">Can we get region/sector packs?</summary>
            <p className="text-sm mt-2">Yes. Talk to us about Port Packs and Hi-Confidence add-ons for your scope.</p>
          </details>
        </div>
      </section>
    </main>
  );
}