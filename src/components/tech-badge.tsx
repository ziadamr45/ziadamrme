"use client";

interface TechBadgeProps {
  name: string;
  color?: string;
  size?: "sm" | "md";
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}

/**
 * Determines if a hex color is light (needs dark text) or dark (needs light text).
 * Uses the WCAG relative luminance formula.
 */
function isLightColor(hex: string): boolean {
  const color = hex.replace("#", "");
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55;
}

/**
 * GitHub shields.io-style technology badge.
 *
 * Renders a flat, sleek badge similar to what you see in GitHub repository READMEs.
 * Uses the technology's brand color as the background with white/dark text
 * automatically determined by the color's luminance.
 *
 * Variants:
 * - "solid" (default): Full brand-color background — the classic shields.io flat look.
 * - "outline": Transparent background with a brand-color border — for unselected filter chips.
 *
 * Sizes:
 * - "md" (default): Standard badge for tech sections and detail pages.
 * - "sm": Compact badge for project cards and inline usage.
 */
export function TechBadge({
  name,
  color,
  size = "md",
  variant = "solid",
  className = "",
  onClick,
}: TechBadgeProps) {
  // Fallback to neutral slate for unknown technologies
  const brandColor = color || "#64748b";
  // Replace pure black with dark slate for visibility
  const displayColor = brandColor === "#000000" ? "#1e293b" : brandColor;
  const isLight = isLightColor(displayColor);
  const isSolid = variant === "solid";

  const sizeClasses =
    size === "sm"
      ? "px-1.5 py-[3px] text-[10px] gap-1"
      : "px-2.5 py-[4px] text-[11px] gap-1.5";

  const dotSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";

  const Component = onClick ? "button" : "span";

  return (
    <Component
      className={`inline-flex items-center font-semibold whitespace-nowrap rounded-[4px] leading-none transition-all duration-200 ${
        onClick
          ? "cursor-pointer hover:brightness-110 hover:shadow-sm active:scale-95"
          : "cursor-default"
      } ${sizeClasses} ${className}`}
      style={
        isSolid
          ? {
              backgroundColor: displayColor,
              color: isLight ? "#1e293b" : "#ffffff",
              boxShadow: `0 1px 3px ${displayColor}25`,
            }
          : {
              backgroundColor: `${displayColor}08`,
              color: displayColor,
              border: `1.5px solid ${displayColor}50`,
            }
      }
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      <span
        className={`rounded-full flex-shrink-0 ${dotSize}`}
        style={
          isSolid
            ? {
                backgroundColor: isLight
                  ? `${displayColor}30`
                  : "rgba(255,255,255,0.35)",
              }
            : {
                backgroundColor: displayColor,
              }
        }
      />
      {name}
    </Component>
  );
}

/**
 * Compact overflow badge for "+N more" indicators.
 * Styled to complement the TechBadge with a neutral appearance.
 */
export function TechOverflowBadge({ count }: { count: number }) {
  return (
    <span
      className="inline-flex items-center px-1.5 py-[3px] text-[10px] font-semibold whitespace-nowrap rounded-[4px] leading-none bg-slate-500 text-white"
      style={{ boxShadow: "0 1px 3px rgba(100,116,139,0.2)" }}
    >
      +{count}
    </span>
  );
}
