import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ziad Amr — Web Developer | مطوّر ويب",
    template: "%s | Ziad Amr",
  },
  description:
    "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies. Building free services and making technology accessible to everyone.",
  keywords: [
    "Ziad Amr",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Node.js",
    "Socket.io",
    "LiveKit",
    "Docker",
    "Python",
    "Framer Motion",
    "shadcn/ui",
    "Zustand",
    "Egypt",
    "Frontend Developer",
    "Fullstack Developer",
    "مطور ويب",
    "زياد عمرو",
    "تطوير مواقع",
    "مطور مصري",
  ],
  authors: [{ name: "Ziad Amr", url: "https://ziadamrme.vercel.app" }],
  creator: "Ziad Amr",
  metadataBase: new URL("https://ziadamrme.vercel.app"),
  alternates: {
    canonical: "https://ziadamrme.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "https://ziadamrme.vercel.app",
    title: "Ziad Amr — Web Developer | مطوّر ويب",
    description:
      "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    siteName: "Ziad Amr Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziad Amr — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Amr — Web Developer",
    description:
      "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@ziad90216",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ziad Amr",
    alternateName: "زياد عمرو",
    url: "https://ziadamrme.vercel.app",
    jobTitle: "Web Developer",
    description:
      "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    sameAs: [
      "https://github.com/ziadamr45",
      "https://www.linkedin.com/in/ziad-amr-44633a411",
      "https://x.com/ziad90216",
      "https://www.facebook.com/ziad7mr",
      "https://www.instagram.com/ziadamr455/",
      "https://t.me/ziadamr",
      "https://www.threads.com/@ziadamr455",
      "https://youtube.com/@alhayat_ala_eltarek?si=pcsc_31Kcv3Jym14",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Socket.io",
      "LiveKit",
      "Docker",
      "Python",
      "Web Development",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ziad Amr Portfolio",
    alternateName: "موقع زياد عمرو",
    url: "https://ziadamrme.vercel.app",
    description:
      "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    inLanguage: ["ar", "en"],
    author: {
      "@type": "Person",
      name: "Ziad Amr",
    },
  };

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-dark.png" sizes="any" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#f97316" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="google-site-verification" content="google24e25ae325432d08" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ziad Amr" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="مدونة زياد عمرو" href="https://ziadamrme.vercel.app/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
