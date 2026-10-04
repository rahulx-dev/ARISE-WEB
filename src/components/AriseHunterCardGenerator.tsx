"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  // Default name removed as requested; starts completely clean
  const [hunterName, setHunterName] = useState("");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("A-RANK");
  const [copiedId, setCopiedId] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // 3D Card Gyroscope State
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const displayName = hunterName.trim();
  const hunterId = `#KA${((displayName || "ARISE").length * 137).toString().padStart(5, "0").slice(0, 5)}`;

  // Dynamic Monogram Initials from user's typed name (fallback to rank initials if empty)
  const initials = displayName
    ? (displayName.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "AR")
    : `${hunterRank.charAt(0)}R`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = (y / rect.height - 0.5) * -10;
    const rotY = (x / rect.width - 0.5) * 10;
    setCardRotate({ x: rotX, y: rotY });
    setMouseCoord({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    setMouseCoord({ x: 50, y: 50 });
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(hunterId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // 6 Ranks: Each rank has designated photorealistic card template with custom artwork & matching 3D chrome banner
  const ranksConfig = {
    "S-RANK": {
      letter: "S",
      title: "S-RANK",
      status: "SOVEREIGN",
      color: "#EF4444",
      cardBase: "/visuals/card_base_s.jpg",
      role: "SHADOW MONARCH",
      level: "85",
      streak: "124",
      mana: "98,400",
      crystals: "45,200",
      mission: "Sovereign of the Dead.",
    },
    "A-RANK": {
      letter: "A",
      title: "A-RANK",
      status: "ELITE",
      color: "#00E5FF",
      cardBase: "/visuals/card_base_a.jpg",
      role: "VOID BLADE",
      level: "28",
      streak: "48",
      mana: "14,850",
      crystals: "9,420",
      mission: "Stronger Than Yesterday.",
    },
    "B-RANK": {
      letter: "B",
      title: "B-RANK",
      status: "ADVANCED",
      color: "#38BDF8",
      cardBase: "/visuals/card_base_b.jpg",
      role: "LIGHTNING VALKYRIE",
      level: "22",
      streak: "32",
      mana: "9,200",
      crystals: "5,800",
      mission: "Swift as Lightning.",
    },
    "C-RANK": {
      letter: "C",
      title: "C-RANK",
      status: "STABLE",
      color: "#F43F5E",
      cardBase: "/visuals/card_base_c.jpg",
      role: "CRIMSON SOVEREIGN",
      level: "16",
      streak: "21",
      mana: "5,400",
      crystals: "3,100",
      mission: "Carve the Path in Blood.",
    },
    "D-RANK": {
      letter: "D",
      title: "D-RANK",
      status: "NOVICE",
      color: "#F59E0B",
      cardBase: "/visuals/card_base_d.jpg",
      role: "BLOODRED KNIGHT",
      level: "10",
      streak: "14",
      mana: "2,800",
      crystals: "1,450",
      mission: "Unbreakable Resolve.",
    },
    "E-RANK": {
      letter: "E",
      title: "E-RANK",
      status: "INITIATE",
      color: "#A1A1AA",
      cardBase: "/visuals/card_base_e.jpg",
      role: "SHADOW INITIATE",
      level: "04",
      streak: "07",
      mana: "850",
      crystals: "420",
      mission: "The Awakening Begins.",
    },
  };

  const currentRank = ranksConfig[hunterRank];

  // High-Resolution 100% Same-to-Same PNG Download for ALL Ranks
  const handleDownloadCard = async () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 564;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Draw base high-res authentic rank card template
      const baseImg = new Image();
      baseImg.crossOrigin = "anonymous";
      await new Promise((resolve) => {
        baseImg.onload = () => resolve(true);
        baseImg.onerror = () => resolve(false);
        baseImg.src = currentRank.cardBase;
      });
      ctx.drawImage(baseImg, 0, 0, 1024, 564);

      // 2. Draw dynamic Hunter ID in top HUD slot
      ctx.fillStyle = "#121722";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(460, 117, 84, 18, 4);
        ctx.fill();
      }
      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 10px monospace";
      ctx.fillText(hunterId, 466, 130);

      // 3. Draw live User Call-Sign Name right in the clean space (NO blue tick!)
      const activeName = displayName || "HUNTER_AWAKENED";
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 27px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(activeName, 398, 172);

      // 4. Draw dynamic Avatar Monogram Initials
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "900 46px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(initials, 76, 428);

      // Trigger Instant High-Resolution Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_${hunterRank}_Card_${(displayName || "Hunter").replace(/\s+/g, "_")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.65 },
        colors: [currentRank.color, "#00E5FF", "#FFFFFF"],
      });
    }

    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section id="hunter-card" className="bg-[#000000] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 select-none border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Dynamic Background Ambient Aura - Smoothly Blended in current Rank's signature color */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[500px] blur-[170px] pointer-events-none rounded-full transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${currentRank.color}22 0%, ${currentRank.color}06 50%, transparent 75%)`,
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Mint Your Hunter Card.
          </h1>
          <p className="text-sm sm:text-base text-[#86868B] font-normal leading-relaxed">
            Authentic 3D titanium identity card. Switch ranks with 1-click — each rank features custom anime manhwa artwork, 3D chrome rank banner and HD PNG export.
          </p>
        </div>

        {/* 1. The Majestic 16:9 Card with Enhanced Color Blending & Photorealistic 3D Chrome Banner */}
        <div className="w-full flex justify-center perspective-[1500px]">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
              transition: "transform 0.12s ease-out",
            }}
            className="w-full max-w-4xl aspect-[1024/564] rounded-[28px] relative overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.98),0_0_60px_rgba(0,229,255,0.12)] border border-white/[0.18] cursor-grab active:cursor-grabbing group select-none transition-shadow duration-500"
          >
            {/* Base Master Card Artwork with Seamless Color Blending and Clean Name Space */}
            <img
              src={currentRank.cardBase}
              alt={`ARISE ${hunterRank} Hunter Card`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-all duration-500"
            />

            {/* Dynamic Monogram Initials on Avatar (bottom-left of avatar) */}
            <div
              style={{
                left: "7.4%",
                top: "69.5%",
              }}
              className="absolute z-20 pointer-events-none font-sans font-black text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            >
              {initials}
            </div>

            {/* Top HUD: Dynamic Hunter ID Badge with 1-Click Copy */}
            <div
              style={{
                left: "45.0%",
                top: "21.0%",
              }}
              className="absolute z-20 flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px]"
            >
              <button
                onClick={handleCopyId}
                className="px-1.5 py-0.5 rounded bg-white/[0.08] hover:bg-white/15 text-[#E4E8F0] font-bold border border-white/10 flex items-center gap-1 cursor-pointer transition-colors"
                title="Copy Hunter ID"
              >
                <span>{hunterId}</span>
                {copiedId ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 text-[#828F9E]" />}
              </button>
            </div>

            {/* Middle HUD: Live Hunter Call-Sign Name right in the Clean Obsidian Space (NO Blue Tick!) */}
            <div
              style={{
                left: "38.8%",
                top: "26.2%",
                maxWidth: "34%",
              }}
              className="absolute z-20 flex items-center pointer-events-none"
            >
              {displayName ? (
                <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight truncate drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {displayName}
                </span>
              ) : (
                <span className="font-sans font-extrabold text-base sm:text-xl text-white/30 italic tracking-wider">
                  YOUR CALL-SIGN
                </span>
              )}
            </div>

            {/* 3D Dynamic Specular Light Glare reflecting cursor position */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25 transition-opacity duration-200 group-hover:opacity-50 z-20"
              style={{
                background: `radial-gradient(circle 500px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(255, 255, 255, 0.16), transparent 70%)`,
              }}
            />
          </motion.div>
        </div>

        {/* 2. Clean Ergonomic Control Console */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080A0F] border border-white/[0.12] shadow-2xl space-y-6">
          
          {/* Row 1: Rank Selector (1 Click Transforms Card to that Rank's Custom Artwork & 3D Banner!) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Select Hunter Rank Tier
              </label>
              <span className="font-mono text-[10px] transition-colors duration-500 font-bold" style={{ color: currentRank.color }}>
                {currentRank.role}
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {(["E-RANK", "D-RANK", "C-RANK", "B-RANK", "A-RANK", "S-RANK"] as const).map((r) => {
                const isActive = hunterRank === r;
                const rConf = ranksConfig[r];
                return (
                  <button
                    key={r}
                    onClick={() => setHunterRank(r)}
                    className={`py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border flex flex-col items-center justify-center gap-1 ${
                      isActive
                        ? "bg-[#10243C] border-current text-white shadow-lg scale-[1.03]"
                        : "bg-[#05070A] border-white/[0.06] text-[#86868B] hover:border-white/20"
                    }`}
                    style={isActive ? { borderColor: rConf.color, color: rConf.color, boxShadow: `0 0 16px ${rConf.color}40` } : {}}
                  >
                    <span className="font-sans font-black text-sm">{r.split("-")[0]}</span>
                    <span className="text-[8px] uppercase tracking-wider opacity-80">{rConf.status}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Call-Sign Input (Clean, without blue tick, live updates on card) */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
              Hunter Call-Sign (Live Updates On Card)
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={20}
                placeholder="Type your call-sign (e.g. Karan_Awakened)..."
                className="flex-1 px-4 py-3 rounded-xl bg-[#05070A] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#00E5FF] transition-colors placeholder:text-white/25"
              />
              <button
                onClick={handleCopyId}
                className="px-4 py-3 rounded-xl bg-[#05070A] border border-white/[0.12] text-[#828F9E] hover:text-white hover:border-[#00E5FF] flex items-center gap-1.5 font-mono text-xs transition-colors cursor-pointer"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId ? "Copied" : hunterId}</span>
              </button>
            </div>
          </div>

          {/* Row 3: Download Button */}
          <div className="pt-2">
            <button
              onClick={handleDownloadCard}
              disabled={isDownloading}
              className="w-full py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#000000] font-sans font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_30px_rgba(0,229,255,0.35)] transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#000000]" />
              <span>{isDownloading ? `Generating ${hunterRank} HD PNG...` : `Download ${hunterRank} Card (PNG)`}</span>
            </button>
            <p className="text-[11px] font-mono text-[#828F9E] text-center mt-2">
              100% authentic widescreen export with 3D chrome rank banner & custom call-sign.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
