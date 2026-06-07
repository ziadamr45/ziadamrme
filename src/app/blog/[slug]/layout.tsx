import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render all blog posts at build time for faster loading and better SEO
export function generateStaticParams() {
  return blogPosts
    .filter((p) => p?.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p?.slug === slug);

  if (!post) {
    return {
      title: "مقال غير موجود | Post Not Found",
    };
  }

  // Bilingual title: Arabic | English — works for both AR and EN visitors
  const bilingualTitle = `${post.title.ar} | ${post.title.en}`;
  const bilingualDescription = `${post.excerpt.ar} ${post.excerpt.en}`;

  return {
    title: bilingualTitle,
    description: bilingualDescription,
    alternates: {
      canonical: `https://ziadamrme.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title: bilingualTitle,
      description: bilingualDescription,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: `https://ziadamrme.vercel.app/blog/${slug}`,
      locale: "ar_EG",
      alternateLocale: "en_US",
      images: post.image
        ? [{ url: `https://ziadamrme.vercel.app${post.image}`, width: 1344, height: 768, alt: bilingualTitle }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: bilingualTitle,
      description: bilingualDescription,
      images: post.image ? [`https://ziadamrme.vercel.app${post.image}`] : undefined,
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
  const post = blogPosts.find((p) => p?.slug === slug);

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
        name: "Home",
        alternateName: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        alternateName: "المدونة",
        item: "https://ziadamrme.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title.en,
        alternateName: post.title.ar,
        item: `https://ziadamrme.vercel.app/blog/${slug}`,
      },
    ],
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    alternativeHeadline: post.title.ar,
    description: post.excerpt.en,
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
      url: "https://ziadamrme.vercel.app",
    },
    image: post.image ? `https://ziadamrme.vercel.app${post.image}` : undefined,
    keywords: post.tags.join(", "),
    inLanguage: ["ar", "en"],
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
