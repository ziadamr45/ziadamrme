"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useApp } from "@/components/providers";
import { Controls } from "@/components/controls";
import { AnimatedBackground } from "@/components/animated-background";

const socialLinks = [
  {
    key: "facebook",
    url: "https://www.facebook.com/ziad7mr",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    key: "telegram",
    url: "https://t.me/ziadamr",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    color: "hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc]",
  },
  {
    key: "instagram",
    url: "https://www.instagram.com/ziadamr455/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: "hover:bg-linear-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent",
  },
  {
    key: "x",
    url: "https://x.com/ziad90216",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: "hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black",
  },
  {
    key: "threads",
    url: "https://www.threads.com/@ziadamr455",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.396-1.17 1.166-.02 2.14.16 2.963.51v-.67c0-.936-.244-1.648-.727-2.117-.54-.524-1.384-.79-2.51-.79-1.242 0-2.255.285-3.013.848l-.168.125-.996-1.63.147-.106c1.09-.78 2.555-1.176 4.354-1.176 1.58 0 2.826.39 3.703 1.158.907.795 1.366 1.953 1.366 3.44v4.84l.333.172c.576.297 1.053.65 1.417 1.052.505.547.88 1.19 1.115 1.913.484 1.487.4 3.22-.792 4.76-1.39 1.796-3.592 2.707-6.542 2.707zm-.96-7.16c.92-.05 1.655-.372 2.184-.96.575-.638.89-1.524.94-2.635-.62-.267-1.357-.402-2.197-.402-.95.017-1.734.242-2.33.67-.57.406-.85.924-.832 1.54.036.78.582 1.707 2.235 1.787z"/>
      </svg>
    ),
    color: "hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black",
  },
  {
    key: "youtube",
    url: "https://youtube.com/@alhayat_ala_eltarek?si=pcsc_31Kcv3Jym14",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
  },
  {
    key: "email",
    url: "mailto:ziad90216@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "hover:bg-emerald-500 hover:text-white hover:border-emerald-500",
  },
];

const projects = [
  {
    key: "radio",
    emoji: "📡",
    name: { ar: "إسمع راديو", en: "Esma3 Radio" },
    description: {
      ar: "تطبيق ويب احترافي للاستماع إلى محطات الراديو من مختلف أنحاء العالم، مدعوم بالذكاء الاصطناعي ويتضمن قسمًا للقرآن الكريم مع توصيات ذكية ونظام إشعارات متقدم",
      en: "Professional web app for listening to radio stations worldwide, powered by AI with a Quran section, smart recommendations, and an advanced notification system",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "AI", "Anthropic Claude"],
    url: "https://esma3radio.vercel.app",
    github: "https://github.com/ziadamr45/Radio",
    featured: true,
  },
  {
    key: "notifications",
    emoji: "⚙️",
    name: { ar: "لوحة تحكم الإشعارات", en: "Notification Dashboard" },
    description: {
      ar: "لوحة تحكم إدارية متكاملة لإدارة إشعارات تطبيق إسمع راديو، تتضمن إحصائيات المستخدمين والاستماع وتحليلات الأجهزة ونظام جدولة الإشعارات",
      en: "Comprehensive admin dashboard for managing Esma3 Radio notifications with user analytics, listening stats, device analytics, and notification scheduling",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    url: null,
    github: "https://github.com/ziadamr45/Notifications",
    featured: true,
  },
  {
    key: "weather",
    emoji: "🌤️",
    name: { ar: "تطبيق الطقس", en: "Weather App" },
    description: {
      ar: "تطبيق احترافي لمعرفة حالة الطقس مدعوم بالكامل بالذكاء الاصطناعي، يوفر توقعات دقيقة وتحليلات مناخية مفصلة",
      en: "Professional weather application fully powered by AI, providing accurate forecasts and detailed climate analysis",
    },
    tech: ["Python", "AI"],
    url: null,
    github: "https://github.com/ziadamr45/Weather-",
    featured: false,
  },
  {
    key: "tammeny",
    emoji: "📍",
    name: { ar: "طمنّي", en: "Tamanni" },
    description: {
      ar: "تطبيق آمن بالكامل لمشاركة الموقع الجغرافي مع الأصدقاء والعائلة، يعتمد على أحدث معايير الأمان والتشفير لحماية خصوصية المستخدم",
      en: "A fully secure application for sharing your location with friends and family, built with the latest security standards and encryption to protect user privacy",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: null,
    github: "https://github.com/ziadamr45/Tammeny",
    featured: false,
  },
  {
    key: "elmokhber",
    emoji: "🕵️",
    name: { ar: "المخبر", en: "Elmokhber" },
    description: {
      ar: "لعبة اجتماعية تفاعلية تعتمد على الذكاء والفهم والخداع الاستراتيجي بين اللاعبين في جو من الإثارة والتشويق",
      en: "An interactive social deduction game based on intelligence, understanding, and strategic deception among players in an atmosphere of excitement",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: null,
    github: "https://github.com/ziadamr45/Elmokhber",
    featured: false,
  },
];

const techStack = [
  { name: "Next.js", color: "from-black/80 to-black dark:from-white/90 dark:to-white" },
  { name: "React", color: "from-cyan-500/80 to-sky-500" },
  { name: "TypeScript", color: "from-blue-600/80 to-blue-500" },
  { name: "Tailwind CSS", color: "from-teal-500/80 to-cyan-400" },
  { name: "PostgreSQL", color: "from-indigo-600/80 to-blue-500" },
  { name: "Prisma", color: "from-violet-600/80 to-purple-400" },
  { name: "Python", color: "from-yellow-500/80 to-amber-400" },
  { name: "Node.js", color: "from-green-600/80 to-emerald-500" },
  { name: "Git", color: "from-orange-600/80 to-red-500" },
  { name: "Framer Motion", color: "from-pink-500/80 to-purple-500" },
  { name: "AI / Claude", color: "from-amber-500/80 to-orange-400" },
  { name: "Vercel", color: "from-gray-700/80 to-gray-600 dark:from-gray-200/80 dark:to-gray-300" },
];

const translations = {
  ar: {
    name: "زياد عمرو",
    subtitle: "Ziad Amr",
    title: "مطوِّر مواقع ويب",
    mission: "إنشاء خدمات مجانية وإتاحة التكنولوجيا الحديثة للجميع ونشر الخير والفائدة",
    aboutTitle: "نبذة عني",
    aboutText: "مطوِّر ويب مصري بدأت رحلتي في عالم البرمجة وأنا في سن مبكرة. أعمل على بناء تطبيقات ويب حديثة ومتكاملة باستخدام أحدث التقنيات والأطر البرمجية. أؤمن بأن التقنية ليست مجرد أكواد، بل أداة لحل المشكلات وتقديم قيمة حقيقية للمستخدمين. إلى جانب شغفي بالبرمجة، أمتلك خبرة في مجال الكتابة والتأليف الأدبي الدعوي والإرشادي، وأسعى دائمًا لدمج مهاراتي المختلفة في إنتاج محتوى تقني هادف. حلمي هو التخصص في هندسة البرمجيات وعلوم الحاسب، وأن أصبح مطوِّرًا محترفًا قادرًا على المنافسة عالميًا والمساهمة في تطوير مجتمع المطورين العرب.",
    projectsTitle: "مشاريعي",
    projectsSubtitle: "مجموعة من المشاريع التي عملت عليها",
    featuredTag: "مميز",
    visitSite: "زيارة الموقع",
    viewCode: "عرض الكود",
    techStackTitle: "التقنيات",
    techStackSubtitle: "الأدوات والتقنيات التي أستخدمها",
    socialLinksTitle: "روابط التواصل",
    avatarFallback: "زياد",
    ariaSendEmail: "أرسل بريد إلكتروني",
    ariaOpensNew: "يفتح في نافذة جديدة",
    socialNames: {
      facebook: "فيسبوك",
      telegram: "تليجرام",
      instagram: "انستجرام",
      x: "اكس",
      threads: "ثريدز",
      youtube: "يوتيوب",
      email: "البريد الإلكتروني",
    },
  },
  en: {
    name: "Ziad Amr",
    subtitle: "",
    title: "Web Developer",
    mission: "Creating free services and making modern technology accessible to everyone, spreading goodness and benefit",
    aboutTitle: "About Me",
    aboutText: "An Egyptian web developer who started my programming journey at a young age. I build modern, integrated web applications using the latest technologies and frameworks. I believe technology is more than just code — it's a tool for solving problems and delivering real value to users. Beyond my passion for programming, I have experience in writing faith-based and educational literary content, and I constantly strive to combine my diverse skills to produce meaningful technical work. My dream is to specialize in software engineering and computer science, becoming a professional developer capable of competing globally and contributing to the growth of the Arab developer community.",
    projectsTitle: "My Projects",
    projectsSubtitle: "A collection of projects I've worked on",
    featuredTag: "Featured",
    visitSite: "Visit Site",
    viewCode: "View Code",
    techStackTitle: "Tech Stack",
    techStackSubtitle: "Tools and technologies I work with",
    socialLinksTitle: "Social Links",
    avatarFallback: "ZA",
    ariaSendEmail: "Send email",
    ariaOpensNew: "Opens in new window",
    socialNames: {
      facebook: "Facebook",
      telegram: "Telegram",
      instagram: "Instagram",
      x: "X (Twitter)",
      threads: "Threads",
      youtube: "YouTube",
      email: "Email",
    },
  },
};

export default function Home() {
  const { language } = useApp();
  const t = translations[language];
  const [showImageModal, setShowImageModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showImageModal]);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Controls */}
      <Controls />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Image Lightbox Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setShowImageModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={language === "ar" ? "عرض الصورة الشخصية" : "View profile picture"}
        >
          <img
            src="/profile.jpg"
            alt="Ziad Amr"
            className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ===== PROFILE CARD ===== */}
      <section className="w-full max-w-md mx-auto px-4 pt-12 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-8">
              {/* Avatar */}
              <button
                type="button"
                onClick={() => setShowImageModal(true)}
                aria-label={language === "ar" ? "اضغط لعرض الصورة كاملة" : "Click to view full image"}
                className="relative mb-6 group cursor-pointer focus:outline-none"
              >
                <Avatar className="w-28 h-28 ring-4 ring-white dark:ring-slate-800 shadow-xl transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                  <AvatarImage src="/profile.jpg" alt="Ziad Amr" />
                  <AvatarFallback className="text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-500 text-white">
                    {t.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-slate-900 rounded-full" aria-hidden="true" />
              </button>

              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{t.name}</h1>
              {t.subtitle && (
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">{t.subtitle}</p>
              )}

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {t.title}
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">{t.mission}</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{t.socialLinksTitle}</span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={`${t.socialNames[link.key as keyof typeof t.socialNames]} — ${link.url.startsWith("mailto:") ? t.ariaSendEmail : t.ariaOpensNew}`}
                  className={`inline-flex items-center justify-center gap-3 h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-background px-4 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-300 ${link.color} hover:text-foreground`}
                >
                  {link.icon}
                  <span className="font-medium">{t.socialNames[link.key as keyof typeof t.socialNames]}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="w-full max-w-md mx-auto px-4 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.aboutTitle}</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{t.aboutText}</p>
          </CardContent>
        </Card>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="w-full max-w-md mx-auto px-4 pb-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.projectsTitle}</h2>
            <p className="text-xs text-slate-500 dark:text-slate-500">{t.projectsSubtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <Card
              key={project.key}
              className={`relative w-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-black/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] ${project.featured ? "ring-1 ring-orange-400/30 dark:ring-orange-500/20" : ""}`}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl mt-0.5">{project.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{project.name[language]}</h3>
                      {project.featured && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                          {t.featuredTag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{project.description[language]}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t.visitSite}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t.viewCode}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="w-full max-w-md mx-auto px-4 pb-8">
        <Card className="relative w-full overflow-hidden border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t.techStackTitle}</h2>
                <p className="text-xs text-slate-500 dark:text-slate-500">{t.techStackSubtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${tech.color} text-white shadow-sm`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full pb-8 pt-4">
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Ziad Amr
        </p>
      </footer>
    </div>
  );
}
