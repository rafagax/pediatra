import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { BLOG_POSTS, isBlogPostPublished } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/dra-katherine-ainslie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-09-08"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...BLOG_POSTS.filter((post) => isBlogPostPublished(post)).map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
