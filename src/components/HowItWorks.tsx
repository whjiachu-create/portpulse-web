// src/components/HowItWorks.tsx
import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "15-min call to clarify data needs and success criteria.",
  },
  {
    n: "02",
    title: "Tech alignment",
    desc: "We map your use cases to PortPulse APIs and validate coverage.",
  },
  {
    n: "03",
    title: "Integrate",
    desc: "Start with sandbox, promote to production with best practices.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
      <h2 className="mb-8 text-2xl font-semibold">How it works</h2>
      <ol className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="relative rounded-xl border bg-white p-6">
            <span className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-full bg-sky-100 px-3 py-1 text-sky-700 text-xs font-medium">
              {s.n}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex gap-3">
        <a
          href="https://docs.useportpulse.com/EXAMPLES.md"
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          Quickstart →
        </a>
        <Link href="/contact" className="rounded-md border px-4 py-2">
          Book a demo
        </Link>
      </div>
    </section>
  );
}
