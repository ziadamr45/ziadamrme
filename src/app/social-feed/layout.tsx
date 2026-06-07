import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنشورات والأخبار",
  description:
    "آخر المنشورات والتحديثات من زياد عمرو على يوتيوب ومنصات التواصل الاجتماعي. فيديوهات تقنية وآخر الأخبار.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/social-feed",
  },
  openGraph: {
    title: "المنشورات والأخبار | Ziad Amr",
    description:
      "آخر المنشورات والتحديثات من زياد عمرو على يوتيوب ومنصات التواصل الاجتماعي.",
    url: "https://ziadamrme.vercel.app/social-feed",
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
        name: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "المنشورات",
        item: "https://ziadamrme.vercel.app/social-feed",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
