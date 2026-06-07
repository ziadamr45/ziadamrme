import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات تطوير الويب",
  description:
    "خدمات تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js و React و TypeScript. تصميم واجهات مستخدم، تطبيقات ويب متكاملة، واجهات برمجية، تطبيقات الوقت الحقيقي، وتحسين محركات البحث SEO.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/services",
  },
  openGraph: {
    title: "خدمات تطوير الويب | Ziad Amr",
    description:
      "خدمات تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js و React و TypeScript.",
    url: "https://ziadamrme.vercel.app/services",
  },
};

export default function ServicesLayout({
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
        name: "الخدمات",
        item: "https://ziadamrme.vercel.app/services",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "خدمات تطوير الويب",
    description:
      "خدمات تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js و React و TypeScript.",
    url: "https://ziadamrme.vercel.app/services",
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
