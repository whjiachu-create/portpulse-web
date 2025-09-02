"use client";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type GAProps = {
  gaId?: string;
};

export default function Analytics({ gaId = process.env.NEXT_PUBLIC_GA_ID }: GAProps) {
  if (process.env.NODE_ENV !== "production" || !gaId) return null;
  const id = gaId;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
