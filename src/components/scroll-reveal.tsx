"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationStyles: Record<string, { hidden: string; visible: string }> = {
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    "slide-up": {
      hidden: "opacity-0 translate-y-6",
      visible: "opacity-100 translate-y-0",
    },
    "slide-left": {
      hidden: "opacity-0 -translate-x-6 rtl:translate-x-6",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      hidden: "opacity-0 translate-x-6 rtl:-translate-x-6",
      visible: "opacity-100 translate-x-0",
    },
  };

  const anim = animationStyles[animation] || animationStyles["slide-up"];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? anim.visible : anim.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
