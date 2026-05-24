"use client";

import { useEffect } from "react";
import { useApp } from "@/components/providers";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/animated-background";
import { Navigation } from "@/components/navigation";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
import { TechBadge } from "@/components/tech-badge";
import { techStack } from "@/lib/data";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
    titleKey: "serviceWebDev",
    descKey: "serviceWebDevDesc",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    titleKey: "serviceWebApp",
    descKey: "serviceWebAppDesc",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    titleKey: "serviceAPI",
    descKey: "serviceAPIDesc",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    tech: ["Node.js", "Express", "REST", "PostgreSQL"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    titleKey: "serviceRealTime",
    descKey: "serviceRealTimeDesc",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    tech: ["Socket.io", "WebSocket", "LiveKit", "Node.js"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
    titleKey: "serviceLanding",
    descKey: "serviceLandingDesc",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
    tech: ["Framer Motion", "Tailwind CSS", "Next.js"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    titleKey: "serviceSEO",
    descKey: "serviceSEODesc",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    tech: ["Schema.org", "Sitemap", "Meta Tags", "Performance"],
  },
];

const processSteps = [
  { step: "01", titleKey: "processStep1", descKey: "processStep1Desc", color: "from-orange-500 to-amber-500" },
  { step: "02", titleKey: "processStep2", descKey: "processStep2Desc", color: "from-blue-500 to-indigo-500" },
  { step: "03", titleKey: "processStep3", descKey: "processStep3Desc", color: "from-emerald-500 to-teal-500" },
  { step: "04", titleKey: "processStep4", descKey: "processStep4Desc", color: "from-purple-500 to-pink-500" },
];

export default function ServicesPage() {
  const { language } = useApp();
  const router = useRouter();
  const t = translations[language];
  useScrollRestoration();

  // Handle scroll to process section from other pages via sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem("scrollToProcess") === "true") {
      sessionStorage.removeItem("scrollToProcess");
      setTimeout(() => {
        const el = document.getElementById("process-section");
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" onClick={() => sessionStorage.setItem('scroll:/services', String(window.scrollY))} className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
          {t.backToHome}
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 mb-4">
            <svg className="w-7 h-7 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">{t.servicesTitle}</h1>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.servicesSubtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.titleKey} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${service.bgGradient} ${service.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${service.iconColor}`}>{String(t[service.titleKey as keyof typeof t])}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{String(t[service.descKey as keyof typeof t])}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tech.map((tech) => {
                    const techData = techStack.find((t) => t.name === tech);
                    return (
                      <TechBadge
                        key={tech}
                        name={tech}
                        color={techData?.color}
                        size="sm"
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div id="process-section" className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.servicesProcessTitle}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t.servicesProcessSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 start-full w-full h-0.5 bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent -z-10" />
              )}
              <Card className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br ${step.color} text-white font-bold text-lg mb-4 shadow-lg`}>
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{String(t[step.titleKey as keyof typeof t])}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{String(t[step.descKey as keyof typeof t])}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-linear-to-br from-orange-500/5 to-amber-500/5 dark:from-orange-500/10 dark:to-amber-500/10 backdrop-blur-xl">
          <CardContent className="p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">{t.servicesCTA}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-6">{t.contactCTADesc}</p>
            <button
              type="button"
              onClick={() => {
                sessionStorage.setItem("scrollToContact", "true");
                router.push("/");
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {t.heroCTA}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            </button>
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
