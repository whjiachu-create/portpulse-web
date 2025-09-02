import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
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
  themeColor: "#0B2740",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F6F8FB] text-black antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
