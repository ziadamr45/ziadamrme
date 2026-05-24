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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: language === "ar" ? "الرئيسية" : "Home" },
    { href: "/projects", label: language === "ar" ? "المشاريع" : "Projects" },
    { href: "/services", label: language === "ar" ? "الخدمات" : "Services" },
    { href: "/blog", label: language === "ar" ? "المدونة" : "Blog" },
    { href: "/social-feed", label: language === "ar" ? "المنشورات" : "Social Feed" },
  ];

  // Section links for mobile menu (scroll to sections on home page)
  const sectionItems = [
    { id: "profile", label: language === "ar" ? "الملف الشخصي" : "Profile" },
    { id: "why-hire-me", label: language === "ar" ? "ليه تختارني؟" : "Why Me?" },
    { id: "about", label: language === "ar" ? "نبذة عني" : "About" },
    { id: "projects-section", label: language === "ar" ? "المشاريع" : "Projects" },
    { id: "testimonials", label: language === "ar" ? "شهادات العملاء" : "Testimonials" },
    { id: "contact", label: language === "ar" ? "تواصل معي" : "Contact" },
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
    document.body.style.overflow = "";
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Open contact form if scrolling to contact section
        if (sectionId === "contact") {
          window.dispatchEvent(new CustomEvent("open-contact-form"));
        }
      }, 200);
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
      <nav className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo - with profile picture */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0" onClick={() => handleMobileNavClick()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile-thumb.jpg"
              alt="Ziad Amr"
              width={32}
              height={32}
              fetchPriority="high"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow duration-300 ring-2 ring-orange-500/20"
            />
            <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg hidden sm:block">
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

          {/* Controls: Language + Theme + CTA + Hamburger */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Language Toggle - always visible */}
            {mounted && (
              <button
                onClick={toggleLanguage}
                aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
                className="flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}

            {/* Theme Toggle - always visible */}
            {mounted && (
              <button
                onClick={handleThemeToggle}
                aria-label={theme === "light" ? (language === "ar" ? "الوضع الليلي" : "Dark Mode") : (language === "ar" ? "الوضع النهاري" : "Light Mode")}
                className="flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 items-center justify-center text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                {theme === "light" ? (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
            )}

            {/* Desktop CTA - scrolls to contact form */}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
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
              className="md:hidden w-9 h-9 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200/50 dark:border-slate-700/50"
            >
              {isOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 top-14 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[calc(100vh-4rem)] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Page navigation */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleMobileNavClick()}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Section links (scroll on home page) */}
            {pathname === "/" && (
              <>
                <div className="px-4 py-2 mt-2">
                  <div className="h-px bg-slate-200 dark:bg-slate-700" />
                </div>
                <p className="px-4 py-1 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {language === "ar" ? "أقسام الصفحة" : "Page Sections"}
                </p>
                {sectionItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id)}
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </>
            )}

            {/* Contact CTA in mobile menu (non-home pages) */}
            {pathname !== "/" && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.body.style.overflow = "";
                  // Navigate to home then scroll to contact
                  sessionStorage.setItem("scrollToContact", "true");
                  window.location.href = "/";
                }}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm cursor-pointer"
              >
                {language === "ar" ? "كلمني؟" : "Contact Me"}
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
