
import "./globals.css";

export const metadata: Metadata = {
  title: "PortPulse — APIs for Port Operations",
  description: "Port-level congestion, dwell, berth efficiency and momentum via unified APIs. JSON/CSV, freshness SLO, p95 < 300ms.",
  openGraph: {
    title: "PortPulse — APIs for Port Operations",
    description: "Port-level congestion and momentum APIs with freshness SLO.",
    url: "https://useportpulse.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PortPulse — APIs for Port Operations",
    description: "Developer-first port operations data."
  }
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
