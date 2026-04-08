"use client";

import { useApp } from "@/components/providers";
import { Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function Controls() {
  const { theme, language, toggleTheme, toggleLanguage } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute top-4 end-4 flex gap-2">
        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute top-4 end-4 flex gap-2 z-10">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
        className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
      >
        <Globe className="w-4 h-4" />
        <span className="sr-only">
          {language === "ar" ? "EN" : "عربي"}
        </span>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label={theme === "light" ? "الوضع الليلي" : "Light Mode"}
        className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
