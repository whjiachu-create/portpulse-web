// src/app/legal/sla/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Level Agreement (SLA) — PortPulse",
    description:
        "PortPulse SLA for Pro plan: uptime commitment, measurements, exclusions, incident classes, response targets, service credits, and claim process.",
};

export default function SLAPage() {
    const updated = "2025-09-08";
    return (
        <main className="container mx-auto px-4 py-10 max-w-4xl text-sm leading-6 text-slate-800">
            <h1 className="text-2xl font-semibold text-slate-900">Service Level Agreement (SLA)</h1>
            <p className="mt-2 text-slate-600">
                Effective date: <b>{updated}</b>. This SLA applies to customers on the <b>Pro</b> plan (or as stated in an Order
                Form). Capitalized terms not defined here have the meanings in the Terms of Service.
            </p>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">1) Monthly Uptime Percentage (MUP)</h2>
                <p className="mt-2">
                    We commit to a Monthly Uptime Percentage of <b>99.9%</b> for public API endpoints. Uptime is measured via our
                    external probes at multiple regions. “Downtime” excludes scheduled maintenance (with notice), force majeure,
                    customer-side issues, Internet/ISP failures, and third-party outages beyond our control.
                </p>
                <div className="mt-2 overflow-x-auto">
                    <table className="min-w-[520px] text-xs">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-1 pr-4">MUP</th>
                                <th className="py-1">Service Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-1 pr-4">99.0% ≤ MUP &lt; 99.9%</td>
                                <td className="py-1">5% of the monthly fee</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">95.0% ≤ MUP &lt; 99.0%</td>
                                <td className="py-1">10% of the monthly fee</td>
                            </tr>
                            <tr>
                                <td className="py-1 pr-4">MUP &lt; 95.0%</td>
                                <td className="py-1">25% of the monthly fee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">
                    Credits are applied to the next invoice and represent your sole and exclusive remedy for SLA breaches. Credits
                    are capped at fees paid for the affected month.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">2) Measurements & reporting</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>We use independent uptime checks (e.g., Better Stack/Uptime) from multiple regions.</li>
                    <li>Requests to <code>/v1/health</code> and representative read endpoints are included in availability checks.</li>
                    <li>We publish incident summaries on the status page when applicable.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">3) Incident classes & targets</h2>
                <div className="mt-2 overflow-x-auto">
                    <table className="min-w-[620px] text-xs">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-1 pr-4">Severity</th>
                                <th className="py-1 pr-4">Example</th>
                                <th className="py-1 pr-4">Initial Response</th>
                                <th className="py-1">Mitigation Target</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-1 pr-4">SEV-1</td>
                                <td className="py-1 pr-4">API unavailable for most customers</td>
                                <td className="py-1 pr-4">&lt; 15 minutes</td>
                                <td className="py-1">Restore core availability &lt; 1 hour</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">SEV-2</td>
                                <td className="py-1 pr-4">Degraded performance or elevated error rates</td>
                                <td className="py-1 pr-4">&lt; 30 minutes</td>
                                <td className="py-1">Stabilize &lt; 4 hours</td>
                            </tr>
                            <tr>
                                <td className="py-1 pr-4">SEV-3</td>
                                <td className="py-1 pr-4">Minor functional impact; partial region issue</td>
                                <td className="py-1 pr-4">&lt; 1 business hour</td>
                                <td className="py-1">Workaround or fix &lt; 2 business days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">
                    Targets are best-effort SLOs, not guarantees; credits are based solely on MUP as defined above.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">4) Maintenance & exclusions</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Scheduled maintenance will be announced in advance and typically occurs during low-traffic windows.</li>
                    <li>
                        Exclusions include: force majeure, Internet routing/ISP failures, issues caused by your code or infrastructure,
                        misuse or breach of Terms, and third-party provider outages outside our reasonable control.
                    </li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">5) Claim process</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        Submit claims within <b>30 days</b> after the month ends to{" "}
                        <a className="underline" href="mailto:support@useportpulse.com">
                            support@useportpulse.com
                        </a>{" "}
                        with request IDs, timestamps, and impact description.
                    </li>
                    <li>We will validate against our logs and status provider data and respond within 15 business days.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">6) Changes</h2>
                <p className="mt-2">We may update this SLA on renewal or with notice as permitted by the Terms of Service.</p>
            </section>
        </main>
    );
}