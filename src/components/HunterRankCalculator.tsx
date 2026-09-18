"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Sparkles, Trophy } from "lucide-react";

export default function HunterRankCalculator() {
  const [pushups, setPushups] = useState("10-25");
  const [screentime, setScreentime] = useState("3-5 hrs");

  const ranks: Record<string, { rank: string; title: string; color: string; border: string; glow: string; xpGain: string; shadowPower: string }> = {
    "0-10": {
      rank: "E-RANK",
      title: "Awakened Recruit",
      color: "text-[#A6A9AE]",
      border: "border-white/10",
      glow: "shadow-black/50",
      xpGain: "+10 XP / Rep",
      shadowPower: "Basic Dagger Slash",
    },
    "10-25": {
      rank: "D-RANK",
      title: "Iron Vanguard",
      color: "text-[#9AAEFF]",
      border: "border-[#9AAEFF]/30",
      glow: "shadow-black/50",
      xpGain: "+25 XP / Rep",
      shadowPower: "Shadow Stealth I",
    },
    "26-50": {
      rank: "B-RANK",
      title: "Dungeon Striker",
      color: "text-[#F5F5F2]",
      border: "border-white/20",
      glow: "shadow-black/60",
      xpGain: "+60 XP / Rep",
      shadowPower: "Bloodlust Surge",
    },
    "50+": {
      rank: "S-RANK",
      title: "Shadow Monarch",
      color: "text-[#F5F5F2]",
      border: "border-white/30",
      glow: "shadow-black/80",
      xpGain: "+150 XP / Rep",
      shadowPower: "Ruler's Authority // ARISE",
    },
  };

  const currentRank = ranks[pushups] || ranks["10-25"];

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#0E1115] p-6 sm:p-7 shadow-2xl shadow-black/80 space-y-6 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#9AAEFF]" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#F5F5F2] uppercase">
            HUNTER RANK EVALUATOR
          </span>
        </div>
      </div>

      {/* Input Questions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pushups */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-[#A6A9AE] uppercase block">
            Daily Pushups Capacity
          </label>
          <div className="grid grid-cols-2 gap-1.5 font-mono text-xs">
            {["0-10", "10-25", "26-50", "50+"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setPushups(lvl)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  pushups === lvl
                    ? "border-white/30 bg-white/15 text-[#F5F5F2] font-bold shadow-sm"
                    : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Time */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-[#A6A9AE] uppercase block">
            Daily Distraction Screen Time
          </label>
          <div className="grid grid-cols-2 gap-1.5 font-mono text-xs">
            {["1-2 hrs", "3-5 hrs", "5-8 hrs", "8+ hrs"].map((st) => (
              <button
                key={st}
                onClick={() => setScreentime(st)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  screentime === st
                    ? "border-white/30 bg-white/15 text-[#F5F5F2] font-bold shadow-sm"
                    : "border-white/10 bg-[#050607] text-[#A6A9AE] hover:border-white/20 hover:text-[#F5F5F2]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Computed Dynamic Rank Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pushups + screentime}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`p-5 rounded-2xl border ${currentRank.border} bg-[#13171C] shadow-xl ${currentRank.glow} space-y-4`}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#6F747B] uppercase tracking-wider">
                CURRENT EVALUATED STATUS
              </div>
              <div className={`text-3xl font-extrabold font-mono tracking-tight ${currentRank.color}`}>
                {currentRank.rank}
              </div>
              <div className="text-sm font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#9AAEFF]" />
                <span>{currentRank.title}</span>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#050607] border border-white/10 text-right font-mono">
              <div className="text-[10px] text-[#6F747B]">30-DAY POTENTIAL</div>
              <div className="text-xs font-bold text-[#9AAEFF]">S-RANK MONARCH</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#A6A9AE]">
              <Zap className="w-3.5 h-3.5 text-[#9AAEFF]" />
              <span>Yield: {currentRank.xpGain}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#A6A9AE]">
              <Sparkles className="w-3.5 h-3.5 text-[#747BFF]" />
              <span>Skill: {currentRank.shadowPower}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
