"use client";

import React from "react";
import { Download } from "lucide-react";

interface AriseFinalCTAProps {
  onOpenDownload: () => void;
}

export default function AriseFinalCTA({ onOpenDownload }: AriseFinalCTAProps) {
  return (
    <section className="bg-[#000000] py-36 sm:py-48 px-6 sm:px-8 lg:px-12 select-none text-center relative overflow-hidden border-t border-white/[0.08]">
      {/* Deep Obsidian Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0A84FF]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        <div className="space-y-4">
          <h1 data-h1-cursor className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#F5F5F7] leading-none uppercase cursor-default select-none">
            LEVEL UP <br />
            <span className="text-[#86868B]">YOUR REAL LIFE.</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-[#86868B] max-w-lg mx-auto font-normal leading-relaxed">
          The ultimate gamified discipline operating system. Download the official APK and start your journey today.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenDownload}
            className="px-10 py-5 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] shadow-[0_4px_30px_rgba(255,255,255,0.25)] inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD ARISE</span>
          </button>
        </div>

      </div>
    </section>
  );
}
