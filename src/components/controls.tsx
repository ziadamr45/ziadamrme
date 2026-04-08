"use client";

import { useApp } from "@/components/providers";
import { Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const btnClass = "w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-400/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer";

export function Controls() {
  const { theme, language, toggleTheme, toggleLanguage } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute top-4 end-4 flex gap-2 z-10">
        <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" />
        <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute top-4 end-4 flex gap-2 z-10">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
        className={btnClass}
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
        className={btnClass}
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
