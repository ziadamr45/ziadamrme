"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useApp } from "@/components/providers";
import { translations } from "@/lib/translations";
import type { SocialFeedEntry } from "@/app/api/social-feed/route";

export function SocialFeedSection() {
  const { language } = useApp();
  const t = translations[language];
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

  // YouTube posts only
  const youtubePosts = entries.filter((e): e is Extract<SocialFeedEntry, { type: "post" }> => e.type === "post" && e.platform === "youtube").slice(0, 2);

  if (error) {
    return null;
  }

  if (!loading && youtubePosts.length === 0) {
    return null;
  }

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-rose-500/10 to-red-500/10 dark:from-rose-500/20 dark:to-red-500/20">
            <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.latestPosts}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.latestPostsSubtitle}</p>
          </div>
        </div>
        <Link href="/social-feed" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors hidden sm:block">
          {t.viewAllPosts} →
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <Card key={i} className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl animate-pulse">
              <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-t-xl" />
              <CardContent className="p-4">
                <div className="w-3/4 h-4 rounded bg-slate-200 dark:bg-slate-700 mb-2" />
                <div className="w-1/2 h-3 rounded bg-slate-200 dark:bg-slate-700" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* Mobile view all link */}
      <Link href="/social-feed" className="block sm:hidden mt-3">
        <Card className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
          <CardContent className="p-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 dark:text-orange-400">
              {t.viewAllPosts}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            </span>
          </CardContent>
        </Card>
      </Link>
    </section>
  );
}
