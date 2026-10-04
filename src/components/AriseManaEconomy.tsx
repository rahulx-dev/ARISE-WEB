"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Gift, Palette, Sparkles } from "lucide-react";

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
      label: "REDEEM UTILITY",
      desc: "Unlock screen time, system themes, or redeem eligible partner rewards.",
    },
  ];

  const rewardUtilities = [
    {
      icon: <Smartphone className="w-5 h-5 text-[#0A84FF]" />,
      title: "App Screen Passes",
      desc: "Spend Mana directly to unlock 15–60 minute focused social media windows.",
    },
    {
      icon: <Palette className="w-5 h-5 text-[#0A84FF]" />,
      title: "Obsidian Themes",
      desc: "Custom Hunter UI colorways, neon HUD reticles, and sound synthesizer packs.",
    },
    {
      icon: <Gift className="w-5 h-5 text-[#0A84FF]" />,
      title: "Partner Perks",
      desc: "Redeem eligible digital vouchers, gym gear discounts, and partner perks.",
    },
  ];

  return (
    <section id="mana" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Mana is your sweat. <br />
            <span className="text-[#86868B]">Crystallized into currency.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            A transparent proof-of-work energy economy. Real physical calories burned translate into tangible in-app utility and digital assets.
          </p>
        </div>

        {/* Central Mana Crystal Showcase + Economy Loop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Animated 3D Mana Crystal Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-12 rounded-[36px] bg-gradient-to-b from-[#12141A] via-[#08090C] to-[#040507] border border-white/[0.1] relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
            {/* Soft Sapphire Volumetric Glow */}
            <div className="absolute w-56 h-56 bg-[#0A84FF]/20 rounded-full blur-[80px] pointer-events-none" />

            {/* Rotating 3D-effect Geometric Mana Crystal */}
            <motion.div
              animate={{ rotateY: 360, y: [-10, 10, -10] }}
              transition={{
                rotateY: { duration: 14, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-44 h-56 relative flex items-center justify-center [perspective:1000px] mb-6"
            >
              <div
                className="w-32 h-44 bg-gradient-to-tr from-[#0A84FF] via-[#38BDF8] to-white/95 shadow-[0_0_60px_rgba(10,132,255,0.45)] opacity-95 relative"
                style={{
                  clipPath: "polygon(50% 0%, 100% 30%, 80% 100%, 20% 100%, 0% 30%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <div className="text-center space-y-1 relative z-10">
              <span className="font-mono text-xs text-[#0A84FF] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                MANA CRYSTAL
              </span>
              <div className="font-sans font-bold text-2xl text-[#F5F5F7]">
                1 Verified Rep = 0.5 Mana
              </div>
            </div>
          </div>

          {/* Right 4-Step Economy Loop */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {economySteps.map((step) => (
                <div
                  key={step.label}
                  className="p-6 rounded-3xl bg-[#08090C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
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
                  className="p-5 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-2"
                >
                  <div className="p-2 w-fit rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20">
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
