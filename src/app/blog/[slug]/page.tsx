import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/content/posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — PortPulse Blog`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) return notFound();
  return (
    <main className="container mx-auto px-4 py-10">
      <a href="/blog" className="text-sm text-black/60 hover:text-black">← Back to blog</a>
      <h1 className="text-2xl font-semibold mt-2">{p.title}</h1>
      <div className="text-xs text-black/50">{p.date}</div>
      <p className="text-black/70 mt-4">{p.summary}</p>
      <article className="prose max-w-none mt-6">
        {p.body.split(/\n{2,}/).map((para, i) => (
          <p key={i} className="text-black/80">{para}</p>
        ))}
      </article>
    </main>
  );
}
