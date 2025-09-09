export default function MethodsMini() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-xl font-medium">How we build the indices</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-black/70 space-y-1">
            <li><b>Inputs</b>: AIS, schedules, public stats, operational events.</li>
            <li><b>Cleaning &amp; harmonization</b>: geospatial alignment, bias correction, anomaly handling.</li>
            <li><b>Outputs</b>: standardized JSON/CSV, cache-friendly, with freshness SLO.</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <a href="/docs/api" className="rounded-xl border border-black/10 px-4 py-2 text-sm hover:bg-black/5">Open docs</a>
          <a href="/samples/ports_sample.csv" className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90">Download sample CSV</a>
        </div>
      </div>
    </div>
  );
}
