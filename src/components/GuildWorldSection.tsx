"use client";

import React from "react";
import { Flame, Shield, Users, Trophy } from "lucide-react";
import Image from "next/image";
import Interactive3DTilt from "./Interactive3DTilt";

export default function GuildWorldSection() {
  const raidFeatures = [
    {
      icon: Users,
      title: "COOPERATIVE GUILD RAIDS",
      desc: "Form squads with friends or join global guilds to tackle multi-stage dungeon raids.",
    },
    {
      icon: Flame,
      title: "REP-BASED RAID DAMAGE",
      desc: "Every verified workout rep deals physical damage to the seasonal world boss.",
    },
    {
      icon: Trophy,
      title: "SEASONAL DIVISION RANKS",
      desc: "Compete across guild divisions from E-Rank recruit leagues to S-Rank Monarch divisions.",
    },
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
                    <span>COMMANDER IGRIS · SEASONAL S-RANK WORLD BOSS</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#F5F5F2] mt-1">
                    Multiplayer Guild Damage Protocol
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A6A9AE] bg-[#050607]/80 px-3.5 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
                  <Shield className="w-4 h-4 text-[#9AAEFF]" />
                  <span>Cooperative Squad Battles</span>
                </div>
              </div>

              {/* Boss Health Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div className="h-full w-3/4 bg-[#FF6B4A] rounded-full" />
              </div>
            </div>
          </div>
        </Interactive3DTilt>

        {/* Authentic Guild Mechanics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto pt-4 text-left">
          {raidFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-5 rounded-2xl border border-white/10 bg-[#0E1115] hover:bg-[#13171C] transition-colors space-y-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9AAEFF]">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-mono text-xs font-bold text-[#F5F5F2] tracking-wider uppercase">
                  {feat.title}
                </h4>
                <p className="font-sans text-xs text-[#A6A9AE] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}