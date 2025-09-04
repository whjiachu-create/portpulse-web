import type { Metadata, Viewport } from "next";
import "./globals.css";
import GalleryPortal from "@/components/GalleryPortal";
import Script from "next/script";

import "./ui-enhance.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://useportpulse.com"),
  title: "PortPulse — APIs for Port Operations",
  description:
    "Port congestion, yard dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description:
      "Port congestion, yard dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
    url: "https://useportpulse.com",
    siteName: "PortPulse",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PortPulse — APIs for Port Operations",
    description:
      "Port congestion, yard dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
    images: ["/og.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0B2740" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className="bg-[#F6F8FB] text-black antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PortPulse",
              applicationCategory: "BusinessApplication",
              offers: { "@type": "Offer", priceCurrency: "USD", price: "399", category: "subscription" },
            }),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      
        <Script id="hero-pill-cleanup" strategy="afterInteractive">{`(function(){try{if(typeof location==='undefined'||location.pathname!=='/')return;var P=[/50\+\s*ports/i,/freshness\s*p95/i,/api\s*p95/i,/30-?day\s*replay/i,/csv\s*etag\/?304/i,/talk\s*to\s*sales/i],H=[/Ports\s*covered/i,/Freshness\s*$begin:math:text$p95\$end:math:text$/i,/API\s*latency\s*$begin:math:text$p95\$end:math:text$/i];function run(){var R=0;Array.from(document.querySelectorAll('a,button,span,div,li')).forEach(function(el){var t=(el.textContent||'').trim();if(!t)return;for(var i=0;i<P.length;i++){if(P[i].test(t)){var n=el.closest('a,button,span,div,li');if(n&&n.parentElement){n.remove();R++}break}}});Array.from(document.querySelectorAll('div,section,article,li,h3,h4,span')).forEach(function(el){var t=(el.textContent||'').trim();if(!t)return;for(var j=0;j<H.length;j++){if(H[j].test(t)){var card=el.closest('div,section,article,li');if(card){card.classList.add('shadow-floating','glass-bg')}break}}});console.info('[PortPulse] removed',R,'pill(s)')}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',run,{once:true}):setTimeout(run,0)}catch(e){console.warn('[PortPulse] pill cleanup failed',e)}})();`}</Script>
        <GalleryPortal />
      </body>
    </html>
  );
}
