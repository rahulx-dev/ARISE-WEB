"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Zap, Gift, Gamepad2, Coins } from "lucide-react";
import DeviceMockup from "./DeviceMockup";
import Interactive3DTilt from "./Interactive3DTilt";
import InteractiveSurveySimulator from "./InteractiveSurveySimulator";
import ManaCurrencyConverter from "./ManaCurrencyConverter";

interface RealCashSectionProps {
  onOpenCashout: (crystals: number) => void;
}

export default function RealCashSection({ onOpenCashout }: RealCashSectionProps) {
  const flow = ["BRAND SURVEYS", "MANA CRYSTALS", "VERIFIED AUDIT", "24–48H PAYOUTS"];

  return (
    <section id="rewards" className="py-36 sm:py-48 relative overflow-hidden">
      {/* Deep Emerald Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#10B981]/[0.05] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left: Headline, Clean Transition Flow, and Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >
            <div className="space-y-4">

              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[0.98]">
                SURVEYS TO <br />
                <span className="text-[#10B981]">
                  REAL PAYOUTS.
                </span>
              </h2>
            </div>

            {/* Visual Transition Sequence */}
            <div className="flex flex-wrap items-center gap-3 select-none">
              {flow.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-xs font-mono tracking-wider font-semibold text-slate-900 dark:text-white uppercase">
                    {item}
                  </span>
                  {idx < flow.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#10B981] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Currency Conversion & Redemption Methods */}
            <div className="pt-2 space-y-4 select-none border-t border-slate-200 dark:border-white/[0.08]">
              <div className="flex flex-wrap items-baseline gap-4">
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                  10 MANA = ₹1 INR
                </div>
                <div className="text-xs font-mono text-[#10B981] font-semibold">
                  100% Zero Fee • Dispatched in 24–48 Hours
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Complete verified brand partner surveys to earn Mana Crystals. Survey responses undergo automated quality verification and are credited within 24 to 48 hours directly via Direct UPI Transfer, Amazon Pay Gift Cards, or Google Play Redeem Codes. You can also convert crystals into In-Game Coins instantly.
              </p>

              {/* Supported Payout Channels Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono text-[11px]">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-slate-900 transition-all text-slate-200 text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-arise-emerald font-bold text-xs">
                    <Zap className="w-3.5 h-3.5 transition-transform group-hover:scale-125" />
                    <span>Direct UPI</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Bank (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/50 hover:bg-slate-900 transition-all text-slate-200 text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-arise-gold font-bold text-xs">
                    <Gift className="w-3.5 h-3.5 transition-transform group-hover:scale-125" />
                    <span>Amazon Pay</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Voucher (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-slate-200 text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-arise-cyan font-bold text-xs">
                    <Gamepad2 className="w-3.5 h-3.5 transition-transform group-hover:scale-125" />
                    <span>Google Play</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Codes (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-500/50 hover:bg-slate-900 transition-all text-slate-200 text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-purple-400 font-bold text-xs">
                    <Coins className="w-3.5 h-3.5 transition-transform group-hover:scale-125" />
                    <span>In-Game Coins</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Instant In-App</span>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenCashout(2450)}
                className="px-7 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-xs font-semibold tracking-tight text-white hover:bg-emerald-500/20 transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <Wallet className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Simulate Reward Portal</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Device Mockup Featuring Real Dungeon Gates & Cashout Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <Interactive3DTilt maxAngle={8} className="w-full max-w-[340px] sm:max-w-[380px]">
              <DeviceMockup
                imageSrc="/screens/arise_dungeon_gates_real.jpg"
                imageAlt="ARISE Real Dungeon Gates & Cashout Screen"
              />
            </Interactive3DTilt>
          </div>

        </div>

        {/* Award-Winning Interactive Widgets: Mini-Survey Simulator & Live Mana Converter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
          <InteractiveSurveySimulator onOpenCashout={() => onOpenCashout(2450)} />
          <ManaCurrencyConverter onOpenCashout={() => onOpenCashout(2450)} />
        </div>
      </div>
    </section>
  );
}