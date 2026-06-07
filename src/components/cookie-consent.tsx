"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/components/providers";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const { language } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user already gave consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-3 sm:p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">🍪</span>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {language === "ar" ? "نستخدم ملفات تعريف الارتباط" : "We use cookies"}
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === "ar"
                ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك قبول الكوكيز للتخصيص أو رفضها."
                : "We use cookies to improve your experience. You can accept cookies for personalization or decline them."}
              {" "}
              <Link
                href="/privacy-policy"
                className="text-orange-600 dark:text-orange-400 hover:underline"
              >
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {language === "ar" ? "رفض" : "Decline"}
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-semibold bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {language === "ar" ? "قبول" : "Accept"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
