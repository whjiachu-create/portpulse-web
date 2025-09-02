export const dynamic = "force-static";

function Section({title, children}:{title:string; children:React.ReactNode}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="mt-2 text-black/70">{children}</div>
    </section>
  );
}

export default function Methods() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Data & Methods</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        Overview of inputs, cleaning & standardization, index construction, and freshness SLO. A sampling CSV is provided for evaluation.
      </p>

      <Section title="Inputs">
        <ul className="list-disc pl-5">
          <li>AIS and port call signals</li>
          <li>Schedules and public statistics</li>
          <li>Notices / weather / channel events</li>
        </ul>
      </Section>

      <Section title="Cleaning & standardization">
        <ul className="list-disc pl-5">
          <li>Definition alignment (anchorage / berth / yard)</li>
          <li>Anomaly & drift handling; geo matching (multi-level areas)</li>
          <li>Consistent units and time-bucketing</li>
        </ul>
      </Section>

      <Section title="Indices">
        <ul className="list-disc pl-5">
          <li><b>Congestion</b>: waiting/queue/efficiency composites</li>
          <li><b>Throughput proxy</b>: operational flow proxy with calibration</li>
          <li><b>Momentum (0–100)</b> with MoM/YoY deltas</li>
        </ul>
      </Section>

      <Section title="Quality & SLO">
        <ul className="list-disc pl-5">
          <li>Freshness: Tier-1 ≤2h; Tier-2 ≤6h; long tail daily</li>
          <li>Latency p95 ≤ 300ms (typical)</li>
          <li>Sampling windows documented for backtests</li>
        </ul>
      </Section>

      <Section title="Sampling CSV">
        <p>
          Download a small anonymized sample:{" "}
          <a className="underline" href="/samples/ports_sample.csv" download>ports_sample.csv</a>
        </p>
      </Section>
    </div>
  );
}
