export const dynamic = "force-static";

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Security & Compliance</h1>
      <div className="mt-6 grid gap-4">
        <section className="rounded-2xl border border-black/10 bg-white p-5">
          <h2 className="text-lg font-medium">Data Handling</h2>
          <ul className="mt-2 list-disc pl-5 text-black/70">
            <li>No PII collection. Logs retained for 90 days.</li>
            <li>Only public/authorized sources; we do not redistribute proprietary originals.</li>
            <li>Derived indices only; original time series are not re-shared.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-black/10 bg-white p-5">
          <h2 className="text-lg font-medium">API & Infra</h2>
          <ul className="mt-2 list-disc pl-5 text-black/70">
            <li>API key auth with rate limiting and 304/ETag caching.</li>
            <li>Availability target ≥99.5% with external probes.</li>
            <li>Deprecations: ≥90 days parallel support; versioned under <code>/v1</code>.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-black/10 bg-white p-5">
          <h2 className="text-lg font-medium">Contact</h2>
          <p className="mt-2 text-black/70">Report a security issue: <a className="underline" href="mailto:support@useportpulse.com">support@useportpulse.com</a></p>
        </section>
      </div>
    </div>
  );
}
