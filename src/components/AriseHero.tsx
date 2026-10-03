"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Flame, Shield, Sparkles, Zap } from "lucide-react";

interface AriseHeroProps {
  onOpenDownload: () => void;
}

export default function AriseHero({ onOpenDownload }: AriseHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 28;
      const y = (e.clientY / innerHeight - 0.5) * 28;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={heroRef}
      id="product"
      style={{ scale: heroScale, opacity: heroOpacity }}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#000000] pt-32 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Cinematic Dark Luxe Volumetric Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-b from-[#0A84FF]/[0.08] via-[#0A84FF]/[0.02] to-transparent rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Editorial Apple-Grade Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Small Restrained Monospace Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08090C] border border-white/[0.1] text-[11px] font-mono uppercase tracking-widest text-[#86868B] shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]" />
            <span className="text-white font-medium">The Real-World Progression Engine</span>
          </div>

          {/* Main Headline with Luxe Metallic Gradient */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.8rem] font-bold tracking-tighter leading-[0.94] max-w-2xl">
            <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#86868B] bg-clip-text text-transparent">
              Your real life.
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#86868B] via-[#6E6E73] to-[#3A3A3C] bg-clip-text text-transparent">
              Now has levels.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#86868B] max-w-xl leading-relaxed font-normal">
            Turn movement, discipline and focus into undeniable progression. Powered by zero-latency on-device AI vision tracking, strict app blocking, and real quest rewards.
          </p>

          {/* Apple Style CTAs with Tactile Feedback */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenDownload}
              className="px-8 py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-semibold text-sm tracking-tight transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(255,255,255,0.18)] flex items-center gap-2.5 cursor-pointer group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD ARISE</span>
            </button>

            <button
              onClick={() => scrollToSection("vision")}
              className="px-7 py-4 rounded-full bg-[#08090C] hover:bg-[#111318] border border-white/[0.1] hover:border-white/[0.2] text-[#86868B] hover:text-[#F5F5F7] font-medium text-sm tracking-tight transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Technical Hardware Specs */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#6E6E73] pt-2">
            <span className="text-[#86868B]">Android 8.0+</span>
            <span className="text-white/20">•</span>
            <span className="text-[#86868B]">Stable v1.0.4</span>
            <span className="text-white/20">•</span>
            <span className="text-[#0A84FF]">~48 MB Offline Core</span>
          </div>
        </motion.div>

        {/* Right Cinematic 3D Floating Phone with Parallax & Specular Sheen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: phoneY,
            transform: `perspective(1200px) rotateY(${mousePos.x * 0.45}deg) rotateX(${-mousePos.y * 0.45}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="lg:col-span-5 flex justify-center items-center relative group"
        >
          {/* Volumetric Radial Ambient Aura */}
          <div className="absolute w-80 h-80 bg-[#0A84FF]/20 rounded-full blur-[120px] pointer-events-none -z-10 group-hover:bg-[#0A84FF]/25 transition-all duration-700" />

          {/* Precision Titanium Hardware Phone Chassis */}
          <div className="w-[325px] sm:w-[355px] rounded-[50px] p-3 bg-gradient-to-b from-[#1E222D] via-[#0E1017] to-[#08090C] border border-white/[0.14] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden">
            
            {/* Dynamic Specular Light Glare across the glass */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-35"
              style={{
                background: `radial-gradient(circle 280px at ${50 + mousePos.x * 2}% ${40 + mousePos.y * 2}%, rgba(255,255,255,0.3), transparent 70%)`,
              }}
            />

            {/* Dynamic Island Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#000000] rounded-full z-30 flex items-center justify-between px-3 border border-white/[0.04]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#111318]" />
            </div>

            {/* Screen Glass Interior */}
            <div className="w-full bg-[#000000] rounded-[40px] p-6 pt-10 text-white space-y-4 border border-white/[0.04] relative">
              
              {/* Status Header */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#86868B] border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span className="font-semibold text-[#F5F5F7]">HUNTER #04291</span>
                </div>
                <span className="text-[#0A84FF] font-semibold">RANK S // SHADOW</span>
              </div>

              {/* Character Progression Core */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#86868B] font-mono">LEVEL 24</span>
                  <span className="font-mono text-xs text-[#F5F5F7]">12,850 / 15,000 XP</span>
                </div>
                <div className="w-full h-1.5 bg-[#16181F] rounded-full overflow-hidden p-0.5">
                  <div className="w-[85%] h-full bg-gradient-to-r from-[#0A84FF] to-[#38BDF8] rounded-full shadow-[0_0_10px_#0A84FF]" />
                </div>
              </div>

              {/* 3 Dark Luxe Stats Pods */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#08090C] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#EF4444] mb-0.5">
                    <Flame className="w-3 h-3" />
                    <span className="font-mono text-[11px] font-bold">48d</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider font-mono">Streak</span>
                </div>

                <div className="bg-[#08090C] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#0A84FF] mb-0.5">
                    <Sparkles className="w-3 h-3" />
                    <span className="font-mono text-[11px] font-bold">14.2K</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider font-mono">Mana</span>
                </div>

                <div className="bg-[#08090C] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#F5F5F7] mb-0.5">
                    <Zap className="w-3 h-3" />
                    <span className="font-mono text-[11px] font-bold">419</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider font-mono">Quests</span>
                </div>
              </div>

              {/* Daily Active Quest */}
              <div className="bg-[#08090C] p-3.5 rounded-2xl border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#F5F5F7]">Daily System Quest</span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#0A84FF]/20 text-[#0A84FF] font-semibold">ACTIVE</span>
                </div>
                <div className="space-y-1 text-xs text-[#86868B]">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span>100 Push-ups</span>
                    <span className="text-[#F5F5F7]">88 / 100</span>
                  </div>
                  <div className="w-full h-1 bg-[#16181F] rounded-full overflow-hidden">
                    <div className="w-[88%] h-full bg-[#F5F5F7] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Focus Shield Active Status */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#0A84FF]/[0.08] border border-[#0A84FF]/20 text-xs">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#0A84FF]" />
                  <span className="text-[#F5F5F7] font-medium text-xs">Focus Shield Active</span>
                </div>
                <span className="font-mono text-[9px] text-[#0A84FF] font-semibold tracking-wide">6 APPS LOCKED</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
