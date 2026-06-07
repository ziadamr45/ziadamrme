import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنشورات والأخبار | Social Feed & Updates",
  description:
    "آخر المنشورات والتحديثات من زياد عمرو على يوتيوب ومنصات التواصل الاجتماعي. فيديوهات تقنية وآخر الأخبار. Latest posts and updates from Ziad Amr.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/social-feed",
  },
  openGraph: {
    title: "المنشورات والأخبار | Ziad Amr",
    description:
      "آخر المنشورات والتحديثات من زياد عمرو على يوتيوب ومنصات التواصل الاجتماعي.",
    url: "https://ziadamrme.vercel.app/social-feed",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
};

export default function SocialFeedLayout({
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
        name: "Social Feed",
        alternateName: "المنشورات",
        item: "https://ziadamrme.vercel.app/social-feed",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Social Feed & Updates",
    alternateName: "المنشورات والأخبار",
    description:
      "Latest posts and updates from Ziad Amr on YouTube and social media platforms.",
    url: "https://ziadamrme.vercel.app/social-feed",
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
