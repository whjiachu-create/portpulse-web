import type { Metadata } from "next";
import ClientContactForm from "./ClientContactForm";

export const metadata: Metadata = {
  title: "Contact — PortPulse",
  description: "Talk to sales or request access. Business email required in production.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
      <p className="text-slate-600 mt-1">
        Tell us about your use case. We’ll help you start quickly — typical onboarding 2–4 weeks.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-floating">
          <ClientContactForm />
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-floating">
          <h2 className="font-medium">What to include</h2>
          <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Ports & metrics you need (e.g., congestion, dwell, trend)</li>
            <li>Expected monthly calls & port count</li>
            <li>Timeline and integration environment</li>
          </ul>
          <div className="mt-4 text-sm text-slate-600">
            Prefer email?{" "}
            <a className="underline" href="mailto:support@useportpulse.com?subject=PortPulse contact">
              support@useportpulse.com
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
