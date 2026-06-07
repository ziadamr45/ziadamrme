"use client";

import { useEffect } from "react";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error AdSense push
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded — ad won't display
    }
  }, []);

  return (
    <div className={`w-full ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-8502551436802377"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
