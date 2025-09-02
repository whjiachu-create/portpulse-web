import Link from "next/link";

export const metadata = {
  title: "Logistics Tech / Analytics Vendors",
  description: "Embed standardized port metrics with contractual SLO and reduce build time.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Logistics Tech / Analytics Vendors</h1>

      <section className="mt-4 grid gap-4 md:grid-cols-2">
        <Block title="Pain points">
          <ul className="list-disc pl-5 text-sm text-black/70"><li>Homegrown port definitions drift across regions</li><li>Customers ask for more ports and better freshness</li></ul>
        </Block>
        <Block title="How we help">
          <ul className="list-disc pl-5 text-sm text-black/70"><li>Drop-in APIs with unified schema and explanations</li><li>On-request expansions in 2–4 weeks</li></ul>
        </Block>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Block title="Metrics you get">
          <ul className="list-disc pl-5 text-sm text-black/70">
            <li>Congestion (waiting hours, queue length, berth efficiency)</li>
            <li>Throughput proxy and momentum (0–100) with deltas</li>
            <li>Snapshots, trends, and alerts (webhook/email/Slack)</li>
          </ul>
        </Block>
        <Block title="Implementation">
          <ul className="list-disc pl-5 text-sm text-black/70">
            <li>API-first, JSON/CSV; copy-paste Quickstart in minutes</li>
            <li>Embed into TMS/ERP/BI; caching and retry friendly</li>
            <li>Typical onboarding: 2–4 weeks for new ports</li>
          </ul>
        </Block>
      </section>

      <section className="mt-6">
        <Block title="Expected outcomes">
          <ul className="list-disc pl-5 text-sm text-black/70"><li>Shorter go-live cycles</li><li>Happier enterprise customers with SLAs</li></ul>
        </Block>
      </section>

      <div className="mt-8 flex gap-3">
        <Link href="/pricing" className="rounded-xl bg-black text-white px-5 py-2 text-sm hover:opacity-90">Start evaluation</Link>
        <Link href="/contact?intent=sales" className="rounded-xl border border-black/10 px-5 py-2 text-sm hover:bg-black/5">Book a call</Link>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-medium mb-2">{title}</div>
      <div>{children}</div>
    </div>
  );
}
