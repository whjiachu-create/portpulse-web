"use client";

const LOGOS = ["Docs", "OpenAPI", "Postman", "Status"];

export default function Logos() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
      <div className="rounded-2xl border bg-white p-6">
        <div className="text-sm text-slate-500 mb-4">Ecosystem</div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {LOGOS.map((name) => (
            <div key={name} className="flex items-center justify-center w-28 h-10 rounded-lg border bg-slate-50 text-slate-600 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
