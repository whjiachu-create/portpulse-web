"use client";
import { useEffect } from "react";
import Script from "next/script";

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const ENABLED = process.env.NODE_ENV === "production" && GA_ID;

export default function Analytics() {
  if (!ENABLED) return null;
  return (
    <>
      <Script id="gtm-datalayer" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js', new Date()); gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
      <PageEvents />
    </>
  );
}

function send(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const g = window.gtag;
  if (typeof g === "function") g("event", name, params ?? {});
}

function PageEvents() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      if (window.location.pathname === "/") window.gtag("event", "view_home", {});
    }
    const click = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;
      const p = a.pathname || "";
      if (p === "/pricing") send("cta_click", { target: "pricing" });
      if (p === "/contact") send("cta_click", { target: "contact" });
      const navTargets = ["/docs", "/coverage", "/product", "/use-cases", "/methods"];
      if (navTargets.some((x) => p === x || p.startsWith(`${x}/`))) send("nav_click", { target: p });
    };
    document.addEventListener("click", click, true);
    return () => document.removeEventListener("click", click, true);
  }, []);
  return null;
}
