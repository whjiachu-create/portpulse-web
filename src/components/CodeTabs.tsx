"use client";
import { useState } from "react";
type Tab = { id: string; label: string; language: "bash"|"python"|"javascript"; code: string };
export default function CodeTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const current = tabs.find(t => t.id === active) ?? tabs[0];
  return (
    <div className="rounded-2xl border border-black/10 bg-white">
      <div className="flex flex-wrap gap-2 p-2 border-b border-black/10">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            className={`px-3 py-1.5 rounded-lg text-sm transition ${active===t.id ? "bg-[#0B2740] text-white" : "bg-black/5 hover:bg-black/10"}`}>
            {t.label}
          </button>
        ))}
        <button onClick={() => navigator.clipboard.writeText(current.code)}
          className="ml-auto px-3 py-1.5 rounded-lg text-sm bg-black/5 hover:bg-black/10">Copy</button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6"><code>{current.code}</code></pre>
    </div>
  );
}
