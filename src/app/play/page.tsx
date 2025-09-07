"use client";
import React, { useCallback, useEffect, useState } from "react";

type ApiResult = Record<string, unknown>;

export default function PlayPage() {
  const [res, setRes] = useState<ApiResult | null>(null);

  const run = useCallback(async () => {
    const r = await fetch("/api/pulse/v1/health");
    const j = (await r.json()) as ApiResult;
    setRes(j);
  }, []);

  useEffect(() => {
    run();
  }, [run]);

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="text-xl font-semibold">Playground</h1>
      <pre className="mt-4 rounded-lg bg-slate-900 p-3 text-slate-100 overflow-auto text-xs">
        {JSON.stringify(res, null, 2)}
      </pre>
    </div>
  );
}
