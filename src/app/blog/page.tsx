import Link from "next/link";
import { posts, TeaserChart } from "@/blog/posts";

export const dynamic = "force-static";

export default function BlogIndex() {
  const sorted = [...posts].sort((a,b)=> b.date.localeCompare(a.date));
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Industry Briefs</h1>
      <p className="text-black/60 mb-4">Fast, chart-first reads powered by PortPulse data. Updated weekly.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {sorted.map(p=>(
          <article key={p.slug} className="rounded-xl border border-black/10 bg-white p-4 hover:shadow-md transition">
            <div className="mb-2">{p.tags.map(t=><span key={t} className="mr-2 text-[11px] rounded-full bg-slate-100 px-2 py-0.5">{t}</span>)}</div>
            <h2 className="text-base font-semibold leading-snug">
              <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
            </h2>
            <div className="text-xs text-black/60 mt-1">{new Date(p.date).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</div>
            <div className="my-3"><TeaserChart kind="spark" /></div>
            <p className="text-sm text-black/70 line-clamp-3">{p.intro}</p>
            <div className="mt-3">
              <Link href={`/blog/${p.slug}`} className="text-sm text-[#0B2740] underline">Read brief</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
