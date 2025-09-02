import Image from "next/image";

const imgs = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Port_of_Los_Angeles_containers.jpg",
        alt: "Port of Los Angeles",
    },
    {
        src: "https://images.unsplash.com/photo-1529694157871-059e1f06b3f9?q=80&w=1600&auto=format&fit=crop",
        alt: "Port cranes",
    },
    {
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
        alt: "Containers",
    },
    {
        src: "https://images.unsplash.com/photo-1517954759935-3689a4ab7b1b?q=80&w=1600&auto=format&fit=crop",
        alt: "Singapore",
    },
    {
        src: "https://images.unsplash.com/photo-1556403189-51f9b8c9850e?q=80&w=1600&auto=format&fit=crop",
        alt: "Rotterdam",
    },
    {
        src: "https://images.unsplash.com/photo-1523655223294-94c78d35ae40?q=80&w=1600&auto=format&fit=crop",
        alt: "Shanghai",
    },
];

export default function PortGallery() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="mb-6 text-2xl font-semibold">现场一眼看懂</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {imgs.map((it, i) => (
                    <div key={i} className="group overflow-hidden rounded-lg border bg-white">
                        <Image
                            src={it.src}
                            alt={it.alt}
                            width={800}
                            height={600}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-3 text-sm text-gray-600">{it.alt}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}