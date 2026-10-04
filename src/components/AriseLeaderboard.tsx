"use client";

import React, { useState } from "react";

interface LeaderboardEntry {
  rank: string;
  name: string;
  level: string;
  rankTitle: string;
  streak: string;
  xp: string;
  mana: string;
  badge?: string;
}

export default function AriseLeaderboard() {
  const [hunters] = useState<LeaderboardEntry[]>([
    {
      rank: "#01",
      name: "ShadowMonarch_99",
      level: "LV 28",
      rankTitle: "S-RANK",
      streak: "91 DAYS",
      xp: "48,290 XP",
      mana: "12,400",
      badge: "WORLD FIRST",
    },
    {
      rank: "#02",
      name: "Valkyrie_Zero",
      level: "LV 26",
      rankTitle: "S-RANK",
      streak: "74 DAYS",
      xp: "41,100 XP",
      mana: "9,850",
    },
    {
      rank: "#03",
      name: "IronKaran",
      level: "LV 24",
      rankTitle: "A-RANK",
      streak: "68 DAYS",
      xp: "36,920 XP",
      mana: "8,200",
    },
    {
      rank: "#04",
      name: "NovaHunter",
      level: "LV 22",
      rankTitle: "A-RANK",
      streak: "52 DAYS",
      xp: "31,450 XP",
      mana: "7,100",
    },
    {
      rank: "#05",
      name: "AetherKnight",
      level: "LV 20",
      rankTitle: "A-RANK",
      streak: "45 DAYS",
      xp: "28,300 XP",
      mana: "6,400",
    },
  ]);

  return (
    <section id="leaderboard" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>GLOBAL RANKINGS</span>
            </div>
            <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
              Hunter Leaderboard.
            </h1>
          </div>
          <p className="text-xs font-mono text-[#86868B] max-w-xs">
            Global rankings updated with verified on-device proof hashes.
          </p>
        </div>

        {/* Minimalist Table */}
        <div className="rounded-3xl bg-[#08090C] border border-white/[0.08] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              
              {/* Table Header */}
              <thead className="bg-[#0D0F14] border-b border-white/[0.08] text-[#86868B] uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-semibold">RANK</th>
                  <th className="py-4 px-6 font-semibold">HUNTER</th>
                  <th className="py-4 px-6 font-semibold">LEVEL</th>
                  <th className="py-4 px-6 font-semibold">STREAK</th>
                  <th className="py-4 px-6 font-semibold">EXPERIENCE</th>
                  <th className="py-4 px-6 font-semibold text-right">MANA</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.04]">
                {hunters.map((h, idx) => (
                  <tr
                    key={h.rank}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-[#F5F5F7]">
                      <span className={idx === 0 ? "text-[#0A84FF]" : idx === 1 ? "text-[#F5F5F7]" : "text-[#86868B]"}>
                        {h.rank}
                      </span>
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 font-sans font-bold text-sm text-[#F5F5F7]">
                        <span>{h.name}</span>
                        {h.badge && (
                          <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/30">
                            {h.badge}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <span className="text-[#F5F5F7] font-semibold">{h.level}</span>
                      <span className="text-[#6E6E73] ml-2">({h.rankTitle})</span>
                    </td>

                    <td className="py-5 px-6 text-[#86868B]">
                      <span className="text-[#EF4444] font-semibold">{h.streak}</span>
                    </td>

                    <td className="py-5 px-6 text-[#F5F5F7] font-medium">
                      {h.xp}
                    </td>

                    <td className="py-5 px-6 text-right font-bold text-[#0A84FF]">
                      {h.mana}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
