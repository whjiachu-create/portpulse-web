"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

type Endpoint = "overview" | "trend" | "snapshot" | "dwell" | "alerts";
type Kv = Record<string, string | number | boolean | null | undefined>;
type ApiJson = Record<string, unknown> | Record<string, unknown>[];
type ApiResult = ApiJson | { text: string };

const PRESETS: Array<{ label: string; code: string; endpoint: Endpoint; params?: Kv; note?: string }> = [
  { label: "USLAX • trend (14d)", code: "USLAX", endpoint: "trend", params: { days: 14, fields: "avg_wait_hours,date" } },
  { label: "USNYC • snapshot", code: "USNYC", endpoint: "snapshot" },
  { label: "SGSIN • dwell (7d)", code: "SGSIN", endpoint: "dwell", params: { days: 7 } },
];

function buildQuery(params: Kv) {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    sp.set(k, String(v));
  });
  return sp.toString();
}
function codeBlock(s: string) {
  return s.replaceAll("`", "\\`");
}

export default function PlayPage() {
  // ---- 控件状态 ----
  const [code, setCode] = useState("USLAX");
  const [endpoint, setEndpoint] = useState<Endpoint>("trend");
  const [days, setDays] = useState<number | "">(14);
  const [fields, setFields] = useState("avg_wait_hours,date");
  const [extra, setExtra] = useState(""); // 额外 query，如 limit=100&since=2025-08-01

  // ---- 请求结果 ----
  const [res, setRes] = useState<ApiResult | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // 初次加载：调用 /health
  const runHealth = useCallback(async () => {
    try {
      const t0 = performance.now();
      const r = await fetch("/api/pulse/v1/health", { headers: { Accept: "application/json" } });
      const t1 = performance.now();
      setStatus(r.status);
      setElapsed(Math.round(t1 - t0));

      const ct = r.headers.get("content-type") || "";
      if (ct.includes("json")) {
        const j = (await r.json()) as ApiJson;
        setRes(j);
      } else {
        const t = await r.text();
        setRes({ text: t });
      }
      setErr(null);
    } catch (e: unknown) {
      setRes(null);
      setErr(e instanceof Error ? e.message : String(e));
    }
  }, []);

  useEffect(() => {
    // 恢复本地缓存
    const saved = localStorage.getItem("pp-play");
    if (saved) {
      try {
        const j = JSON.parse(saved) as Partial<{
          code: string;
          endpoint: Endpoint;
          days: number;
          fields: string;
          extra: string;
        }>;
        setCode(j.code ?? "USLAX");
        setEndpoint(j.endpoint ?? "trend");
        setDays((j.days as number) ?? 14);
        setFields(j.fields ?? "avg_wait_hours,date");
        setExtra(j.extra ?? "");
      } catch {
        /* noop */
      }
    }
    runHealth();
  }, [runHealth]);

  // 持久化控件
  useEffect(() => {
    localStorage.setItem("pp-play", JSON.stringify({ code, endpoint, days, fields, extra }));
  }, [code, endpoint, days, fields, extra]);

  // 计算 query 与 URL
  const query = useMemo(() => {
    const base: Kv = {};
    if (endpoint === "trend" || endpoint === "dwell") {
      if (days !== "") base.days = days;
      if (fields.trim()) base.fields = fields.trim();
    }
    if (extra.trim()) {
      const usp = new URLSearchParams(extra);
      usp.forEach((v, k) => (base[k] = v));
    }
    return buildQuery(base);
  }, [endpoint, days, fields, extra]);

  const url = useMemo(() => {
    const path = `/api/pulse/v1/ports/${code.toUpperCase().trim()}/${endpoint}`;
    return query ? `${path}?${query}` : path;
  }, [code, endpoint, query]);

  // 运行请求
  const run = useCallback(async () => {
    setLoading(true);
    setErr(null);
    setRes(null);
    setStatus(null);
    setElapsed(null);
    const t0 = performance.now();
    try {
      const r = await fetch(url, { headers: { Accept: "application/json" } });
      const t1 = performance.now();
      setStatus(r.status);
      setElapsed(Math.round(t1 - t0));

      const ct = r.headers.get("content-type") || "";
      let body: ApiJson | string | null = null;
      if (ct.includes("application/json")) {
        body = (await r.json()) as ApiJson;
      } else {
        body = await r.text();
      }

      if (!r.ok) {
        setErr(typeof body === "string" ? body : JSON.stringify(body, null, 2));
        setRes(null);
      } else {
        setRes(typeof body === "string" ? { text: body } : body);
      }
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : String(e));
      setRes(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // 快捷键：Cmd/Ctrl + Enter
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [run]);

  const curl = `curl -H "Accept: application/json" "${url}"`;
  const js = `// browser via server proxy
const res = await fetch(\`${codeBlock(url)}\`);
const data = await res.json();`;

  return (
    <div className="mx-auto max-w-4xl p-4 space-y-4">
      <h1 className="text-xl font-semibold">Playground</h1>
      <p className="text-black/60">
        Try PortPulse endpoints without writing code. Requests go through <code>/api/pulse</code> (server proxy).
      </p>

      {/* 控件区 */}
      <div className="grid gap-3 md:grid-cols-5">
        <div className="md:col-span-2">
          <label className="block text-xs text-black/60 mb-1">UN/LOCODE</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="USLAX / USNYC / SGSIN"
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-xs text-black/60 mb-1">Endpoint</label>
          <select
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value as Endpoint)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
          >
            <option value="overview">overview</option>
            <option value="trend">trend</option>
            <option value="snapshot">snapshot</option>
            <option value="dwell">dwell</option>
            <option value="alerts">alerts</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-black/60 mb-1">days (trend/dwell)</label>
          <input
            type="number"
            min={1}
            value={days}
            onChange={(e) => setDays(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="14"
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-xs text-black/60 mb-1">fields (trend/dwell)</label>
          <input
            value={fields}
            onChange={(e) => setFields(e.target.value)}
            placeholder="avg_wait_hours,date"
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        <div className="md:col-span-4">
          <label className="block text-xs text-black/60 mb-1">Extra query (optional)</label>
          <input
            value={extra}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="limit=100&since=2025-08-01"
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={run}
            disabled={loading}
            className="w-full rounded-lg bg-black text-white px-4 py-2 disabled:opacity-50"
            title="Cmd/Ctrl+Enter"
          >
            {loading ? "Running…" : "Run"}
          </button>
        </div>
      </div>

      {/* 预置示例 */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            className="rounded-full border px-3 py-1 text-sm hover:bg-slate-50"
            title={p.note || ""}
            onClick={() => {
              setCode(p.code);
              setEndpoint(p.endpoint);
              setDays((p.params?.days as number) ?? "");
              setFields((p.params?.fields as string) ?? "");
              setExtra("");
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 请求 URL 与复制 */}
      <div className="rounded-lg bg-[#0E1425] text-white text-sm p-3 overflow-x-auto">
        <div className="flex items-center justify-between gap-3">
          <code className="opacity-90">{url}</code>
          <div className="shrink-0 flex gap-2">
            <button className="rounded bg-white/10 px-2 py-1" onClick={() => navigator.clipboard.writeText(curl)}>
              Copy cURL
            </button>
            <button className="rounded bg白/10 px-2 py-1" onClick={() => navigator.clipboard.writeText(js)}>
              Copy JS
            </button>
          </div>
        </div>
      </div>

      {/* 状态/耗时 */}
      {(status !== null || elapsed !== null) && (
        <div className="flex items-center gap-4 text-sm">
          {status !== null && <span className="px-2 py-1 rounded bg-slate-100">HTTP {status}</span>}
          {elapsed !== null && <span className="text-black/60">~{elapsed} ms</span>}
        </div>
      )}

      {/* 错误 / 数据 */}
      {err && (
        <pre className="whitespace-pre-wrap rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {err}
        </pre>
      )}
      {res && (
        <pre className="mt-2 rounded-lg bg-slate-900 p-3 text-slate-100 overflow-auto text-xs">
          {JSON.stringify(res, null, 2)}
        </pre>
      )}
      {!res && !err && (
        <p className="text-black/50 text-sm">
          Tip: choose a preset or press <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd>.
        </p>
      )}
    </div>
  );
}