"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DungeonData {
  id: string;
  name: string;
  rank: string;
  rankColor: string;
  difficulty: string;
  reqXp: string;
  rewardMana: string;
  timeLimit: string;
  status: string;
  description: string;
  bgGlow: string;
}

export default function AriseDungeons() {
  const [activeDungeon, setActiveDungeon] = useState<string | null>(null);

  const dungeons: DungeonData[] = [
    {
      id: "goblin-cave",
      name: "Goblin Outpost",
      rank: "E-RANK",
      rankColor: "text-[#86868B] border-white/10",
      difficulty: "Introductory Trial",
      reqXp: "500 XP",
      rewardMana: "+150 MANA",
      timeLimit: "20 Mins",
      status: "OPEN",
      description: "Low-intensity endurance gauntlet. 3 sets of push-ups and a 1.5km sustained jog.",
      bgGlow: "from-white/[0.03] to-transparent",
    },
    {
      id: "ice-monarch",
      name: "Frost Fortress",
      rank: "A-RANK",
      rankColor: "text-[#0A84FF] border-[#0A84FF]/30 bg-[#0A84FF]/10",
      difficulty: "High Intensity Protocol",
      reqXp: "4,500 XP",
      rewardMana: "+500 MANA",
      timeLimit: "45 Mins",
      status: "RAID READY",
      description: "Heavy multi-compound sets. 80 squats, 60 push-ups, and a 5km outdoor threshold pace.",
      bgGlow: "from-[#0A84FF]/[0.08] to-transparent",
    },
    {
      id: "dragon-nest",
      name: "Dragon Nest",
      rank: "S-RANK",
      rankColor: "text-[#EF4444] border-[#EF4444]/30 bg-[#EF4444]/10",
      difficulty: "Maximum Caloric Burn",
      reqXp: "12,000 XP",
      rewardMana: "+1,200 MANA",
      timeLimit: "90 Mins",
      status: "WORLD BOSS",
      description: "The ultimate discipline crucible. 100 reps of all core movements + 10km tempo run.",
      bgGlow: "from-[#EF4444]/[0.08] to-transparent",
    },
  ];

  return (
    <section id="dungeons" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Every day is a dungeon. <br />
            <span className="text-[#86868B]">Clear it or face penalty.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Timed physical gauntlets that test your peak aerobic and anaerobic limits. Clear instanced dungeons to secure massive Mana bounties.
          </p>
        </div>

        {/* 3 Dungeon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {dungeons.map((d, idx) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-9 rounded-[32px] bg-gradient-to-b from-[#12141A] via-[#08090C] to-[#040507] border border-white/[0.1] hover:border-white/[0.22] flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300"
            >
              {/* Subtle Atmospheric Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${d.bgGlow} pointer-events-none`} />

              <div className="space-y-6 relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full border font-mono text-xs font-bold ${d.rankColor}`}>
                    {d.rank}
                  </span>
                  <span className="font-mono text-xs text-[#6E6E73] uppercase">{d.status}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                    {d.name}
                  </h3>
                  <span className="text-xs font-mono text-[#86868B] mt-1 block">
                    {d.difficulty} · {d.timeLimit}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
                  {d.description}
                </p>

                {/* Specs Pill */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/[0.06] font-mono text-xs">
                  <div>
                    <span className="text-[#6E6E73] block text-[10px]">REQUIRED XP</span>
                    <span className="text-[#F5F5F7] font-semibold">{d.reqXp}</span>
                  </div>
                  <div>
                    <span className="text-[#6E6E73] block text-[10px]">REWARD BOUNTY</span>
                    <span className="text-[#0A84FF] font-bold">{d.rewardMana}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 relative z-10">
                <button
                  onClick={() => setActiveDungeon(d.id)}
                  className="w-full py-3.5 rounded-full bg-[#111318] hover:bg-[#F5F5F7] text-[#86868B] hover:text-[#000000] font-sans font-semibold text-xs tracking-tight uppercase flex items-center justify-center gap-2 border border-white/[0.08] hover:border-transparent transition-all duration-200 cursor-pointer"
                >
                  <span>{activeDungeon === d.id ? "Dungeon Cleared ✓" : "Enter Dungeon Raid"}</span>
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
