"use client";

import { useEffect, useRef, useState } from "react";

export default function CoverageLinkHighlighter({
  code,
  containerId = "coverage-container",
}: {
  code?: string;
  containerId?: string;
}) {
  const [found, setFound] = useState<boolean | null>(null);
  const tried = useRef(false);

  useEffect(() => {
    if (!code || tried.current) return;
    tried.current = true;

    const targetCode = code.toUpperCase();
    const container = document.getElementById(containerId);
    if (!container) return;

    const locate = () => {
      const table =
        container.querySelector("table") ||
        container.querySelector('[role="table"]') ||
        document.querySelector("table");
      if (!table) return false;

      const rows = Array.from(table.querySelectorAll<HTMLTableRowElement>("tbody tr"));
      let target: HTMLTableRowElement | null = null;
      for (const tr of rows) {
        const txt = (tr.textContent || "").toUpperCase();
        if (txt.includes(targetCode)) {
          target = tr;
          break;
        }
      }
      if (!target) return false;

      target.classList.add("ring-2", "ring-sky-500/60", "bg-sky-50", "transition", "duration-300");
      try {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
        target.scrollIntoView();
      }
      setFound(true);
      return true;
    };

    // 先尝试一次
    if (locate()) return;

    // 表格可能异步出现：观察 DOM 最多 3s
    const obs = new MutationObserver(() => {
      if (locate()) obs.disconnect();
    });
    obs.observe(container, { childList: true, subtree: true });

    const timer = setTimeout(() => {
      obs.disconnect();
      setFound(false);
    }, 3000);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [code, containerId]);

  if (!code) return null;

  return (
    <div className="mt-3 text-xs">
      {found === true && (
        <span className="inline-flex items-center gap-2 rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-sky-800">
          Linked from map:&nbsp;<strong>{code}</strong>
          <a className="underline decoration-dotted" href="/coverage">
            Clear
          </a>
        </span>
      )}
      {found === false && (
        <span className="inline-flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-amber-800">
          <strong>{code}</strong>&nbsp;not found on this page.&nbsp;
          <a className="underline decoration-dotted" href="/coverage">
            Back
          </a>
        </span>
      )}
    </div>
  );
}
