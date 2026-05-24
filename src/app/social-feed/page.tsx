"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { translations } from "@/lib/translations";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import type { SocialFeedEntry } from "@/app/api/social-feed/route";

export default function SocialFeedPage() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();
  const [entries, setEntries] = useState<SocialFeedEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await fetch("/api/social-feed");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEntries(data.entries || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchEntries();
  }, []);

  const youtubePosts = entries.filter((e): e is Extract<SocialFeedEntry, { type: "post" }> => e.type === "post" && e.platform === "youtube");

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-rose-500/10 to-red-500/10 dark:from-rose-500/20 dark:to-red-500/20">
            <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t.socialFeedTitle}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.socialFeedSubtitle}</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl animate-pulse">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-t-xl" />
                <CardContent className="p-4">
                  <div className="w-3/4 h-4 rounded bg-slate-200 dark:bg-slate-700 mb-2" />
                  <div className="w-1/2 h-3 rounded bg-slate-200 dark:bg-slate-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <Card className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-500">{t.unableToLoad}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubePosts.map((post, idx) => (
              <a
                key={`yt-${idx}`}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl cursor-pointer overflow-hidden">
                  {post.thumbnail && (
                    <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.thumbnail}
                        alt={post.content}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-5 h-5 text-white ms-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed line-clamp-2 mb-1.5">
                      {post.content}
                    </p>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">{post.date}</span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
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
