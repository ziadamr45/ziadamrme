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
    { href: "/", label: language === "ar" ? "الرئيسية (الملف الشخصي)" : "Home (Profile)" },
    { href: "/services", label: language === "ar" ? "الخدمات" : "Services" },
    { href: "/blog", label: language === "ar" ? "المدونة" : "Blog" },
    { href: "/social-feed", label: language === "ar" ? "المنشورات" : "Social Feed" },
  ];

  // Section links for mobile menu (scroll to sections on home page)
  const sectionItems = [
    { id: "why-hire-me", label: language === "ar" ? "ليه تختارني؟" : "Why Me?" },
    { id: "about", label: language === "ar" ? "نبذة عني" : "About" },
    { id: "projects-section", label: language === "ar" ? "المشاريع" : "Projects" },
    { id: "testimonials", label: language === "ar" ? "شهادات العملاء" : "Testimonials" },
    { id: "contact", label: language === "ar" ? "تواصل معي" : "Contact" },
  ];

  // Tech page link (separate page)
  const techPageItem = { href: "/tech", label: language === "ar" ? "التقنيات التي أستخدمها" : "Technologies I Use" };

  // Special navigation items (cross-page links)
  const specialNavItems = [
    { id: "github-activity", label: language === "ar" ? "نشاطي على جيت هاب" : "My GitHub Activity", href: "/" },
    { id: "work-process", label: language === "ar" ? "طريقة العمل" : "How I Work", href: "/services" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme(e);
  };

  // Scroll to element with offset for fixed header
  const scrollToElement = useCallback((elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  // Handle contact button click from any page
  const handleContactClick = useCallback(() => {
    if (pathname === "/") {
      scrollToElement("contact");
      window.dispatchEvent(new CustomEvent("open-contact-form"));
    } else {
      sessionStorage.setItem("scrollToContact", "true");
      window.location.href = "/";
    }
  }, [pathname, scrollToElement]);

  // Close menu and scroll to section
  const handleMobileNavClick = useCallback((sectionId?: string, crossPageHref?: string) => {
    setIsOpen(false);
    document.body.style.overflow = "";
    if (crossPageHref) {
      // Navigate to another page first, then scroll to section
      if (crossPageHref === "/services" && sectionId === "work-process") {
        sessionStorage.setItem("scrollToProcess", "true");
      } else if (crossPageHref === "/" && sectionId === "github-activity") {
        sessionStorage.setItem("scrollToGithub", "true");
      }
      // If we're already on the target page, just scroll
      if (pathname === crossPageHref) {
        setTimeout(() => {
          scrollToElement(sectionId || "");
          if (sectionId === "contact") {
            window.dispatchEvent(new CustomEvent("open-contact-form"));
          }
        }, 100);
      } else {
        window.location.href = crossPageHref;
      }
      return;
    }
    if (sectionId) {
      setTimeout(() => {
        scrollToElement(sectionId);
        // Open contact form if scrolling to contact section
        if (sectionId === "contact") {
          window.dispatchEvent(new CustomEvent("open-contact-form"));
        }
      }, 200);
    }
  }, [scrollToElement, pathname]);

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
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-profile-image"))}
              className="relative group/img cursor-pointer focus:outline-none"
              aria-label={language === "ar" ? "اضغط لعرض الصورة كاملة" : "Click to view full image"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Ziad Amr"
                width={32}
                height={32}
                fetchPriority="high"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shadow-lg shadow-orange-500/20 group-hover/img:shadow-orange-500/40 transition-all duration-300 ring-2 ring-orange-500/20 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 group-hover/img:bg-black/30 transition-all duration-300">
                <svg className="w-4 h-4 text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" /></svg>
              </div>
            </button>
            <Link href="/" className="flex items-center" onClick={() => handleMobileNavClick()}>
              <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg hidden sm:block">
                {language === "ar" ? "زياد عمرو" : "Ziad Amr"}
              </span>
            </Link>
          </div>

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
            {/* GitHub Activity link on desktop */}
            <button
              onClick={() => {
                if (pathname === "/") {
                  scrollToElement("github-activity");
                } else {
                  sessionStorage.setItem("scrollToGithub", "true");
                  window.location.href = "/";
                }
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              {language === "ar" ? `نشاطي على جيت هاب` : "My GitHub Activity"}
            </button>
            {/* Testimonials link on desktop */}
            <button
              onClick={() => {
                if (pathname === "/") {
                  scrollToElement("testimonials");
                } else {
                  sessionStorage.setItem("scrollToTestimonials", "true");
                  window.location.href = "/";
                }
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              {language === "ar" ? "شهادات العملاء" : "Testimonials"}
            </button>
            {/* Tech page link on desktop */}
            <Link
              href="/tech"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === "/tech"
                  ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              {language === "ar" ? "التقنيات" : "Technologies"}
            </Link>
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
              onClick={handleContactClick}
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

        {/* Mobile Menu Overlay + Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-14 z-40" onClick={() => { setIsOpen(false); document.body.style.overflow = ""; }} aria-hidden="true">
            {/* Dark backdrop */}
            <div className="absolute inset-0 bg-black/10" />
            {/* Menu panel - stop propagation so clicks inside don't close */}
            <div className="absolute top-0 inset-x-0 p-3" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl p-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {/* Page navigation */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setIsOpen(false); document.body.style.overflow = ""; }}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Special cross-page navigation items */}
                {specialNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id, item.href)}
                    className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Tech page link */}
                <Link
                  href={techPageItem.href}
                  onClick={() => { setIsOpen(false); document.body.style.overflow = ""; }}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === "/tech"
                      ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {techPageItem.label}
                </Link>

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
          </div>
        )}
      </nav>
    </header>
  );
}
