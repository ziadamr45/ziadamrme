"use client";

import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Controls } from "@/components/controls";
import { Navigation } from "@/components/navigation";
import { projects } from "@/lib/projects";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { language } = useApp();
  const t = translations[language];
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find((p) => p.key === slug);

  if (!project) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <AnimatedBackground />
        <Controls />
        <Navigation />
        <Card className="relative z-10 w-full max-w-md mx-4 overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8 text-center">
            <span className="text-5xl mb-4 block">🔍</span>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {language === "ar" ? "المشروع غير موجود" : "Project Not Found"}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {language === "ar" ? "لم نتمكن من العثور على هذا المشروع" : "We couldn't find this project"}
            </p>
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              {t.backToHome}
            </Link>
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

      {/* PROJECT DETAIL */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pt-12 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        <Card className="relative w-full overflow-hidden border-0 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">{project.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name[language]}</h1>
                  {project.featured && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">{t.featuredTag}</span>}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{project.description[language]}</p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                {language === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {t.visitSite}
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {t.viewCode}
              </a>
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
