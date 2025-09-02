"use client";

import Link from "next/link";

export default function PricingStickyAside() {
    return (
        <aside className="mt-10 md:mt-0 md:sticky md:top-24">
            <div className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm text-slate-500">Need help deciding?</div>
                <div className="mt-1 text-xl font-semibold">Talk to sales</div>
                <p className="mt-2 text-sm text-slate-600">
                    We reply within one business day. Live demo available on request.
                </p>

                <div className="mt-4 space-y-2">
                    <Link
                        href="/contact"
                        className="block text-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                    >
                        Contact sales
                    </Link>
                    <a
                        href="mailto:sales@useportpulse.com?subject=Pricing%20question"
                        className="block text-center rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50"
                    >
                        Email us
                    </a>
                    <a
                        href="https://cal.com/your-cal/portpulse-demo" // TODO: replace with your real link
                        target="_blank"
                        rel="noreferrer"
                        className="block text-center rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50"
                    >
                        Book a demo
                    </a>
                </div>

                <div className="mt-6 border-t pt-4 text-sm">
                    <div className="font-medium mb-1">Docs</div>
                    <ul className="space-y-1">
                        <li>
                            <a className="underline underline-offset-4" href="https://docs.useportpulse.com/PRICING.md" target="_blank" rel="noreferrer">Pricing policy</a>
                        </li>
                        <li>
                            <a className="underline underline-offset-4" href="https://docs.useportpulse.com/SLA.md" target="_blank" rel="noreferrer">SLA</a>
                        </li>
                        <li>
                            <a className="underline underline-offset-4" href="https://docs.useportpulse.com/ERRORS.md" target="_blank" rel="noreferrer">Errors</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}