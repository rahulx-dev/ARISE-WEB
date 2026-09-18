"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Sparkles, QrCode } from "lucide-react";

export default function HolographicHunterCard() {
  const [hunterName, setHunterName] = useState("SUNG JIN-WOO");
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 200, damping: 20 });
  const shimmerX = useTransform(x, [-100, 100], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 select-none w-full max-w-sm mx-auto">
      {/* 3D Holographic Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[1.58/1] rounded-3xl p-6 bg-[#0E1115] border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl overflow-hidden cursor-grab active:cursor-grabbing group"
      >
        {/* Subtle Silver & Cold Blue Sheen Layer */}
        <motion.div
          style={{
            background: `linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.08) 40%, rgba(154, 174, 255, 0.12) 50%, rgba(116, 123, 255, 0.08) 60%, transparent 80%)`,
            left: shimmerX,
          }}
          className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Card Content with 3D Depth */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[#F5F5F2]">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#A6A9AE] uppercase">
                  ASSOCIATION LICENSE
                </div>
                <div className="text-xs font-bold font-mono text-[#F5F5F2] tracking-wider">
                  ARISE // SYSTEM
                </div>
              </div>
            </div>

            <div className="px-2.5 py-1 rounded-xl bg-[#9AAEFF] text-[#050607] font-extrabold text-xs font-mono tracking-widest shadow-md">
              S-RANK
            </div>
          </div>

          {/* Middle Body */}
          <div className="my-auto space-y-1">
            <div className="text-[9px] font-mono text-[#6F747B] uppercase tracking-widest">
              HUNTER DESIGNATION
            </div>
            <input
              type="text"
              value={hunterName}
              onChange={(e) => setHunterName(e.target.value.toUpperCase())}
              maxLength={20}
              className="bg-transparent text-lg sm:text-xl font-mono font-black text-[#F5F5F2] focus:outline-none border-b border-white/10 focus:border-[#9AAEFF] transition-colors w-full tracking-wide"
              title="Click to customize name"
            />
            <div className="text-[10px] font-mono text-[#9AAEFF] flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>SHADOW MONARCH AWAKENED</span>
            </div>
          </div>

          {/* Footer Telemetry */}
          <div className="flex items-end justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-[#6F747B]">
            <div>
              <div>ID: #AR-7794-GLOBAL</div>
              <div>SECURITY: OFFLINE VERIFIED</div>
            </div>
            <div className="flex items-center gap-1 text-[#A6A9AE]">
              <QrCode className="w-4 h-4 text-[#F5F5F2]" />
              <span>SCAN</span>
            </div>
          </div>
        </div>
      </motion.div>

      <span className="text-[11px] font-mono text-[#6F747B] text-center">
        Hover / tilt with mouse • Click name to customize your Hunter ID
      </span>
    </div>
  );
}
