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
  { number: "42+", label: { ar: "تقنية مستخدمة", en: "Technologies Used" }, icon: "🛠️" },
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
    name: { ar: "أحمد محمد", en: "Ahmed Mohammed" },
    role: { ar: "صاحب متجر إلكتروني", en: "E-commerce Store Owner" },
    quote: {
      ar: "زياد كان شريك مثالي في بناء المتجر. سرعة التنفيذ مذهلة والتواصل كان مستمر طوال فترة المشروع. سلم المشروع قبل الموعد المتفق عليه بيومين!",
      en: "Ziad was an ideal partner in building the store. The execution speed is amazing and communication was continuous throughout the project. He delivered two days before the agreed deadline!",
    },
    avatar: "أم",
    avatarBg: "from-blue-500 to-indigo-500",
  },
  {
    name: { ar: "سارة أحمد", en: "Sara Ahmed" },
    role: { ar: "مديرة مشاريع تقنية", en: "Technical Project Manager" },
    quote: {
      ar: "تعاملت مع مطورين كتير بس زياد مميز بتفكيره المنظم وجودة الكود اللي بيقدمه. كل مرة بحتاجه بيكون موجود وأهم حاجة بيسأل الأسئلة الصح قبل ما يبدأ",
      en: "I've worked with many developers but Ziad stands out with his organized thinking and code quality. He's always available when needed and most importantly, he asks the right questions before starting.",
    },
    avatar: "سا",
    avatarBg: "from-rose-500 to-pink-500",
  },
  {
    name: { ar: "محمد علي", en: "Mohamed Ali" },
    role: { ar: "صاحب مشروع ناشئ", en: "Startup Founder" },
    quote: {
      ar: "بنتجapplication معقد في وقت قياسي. الكود نظيف ومكتوب بطريقة تخلي أي حد يقدر يكمل عليه. أنصح أي حد عنده مشروع يتعامل مع زياد",
      en: "We built a complex application in record time. The code is clean and written in a way that anyone can continue working on it. I recommend Ziad to anyone with a project.",
    },
    avatar: "مع",
    avatarBg: "from-emerald-500 to-teal-500",
  },
];

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
  { name: "Python", color: "#3776AB", logo: "python" },
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
  { name: "View Transitions API", color: "#0D9488", logo: "viewtransitions" },
];
