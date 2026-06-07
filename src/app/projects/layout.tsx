import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مشاريع تطوير الويب | Web Development Projects",
  description:
    "مشاريع ويب احترافية: تطبيقات راديو، ألعاب تفاعلية، أنظمة مشاركة موقع، بوابات أخبار ذكية، وأدوات تحميل. مشاريع حقيقية باستخدام Next.js و React و TypeScript. Professional web projects: radio apps, interactive games, location sharing, smart news portals, and download tools.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/projects",
  },
  openGraph: {
    title: "مشاريع تطوير الويب | Ziad Amr",
    description:
      "مشاريع ويب احترافية متنوعة باستخدام أحدث التقنيات.",
    url: "https://ziadamrme.vercel.app/projects",
    locale: "ar_EG",
    alternateLocale: "en_US",
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
        name: "Home",
        alternateName: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        alternateName: "المشاريع",
        item: "https://ziadamrme.vercel.app/projects",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Projects",
    alternateName: "مشاريع تطوير الويب",
    description:
      "Professional web projects built with modern technologies like Next.js, React, and TypeScript.",
    url: "https://ziadamrme.vercel.app/projects",
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
