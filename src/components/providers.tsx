"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

type Theme = "light" | "dark";
type Language = "ar" | "en";

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: (event?: React.MouseEvent) => void;
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType>({
  theme: "light",
  language: "ar",
  toggleTheme: () => {},
  toggleLanguage: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export function Providers({ children, defaultTheme, defaultLanguage }: { children: React.ReactNode; defaultTheme?: Theme; defaultLanguage?: Language }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme || "light");
  const [language, setLanguage] = useState<Language>(defaultLanguage || "ar");
  const [mounted, setMounted] = useState(false);

  // Theme transition state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 0, y: 0 });
  const [nextTheme, setNextTheme] = useState<Theme | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mark as mounted — theme/language are already applied server-side via cookies
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    // Theme
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme};path=/;max-age=31536000;samesite=lax`;

    // Language
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
    document.cookie = `language=${language};path=/;max-age=31536000;samesite=lax`;
  }, [theme, language, mounted]);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      // Check if View Transitions API is available (modern browsers)
      const newTheme = theme === "light" ? "dark" : "light";

      if (event && document.startViewTransition) {
        // Use View Transitions API with clip-path animation
        const x = event.clientX;
        const y = event.clientY;
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
          setTheme(newTheme);
        });

        transition.ready.then(() => {
          const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ];
          document.documentElement.animate(
            {
              clipPath: newTheme === "dark" ? clipPath : [...clipPath].reverse(),
            },
            {
              duration: 500,
              easing: "ease-in-out",
              pseudoElement: newTheme === "dark"
                ? "::view-transition-new(root)"
                : "::view-transition-old(root)",
            }
          );
        });
      } else if (event) {
        // Fallback: Custom clip-path overlay animation
        const x = event.clientX;
        const y = event.clientY;

        setTransitionOrigin({ x, y });
        setNextTheme(newTheme);
        setIsTransitioning(true);
      } else {
        // No event provided, just toggle directly
        setTheme(newTheme);
      }
    },
    [theme]
  );

  const handleTransitionEnd = useCallback(() => {
    if (nextTheme) {
      setTheme(nextTheme);
      setNextTheme(null);
    }
    setIsTransitioning(false);
  }, [nextTheme]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  // Calculate the radius needed to cover the entire screen from the origin point
  const getTransitionRadius = () => {
    if (typeof window === "undefined") return 150;
    const { x, y } = transitionOrigin;
    return Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
  };

  return (
    <AppContext.Provider
      value={{ theme, language, toggleTheme, toggleLanguage }}
    >
      {children}

      {/* Theme transition overlay - fallback for browsers without View Transitions API */}
      {isTransitioning && (
        <div
          ref={overlayRef}
          onAnimationEnd={handleTransitionEnd}
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            backgroundColor:
              nextTheme === "dark"
                ? "oklch(0.145 0 0)"
                : "oklch(1 0 0)",
            clipPath: `circle(0px at ${transitionOrigin.x}px ${transitionOrigin.y}px)`,
            animation: `theme-circle-reveal 500ms ease-in-out forwards`,
            "--transition-x": `${transitionOrigin.x}px`,
            "--transition-y": `${transitionOrigin.y}px`,
            "--transition-radius": `${getTransitionRadius()}px`,
          } as React.CSSProperties}
        />
      )}
    </AppContext.Provider>
  );
}
