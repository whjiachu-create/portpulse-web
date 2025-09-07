"use client";
export default function BoxSkeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-slate-100 ${className}`} />;
}
