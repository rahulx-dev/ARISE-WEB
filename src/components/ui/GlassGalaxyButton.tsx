"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { sound } from "@/lib/audio";

export type GlassVariant = "primary" | "secondary" | "mana" | "gold" | "danger" | "ghost";
export type GlassSize = "sm" | "md" | "lg" | "xl";

export interface GlassGalaxyButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  children: React.ReactNode;
  variant?: GlassVariant;
  size?: GlassSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  active?: boolean;
  soundEnabled?: boolean;
  className?: string;
  badge?: string;
}

export default function GlassGalaxyButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  active = false,
  soundEnabled = true,
  className = "",
  badge,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...props
}: GlassGalaxyButtonProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const animFrameRef = useRef<number | null>(null);

  // Micro Galaxy Particle and Light Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 180);
    let height = (canvas.height = canvas.offsetHeight || 44);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate Stardust Stars
    const starCount = variant === "primary" ? 24 : 16;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
      twinkleDir: 1,
      hue: Math.random() > 0.5 ? 220 : 270, // Blue or violet starlight
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Base Iridescent Galaxy Nebula Gradient
      const gradX = (mousePos.x / 100) * width;
      const gradY = (mousePos.y / 100) * height;

      // Color paletting depending on variant
      let nebulaColorA = "rgba(154, 174, 255, 0.25)";
      let nebulaColorB = "rgba(180, 110, 255, 0.18)";
      let nebulaColorC = "rgba(112, 214, 255, 0.12)";

      if (variant === "mana") {
        nebulaColorA = "rgba(112, 214, 255, 0.35)";
        nebulaColorB = "rgba(154, 174, 255, 0.22)";
        nebulaColorC = "rgba(90, 130, 255, 0.15)";
      } else if (variant === "gold") {
        nebulaColorA = "rgba(255, 215, 0, 0.35)";
        nebulaColorB = "rgba(255, 160, 50, 0.20)";
        nebulaColorC = "rgba(255, 240, 150, 0.12)";
      } else if (variant === "danger") {
        nebulaColorA = "rgba(255, 80, 100, 0.35)";
        nebulaColorB = "rgba(220, 40, 70, 0.20)";
        nebulaColorC = "rgba(255, 120, 140, 0.12)";
      } else if (variant === "secondary") {
        nebulaColorA = "rgba(255, 255, 255, 0.10)";
        nebulaColorB = "rgba(154, 174, 255, 0.08)";
        nebulaColorC = "rgba(255, 255, 255, 0.04)";
      }

      // Dynamic Nebula Flare
      const nebulaGrad = ctx.createRadialGradient(
        gradX,
        gradY,
        0,
        gradX,
        gradY,
        width * 0.8
      );
      nebulaGrad.addColorStop(0, nebulaColorA);
      nebulaGrad.addColorStop(0.4, nebulaColorB);
      nebulaGrad.addColorStop(0.8, nebulaColorC);
      nebulaGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = nebulaGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Stars
      for (const star of stars) {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha > 0.9) star.twinkleDir = -1;
        if (star.alpha < 0.2) star.twinkleDir = 1;

        ctx.fillStyle = `hsla(${star.hue}, 80%, 85%, ${star.alpha * (isHovered ? 1 : 0.6)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [variant, mousePos, isHovered]);

  const handlePointerMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    onMouseMove?.(e);
  }, [onMouseMove]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (soundEnabled) {
      sound.playClick();
    }
    onClick?.(e);
  };

  // Size specific styles
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-[11px] gap-1.5 min-h-[32px]",
    md: "px-5 py-2.5 text-xs gap-2 min-h-[40px]",
    lg: "px-7 py-3 text-sm gap-2.5 min-h-[48px]",
    xl: "px-9 py-4 text-base gap-3.5 min-h-[56px] font-semibold",
  }[size];

  // Variant specific styling
  const variantStyles = {
    primary: {
      wrapper: "bg-[#0A0C10]/80 text-[#F5F5F2] border-white/25 hover:border-white/50",
      glow: "from-[#9AAEFF]/40 via-[#B470FF]/30 to-[#70D6FF]/40",
      lens: "from-white/35 via-white/10 to-transparent",
      text: "text-white font-semibold tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]",
      aura: "rgba(154, 174, 255, 0.35)",
    },
    secondary: {
      wrapper: "bg-[#0A0D12]/70 text-[#D8DBE2] border-white/15 hover:border-white/35",
      glow: "from-white/20 via-[#9AAEFF]/20 to-white/10",
      lens: "from-white/20 via-white/5 to-transparent",
      text: "text-[#E6E8EC] font-medium tracking-normal",
      aura: "rgba(255, 255, 255, 0.15)",
    },
    mana: {
      wrapper: "bg-[#050C1A]/85 text-[#E0F2FE] border-[#70D6FF]/40 hover:border-[#70D6FF]/80",
      glow: "from-[#70D6FF]/50 via-[#38BDF8]/40 to-[#9AAEFF]/50",
      lens: "from-[#BAE6FD]/40 via-white/10 to-transparent",
      text: "text-[#E0F2FE] font-bold tracking-wide drop-shadow-[0_0_8px_rgba(112,214,255,0.6)]",
      aura: "rgba(56, 189, 248, 0.45)",
    },
    gold: {
      wrapper: "bg-[#181105]/85 text-[#FEF08A] border-[#FACC15]/40 hover:border-[#FACC15]/80",
      glow: "from-[#FACC15]/50 via-[#F59E0B]/40 to-[#FDE047]/50",
      lens: "from-[#FEF08A]/40 via-white/10 to-transparent",
      text: "text-[#FEF08A] font-bold tracking-wide drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]",
      aura: "rgba(250, 204, 21, 0.45)",
    },
    danger: {
      wrapper: "bg-[#1A060A]/85 text-[#FECDD3] border-[#F43F5E]/40 hover:border-[#F43F5E]/80",
      glow: "from-[#F43F5E]/50 via-[#E11D48]/40 to-[#FB7185]/50",
      lens: "from-[#FFE4E6]/40 via-white/10 to-transparent",
      text: "text-[#FFE4E6] font-bold tracking-wide drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]",
      aura: "rgba(244, 63, 94, 0.45)",
    },
    ghost: {
      wrapper: "bg-white/[0.03] text-[#A6A9AE] border-white/10 hover:border-white/25 hover:text-white",
      glow: "from-white/10 via-transparent to-white/10",
      lens: "from-white/15 via-transparent to-transparent",
      text: "text-[#A6A9AE] font-medium hover:text-white",
      aura: "rgba(255, 255, 255, 0.08)",
    },
  }[variant];

  return (
    <motion.button
      ref={containerRef}
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.975, y: 1 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      onClick={handleClick}
      onMouseMove={handlePointerMove}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        onMouseLeave?.(e);
      }}
      className={`
        group relative isolate select-none inline-flex items-center justify-center
        rounded-full font-sans cursor-pointer overflow-hidden
        backdrop-blur-2xl border transition-all duration-300
        ${sizeClasses}
        ${variantStyles.wrapper}
        ${fullWidth ? "w-full" : "w-auto"}
        ${active ? "ring-2 ring-white/50 border-white/80" : ""}
        ${className}
      `}
      style={{
        boxShadow: isHovered
          ? `0 12px 30px -6px ${variantStyles.aura}, 0 0 20px 0 ${variantStyles.aura}, inset 0 1px 1px 0 rgba(255,255,255,0.4)`
          : `0 4px 16px -2px rgba(0,0,0,0.6), inset 0 1px 1px 0 rgba(255,255,255,0.2)`,
      }}
      {...props}
    >
      {/* Dynamic ThreeJS Glass Galaxy Canvas Background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full rounded-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Iridescent Chromatic Dispersion Rim */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-full bg-gradient-to-r ${variantStyles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px] -z-10`}
      />

      {/* Curvature Top Refractive Lens Caustic (Sol Glass Reflection) */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-full bg-gradient-to-b ${variantStyles.lens} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Interactive Cursor Light Spot */}
      <div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(120px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.22), transparent 70%)`,
        }}
      />

      {/* Bottom Subtle Ambient Refraction */}
      <div className="pointer-events-none absolute inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Content Layout */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5 flex-shrink-0">
            {icon}
          </span>
        )}

        <span className={`${variantStyles.text} transition-colors duration-200`}>
          {children}
        </span>

        {badge && (
          <span className="ml-1 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded-full bg-white/15 text-white/90 border border-white/20">
            {badge}
          </span>
        )}

        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
}
