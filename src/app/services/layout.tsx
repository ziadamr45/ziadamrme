import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات تطوير الويب | Web Development Services",
  description:
    "خدمات تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js و React و TypeScript. تصميم واجهات مستخدم، تطبيقات ويب متكاملة، واجهات برمجية، تطبيقات الوقت الحقيقي، وتحسين محركات البحث SEO. Professional web development services with Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/services",
  },
  openGraph: {
    title: "خدمات تطوير الويب | Ziad Amr",
    description:
      "خدمات تطوير مواقع وتطبيقات ويب احترافية باستخدام Next.js و React و TypeScript.",
    url: "https://ziadamrme.vercel.app/services",
    locale: "ar_EG",
    alternateLocale: "en_US",
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
        name: "Home",
        alternateName: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        alternateName: "الخدمات",
        item: "https://ziadamrme.vercel.app/services",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Development Services",
    alternateName: "خدمات تطوير الويب",
    description:
      "Professional web development services including web design, full-stack applications, API development, real-time apps, and SEO optimization.",
    url: "https://ziadamrme.vercel.app/services",
    inLanguage: ["ar", "en"],
    isPartOf: {
      "@type": "WebSite",
      name: "Ziad Amr Portfolio",
      url: "https://ziadamrme.vercel.app",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies do you use for web development?",
        alternateName: "ما التقنيات التي تستخدمها في تطوير الويب؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I use Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and Socket.io for building modern, fast, and scalable web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build real-time applications?",
        alternateName: "هل تبني تطبيقات الوقت الحقيقي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I build real-time applications using Socket.io and LiveKit for features like live chat, multiplayer games, voice calls, and location sharing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer SEO optimization services?",
        alternateName: "هل تقدم خدمات تحسين محركات البحث؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I optimize websites for search engines using Schema.org structured data, meta tags, sitemaps, RSS feeds, canonical URLs, Open Graph, and performance optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Are the services free or paid?",
        alternateName: "هل الخدمات مجانية أم مدفوعة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I build both free and open-source services accessible to everyone, as well as custom projects upon request. Contact me to discuss your project requirements.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
