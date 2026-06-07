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
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A0A0A] shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 448 512" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.38 310.59c0 23.09-15.84 44.33-44.68 44.33H68.28V155.78h42.42c28.84 0 44.67 21.24 44.67 44.33v110.48zm99.44-87.93h-36.9v50.43h36.9v26.77h-36.9v50.43h36.9v26.77H193.7V155.78h60.12v26.88zm99.44 154.26c-27.28 0-44.64-15.84-44.64-15.84V155.78h26.87v184.76s11.23 7.63 22.38 7.63c14.36 0 24.48-11.37 24.48-25.72V217.5c0-14.36-10.12-25.72-24.48-25.72-11.15 0-22.38 7.63-22.38 7.63v-27.94s17.36-15.84 44.64-15.84c27.28 0 49.35 22.07 49.35 49.35v120.43c0 27.28-22.07 49.35-49.35 49.35z"/>
            </svg>
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
