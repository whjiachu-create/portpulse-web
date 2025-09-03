import Link from "next/link";
export const dynamic = "force-static";
import { posts } from "@/content/posts";

export default function BlogIndex() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="text-black/60">Weekly insights, methods notes, and coverage updates.</p>
      <div className="grid gap-4 mt-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="card p-5">
            <div className="text-xs text-black/50">{p.date}</div>
            <Link href={`/blog/`} className="block text-lg font-medium mt-1 hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-black/70 mt-2">{p.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}