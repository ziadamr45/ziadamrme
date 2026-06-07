"use client";

import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { blogPosts } from "@/lib/blog-data";
import { translations } from "@/lib/translations";
import { formatDate } from "@/lib/utils";
import { techStack } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TechBadge } from "@/components/tech-badge";
import { ShareButton } from "@/components/share-button";

export default function BlogPostPage() {
  const { language } = useApp();
  const t = translations[language];
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p?.slug === slug);

  if (!post) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <AnimatedBackground />
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

  // Find related posts by tag overlap count (more shared tags = more relevant)
  const relatedPosts = blogPosts
    .filter((p) => p?.slug !== slug)
    .map((p) => ({
      post: p as NonNullable<typeof p>,
      score: p?.tags?.filter((tag) => post.tags.includes(tag)).length ?? 0,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
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
          {post.image && (
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title[language]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          )}
          <CardContent className="p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                {formatDate(post.date, language)}
              </span>
            </div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{post.title[language]}</h1>
              <ShareButton url={`/blog/${post.slug}`} title={post.title[language]} language={language} size="md" />
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {post.tags.map((tag) => {
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

            {/* Markdown rendered content */}
            <div className="prose-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-5 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 list-disc ps-6 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 list-decimal ps-6 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>,
                  em: ({ children }) => <em className="italic text-slate-700 dark:text-slate-300">{children}</em>,
                  a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">{children}</a>,
                  blockquote: ({ children }) => <blockquote className="border-s-4 border-orange-500/30 dark:border-orange-400/30 ps-4 py-2 my-4 bg-orange-50/50 dark:bg-orange-500/5 rounded-e-lg">{children}</blockquote>,
                  code: ({ className, children }) => {
                    const isInline = !className;
                    if (isInline) {
                      return <code className="px-1.5 py-0.5 rounded-md text-[13px] font-mono bg-slate-100 dark:bg-slate-800 text-orange-600 dark:text-orange-400 border border-slate-200 dark:border-slate-700">{children}</code>;
                    }
                    return (
                      <code className={`${className} text-[13px]`}>{children}</code>
                    );
                  },
                  pre: ({ children }) => (
                    <div className="relative my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                      <div className="bg-slate-800 dark:bg-slate-950 overflow-x-auto">
                        <pre className="p-4 text-[13px] leading-relaxed font-mono text-slate-200">{children}</pre>
                      </div>
                    </div>
                  ),
                  img: ({ src, alt }) => {
                    const imgSrc = typeof src === "string" ? src : "";
                    return (
                      <figure className="my-6">
                        <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                          <Image
                            src={imgSrc}
                            alt={alt || ""}
                            width={864}
                            height={1152}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 768px"
                          />
                        </div>
                        {alt && (
                          <figcaption className="text-center text-xs text-slate-400 dark:text-slate-500 mt-2 italic">
                            {alt}
                          </figcaption>
                        )}
                      </figure>
                    );
                  },
                  hr: () => <hr className="my-6 border-slate-200 dark:border-slate-700" />,
                  table: ({ children }) => <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700"><table className="w-full text-sm">{children}</table></div>,
                  th: ({ children }) => <th className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-start text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">{children}</td>,
                }}
              >
                {post.content[language]}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {language === "ar" ? "مقالات مشابهة" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <Card className="relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                    {relatedPost.image && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title[language]}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    <CardContent className="p-5">
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium block mb-2">
                        {formatDate(relatedPost.date, language)}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{relatedPost.title[language]}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{relatedPost.excerpt[language]}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
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
