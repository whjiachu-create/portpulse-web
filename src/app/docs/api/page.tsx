"use client";
import React from "react";
import Script from "next/script";

/** 将 <rapi-doc> 作为 React 组件使用，避免使用 TS namespace 写法 */
const RapiDoc = "rapi-doc" as unknown as React.ElementType;

export default function ApiDocs() {
  // 与现网一致的 OpenAPI 源
  const specUrl = "https://docs.useportpulse.com/openapi.json";

  // 关键：仅在 rapidoc 脚本加载完成后再渲染 <rapi-doc>，避免重复 hydrate 引发“跳到顶部”
  const [ready, setReady] = React.useState(false);

  return (
    <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
      <Script
        src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />

      {/* 独立滚动容器：固定高度，占满视窗减去头部与上下内边距 */}
      <div
        id="api-docs-wrapper"
        className="h-[calc(100vh-140px)] overflow-y-auto rounded-lg border border-slate-200"
      >
        {ready ? (
          <RapiDoc
            spec-url={specUrl}
            render-style="read"
            theme="light"
            show-header="false"
            primary-color="#0B2740"
            nav-bg-color="#ffffff"
            nav-text-color="#0B2740"
            allow-try="false"
            show-method-in-nav="as-colored-block"
            show-components="true"
            use-path-in-nav-bar="true"
            schema-style="tree"
            api-key-name="X-API-Key"
            api-key-location="header"
            // 关键：稳定尺寸，避免内部重排造成页面顶跳
            style={{ height: "100%", width: "100%" }}
          />
        ) : (
          // 轻量占位，防止布局抖动
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Loading API docs…
          </div>
        )}
      </div>
    </div>
  );
}