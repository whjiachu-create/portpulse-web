"use client";
import { useEffect, useRef, useState } from "react";
type Status = "online" | "degraded" | "offline";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";
export default function StatusPill() {
  const [status, setStatus] = useState<Status>("online");
  const timer = useRef<number | null>(null);
  useEffect(() => {
    let abort: AbortController | null = null;
    const probe = async () => {
      abort?.abort();
      abort = new AbortController();
      try {
        const t0 = performance.now();
        const res = await fetch(`${API_BASE}/v1/health`, { signal: abort.signal, cache: "no-store" });
        const dt = performance.now() - t0;
        if (!res.ok) throw new Error("bad");
        setStatus(dt < 300 ? "online" : dt < 1200 ? "degraded" : "offline");
      } catch {
        setStatus("offline");
      }
    };
    probe();
    timer.current = window.setInterval(probe, 30_000);
    return () => { if (timer.current) clearInterval(timer.current); abort?.abort(); };
  }, []);
  const cls = status === "online" ? "bg-emerald-600" : status === "degraded" ? "bg-amber-500" : "bg-rose-600";
  const label = status === "online" ? "Online" : status === "degraded" ? "Degraded" : "Offline";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-white ${cls}`}>
      <span className="h-2 w-2 rounded-full bg-white/90" />
      <span className="text-sm">{label}</span>
    </span>
  );
}
