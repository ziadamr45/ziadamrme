"use client";

import { useState, useEffect, useCallback } from "react";
import { useApp } from "@/components/providers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Globe } from "lucide-react";

export function Navigation() {
  const { language, theme, toggleTheme, toggleLanguage } = useApp();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close menu on navigation
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: language === "ar" ? "الرئيسية" : "Home" },
    { href: "/projects", label: language === "ar" ? "المشاريع" : "Projects" },
    { href: "/services", label: language === "ar" ? "الخدمات" : "Services" },
    { href: "/blog", label: language === "ar" ? "المدونة" : "Blog" },
    { href: "/social-feed", label: language === "ar" ? "المنشورات" : "Social Feed" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme(e);
  };

  // Close menu and scroll to section
  const handleMobileNavClick = useCallback((sectionId?: string) => {
    setIsOpen(false);
    if (sectionId) {
      // Small delay to allow menu to close and DOM to update
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-black/20 border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - with profile picture */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => handleMobileNavClick()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Ziad Amr"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow duration-300 ring-2 ring-orange-500/20"
            />
            <span className="font-bold text-slate-900 dark:text-white text-lg hidden sm:block">
              {language === "ar" ? "زياد عمرو" : "Ziad Amr"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Testimonials link on desktop */}
            <button
              onClick={() => {
                const el = document.getElementById("testimonials");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              {language === "ar" ? "شهادات العملاء" : "Testimonials"}
            </button>
          </div>

          {/* Desktop Controls: Language + Theme + CTA */}
          <div className="flex items-center gap-2">
            {/* Language Toggle - Always visible */}
            {mounted && (
              <button
                onClick={toggleLanguage}
                aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
                className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </button>
            )}

            {/* Theme Toggle - Always visible */}
            {mounted && (
              <button
                onClick={handleThemeToggle}
                aria-label={theme === "light" ? (language === "ar" ? "الوضع الليلي" : "Dark Mode") : (language === "ar" ? "الوضع النهاري" : "Light Mode")}
                className="w-9 h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Desktop CTA - scrolls to contact form */}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                // Dispatch custom event to open contact form
                window.dispatchEvent(new CustomEvent("open-contact-form"));
              }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {language === "ar" ? "كلمني" : "Hire Me"}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? (language === "ar" ? "إغلاق القائمة" : "Close menu") : (language === "ar" ? "فتح القائمة" : "Open menu")}
              className="md:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Testimonials link in mobile menu */}
            <button
              onClick={() => handleMobileNavClick("testimonials")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-pointer"
            >
              {language === "ar" ? "شهادات العملاء" : "Testimonials"}
            </button>
            {/* Contact link in mobile menu */}
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  window.dispatchEvent(new CustomEvent("open-contact-form"));
                }, 150);
              }}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-pointer"
            >
              {language === "ar" ? "كلمني" : "Contact Me"}
            </button>
            {/* Mobile toggles row */}
            <div className="flex items-center gap-2 px-4 py-2">
              {mounted && (
                <>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-all cursor-pointer"
                  >
                    <Globe className="w-4 h-4" />
                    {language === "ar" ? "English" : "عربي"}
                  </button>
                  <button
                    onClick={handleThemeToggle}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-all cursor-pointer"
                  >
                    {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    {theme === "light" ? (language === "ar" ? "ليلي" : "Dark") : (language === "ar" ? "نهاري" : "Light")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
