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
    <div className="space-y-16 py-20 select-none">
      
      {/* 1. Discipline Builds Freedom Mountain Beam Banner */}
      <section className="relative min-h-[65vh] sm:min-h-[75vh] flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/[0.08] max-w-7xl mx-auto px-6 sm:px-12">
        {/* Background Mountain Cosmic Light Beam */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="/visuals/mountain_cosmic_beam.jpg"
            alt="ARISE Cosmic Mountain Summit"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <div className="w-full relative z-10 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            
            {/* Left Column: DISCIPLINE BUILDS FREEDOM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-lg"
            >
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[0.98]">
                DISCIPLINE <br />
                BUILDS <br />
                FREEDOM.
              </h2>

              <div className="w-14 h-[1px] bg-white/40" />

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-md">
                ARISE helps you stay consistent so you can create a life you&apos;re proud of.
              </p>
            </motion.div>

            {/* Right: IT STARTS WITH YOU */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="self-end lg:self-center text-right space-y-2 font-mono"
            >
              <div className="text-xs tracking-[0.25em] text-slate-300 uppercase">
                IT STARTS WITH YOU.
              </div>
              <div className="w-12 h-[1px] bg-white/40 ml-auto" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Ready to rise? Device Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-[#070B16] p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

          {/* Left: Heading & Subtitle */}
          <div className="space-y-2 z-10 text-center md:text-left">
            <h3 className="font-display text-3xl sm:text-5xl font-normal text-white">
              Ready to rise?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Download ARISE and take the first step.
            </p>
          </div>

          {/* Center: Device Mockup Asset */}
          <div className="w-64 sm:w-80 h-40 relative z-10 flex items-center justify-center">
            <img
              src="/visuals/device_ready_to_rise.jpg"
              alt="ARISE Device Interface"
              className="w-full h-full object-cover rounded-2xl opacity-90 shadow-lg"
            />
          </div>

          {/* Right: Download Pill Button & Security Subtext */}
          <div className="flex flex-col items-center gap-2 z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sound.playClick();
                onOpenDownload();
              }}
              className="px-8 py-3.5 rounded-full bg-white text-black font-sans font-semibold text-xs tracking-tight hover:bg-slate-100 transition-all duration-300 inline-flex items-center gap-2 shadow-2xl cursor-pointer"
            >
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <span className="font-mono text-[10px] text-slate-400">
              Free • Safe • Always Improving
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}