"use client";

import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Controls } from "@/components/controls";
import { Navigation } from "@/components/navigation";
import { blogPosts } from "@/lib/blog-data";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function BlogPostPage() {
  const { language } = useApp();
  const t = translations[language];
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <AnimatedBackground />
        <Controls />
        <Navigation />
        <Card className="relative z-10 w-full max-w-md mx-4 overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8 text-center">
            <span className="text-5xl mb-4 block">📄</span>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {language === "ar" ? "المقال غير موجود" : "Post Not Found"}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {language === "ar" ? "لم نتمكن من العثور على هذا المقال" : "We couldn't find this blog post"}
            </p>
            <button type="button" onClick={() => router.back()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              {t.backToBlog}
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Controls />
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-md mx-auto px-4 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <button type="button" onClick={() => router.back()} className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors group cursor-pointer">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            {t.backToBlog}
          </button>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <Link href="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            {t.backToHome}
          </Link>
        </div>

        <Card className="relative w-full overflow-hidden border-0 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                {new Date(post.date).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{post.title[language]}</h1>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">{tag}</span>
              ))}
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              {post.content[language].split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="w-full pb-8 pt-4 mt-auto">
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Ziad Amr
        </p>
      </footer>
    </div>
  );
}
