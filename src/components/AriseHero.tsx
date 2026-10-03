"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Flame, Shield, Sparkles, Zap } from "lucide-react";

interface AriseHeroProps {
  onOpenDownload: () => void;
}

export default function AriseHero({ onOpenDownload }: AriseHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="product" className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#000000] pt-32 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden select-none">
      {/* Subtle Radial Blue Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A84FF]/[0.06] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Editorial Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Small Restrained Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111318] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-[#86868B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>The Real-World Progression System</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-[#F5F5F7] leading-[0.96] max-w-2xl">
            Your real life. <br />
            <span className="text-[#86868B]">Now has levels.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#86868B] max-w-xl leading-relaxed font-normal">
            Turn movement, discipline and focus into measurable progression. On-device AI vision tracking, strict app blocking, and real quest rewards.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenDownload}
              className="px-8 py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-semibold text-sm tracking-tight transition-all duration-200 hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD ARISE</span>
            </button>

            <button
              onClick={scrollToFeatures}
              className="px-7 py-4 rounded-full bg-[#111318] hover:bg-[#181B22] border border-white/[0.08] hover:border-white/[0.15] text-[#86868B] hover:text-[#F5F5F7] font-medium text-sm tracking-tight transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Technical Specs Meta */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#6E6E73] pt-2">
            <span>Android 8+</span>
            <span>•</span>
            <span>Stable Release v1.0</span>
            <span>•</span>
            <span>~48 MB</span>
          </div>
        </motion.div>

        {/* Right Hardware Smartphone Showcase with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle Ambient Halo */}
          <div className="absolute w-72 h-72 bg-[#0A84FF]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

          {/* Precision Hardware Phone Chassis */}
          <div className="w-[320px] sm:w-[350px] rounded-[48px] p-3.5 bg-[#0D0F14] border border-white/[0.12] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)] relative overflow-hidden">
            
            {/* Speaker & Sensor Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#000000] rounded-full z-30 flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1D24]" />
            </div>

            {/* Screen Content */}
            <div className="w-full bg-[#000000] rounded-[38px] p-6 pt-10 text-white space-y-5 border border-white/[0.04]">
              
              {/* Status Header */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#86868B] border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                  <span className="font-semibold text-[#F5F5F7]">HUNTER #04291</span>
                </div>
                <span className="text-[#0A84FF]">RANK A // ELITE</span>
              </div>

              {/* Character Progress Core */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-[#86868B]">LEVEL 18</span>
                  <span className="font-mono text-xs text-[#F5F5F7]">8,420 / 10,000 XP</span>
                </div>
                <div className="w-full h-1.5 bg-[#16181F] rounded-full overflow-hidden">
                  <div className="w-[84%] h-full bg-[#0A84FF] rounded-full shadow-[0_0_8px_#0A84FF]" />
                </div>
              </div>

              {/* 3 Quick Stats Chips */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#0D0F14] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#EF4444] mb-0.5">
                    <Flame className="w-3 h-3" />
                    <span className="font-mono text-[10px] font-bold">42d</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider">Streak</span>
                </div>

                <div className="bg-[#0D0F14] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#0A84FF] mb-0.5">
                    <Sparkles className="w-3 h-3" />
                    <span className="font-mono text-[10px] font-bold">8,420</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider">Mana</span>
                </div>

                <div className="bg-[#0D0F14] p-2.5 rounded-xl border border-white/[0.06] text-center">
                  <div className="flex items-center justify-center gap-1 text-[#F5F5F7] mb-0.5">
                    <Zap className="w-3 h-3" />
                    <span className="font-mono text-[10px] font-bold">327</span>
                  </div>
                  <span className="text-[9px] text-[#6E6E73] block uppercase tracking-wider">Quests</span>
                </div>
              </div>

              {/* Daily Active Quest */}
              <div className="bg-[#0D0F14] p-3.5 rounded-2xl border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#F5F5F7]">Daily System Quest</span>
                  <span className="font-mono text-[10px] text-[#0A84FF]">ACTIVE</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#86868B]">
                  <div className="flex justify-between font-mono text-[11px]">
                    <span>100 Push-ups</span>
                    <span className="text-[#F5F5F7]">80 / 100</span>
                  </div>
                  <div className="w-full h-1 bg-[#16181F] rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-[#F5F5F7] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Focus Shield Active State */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 text-xs">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#0A84FF]" />
                  <span className="text-[#F5F5F7] font-medium">Focus Shield Active</span>
                </div>
                <span className="font-mono text-[10px] text-[#0A84FF]">6 APPS LOCKED</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
