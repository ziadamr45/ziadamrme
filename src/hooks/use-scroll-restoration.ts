"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * useScrollRestoration
 *
 * Saves scroll position to sessionStorage on navigation away,
 * and restores it when the page is re-mounted (e.g., on back navigation).
 *
 * Works with Next.js App Router client-side navigation.
 * Uses multiple strategies to ensure scroll position is restored
 * after the content has fully rendered.
 */
export function useScrollRestoration() {
  const pathname = usePathname();
  const restoredRef = useRef(false);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    // Disable browser's default scroll restoration so we can control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const storageKey = `scroll:${pathname}`;

    // Restore scroll position on mount (only once per pathname change)
    if (!restoredRef.current || pathnameRef.current !== pathname) {
      restoredRef.current = true;
      pathnameRef.current = pathname;

      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const scrollY = parseInt(saved, 10);
        if (!isNaN(scrollY) && scrollY > 0) {
          // Strategy 1: Try immediately
          window.scrollTo(0, scrollY);

          // Strategy 2: Try after requestAnimationFrame (DOM paint)
          requestAnimationFrame(() => {
            if (Math.abs(window.scrollY - scrollY) > 10) {
              window.scrollTo(0, scrollY);
            }
          });

          // Strategy 3: Try after a short delay (content may still be loading)
          setTimeout(() => {
            if (Math.abs(window.scrollY - scrollY) > 10) {
              window.scrollTo(0, scrollY);
            }
          }, 100);

          // Strategy 4: Final attempt after longer delay for heavy pages
          setTimeout(() => {
            if (Math.abs(window.scrollY - scrollY) > 10) {
              window.scrollTo(0, scrollY);
            }
          }, 300);
        }
      }
    }

    // Debounce scroll position saving
    let saveTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        sessionStorage.setItem(storageKey, String(window.scrollY));
      }, 150);
    };

    // Save on visibility change (tab switch, etc.)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sessionStorage.setItem(storageKey, String(window.scrollY));
      }
    };

    // Save on beforeunload (full page reload/close)
    const handleBeforeUnload = () => {
      sessionStorage.setItem(storageKey, String(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Save final scroll position on cleanup (navigation away)
      sessionStorage.setItem(storageKey, String(window.scrollY));

      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      if (saveTimer) clearTimeout(saveTimer);
    };
  }, [pathname]);
}
