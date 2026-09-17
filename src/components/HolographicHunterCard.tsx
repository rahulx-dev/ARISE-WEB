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
        className="relative w-full aspect-[1.58/1] rounded-3xl p-6 bg-gradient-to-br from-slate-100/95 via-white to-slate-200/90 dark:from-slate-900/90 dark:via-[#070B16]/95 dark:to-black/90 border border-slate-300/80 dark:border-white/20 shadow-2xl shadow-slate-300/70 dark:shadow-blue-950/50 backdrop-blur-2xl overflow-hidden cursor-grab active:cursor-grabbing group"
      >
        {/* Prismatic Rainbow Sheen Layer */}
        <motion.div
          style={{
            background: `linear-gradient(115deg, transparent 20%, rgba(10, 132, 255, 0.25) 40%, rgba(245, 158, 11, 0.25) 50%, rgba(16, 185, 129, 0.25) 60%, transparent 80%)`,
            left: shimmerX,
          }}
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Card Content with 3D Depth */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/30 dark:border-blue-500/40 flex items-center justify-center text-[#0A84FF] dark:text-arise-cyan">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                  ASSOCIATION LICENSE
                </div>
                <div className="text-xs font-bold font-mono text-slate-900 dark:text-white tracking-wider">
                  ARISE // SYSTEM
                </div>
              </div>
            </div>

            <div className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs font-mono tracking-widest shadow-md shadow-amber-950/30">
              S-RANK
            </div>
          </div>

          {/* Middle Body */}
          <div className="my-auto space-y-1">
            <div className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              HUNTER DESIGNATION
            </div>
            <input
              type="text"
              value={hunterName}
              onChange={(e) => setHunterName(e.target.value.toUpperCase())}
              maxLength={20}
              className="bg-transparent text-lg sm:text-xl font-mono font-black text-slate-900 dark:text-white focus:outline-none border-b border-slate-300 dark:border-white/10 focus:border-blue-500 dark:focus:border-arise-cyan transition-colors w-full tracking-wide"
              title="Click to customize name"
            />
            <div className="text-[10px] font-mono text-emerald-600 dark:text-arise-emerald flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>SHADOW MONARCH AWAKENED</span>
            </div>
          </div>

          {/* Footer Telemetry */}
          <div className="flex items-end justify-between pt-2 border-t border-slate-200 dark:border-white/10 font-mono text-[9px] text-slate-500 dark:text-slate-400">
            <div>
              <div>ID: #AR-7794-GLOBAL</div>
              <div>SECURITY: OFFLINE VERIFIED</div>
            </div>
            <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
              <QrCode className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>SCAN</span>
            </div>
          </div>
        </div>
      </motion.div>

      <span className="text-[11px] font-mono text-slate-500 text-center">
        Hover / tilt with mouse • Click name to customize your Hunter ID
      </span>
    </div>
  );
}
