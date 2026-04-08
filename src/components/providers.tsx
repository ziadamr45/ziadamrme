"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";
type Language = "ar" | "en";

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
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

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    const savedLanguage = (localStorage.getItem("language") as Language) || "ar";
    setTheme(savedTheme);
    setLanguage(savedLanguage);
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

    // Language
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [theme, language, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
}
