import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "التقنيات المستخدمة | Tech Stack",
  description:
    "التقنيات والأدوات التي أستخدمها في تطوير الويب: Next.js، React، TypeScript، Tailwind CSS، PostgreSQL، Prisma، Socket.io، LiveKit، Docker، وأكثر من 50 تقنية. Technologies and tools I use for web development.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/tech",
  },
  openGraph: {
    title: "التقنيات المستخدمة | Ziad Amr",
    description:
      "التقنيات والأدوات التي أستخدمها في تطوير الويب الاحترافي.",
    url: "https://ziadamrme.vercel.app/tech",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
};

export default function TechLayout({
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
        name: "Tech Stack",
        alternateName: "التقنيات",
        item: "https://ziadamrme.vercel.app/tech",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tech Stack",
    alternateName: "التقنيات المستخدمة",
    description:
      "Technologies and tools used for professional web development.",
    url: "https://ziadamrme.vercel.app/tech",
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
