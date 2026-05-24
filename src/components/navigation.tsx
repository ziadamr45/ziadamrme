"use client";

import { useState } from "react";
import { useApp } from "@/components/providers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const { language } = useApp();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: language === "ar" ? "الرئيسية" : "Home", icon: "🏠" },
    { href: "/projects", label: language === "ar" ? "المشاريع" : "Projects", icon: "🚀" },
    { href: "/blog", label: language === "ar" ? "المدونة" : "Blog", icon: "📝" },
    { href: "/social-feed", label: language === "ar" ? "المنشورات" : "Social Feed", icon: "📱" },
  ];

  return (
    <>
      {/* Floating hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (language === "ar" ? "إغلاق القائمة" : "Close menu") : (language === "ar" ? "فتح القائمة" : "Open menu")}
        className="fixed bottom-6 end-6 z-40 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Menu panel */}
      <div className={`fixed bottom-20 end-6 z-40 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <nav className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl p-3 min-w-[180px]" role="navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 ms-auto" />}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
