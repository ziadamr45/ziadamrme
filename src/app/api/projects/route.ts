import { NextResponse } from "next/server";

const GITHUB_USERNAME = "ziadamr45";

// Project metadata - descriptions and tech stack in both languages
const projectMeta: Record<string, {
  emoji: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  tech: string[];
  featured: boolean;
}> = {
  Radio: {
    emoji: "📡",
    name: { ar: "إسمع راديو", en: "Esma3 Radio" },
    description: {
      ar: "تطبيق ويب احترافي للاستماع إلى محطات الراديو من مختلف أنحاء العالم، يتضمن قسمًا للقرآن الكريم مع توصيات ذكية ونظام إشعارات متقدم",
      en: "Professional web app for listening to radio stations worldwide, with a Quran section, smart recommendations, and an advanced notification system",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
    featured: true,
  },
  Elmokhber: {
    emoji: "🕵️",
    name: { ar: "المخبر", en: "Elmokhber" },
    description: {
      ar: "لعبة اجتماعية تفاعلية تعتمد على الذكاء والفهم والخداع الاستراتيجي بين اللاعبين، مع مكالمات صوتية مباشرة",
      en: "An interactive social deduction game based on intelligence, understanding, and strategic deception, with live voice calls",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "LiveKit", "Prisma"],
    featured: true,
  },
  "Battle-of-Questions": {
    emoji: "⚔️",
    name: { ar: "معركة الأسئلة", en: "Battle of Questions" },
    description: {
      ar: "لعبة أسئلة تفاعلية متعددة اللاعبين في الوقت الحقيقي مع غرف لعب وأوضاع فرق ونظام تسجيل نقاط مباشر",
      en: "Multiplayer real-time quiz battle game with game rooms, team modes, and live scoring system",
    },
    tech: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS", "Prisma", "Docker"],
    featured: true,
  },
  Tammeny: {
    emoji: "📍",
    name: { ar: "طمنّي", en: "Tammeny" },
    description: {
      ar: "تطبيق آمن بالكامل لمشاركة الموقع الجغرافي مع الأصدقاء والعائلة، يعتمد على أحدث معايير الأمان والتشفير",
      en: "A fully secure application for sharing your location with friends and family, built with the latest security standards and encryption",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "LiveKit"],
    featured: true,
  },
  "Bawabet-elhadas": {
    emoji: "📰",
    name: { ar: "بوابة الحدث", en: "Bawabet Elhadas" },
    description: {
      ar: "بوابة أخبار ذكية مع تلخيص تلقائي وبحث متقدم وتوصيات مخصصة حسب الدولة والفئة",
      en: "Smart news portal with auto-summarization, advanced search, and personalized recommendations",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    featured: false,
  },
  "Eah-Elkalam": {
    emoji: "🔥",
    name: { ar: "إيه الكلام؟", en: "Eah ElKalam" },
    description: {
      ar: "رادار الترند المصري — تابع أحدث الترندات في الوقت الحقيقي مع تحليلات ذكية وخريطة مصر تفاعلية",
      en: "Egyptian Trend Radar — track real-time trending topics with smart analysis and an interactive Egypt map",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    featured: false,
  },
  "Hammel-w-Engez": {
    emoji: "⬇️",
    name: { ar: "حمّل وانجز", en: "Hammel w Engez" },
    description: {
      ar: "أداة تحميل ذكية من أي رابط — الصق أي رابط وحمّل فورًا مع دعم التحميل المتعدد والتحليل التلقائي",
      en: "Smart download tool — paste any URL and download instantly with batch support and auto-analysis",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Framer Motion"],
    featured: false,
  },
  quadra_studio: {
    emoji: "🎬",
    name: { ar: "قدرة ستوديو", en: "Quadra Studio" },
    description: {
      ar: "صانع فيديوهات قرآنية احترافية لليوتيوب والتيك توك مع قوالب جاهزة وأصوات قراء مشهورين",
      en: "Professional Quranic video maker for YouTube & TikTok with templates and famous reciter voices",
    },
    tech: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "Prisma"],
    featured: false,
  },
  "Weather-App": {
    emoji: "🌤️",
    name: { ar: "تطبيق الطقس", en: "Weather App" },
    description: {
      ar: "تطبيق طقس احترافي مع توقعات دقيقة وتحليلات مناخية مفصلة وواجهة ثنائية اللغة ومساعد طقس ذكي",
      en: "Professional weather app with accurate forecasts, detailed climate analysis, bilingual UI, and a smart weather assistant",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Framer Motion"],
    featured: false,
  },
  Notifications: {
    emoji: "⚙️",
    name: { ar: "لوحة تحكم الإشعارات", en: "Notification Dashboard" },
    description: {
      ar: "لوحة تحكم إدارية متكاملة لإدارة إشعارات تطبيق إسمع راديو مع إحصائيات المستخدمين وتحليلات الأجهزة",
      en: "Comprehensive admin dashboard for managing Esma3 Radio notifications with user analytics and device insights",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Zustand"],
    featured: false,
  },
  "Eleqbal-Form": {
    emoji: "🎓",
    name: { ar: "نظام الإقبال", en: "Eleqbal Form" },
    description: {
      ar: "نظام رقمي لجمع بيانات طلاب مدرسة الإقبال مع مصادقة OTP وواجهة ثنائية اللغة",
      en: "Digital student data collection system for Eleqbal School with OTP auth and bilingual UI",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    featured: false,
  },
};

// Repos to exclude from the projects page
const EXCLUDED_REPOS = ["ziadamr45", "Qudra-Stydio"];

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
    }

    const repos = await response.json();

    const projects = repos
      .filter((repo: any) => !repo.fork && !repo.private && !EXCLUDED_REPOS.includes(repo.name))
      .map((repo: any) => {
        const meta = projectMeta[repo.name];
        return {
          key: repo.name,
          emoji: meta?.emoji || "📦",
          name: meta?.name || { ar: repo.name, en: repo.name },
          description: meta?.description || {
            ar: repo.description || "",
            en: repo.description || "",
          },
          tech: meta?.tech || [],
          url: repo.homepage || null,
          github: repo.html_url,
          featured: meta?.featured || false,
          stars: repo.stargazers_count,
          language: repo.language,
          updatedAt: repo.updated_at,
        };
      })
      .sort((a: any, b: any) => {
        // Featured first, then by update date
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
