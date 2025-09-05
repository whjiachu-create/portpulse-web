import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "PortPulse — APIs for Port Operations",
  description: "Port congestion, dwell, snapshots & alerts via unified APIs.",
  icons: { icon: "/icon.svg" }
};
export const viewport: Viewport = { themeColor: "#0B2740" };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
