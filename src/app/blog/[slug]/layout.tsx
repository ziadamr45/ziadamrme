import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "مقال غير موجود",
    };
  }

  return {
    title: post.title.ar,
    description: post.excerpt.ar,
    alternates: {
      canonical: `https://ziadamrme.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title: post.title.ar,
      description: post.excerpt.ar,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: `https://ziadamrme.vercel.app/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.ar,
      description: post.excerpt.ar,
    },
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <>{children}</>;
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "المدونة",
        item: "https://ziadamrme.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title.ar,
        item: `https://ziadamrme.vercel.app/blog/${slug}`,
      },
    ],
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.ar,
    description: post.excerpt.ar,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Ziad Amr",
      alternateName: "زياد عمرو",
      url: "https://ziadamrme.vercel.app",
    },
    url: `https://ziadamrme.vercel.app/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ziadamrme.vercel.app/blog/${slug}`,
    },
    publisher: {
      "@type": "Person",
      name: "Ziad Amr",
    },
    keywords: post.tags.join(", "),
    inLanguage: "ar",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {children}
    </>
  );
}
