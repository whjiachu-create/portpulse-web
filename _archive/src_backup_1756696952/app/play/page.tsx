/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.useportpulse.com";
const DEMO_KEY  = process.env.NEXT_PUBLIC_DEMO_API_KEY || "dev_demo_123";

export default function PlayPage() {
  const [path, setPath] = useState("/v1/ports/USLAX/trend?days=7");
  const [apiKey, setApiKey] = useState(DEMO_KEY);
  const [resp, setResp] = useState<string>("");

  async function run() {
    setResp("Loading…");
    try {
      const r = await fetch(`/api/pulse${path}`, { headers: apiKey ? { "X-API-Key": apiKey } : {} });
      const txt = await r.text();
      setResp(`${r.status} ${r.statusText}\n\n${txt}`);
    } catch (e) {
      setResp(String(e));
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">API Playground</h1>
      <p className="mt-2 text-sm text-slate-600">Base: {API_BASE}</p>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_220px_120px]">
        <input className="rounded-lg border px-3 py-2" value={path} onChange={(e) => setPath(e.target.value)} />
        <input className="rounded-lg border px-3 py-2" placeholder="X-API-Key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        <button onClick={run} className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-black">Run</button>
      </div>

      <div className="mt-4">
        <pre className="whitespace-pre-wrap rounded-xl border bg-slate-50 p-4 text-xs leading-relaxed">{resp || "Result will appear here."}</pre>
      </div>

      <div className="mt-4 text-xs">
        cURL: <code className="break-all">curl -sS -H "X-API-Key: {apiKey}" "{API_BASE}{path}" | jq .</code>
      </div>
    </div>
  );
}
