"use client";

import { useState, useMemo } from "react";
import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { sortedProjects, projects } from "@/lib/projects";
import { techStack } from "@/lib/data";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";

export default function ProjectsPage() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Extract all unique tech tags
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects by selected tech
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return sortedProjects;
    return sortedProjects.filter((project) => project.tech.includes(selectedTech));
  }, [selectedTech]);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">{t.projectsTitle}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.projectsSubtitle}</p>
          </div>
        </div>

        {/* Tech Filter Chips */}
        <div className="mb-6">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">{t.filterByTech}</p>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedTech(null)}
              className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all duration-200 cursor-pointer ${
                selectedTech === null
                  ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30 dark:border-orange-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {t.filterAll}
            </button>
            {allTechs.map((tech) => {
              const techData = techStack.find((t) => t.name === tech);
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all duration-200 cursor-pointer ${
                    selectedTech === tech
                      ? "border-orange-500/30 dark:border-orange-500/20"
                      : "border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                  style={selectedTech === tech ? {
                    backgroundColor: techData ? `${techData.color}10` : undefined,
                    color: techData && techData.color !== "#000000" ? techData.color : undefined,
                  } : {
                    backgroundColor: undefined,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: techData ? techData.color : "#94a3b8" }}
                  />
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full">
              <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-8">
                {language === "ar" ? "لا توجد مشاريع بهذه التقنية" : "No projects with this technology"}
              </p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <Link key={project.key} href={`/projects/${project.key}`}>
                <Card className={`relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full ${project.featured ? "ring-1 ring-orange-400/30 dark:ring-orange-500/20" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl mt-0.5">{project.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">{project.name[language]}</h3>
                          {project.featured && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">{t.featuredTag}</span>}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">{project.description[language]}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((tech) => {
                        const techData = techStack.find((t) => t.name === tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium border"
                            style={{
                              borderColor: techData ? `${techData.color}30` : "rgba(148,163,184,0.3)",
                              backgroundColor: techData ? `${techData.color}08` : "rgba(241,245,249,1)",
                              color: techData && techData.color !== "#000000" ? techData.color : undefined,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: techData ? techData.color : "#94a3b8" }}
                            />
                            {tech}
                          </span>
                        );
                      })}
                      {project.tech.length > 4 && <span className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">+{project.tech.length - 4}</span>}
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                      {t.viewProject}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
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
