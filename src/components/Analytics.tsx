"use client";
import { useEffect } from "react";
import Script from "next/script";

declare global { interface Window { dataLayer: any[]; gtag: (...args:any[])=>void } }

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
    // 基础 page_view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", { page_location: window.location.href, page_path: window.location.pathname });
      if (window.location.pathname === "/") {
        window.gtag("event", "view_home");
      }
    }
    // CTA 点击（pricing/contact）
    const click = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const a = el.closest("a") as HTMLAnchorElement | null;
      if (!a || !window.gtag) return;
      if (a.pathname === "/pricing") window.gtag("event", "cta_click", { target: "pricing" });
      if (a.pathname === "/contact") window.gtag("event", "cta_click", { target: "contact" });
    };
    document.addEventListener("click", click, { capture: true });
    return () => document.removeEventListener("click", click, { capture: true } as any);
  }, []);
  return null;
}
