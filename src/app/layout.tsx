
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),
  title: { default: "PortPulse — APIs for Port Operations", template: "%s · PortPulse" },
  description: "Port-level congestion and trade momentum API. Standardized JSON/CSV with freshness SLO, p95 < 300ms.",
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description: "Port-level congestion and trade momentum API. Standardized JSON/CSV with freshness SLO.",
    url: "/",
    siteName: "PortPulse",
    images: ["/images/hero-port.jpg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PortPulse — APIs for Port Operations",
    description: "Port-level congestion and trade momentum API.",
    images: ["/images/hero-port.jpg"]
  },
  icons: { icon: "/icon.svg" }
};

import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
