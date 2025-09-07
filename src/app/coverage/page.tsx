import type { Metadata } from "next";
import CoverageTable from "@/components/coverage/CoverageTable";

export const metadata: Metadata = {
  title: "Coverage — PortPulse",
  description: "Full list of covered ports with search and filters.",
};

export default async function CoveragePage({
  searchParams,
}: {
  // Next 15: searchParams 是 async iterable，需要 await 再取属性
  searchParams: Promise<{ port?: string }>;
}) {
  const { port } = await searchParams;
  const initial = (port ?? "").toUpperCase().trim();

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-xl font-semibold">Coverage</h1>
      <p className="text-black/60 text-sm">Deep-link from map with <code>?port=USLAX</code>.</p>
      <div className="mt-4">
        <CoverageTable initialPort={initial} />
      </div>
    </main>
  );
}
