import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "التقنيات المستخدمة",
  description:
    "التقنيات والأدوات التي أستخدمها في تطوير الويب: Next.js، React، TypeScript، Tailwind CSS، PostgreSQL، Prisma، Socket.io، LiveKit، Docker، وأكثر من 50 تقنية.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/tech",
  },
  openGraph: {
    title: "التقنيات المستخدمة | Ziad Amr",
    description:
      "التقنيات والأدوات التي أستخدمها في تطوير الويب الاحترافي.",
    url: "https://ziadamrme.vercel.app/tech",
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
        name: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "التقنيات",
        item: "https://ziadamrme.vercel.app/tech",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "التقنيات المستخدمة",
    description:
      "التقنيات والأدوات التي أستخدمها في تطوير الويب الاحترافي.",
    url: "https://ziadamrme.vercel.app/tech",
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
