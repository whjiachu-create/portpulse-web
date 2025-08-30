export const metadata = { title: "Security — PortPulse", description: "Security, reliability and support overview." };

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Security</h1>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>Transport security: HTTPS/TLS 1.2+; signed responses where required.</li>
        <li>Access control: API keys with per-customer rate limits and audit trails.</li>
        <li>Reliability: multi-region failover, error budgets and p95 latency SLOs.</li>
        <li>Data handling: minimal PII; retention and deletion policies documented.</li>
      </ul>
    </main>
  );
}
