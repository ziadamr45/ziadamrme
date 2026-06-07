import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مشاريع تطوير الويب",
  description:
    "مشاريع ويب احترافية: تطبيقات راديو، ألعاب تفاعلية، أنظمة مشاركة موقع، بوابات أخبار ذكية، وأدوات تحميل. مشاريع حقيقية باستخدام Next.js و React و TypeScript.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/projects",
  },
  openGraph: {
    title: "مشاريع تطوير الويب | Ziad Amr",
    description:
      "مشاريع ويب احترافية متنوعة باستخدام أحدث التقنيات.",
    url: "https://ziadamrme.vercel.app/projects",
  },
};

export default function ProjectsLayout({
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
        name: "المشاريع",
        item: "https://ziadamrme.vercel.app/projects",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "مشاريع تطوير الويب",
    description:
      "مشاريع ويب احترافية متنوعة باستخدام أحدث التقنيات.",
    url: "https://ziadamrme.vercel.app/projects",
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
