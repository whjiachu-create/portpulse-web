// src/app/legal/dpa/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Processing Addendum (DPA) — PortPulse",
    description:
        "PortPulse DPA (Controller–Processor). Processing instructions, confidentiality, security, breach notice, sub-processors, data subject requests, transfers (SCCs), deletion/return.",
};

export default function DPAPage() {
    const updated = "2025-09-08";
    return (
        <main className="container mx-auto px-4 py-10 max-w-4xl text-sm leading-6 text-slate-800">
            <h1 className="text-2xl font-semibold text-slate-900">Data Processing Addendum (DPA)</h1>
            <p className="mt-2 text-slate-600">
                Effective date: <b>{updated}</b>. This DPA forms part of the agreement between PortPulse (“<b>Processor</b>”) and
                the customer identified in the Order Form (“<b>Controller</b>”) governing the use of the Service.
            </p>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">1) Definitions</h2>
                <p className="mt-2">
                    Terms such as “personal data,” “processing,” “data subject,” “controller,” and “processor” have the meanings
                    given in applicable data protection laws (e.g., GDPR, UK GDPR). “<b>Customer Data</b>” means personal data that
                    Controller submits to the Service for processing. “<b>Account Data</b>” (e.g., user names, billing contacts) is
                    processed by PortPulse as an independent controller per the{" "}
                    <a className="underline" href="/privacy">
                        Privacy Policy
                    </a>
                    .
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">2) Roles; processing instructions</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        PortPulse acts as <b>Processor</b> and processes Customer Data only on documented instructions from Controller,
                        including as set out in this DPA and the Agreement.
                    </li>
                    <li>
                        Controller is responsible for the lawfulness of Customer Data and obtaining necessary notices and consents.
                    </li>
                    <li>Processor will promptly inform Controller if an instruction infringes applicable law.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">3) Confidentiality & personnel</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Processor ensures personnel are bound by confidentiality obligations and receive privacy/security training.</li>
                    <li>Access to Customer Data is limited to personnel with a need to know.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">4) Security measures</h2>
                <p className="mt-2">
                    Processor implements appropriate technical and organizational measures (TOMs) to protect Customer Data against
                    accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access, including:
                </p>
                <ul className="mt-2 list-disc pl-5">
                    <li>Encryption in transit (TLS); encryption at rest where supported.</li>
                    <li>Access control (least privilege), MFA for admin consoles, key management and rotation.</li>
                    <li>Network security (WAF, rate limiting), logging and monitoring, vulnerability management.</li>
                    <li>Backup and recovery, change management, secure development practices.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">5) Personal data breach notification</h2>
                <p className="mt-2">
                    Processor will notify Controller without undue delay after becoming aware of a personal data breach affecting
                    Customer Data, providing available information to assist Controller in meeting its obligations.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">6) Sub-processors</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        Controller authorizes the use of sub-processors listed on the{" "}
                        <a className="underline" href="/privacy">
                            Privacy Policy
                        </a>{" "}
                        (Sub-processors section) and any successors with substantially similar obligations.
                    </li>
                    <li>
                        Processor will enter into written agreements imposing data protection obligations at least as protective as
                        those in this DPA and remains responsible for sub-processor performance.
                    </li>
                    <li>Processor will notify Controller of changes and allow reasonable opportunity to object on valid grounds.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">7) Data subject requests</h2>
                <p className="mt-2">
                    Taking into account the nature of processing, Processor will assist Controller by appropriate technical and
                    organizational measures, insofar as possible, to fulfill data subject requests (e.g., access, deletion).
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">8) Audits & assistance</h2>
                <p className="mt-2">
                    Processor will make available information necessary to demonstrate compliance with this DPA and applicable law,
                    and will allow for audits by Controller or its auditor, subject to reasonable advance notice, confidentiality,
                    and frequency limits. Remote document reviews are preferred. On-site visits are limited to once annually unless
                    legally required or following a material incident.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">9) International transfers</h2>
                <p className="mt-2">
                    Where processing involves transfers of Customer Data from the EEA/UK to countries without adequate protection,
                    the parties agree that the EU Commission Standard Contractual Clauses (SCCs) 2021/914 (Module Two — Controller
                    to Processor) and the UK Addendum (as applicable) are incorporated by reference. PortPulse acts as “data
                    importer” and Customer as “data exporter.” Conflicts are resolved per Section 14.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">10) Return & deletion</h2>
                <p className="mt-2">
                    Upon termination or at Controller’s written request, Processor will delete or return Customer Data, unless
                    retention is required by law. Operational logs may be retained for limited periods for security, legal, or
                    accounting purposes, after which they are deleted per schedules.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">11) Liability</h2>
                <p className="mt-2">
                    Each party’s aggregate liability arising out of or related to this DPA is subject to the limitations set forth
                    in the Agreement. Nothing in this DPA limits a party’s liability where prohibited by law.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">12) Governing law</h2>
                <p className="mt-2">
                    This DPA is governed by the law designated in the Agreement. For SCCs, the governing law is as specified in the
                    SCCs and the UK Addendum (as applicable).
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">Annex A — Subject matter & duration</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>
                        <b>Subject matter:</b> Processing of Customer Data as necessary to provide the Service (API access, logging,
                        analytics, security).
                    </li>
                    <li>
                        <b>Duration:</b> For the term of the Agreement and any transitional period for return/deletion.
                    </li>
                    <li>
                        <b>Nature & purpose:</b> Hosting, storage, transmission, caching, monitoring, and support of API operations.
                    </li>
                    <li>
                        <b>Data subjects:</b> Controller’s authorized users and personnel; limited operational contacts.
                    </li>
                    <li>
                        <b>Categories of data:</b> Business contact data; technical identifiers (IP, user agent); request metadata.
                        No special category data is intended.
                    </li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">Annex B — Technical & organizational measures</h2>
                <ul className="mt-2 list-disc pl-5">
                    <li>Encryption in transit (TLS 1.2+); encryption at rest where supported by providers.</li>
                    <li>Access controls, RBAC, MFA, least privilege, periodic access reviews.</li>
                    <li>Network security (WAF, rate limiting, CDN), monitoring, centralized logging.</li>
                    <li>Backup/restore with periodic tests; change management and code reviews.</li>
                    <li>Incident response runbooks and breach notification procedures.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-semibold">Annex C — Authorized sub-processors</h2>
                <p className="mt-2">
                    See the Sub-processors list in the{" "}
                    <a className="underline" href="/privacy">
                        Privacy Policy
                    </a>
                    . Processor may update sub-processors with notice and an opportunity to object on reasonable grounds.
                </p>
            </section>

            <hr className="my-10 border-slate-200" />
            <p className="text-xs text-slate-500">
                This DPA is automatically effective upon your subscription to the Service and applies for the duration of your
                Agreement with PortPulse.
            </p>
        </main>
    );
}