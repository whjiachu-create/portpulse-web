export const metadata = {
  title: "Trade Momentum Index",
  description: "Port/route-level throughput proxies and momentum (0–100) with deltas for planning and macro signals.",
};
export default function TradeMomentumLanding() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum Index</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Standardized 0–100 momentum built on throughput proxies, with week/month deltas. Suitable for S&amp;OP and macro.
      </p>
      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-medium">What’s included</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
          <li><code>momentum_0_100</code> (standardized index)</li>
          <li><code>delta_mom</code> (normalized change)</li>
          <li>Snapshots and 7–30d trend windows</li>
        </ul>
        <div className="mt-4">
          <a href="/product/momentum" className="text-sm underline text-[#0B2740]">See product page</a>
        </div>
      </section>
    </div>
  );
}
