
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),
  title: { default: "PortPulse — APIs for Port Operations", template: "%s · PortPulse" },
  description: "Port-level congestion and trade momentum API. Standardized JSON/CSV with freshness SLO.",
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description: "Port-level congestion and trade momentum API.",
    url: "/",
    siteName: "PortPulse",
    images: ["/images/hero-port.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PortPulse",
    description: "Port-level congestion and trade momentum API.",
    images: ["/images/hero-port.jpg"]
  },
  icons: { icon: "/icon.svg" }
};

import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "PortPulse — APIs for Port Operations",
  description: "Port congestion, dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description: "Port-level congestion & momentum data. Developer-first.",
    url: "https://useportpulse.com",
    siteName: "PortPulse",
    images: [{ url: "/images/hero-port.jpg" }],
  },
  twitter: { card: "summary_large_image", title: "PortPulse", description: "Port congestion & momentum API" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-black antialiased">
        {/* No beta banner here */}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
