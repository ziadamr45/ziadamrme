"use client";

import { useEffect, useRef, useCallback } from "react";
import { useApp } from "@/components/providers";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  hue: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { theme } = useApp();

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(80, Math.floor((width * height) / 15000));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.5 ? 25 : 200, // orange or blue hue
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height);
      }
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const animate = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      time += 1;

      const isDark = theme === "dark";
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse interaction — gentle push
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150 * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Pulse
        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = p.opacity * (0.5 + pulse * 0.5);
        const currentSize = p.size * (0.8 + pulse * 0.4);

        // Draw glow
        const glowSize = currentSize * 4;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        if (isDark) {
          gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${currentOpacity * 0.6})`);
          gradient.addColorStop(0.5, `hsla(${p.hue}, 80%, 60%, ${currentOpacity * 0.15})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 80%, 50%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${p.hue}, 70%, 55%, ${currentOpacity * 0.5})`);
          gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 50%, ${currentOpacity * 0.1})`);
          gradient.addColorStop(1, `hsla(${p.hue}, 70%, 45%, 0)`);
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${currentOpacity})`;
        } else {
          ctx.fillStyle = `hsla(${p.hue}, 70%, 50%, ${currentOpacity * 0.7})`;
        }
        ctx.fill();
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            if (isDark) {
              ctx.strokeStyle = `rgba(148, 163, 184, ${lineOpacity})`;
            } else {
              ctx.strokeStyle = `rgba(100, 116, 139, ${lineOpacity * 0.6})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme, initParticles]);

  return (
    <>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        style={{ pointerEvents: "auto" }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Orb 1 — top right, warm orange */}
        <div className="orb orb-1" />

        {/* Orb 2 — bottom left, cool blue */}
        <div className="orb orb-2" />

        {/* Orb 3 — center, purple accent */}
        <div className="orb orb-3" />

        {/* Orb 4 — moving small accent */}
        <div className="orb orb-4" />
      </div>

      {/* Animated aurora wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
