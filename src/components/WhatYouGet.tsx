export default function WhatYouGet() {
  const items = [
    "Unified JSON/CSV schema with ETag/304",
    "67+ ports · 30-day replay · p95 freshness ≤ 2h",
    "OpenAPI & transparent error model",
  ];
  return (
    <ul className="list-disc pl-6 space-y-2 text-slate-700">
      {items.map(s => <li key={s}>{s}</li>)}
    </ul>
  );
}
