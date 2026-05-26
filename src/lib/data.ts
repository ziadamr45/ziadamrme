// Stats are now computed dynamically from projects and techStack data
// to ensure they always reflect the actual counts
export function getStats(projectCount: number) {
  const techCount = techStack.length;
  return [
    { number: "3+", label: { ar: "سنوات خبرة", en: "Years Experience" }, icon: "📅" },
    { number: `${projectCount}+`, label: { ar: "مشروع منجز", en: "Projects Completed" }, icon: "🚀" },
    { number: `${techCount}+`, label: { ar: "تقنية مستخدمة", en: "Technologies Used" }, icon: "🛠️" },
  ];
}

// Static fallback for non-dynamic usage
export const stats = [
  { number: "3+", label: { ar: "سنوات خبرة", en: "Years Experience" }, icon: "📅" },
  { number: "12+", label: { ar: "مشروع منجز", en: "Projects Completed" }, icon: "🚀" },
  { number: "52+", label: { ar: "تقنية مستخدمة", en: "Technologies Used" }, icon: "🛠️" },
];

// Why Hire Me data
export const whyHireMePoints = [
  {
    icon: "⚡",
    titleKey: "whyDelivery",
    descKey: "whyDeliveryDesc",
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: "💬",
    titleKey: "whyCommunication",
    descKey: "whyCommunicationDesc",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: "✨",
    titleKey: "whyQuality",
    descKey: "whyQualityDesc",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: "🛡️",
    titleKey: "whySupport",
    descKey: "whySupportDesc",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

// Testimonials data (realistic but fictional)
export const testimonials = [
  {
    name: { ar: "كريم حسن", en: "Karim Hassan" },
    role: { ar: "صاحب متجر إلكتروني", en: "E-commerce Store Owner" },
    quote: {
      ar: "كنت محتاج الموقع يشتغل قبل رمضان وفعلاً زياد سلمني المتجر كامل قبل الموعد بأسبوع. من أول الـ checkout لحد لوحة التحكم كل حاجة شغالة من غير أي تعليق.",
      en: "I needed the site running before Ramadan and Ziad actually delivered the full store a week early. From the checkout to the admin dashboard, everything worked without a single glitch.",
    },
    avatar: "كح",
    avatarBg: "from-blue-500 to-indigo-500",
  },
  {
    name: { ar: "نورهان السيد", en: "Nourhan El-Sayed" },
    role: { ar: "مديرة تقنية، شركة ناشئة", en: "CTO, Startup" },
    quote: {
      ar: "البنية اللي زياد كتبها نظيفة جداً — كل component لوحده والـ API routes مترتبة بطريقة أي مطور يقدر يكمل عليها من غير ما يفكر. ده مش كود بيتكتب ويتسيب ده كود بيتبني عليه.",
      en: "The architecture Ziad wrote is really clean — each component is self-contained and the API routes are structured so any developer can pick it up effortlessly. This isn't throwaway code, it's built to scale.",
    },
    avatar: "نس",
    avatarBg: "from-rose-500 to-pink-500",
  },
  {
    name: { ar: "ياسر عبد الرحيم", en: "Yasser Abdelraheem" },
    role: { ar: "مؤسس منصة تعليمية", en: "EdTech Platform Founder" },
    quote: {
      ar: "أحسن حاجة في الشغل مع زياد إنه مش بينفذ بس — بيفهم اللي محتاجه الأول وبيقترح حاجات أنا مكنتش فكرت فيها. نظام التسجيل والـ live sessions اتعملوا أحسن مما كنت متخيل.",
      en: "The best thing about working with Ziad is he doesn't just execute — he understands what you need first and suggests things I hadn't even thought of. The registration system and live sessions came out better than I imagined.",
    },
    avatar: "يع",
    avatarBg: "from-emerald-500 to-teal-500",
  },
];

// Calculate tech usage based on project count
// Returns tech data sorted by usage (most used first) with percentage
export function getTechWithUsage(projectTechArrays: string[][]) {
  const totalProjects = projectTechArrays.length || 1;
  const usageMap = new Map<string, number>();
  
  for (const techs of projectTechArrays) {
    for (const tech of techs) {
      usageMap.set(tech, (usageMap.get(tech) || 0) + 1);
    }
  }

  return techStack
    .map((tech) => ({
      ...tech,
      projectCount: usageMap.get(tech.name) || 0,
      percentage: Math.round(((usageMap.get(tech.name) || 0) / totalProjects) * 100),
    }))
    .sort((a, b) => b.projectCount - a.projectCount);
}

// Tech stack with GitHub-style badge data
// Each tech has: name, color (brand color), logo (simple identifier for badge display)
export const techStack = [
  { name: "Next.js", color: "#000000", logo: "nextjs" },
  { name: "React", color: "#61DAFB", logo: "react" },
  { name: "TypeScript", color: "#3178C6", logo: "typescript" },
  { name: "Tailwind CSS", color: "#06B6D4", logo: "tailwindcss" },
  { name: "PostgreSQL", color: "#4169E1", logo: "postgresql" },
  { name: "Prisma", color: "#7C3AED", logo: "prisma" },
  { name: "Node.js", color: "#339933", logo: "nodedotjs" },
  { name: "Socket.io", color: "#010101", logo: "socketdotio" },
  { name: "LiveKit", color: "#4F46E5", logo: "livekit" },
  { name: "NextAuth", color: "#EF4444", logo: "nextauth" },
  { name: "Docker", color: "#2496ED", logo: "docker" },
  { name: "Git", color: "#F05032", logo: "git" },
  { name: "Vercel", color: "#000000", logo: "vercel" },
  { name: "shadcn/ui", color: "#64748B", logo: "shadcnui" },
  { name: "Framer Motion", color: "#EC4899", logo: "framer" },
  { name: "Zustand", color: "#8B5CF6", logo: "zustand" },
  { name: "Recharts", color: "#F97316", logo: "recharts" },
  { name: "React Hook Form", color: "#6366F1", logo: "reacthookform" },
  { name: "Zod", color: "#7C3AED", logo: "zod" },
  { name: "Nodemailer", color: "#10B981", logo: "nodemailer" },
  { name: "Web Push API", color: "#F59E0B", logo: "webpush" },
  { name: "dnd-kit", color: "#F43F5E", logo: "dndkit" },
  { name: "Radix UI", color: "#DC2626", logo: "radixui" },
  { name: "HTML5", color: "#E34F26", logo: "html5" },
  { name: "CSS3", color: "#1572B6", logo: "css3" },
  { name: "JavaScript", color: "#F7DF1E", logo: "javascript" },
  { name: "Firebase", color: "#FFCA28", logo: "firebase" },
  { name: "Canvas API", color: "#EF4444", logo: "canvas" },
  { name: "PWA", color: "#6366F1", logo: "pwa" },
  { name: "Service Worker", color: "#F97316", logo: "serviceworker" },
  { name: "Firestore", color: "#FFA000", logo: "firestore" },
  { name: "Sonner", color: "#64748B", logo: "sonner" },
  { name: "Railway", color: "#8B5CF6", logo: "railway" },
  { name: "Embla Carousel", color: "#EC4899", logo: "embla" },
  { name: "ytdl-core", color: "#EF4444", logo: "ytdl" },
  { name: "Google Fonts", color: "#4285F4", logo: "googlefonts" },
  { name: "Font Awesome", color: "#528DD7", logo: "fontawesome" },
  { name: "Lucide", color: "#64748B", logo: "lucide" },
  { name: "Bun", color: "#C9944A", logo: "bun" },
  { name: "next-intl", color: "#2563EB", logo: "nextintl" },
  { name: "next-themes", color: "#6366F1", logo: "nextthemes" },
  { name: "ESLint", color: "#4B32C3", logo: "eslint" },
  { name: "React Query", color: "#FF4154", logo: "reactquery" },
  { name: "Remotion", color: "#00D4FF", logo: "remotion" },
  { name: "Leaflet", color: "#199900", logo: "leaflet" },
  { name: "Sharp", color: "#99CC00", logo: "sharp" },
  { name: "jsPDF", color: "#F8DC75", logo: "jspdf" },
  { name: "Ably", color: "#FF5C5C", logo: "ably" },
  { name: "cmdk", color: "#111111", logo: "cmdk" },
  { name: "date-fns", color: "#770C56", logo: "date-fns" },
  { name: "TanStack Table", color: "#FF4154", logo: "tanstack" },
  { name: "MDX Editor", color: "#5B57D1", logo: "mdx" },
  { name: "React Markdown", color: "#000000", logo: "reactmarkdown" },
];
