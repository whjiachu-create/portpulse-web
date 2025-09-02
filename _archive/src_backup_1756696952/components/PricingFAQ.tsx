"use client";
import { useState } from "react";
const QA = [
  { q: "Is there a free trial?", a: "Yes — start free on Starter. Upgrade anytime." },
  { q: "How do you bill?", a: "Monthly by default; yearly has discounts. Cancel anytime." },
  { q: "Do you offer SLO / SLA?", a: "We publish freshness, latency and uptime SLOs. SLA is in Pro/Enterprise." },
];
export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <div className="divide-y rounded-xl border bg-white">
        {QA.map((it, i) => (
          <details key={i} open={open===i} onClick={() => setOpen(open===i?null:i)} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">{it.q}</span>
              <span className="ml-4 text-slate-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-2 text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
