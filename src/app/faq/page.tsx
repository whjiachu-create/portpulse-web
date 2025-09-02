export const dynamic = "force-static";

const faqs = [
  { q: "Do you offer a trial?", a: "Yes. 14-day full feature trial, limited to 5 ports and a reasonable quota." },
  { q: "Data freshness?", a: "Daily T+0 updates by default; once LAX meets targets we move to ≤6h refresh for key ports." },
  { q: "What formats are supported?", a: "JSON by default, CSV export available on key endpoints." },
  { q: "Rate limits?", a: "Plan-based quotas with burst control; usage beyond plan auto-upgrades to the next tier (v1 simplified)." },
  { q: "Status & SLA?", a: "Status page online; target availability ≥99.5%, p95 ≤500 ms on paid plans." },
  { q: "Sources & compliance?", a: "Only public/authorized sources. We do not distribute original proprietary series; derived indexes only." },
  { q: "Support?", a: "Business hours UTC+8 10:00–18:00. P1 incidents: first response within 2 hours." },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
      <div className="mt-8 grid gap-4">
        {faqs.map((item, i) => (
          <details key={i} className="rounded-2xl border border-black/10 bg-white p-5 open:shadow-sm">
            <summary className="cursor-pointer select-none text-base font-medium">{item.q}</summary>
            <p className="mt-2 text-black/70">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
