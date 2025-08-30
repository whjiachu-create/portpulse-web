import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "PortPulse — APIs for Port Operations",
  description: "Unified APIs for congestion, dwell, berth wait and ETA/ETB forecasts — plus corridor snapshots, trends and alerts.",
  metadataBase: new URL("https://useportpulse.com"),
  openGraph: { title: "PortPulse — APIs for Port Operations", description: "Real-time port visibility & predictive insights." },
  twitter: { card: "summary_large_image", title: "PortPulse", description: "APIs for port operations" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 via-sky-50/50 to-white text-slate-900">
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org", "@type":"Organization",
          "name":"PortPulse", "url":"https://useportpulse.com",
          "logo":"https://useportpulse.com/logos/placeholder-light.svg"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org", "@type":"Product",
          "name":"PortPulse API",
          "description":"APIs for congestion, dwell, berth wait and ETA/ETB forecasts; trends, snapshots and alerts.",
          "brand":{"@type":"Brand","name":"PortPulse"}
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org", "@type":"WebSite",
          "name":"PortPulse", "url":"https://useportpulse.com"
        })}</script>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
