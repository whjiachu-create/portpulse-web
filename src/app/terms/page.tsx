// src/app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — PortPulse",
    description:
        "PortPulse Terms of Service (ToS). Subscription, API usage, service availability, acceptable use, SLA (Pro), billing, data & privacy, and legal terms.",
};

export default function TermsPage() {
    const updated = "2025-09-08";
    return (
        <main className="container mx-auto px-4 py-10 max-w-4xl text-sm leading-6 text-slate-800">
            <h1 className="text-2xl font-semibold text-slate-900">PortPulse Terms of Service</h1>
            <p className="mt-2 text-slate-600">
                Effective date: <b>{updated}</b>. These Terms of Service (“<b>Terms</b>”) govern access to and use of the
                PortPulse APIs, websites, and related services (collectively, the “<b>Service</b>”). By creating an account,
                starting a trial, or using an API key, you agree to these Terms.
            </p>

            <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 p-4">
                <div className="font-medium mb-2">Quick index</div>
                <ol className="grid md:grid-cols-2 gap-y-1 list-decimal list-inside">
                    {[
                        ["1. Who we are", "#who"],
                        ["2. Eligibility & accounts", "#eligibility"],
                        ["3. Trials & evaluation", "#trial"],
                        ["4. Subscriptions, renewals & fees", "#billing"],
                        ["5. Taxes & invoices", "#tax"],
                        ["6. API keys, security & rate limits", "#keys"],
                        ["7. License & permitted use", "#license"],
                        ["8. Prohibited uses", "#prohibited"],
                        ["9. Service levels (SLO/SLA)", "#sla"],
                        ["10. Changes & deprecations", "#changes"],
                        ["11. Data, privacy & logs", "#privacy"],
                        ["12. Third-party sources & beta", "#thirdparty"],
                        ["13. IP ownership & feedback", "#ip"],
                        ["14. Confidentiality", "#confidentiality"],
                        ["15. Indemnities", "#indemnity"],
                        ["16. Disclaimers", "#disclaimer"],
                        ["17. Limitation of liability", "#limitation"],
                        ["18. Suspension & termination", "#termination"],
                        ["19. Compliance & export", "#compliance"],
                        ["20. Governing law & disputes", "#law"],
                        ["21. Miscellaneous", "#misc"],
                        ["22. Contact", "#contact"],
                    ].map(([label, href]) => (
                        <li key={href}>
                            <a className="underline underline-offset-2 text-slate-900" href={href}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>

            <section id="who" className="mt-8">
                <h2 className="text-lg font-semibold">1) Who we are</h2>
                <p className="mt-2">
                    “<b>PortPulse</b>” refers to the provider of the Service. References to “<b>we</b>,” “<b>us</b>,” or “<b>our</b>”
                    mean PortPulse and its affiliates. We operate an API-first data service that standardizes port operations metrics
                    (e.g., congestion, dwell, trend, snapshots, and alerts) in JSON/CSV.
                </p>
            </section>

            <section id="eligibility" className="mt-8">
                <h2 className="text-lg font-semibold">2) Eligibility & accounts</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Business use only. You represent that you are acting for a business and have authority to bind it.</li>
                    <li>You must provide accurate registration information and keep it current.</li>
                    <li>You are responsible for all activities under your account and for maintaining credential security.</li>
                </ul>
            </section>

            <section id="trial" className="mt-8">
                <h2 className="text-lg font-semibold">3) Trials & evaluation</h2>
                <p className="mt-2">
                    We may offer a 14-day evaluation (up to 5 ports) for non-production testing. Trials are provided “as is”
                    without SLA or credits and may be modified or discontinued at any time.
                </p>
            </section>

            <section id="billing" className="mt-8">
                <h2 className="text-lg font-semibold">4) Subscriptions, renewals & fees</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        Plans: Lite, Starter, and Pro (see Pricing page). Fees are billed in USD via our payment processor
                        (e.g., Stripe) and auto-renew monthly or annually unless canceled per this Section.
                    </li>
                    <li>
                        Auto-renewal & cancellation: Subscriptions renew for successive terms unless you cancel in the customer
                        portal before the renewal date. Cancellations take effect at the end of the current term.
                    </li>
                    <li>No refunds for partial periods, unused capacity, or downgrades within a term unless required by law.</li>
                    <li>
                        Usage caps: If usage exceeds plan limits (e.g., ports or requests), you consent to upgrade or overage
                        handling as described on the Pricing page or Order Form.
                    </li>
                    <li>We may update pricing on renewal with prior notice.</li>
                </ul>
            </section>

            <section id="tax" className="mt-8">
                <h2 className="text-lg font-semibold">5) Taxes & invoices</h2>
                <p className="mt-2">
                    Fees are exclusive of taxes. Where applicable, we will collect and remit taxes (e.g., VAT/GST) via our
                    processor. You are responsible for any other taxes, duties, or government charges related to your purchase.
                </p>
            </section>

            <section id="keys" className="mt-8">
                <h2 className="text-lg font-semibold">6) API keys, security & rate limits</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>API access requires a valid key (e.g., <code>pp_live_*</code> / <code>pp_dev_*</code>) tied to your account.</li>
                    <li>Keep keys confidential. Do not share, post, or embed keys in client-side public code.</li>
                    <li>
                        Default rate limits: ~60 requests per minute (burst ×5) unless otherwise specified. We may throttle or
                        suspend for abuse or security reasons.
                    </li>
                    <li>
                        Caching: We encourage honoring <code>Cache-Control</code> and <code>ETag</code> for CSV/JSON to improve performance.
                    </li>
                </ul>
            </section>

            <section id="license" className="mt-8">
                <h2 className="text-lg font-semibold">7) License & permitted use</h2>
                <p className="mt-2">
                    Subject to these Terms and timely payment, we grant you a non-exclusive, non-transferable, revocable license to
                    access the Service and use the outputs (JSON/CSV) internally within your organization for business purposes,
                    including analysis, dashboards, and decision support, and to create derived works and visualizations.
                </p>
                <p className="mt-2">
                    You may store and cache outputs for internal use, audit, and reproducibility. You must retain our field naming
                    and units when claiming comparability across ports.
                </p>
            </section>

            <section id="prohibited" className="mt-8">
                <h2 className="text-lg font-semibold">8) Prohibited uses</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Resale or sublicensing of raw API responses or bulk redistribution to third parties is prohibited.</li>
                    <li>Building a directly competing raw-data API using our outputs is prohibited.</li>
                    <li>
                        Using the Service to process or infer sensitive personal data, or to track individuals or specific vessels
                        in violation of law or data-source terms, is prohibited.
                    </li>
                    <li>Security testing (e.g., scraping, scanning, DDoS), circumvention of rate limits, or credential sharing.</li>
                    <li>Illegal, harmful, or high-risk uses (e.g., sanctions evasion, export control violations).</li>
                </ul>
            </section>

            <section id="sla" className="mt-8">
                <h2 className="text-lg font-semibold">9) Service levels (SLO/SLA)</h2>
                <p className="mt-2">
                    <b>SLO (all plans):</b> We target freshness p95 ≤ 2h and endpoint latency p95 &lt; 300ms with caching. These are
                    targets and not guarantees.
                </p>
                <p className="mt-2">
                    <b>SLA (Pro plan only):</b> Monthly Uptime Percentage (“MUP”) 99.9%. Downtime means unavailability of the public
                    API endpoints measured by our external probes, excluding: scheduled maintenance (with notice), force majeure,
                    customer-side issues, Internet/ISP failures, and third-party outages outside our control.
                </p>
                <div className="mt-2 overflow-x-auto">
                    <table className="min-w-[480px] text-xs">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-1 pr-4">MUP (Pro)</th>
                                <th className="py-1">Service Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-1 pr-4">99.0% ≤ MUP &lt; 99.9%</td>
                                <td className="py-1">5% of monthly fee</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">95.0% ≤ MUP &lt; 99.0%</td>
                                <td className="py-1">10% of monthly fee</td>
                            </tr>
                            <tr>
                                <td className="py-1 pr-4">MUP &lt; 95.0%</td>
                                <td className="py-1">25% of monthly fee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">
                    Credits are your sole remedy for SLA breaches, capped at fees paid for the affected month, and require your
                    written request within 30 days after the month ends.
                </p>
            </section>

            <section id="changes" className="mt-8">
                <h2 className="text-lg font-semibold">10) Changes & deprecations</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>We may improve or modify the Service. Breaking changes will be versioned (e.g., <code>/v1beta</code>).</li>
                    <li>Deprecated endpoints will have a deprecation window of at least 90 days where feasible.</li>
                    <li>We may publish a changelog and migration guidance for significant changes.</li>
                </ul>
            </section>

            <section id="privacy" className="mt-8">
                <h2 className="text-lg font-semibold">11) Data, privacy & logs</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        We process minimal account and billing data and store request logs (including timestamp and <code>x-request-id</code>)
                        for operations, support, security, and audit.
                    </li>
                    <li>
                        We do not require end-user personal data to use the Service. Do not send us sensitive personal information.
                    </li>
                    <li>
                        Data retention: operational logs are typically retained for &le; 30 days unless longer retention is required
                        for security or legal reasons.
                    </li>
                    <li>Your use is also subject to our Privacy Policy (if applicable).</li>
                </ul>
            </section>

            <section id="thirdparty" className="mt-8">
                <h2 className="text-lg font-semibold">12) Third-party sources & beta</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        Some metrics are derived from public or licensed sources (e.g., port notices, vessel events). Availability
                        may vary by region and time; we do not warrant uninterrupted access to third-party sources.
                    </li>
                    <li>
                        Beta/preview features are provided “as is,” may change at any time, and are excluded from SLA and credits.
                    </li>
                </ul>
            </section>

            <section id="ip" className="mt-8">
                <h2 className="text-lg font-semibold">13) IP ownership & feedback</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        We retain all rights, title, and interest in the Service, software, documentation, and data models.
                        No rights are granted except as expressly set forth.
                    </li>
                    <li>
                        You own your input data and your internal analyses and dashboards. You grant us a non-exclusive license to
                        use your feedback to improve the Service without restriction or compensation.
                    </li>
                </ul>
            </section>

            <section id="confidentiality" className="mt-8">
                <h2 className="text-lg font-semibold">14) Confidentiality</h2>
                <p className="mt-2">
                    Each party may receive non-public information marked or reasonably understood as confidential. The receiving
                    party will use such information only to perform under these Terms and protect it using reasonable measures.
                    Exclusions apply (e.g., public, independently developed, or lawfully obtained information).
                </p>
            </section>

            <section id="indemnity" className="mt-8">
                <h2 className="text-lg font-semibold">15) Indemnities</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        <b>By you:</b> You will defend and indemnify us against third-party claims arising from your content, your
                        misuse of the Service, or your violation of these Terms or applicable laws.
                    </li>
                    <li>
                        <b>By us (IP only):</b> We will defend and indemnify you against third-party claims alleging the Service
                        directly infringes intellectual property rights, except to the extent the claim arises from your content,
                        combinations not provided by us, or your modifications. Our obligations are conditioned on timely notice and
                        your reasonable cooperation.
                    </li>
                </ul>
            </section>

            <section id="disclaimer" className="mt-8">
                <h2 className="text-lg font-semibold">16) Disclaimers</h2>
                <p className="mt-2">
                    THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                    WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                    DATA SOURCES MAY BE DELAYED, INCOMPLETE, OR UNAVAILABLE, AND OUTPUTS MAY CONTAIN ERRORS.
                </p>
            </section>

            <section id="limitation" className="mt-8">
                <h2 className="text-lg font-semibold">17) Limitation of liability</h2>
                <p className="mt-2">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, OR DATA. EXCEPT FOR PAYMENT OBLIGATIONS OR
                    YOUR BREACH OF SECTION 8 (PROHIBITED USES), EACH PARTY’S AGGREGATE LIABILITY UNDER THESE TERMS WILL NOT EXCEED
                    THE FEES PAID OR PAYABLE BY YOU TO US FOR THE SERVICE IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY.
                </p>
            </section>

            <section id="termination" className="mt-8">
                <h2 className="text-lg font-semibold">18) Suspension & termination</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        We may suspend or limit the Service immediately for security reasons, suspected abuse, or non-payment.
                    </li>
                    <li>
                        Either party may terminate for material breach not cured within 30 days after written notice. You may also
                        terminate at any time via the customer portal (effective end of term).
                    </li>
                    <li>
                        Upon termination or expiration, your license ends and API access will cease. You may retain outputs already
                        obtained for internal archival/audit purposes unless otherwise prohibited by law.
                    </li>
                </ul>
            </section>

            <section id="compliance" className="mt-8">
                <h2 className="text-lg font-semibold">19) Compliance, sanctions & export</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        You represent that you and your beneficial owners are not subject to sanctions and will comply with export
                        control and trade compliance laws (e.g., U.S. EAR, OFAC).
                    </li>
                    <li>You will maintain appropriate anti-bribery/anti-corruption policies and comply with applicable laws.</li>
                </ul>
            </section>

            <section id="law" className="mt-8">
                <h2 className="text-lg font-semibold">20) Governing law & disputes</h2>
                <p className="mt-2">
                    These Terms are governed by the laws of the State of Delaware, USA, without regard to conflicts of laws rules.
                    The parties consent to the exclusive jurisdiction and venue of the state and federal courts located in
                    Delaware for disputes that are not subject to arbitration.
                </p>
                <p className="mt-2">
                    At our election, certain disputes may be resolved by binding arbitration under JAMS rules in English with a
                    single arbitrator, and the award may be entered in any court of competent jurisdiction.
                </p>
            </section>

            <section id="misc" className="mt-8">
                <h2 className="text-lg font-semibold">21) Miscellaneous</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Assignment: You may not assign these Terms without our prior written consent.</li>
                    <li>Force majeure: Neither party is liable for delays due to events beyond reasonable control.</li>
                    <li>
                        Notices: Legal notices to you may be sent to your account email; notices to us via{" "}
                        <a className="underline" href="mailto:legal@useportpulse.com">
                            legal@useportpulse.com
                        </a>
                        .
                    </li>
                    <li>Publicity: With your consent, we may reference your name and logo; you may opt out anytime.</li>
                    <li>Entire agreement: These Terms plus any Order Form constitute the entire agreement.</li>
                    <li>Order of precedence: Order Form &gt; these Terms &gt; documentation.</li>
                    <li>Severability and waiver: If any provision is unenforceable, the remainder remains in effect.</li>
                </ul>
            </section>

            <section id="contact" className="mt-8">
                <h2 className="text-lg font-semibold">22) Contact</h2>
                <p className="mt-2">
                    Questions? Contact{" "}
                    <a className="underline" href="mailto:support@useportpulse.com">
                        support@useportpulse.com
                    </a>
                    . For data protection inquiries:{" "}
                    <a className="underline" href="mailto:privacy@useportpulse.com">
                        privacy@useportpulse.com
                    </a>
                    .
                </p>
            </section>

            <hr className="my-10 border-slate-200" />
            <p className="text-xs text-slate-500">
                <b>Note:</b> If your plan includes a separate Data Processing Agreement (DPA) or SLA addendum, those documents
                will govern where they conflict with these Terms.
            </p>
        </main>
    );
}