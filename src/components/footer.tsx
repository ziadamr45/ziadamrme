"use client";

import Link from "next/link";
import { useApp } from "@/components/providers";
import { socialLinks } from "@/lib/social-links";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="relative z-10 w-full bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="Ziad Amr"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-orange-500/20"
              />
              <span className="font-bold text-slate-900 dark:text-white text-lg">{language === "ar" ? "زياد عمرو" : "Ziad Amr"}</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 max-w-sm">{t.footerTagline}</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
            >
              {t.footerCTA}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            </Link>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t.footerQuickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navHome}</Link></li>
              <li><Link href="/projects" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navProjects}</Link></li>
              <li><Link href="/blog" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navBlog}</Link></li>
              <li><Link href="/social-feed" className="text-sm text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">{t.navSocialFeed}</Link></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{t.footerContact}</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.slice(0, 6).map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  {...(link.url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={t.socialNames[link.key as keyof typeof t.socialNames]}
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:text-foreground hover:border-slate-300 dark:hover:border-slate-600 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              &copy; {new Date().getFullYear()} {t.name}. {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-xs text-slate-400 dark:text-slate-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
              <Link href="/terms" className="text-xs text-slate-400 dark:text-slate-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                {language === "ar" ? "شروط الاستخدام" : "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
