"use client";

import React, { useState } from "react";


export default function AriseLeaderboard() {
  const [genesisSlots] = useState([
    { rank: "#01", title: "GENESIS WORLD FIRST", status: "UNCLAIMED", note: "Reserved for the first Awakened Hunter" },
    { rank: "#02", title: "GENESIS VANGUARD", status: "UNCLAIMED", note: "Open for verification" },
    { rank: "#03", title: "GENESIS VANGUARD", status: "UNCLAIMED", note: "Open for verification" },
    { rank: "#04", title: "GENESIS INITIATE", status: "UNCLAIMED", note: "Open for verification" },
    { rank: "#05", title: "GENESIS INITIATE", status: "UNCLAIMED", note: "Open for verification" },
  ]);

  return (
    <section id="leaderboard" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header (No Eyebrow Label) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
              Hunter Leaderboard.
            </h1>
            <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
              Season 01 Genesis rankings are currently unclaimed. Clear your first verified physical quests in the app to lock in your official ledger position.
            </p>
          </div>
          <div className="font-mono text-xs text-[#0A84FF] px-4 py-2 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/25 shrink-0 self-start md:self-end">
            GENESIS SEASON 01 // SLOTS OPEN
          </div>
        </div>

        {/* Minimalist Table with Genuine Genesis Slots */}
        <div className="rounded-3xl bg-[#08090C] border border-white/[0.08] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              
              {/* Table Header */}
              <thead className="bg-[#0D0F14] border-b border-white/[0.08] text-[#86868B] uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-semibold">RANK</th>
                  <th className="py-4 px-6 font-semibold">GENESIS TITLE</th>
                  <th className="py-4 px-6 font-semibold">LEDGER STATUS</th>
                  <th className="py-4 px-6 font-semibold text-right">ACTION</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.04]">
                {genesisSlots.map((slot, idx) => (
                  <tr
                    key={slot.rank}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-[#F5F5F7]">
                      <span className={idx === 0 ? "text-[#0A84FF]" : "text-[#86868B]"}>
                        {slot.rank}
                      </span>
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 font-sans font-bold text-sm text-[#F5F5F7]">
                        <span>{slot.title}</span>
                        {idx === 0 && (
                          <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/30">
                            UNCLAIMED
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#6E6E73] font-mono block pt-0.5">{slot.note}</span>
                    </td>

                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#86868B] text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        OPEN FOR CLAIM
                      </span>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <a
                        href="#hunter-card"
                        className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white text-[#F5F5F7] hover:text-[#000000] text-[11px] font-semibold transition-all"
                      >
                        MINT ID
                      </a>
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
