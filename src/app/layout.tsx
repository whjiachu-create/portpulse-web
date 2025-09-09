// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ui-enhance.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import GalleryPortal from "@/components/GalleryPortal";
import Script from "next/script";

// 规范化：去除结尾斜杠，保证拼接稳定
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://useportpulse.com";
const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PortPulse — APIs for Port Operations",
  description:
    "Port congestion, yard dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
  // ⚠️ 不在 RootLayout 放 canonical，避免所有子页都指到首页
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description:
      "Port congestion, yard dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
    // 不在根固定 url，子页用各自 generateMetadata 覆盖
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
        <link rel="manifest" href="/site.webmanifest" />
        {/* 轻量预连接（可留可去） */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F6F8FB] text-black antialiased">
        {/* SoftwareApplication JSON-LD */}
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
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PortPulse",
              url: SITE_URL,
              logo: `${SITE_URL}/brand-icon.svg`,
            }),
          }}
        />
        {/* WebSite JSON-LD（站内搜索协议） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PortPulse",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={query}`,
                "query-input": "required name=query",
              },
            }),
          }}
        />

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Script id="portal" strategy="afterInteractive">{`/* reserved for future portals */`}</Script>
        <GalleryPortal />
      </body>
    </html>
  );
}