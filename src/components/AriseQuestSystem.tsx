"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Target } from "lucide-react";

interface LevelPreset {
  level: number;
  rankName: string;
  rankCode: string;
  pushups: number;
  squats: number;
  situps: number;
  runKm: number;
  xpReward: number;
  manaReward: number;
}

export default function AriseQuestSystem() {
  const presets: LevelPreset[] = [
    {
      level: 1,
      rankName: "Awakening",
      rankCode: "E-RANK",
      pushups: 20,
      squats: 20,
      situps: 20,
      runKm: 1.5,
      xpReward: 250,
      manaReward: 50,
    },
    {
      level: 5,
      rankName: "Hunter",
      rankCode: "C-RANK",
      pushups: 50,
      squats: 50,
      situps: 50,
      runKm: 4.0,
      xpReward: 800,
      manaReward: 160,
    },
    {
      level: 10,
      rankName: "Elite Vanguard",
      rankCode: "A-RANK",
      pushups: 80,
      squats: 80,
      situps: 80,
      runKm: 7.0,
      xpReward: 1800,
      manaReward: 400,
    },
    {
      level: 20,
      rankName: "Monarch Sovereign",
      rankCode: "S-RANK",
      pushups: 100,
      squats: 100,
      situps: 100,
      runKm: 10.0,
      xpReward: 4500,
      manaReward: 1000,
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(2); // Defaults to Level 10 Elite
  const current = presets[selectedIdx];

  return (
    <section id="quests" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <Target className="w-3.5 h-3.5" />
            <span>DAILY QUEST SYSTEM</span>
          </div>
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Progress isn&apos;t given. <br />
            <span className="text-[#86868B]">It&apos;s earned daily.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Inspired by the Solo Leveling daily quest framework. Quests dynamically adapt to your personal physiological baseline, pushing you to awaken your true physical ceiling.
          </p>
        </div>

        {/* Level Progression Controller */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-b from-[#12141A] via-[#08090C] to-[#040507] border border-white/[0.1] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] space-y-10">
          
          {/* Level Switcher Tabs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#86868B]">
              <span>SELECT HUNTER TIER</span>
              <span className="text-[#0A84FF] font-bold">LEVEL {current.level} · {current.rankCode}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {presets.map((p, idx) => (
                <button
                  key={p.level}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedIdx === idx
                      ? "bg-[#161822] border-[#0A84FF] text-[#F5F5F7] shadow-[0_0_20px_rgba(10,132,255,0.2)]"
                      : "bg-[#08090C] border-white/[0.06] text-[#86868B] hover:border-white/[0.15] hover:text-[#F5F5F7]"
                  }`}
                >
                  <span className="font-mono text-[10px] block opacity-60">LEVEL 0{p.level}</span>
                  <div className="font-sans font-bold text-lg mt-0.5">{p.rankName}</div>
                  <span className="font-mono text-[10px] text-[#0A84FF] font-semibold">{p.rankCode}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Quest Preset Board */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-white/[0.06]">
            
            {/* 4 Exercise Requirements */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Push-ups", amount: `${current.pushups} REPS`, sub: "AI depth verified" },
                { label: "Bodyweight Squats", amount: `${current.squats} REPS`, sub: "Parallel tracking" },
                { label: "Core Sit-ups", amount: `${current.situps} REPS`, sub: "Full contraction" },
                { label: "Distance Sprint", amount: `${current.runKm} KM`, sub: "GPS activity log" },
              ].map((q) => (
                <div
                  key={q.label}
                  className="p-6 rounded-2xl bg-[#08090C] border border-white/[0.06] space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#86868B] font-medium">{q.label}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A84FF]" />
                  </div>
                  <div className="font-mono font-bold text-2xl text-[#F5F5F7]">{q.amount}</div>
                  <span className="font-mono text-[10px] text-[#6E6E73] block">{q.sub}</span>
                </div>
              ))}
            </div>

            {/* Right Rewards Output */}
            <div className="lg:col-span-4 p-7 rounded-2xl bg-[#08090C] border border-white/[0.08] space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#86868B] block">
                COMPLETION YIELD
              </span>

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[11px] text-[#86868B] block">EXPERIENCE POINTS</span>
                  <div className="font-sans font-bold text-3xl text-[#F5F5F7] mt-0.5">
                    +{current.xpReward.toLocaleString()} XP
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-[#86868B] block">MANA CRYSTALS</span>
                  <div className="font-sans font-bold text-3xl text-[#0A84FF] mt-0.5 flex items-center gap-1.5">
                    <Sparkles className="w-5 h-5" />
                    <span>+{current.manaReward} MANA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
