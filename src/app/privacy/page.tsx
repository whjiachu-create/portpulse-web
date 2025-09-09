// src/app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — PortPulse",
    description:
        "PortPulse Privacy Policy. What we collect, how we use it, legal bases, retention, sub-processors, international transfers, your rights, and how to reach us.",
};

export default function PrivacyPage() {
    const updated = "2025-09-08";
    return (
        <main className="container mx-auto px-4 py-10 max-w-4xl text-sm leading-6 text-slate-800">
            <h1 className="text-2xl font-semibold text-slate-900">Privacy Policy</h1>
            <p className="mt-2 text-slate-600">
                Effective date: <b>{updated}</b>. This Privacy Policy explains how PortPulse (“<b>we</b>,” “<b>us</b>,” “<b>our</b>”)
                collects, uses, shares, and protects information about visitors to our websites and users of our APIs and services
                (collectively, the “<b>Service</b>”).
            </p>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">1) Scope</h2>
                <p className="mt-2">
                    This Policy covers account and operational data we process as a data controller. For personal data we process
                    on your behalf in connection with the Service, the{" "}
                    <a className="underline" href="/legal/dpa">
                        Data Processing Addendum (DPA)
                    </a>{" "}
                    applies (we act as your processor).
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">2) Information we collect</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        <b>Account & billing:</b> name, email, company, role, plan, billing details (via our payment processor), tax
                        identifiers where applicable.
                    </li>
                    <li>
                        <b>Operational & usage:</b> request metadata (timestamps, IP, user agent, <code>x-request-id</code>, endpoint,
                        status), authentication events, rate-limit counters.
                    </li>
                    <li>
                        <b>Website analytics:</b> page views, referrers, events collected via cookies or similar technologies (e.g., GA4/Clarity).
                    </li>
                    <li>
                        <b>Support:</b> messages you send to support, error reports (with minimal context and request IDs).
                    </li>
                    <li>
                        <b>No special categories:</b> we do not intentionally collect sensitive personal data; please do not send it.
                    </li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">3) How we use information (purposes & legal bases)</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        <b>Provide & secure the Service</b> (contract performance), including authentication, rate limiting, abuse prevention.
                    </li>
                    <li>
                        <b>Billing & account management</b> (contract/legal obligation), including invoices, tax compliance, receipts.
                    </li>
                    <li>
                        <b>Analytics & product improvement</b> (legitimate interests), e.g., performance metrics and usability analysis.
                    </li>
                    <li>
                        <b>Communications</b> (legitimate interests/consent where required): service notifications, updates, support.
                    </li>
                    <li>
                        <b>Legal & compliance</b> (legal obligation/legitimate interests), including security investigations and audits.
                    </li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">4) Retention</h2>
                <p className="mt-2">
                    We retain operational logs typically for ≤ <b>30 days</b> unless longer retention is required for security, fraud
                    detection, accounting, or legal reasons. Billing and tax records may be retained per applicable law. We minimize
                    collection and apply access controls and deletion schedules.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">5) Security</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Transport security (TLS), encryption at rest where supported by providers.</li>
                    <li>Least-privilege access, MFA for consoles, key rotation, audit logging.</li>
                    <li>Backups with tested restore procedures; vulnerability management.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">6) Sub-processors</h2>
                <p className="mt-2">
                    We use trusted providers to operate the Service. Typical sub-processors include (subject to change):
                </p>
                <div className="mt-2 overflow-x-auto">
                    <table className="min-w-[540px] text-xs">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-1 pr-4">Provider</th>
                                <th className="py-1 pr-4">Purpose</th>
                                <th className="py-1">Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-1 pr-4">Cloudflare, Inc.</td>
                                <td className="py-1 pr-4">Edge security, CDN, caching, WAF</td>
                                <td className="py-1">Global</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">Stripe, Inc.</td>
                                <td className="py-1 pr-4">Payments & tax (Stripe Tax)</td>
                                <td className="py-1">US/EU</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">Railway (or similar PaaS)</td>
                                <td className="py-1 pr-4">App hosting</td>
                                <td className="py-1">US/EU</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-1 pr-4">Sentry / Logfire</td>
                                <td className="py-1 pr-4">Error tracking & logs</td>
                                <td className="py-1">US/EU</td>
                            </tr>
                            <tr>
                                <td className="py-1 pr-4">Uptime/Better Stack</td>
                                <td className="py-1 pr-4">External uptime probes & status</td>
                                <td className="py-1">EU/US</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">
                    We will update this list as providers change. Processing is governed by contracts and data protection terms.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">7) International transfers</h2>
                <p className="mt-2">
                    We may transfer data internationally. For EEA/UK data, we rely on adequacy decisions or appropriate safeguards,
                    including the EU Standard Contractual Clauses (SCCs) and the UK Addendum where applicable.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">8) Your rights</h2>
                <p className="mt-2">
                    Depending on your location, you may have rights to access, rectify, delete, or port your data, and to object or
                    restrict certain processing. To exercise rights, email{" "}
                    <a className="underline" href="mailto:privacy@useportpulse.com">
                        privacy@useportpulse.com
                    </a>
                    . We may verify your identity before responding.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">9) Cookies & analytics</h2>
                <p className="mt-2">
                    We use cookies or similar technologies for essential functions and analytics (e.g., GA4, Microsoft Clarity).
                    You can control cookies via browser settings; blocking some cookies may impact functionality.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">10) Children</h2>
                <p className="mt-2">The Service is for business use and not directed to children under 16.</p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">11) Changes</h2>
                <p className="mt-2">
                    We may update this Policy from time to time. Material changes will be highlighted on this page. Continued use
                    constitutes acceptance of the revised Policy.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">12) Contact</h2>
                <p className="mt-2">
                    Questions or requests:{" "}
                    <a className="underline" href="mailto:privacy@useportpulse.com">
                        privacy@useportpulse.com
                    </a>
                    . Security reports:{" "}
                    <a className="underline" href="mailto:security@useportpulse.com">
                        security@useportpulse.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}