import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  author: string;
};

export function getSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostMeta(slug: string): PostMeta {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    cover: data.cover ?? "/img/blog/placeholder-cover.svg",
    author: data.author ?? "AIOS Labs",
  };
}

export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map(getPostMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8");
  const { content } = matter(raw);
  const html = await marked.parse(content);
  return { meta: getPostMeta(slug), html };
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
