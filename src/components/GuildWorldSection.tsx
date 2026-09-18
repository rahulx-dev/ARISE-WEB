"use client";

import React from "react";
import { Trophy, Flame, Users } from "lucide-react";
import Image from "next/image";
import Interactive3DTilt from "./Interactive3DTilt";

export default function GuildWorldSection() {
  const demoRankings = [
    { rank: "01", name: "KAIRO", title: "S-RANK · LV.87", streak: "21 DAY STREAK", raidContribution: "142,500 DMG" },
    { rank: "02", name: "LEVI", title: "S-RANK · LV.82", streak: "18 DAY STREAK", raidContribution: "128,900 DMG" },
    { rank: "03", name: "RAVEN", title: "A-RANK · LV.76", streak: "16 DAY STREAK", raidContribution: "115,200 DMG" },
    { rank: "04", name: "JIN", title: "A-RANK · LV.71", streak: "14 DAY STREAK", raidContribution: "98,400 DMG" },
    { rank: "05", name: "AKIRA", title: "A-RANK · LV.68", streak: "12 DAY STREAK", raidContribution: "86,700 DMG" },
  ];

  return (
    <section id="guilds" className="py-36 sm:py-48 relative overflow-hidden select-none bg-[#050607]">
      {/* Subtle Crimson Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#FF6B4A]/[0.02] rounded-full blur-[240px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-16">
        
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-[0.25em] text-[#6F747B] uppercase">
            GUILD &amp; WORLD BOSS RAIDS
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F5F2] leading-[0.98]">
            Don&apos;t Level Up <br />
            <span className="italic text-[#A6A9AE]">
              Alone.
            </span>
          </h2>
        </div>

        {/* Cinematic World Boss Showcase Card */}
        <Interactive3DTilt maxAngle={6} className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-[#0E1115] overflow-hidden shadow-2xl shadow-black/80 group">
            {/* Custom AI Igris Boss Artwork Backdrop */}
            <div className="relative h-80 sm:h-96 w-full">
              <Image
                src="/visuals/igris_boss.jpg"
                alt="Blood-Red Commander Igris World Boss"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1115] via-[#0E1115]/60 to-transparent" />
            </div>

            {/* Boss Stats & Raid Telemetry */}
            <div className="p-6 sm:p-8 space-y-5 relative z-10 -mt-20 bg-gradient-to-t from-[#0E1115] via-[#0E1115]/95 to-transparent">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs font-mono text-[#FF6B4A] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span>COMMANDER IGRIS · S-RANK RAID BOSS</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[#F5F5F2] mt-1">
                    425,000 / 1,250,000 HP (34%)
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#A6A9AE] bg-[#050607]/80 px-3.5 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
                  <Users className="w-4 h-4 text-[#FF6B4A]" />
                  <span>14,820 Active Hunters in Raid</span>
                </div>
              </div>

              {/* Health Bar with Pulse */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div className="h-full w-[34%] bg-[#FF6B4A] rounded-full" />
              </div>
            </div>
          </div>
        </Interactive3DTilt>

        {/* Global Hunter Standings (Clean Editorial List) */}
        <div className="max-w-xl mx-auto space-y-3 pt-4">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#6F747B] uppercase pb-2 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#9AAEFF]" />
              <span>GLOBAL GUILD RANKINGS</span>
            </span>
            <span>TOTAL DAMAGE</span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {demoRankings.map((h) => (
              <div
                key={h.rank}
                className="py-3.5 flex items-center justify-between text-xs font-mono hover:bg-white/[0.03] px-3 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#6F747B] font-bold">{h.rank}</span>
                  <div className="text-left">
                    <span className="text-[#F5F5F2] font-semibold">{h.name}</span>
                    <span className="text-[10px] text-[#A6A9AE] ml-2">{h.title}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#9AAEFF] font-semibold block">{h.raidContribution}</span>
                  <span className="text-[10px] text-[#6F747B]">{h.streak}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}