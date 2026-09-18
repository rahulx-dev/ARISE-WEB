"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Lock, Trophy, DollarSign, ArrowRight, ShieldCheck, Zap, Smartphone } from "lucide-react";
import { sound } from "@/lib/audio";

export default function BentoGridFeatures() {
  return (
    <section id="features" className="py-24 sm:py-36 relative overflow-hidden select-none bg-[#050607]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.01] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-[0.25em] text-[#6F747B] uppercase">
            SYSTEM CAPABILITIES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-[#F5F5F2] leading-[1.05]">
            ENGINEERED FOR <br />
            <span className="italic text-[#A6A9AE]">
              UNBREAKABLE DISCIPLINE.
            </span>
          </h2>
        </div>

        {/* Bento Grid 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: 30 FPS On-Device AI Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl border border-white/10 bg-[#0E1115] p-7 sm:p-9 shadow-xl shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-[#13171C] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Top Accent Light */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9AAEFF] group-hover:scale-105 transition-transform duration-300">
                <Eye className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight">
                30 FPS On-Device AI
              </h3>

              <p className="text-sm text-[#A6A9AE] font-sans leading-relaxed">
                On-device BlazePose neural tracking in volatile RAM. 100% private with zero video cloud uploads.
              </p>
            </div>

            {/* Interactive Visual Element */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6A9AE]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9AAEFF]" />
                <span>Zero Cloud Telemetry</span>
              </div>
              <a
                href="#ai"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-[#F5F5F2] font-semibold hover:text-[#9AAEFF] transition-colors"
              >
                <span>Explore AI</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Gate Guardian Protocol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-[#0E1115] p-7 sm:p-9 shadow-xl shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-[#13171C] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B4A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B4A] group-hover:scale-105 transition-transform duration-300">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight">
                Gate Guardian App Lock
              </h3>

              <p className="text-sm text-[#A6A9AE] font-sans leading-relaxed">
                Hardware-level app locking unlocked exclusively via verified AI workout reps.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6A9AE]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#FF6B4A]" />
                <span>Zero Bypass Hardware Lock</span>
              </div>
              <a
                href="#gate"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-[#F5F5F2] font-semibold hover:text-[#FF6B4A] transition-colors"
              >
                <span>Try Simulator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Real Life RPG Hunter System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl border border-white/10 bg-[#0E1115] p-7 sm:p-9 shadow-xl shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-[#13171C] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9AAEFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9AAEFF] group-hover:scale-105 transition-transform duration-300">
                <Trophy className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight">
                Real Life RPG Hunter OS
              </h3>

              <p className="text-sm text-[#A6A9AE] font-sans leading-relaxed">
                Real-world RPG stat progression from E-Rank recruit to S-Rank Shadow Monarch.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6A9AE]">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9AAEFF]" />
                <span>E-Rank to S-Rank Ranks</span>
              </div>
              <a
                href="#ranks"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-[#F5F5F2] font-semibold hover:text-[#9AAEFF] transition-colors"
              >
                <span>View License</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 4: Authentic Rewards & Wealth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl border border-white/10 bg-[#0E1115] p-7 sm:p-9 shadow-xl shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-[#13171C] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9AAEFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9AAEFF] group-hover:scale-105 transition-transform duration-300">
                <DollarSign className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight">
                Mana to Real Cash Payouts
              </h3>

              <p className="text-sm text-[#A6A9AE] font-sans leading-relaxed">
                Convert Mana Crystals to instant UPI &amp; voucher payouts dispatched in 24–48 hours.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A6A9AE]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9AAEFF]" />
                <span>24–48h Verified Delivery</span>
              </div>
              <a
                href="#rewards"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-[#F5F5F2] font-semibold hover:text-[#9AAEFF] transition-colors"
              >
                <span>Calculate Payout</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
