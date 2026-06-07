import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدونة تطوير الويب | Web Development Blog",
  description:
    "مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، Socket.io، أمان التطبيقات، تصميم RTL، و Tailwind CSS. مدونة زياد عمرو للمطورين العرب. Technical articles on web development, Next.js, React, TypeScript, and more.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/blog",
  },
  openGraph: {
    title: "مدونة تطوير الويب | Ziad Amr",
    description:
      "مقالات تقنية عن تطوير الويب، Next.js، React، TypeScript، وأكثر من تجربة عملية.",
    url: "https://ziadamrme.vercel.app/blog",
    locale: "ar_EG",
    alternateLocale: "en_US",
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
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Blog",
    alternateName: "مدونة تطوير الويب",
    description:
      "Technical articles on web development, Next.js, React, TypeScript, and more.",
    url: "https://ziadamrme.vercel.app/blog",
    inLanguage: ["ar", "en"],
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
