import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSlugs, getPost, getPostMeta, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const meta = getPostMeta(slug);
    return {
      title: `${meta.title} | AIOS Labs`,
      description: meta.excerpt,
    };
  } catch {
    return { title: "Post not found | AIOS Labs" };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();

  const { meta, html } = await getPost(slug);

  return (
    <main className="aios-blog__wrap aios-blog__post">
      <Link href="/blog/" className="aios-blog__back">
        ← All posts
      </Link>
      <h1 className="aios-blog__title" style={{ fontSize: "clamp(30px,5vw,52px)" }}>
        {meta.title}
      </h1>
      <p className="aios-blog__meta">
        {formatDate(meta.date)} · {meta.author}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="aios-blog__cover" src={meta.cover} alt={meta.title} />
      <article
        className="aios-blog__prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
