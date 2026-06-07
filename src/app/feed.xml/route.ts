import { blogPosts } from "@/lib/blog-data";

const BASE_URL = "https://ziadamrme.vercel.app";

export async function GET() {
  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title.ar} | ${post.title.en}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt.ar} ${post.excerpt.en}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
      ${post.image ? `<enclosure url="${BASE_URL}${post.image}" type="image/png" />` : ""}
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>مدونة زياد عمرو — Ziad Amr Blog</title>
    <link>${BASE_URL}</link>
    <description>مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، Socket.io، أمان التطبيقات وأكثر من تجربة عملية. Technical articles on web development from Ziad Amr.</description>
    <language>ar-eg</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>ziadamr45@gmail.com (Ziad Amr)</managingEditor>
    <webMaster>ziadamr45@gmail.com (Ziad Amr)</webMaster>
    <ttl>60</ttl>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
