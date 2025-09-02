import TrendMini from "@/components/TrendMini";

export const dynamic = "force-static";

export default function MomentumPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Trade Momentum API</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Throughput & momentum indices at port/route level for planning & macro signals.
        Values are normalized to 0–100; use MoM/YoY deltas for change detection.
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-medium mb-2">USLAX — 14d</h3>
          <TrendMini unlocode="USLAX" days={14} />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-medium mb-2">USNYC — 14d</h3>
          <TrendMini unlocode="USNYC" days={14} />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <h3 className="text-sm font-medium mb-2">SGSIN — 14d</h3>
          <TrendMini unlocode="SGSIN" days={14} />
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-black/10 bg-white p-5">
        <h2 className="text-lg font-medium">Quickstart</h2>
        <pre className="mt-3 overflow-auto rounded-xl bg-black text-white text-xs p-4">{`curl -sS -H "X-API-Key: dev_demo_123" \\
  "https://api.useportpulse.com/v1/ports/USLAX/trend?days=14" | jq .points[-3:]`}</pre>
      </section>
    </main>
  );
}
