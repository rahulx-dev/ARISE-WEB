"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Lock, Trophy, DollarSign, ArrowRight, ShieldCheck, Zap, Smartphone } from "lucide-react";
import { sound } from "@/lib/audio";

export default function BentoGridFeatures() {
  return (
    <section id="features" className="py-24 sm:py-36 relative overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            ENGINEERED FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-cyan-400">
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
            className="group relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#070B16]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-blue-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 cursor-pointer"
          >
            {/* Top Accent Light */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0A84FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#0A84FF] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Eye className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#0A84FF] dark:group-hover:text-cyan-400 transition-colors">
                30 FPS On-Device AI
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                On-device BlazePose neural tracking in volatile RAM. 100% private with zero video cloud uploads.
              </p>
            </div>

            {/* Interactive Visual Element */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero Cloud Telemetry</span>
              </div>
              <a
                href="#ai"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-[#0A84FF] dark:text-cyan-400 font-bold hover:underline"
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
            className="group relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#070B16]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-red-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors">
                Gate Guardian App Lock
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Hardware-level app locking unlocked exclusively via verified AI workout reps.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-red-400" />
                <span>Zero Bypass Hardware Lock</span>
              </div>
              <a
                href="#gate"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-red-500 font-bold hover:underline"
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
            className="group relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#070B16]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-purple-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Trophy className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-400 transition-colors">
                Real Life RPG Hunter OS
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Real-world RPG stat progression from E-Rank recruit to S-Rank Shadow Monarch.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>E-Rank to S-Rank Ranks</span>
              </div>
              <a
                href="#ranks"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-purple-400 font-bold hover:underline"
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
            className="group relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#070B16]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 dark:shadow-black/60 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <DollarSign className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-500 transition-colors">
                Mana to Real Cash Payouts
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Convert Mana Crystals to instant UPI &amp; voucher payouts dispatched in 24–48 hours.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>24–48h Verified Delivery</span>
              </div>
              <a
                href="#rewards"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 text-emerald-500 font-bold hover:underline"
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
