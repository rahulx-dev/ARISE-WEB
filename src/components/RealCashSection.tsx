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
    <section id="rewards" className="py-36 sm:py-48 relative overflow-hidden bg-[#050607]">
      {/* Subtle Cold Violet Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#9AAEFF]/[0.015] rounded-full blur-[180px] pointer-events-none -z-10" />

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
            <div className="space-y-3">
              <div className="text-xs font-mono tracking-[0.25em] text-[#A6A9AE] uppercase">
                MANA CONVERSION &amp; PAYOUT PROTOCOL
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F5F2] leading-[0.98]">
                Surveys To <br />
                <span className="italic text-[#A6A9AE]">
                  Real Payouts.
                </span>
              </h2>
            </div>

            {/* Visual Transition Sequence */}
            <div className="flex flex-wrap items-center gap-3 select-none">
              {flow.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-xs font-mono tracking-wider font-semibold text-[#F5F5F2] uppercase">
                    {item}
                  </span>
                  {idx < flow.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#9AAEFF] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Currency Conversion & Redemption Methods */}
            <div className="pt-2 space-y-4 select-none border-t border-white/10">
              <div className="flex flex-wrap items-baseline gap-4">
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#F5F5F2]">
                  10 MANA = ₹1 INR
                </div>
                <div className="text-xs font-mono text-[#9AAEFF] font-semibold">
                  100% Zero Fee • Dispatched in 24–48 Hours
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-[#A6A9AE] leading-relaxed">
                Earn Mana Crystals through workouts and partner surveys. Cash out via UPI, vouchers, or in-game coins.
              </p>

              {/* Supported Payout Channels Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono text-[11px]">
                <div className="p-3 rounded-2xl bg-[#0E1115] border border-white/10 hover:border-white/20 transition-all text-[#F5F5F2] text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-[#F5F5F2] font-bold text-xs">
                    <Zap className="w-3.5 h-3.5 text-[#9AAEFF] transition-transform group-hover:scale-110" />
                    <span>Direct UPI</span>
                  </div>
                  <span className="text-[10px] text-[#6F747B]">Bank (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#0E1115] border border-white/10 hover:border-white/20 transition-all text-[#F5F5F2] text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-[#F5F5F2] font-bold text-xs">
                    <Gift className="w-3.5 h-3.5 text-[#9AAEFF] transition-transform group-hover:scale-110" />
                    <span>Amazon Pay</span>
                  </div>
                  <span className="text-[10px] text-[#6F747B]">Voucher (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#0E1115] border border-white/10 hover:border-white/20 transition-all text-[#F5F5F2] text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-[#F5F5F2] font-bold text-xs">
                    <Gamepad2 className="w-3.5 h-3.5 text-[#9AAEFF] transition-transform group-hover:scale-110" />
                    <span>Google Play</span>
                  </div>
                  <span className="text-[10px] text-[#6F747B]">Codes (24–48h)</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#0E1115] border border-white/10 hover:border-white/20 transition-all text-[#F5F5F2] text-center flex flex-col items-center gap-1.5 group cursor-default shadow-sm">
                  <div className="flex items-center gap-1 text-[#F5F5F2] font-bold text-xs">
                    <Coins className="w-3.5 h-3.5 text-[#9AAEFF] transition-transform group-hover:scale-110" />
                    <span>In-Game Coins</span>
                  </div>
                  <span className="text-[10px] text-[#6F747B]">Instant In-App</span>
                </div>
              </div>
            </div>

            {/* Action Trigger - Secondary CTA */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenCashout(2450)}
                className="px-7 py-3.5 rounded-full border border-white/20 bg-[#0E1115] text-xs font-semibold tracking-tight text-[#F5F5F2] hover:bg-white/10 transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Wallet className="w-3.5 h-3.5 text-[#9AAEFF]" />
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

        {/* Interactive Widgets: Mini-Survey Simulator & Live Mana Converter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/10">
          <InteractiveSurveySimulator onOpenCashout={() => onOpenCashout(2450)} />
          <ManaCurrencyConverter onOpenCashout={() => onOpenCashout(2450)} />
        </div>
      </div>
    </section>
  );
}