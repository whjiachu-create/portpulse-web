// src/app/coverage/page.tsx
export const dynamic = "force-static";

import { Suspense } from "react";
import CoverageClient from "./CoverageClient";
import type { Metadata } from "next";
import { buildCanonical } from "@/lib/seo";

type Q = { port?: string; q?: string; region?: string };

// ✅ 统一 canonical；带任何查询参数时 noindex（但 follow）
export async function generateMetadata(
  { searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }
): Promise<Metadata> {
  const sp = await searchParams;
  const hasAnyParams = Object.keys(sp || {}).length > 0;

  return {
    title: "Coverage — PortPulse",
    description: "100 live ports with standardized, comparable metrics. Filter by region or search UN/LOCODE.",
    alternates: { canonical: buildCanonical("/coverage") },
    robots: hasAnyParams ? { index: false, follow: true } : undefined,
  };
}

export default async function CoveragePage({ searchParams }: { searchParams: Promise<Q> }) {
  const { port = "", q = "", region = "" } = await searchParams;

  return (
    <Suspense>
      <CoverageClient
        initialPort={(port || "").toUpperCase().trim()}
        initialQ={q || ""}
        initialRegion={region || ""}
      />
    </Suspense>
  );
}