"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Gift, Palette } from "lucide-react";

export default function AriseManaEconomy() {
  const economySteps = [
    {
      step: "01",
      label: "COMPLETE QUESTS",
      desc: "Perform AI-verified push-ups, squats, and distance sprints.",
    },
    {
      step: "02",
      label: "ACCUMULATE XP",
      desc: "Level up your Hunter Rank and increase your base daily multiplier.",
    },
    {
      step: "03",
      label: "HARVEST MANA",
      desc: "Raw physical calories convert automatically to digital Mana Crystals.",
    },
    {
      step: "04",
      label: "REDEEM REWARDS",
      desc: "Unlock screen time, system themes, or redeem eligible partner rewards.",
    },
  ];

  const rewardUtilities = [
    {
      icon: <Smartphone className="w-5 h-5 text-[#0A84FF]" />,
      title: "App Screen Time",
      desc: "Spend Mana directly to unlock 15–60 minute focused social media passes.",
    },
    {
      icon: <Palette className="w-5 h-5 text-[#0A84FF]" />,
      title: "Obsidian Themes",
      desc: "Custom Hunter UI colorways, neon HUD reticles, and sound synthesizer packs.",
    },
    {
      icon: <Gift className="w-5 h-5 text-[#0A84FF]" />,
      title: "Eligible Rewards",
      desc: "Redeem eligible digital vouchers, gym gear discounts, and partner perks.",
    },
  ];

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>THE REWARD PROTOCOL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Mana is your progress.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            A transparent energy economy. Real physical calories burned translate into tangible in-app utility and eligible rewards.
          </p>
        </div>

        {/* Central Mana Crystal Showcase + Economy Loop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Animated Mana Crystal Geometry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-12 rounded-3xl bg-[#08090C] border border-white/[0.08] relative overflow-hidden">
            {/* Soft Sapphire Glow */}
            <div className="absolute w-48 h-48 bg-[#0A84FF]/20 rounded-full blur-[70px] pointer-events-none" />

            {/* Rotating 3D-effect Geometric Mana Crystal */}
            <motion.div
              animate={{ rotateY: 360, y: [-8, 8, -8] }}
              transition={{
                rotateY: { duration: 16, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-40 h-52 relative flex items-center justify-center [perspective:1000px] mb-6"
            >
              <div className="w-28 h-40 bg-gradient-to-tr from-[#0A84FF] via-[#38BDF8] to-white/90 clip-path-crystal shadow-[0_0_50px_rgba(10,132,255,0.4)] opacity-90"
                style={{
                  clipPath: "polygon(50% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)",
                }}
              />
            </motion.div>

            <div className="text-center space-y-1 relative z-10">
              <span className="font-mono text-xs text-[#0A84FF] font-bold uppercase tracking-widest">
                [•] MANA CRYSTAL // UNIT
              </span>
              <div className="font-sans font-bold text-2xl text-[#F5F5F7]">
                1 Rep ≈ 0.5 Mana
              </div>
              <p className="text-xs text-[#6E6E73] max-w-xs font-mono">
                Cryptographically signed locally upon exercise completion
              </p>
            </div>
          </div>

          {/* Right 4-Step Economy Loop */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {economySteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-2"
                >
                  <span className="font-mono text-xs text-[#0A84FF] font-bold block">
                    PHASE {step.step}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-[#F5F5F7]">
                    {step.label}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 3 Utilities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {rewardUtilities.map((util) => (
                <div
                  key={util.title}
                  className="p-5 rounded-2xl bg-[#0D0F14] border border-white/[0.04] space-y-2"
                >
                  <div className="p-2 w-fit rounded-xl bg-white/[0.04]">
                    {util.icon}
                  </div>
                  <h4 className="font-bold text-sm text-[#F5F5F7]">{util.title}</h4>
                  <p className="text-[11px] text-[#86868B] leading-relaxed">{util.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
