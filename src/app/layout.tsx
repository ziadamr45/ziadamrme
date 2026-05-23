import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziad Amr — Web Developer | مطوّر ويب",
  description:
    "Egyptian web developer specializing in Next.js, React, TypeScript, and modern web technologies. Building free services and making technology accessible to everyone.",
  keywords: [
    "Ziad Amr",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Egypt",
    "Frontend Developer",
    "Fullstack Developer",
    "مطور ويب",
    "زياد عمرو",
  ],
  authors: [{ name: "Ziad Amr", url: "https://ziadamrme.vercel.app" }],
  creator: "Ziad Amr",
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
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta name="theme-color" content="#0a5c5c" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
