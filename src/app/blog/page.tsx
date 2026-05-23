"use client";

import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Controls } from "@/components/controls";
import { Navigation } from "@/components/navigation";
import { blogPosts } from "@/lib/blog-data";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function BlogPage() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Controls />
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-md mx-auto px-4 pt-12 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t.blogTitle}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-500">{t.blogSubtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer mb-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {new Date(post.date).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{post.title[language]}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{post.excerpt[language]}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">{tag}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 dark:text-orange-400">
                      {t.readMore}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
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
