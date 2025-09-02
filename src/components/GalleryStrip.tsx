// src/components/GalleryStrip.tsx
"use client";

import Image from "next/image";

type Item = { src: string; alt: string };

const ITEMS: readonly Item[] = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Port_of_Los_Angeles_containers.jpg", alt: "Port of Los Angeles" },
    { src: "https://images.unsplash.com/photo-1529694157871-059e1f06b3f9?q=80&w=1600&auto=format&fit=crop", alt: "Port cranes" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop", alt: "Containers" },
] as const;

export default function GalleryStrip() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ITEMS.map((it) => (
                <div key={it.src} className="overflow-hidden rounded-lg border bg-white">
                    <Image
                        src={it.src}
                        alt={it.alt}
                        width={800}
                        height={600}
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        className="h-48 w-full object-cover"
                    />
                    <div className="p-3 text-sm text-slate-600">{it.alt}</div>
                </div>
            ))}
        </div>
    );
}