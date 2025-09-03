"use client";
import { useEffect, useState } from "react";

type Props = { apiBase: string; intervalMs?: number };

export default function StatusPill({ apiBase, intervalMs = 25_000 }: Props) {
  const [status, setStatus] = useState<"online" | "degraded" | "offline">("offline");

  useEffect(() => {
    let stop = false;
    async function probe() {
      try {
        const r = await fetch(`${apiBase}/v1/health`, { cache: "no-store" });
        if (stop) return;
        setStatus(r.ok ? "online" : "degraded");
      } catch {
        if (!stop) setStatus("offline");
      }
    }
    probe();
    const id = setInterval(probe, intervalMs);
    return () => { stop = true; clearInterval(id); };
  }, [apiBase, intervalMs]);

  const cls =
    status === "online"
      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      : status === "degraded"
      ? "bg-amber-50 text-amber-800 ring-1 ring-amber-200"
      : "bg-rose-50 text-rose-700 ring-1 ring-rose-200";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${cls}`}>
      <span className="size-2 rounded-full bg-current/70" />
      Status: {status}
    </span>
  );
}
