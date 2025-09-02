// src/components/TrustBar.tsx
"use client";

const brands = ["ACME", "OCEANIC", "FREIGHT.IO", "NEXLOG", "PORTNET", "CARGO AI"];

export default function TrustBar() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
                <div className="text-xs font-medium text-slate-500 mb-3">ECOSYSTEM & TOOLING</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {brands.map((b) => (
                        <div
                            key={b}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-[12px] text-slate-600 shadow-sm"
                        >
                            {b}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}