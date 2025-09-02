export const metadata = {
  title: "Data & Methods — PortPulse",
  description: "Inputs, cleaning, index construction, and SLO. Download a sample CSV.",
  openGraph: {
    title: "Data & Methods — PortPulse",
    description: "How we build and validate congestion & momentum indices.",
    url: "https://useportpulse.com/methods",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Data & Methods — PortPulse",
    description: "Inputs, cleaning, index construction, and SLO.",
  },
};

export default function MethodsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Data &amp; Methods</h1>
      <p className="mt-2 text-black/60 max-w-3xl">
        A concise overview of inputs, harmonization and index construction. Full details are available to customers under NDA.
      </p>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Inputs">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>AIS signals (terrestrial &amp; satellite)</li>
            <li>Schedules &amp; public statistics</li>
            <li>Operational events &amp; advisories</li>
            <li>Weather &amp; channel disruptions</li>
          </ul>
        </Card>
        <Card title="Cleaning &amp; harmonization">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Geo-alignment (anchorage/berth/basin)</li>
            <li>Bias correction &amp; anomaly handling</li>
            <li>Comparable port definitions</li>
            <li>Change logs &amp; deprecations</li>
          </ul>
        </Card>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <Card title="Indices">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Congestion: waiting hours, queue, berth efficiency</li>
            <li>Throughput proxies: port/route level</li>
            <li>Momentum: standardized 0–100 with deltas</li>
          </ul>
        </Card>
        <Card title="SLO &amp; validation">
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Freshness targets by port tier</li>
            <li>Latency distributions (p95)</li>
            <li>Sampling &amp; backtests</li>
          </ul>
        </Card>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-lg font-medium">Download sample CSV</div>
            <p className="text-black/60 text-sm">Two ports · one week · anonymized fields.</p>
          </div>
          <a href="/samples/ports_sample.csv" className="rounded-xl bg-[#0B2740] text-white px-5 py-2 text-sm hover:opacity-90">Download</a>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }:{title:string; children:React.ReactNode}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium">{title}</div>
      {children}
    </div>
  );
}
