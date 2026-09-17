"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import TrustTelemetryBadges from "./TrustTelemetryBadges";

interface FinalCTAProps {
  onOpenDownload: () => void;
}

export default function FinalCTA({ onOpenDownload }: FinalCTAProps) {
  return (
    <section className="min-h-[85vh] py-40 sm:py-52 relative overflow-hidden flex flex-col items-center justify-center text-center select-none">
      {/* Subtle Cyan Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#0A84FF]/[0.04] rounded-full blur-[200px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12"
      >
        
        {/* Massive Typography with Generous Empty Space */}
        <div className="space-y-4">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[0.96]">
            YOUR DAILY QUEST <br />
            IS WAITING. <br />
            <span className="text-[#0A84FF]">
              WILL YOU ARISE?
            </span>
          </h2>
        </div>

        {/* Primary Action Button & Security Telemetry */}
        <div className="space-y-6">
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenDownload}
              className="px-10 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-black font-semibold text-xs tracking-tight transition-all inline-flex items-center gap-2 shadow-2xl shadow-blue-500/20 cursor-pointer"
            >
              <span>DOWNLOAD APK</span>
              <Download className="w-3.5 h-3.5 opacity-80" />
            </motion.button>
          </div>

          <TrustTelemetryBadges showAll={false} />
        </div>

        {/* Single Minimal QR Code */}
        <div className="pt-2 flex justify-center">
          <motion.div
            whileHover={{ y: -3 }}
            onClick={onOpenDownload}
            className="p-4 rounded-2xl bg-white dark:bg-[#070B16] border border-slate-200 dark:border-white/[0.08] shadow-sm inline-flex flex-col items-center gap-2 cursor-pointer hover:border-slate-400 dark:hover:border-white/20 transition-all"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-black/60 rounded-lg flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900 dark:fill-white">
                <path d="M0 0h30v30H0zm6 6v18h18V6zm4 4h10v10H10zM70 0h30v30H70zm6 6v18h18V6zm4 4h10v10H80zM0 70h30v30H0zm6 6v18h18V76zm4 4h10v10H10zM40 10h10v10H40zm10 20h10v10H50zm-10 10h10v10H40zm20-20h10v10H60zm10 20h10v10H70zm-30 20h10v10H40zm10 10h10v10H50zm10-10h10v10H60zm10 10h10v10H70zm-30 20h10v10H40zm30 0h10v10H70zm10-10h10v10H80zm10 10h10v10H90zm-10 10h10v10H80zm-40-10h10v10H40zm20 10h10v10H60z" />
              </svg>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              SCAN TO INSTALL
            </span>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}