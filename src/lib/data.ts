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

export const techStack = [
  { name: "Next.js", color: "from-black/80 to-black dark:from-white/90 dark:to-white" },
  { name: "React", color: "from-cyan-500/80 to-sky-500" },
  { name: "TypeScript", color: "from-blue-600/80 to-blue-500" },
  { name: "Tailwind CSS", color: "from-teal-500/80 to-cyan-400" },
  { name: "PostgreSQL", color: "from-indigo-600/80 to-blue-500" },
  { name: "Prisma", color: "from-violet-600/80 to-purple-400" },
  { name: "Node.js", color: "from-green-600/80 to-emerald-500" },
  { name: "Socket.io", color: "from-gray-700/80 to-gray-500" },
  { name: "LiveKit", color: "from-blue-500/80 to-indigo-400" },
  { name: "NextAuth", color: "from-red-500/80 to-orange-400" },
  { name: "Python", color: "from-yellow-500/80 to-amber-400" },
  { name: "Docker", color: "from-blue-400/80 to-cyan-500" },
  { name: "Git", color: "from-orange-600/80 to-red-500" },
  { name: "Vercel", color: "from-gray-700/80 to-gray-600 dark:from-gray-200/80 dark:to-gray-300" },
  { name: "shadcn/ui", color: "from-slate-600/80 to-slate-500" },
  { name: "Framer Motion", color: "from-pink-500/80 to-purple-500" },
  { name: "Zustand", color: "from-purple-500/80 to-violet-400" },
  { name: "Recharts", color: "from-orange-500/80 to-red-400" },
  { name: "React Hook Form", color: "from-blue-500/80 to-indigo-400" },
  { name: "Zod", color: "from-violet-500/80 to-purple-400" },
  { name: "Nodemailer", color: "from-emerald-500/80 to-green-400" },
  { name: "Web Push API", color: "from-amber-500/80 to-yellow-400" },
  { name: "dnd-kit", color: "from-rose-500/80 to-pink-400" },
  { name: "Radix UI", color: "from-red-600/80 to-rose-500" },
  { name: "HTML5", color: "from-orange-600/80 to-red-500" },
  { name: "CSS3", color: "from-blue-500/80 to-blue-400" },
  { name: "JavaScript", color: "from-yellow-400/80 to-amber-400 dark:from-yellow-500/80 dark:to-amber-500" },
  { name: "Firebase", color: "from-amber-400/80 to-yellow-400" },
  { name: "Canvas API", color: "from-red-500/80 to-rose-400" },
  { name: "PWA", color: "from-purple-600/80 to-indigo-400" },
  { name: "Service Worker", color: "from-orange-500/80 to-amber-400" },
  { name: "Firestore", color: "from-amber-500/80 to-orange-400" },
  { name: "next-intl", color: "from-blue-600/80 to-cyan-400" },
  { name: "Sonner", color: "from-slate-500/80 to-gray-400" },
  { name: "Railway", color: "from-purple-500/80 to-violet-400" },
  { name: "Embla Carousel", color: "from-pink-400/80 to-rose-400" },
  { name: "ytdl-core", color: "from-red-500/80 to-red-400" },
  { name: "Google Fonts", color: "from-blue-400/80 to-green-400" },
  { name: "Font Awesome", color: "from-blue-500/80 to-sky-400" },
  { name: "Lucide", color: "from-slate-600/80 to-slate-400" },
  { name: "View Transitions API", color: "from-teal-600/80 to-cyan-400" },
];
