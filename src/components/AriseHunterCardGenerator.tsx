"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [archetype, setArchetype] = useState<"male" | "female" | "commander">("male");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("A-RANK");
  const [hunterClass, setHunterClass] = useState("VOID BLADE");
  const [copiedId, setCopiedId] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // 3D Card Gyroscope State
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const hunterId = `#KA${(hunterName.length * 137).toString().padStart(5, "0").slice(0, 5) || "01918"}`;
  const initials = (hunterName || "KA").replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "KA";

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

  // Rank Configurations with Exactly 1 Designated Image per Rank
  const rankData = {
    male: {
      "S-RANK": {
        letter: "S",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "SOVEREIGN",
        avatar: "/visuals/rank_s.jpg",
        level: "85",
        streak: "124",
        mana: "98,400",
        crystals: "45,200",
        xpText: "185,400 / 200,000 XP",
        xpPercent: "92%",
        xpRatio: 0.92,
      },
      "A-RANK": {
        letter: "A",
        color: "#00E5FF",
        textColor: "text-[#00E5FF]",
        status: "ELITE",
        avatar: "/visuals/rank_a.jpg",
        level: "28",
        streak: "48",
        mana: "14,850",
        crystals: "9,420",
        xpText: "24,850 / 50,000 XP",
        xpPercent: "56%",
        xpRatio: 0.56,
      },
      "B-RANK": {
        letter: "B",
        color: "#38BDF8",
        textColor: "text-[#38BDF8]",
        status: "ADVANCED",
        avatar: "/visuals/rank_b.jpg",
        level: "22",
        streak: "32",
        mana: "9,200",
        crystals: "5,800",
        xpText: "18,200 / 35,000 XP",
        xpPercent: "52%",
        xpRatio: 0.52,
      },
      "C-RANK": {
        letter: "C",
        color: "#10B981",
        textColor: "text-[#10B981]",
        status: "STABLE",
        avatar: "/visuals/rank_c.jpg",
        level: "16",
        streak: "21",
        mana: "5,400",
        crystals: "3,100",
        xpText: "10,500 / 25,000 XP",
        xpPercent: "42%",
        xpRatio: 0.42,
      },
      "D-RANK": {
        letter: "D",
        color: "#F59E0B",
        textColor: "text-[#F59E0B]",
        status: "NOVICE",
        avatar: "/visuals/rank_d.jpg",
        level: "10",
        streak: "14",
        mana: "2,800",
        crystals: "1,450",
        xpText: "5,600 / 15,000 XP",
        xpPercent: "37%",
        xpRatio: 0.37,
      },
      "E-RANK": {
        letter: "E",
        color: "#86868B",
        textColor: "text-[#86868B]",
        status: "INITIATE",
        avatar: "/visuals/rank_e.jpg",
        level: "04",
        streak: "07",
        mana: "850",
        crystals: "420",
        xpText: "1,200 / 5,000 XP",
        xpPercent: "24%",
        xpRatio: 0.24,
      },
    },
    female: {
      "S-RANK": {
        letter: "S",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "SOVEREIGN",
        avatar: "/visuals/female_hunter_crimson.jpg",
        level: "85",
        streak: "124",
        mana: "98,400",
        crystals: "45,200",
        xpText: "185,400 / 200,000 XP",
        xpPercent: "92%",
        xpRatio: 0.92,
      },
      "A-RANK": {
        letter: "A",
        color: "#00E5FF",
        textColor: "text-[#00E5FF]",
        status: "ELITE",
        avatar: "/visuals/female_hunter_shadow.jpg",
        level: "28",
        streak: "48",
        mana: "14,850",
        crystals: "9,420",
        xpText: "24,850 / 50,000 XP",
        xpPercent: "56%",
        xpRatio: 0.56,
      },
      "B-RANK": {
        letter: "B",
        color: "#38BDF8",
        textColor: "text-[#38BDF8]",
        status: "ADVANCED",
        avatar: "/visuals/female_hunter_1.jpg",
        level: "22",
        streak: "32",
        mana: "9,200",
        crystals: "5,800",
        xpText: "18,200 / 35,000 XP",
        xpPercent: "52%",
        xpRatio: 0.52,
      },
      "C-RANK": {
        letter: "C",
        color: "#10B981",
        textColor: "text-[#10B981]",
        status: "STABLE",
        avatar: "/visuals/female_hunter_2.jpg",
        level: "16",
        streak: "21",
        mana: "5,400",
        crystals: "3,100",
        xpText: "10,500 / 25,000 XP",
        xpPercent: "42%",
        xpRatio: 0.42,
      },
      "D-RANK": {
        letter: "D",
        color: "#F59E0B",
        textColor: "text-[#F59E0B]",
        status: "NOVICE",
        avatar: "/visuals/female_hunter_crimson.jpg",
        level: "10",
        streak: "14",
        mana: "2,800",
        crystals: "1,450",
        xpText: "5,600 / 15,000 XP",
        xpPercent: "37%",
        xpRatio: 0.37,
      },
      "E-RANK": {
        letter: "E",
        color: "#86868B",
        textColor: "text-[#86868B]",
        status: "INITIATE",
        avatar: "/visuals/female_hunter_shadow.jpg",
        level: "04",
        streak: "07",
        mana: "850",
        crystals: "420",
        xpText: "1,200 / 5,000 XP",
        xpPercent: "24%",
        xpRatio: 0.24,
      },
    },
    commander: {
      "S-RANK": {
        letter: "S",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "99",
        streak: "250",
        mana: "150,000",
        crystals: "88,000",
        xpText: "299,000 / 300,000 XP",
        xpPercent: "99%",
        xpRatio: 0.99,
      },
      "A-RANK": {
        letter: "A",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "70",
        streak: "180",
        mana: "90,000",
        crystals: "50,000",
        xpText: "70,000 / 100,000 XP",
        xpPercent: "70%",
        xpRatio: 0.7,
      },
      "B-RANK": {
        letter: "B",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "50",
        streak: "120",
        mana: "60,000",
        crystals: "30,000",
        xpText: "50,000 / 80,000 XP",
        xpPercent: "62%",
        xpRatio: 0.62,
      },
      "C-RANK": {
        letter: "C",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "35",
        streak: "80",
        mana: "35,000",
        crystals: "20,000",
        xpText: "35,000 / 60,000 XP",
        xpPercent: "58%",
        xpRatio: 0.58,
      },
      "D-RANK": {
        letter: "D",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "20",
        streak: "40",
        mana: "18,000",
        crystals: "10,000",
        xpText: "20,000 / 40,000 XP",
        xpPercent: "50%",
        xpRatio: 0.5,
      },
      "E-RANK": {
        letter: "E",
        color: "#EF4444",
        textColor: "text-[#EF4444]",
        status: "COMMANDER",
        avatar: "/visuals/bloodred_commander.jpg",
        level: "10",
        streak: "15",
        mana: "8,000",
        crystals: "4,000",
        xpText: "10,000 / 20,000 XP",
        xpPercent: "50%",
        xpRatio: 0.5,
      },
    },
  };

  const currentRank = rankData[archetype][hunterRank];
  const isDefaultReference = archetype === "male" && hunterRank === "A-RANK" && hunterName === "Karan_Awakened";

  // High-Resolution 100% Same-to-Same PNG Download
  const handleDownloadCard = async () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 564;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Draw base high-res authentic reference card
      const baseImg = new Image();
      baseImg.crossOrigin = "anonymous";
      await new Promise((resolve) => {
        baseImg.onload = () => resolve(true);
        baseImg.onerror = () => resolve(false);
        baseImg.src = "/visuals/hunter_card_reference.jpg";
      });
      ctx.drawImage(baseImg, 0, 0, 1024, 564);

      // 2. If not default avatar, draw selected rank avatar in left frame
      if (!isDefaultReference || archetype !== "male" || hunterRank !== "A-RANK") {
        try {
          const avImg = new Image();
          avImg.crossOrigin = "anonymous";
          await new Promise((resolve) => {
            avImg.onload = () => resolve(true);
            avImg.onerror = () => resolve(false);
            avImg.src = currentRank.avatar;
          });

          // Left avatar box coords: 57, 95, 315, 385
          ctx.save();
          ctx.beginPath();
          ctx.rect(58, 96, 314, 383);
          ctx.clip();
          ctx.drawImage(avImg, 58, 96, 314, 383);

          // Contrast vignette
          const vig = ctx.createLinearGradient(58, 96, 58, 479);
          vig.addColorStop(0, "rgba(0,0,0,0.3)");
          vig.addColorStop(0.5, "transparent");
          vig.addColorStop(1, "rgba(4,7,13,0.92)");
          ctx.fillStyle = vig;
          ctx.fillRect(58, 96, 314, 383);

          // Monogram & Rank label
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "900 48px -apple-system, sans-serif";
          ctx.fillText(initials, 82, 380);

          ctx.fillStyle = "#00E5FF";
          ctx.font = "bold 11px monospace";
          ctx.fillText(`${hunterRank} HUNTER`, 84, 400);

          ctx.fillStyle = "#828F9E";
          ctx.font = "italic 8px monospace";
          ctx.fillText('"DISCIPLINE TURNS POTENTIAL INTO REALITY."', 84, 420);

          ctx.restore();
        } catch {
          // Fallback
        }
      }

      // 3. If hunter name is customized, overlay the custom name
      if (hunterName !== "Karan_Awakened") {
        ctx.fillStyle = "#06080F";
        ctx.fillRect(400, 142, 280, 42);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 32px -apple-system, sans-serif";
        ctx.fillText(hunterName, 404, 174);

        // Verified checkmark badge
        const nWidth = ctx.measureText(hunterName).width;
        const bx = 404 + nWidth + 12;
        const by = 163;
        ctx.fillStyle = "#0095FF";
        ctx.beginPath();
        ctx.arc(bx + 8, by, 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(bx + 5, by);
        ctx.lineTo(bx + 7, by + 3);
        ctx.lineTo(bx + 12, by - 2);
        ctx.stroke();
      }

      // 4. If Rank changed, update rank totem
      if (hunterRank !== "A-RANK") {
        // Overlay rank banner
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(772, 95);
        ctx.lineTo(964, 95);
        ctx.lineTo(964, 442);
        ctx.lineTo(868, 478);
        ctx.lineTo(772, 442);
        ctx.closePath();
        ctx.clip();

        const rkGrad = ctx.createLinearGradient(772, 95, 964, 478);
        rkGrad.addColorStop(0, "#0E2442");
        rkGrad.addColorStop(0.4, "#0A1728");
        rkGrad.addColorStop(1, "#03060C");
        ctx.fillStyle = rkGrad;
        ctx.fill();

        ctx.strokeStyle = "#00E5FF";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.font = "16px sans-serif";
        ctx.fillText("✧", 868, 125);

        ctx.font = "900 76px -apple-system, sans-serif";
        ctx.fillText(currentRank.letter, 868, 235);

        ctx.fillStyle = "#00E5FF";
        ctx.font = "14px sans-serif";
        ctx.fillText("✦", 868, 260);

        ctx.font = "bold 24px -apple-system, sans-serif";
        ctx.fillText(hunterRank, 868, 298);

        ctx.fillStyle = "#828F9E";
        ctx.font = "bold 10px monospace";
        ctx.fillText(currentRank.status, 868, 320);

        ctx.fillStyle = "#5E6977";
        ctx.font = "8px monospace";
        ctx.fillText("DISCIPLINE", 868, 368);
        ctx.fillText("PROGRESS", 868, 384);
        ctx.fillText("FREEDOM", 868, 400);

        ctx.restore();
        ctx.textAlign = "left";
      }

      // Trigger Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_Hunter_Card_${(hunterName || "Hunter").replace(/\s+/g, "_")}.png`;
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
      
      {/* Background Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#00E5FF]/[0.035] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Mint Your Hunter Card.
          </h1>
          <p className="text-sm sm:text-base text-[#86868B] font-normal leading-relaxed">
            Authentic 3D titanium identity card. Switch ranks or character archetypes with instant real-time artwork update and 1-click HD PNG export.
          </p>
        </div>

        {/* 1. The Majestic 16:9 Card (100% SAME-TO-SAME AS REFERENCE IMAGE) */}
        <div className="w-full flex justify-center perspective-[1500px]">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
              transition: "transform 0.12s ease-out",
            }}
            className="w-full max-w-4xl aspect-[1024/564] rounded-[28px] relative overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.98),0_0_60px_rgba(0,229,255,0.12)] border border-white/[0.18] cursor-grab active:cursor-grabbing group select-none"
          >
            {/* The Authentic 100% Base Reference Card Image */}
            <img
              src="/visuals/hunter_card_reference.jpg"
              alt="ARISE Hunter Card"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Dynamic Left Avatar Frame Overlay (When Rank or Archetype is changed) */}
            {(!isDefaultReference || archetype !== "male" || hunterRank !== "A-RANK") && (
              <div
                style={{
                  left: "5.6%",
                  top: "16.8%",
                  width: "30.8%",
                  height: "68.2%",
                }}
                className="absolute rounded-xl overflow-hidden border border-[#00E5FF]/70 shadow-[0_0_24px_rgba(0,229,255,0.4)] bg-[#070A11] z-10 flex flex-col justify-between p-3"
              >
                {/* 1 Designated Avatar for this Rank */}
                <img
                  src={currentRank.avatar}
                  alt={`${hunterRank} Avatar`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Contrast gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070D]/95 via-transparent to-[#04070D]/40 pointer-events-none" />

                {/* Cybernetic Angled Corner Brackets */}
                <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00E5FF] pointer-events-none" />

                {/* Top-Left Badge */}
                <div className="relative z-10 flex items-start gap-1 font-mono text-[8px] uppercase leading-tight drop-shadow">
                  <span className="text-[#00E5FF]">✦</span>
                  <div>
                    <div className="font-bold text-white">VOID</div>
                    <div className="font-bold text-white">BLADE</div>
                    <div className="text-[#828F9E]">CLASS</div>
                  </div>
                </div>

                {/* Bottom KA Monogram & Quote */}
                <div className="relative z-10 space-y-0.5">
                  <div className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight drop-shadow-md">
                    {initials}
                  </div>
                  <div className="font-mono text-[9px] text-[#00E5FF] uppercase tracking-widest font-bold">
                    {hunterRank} HUNTER
                  </div>
                  <div className="pt-1 flex items-center justify-between border-t border-white/[0.1]">
                    <div className="font-mono italic text-[7px] text-[#828F9E] leading-tight">
                      &quot;DISCIPLINE TURNS POTENTIAL INTO REALITY.&quot;
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic Hunter Name Overlay (When customized) */}
            {hunterName !== "Karan_Awakened" && (
              <div
                style={{
                  left: "39.5%",
                  top: "25.5%",
                }}
                className="absolute z-10 flex items-center gap-2 bg-[#06080F]/90 px-2 py-0.5 rounded-lg border border-white/5"
              >
                <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight">
                  {hunterName}
                </span>
                <span className="w-4 h-4 rounded-full bg-[#0095FF] flex items-center justify-center text-white shadow-[0_0_8px_rgba(0,149,255,0.7)]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              </div>
            )}

            {/* Click-to-copy Hunter ID Trigger Button right over ID position */}
            <button
              onClick={handleCopyId}
              style={{
                left: "48%",
                top: "21.5%",
              }}
              title="Click to copy Hunter ID"
              className="absolute z-20 w-16 h-5 cursor-pointer opacity-0 hover:opacity-100 bg-[#00E5FF]/20 rounded border border-[#00E5FF] flex items-center justify-center text-[9px] font-mono text-white transition-opacity"
            >
              {copiedId ? "COPIED!" : "COPY"}
            </button>

            {/* Dynamic Right Rank Totem (When Rank is NOT A-RANK) */}
            {hunterRank !== "A-RANK" && (
              <div
                style={{
                  left: "75.4%",
                  top: "16.8%",
                  width: "18.8%",
                  height: "68.2%",
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), 50% 100%, 0 calc(100% - 24px))",
                }}
                className="absolute z-10 bg-gradient-to-b from-[#0E2442] via-[#0A1728] to-[#04070D] border-x border-t border-[#00E5FF]/70 shadow-[0_0_24px_rgba(0,229,255,0.3)] p-2 sm:p-3 flex flex-col justify-between items-center text-center"
              >
                <div className="text-white/80 text-xs">✧</div>
                <div className="my-auto space-y-0.5">
                  <div className="font-black text-4xl sm:text-5xl tracking-tighter bg-gradient-to-b from-white via-[#D1E4F7] to-[#547391] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,229,255,0.4)]">
                    {currentRank.letter}
                  </div>
                  <div className="text-[#00E5FF] text-[10px]">✦</div>
                </div>
                <div className="space-y-0.5 pb-2">
                  <div className={`font-sans font-extrabold text-sm tracking-wider ${currentRank.textColor}`}>
                    {hunterRank}
                  </div>
                  <div className="font-mono text-[8px] text-[#828F9E] uppercase tracking-widest font-bold">
                    {currentRank.status}
                  </div>
                </div>
              </div>
            )}

            {/* 3D Dynamic Specular Light Glare reflecting cursor */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200 group-hover:opacity-60 z-20"
              style={{
                background: `radial-gradient(circle 500px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(0, 229, 255, 0.15), transparent 70%)`,
              }}
            />
          </motion.div>
        </div>

        {/* 2. Unified Ergonomic Control Console */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080A0F] border border-white/[0.12] shadow-2xl space-y-6">
          
          {/* Row 1: Character Archetype Toggle (Male / Female / Commander) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Hunter Archetype / Gender
              </label>
              <span className="font-mono text-[10px] text-[#00E5FF]">1 Image Per Rank</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setArchetype("male")}
                className={`py-3 rounded-2xl font-mono text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-2 ${
                  archetype === "male"
                    ? "bg-[#101D30] border-[#00E5FF] text-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,0.3)]"
                    : "bg-[#05070A] border-white/[0.08] text-[#86868B] hover:border-white/20"
                }`}
              >
                <span>♂ Male Hunter</span>
              </button>
              <button
                onClick={() => setArchetype("female")}
                className={`py-3 rounded-2xl font-mono text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-2 ${
                  archetype === "female"
                    ? "bg-[#101D30] border-[#00E5FF] text-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,0.3)]"
                    : "bg-[#05070A] border-white/[0.08] text-[#86868B] hover:border-white/20"
                }`}
              >
                <span>♀ Female Hunter</span>
              </button>
              <button
                onClick={() => setArchetype("commander")}
                className={`py-3 rounded-2xl font-mono text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-2 ${
                  archetype === "commander"
                    ? "bg-[#2A0E12] border-[#EF4444] text-[#EF4444] shadow-[0_0_16px_rgba(239,68,68,0.3)]"
                    : "bg-[#05070A] border-white/[0.08] text-[#86868B] hover:border-white/20"
                }`}
              >
                <span>⚔️ Bloodred Knight</span>
              </button>
            </div>
          </div>

          {/* Row 2: Rank Selector Buttons (E, D, C, B, A, S) */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
              Hunter Rank Tier
            </label>
            <div className="grid grid-cols-6 gap-2">
              {(["E-RANK", "D-RANK", "C-RANK", "B-RANK", "A-RANK", "S-RANK"] as const).map((r) => {
                const isActive = hunterRank === r;
                return (
                  <button
                    key={r}
                    onClick={() => setHunterRank(r)}
                    className={`py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border text-center ${
                      isActive
                        ? "bg-[#10243C] border-[#00E5FF] text-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,0.35)] scale-[1.02]"
                        : "bg-[#05070A] border-white/[0.06] text-[#86868B] hover:border-white/15"
                    }`}
                  >
                    {r.split("-")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Call-Sign Input & Specialty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Hunter Call-Sign
              </label>
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={24}
                placeholder="e.g. Karan_Awakened"
                className="w-full px-4 py-3 rounded-xl bg-[#05070A] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Specialty Class
              </label>
              <select
                value={hunterClass}
                onChange={(e) => setHunterClass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#05070A] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#00E5FF] transition-colors cursor-pointer"
              >
                <option value="VOID BLADE">VOID BLADE (High Velocity HIIT)</option>
                <option value="SHADOW MONARCH">SHADOW MONARCH (Full Calisthenics Strength)</option>
                <option value="BLOODRED KNIGHT">BLOODRED KNIGHT (Heavy Lifting & Armor)</option>
                <option value="VALKYRIE BLADE">VALKYRIE BLADE (Speed & Agility Routine)</option>
                <option value="AETHER SPRINTER">AETHER SPRINTER (10KM Endurance)</option>
                <option value="AEGIS GUARDIAN">AEGIS GUARDIAN (App Block Defense)</option>
              </select>
            </div>
          </div>

          {/* Row 4: Download Button */}
          <div className="pt-2">
            <button
              onClick={handleDownloadCard}
              disabled={isDownloading}
              className="w-full py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#000000] font-sans font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_30px_rgba(0,229,255,0.35)] transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-[#000000]" />
              <span>{isDownloading ? "Generating High-Res PNG..." : "Download Hunter Card (PNG)"}</span>
            </button>
            <p className="text-[11px] font-mono text-[#828F9E] text-center mt-2">
              100% same-to-same reference export with 3D titanium chassis & custom call-sign.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
