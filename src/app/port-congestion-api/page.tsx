export const metadata = {
  title: "Port Congestion API",
  description: "Waiting hours, queue length, and berth efficiency — normalized across regions with one schema.",
};
export default function PortCongestionLanding() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Port Congestion API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Normalize waiting time &amp; operational flow metrics across regions. One schema, consistent definitions.
      </p>
      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-medium">Key fields</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
          <li><code>waiting_hours</code> (mean, p50, p90)</li>
          <li><code>queue</code> (anchorage vessels)</li>
          <li><code>berth_efficiency</code> (0–1 proxy)</li>
        </ul>
        <div className="mt-4">
          <a href="/docs/api" className="text-sm underline text-[#0B2740]">Open API schemas</a>
        </div>
      </section>
    </div>
  );
}
