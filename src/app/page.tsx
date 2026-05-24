"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useApp } from "@/components/providers";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { socialLinks } from "@/lib/social-links";
import { sortedProjects } from "@/lib/projects";
import { getStats, techStack, whyHireMePoints, testimonials } from "@/lib/data";
import { translations } from "@/lib/translations";
import { SocialFeedSection } from "@/components/social-feed";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();
  const stats = getStats(sortedProjects.length);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Listen for open-contact-form custom event (from navigation)
  useEffect(() => {
    const handler = () => setShowContactForm(true);
    window.addEventListener("open-contact-form", handler);
    return () => window.removeEventListener("open-contact-form", handler);
  }, []);

  // Listen for open-profile-image custom event (from navigation)
  useEffect(() => {
    const handler = () => setShowImageModal(true);
    window.addEventListener("open-profile-image", handler);
    return () => window.removeEventListener("open-profile-image", handler);
  }, []);

  // Scroll to element with offset for fixed header
  const scrollToElementWithOffset = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle scroll to contact from other pages via sessionStorage
  useEffect(() => {
    const scrollToContact = sessionStorage.getItem("scrollToContact");
    const scrollToGithub = sessionStorage.getItem("scrollToGithub");
    const scrollToTestimonials = sessionStorage.getItem("scrollToTestimonials");

    if (scrollToContact === "true") {
      sessionStorage.removeItem("scrollToContact");
      setTimeout(() => {
        scrollToElementWithOffset("contact");
        setShowContactForm(true);
      }, 500);
    } else if (scrollToGithub === "true") {
      sessionStorage.removeItem("scrollToGithub");
      setTimeout(() => {
        scrollToElementWithOffset("github-activity");
      }, 500);
    } else if (scrollToTestimonials === "true") {
      sessionStorage.removeItem("scrollToTestimonials");
      setTimeout(() => {
        scrollToElementWithOffset("testimonials");
      }, 500);
    }
  }, []);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error" | "rateLimit" | "validation">("idle");

  // Animated Counter Component
  function AnimatedCounter({ target, suffix = "+", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    const animate = useCallback(() => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo for smooth deceleration
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(eased * target));
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

    return <div ref={ref}>{count}{suffix}</div>;
  }

  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showImageModal]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactStatus("validation");
      setTimeout(() => setContactStatus("idle"), 4000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setContactStatus("validation");
      setTimeout(() => setContactStatus("idle"), 4000);
      return;
    }

    setContactStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      if (res.ok) {
        setContactStatus("success");
        setContactForm({ name: "", email: "", message: "" });
        setTimeout(() => setContactStatus("idle"), 4000);
      } else if (res.status === 429) {
        setContactStatus("rateLimit");
        setTimeout(() => setContactStatus("idle"), 6000);
      } else {
        setContactStatus("error");
        setTimeout(() => setContactStatus("idle"), 4000);
      }
    } catch {
      setContactStatus("error");
      setTimeout(() => setContactStatus("idle"), 4000);
    }
  };

  // GitHub-style tech badge component
  function TechBadge({ tech }: { tech: typeof techStack[number] }) {
    return (
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-700/40"
        style={{
          borderColor: `${tech.color}30`,
          backgroundColor: `${tech.color}10`,
          color: tech.color === "#000000" ? undefined : tech.color,
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0 ring-1 ring-white/20"
          style={{ backgroundColor: tech.color === "#000000" ? "#1e293b" : tech.color }}
        />
        {tech.name}
      </span>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out" onClick={() => setShowImageModal(false)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.jpg" alt="Ziad Amr" className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* HERO SECTION */}
      <section id="profile" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left side - Text */}
          <div className="lg:col-span-3 text-center lg:text-start">
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">{t.heroGreeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500" style={{ fontFamily: "'Cairo', 'Noto Sans SC', sans-serif" }}>{t.name}</span>
                <span className="absolute inset-0 bg-linear-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 dark:from-orange-500/30 dark:via-amber-500/30 dark:to-orange-500/30 blur-xl rounded-2xl" aria-hidden="true" />
                <span className="absolute -inset-4 bg-linear-to-r from-orange-500/5 via-amber-500/5 to-orange-500/5 dark:from-orange-500/10 dark:via-amber-500/10 dark:to-orange-500/10 rounded-3xl" aria-hidden="true" />
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              {t.title}
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">{t.heroDescription}</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => {
                  scrollToElementWithOffset("contact");
                  setShowContactForm(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {t.heroCTA}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-orange-500/30 dark:border-orange-400/30 text-slate-900 dark:text-white shadow-lg shadow-orange-500/10 dark:shadow-orange-500/5 hover:shadow-orange-500/20 hover:border-orange-500/50 dark:hover:border-orange-400/50 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                {t.heroSecondaryCTA}
              </Link>
            </div>
          </div>

          {/* Right side - Profile card */}
          <div className="lg:col-span-2 flex justify-center">
            <Card className="relative w-full max-w-xs overflow-hidden border-0 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <button type="button" onClick={() => setShowImageModal(true)} aria-label={language === "ar" ? "اضغط لعرض الصورة كاملة" : "Click to view full image"} className="relative mb-5 group cursor-pointer focus:outline-none">
                  <Avatar className="w-28 h-28 ring-4 ring-white dark:ring-slate-800 shadow-xl transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                    <AvatarImage src="/profile.jpg" alt="Ziad Amr" />
                    <AvatarFallback className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-500 text-white">{t.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                  </div>
                  <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-slate-900 rounded-full" aria-hidden="true" />
                </button>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.name}</h2>
                {t.subtitle && <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-3">{t.subtitle}</p>}
                <div className="flex items-center gap-4 mb-4 w-full">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{t.socialLinksTitle}</span>
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
                </div>
                <div id="hero-social-links" className="grid grid-cols-4 gap-2 w-full">
                  {socialLinks.slice(0, 8).map((link) => (
                    <a
                      key={link.key}
                      href={link.url}
                      {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      aria-label={t.socialNames[link.key as keyof typeof t.socialNames]}
                      className={`inline-flex items-center justify-center w-full h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-background text-slate-500 dark:text-slate-400 transition-all duration-300 hover:text-foreground hover:border-slate-300 dark:hover:border-slate-600 ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <ScrollReveal animation="fade-in" delay={0}>
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ""), 10);
            const suffix = stat.number.includes("+") ? "+" : "";
            return (
              <Card key={stat.label.en} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                <CardContent className="p-4 sm:p-6 text-center">
                  <span className="text-2xl sm:text-3xl mb-1 block">{stat.icon}</span>
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    <AnimatedCounter target={numericValue} suffix={suffix} />
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label[language]}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      </ScrollReveal>

      {/* WHY HIRE ME SECTION */}
      <ScrollReveal animation="slide-up" delay={0}>
      <section id="why-hire-me" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.whyHireMeTitle}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.whyHireMeSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyHireMePoints.map((point) => (
            <Card key={point.titleKey} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${point.bgColor} mb-4`}>
                  <span className="text-2xl">{point.icon}</span>
                </div>
                <h3 className={`text-base font-bold mb-2 ${point.iconColor}`}>{String(t[point.titleKey as keyof typeof t])}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{String(t[point.descKey as keyof typeof t])}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ABOUT SECTION */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section id="about" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.aboutTitle}</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.aboutText}</p>
          </CardContent>
        </Card>
      </section>
      </ScrollReveal>

      {/* GITHUB CONTRIBUTION GRAPH */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section id="github-activity" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.contributionTitle}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.contributionSubtitle}</p>
              </div>
            </div>
            <div className="w-full overflow-x-auto -mx-2 px-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/ziadamr45"
                alt="GitHub Contribution Graph"
                className="w-full h-auto min-w-[480px] sm:min-w-[600px] rounded-lg"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </section>
      </ScrollReveal>

      {/* PROJECTS SECTION */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section id="projects-section" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
              <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.projectsTitle}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.projectsSubtitle}</p>
            </div>
          </div>
          <Link href="/projects" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors hidden sm:block">
            {t.viewAllProjects} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sortedProjects.filter((project) => project.featured).map((project) => (
            <Link key={project.key} href={`/projects/${project.key}`}>
              <Card className="relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ring-1 ring-orange-400/30 dark:ring-orange-500/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl mt-0.5">{project.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{project.name[language]}</h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">{t.featuredTag}</span>
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
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-orange-600 dark:text-orange-400">
                      {t.viewProject}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
                    </span>
                    <div className="flex items-center gap-2">
                      {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>{t.visitSite}</a>}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>{t.viewCode}</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* Mobile view all */}
        <Link href="/projects" className="block sm:hidden mt-4">
          <Card className="w-full border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400">
                {t.viewAllProjects}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </span>
            </CardContent>
          </Card>
        </Link>
      </section>
      </ScrollReveal>

      {/* TECH STACK SECTION - Top 10 with link to full page */}
      <ScrollReveal animation="fade-in" delay={100}>
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.techStackTitle}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.techStackSubtitle}</p>
                </div>
              </div>
              <Link href="/tech" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors hidden sm:block">
                {t.techViewAll} &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 10).map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
            {/* Mobile view all link */}
            <Link href="/tech" className="sm:hidden mt-4 flex items-center justify-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
              {t.techViewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            </Link>
          </CardContent>
        </Card>
      </section>
      </ScrollReveal>

      {/* TESTIMONIALS SECTION */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section id="testimonials" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.testimonialsTitle}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.testimonialsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-6">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-orange-500/20 dark:text-orange-400/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{testimonial.quote[language]}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${testimonial.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name[language]}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role[language]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* SERVICES SECTION LINK */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Link href="/services">
          <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.servicesTitle}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.servicesSubtitle}</p>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </div>
            </CardContent>
          </Card>
        </Link>
      </section>
      </ScrollReveal>

      {/* BLOG SECTION LINK */}
      <ScrollReveal animation="slide-up" delay={100}>
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link href="/blog">
          <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.blogTitle}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.blogSubtitle}</p>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </div>
            </CardContent>
          </Card>
        </Link>
      </section>
      </ScrollReveal>

      {/* LATEST SOCIAL POSTS SECTION - YouTube only */}
      <SocialFeedSection />

      {/* CONTACT CTA / FORM SECTION */}
      <section id="contact" className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {!showContactForm ? (
          <button
            type="button"
            onClick={() => setShowContactForm(true)}
            className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-8 text-start transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 group-hover:from-orange-500/20 group-hover:to-amber-500/20 transition-colors">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.contactCTA}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t.contactCTADesc}</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            </div>
          </button>
        ) : (
          <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.contactTitle}</h2>
                </div>
                <button type="button" onClick={() => setShowContactForm(false)} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactName}</label>
                    <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactEmail}</label>
                    <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactMessage}</label>
                  <textarea required rows={4} value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none" />
                </div>
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-amber-50/80 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20">
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-medium leading-relaxed">{t.contactReplyNotice}</p>
                  <button type="button" onClick={() => { const el = document.getElementById('hero-social-links'); if (el) { const headerOffset = 80; const y = el.getBoundingClientRect().top + window.scrollY - headerOffset; window.scrollTo({ top: y, behavior: 'smooth' }); } }} className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors cursor-pointer w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    {t.contactSocialLink}
                  </button>
                </div>
                <button type="submit" disabled={contactStatus === "sending"} className="w-full px-4 py-3 rounded-lg text-sm font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                  {contactStatus === "sending" ? t.contactSending : t.contactSend}
                </button>
                {contactStatus === "success" && (
                  <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{t.contactSuccess}</p>
                  </div>
                )}
                {contactStatus === "error" && (
                  <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-red-50 dark:bg-red-500/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">{t.contactError}</p>
                  </div>
                )}
                {contactStatus === "rateLimit" && (
                  <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{t.contactRateLimit}</p>
                  </div>
                )}
                {contactStatus === "validation" && (
                  <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{t.contactValidationError}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        )}
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 w-full bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-3">
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="relative group/footer-img cursor-pointer focus:outline-none"
                  aria-label={language === "ar" ? "اضغط لعرض الصورة كاملة" : "Click to view full image"}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Ziad Amr"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-xl object-cover ring-2 ring-orange-500/20 transition-all duration-300 group-hover/footer-img:ring-orange-500/40 group-hover/footer-img:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 group-hover/footer-img:bg-black/30 transition-all duration-300">
                    <svg className="w-4 h-4 text-white opacity-0 group-hover/footer-img:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                  </div>
                </button>
                <span className="font-bold text-slate-900 dark:text-white text-lg">{language === "ar" ? "زياد عمرو" : "Ziad Amr"}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 max-w-sm">{t.footerTagline}</p>
              <button
                type="button"
                onClick={() => {
                  scrollToElementWithOffset("contact");
                  setShowContactForm(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {t.footerCTA}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </button>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t.footerQuickLinks}</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navHome}</Link></li>
                <li><Link href="/projects" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navProjects}</Link></li>
                <li><Link href="/blog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navBlog}</Link></li>
                <li><Link href="/social-feed" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navSocialFeed}</Link></li>
              </ul>
            </div>
            {/* Social */}
            <div id="footer-social-links">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t.footerContact}</h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.slice(0, 6).map((link) => (
                  <a
                    key={link.key}
                    href={link.url}
                    {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={t.socialNames[link.key as keyof typeof t.socialNames]}
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:text-foreground hover:border-slate-300 dark:hover:border-slate-600 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200/50 dark:border-slate-700/50 mt-6 sm:mt-8 pt-4 sm:pt-6">
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
              &copy; {new Date().getFullYear()} {t.name}. {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
