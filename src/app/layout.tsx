import type { Metadata, Viewport } from "next";
import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <head>
    <link rel="preconnect" href="https://api.useportpulse.com" crossOrigin="" />
  </head>
      <body className="bg-[#F6F8FB] text-black antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context":"https://schema.org",
      "@type":"SoftwareApplication",
      name:"PortPulse",
      applicationCategory:"BusinessApplication",
      offers:{ "@type":"Offer", priceCurrency:"USD", price:"399", category:"subscription" }
    })}} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
