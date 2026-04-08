import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziad Amr — مطوِّر مواقع ويب",
  description: "الصفحة الشخصية لزياد عمرو — مطوِّر مواقع ويب. الهدف: إنشاء خدمات مجانية وإتاحة التكنولوجيا الحديثة للجميع ونشر الخير والفائدة.",
  openGraph: {
    title: "Ziad Amr — مطوِّر مواقع ويب",
    description: "مطوِّر مواقع ويب — إنشاء خدمات مجانية وإتاحة التكنولوجيا الحديثة للجميع.",
    locale: "ar_AR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Amr — مطوِّر مواقع ويب",
    description: "مطوِّر مواقع ويب — إنشاء خدمات مجانية وإتاحة التكنولوجيا الحديثة للجميع.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
