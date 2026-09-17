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
    <section className="relative min-h-[80vh] sm:min-h-[90vh] py-32 flex items-center justify-center overflow-hidden select-none border-t border-slate-200/80 dark:border-white/[0.08]">
      {/* Background Mountain Cosmic Light Beam */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/visuals/mountain_cosmic_beam.jpg"
          alt="ARISE Cosmic Mountain Summit"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Soft atmospheric gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Philosophy Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 border-l border-white/20 pl-4 space-y-1 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-slate-300 uppercase"
          >
            <div>SAME</div>
            <div>HUMAN.</div>
            <div>HIGHER</div>
            <div className="text-white font-bold">POTENTIAL.</div>
          </motion.div>

          {/* Center: Glowing ARISE Branding & Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 text-center space-y-4 py-8"
          >
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[0.4em] text-white font-sans drop-shadow-2xl">
              ARISE
            </h2>
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-300 uppercase">
              DISCIPLINE LIVES LONGER
            </p>
          </motion.div>

          {/* Right: Pill Download Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex justify-start lg:justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sound.playClick();
                onOpenDownload();
              }}
              className="px-7 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-sans font-medium text-xs tracking-tight backdrop-blur-md transition-all duration-300 inline-flex items-center gap-2.5 shadow-2xl shadow-blue-500/20 cursor-pointer"
            >
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}