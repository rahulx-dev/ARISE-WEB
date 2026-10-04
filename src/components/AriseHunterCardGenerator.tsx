"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("A-RANK");
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

  // 6 Ranks - Exactly 1 Designated Image Each (B, C, D use user's 3 reference images!)
  const ranksConfig = {
    "S-RANK": {
      letter: "S",
      title: "S-RANK",
      status: "SOVEREIGN",
      color: "#EF4444",
      glowColor: "rgba(239, 68, 68, 0.45)",
      textColor: "text-[#EF4444]",
      borderColor: "border-[#EF4444]",
      avatar: "/visuals/rank_s.jpg", // S-Rank Shadow Monarch
      role: "SHADOW MONARCH",
      roleShort: "SHADOW MONARCH",
      level: "85",
      streak: "124",
      mana: "98,400",
      crystals: "45,200",
      xpText: "185,400 / 200,000 XP",
      xpPercent: "92%",
      xpRatio: 0.92,
      mission: "Sovereign of the Dead.",
      bgGrad: "from-[#2A0D14] via-[#15070A] to-[#040203]",
      barGrad: "from-[#EF4444] to-[#F87171]",
    },
    "A-RANK": {
      letter: "A",
      title: "A-RANK",
      status: "ELITE",
      color: "#00E5FF",
      glowColor: "rgba(0, 229, 255, 0.45)",
      textColor: "text-[#00E5FF]",
      borderColor: "border-[#00E5FF]",
      avatar: "/visuals/rank_a.jpg", // A-Rank Reference Hunter
      role: "VOID BLADE",
      roleShort: "VOID BLADE",
      level: "28",
      streak: "48",
      mana: "14,850",
      crystals: "9,420",
      xpText: "24,850 / 50,000 XP",
      xpPercent: "56%",
      xpRatio: 0.56,
      mission: "Stronger Than Yesterday.",
      bgGrad: "from-[#0E2442] via-[#0A1728] to-[#04070D]",
      barGrad: "from-[#0070F3] to-[#00E5FF]",
    },
    "B-RANK": {
      letter: "B",
      title: "B-RANK",
      status: "ADVANCED",
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.45)",
      textColor: "text-[#38BDF8]",
      borderColor: "border-[#38BDF8]",
      avatar: "/visuals/female_hunter_shadow.jpg", // User Ref 3: Blue Lightning Shadow Girl
      role: "LIGHTNING VALKYRIE",
      roleShort: "LIGHTNING VALKYRIE",
      level: "22",
      streak: "32",
      mana: "9,200",
      crystals: "5,800",
      xpText: "18,200 / 35,000 XP",
      xpPercent: "52%",
      xpRatio: 0.52,
      mission: "Swift as Lightning.",
      bgGrad: "from-[#0C243B] via-[#071727] to-[#03080F]",
      barGrad: "from-[#0284C7] to-[#38BDF8]",
    },
    "C-RANK": {
      letter: "C",
      title: "C-RANK",
      status: "STABLE",
      color: "#F43F5E",
      glowColor: "rgba(244, 63, 94, 0.45)",
      textColor: "text-[#F43F5E]",
      borderColor: "border-[#F43F5E]",
      avatar: "/visuals/female_hunter_crimson.jpg", // User Ref 1: Crimson Blade Girl
      role: "CRIMSON SOVEREIGN",
      roleShort: "CRIMSON BLADE",
      level: "16",
      streak: "21",
      mana: "5,400",
      crystals: "3,100",
      xpText: "10,500 / 25,000 XP",
      xpPercent: "42%",
      xpRatio: 0.42,
      mission: "Carve the Path in Blood.",
      bgGrad: "from-[#2A0E1A] via-[#16070E] to-[#050204]",
      barGrad: "from-[#E11D48] to-[#FB7185]",
    },
    "D-RANK": {
      letter: "D",
      title: "D-RANK",
      status: "NOVICE",
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.45)",
      textColor: "text-[#F59E0B]",
      borderColor: "border-[#F59E0B]",
      avatar: "/visuals/bloodred_commander.jpg", // User Ref 2: Bloodred Knight Igris
      role: "BLOODRED KNIGHT",
      roleShort: "BLOOD KNIGHT",
      level: "10",
      streak: "14",
      mana: "2,800",
      crystals: "1,450",
      xpText: "5,600 / 15,000 XP",
      xpPercent: "37%",
      xpRatio: 0.37,
      mission: "Unbreakable Resolve.",
      bgGrad: "from-[#2A1C08] via-[#160E04] to-[#040301]",
      barGrad: "from-[#D97706] to-[#FBBF24]",
    },
    "E-RANK": {
      letter: "E",
      title: "E-RANK",
      status: "INITIATE",
      color: "#A1A1AA",
      glowColor: "rgba(161, 161, 170, 0.3)",
      textColor: "text-[#A1A1AA]",
      borderColor: "border-[#A1A1AA]",
      avatar: "/visuals/rank_e.jpg", // E-Rank Initiate
      role: "SHADOW INITIATE",
      roleShort: "SHADOW INITIATE",
      level: "04",
      streak: "07",
      mana: "850",
      crystals: "420",
      xpText: "1,200 / 5,000 XP",
      xpPercent: "24%",
      xpRatio: 0.24,
      mission: "The Awakening Begins.",
      bgGrad: "from-[#1C1F26] via-[#0F1116] to-[#030406]",
      barGrad: "from-[#71717A] to-[#D4D4D8]",
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
      // 1. Draw base high-res authentic reference card chassis
      const baseImg = new Image();
      baseImg.crossOrigin = "anonymous";
      await new Promise((resolve) => {
        baseImg.onload = () => resolve(true);
        baseImg.onerror = () => resolve(false);
        baseImg.src = "/visuals/hunter_card_reference.jpg";
      });
      ctx.drawImage(baseImg, 0, 0, 1024, 564);

      // 2. Draw Left Avatar Frame with this Rank's designated Image
      try {
        const avImg = new Image();
        avImg.crossOrigin = "anonymous";
        await new Promise((resolve) => {
          avImg.onload = () => resolve(true);
          avImg.onerror = () => resolve(false);
          avImg.src = currentRank.avatar;
        });

        // Left avatar box coords: x: 58, y: 96, w: 314, h: 383
        ctx.save();
        ctx.beginPath();
        ctx.rect(58, 96, 314, 383);
        ctx.clip();
        ctx.drawImage(avImg, 58, 96, 314, 383);

        // Contrast vignette
        const vig = ctx.createLinearGradient(58, 96, 58, 479);
        vig.addColorStop(0, "rgba(0,0,0,0.35)");
        vig.addColorStop(0.5, "transparent");
        vig.addColorStop(1, "rgba(4,7,13,0.94)");
        ctx.fillStyle = vig;
        ctx.fillRect(58, 96, 314, 383);

        // Top-Left Class badge in avatar
        ctx.fillStyle = currentRank.color;
        ctx.font = "12px sans-serif";
        ctx.fillText("✦", 76, 120);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 9px monospace";
        ctx.fillText(currentRank.roleShort.split(" ")[0] || "VOID", 92, 116);
        ctx.fillText(currentRank.roleShort.split(" ")[1] || "BLADE", 92, 126);
        ctx.fillStyle = "#828F9E";
        ctx.fillText("CLASS", 92, 136);

        // Monogram in avatar
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 48px -apple-system, sans-serif";
        ctx.fillText(initials, 80, 390);

        // Rank label
        ctx.fillStyle = currentRank.color;
        ctx.font = "bold 11px monospace";
        ctx.letterSpacing = "1.5px";
        ctx.fillText(`${hunterRank} HUNTER`, 82, 412);

        // Quote & signature
        ctx.fillStyle = "#828F9E";
        ctx.font = "italic 8px monospace";
        ctx.fillText('"DISCIPLINE TURNS POTENTIAL INTO REALITY."', 82, 432);

        ctx.restore();

        // Cybernetic border in rank color
        ctx.strokeStyle = currentRank.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(58, 96, 314, 383);

        // Corner angled brackets
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(58, 122);
        ctx.lineTo(58, 96);
        ctx.lineTo(84, 96);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(346, 479);
        ctx.lineTo(372, 479);
        ctx.lineTo(372, 453);
        ctx.stroke();

      } catch {
        // Fallback
      }

      // 3. Middle Content Area Overlays
      // Clear middle name area with background color
      ctx.fillStyle = "#06080F";
      ctx.fillRect(398, 142, 340, 44);

      // Hunter Name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 34px -apple-system, sans-serif";
      ctx.fillText(hunterName || "Karan_Awakened", 402, 175);

      // Blue Verified Badge Circle
      const nWidth = ctx.measureText(hunterName || "Karan_Awakened").width;
      const bx = 402 + nWidth + 12;
      const by = 163;
      ctx.fillStyle = "#0095FF";
      ctx.beginPath();
      ctx.arc(bx + 9, by, 10, 0, Math.PI * 2);
      ctx.fill();

      // White checkmark
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(bx + 6, by);
      ctx.lineTo(bx + 8.5, by + 3.5);
      ctx.lineTo(bx + 13.5, by - 2.5);
      ctx.stroke();

      // Subtitle: Diamond + Role • Rank HUNTER
      ctx.fillStyle = "#06080F";
      ctx.fillRect(398, 190, 340, 22);

      ctx.fillStyle = currentRank.color;
      ctx.font = "12px sans-serif";
      ctx.fillText("✦", 402, 204);

      ctx.font = "bold 11px monospace";
      ctx.fillText(`${currentRank.role}  •  ${hunterRank} HUNTER`, 418, 204);

      // Level & XP Numbers
      ctx.fillStyle = "#06080F";
      ctx.fillRect(398, 230, 340, 24);

      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("LEVEL", 402, 246);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 26px -apple-system, sans-serif";
      ctx.fillText(currentRank.level, 446, 248);

      ctx.fillStyle = "#717B8A";
      ctx.font = "11px monospace";
      ctx.fillText(currentRank.xpText, 510, 246);

      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 11px monospace";
      ctx.fillText(currentRank.xpPercent, 690, 246);

      // XP Progress Bar
      const barX = 402;
      const barY = 260;
      const barW = 330;
      const barH = 10;

      ctx.fillStyle = "#0E131E";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW, barH, 5);
        ctx.fill();
      } else {
        ctx.fillRect(barX, barY, barW, barH);
      }

      const activeBarW = barW * currentRank.xpRatio;
      const barGrad = ctx.createLinearGradient(barX, barY, barX + activeBarW, barY);
      barGrad.addColorStop(0, currentRank.color);
      barGrad.addColorStop(1, "#FFFFFF");
      ctx.fillStyle = barGrad;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, activeBarW, barH, 5);
        ctx.fill();
      } else {
        ctx.fillRect(barX, barY, activeBarW, barH);
      }

      // Telemetry Pods
      // Pod 1 Streak
      ctx.fillStyle = "#0A0D15";
      ctx.fillRect(402, 290, 102, 80);
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.strokeRect(402, 290, 102, 80);

      ctx.fillStyle = "#FF3B30";
      ctx.font = "18px sans-serif";
      ctx.fillText("🔥", 412, 325);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px -apple-system, sans-serif";
      ctx.fillText(currentRank.streak, 444, 320);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("DAYS", 444, 332);
      ctx.fillText("STREAK", 444, 350);

      // Pod 2 Mana
      ctx.fillStyle = "#0A0D15";
      ctx.fillRect(514, 290, 106, 80);
      ctx.strokeRect(514, 290, 106, 80);

      ctx.fillStyle = currentRank.color;
      ctx.font = "16px sans-serif";
      ctx.fillText("🧬", 522, 325);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px -apple-system, sans-serif";
      ctx.fillText(currentRank.mana, 546, 320);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("MANA", 546, 334);

      // Equalizer bars
      ctx.fillStyle = currentRank.color;
      [4, 9, 13, 7, 11].forEach((h, i) => {
        ctx.fillRect(546 + i * 7, 360 - h, 3.5, h);
      });

      // Pod 3 Crystals
      ctx.fillStyle = "#0A0D15";
      ctx.fillRect(630, 290, 102, 80);
      ctx.strokeRect(630, 290, 102, 80);

      ctx.fillStyle = currentRank.color;
      ctx.font = "16px sans-serif";
      ctx.fillText("💎", 638, 325);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px -apple-system, sans-serif";
      ctx.fillText(currentRank.crystals, 660, 320);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("CRYSTALS", 660, 334);

      [6, 12, 5, 10, 14].forEach((h, i) => {
        ctx.fillRect(660 + i * 7, 360 - h, 3.5, h);
      });

      // Current Mission Capsule
      ctx.fillStyle = "#090D15";
      ctx.fillRect(402, 385, 330, 48);
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.strokeRect(402, 385, 330, 48);

      ctx.strokeStyle = currentRank.color;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(412, 396, 24, 24);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("CURRENT MISSION", 446, 404);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 12px -apple-system, sans-serif";
      ctx.fillText(currentRank.mission, 446, 420);

      // 4. Right 3D Chrome Rank Totem Banner with V-Ribbon Cut
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
      rkGrad.addColorStop(0.3, "#0A1728");
      rkGrad.addColorStop(0.7, "#050912");
      rkGrad.addColorStop(1, "#020408");
      ctx.fillStyle = rkGrad;
      ctx.fill();

      // Frost flare
      const frost = ctx.createRadialGradient(868, 220, 10, 868, 220, 120);
      frost.addColorStop(0, currentRank.color + "33");
      frost.addColorStop(1, "transparent");
      ctx.fillStyle = frost;
      ctx.fillRect(772, 95, 192, 383);

      ctx.strokeStyle = currentRank.color;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Top star
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.font = "18px sans-serif";
      ctx.fillText("✧", 868, 128);

      // Giant 3D Chrome Faceted Letter
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = currentRank.color;
      ctx.shadowBlur = 18;
      ctx.font = "900 84px -apple-system, sans-serif";
      ctx.fillText(currentRank.letter, 868, 242);
      ctx.shadowBlur = 0;

      // Inner Star
      ctx.fillStyle = currentRank.color;
      ctx.font = "16px sans-serif";
      ctx.fillText("✦", 868, 268);

      // Rank Title
      ctx.fillStyle = currentRank.color;
      ctx.font = "bold 26px -apple-system, sans-serif";
      ctx.letterSpacing = "2px";
      ctx.fillText(hunterRank, 868, 308);

      // Status
      ctx.fillStyle = "#828F9E";
      ctx.font = "bold 11px monospace";
      ctx.letterSpacing = "2.5px";
      ctx.fillText(currentRank.status, 868, 332);

      // Vertical Creed
      ctx.fillStyle = "#5E6977";
      ctx.font = "9px monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("DISCIPLINE", 868, 380);
      ctx.fillText("PROGRESS", 868, 396);
      ctx.fillText("FREEDOM", 868, 412);

      ctx.restore();
      ctx.textAlign = "left";

      // Trigger Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_${hunterRank}_Hunter_Card_${(hunterName || "Hunter").replace(/\s+/g, "_")}.png`;
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
      
      {/* Dynamic Background Ambient Aura in current Rank's color */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] blur-[160px] pointer-events-none rounded-full transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${currentRank.color}15 0%, transparent 70%)`,
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

        {/* 1. The Majestic 16:9 Card (100% SAME-TO-SAME FOR ALL RANKS) */}
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
            {/* The Authentic 100% Base Reference Card Image Chassis */}
            <img
              src="/visuals/hunter_card_reference.jpg"
              alt="ARISE Hunter Card Chassis"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Dynamic Corner LEDs glowing in Current Rank Color */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 pointer-events-none transition-colors duration-500 z-10"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 8px ${currentRank.color})` }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 pointer-events-none transition-colors duration-500 z-10"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 8px ${currentRank.color})` }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 pointer-events-none transition-colors duration-500 z-10"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 8px ${currentRank.color})` }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 pointer-events-none transition-colors duration-500 z-10"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 8px ${currentRank.color})` }}
            />

            {/* Dynamic Left Avatar Frame Overlay (Loads 1 Designated Image per Rank!) */}
            <div
              style={{
                left: "5.6%",
                top: "16.8%",
                width: "30.8%",
                height: "68.2%",
              }}
              className="absolute rounded-xl overflow-hidden bg-[#070A11] z-10 flex flex-col justify-between p-3 border shadow-lg transition-all duration-500"
            >
              {/* Avatar Image for this Rank */}
              <img
                src={currentRank.avatar}
                alt={`${hunterRank} Avatar`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Contrast Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04070D]/95 via-transparent to-[#04070D]/40 pointer-events-none" />

              {/* Cybernetic Angled Corner Brackets */}
              <div
                className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 pointer-events-none"
                style={{ borderColor: currentRank.color }}
              />
              <div
                className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 pointer-events-none"
                style={{ borderColor: currentRank.color }}
              />

              {/* Top-Left Class Badge */}
              <div className="relative z-10 flex items-start gap-1 font-mono text-[8px] uppercase leading-tight drop-shadow">
                <span style={{ color: currentRank.color }}>✦</span>
                <div>
                  <div className="font-bold text-white">{currentRank.roleShort.split(" ")[0] || "VOID"}</div>
                  <div className="font-bold text-white">{currentRank.roleShort.split(" ")[1] || "BLADE"}</div>
                  <div className="text-[#828F9E]">CLASS</div>
                </div>
              </div>

              {/* Bottom KA Monogram & Quote */}
              <div className="relative z-10 space-y-0.5">
                <div className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight drop-shadow-md">
                  {initials}
                </div>
                <div
                  className="font-mono text-[9px] uppercase tracking-widest font-bold"
                  style={{ color: currentRank.color }}
                >
                  {hunterRank} HUNTER
                </div>
                <div className="pt-1 flex items-center justify-between border-t border-white/[0.1]">
                  <div className="font-mono italic text-[7px] text-[#828F9E] leading-tight">
                    &quot;DISCIPLINE TURNS POTENTIAL INTO REALITY.&quot;
                  </div>
                  {/* Handwritten Signature SVG */}
                  <svg viewBox="0 0 50 16" className="w-10 h-4 stroke-white/80 fill-none stroke-[1.4] opacity-80">
                    <path d="M2 11 C8 3, 12 14, 18 7 C23 2, 28 12, 34 5 C39 2, 43 9, 48 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Bottom-Right Rank Triangle Badge */}
              <div
                className="absolute bottom-2.5 right-2.5 z-10 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[11px]"
                style={{ borderBottomColor: currentRank.color, filter: `drop-shadow(0 0 6px ${currentRank.color})` }}
              />
            </div>

            {/* Middle Section: Live Custom Name & Verified Badge */}
            <div
              style={{
                left: "39.5%",
                top: "25.2%",
              }}
              className="absolute z-10 flex items-center gap-2 bg-[#06080F]/90 px-2 py-0.5 rounded-lg border border-white/5"
            >
              <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight">
                {hunterName || "Karan_Awakened"}
              </span>
              <span className="w-4 h-4 rounded-full bg-[#0095FF] flex items-center justify-center text-white shadow-[0_0_8px_rgba(0,149,255,0.7)]">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            </div>

            {/* Subtitle: ✦ Role • Rank HUNTER */}
            <div
              style={{
                left: "39.5%",
                top: "33.5%",
                color: currentRank.color,
              }}
              className="absolute z-10 flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-semibold bg-[#06080F]/90 px-2 py-0.5 rounded-md"
            >
              <span>✦</span>
              <span>{currentRank.role}</span>
              <span>•</span>
              <span>{hunterRank} HUNTER</span>
            </div>

            {/* Level & XP Row */}
            <div
              style={{
                left: "39.5%",
                top: "41.5%",
                width: "33.5%",
              }}
              className="absolute z-10 flex items-baseline justify-between font-mono text-[10px] sm:text-xs bg-[#06080F]/90 px-2 py-0.5 rounded-md"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[#828F9E] text-[9px]">LEVEL</span>
                <span className="text-white font-extrabold text-base sm:text-lg">{currentRank.level}</span>
              </div>
              <span className="text-[9px] text-[#717B8A]">{currentRank.xpText}</span>
              <span className="text-[9px] text-[#E4E8F0] font-bold">{currentRank.xpPercent}</span>
            </div>

            {/* XP Capsule Progress Bar */}
            <div
              style={{
                left: "39.5%",
                top: "48.2%",
                width: "33.5%",
              }}
              className="absolute z-10 h-2 sm:h-2.5 bg-[#0E131E] rounded-full overflow-hidden p-0.5 border border-white/10"
            >
              <div
                className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${currentRank.barGrad}`}
                style={{
                  width: currentRank.xpPercent,
                  boxShadow: `0 0 10px ${currentRank.color}`,
                }}
              />
            </div>

            {/* Telemetry Pod 1: Streak */}
            <div
              style={{
                left: "39.5%",
                top: "54.5%",
                width: "10.4%",
                height: "16.5%",
              }}
              className="absolute z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#0A0D15]/95 border border-white/[0.08] font-mono flex flex-col justify-between"
            >
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm">🔥</span>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white leading-none">{currentRank.streak}</div>
                  <div className="text-[7px] text-[#828F9E]">DAYS</div>
                </div>
              </div>
              <div className="text-[7px] sm:text-[8px] text-[#828F9E] uppercase tracking-wider">STREAK</div>
            </div>

            {/* Telemetry Pod 2: Mana + Equalizer Bars */}
            <div
              style={{
                left: "51%",
                top: "54.5%",
                width: "10.4%",
                height: "16.5%",
              }}
              className="absolute z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#0A0D15]/95 border border-white/[0.08] font-mono flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] sm:text-xs font-extrabold text-white leading-none">{currentRank.mana}</div>
                <div className="text-[7px] text-[#828F9E] uppercase tracking-wider pt-0.5">MANA</div>
              </div>
              {/* Equalizer frequency bars in Rank Color */}
              <div className="flex items-end gap-0.5 h-2.5 pt-0.5">
                <div className="w-1 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-2.5 rounded-full animate-pulse delay-75" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-1 rounded-full animate-pulse delay-150" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
              </div>
            </div>

            {/* Telemetry Pod 3: Crystals + Equalizer Bars */}
            <div
              style={{
                left: "62.6%",
                top: "54.5%",
                width: "10.4%",
                height: "16.5%",
              }}
              className="absolute z-10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#0A0D15]/95 border border-white/[0.08] font-mono flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] sm:text-xs font-extrabold text-white leading-none">{currentRank.crystals}</div>
                <div className="text-[7px] text-[#828F9E] uppercase tracking-wider pt-0.5">CRYSTALS</div>
              </div>
              <div className="flex items-end gap-0.5 h-2.5 pt-0.5">
                <div className="w-1 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-1 rounded-full animate-pulse delay-75" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-2 rounded-full animate-pulse delay-150" style={{ backgroundColor: currentRank.color }} />
                <div className="w-1 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
              </div>
            </div>

            {/* Current Mission Capsule */}
            <div
              style={{
                left: "39.5%",
                top: "73.2%",
                width: "33.5%",
                height: "9.5%",
              }}
              className="absolute z-10 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-[#090D15]/95 border border-white/[0.1] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded border flex items-center justify-center text-[10px] font-bold shadow"
                  style={{ borderColor: currentRank.color, color: currentRank.color }}
                >
                  🛡️
                </div>
                <div>
                  <div className="font-mono text-[7px] text-[#828F9E] uppercase tracking-wider">CURRENT MISSION</div>
                  <div className="font-sans font-bold text-[9px] sm:text-xs text-white truncate max-w-[170px] sm:max-w-[220px]">
                    {currentRank.mission}
                  </div>
                </div>
              </div>
              <span className="text-[#828F9E] text-xs font-bold">&gt;</span>
            </div>

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

            {/* Right 3D Chrome Rank Totem Banner with V-Ribbon Bottom Cut */}
            <div
              style={{
                left: "75.4%",
                top: "16.8%",
                width: "18.8%",
                height: "68.2%",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), 50% 100%, 0 calc(100% - 24px))",
                borderColor: currentRank.color,
                boxShadow: `0 0 30px ${currentRank.color}33`,
              }}
              className={`absolute z-10 bg-gradient-to-b ${currentRank.bgGrad} border-x border-t shadow-2xl p-2 sm:p-3 flex flex-col justify-between items-center text-center transition-all duration-500`}
            >
              <div className="text-white/80 text-xs">✧</div>
              <div className="my-auto space-y-0.5">
                <motion.div
                  key={hunterRank}
                  animate={{ scale: [0.95, 1.03, 1] }}
                  transition={{ duration: 0.4 }}
                  className="font-black text-5xl sm:text-6xl tracking-tighter bg-gradient-to-b from-white via-[#D1E4F7] to-[#547391] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)]"
                >
                  {currentRank.letter}
                </motion.div>
                <div className="text-xs" style={{ color: currentRank.color }}>✦</div>
              </div>
              <div className="space-y-0.5 pb-2">
                <div className={`font-sans font-extrabold text-base sm:text-lg tracking-wider ${currentRank.textColor}`}>
                  {hunterRank}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-[#828F9E] uppercase tracking-widest font-bold">
                  {currentRank.status}
                </div>
              </div>
              <div className="font-mono text-[6px] sm:text-[7px] text-[#5E6977] uppercase tracking-[0.2em] space-y-0.5 pb-2">
                <div>DISCIPLINE</div>
                <div>PROGRESS</div>
                <div>FREEDOM</div>
              </div>
            </div>

            {/* 3D Dynamic Specular Light Glare reflecting cursor */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200 group-hover:opacity-60 z-20"
              style={{
                background: `radial-gradient(circle 500px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(255, 255, 255, 0.15), transparent 70%)`,
              }}
            />
          </motion.div>
        </div>

        {/* 2. Clean Ergonomic Control Console */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#080A0F] border border-white/[0.12] shadow-2xl space-y-6">
          
          {/* Row 1: Rank Selector (1 Image Per Rank: B, C, D use user's uploaded images!) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Select Hunter Rank Tier
              </label>
              <span className="font-mono text-[10px]" style={{ color: currentRank.color }}>
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

          {/* Row 2: Call-Sign Input */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
              Hunter Call-Sign (Live Updates On Card)
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={24}
                placeholder="e.g. Karan_Awakened"
                className="flex-1 px-4 py-3 rounded-xl bg-[#05070A] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#00E5FF] transition-colors"
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
