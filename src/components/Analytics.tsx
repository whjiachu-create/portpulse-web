"use client";
import { useEffect } from "react";
import Script from "next/script";

type GtagArg =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagArg) => void;
  }
}

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const prod = process.env.NODE_ENV === "production";

  return (
    <>
      {prod && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {prod && clarityId && (
        <Script id="clarity-init" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
      <PageEvents />
    </>
  );
}

function PageEvents() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      if (window.location.pathname === "/") {
        window.gtag("event", "view_home");
      }
    }

    const click = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a || typeof window.gtag !== "function") return;
      if (a.pathname === "/pricing") window.gtag("event", "cta_click", { target: "pricing" });
      if (a.pathname === "/contact") window.gtag("event", "cta_click", { target: "contact" });
    };

    // 用布尔 capture，便于成对移除
    document.addEventListener("click", click, true);
    return () => document.removeEventListener("click", click, true);
  }, []);

  return null;
}
