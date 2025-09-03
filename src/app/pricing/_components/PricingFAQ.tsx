export default function PricingFAQ() {
  const faqs = [
    ["Do you offer refunds?", "Monthly plans can be cancelled anytime and stop next cycle billing. Annual plans follow fair-use terms; talk to us for prorated cases."],
    ["What happens on overage?", "For v1 we auto-upgrade to the next tier to keep your jobs running. No surprise per-call fees."],
    ["How is billing handled?", "Stripe in USD with Stripe Tax for VAT/GST. Invoices are emailed and downloadable from the portal."],
    ["Is there a yearly discount?", "Yes — pay 10 months, get 12 months (applied at checkout)."],
  ] as const;
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">FAQ</h2>
      <div className="mt-4 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer list-none">
              <span className="text-base font-medium">{q}</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
