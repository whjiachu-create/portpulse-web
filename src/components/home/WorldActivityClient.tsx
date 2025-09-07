"use client";
import dynamic from "next/dynamic";

type Props = { title?: string; height?: number; topN?: number };

const WorldActivity = dynamic(() => import("./WorldActivity"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-slate-200 bg-white h-[360px] animate-pulse" aria-hidden />
  ),
});

export default function WorldActivityClient(props: Props) {
  return <WorldActivity {...props} />;
}
