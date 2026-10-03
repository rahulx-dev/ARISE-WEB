"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Share2, QrCode, Check } from "lucide-react";

export default function AriseHunterLicense() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            <span>09 / SHAREABLE LICENSE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            The Hunter License.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            A digital license verifying your completed quests and rank. Story-ready for sharing across social channels.
          </p>
        </div>

        {/* License Card Preview & Interactive Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Rendered License Card */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#08090C] border border-white/[0.12] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] relative overflow-hidden space-y-8"
            >
              {/* Top Watermark */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-sans font-bold text-lg text-[#F5F5F7]">
                  ARISE HUNTER LICENSE
                </span>
                <span className="font-mono text-[10px] text-[#0A84FF] font-bold uppercase px-2 py-0.5 rounded bg-[#0A84FF]/10">
                  OFFICIAL
                </span>
              </div>

              {/* Avatar + Hunter Meta */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-[#111318] border border-white/[0.1] flex items-center justify-center text-[#F5F5F7] font-bold text-2xl">
                  {hunterName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#F5F5F7]">{hunterName}</h3>
                  <div className="font-mono text-xs text-[#0A84FF] mt-0.5">LEVEL 24 // A-RANK</div>
                  <div className="font-mono text-[10px] text-[#86868B]">ID: AR-99420-X</div>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#000000] border border-white/[0.06] text-center font-mono text-xs">
                <div>
                  <span className="text-[#6E6E73] text-[9px] block">STREAK</span>
                  <span className="font-bold text-[#F5F5F7]">68 DAYS</span>
                </div>
                <div>
                  <span className="text-[#6E6E73] text-[9px] block">TOTAL XP</span>
                  <span className="font-bold text-[#F5F5F7]">36.9K</span>
                </div>
                <div>
                  <span className="text-[#6E6E73] text-[9px] block">STATUS</span>
                  <span className="font-bold text-[#0A84FF]">AWAKENED</span>
                </div>
              </div>

              {/* Bottom Stamp & QR */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs font-mono text-[#86868B]">
                <div className="space-y-0.5">
                  <div className="text-[#F5F5F7] font-bold">SOVEREIGN PROOF</div>
                  <div className="text-[10px] text-[#6E6E73]">VERIFIED ON-DEVICE</div>
                </div>
                <QrCode className="w-9 h-9 text-[#F5F5F7]" />
              </div>
            </motion.div>
          </div>

          {/* Right Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Hunter Call-Sign
              </label>
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={20}
                className="w-full px-4 py-3 rounded-2xl bg-[#08090C] border border-white/[0.1] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#0A84FF] transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleShare}
                className="flex-1 py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-semibold text-xs tracking-tight uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Save License Card</span>
              </button>

              <button
                onClick={handleShare}
                className="py-4 px-6 rounded-full bg-[#111318] hover:bg-[#181B22] border border-white/[0.08] text-[#86868B] hover:text-[#F5F5F7] font-mono text-xs uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#0A84FF]" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? "Link Copied" : "Share"}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
