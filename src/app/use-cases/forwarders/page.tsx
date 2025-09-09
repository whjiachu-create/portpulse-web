// src/app/use-cases/forwarders/page.tsx
import Link from "next/link";

export const dynamic = "force-static";

export default function ForwardersUseCasePage() {
    return (
        <main className="container mx-auto px-4 py-10">
            {/* Hero */}
            <section className="mx-auto max-w-4xl">
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Freight Forwarders (3PL) — turn congestion into customer-facing exceptions
                </h1>
                <p className="text-black/70 mt-2">
                    Power portals and emails with standardized port signals. Trigger exception workflows when wait time
                    or queue length breaches lane rules, and export CSV with strong ETags for cheap scheduled jobs.
                </p>
                <figure className="mt-5">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10">
                        <img
                            src="/use-cases3/forwarders/hero.jpg"
                            alt="3PL exception workflows using normalized congestion and dwell signals"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption className="text-xs text-black/60 mt-2">Exception-ready signals for portals, emails, and webhooks</figcaption>
                </figure>
            </section>

            {/* Value cards */}
            <section className="mx-auto max-w-4xl mt-8 grid gap-4 md:grid-cols-2">
                <Card
                    title="Exception rules by lane"
                    points={[
                        "Congestion score > 0.65 for 5 days → alert",
                        "Queue length +30% w/w → reroute recommendation",
                        "Weekend bunching detector for gateway ports"
                    ]}
                />
                <Card
                    title="White-label components"
                    points={[
                        "JSON/CSV parity for your UI and exports",
                        "Sparkline teasers for emails & portal cards",
                        "Unified error body with request_id for support"
                    ]}
                />
                <Card
                    title="Operational reliability"
                    points={[
                        "Freshness SLO p95 ≤ 2h; explicit timestamps",
                        "Edge p95 < 300 ms with strong caching",
                        "ETag/304 for CSV to minimize bandwidth"
                    ]}
                />
                <Card
                    title="Onboarding in hours"
                    points={[
                        "OpenAPI + Postman examples",
                        "5 ports trial; drop into existing cron jobs",
                        "Consistent fields across 100+ ports"
                    ]}
                />
            </section>

            {/* Mini + endpoints */}
            <section className="mx-auto max-w-4xl mt-10 grid gap-6 md:grid-cols-2">
                <figure>
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-black/10">
                        <img
                            src="/use-cases3/forwarders/mini.png"
                            alt="Forwarder portal modules with standardized congestion charts"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption className="text-xs text-black/60 mt-2">Drop-in charts for customer-visible SLAs</figcaption>
                </figure>
                <div>
                    <h3 className="text-lg font-semibold">Endpoints for exception flows</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><Badge>/v1/ports/USLAX/alerts</Badge> — severity + explain fields</li>
                        <li><Badge>/v1/ports/USLAX/trend?days=14&amp;fields=avg_wait_hours,queue_length</Badge></li>
                        <li><Badge>/v1/ports/SGSIN/overview</Badge> — latest snapshot for teasers</li>
                        <li><Badge>/v1/meta/sources</Badge> — source timing for audit</li>
                    </ul>
                    <div className="mt-4">
                        <pre className="text-xs bg-slate-900 text-slate-100 p-3 rounded-lg overflow-auto">
                            {`curl -H "X-API-Key: DEMO_KEY" \\
  "https://api.useportpulse.com/v1/ports/USLAX/alerts"`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Proof and CTAs */}
            <section className="mx-auto max-w-4xl mt-10 grid gap-3 md:grid-cols-3">
                <Pill title="Freshness (p95)" value="≤ 2h" />
                <Pill title="Edge latency (p95)" value="≤ 300ms" />
                <Pill title="CSV ETag" value="304 ready" />
            </section>

            <div className="mx-auto max-w-4xl mt-8 flex gap-3">
                <Link href="/pricing" className="rounded-xl bg-[#0B2740] text-white px-4 py-2 text-sm">Start 14-day evaluation</Link>
                <Link href="/docs/api" className="rounded-xl border border-black/20 px-4 py-2 text-sm hover:bg-black/5">Read the API</Link>
            </div>
        </main>
    );
}

function Card({ title, points }: { title: string; points: string[] }) {
    return (
        <div className="rounded-xl border border-black/10 bg-white p-5">
            <div className="flex items-start gap-3">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-black/70 list-disc pl-5">
                        {points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
function Badge({ children }: { children: React.ReactNode }) {
    return <code className="rounded bg-slate-100 px-2 py-0.5">{children}</code>;
}
function Pill({ title, value }: { title: string; value: string }) {
    return (
        <div className="rounded-xl bg-white border border-black/10 p-4 text-center">
            <div className="text-xs text-black/60">{title}</div>
            <div className="text-base font-medium">{value}</div>
        </div>
    );
}