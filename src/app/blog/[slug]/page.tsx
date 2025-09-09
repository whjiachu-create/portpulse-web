// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost } from "@/blog/posts";
import { buildCanonical, hasTrackingParams } from "@/lib/seo";
import type { ReactNode } from "react";

export const dynamic = "force-static";

// 统一的 metadata（仅此一处；不要再导出 metadata 常量）
export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  }
): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const p = getPost(slug);
  if (!p) return {};

  const canonical = buildCanonical(`/blog/${slug}`);
  const images = p.heroSrc
    ? [{ url: p.heroSrc, width: 1200, height: 675 }]
    : [{ url: "/og.png", width: 1200, height: 630 }];

  return {
    title: `${p.title} — PortPulse Blog`,
    description: p.intro,
    alternates: { canonical },
    robots: hasTrackingParams(sp) ? { index: false, follow: true } : undefined,
    openGraph: {
      title: p.title,
      description: p.intro,
      type: "article",
      url: canonical,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.intro,
      images: images.map((i) => i.url),
    },
  };
}

// 你的 markdown-lite 渲染（保持不变，仅把 JSX.Element 改为 ReactNode）
function renderBlocks(md: string) {
  const lines = md.split("\n");
  const blocks: ReactNode[] = [];
  let listBuf: string[] = [];

  const flushList = () => {
    if (listBuf.length) {
      blocks.push(
        <ul className="list-disc pl-5 space-y-1" key={`ul-${blocks.length}`}>
          {listBuf.map((t, i) => <li key={i}>{t.replace(/^- +/, "")}</li>)}
        </ul>
      );
      listBuf = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushList(); continue; }

    if (/^- /.test(line)) { listBuf.push(line); continue; } // 列表

    if (line.startsWith("## ")) { // 小标题
      flushList();
      blocks.push(<h3 className="text-lg font-semibold mt-6" key={`h-${blocks.length}`}>{line.slice(3)}</h3>);
      continue;
    }

    // 图片：![alt](/path "caption")
    const img = line.match(/^!\[(.*?)\]\((\S+)(?:\s+"(.*?)")?\)$/);
    if (img) {
      flushList();
      const [, alt, src, cap] = img;
      blocks.push(
        <figure className="my-5" key={`fig-${blocks.length}`}>
          <img
            src={src}
            alt={alt || ""}
            width={1600}
            height={900}
            decoding="async"
            loading="lazy"
            className="block w-full h-auto rounded-xl border border-black/10"
          />
          {cap && <figcaption className="text-xs text-black/60 mt-2">{cap}</figcaption>}
        </figure>
      );
      continue;
    }

    // 段落
    flushList();
    blocks.push(<p className="leading-7" key={`p-${blocks.length}`}>{line}</p>);
  }
  flushList();
  return blocks;
}

// 页面组件（含 Article JSON-LD）
export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return notFound();

  const canonical = buildCanonical(`/blog/${slug}`);

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Article JSON-LD（不影响 UI） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.intro,
            datePublished: p.date,
            mainEntityOfPage: canonical,
            image: p.heroSrc ? [p.heroSrc] : ["/og.png"],
            author: { "@type": "Organization", name: "PortPulse" },
            publisher: {
              "@type": "Organization",
              name: "PortPulse",
              logo: { "@type": "ImageObject", url: "/icon.svg" }
            }
          }),
        }}
      />

      <article className="mx-auto max-w-3xl">
        <div className="text-sm text-black/60">
          {new Date(p.date).toLocaleDateString("en-CA", { dateStyle: "medium" })}
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold mt-1">{p.title}</h1>
        <p className="text-black/70 mt-2">{p.intro}</p>

        {p.heroSrc && (
          <figure className="mt-6">
            <img
              src={p.heroSrc}
              alt={p.heroAlt || p.title}
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              className="block w-full h-auto rounded-xl border border-black/10"
            />
            {p.heroAlt && <figcaption className="text-xs text-black/60 mt-2">{p.heroAlt}</figcaption>}
          </figure>
        )}

        <div className="prose prose-neutral max-w-none mt-6">
          {renderBlocks(p.body)}
        </div>
      </article>
    </main>
  );
}