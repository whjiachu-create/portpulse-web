"use client";
import { usePathname } from "next/navigation";
import React from "react";

/** Home-only 6 images placeholders (3:2) */
export default function GalleryPortal() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  const items = Array.from({ length: 6 }).map((_, i) => i);
  return (
    <section aria-label="Gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4">Gallery</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Placeholder — replace with real photos (ports, terminals, AIS radar, vessel classes).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i} className="relative overflow-hidden rounded-xl">
            {/* 3:2 rectangle */}
            <div className="gallery-ph aspect-[3/2]" />
          </div>
        ))}
      </div>
    </section>
  );
}
