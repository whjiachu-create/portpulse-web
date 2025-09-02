import Link from "next/link";

const steps = [
  ["Discovery", "Share your corridors and target ports."],
  ["Tech alignment", "Review schema, quotas and SLOs."],
  ["Integrate", "Go live with OpenAPI / Postman / SDK."],
] as const;

export default function Steps() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold">Get started in three steps</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={i} className="rounded-xl border bg-white p-6">
              <div className="text-lg font-semibold">{t}</div>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href="https://docs.useportpulse.com/EXAMPLES.md" target="_blank" rel="noreferrer"
             className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-black">
            Quickstart
          </a>
          <Link href="/contact" className="rounded-md border px-4 py-2 hover:bg-slate-50">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
