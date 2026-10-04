"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export default function AriseHunterProfile() {
  return (
    <section id="hunters" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Become a Hunter.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Your real-world achievements encoded into a cryptographically verified personal Hunter dossier.
          </p>
        </div>

        {/* Apple Wallet / Titanium Digital Card Presentation */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#111318] via-[#08090C] to-[#040507] border border-white/[0.12] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden"
          >
            {/* Subtle Titanium Sheen Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A84FF]/40 to-transparent" />

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-2.5">
                <span className="font-sans font-bold text-2xl text-[#F5F5F7] tracking-tight">
                  ARISE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              </div>
              <div className="font-mono text-xs text-[#86868B] tracking-widest uppercase">
                HUNTER ID // #04291
              </div>
            </div>

            {/* Core Hunter Status */}
            <div className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-8 space-y-2">
                <span className="font-mono text-xs text-[#0A84FF] font-bold uppercase tracking-wider">
                  RANK A // ELITE HUNTER
                </span>
                <h3 className="font-sans font-bold text-3xl sm:text-4xl text-[#F5F5F7] tracking-tight">
                  Level 18 Awakened
                </h3>
                <p className="text-xs text-[#86868B] font-mono pt-1">
                  Active discipline protocol since Sept 2026
                </p>
              </div>

              {/* QR Security Hash */}
              <div className="sm:col-span-4 flex justify-start sm:justify-end">
                <div className="p-3.5 rounded-2xl bg-[#000000] border border-white/[0.08] text-[#86868B]">
                  <QrCode className="w-12 h-12 text-[#F5F5F7]" />
                </div>
              </div>
            </div>

            {/* 4 Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08] font-mono">
              <div>
                <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">STREAK</span>
                <span className="text-lg font-bold text-[#F5F5F7]">42 DAYS</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">TOTAL REPS</span>
                <span className="text-lg font-bold text-[#F5F5F7]">12,842</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">MANA BALANCE</span>
                <span className="text-lg font-bold text-[#0A84FF]">8,420</span>
              </div>
              <div>
                <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">QUESTS CLEARED</span>
                <span className="text-lg font-bold text-[#F5F5F7]">327</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
