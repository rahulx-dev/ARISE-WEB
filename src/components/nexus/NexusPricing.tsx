"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface NexusPricingProps {
  onSelectPlan?: () => void;
}

export default function NexusPricing({ onSelectPlan }: NexusPricingProps) {
  const tiers = [
    {
      name: "E-Rank Hunter",
      price: "₹0",
      cadence: "Forever Free",
      desc: "For solo hunters beginning their physical awakening journey.",
      features: [
        "30 FPS On-Device AI Pose Detection",
        "Daily System Quest Board & Push-up Tracker",
        "1 Gate Guardian App Lock Toll",
        "Standard Mana Crystal Accumulation",
        "100% Offline Privacy Guarantee",
      ],
      popular: false,
      cta: "Download APK Free",
    },
    {
      name: "Shadow Monarch Pass",
      price: "₹199",
      cadence: "per month / ₹999 Lifetime",
      desc: "Maximum discipline acceleration, 2x cashout multiplier & raid boss perks.",
      features: [
        "Everything in Free, plus:",
        "Unlimited Gate Guardian App Locks",
        "2× Mana Crystal Reward Multiplier",
        "Weekly Guild Boss Raids & Clan Loot",
        "Custom System Audio & Voice Feedback",
        "Instant Priority UPI Payout Queue",
      ],
      popular: true,
      cta: "Awaken Monarch Status",
    },
    {
      name: "Guild Sovereign",
      price: "₹1,499",
      cadence: "per squad / year",
      desc: "For fitness creators, university squads, and competitive guilds.",
      features: [
        "Everything in Monarch Pass",
        "Up to 25 Squad Hunter Accounts",
        "Custom Guild Leaderboard & Clan Logo",
        "Automated Squad Workout Tolls",
        "Dedicated VIP Discord Channel",
      ],
      popular: false,
      cta: "Found a Guild",
    },
  ];

  return (
    <section id="pricing" className="bg-ink-950 py-28 sm:py-36 text-mist-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="font-mono text-xs text-signal uppercase tracking-widest">
            06 // HUNTER PASSES
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
            Transparent Investment.
          </h2>
          <p className="font-body text-mist-400 text-base">
            No hidden paywalls on core health. Level up for free or unlock the Monarch pass for maximum discipline.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-2xl transition-all duration-300 ${
                tier.popular
                  ? "bg-ink-900 border-2 border-signal shadow-[0_0_40px_rgba(232,255,71,0.15)] scale-[1.03]"
                  : "bg-ink-900/60 border border-white/5 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-signal text-ink-950 font-mono text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-mist-100">
                    {tier.name}
                  </h3>
                  <p className="font-body text-mist-400 text-xs sm:text-sm mt-1">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="font-display font-black text-4xl sm:text-5xl text-mist-100 tracking-tight">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-mist-500 ml-2">
                    {tier.cadence}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-signal/15 text-signal shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-body text-xs sm:text-sm text-mist-300">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    sound.playClick();
                    if (onSelectPlan) onSelectPlan();
                  }}
                  className={`w-full py-4 rounded-full font-display font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                    tier.popular
                      ? "bg-signal hover:bg-[#d4ff00] text-ink-950 shadow-[0_0_25px_rgba(232,255,71,0.35)]"
                      : "bg-white/[0.04] hover:bg-white/10 text-mist-100 border border-white/10 hover:border-signal/40"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
