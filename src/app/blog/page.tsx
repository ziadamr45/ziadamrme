"use client";

import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { blogPosts } from "@/lib/blog-data";
import { translations } from "@/lib/translations";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { TechBadge } from "@/components/tech-badge";
import { techStack } from "@/lib/data";

export default function BlogPage() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" onClick={() => sessionStorage.setItem('scroll:/blog', String(window.scrollY))} className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t.blogTitle}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.blogSubtitle}</p>
          </div>
        </div>

        <a
          href="https://dev.to/ziad_amr_0e76916f10a8563a"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] mb-6"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.2-.16.3-.46.3-.91v-2.07c0-.45-.1-.76-.3-.92zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.38V8.89h2.2c.92 0 1.54.19 1.98.78.44.58.58 1.23.58 2.82 0 1.58-.14 2.23-.58 2.81zm5.26-5.57H10.5v2.23h2.02v1.12H10.5v2.45h3.32v1.12H9.27V8.59h4.55v1.14zm5.58 6.33H17.8l-1.48-3.13h-.54v3.13h-1.23V8.89h2.16c.89 0 1.53.18 1.88.54.35.36.53.82.53 1.39 0 .96-.43 1.58-1.24 1.81l1.52 3.23z"/></svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {t.readMoreArticles}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.followOnDev} →
            </p>
          </div>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                {post.image && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title[language]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {formatDate(post.date, language)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{post.title[language]}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">{post.excerpt[language]}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => {
                        const techData = techStack.find((t) => t.name === tag);
                        return (
                          <TechBadge
                            key={tag}
                            name={tag}
                            color={techData?.color}
                            size="sm"
                          />
                        );
                      })}
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
