import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render all project pages at build time for faster loading and better SEO
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.key,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.key === slug);

  if (!project) {
    return {
      title: "مشروع غير موجود | Project Not Found",
    };
  }

  // Bilingual title: Arabic | English
  const bilingualTitle = `${project.name.ar} | ${project.name.en}`;
  const bilingualDescription = `${project.description.ar} ${project.description.en}`;

  return {
    title: bilingualTitle,
    description: bilingualDescription,
    alternates: {
      canonical: `https://ziadamrme.vercel.app/projects/${slug}`,
    },
    openGraph: {
      title: bilingualTitle,
      description: bilingualDescription,
      type: "article",
      url: `https://ziadamrme.vercel.app/projects/${slug}`,
      locale: "ar_EG",
      alternateLocale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: bilingualTitle,
      description: bilingualDescription,
    },
  };
}

export default async function ProjectDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.key === slug);

  if (!project) {
    return <>{children}</>;
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.name.en,
        alternateName: project.name.ar,
        item: `https://ziadamrme.vercel.app/projects/${slug}`,
      },
    ],
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name.en,
    alternateName: project.name.ar,
    description: project.description.en,
    url: project.url || `https://ziadamrme.vercel.app/projects/${slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    programmingLanguage: "TypeScript",
    author: {
      "@type": "Person",
      name: "Ziad Amr",
      alternateName: "زياد عمرو",
      url: "https://ziadamrme.vercel.app",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EGP",
    },
    inLanguage: ["ar", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      {children}
    </>
  );
}
