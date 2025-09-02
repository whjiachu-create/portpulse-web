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
