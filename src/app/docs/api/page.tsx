"use client";
import Script from "next/script";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rapi-doc": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function ApiDocs() {
  const specUrl = "https://docs.useportpulse.com/openapi.json";
  return (
    <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
      <Script src="https://unpkg.com/rapidoc/dist/rapidoc-min.js" strategy="lazyOnload" />
      <rapi-doc
        spec-url={specUrl}
        render-style="read" theme="light"
        show-header="false" primary-color="#0B2740" nav-bg-color="#ffffff" nav-text-color="#0B2740"
        allow-try="false" show-method-in-nav="as-colored-block" show-components="true" use-path-in-nav-bar="true"
        schema-style="tree" api-key-name="X-API-Key" api-key-location="header"
      ></rapi-doc>
    </div>
  );
}
