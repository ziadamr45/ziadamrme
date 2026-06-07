"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useApp } from "@/components/providers";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { translations } from "@/lib/translations";
import { getTechWithUsage, techStack } from "@/lib/data";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechBadge } from "@/components/tech-badge";

// Animated Progress Bar Component
function AnimatedProgressBar({ percentage, color, delay = 0 }: { percentage: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    setTimeout(() => {
      setWidth(percentage);
    }, delay);
  }, [percentage, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={ref} className="w-full h-2.5 sm:h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: color === "#000000" ? "#1e293b" : color,
          boxShadow: `0 0 8px ${color === "#000000" ? "#1e293b" : color}40`,
        }}
      />
    </div>
  );
}

// Animated Counter for percentage
function AnimatedPercentCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate]);

  return <span ref={ref}>{count}%</span>;
}

export default function TechPage() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();

  // Calculate tech usage from projects
  const projectTechArrays = projects.map((p) => p.tech);
  const techWithUsage = getTechWithUsage(projectTechArrays);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" onClick={() => sessionStorage.setItem('scroll:/tech', String(window.scrollY))} className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 mb-4">
            <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">{t.techPageTitle}</h1>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.techPageSubtitle}</p>
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          <Card className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-4 sm:p-5 text-center">
              <span className="text-2xl mb-1 block">🛠️</span>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{techStack.length}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{language === "ar" ? "تقنية" : "Technologies"}</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-4 sm:p-5 text-center">
              <span className="text-2xl mb-1 block">🚀</span>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{projects.length}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{language === "ar" ? "مشروع" : "Projects"}</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl col-span-2 sm:col-span-1">
            <CardContent className="p-4 sm:p-5 text-center">
              <span className="text-2xl mb-1 block">⭐</span>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{techWithUsage.filter(t => t.projectCount > 0).length}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{language === "ar" ? "تقنية مستخدمة فعليًا" : "Actively Used"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Technologies with progress bars */}
        <div className="space-y-3">
          {techWithUsage.map((tech, index) => (
            <ScrollReveal key={tech.name} animation="fade-in" delay={index * 30}>
              <Card className="relative overflow-hidden border-0 shadow-md shadow-slate-200/30 dark:shadow-black/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    {/* GitHub shields.io-style badge */}
                    <TechBadge name={tech.name} color={tech.color} size="md" />
                    {/* Project count badge */}
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-[4px] bg-slate-500 text-white whitespace-nowrap">
                      {t.techUsedInProjects.replace("{count}", String(tech.projectCount))}
                    </span>
                    {/* Percentage */}
                    <span className="text-sm font-bold min-w-[40px] text-right" style={{ color: tech.color === "#000000" ? "#1e293b" : tech.color }}>
                      <AnimatedPercentCounter target={tech.percentage} />
                    </span>
                  </div>
                  {/* Progress bar */}
                  <AnimatedProgressBar percentage={tech.percentage} color={tech.color} delay={index * 80} />
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
