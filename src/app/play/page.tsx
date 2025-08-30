"use client";
import { useState } from "react";

export default function Page() {
  const [apiKey, setApiKey] = useState("");
  const [path, setPath] = useState("/v1/ports/USLAX/trend?days=7");
  const [result, setResult] = useState<string>("");

  async function run() {
    setResult("Loading…");
    try {
      const res = await fetch(`/api/pulse${path}`, { headers: apiKey ? { "X-API-Key": apiKey } : {} });
      const txt = await res.text();
      setResult(txt);
    } catch (e) {
      setResult(String(e));
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">API Playground</h1>
      <div className="rounded-xl border bg-white p-4 space-y-3">
        <label className="block text-sm">Path (proxied by /api/pulse)</label>
        <input value={path} onChange={(e) => setPath(e.target.value)} className="w-full rounded-md border px-3 py-2" />
        <label className="block text-sm">X-API-Key</label>
        <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="w-full rounded-md border px-3 py-2" />
        <button onClick={run} className="rounded-md bg-slate-900 text-white px-4 py-2 text-sm">Send</button>
        <pre className="whitespace-pre-wrap text-xs rounded-md border bg-slate-50 p-3">{result}</pre>
      </div>
    </main>
  );
}
