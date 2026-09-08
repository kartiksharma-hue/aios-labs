import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Insights on Growth, Ads & Creative | AIOS Labs",
  description:
    "Playbooks and lessons on performance marketing, Meta Ads, Google Ads, SEO and creative from the AIOS Labs team.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="aios-blog__wrap">
      <section className="aios-blog__hero">
        <span className="aios-blog__kicker">★ The AIOS Labs Blog</span>
        <h1 className="aios-blog__title">Insights that move numbers</h1>
        <p className="aios-blog__sub">
          Playbooks and lessons on performance marketing, creative and growth —
          the same thinking we use to scale D2C brands.
        </p>
      </section>

      <section className="aios-blog__grid">
        {posts.length === 0 && (
          <p className="aios-blog__sub">No posts yet. Check back soon.</p>
        )}
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="aios-blog__card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.cover} alt={p.title} loading="lazy" />
            <div className="aios-blog__card-body">
              <span className="aios-blog__card-date">{formatDate(p.date)}</span>
              <span className="aios-blog__card-title">{p.title}</span>
              <span className="aios-blog__card-ex">{p.excerpt}</span>
              <span className="aios-blog__card-more">Read more →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
