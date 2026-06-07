import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدونة تطوير الويب",
  description:
    "مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، Socket.io، أمان التطبيقات، تصميم RTL، و Tailwind CSS. مدونة زياد عمرو للمطورين العرب.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/blog",
  },
  openGraph: {
    title: "مدونة تطوير الويب | Ziad Amr",
    description:
      "مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، وأكثر من تجربة عملية.",
    url: "https://ziadamrme.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "مدونة تطوير الويب",
    description:
      "مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، وأكثر.",
    url: "https://ziadamrme.vercel.app/blog",
    isPartOf: {
      "@type": "WebSite",
      name: "Ziad Amr Portfolio",
      url: "https://ziadamrme.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      {children}
    </>
  );
}
