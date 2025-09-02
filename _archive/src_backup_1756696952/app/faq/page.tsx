export const metadata = { title: "FAQ — PortPulse", description: "Common questions for buyers and engineers." };

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
      <div className="space-y-6 text-slate-700">
        <section>
          <h2 className="font-semibold mb-2">What data do you cover?</h2>
          <p>Congestion, dwell, berth wait and ETA/ETB forecasts for major ports; plus trends, snapshots and alerts.</p>
        </section>
        <section>
          <h2 className="font-semibold mb-2">How fast can we integrate?</h2>
          <p>Most teams go from first test to production in ~30 minutes with our unified schema and SDK samples.</p>
        </section>
        <section>
          <h2 className="font-semibold mb-2">How do you measure quality?</h2>
          <p>We monitor coverage, data freshness and p95 latency — visible on request via status dashboards.</p>
        </section>
      </div>
    </main>
  );
}
