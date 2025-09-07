export default function TrustBar() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md px-4 py-3 shadow-floating">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <span className="font-medium text-slate-800">Developers</span>
        <a className="underline" href="/docs/api">OpenAPI</a>
        <a className="underline" href="/docs/examples">SDK Samples</a>
        <a className="underline" href="/coverage">Coverage</a>
        <a className="underline" href="/status" rel="noreferrer noopener">Status</a>
        <a className="underline" href="/legal/sla">SLA</a>
      </div>
    </div>
  );
}
