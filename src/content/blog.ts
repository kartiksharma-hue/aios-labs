import type { BlogBlock, BlogPost } from "@/content/blog-types";
import type { MediaSlot } from "@/components/ui/media-frame";

/**
 * The journal.
 *
 * Every entry is a draft: `published: false`, no author, no publication date.
 * Nothing here is presented as a published article, and no fabricated article
 * exists purely to fill the page.
 *
 * To publish: write the body, set an author and publishedAt, flip `published`
 * to true. Indexing, Article structured data and sitemap inclusion all follow
 * from that one flag — no component changes.
 */

const reservedCover = (label: string): MediaSlot => ({
  label,
  ratio: "16 / 9",
  src: null,
  alt: null,
});

/**
 * Article 01 carries a working outline so the body renderer is exercised by
 * real structure. It is labelled a draft throughout and contains no client
 * result, statistic or attributed quote.
 */
const measurementOutline: readonly BlogBlock[] = [
  {
    type: "note",
    content: [
      "This is a working outline, not a finished article. It is published here as a draft so the argument can be reviewed before it is written out in full.",
    ],
  },
  {
    type: "paragraph",
    content: [
      "Most businesses running several acquisition channels have the same experience at the end of a quarter: every channel report looks defensible, and the total does not match what the business actually booked. Nobody is lying. The reports are simply answering different questions.",
    ],
  },
  { type: "heading", level: 2, text: "Why the totals disagree" },
  {
    type: "paragraph",
    content: [
      "Each platform reports the conversions it can see, inside its own attribution window, and credits itself generously. Two platforms can both take full credit for the same sale, and neither is wrong by its own definition.",
    ],
  },
  {
    type: "list",
    ordered: false,
    items: [
      ["Different attribution windows, compared as though they were the same."],
      ["Modelled conversions counted alongside observed ones, without distinction."],
      ["A conversion event that means something different in each system."],
      ["No reconciliation against the business's own records."],
    ],
  },
  {
    type: "quote",
    text: "A number you cannot reconcile is not a measurement. It is an opinion with a decimal point.",
    attribution: null,
  },
  { type: "heading", level: 2, text: "What to fix first" },
  {
    type: "paragraph",
    content: [
      "The fix is rarely a better dashboard. It is agreeing what counts as a conversion, capturing it once, and reconciling platform-reported numbers against your own records often enough to know the ratio. That is the work described under ",
      { text: "performance marketing", href: "/services/performance-marketing" },
      " and ",
      { text: "conversion optimization", href: "/services/conversion-optimization" },
      ".",
    ],
  },
  { type: "heading", level: 3, text: "Still to write" },
  {
    type: "list",
    ordered: true,
    items: [
      ["A worked example of two platforms double-counting one sale."],
      ["How to decide what a conversion is worth before instrumenting it."],
      ["What a reconciliation cadence looks like in practice."],
    ],
  },
];

export const posts: readonly BlogPost[] = [
  {
    slug: "why-channel-reports-dont-add-up",
    reference: "Article 01",
    title: "Why your channel reports don't add up",
    excerpt:
      "Every platform reports the conversions it can see and credits itself generously. Here is why the totals disagree, and what to fix before trusting any of them.",
    category: "Measurement",
    author: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    cover: reservedCover("Article cover artwork"),
    content: measurementOutline,
    related: [
      "campaign-versus-system",
      "buying-intent-not-traffic",
    ],
    featured: true,
    published: false,
    seoTitle: "Why your channel reports don't add up",
    seoDescription:
      "Why platform-reported conversions disagree with what the business booked, and what to fix before trusting the numbers.",
  },
  {
    slug: "campaign-versus-system",
    reference: "Article 02",
    title: "The difference between a campaign and a system",
    excerpt:
      "A campaign ends. A system keeps compounding and can be handed to someone else without collapsing. What actually separates the two.",
    category: "Strategy",
    author: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    cover: reservedCover("Article cover artwork"),
    content: null,
    related: ["why-channel-reports-dont-add-up", "buying-intent-not-traffic"],
    featured: false,
    published: false,
    seoTitle: "The difference between a campaign and a system",
    seoDescription:
      "Why growth built as a system compounds where a campaign stops, and what has to be true for the distinction to hold.",
  },
  {
    slug: "buying-intent-not-traffic",
    reference: "Article 03",
    title: "Buying intent, not traffic",
    excerpt:
      "Volume is easy to buy and easy to mistake for demand. Reading a query for the commercial question behind it changes what is worth paying for.",
    category: "Paid Acquisition",
    author: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    cover: reservedCover("Article cover artwork"),
    content: null,
    related: ["why-channel-reports-dont-add-up", "campaign-versus-system"],
    featured: false,
    published: false,
    seoTitle: "Buying intent, not traffic",
    seoDescription:
      "How to read a search query for the commercial question behind it, and why that changes what is worth paying for.",
  },
];

/** Published only — this is what a sitemap and indexing should ever consider. */
export const publishedPosts = posts.filter((post) => post.published);

/** What /blog lists: published first, then drafts, each clearly marked. */
export const listedPosts = [
  ...publishedPosts,
  ...posts.filter((post) => !post.published),
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost): readonly BlogPost[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((entry): entry is BlogPost => Boolean(entry) && entry !== post);
}

/** Roughly 200 words a minute; only ever an estimate, never a claim. */
export function estimateReadingTime(post: BlogPost): number | null {
  if (post.readingTime !== null) return post.readingTime;
  if (!post.content) return null;

  const words = post.content.reduce((total, block) => {
    switch (block.type) {
      case "paragraph":
      case "note":
        return (
          total +
          block.content.reduce(
            (n, part) =>
              n + (typeof part === "string" ? part : part.text).split(/\s+/).length,
            0,
          )
        );
      case "heading":
        return total + block.text.split(/\s+/).length;
      case "quote":
        return total + block.text.split(/\s+/).length;
      case "list":
        return (
          total +
          block.items.reduce(
            (n, item) =>
              n +
              item.reduce(
                (m, part) =>
                  m +
                  (typeof part === "string" ? part : part.text).split(/\s+/).length,
                0,
              ),
            0,
          )
        );
      default:
        return total;
    }
  }, 0);

  return Math.max(1, Math.round(words / 200));
}
