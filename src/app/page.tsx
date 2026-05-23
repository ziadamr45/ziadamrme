"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useApp } from "@/components/providers";
import { Controls } from "@/components/controls";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { socialLinks } from "@/lib/social-links";
import { sortedProjects } from "@/lib/projects";
import { stats, techStack } from "@/lib/data";
import { translations } from "@/lib/translations";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";

export default function Home() {
  const { language } = useApp();
  const t = translations[language];
  useScrollRestoration();
  const [showImageModal, setShowImageModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error" | "rateLimit" | "validation">("idle");

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

    // Client-side validation
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

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Controls />
      <AnimatedBackground />
      <Navigation />

      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out" onClick={() => setShowImageModal(false)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.jpg" alt="Ziad Amr" className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* PROFILE CARD */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pt-12 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center mb-8">
              <button type="button" onClick={() => setShowImageModal(true)} aria-label={language === "ar" ? "اضغط لعرض الصورة كاملة" : "Click to view full image"} className="relative mb-6 group cursor-pointer focus:outline-none">
                <Avatar className="w-28 h-28 ring-4 ring-white dark:ring-slate-800 shadow-xl transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                  <AvatarImage src="/profile.jpg" alt="Ziad Amr" />
                  <AvatarFallback className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-500 text-white">{t.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-slate-900 rounded-full" aria-hidden="true" />
              </button>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{t.name}</h1>
              {t.subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">{t.subtitle}</p>}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                {t.title}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">{t.mission}</p>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{t.socialLinksTitle}</span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
            </div>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a key={link.key} href={link.url} {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })} aria-label={`${t.socialNames[link.key as keyof typeof t.socialNames]} — ${link.url.startsWith("mailto:") ? t.ariaSendEmail : t.ariaOpensNew}`} className={`inline-flex items-center justify-center gap-3 h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background px-4 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 ${link.color} hover:text-foreground`}>
                  {link.icon}
                  <span className="font-medium">{t.socialNames[link.key as keyof typeof t.socialNames]}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
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

      {/* STATS SECTION */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label.en} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
              <CardContent className="p-4 text-center">
                <span className="text-2xl mb-1 block">{stat.icon}</span>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.number}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GITHUB CONTRIBUTION GRAPH */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.contributionTitle}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-500">{t.contributionSubtitle}</p>
              </div>
            </div>
            <div className="w-full overflow-x-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/ziadamr45"
                alt="GitHub Contribution Graph"
                className="w-full h-auto min-w-[600px] rounded-lg"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PROJECTS SECTION */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.projectsTitle}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-500">{t.projectsSubtitle}</p>
          </div>
        </div>
        <div className="space-y-4">
          {sortedProjects.map((project) => (
            <Link key={project.key} href={`/projects/${project.key}`}>
              <Card className={`relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${project.featured ? "ring-1 ring-orange-400/30 dark:ring-orange-500/20" : ""}`}>
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
                    {project.tech.slice(0, 4).map((tech) => (<span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">{tech}</span>))}
                    {project.tech.length > 4 && <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">+{project.tech.length - 4}</span>}
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
      </section>

      {/* TECH STACK SECTION */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.techStackTitle}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-500">{t.techStackSubtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {techStack.map((tech) => (<span key={tech.name} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${tech.color} text-white shadow-sm`}>{tech.name}</span>))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BLOG SECTION LINK */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
        <Link href="/blog">
          <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.blogTitle}</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t.blogSubtitle}</p>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
              </div>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* CONTACT CTA / FORM SECTION */}
      <section className="relative z-10 w-full max-w-md mx-auto px-4 pb-8">
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
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactName}</label>
                  <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactEmail}</label>
                  <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.contactMessage}</label>
                  <textarea required rows={4} value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none" />
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
      <footer className="w-full pb-8 pt-4">
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Ziad Amr
        </p>
      </footer>
    </div>
  );
}
