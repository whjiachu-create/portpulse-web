import Link from "next/link";

const roles = [
  {
    title: "Shippers / Ops Planning",
    pain: "Unstable berth/arrival cadence makes capacity and drayage reactive.",
    offer: "Unified congestion & dwell metrics plus trade momentum at port/route granularity.",
    outcome: "More stable weekly planning, earlier anomaly detection, lower D&D & expedite costs."
  },
  {
    title: "Forwarders / Network Ops",
    pain: "Many ports, no common language to align expectations.",
    offer: "Standardized JSON/CSV APIs + optional webhooks; drop-in for TMS/BI.",
    outcome: "Quantified comms, faster exception handling, clearer differentiation."
  },
  {
    title: "Procurement / S&OP",
    pain: "Replenishment slips with port volatility; hard to justify decisions.",
    offer: "0–100 trade momentum index + congestion score with YoY/MoM tracking.",
    outcome: "Better lane/port choices; reduced premium buys and stockout risk."
  },
  {
    title: "Risk / Research",
    pain: "Macro indicators lag; bottlenecks show up too late.",
    offer: "Daily/weekly time series with 30-day replay; fully auditable fields.",
    outcome: "Earlier supply–demand signals for trading and credit risk."
  },
  {
    title: "Data / ML Teams",
    pain: "Multi-source cleaning & schema drift slow pipelines; unstable contracts break jobs.",
    offer: "API-first, frozen /v1 schema, ETag/304, consistent error body, observable SLOs.",
    outcome: "5-minute hello world, stable pipelines, faster iteration."
  },
];

export default function RoleGridEN(){
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">Who we help · Problems we solve</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {roles.map((r)=>(
          <article key={r.title} className="card p-5">
            <div className="text-sm font-medium">{r.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-black/80">
              <li><span className="font-medium">Pain:</span> {r.pain}</li>
              <li><span className="font-medium">What you get:</span> {r.offer}</li>
              <li><span className="font-medium">Outcome:</span> {r.outcome}</li>
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/use-cases" className="text-sm underline hover:no-underline">See full use cases →</Link>
      </div>
    </section>
  );
}
