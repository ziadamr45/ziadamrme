import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.key === slug);

  if (!project) {
    return {
      title: "مشروع غير موجود",
    };
  }

  return {
    title: project.name.ar,
    description: project.description.ar,
    alternates: {
      canonical: `https://ziadamrme.vercel.app/projects/${slug}`,
    },
    openGraph: {
      title: project.name.ar,
      description: project.description.ar,
      type: "article",
      url: `https://ziadamrme.vercel.app/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name.ar,
      description: project.description.ar,
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
        name: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "المشاريع",
        item: "https://ziadamrme.vercel.app/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name.ar,
        item: `https://ziadamrme.vercel.app/projects/${slug}`,
      },
    ],
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name.ar,
    alternateName: project.name.en,
    description: project.description.ar,
    url: project.url || `https://ziadamrme.vercel.app/projects/${slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    programmingLanguage: "TypeScript",
    author: {
      "@type": "Person",
      name: "Ziad Amr",
      url: "https://ziadamrme.vercel.app",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EGP",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      {children}
    </>
  );
}
