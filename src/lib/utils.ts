import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) to English numerals (0123456789)
 */
function toEnglishNumerals(str: string): string {
  const arabicNumerals = "٠١٢٣٤٥٦٧٨٩";
  return str.replace(/[٠-٩]/g, (char) => {
    const index = arabicNumerals.indexOf(char);
    return index >= 0 ? String(index) : char;
  });
}

/**
 * Format a date string for display with proper locale-aware numeral conversion.
 *
 * Handles the UTC timezone issue where `new Date("2026-05-23")` is parsed as
 * UTC midnight and may display as May 22 in timezones behind UTC.
 * Also ensures Arabic numerals are used in Arabic locale and English numerals
 * in English locale.
 *
 * @param dateStr - ISO date string like "2026-05-23"
 * @param language - Current language ("ar" or "en")
 * @returns Formatted date string
 */
export function formatDate(dateStr: string, language: "ar" | "en"): string {
  // Parse date parts directly to avoid UTC timezone issues
  const [year, month, day] = dateStr.split("-").map(Number);

  // Create date in local timezone using the constructor with separate parts
  // Month is 0-indexed in JS Date, so subtract 1
  const date = new Date(year, month - 1, day);

  const locale = language === "ar" ? "ar-EG" : "en-US";
  const formatted = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // When language is English, ensure English numerals (not Arabic-Indic)
  if (language === "en") {
    return toEnglishNumerals(formatted);
  }

  return formatted;
}
