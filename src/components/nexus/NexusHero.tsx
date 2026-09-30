"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

interface NexusHeroProps {
  onOpenDownload?: () => void;
}

export default function NexusHero({ onOpenDownload }: NexusHeroProps) {
  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[96vh] w-full flex flex-col justify-center bg-ink-950 pt-32 pb-20 overflow-hidden select-none">
      {/* Background Radial Glow & Futuristic Grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-signal/[0.05] rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#e8ff47_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Availability / System Online Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-signal/30 bg-signal/10 backdrop-blur-md text-xs font-mono text-signal mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-signal animate-ping" />
          <span className="font-semibold uppercase tracking-wider">[•] SYSTEM ONLINE // VERSION 2.4 LIVE →</span>
        </motion.div>

        {/* Massive Kinetic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] font-black tracking-tight text-mist-100 leading-[0.91] uppercase">
            <div>CONVERT YOUR PAIN</div>
            <div className="text-mist-500">INTO REAL POWER.</div>
            <div className="text-signal drop-shadow-[0_0_35px_rgba(232,255,71,0.25)]">
              THE REAL-LIFE RPG.
            </div>
          </h1>
        </motion.div>

        {/* Subhead & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl space-y-8"
        >
          <p className="font-body text-mist-400 text-lg sm:text-xl leading-relaxed">
            ARISE transforms your daily physical discipline into character progression. 
            Experience <span className="text-mist-100 font-semibold">30 FPS On-Device AI</span> posture tracking, 
            <span className="text-mist-100 font-semibold"> Gate Guardian</span> doomscroll blockers, and 
            <span className="text-signal font-semibold"> Mana Crystals</span> redeemable directly to real cash via UPI & Amazon.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenDownload) onOpenDownload();
              }}
              className="px-8 py-4 rounded-full bg-signal text-ink-950 font-display font-bold text-base tracking-tight hover:bg-[#d4ff00] hover:shadow-[0_0_35px_rgba(232,255,71,0.45)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" />
              <span>Download App Free</span>
            </button>

            <button
              onClick={() => scrollTo("features")}
              className="px-8 py-4 rounded-full border border-white/10 hover:border-signal/40 text-mist-300 hover:text-white font-body text-base transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-md bg-white/[0.02]"
            >
              <span>Explore Features</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Key Quick Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-mist-500 border-t border-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-signal" />
              <span>100% On-Device AI (Zero Video Upload)</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-signal" />
              <span>Direct UPI & Amazon Rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-signal" />
              <span>14,200+ Active Hunters</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rotating Studio Stamp Badge in Bottom Right */}
      <div className="absolute right-8 bottom-12 hidden lg:block pointer-events-none select-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 relative flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePathHero"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="font-mono text-[8.5px] fill-mist-500 tracking-[0.22em] uppercase">
              <textPath href="#circlePathHero">
                SOLO LEVELING · SYSTEM · ARISE 2026 · HUNTER PROTOCOL ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display font-black text-signal text-base leading-none">ARISE</span>
            <span className="font-mono text-[9px] text-mist-500">SYSTEM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
