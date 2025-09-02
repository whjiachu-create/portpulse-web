import React from "react";

const LOGOS = ["Maersk", "Port of LA", "Rotterdam", "Singapore", "Hamburg", "Global Trade"];

export default function TrustLogos() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-6">
      <div className="rounded-xl border bg-white/80 backdrop-blur p-4">
        <div className="text-xs text-slate-500 mb-3">Trusted by analysts & operators</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center rounded-lg border border-dashed text-sm text-slate-600"
              aria-label={name}
              title={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
