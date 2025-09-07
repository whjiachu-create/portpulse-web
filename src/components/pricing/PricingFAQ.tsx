export default function PricingFAQ() {
  const faqs = [
    { q: "Is there a free trial? What are the limits?",
      a: "Yes. 14 days with up to 5 ports and fair quota. Same API as paid tiers." },
    { q: "How is rate limiting enforced?",
      a: "Roughly 60 rpm per key with short burst x5. SDKs include backoff & retry." },
    { q: "What happens on overage?",
      a: "For v1 we auto-upgrade to the next tier to keep your jobs running. No surprise per-call fees." },
    { q: "Do you offer refunds or proration?",
      a: "Monthly can cancel anytime to stop next cycle. Annual follows fair-use terms; talk to us for proration." },
    { q: "Is there a yearly discount?",
      a: "Yes — pay 10 months, get 12 months (applied at checkout)." },
    { q: "How is billing handled?",
      a: "Stripe in USD with Stripe Tax for VAT/GST. Invoices emailed and downloadable from the portal." },
    { q: "What's your freshness and latency SLO?",
      a: "Covered ports target freshness p95 ≤ 2h and API latency p95 < 300ms, 99.9% SLA on Pro." },
    { q: "How many ports are covered today? Can you add new ones?",
      a: "Live 50+ now (67 in P1 scope). We can onboard additional ports in ~2–4 weeks, same schema & SLO." },
    { q: "Do CSV and JSON return the same data?",
      a: "Yes. CSV mirrors JSON fields. CSV responses send Cache-Control and ETag for 304 savings." },
    { q: "How should I use caching?",
      a: "Respect Cache-Control: public, max-age=300 and use ETag/If-None-Match for revalidation; SDKs handle this." },
    { q: "What does the error body look like?",
      a: "{ code, message, request_id, hint }. We also return x-request-id header for tracing." },
  ];
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-xl font-medium mb-4">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((it, i) => (
          <details key={i} className="card-floating p-4 group open:shadow-md">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between">
                <span className="font-medium">{it.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
              </div>
            </summary>
            <p className="mt-2 text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
