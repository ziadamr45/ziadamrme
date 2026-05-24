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
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Prisma", color: "#7C3AED" },
  { name: "Node.js", color: "#339933" },
  { name: "Socket.io", color: "#010101" },
  { name: "LiveKit", color: "#4F46E5" },
  { name: "NextAuth", color: "#EF4444" },
  { name: "Python", color: "#3776AB" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "Vercel", color: "#000000" },
  { name: "shadcn/ui", color: "#64748B" },
  { name: "Framer Motion", color: "#EC4899" },
  { name: "Zustand", color: "#8B5CF6" },
  { name: "Recharts", color: "#F97316" },
  { name: "React Hook Form", color: "#6366F1" },
  { name: "Zod", color: "#7C3AED" },
  { name: "Nodemailer", color: "#10B981" },
  { name: "Web Push API", color: "#F59E0B" },
  { name: "dnd-kit", color: "#F43F5E" },
  { name: "Radix UI", color: "#DC2626" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Canvas API", color: "#EF4444" },
  { name: "PWA", color: "#6366F1" },
  { name: "Service Worker", color: "#F97316" },
  { name: "Firestore", color: "#FFA000" },
  { name: "next-intl", color: "#2563EB" },
  { name: "Sonner", color: "#64748B" },
  { name: "Railway", color: "#8B5CF6" },
  { name: "Embla Carousel", color: "#EC4899" },
  { name: "ytdl-core", color: "#EF4444" },
  { name: "Google Fonts", color: "#4285F4" },
  { name: "Font Awesome", color: "#528DD7" },
  { name: "Lucide", color: "#64748B" },
  { name: "View Transitions API", color: "#0D9488" },
];
