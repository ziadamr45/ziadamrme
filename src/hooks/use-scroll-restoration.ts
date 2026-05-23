"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * useScrollRestoration
 *
 * Saves scroll position to sessionStorage as the user scrolls (debounced),
 * and restores it when the page is re-mounted (e.g., on back navigation).
 *
 * Works with Next.js App Router client-side navigation.
 */
export function useScrollRestoration() {
  const pathname = usePathname();
  const restoredRef = useRef(false);

  useEffect(() => {
    // Disable browser's default scroll restoration so we can control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const storageKey = `scroll:${pathname}`;

    // Restore scroll position on mount
    if (!restoredRef.current) {
      restoredRef.current = true;
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const scrollY = parseInt(saved, 10);
        if (!isNaN(scrollY) && scrollY > 0) {
          // Use requestAnimationFrame to ensure DOM is painted before scrolling
          requestAnimationFrame(() => {
            window.scrollTo(0, scrollY);
          });
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Save final scroll position on cleanup (navigation away)
      sessionStorage.setItem(storageKey, String(window.scrollY));

      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (saveTimer) clearTimeout(saveTimer);
    };
  }, [pathname]);
}
