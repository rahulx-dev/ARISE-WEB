"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface FinalCTAProps {
  onOpenDownload: () => void;
}

export default function FinalCTA({ onOpenDownload }: FinalCTAProps) {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden select-none bg-[#050607]">
      {/* Subtle Atmospheric Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#9AAEFF]/[0.02] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-[#0E1115] p-8 sm:p-14 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Top Subtle Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Left: Heading & Subtitle */}
          <div className="space-y-3 z-10 text-center lg:text-left max-w-md">
            <div className="font-mono text-[10px] tracking-[0.25em] text-[#6F747B] uppercase">
              NEXT GENERATION OS
            </div>
            <h3 className="font-display text-4xl sm:text-6xl font-normal text-[#F5F5F2] leading-tight">
              Ready to rise?
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A9AE] font-sans leading-relaxed">
              Download ARISE and take the first step toward unbreakable discipline.
            </p>
          </div>

          {/* Center: Contained Device Mockup Asset */}
          <div className="w-64 sm:w-80 h-44 relative z-10 flex items-center justify-center">
            <img
              src="/visuals/device_ready_to_rise.jpg"
              alt="ARISE Device Interface"
              className="w-full h-full object-cover rounded-2xl opacity-90 shadow-2xl border border-white/10"
            />
          </div>

          {/* Right: Download Pill Button & Security Subtext */}
          <div className="flex flex-col items-center lg:items-end gap-2.5 z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                sound.playClick();
                onOpenDownload();
              }}
              className="px-8 py-3.5 rounded-full bg-[#F5F5F2] hover:bg-white text-[#050607] font-sans font-semibold text-xs tracking-tight transition-all duration-300 inline-flex items-center gap-2 shadow-2xl cursor-pointer"
            >
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <span className="font-mono text-[10px] text-[#6F747B]">
              Free • Safe • Always Improving
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}