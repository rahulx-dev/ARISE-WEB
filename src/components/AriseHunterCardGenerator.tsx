"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  // Default name removed as requested; starts clean with placeholder
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

  // 6 Ranks: Each rank has designated avatar + designated photorealistic 3D Chrome Banner Image!
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
      bannerImg: "/visuals/rank_banner_s.jpg", // 3D Chrome 'S' Totem Banner
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
      bannerImg: "/visuals/rank_banner_a.jpg", // 3D Chrome 'A' Totem Banner
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
      avatar: "/visuals/female_hunter_shadow.jpg", // User Ref 3: Blue Lightning Girl
      bannerImg: "/visuals/rank_banner_b.jpg", // 3D Chrome 'B' Totem Banner
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
      bannerImg: "/visuals/rank_banner_c.jpg", // 3D Chrome 'C' Totem Banner
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
      bannerImg: "/visuals/rank_banner_d.jpg", // 3D Chrome 'D' Totem Banner
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
      bannerImg: "/visuals/rank_banner_e.jpg", // 3D Chrome 'E' Totem Banner
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

      // 2. Draw Left Avatar Frame with this Rank's designated Image & Authentic Chamfer Frame
      try {
        const avImg = new Image();
        avImg.crossOrigin = "anonymous";
        await new Promise((resolve) => {
          avImg.onload = () => resolve(true);
          avImg.onerror = () => resolve(false);
          avImg.src = currentRank.avatar;
        });

        const avX = 58;
        const avY = 96;
        const avW = 314;
        const avH = 383;

        ctx.save();
        ctx.beginPath();
        ctx.rect(avX, avY, avW, avH);
        ctx.clip();
        ctx.drawImage(avImg, avX, avY, avW, avH);

        // Contrast vignette: bottom 50% fades to obsidian
        const vig = ctx.createLinearGradient(avX, avY + avH * 0.5, avX, avY + avH);
        vig.addColorStop(0, "transparent");
        vig.addColorStop(0.5, "rgba(2,4,8,0.75)");
        vig.addColorStop(1, "rgba(2,4,8,0.96)");
        ctx.fillStyle = vig;
        ctx.fillRect(avX, avY, avW, avH);

        // Top subtle shadow
        const topVig = ctx.createLinearGradient(avX, avY, avX, avY + 60);
        topVig.addColorStop(0, "rgba(2,4,8,0.6)");
        topVig.addColorStop(1, "transparent");
        ctx.fillStyle = topVig;
        ctx.fillRect(avX, avY, avW, 60);

        // Top-Left Class badge in avatar
        ctx.fillStyle = currentRank.color;
        ctx.font = "12px sans-serif";
        ctx.fillText("✦", avX + 18, avY + 24);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 9px monospace";
        ctx.fillText(currentRank.roleShort.split(" ")[0] || "VOID", avX + 34, avY + 20);
        ctx.fillText(currentRank.roleShort.split(" ")[1] || "BLADE", avX + 34, avY + 30);
        ctx.fillStyle = "#828F9E";
        ctx.fillText("CLASS", avX + 34, avY + 40);

        // Monogram in avatar
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 48px -apple-system, sans-serif";
        ctx.fillText(initials, avX + 22, avY + avH - 74);

        // Triangular Rank Insignia
        ctx.fillStyle = currentRank.color;
        ctx.beginPath();
        ctx.moveTo(avX + avW - 80, avY + avH - 75);
        ctx.lineTo(avX + avW - 70, avY + avH - 96);
        ctx.lineTo(avX + avW - 60, avY + avH - 75);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 8px monospace";
        ctx.textAlign = "center";
        ctx.fillText(hunterRank.split("-")[0], avX + avW - 70, avY + avH - 64);
        ctx.textAlign = "left";

        // Rank label
        ctx.fillStyle = currentRank.color;
        ctx.font = "bold 11px monospace";
        ctx.letterSpacing = "1.5px";
        ctx.fillText(`${hunterRank} HUNTER`, avX + 24, avY + avH - 52);

        // Quote & signature
        ctx.fillStyle = "#828F9E";
        ctx.font = "italic 8px monospace";
        ctx.fillText('"DISCIPLINE TURNS POTENTIAL INTO REALITY."', avX + 24, avY + avH - 32);

        // Handwritten signature stroke
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(avX + 205, avY + avH - 32);
        ctx.bezierCurveTo(avX + 218, avY + avH - 42, avX + 226, avY + avH - 26, avX + 242, avY + avH - 36);
        ctx.bezierCurveTo(avX + 252, avY + avH - 44, avX + 265, avY + avH - 28, avX + 282, avY + avH - 34);
        ctx.stroke();

        ctx.restore();

        // Inner neon double border
        ctx.strokeStyle = currentRank.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(avX + 3, avY + 3, avW - 6, avH - 6);

        // Outer chassis border
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(avX, avY, avW, avH);

        // Top-left chamfer notch
        ctx.strokeStyle = currentRank.color;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(avX, avY + 24);
        ctx.lineTo(avX, avY);
        ctx.lineTo(avX + 24, avY);
        ctx.stroke();

        // Bottom-right electric angled LED bracket
        ctx.fillStyle = currentRank.color;
        ctx.shadowColor = currentRank.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(avX + avW, avY + avH - 28);
        ctx.lineTo(avX + avW, avY + avH);
        ctx.lineTo(avX + avW - 28, avY + avH);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;

      } catch {
        // Fallback
      }

      // 3. Middle Unified Glass HUD Panel (Blue tick removed, clean custom name)
      const hudX = 394;
      const hudY = 114;
      const hudW = 352;
      const hudH = 365;

      ctx.save();
      const hudGrad = ctx.createLinearGradient(hudX, hudY, hudX, hudY + hudH);
      hudGrad.addColorStop(0, "#080B14");
      hudGrad.addColorStop(0.5, "#06080F");
      hudGrad.addColorStop(1, "#03050A");
      ctx.fillStyle = hudGrad;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(hudX, hudY, hudW, hudH, 16);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.fillRect(hudX, hudY, hudW, hudH);
      }

      // Hunter ID & Copy badge
      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("HUNTER ID", hudX + 14, hudY + 24);

      ctx.fillStyle = "#121722";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(hudX + 80, hudY + 11, 88, 18, 5);
        ctx.fill();
      }
      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 10px monospace";
      ctx.fillText(hunterId, hudX + 86, hudY + 24);

      // Hunter Name (Clean, without blue tick as requested)
      const activeName = displayName || "HUNTER_AWAKENED";
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 28px -apple-system, sans-serif";
      ctx.fillText(activeName, hudX + 14, hudY + 62);

      // Subtitle: Diamond + Role • Rank HUNTER
      ctx.fillStyle = currentRank.color;
      ctx.font = "11px sans-serif";
      ctx.fillText("✦", hudX + 14, hudY + 86);

      ctx.font = "bold 11px monospace";
      ctx.fillText(`${currentRank.role}  •  ${hunterRank} HUNTER`, hudX + 28, hudY + 86);

      // Level & XP Numbers
      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("LEVEL", hudX + 14, hudY + 120);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 24px -apple-system, sans-serif";
      ctx.fillText(currentRank.level, hudX + 54, hudY + 122);

      ctx.fillStyle = "#717B8A";
      ctx.font = "10px monospace";
      ctx.fillText(currentRank.xpText, hudX + 110, hudY + 120);

      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 10px monospace";
      ctx.fillText(currentRank.xpPercent, hudX + hudW - 44, hudY + 120);

      // XP Progress Bar
      const barX = hudX + 14;
      const barY = hudY + 132;
      const barW = hudW - 28;
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

      // Telemetry Pods (Row of 3 equal pods)
      const podY = hudY + 154;
      const podW = 102;
      const podH = 82;

      // Pod 1 Streak
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(hudX + 14, podY, podW, podH, 12);
        ctx.fill();
      }
      ctx.fillStyle = "#FF3B30";
      ctx.font = "18px sans-serif";
      ctx.fillText("🔥", hudX + 24, podY + 34);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText(currentRank.streak, hudX + 54, podY + 30);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("DAYS", hudX + 54, podY + 42);
      ctx.fillText("STREAK", hudX + 24, podY + 68);

      // Pod 2 Mana
      const pod2X = hudX + 14 + podW + 10;
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pod2X, podY, podW, podH, 12);
        ctx.fill();
      }
      ctx.fillStyle = currentRank.color;
      ctx.font = "16px sans-serif";
      ctx.fillText("🧬", pod2X + 10, podY + 34);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 14px -apple-system, sans-serif";
      ctx.fillText(currentRank.mana, pod2X + 34, podY + 30);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("MANA", pod2X + 10, podY + 68);

      // Equalizer bars
      ctx.fillStyle = currentRank.color;
      [4, 9, 13, 7, 11].forEach((h, i) => {
        ctx.fillRect(pod2X + 56 + i * 7, podY + 68 - h, 3.5, h);
      });

      // Pod 3 Crystals
      const pod3X = pod2X + podW + 10;
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pod3X, podY, podW, podH, 12);
        ctx.fill();
      }
      ctx.fillStyle = currentRank.color;
      ctx.font = "16px sans-serif";
      ctx.fillText("💎", pod3X + 10, podY + 34);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 14px -apple-system, sans-serif";
      ctx.fillText(currentRank.crystals, pod3X + 34, podY + 30);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("CRYSTALS", pod3X + 10, podY + 68);

      [6, 12, 5, 10, 14].forEach((h, i) => {
        ctx.fillRect(pod3X + 56 + i * 7, podY + 68 - h, 3.5, h);
      });

      // Current Mission Capsule
      const misY = hudY + 252;
      const misW = hudW - 28;
      const misH = 50;

      ctx.fillStyle = "#090D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(hudX + 14, misY, misW, misH, 12);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.stroke();
      }

      ctx.strokeStyle = currentRank.color;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(hudX + 24, misY + 13, 24, 24);

      ctx.fillStyle = "#828F9E";
      ctx.font = "8px monospace";
      ctx.fillText("CURRENT MISSION", hudX + 58, misY + 22);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 12px -apple-system, sans-serif";
      ctx.fillText(currentRank.mission, hudX + 58, misY + 38);
      ctx.restore();

      // 4. Right 3D Chrome Rank Totem Banner (Drawn directly from high-res image asset!)
      try {
        const rkImg = new Image();
        rkImg.crossOrigin = "anonymous";
        await new Promise((resolve) => {
          rkImg.onload = () => resolve(true);
          rkImg.onerror = () => resolve(false);
          rkImg.src = currentRank.bannerImg;
        });

        // Exact right banner coords: x: 772, y: 95, w: 192, h: 384
        ctx.save();
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(772, 95, 192, 384, 14);
          ctx.clip();
        }
        ctx.drawImage(rkImg, 772, 95, 192, 384);
        ctx.restore();

        // Rank edge glow
        ctx.strokeStyle = currentRank.color;
        ctx.lineWidth = 2;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(772, 95, 192, 384, 14);
          ctx.stroke();
        }
      } catch {
        // fallback
      }

      // Trigger Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_${hunterRank}_Hunter_Card_${(displayName || "Hunter").replace(/\s+/g, "_")}.png`;
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
          background: `radial-gradient(circle, ${currentRank.color}18 0%, ${currentRank.color}05 50%, transparent 75%)`,
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
            {/* Base Reference Card Chassis */}
            <img
              src="/visuals/hunter_card_reference.jpg"
              alt="ARISE Hunter Card Chassis"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Corner LED Accents - Seamlessly Colored to Active Rank */}
            <div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 pointer-events-none transition-all duration-500 z-20"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 10px ${currentRank.color})` }}
            />
            <div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 pointer-events-none transition-all duration-500 z-20"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 10px ${currentRank.color})` }}
            />
            <div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 pointer-events-none transition-all duration-500 z-20"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 10px ${currentRank.color})` }}
            />
            <div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 pointer-events-none transition-all duration-500 z-20"
              style={{ borderColor: currentRank.color, filter: `drop-shadow(0 0 10px ${currentRank.color})` }}
            />

            {/* Left Avatar Frame (100% Matches media_1791088648199.png with chamfered sci-fi chassis & electric angled LED tab) */}
            <div
              style={{
                left: "5.6%",
                top: "16.8%",
                width: "30.8%",
                height: "68.2%",
                boxShadow: `0 0 30px ${currentRank.color}25, inset 0 0 20px rgba(0,0,0,0.85)`,
              }}
              className="absolute rounded-2xl overflow-hidden bg-[#070A11] z-10 flex flex-col justify-between p-3.5 border border-white/20 transition-all duration-500 group/avatar"
            >
              {/* Avatar Image for this Rank */}
              <img
                src={currentRank.avatar}
                alt={`${hunterRank} Avatar`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover/avatar:scale-105"
              />

              {/* Inner Cybernetic Neon Double Border */}
              <div
                className="absolute inset-1 rounded-xl border-2 pointer-events-none transition-colors duration-500"
                style={{
                  borderColor: `${currentRank.color}85`,
                  boxShadow: `inset 0 0 14px ${currentRank.color}35, 0 0 14px ${currentRank.color}35`,
                }}
              />

              {/* Seamless Bottom Obsidian Contrast Vignette (Fades character into deep black base) */}
              <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#020408] via-[#020408]/85 via-40% to-transparent pointer-events-none" />

              {/* Top Subtle Vignette */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#020408]/60 to-transparent pointer-events-none" />

              {/* Top-Left Cybernetic Chamfer Notch */}
              <div
                className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 pointer-events-none transition-colors duration-500"
                style={{ borderColor: currentRank.color }}
              />

              {/* Bottom-Right Electric Neon LED Angled Tab (Exact match of reference image!) */}
              <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none flex items-end justify-end overflow-hidden z-20">
                <div
                  className="w-8 h-3.5 rotate-[-45deg] translate-x-2 translate-y-2 shadow-lg transition-colors duration-500"
                  style={{
                    backgroundColor: currentRank.color,
                    boxShadow: `0 0 14px ${currentRank.color}`,
                  }}
                />
              </div>

              {/* Top-Left Class Badge (Dynamic Text) */}
              <div className="relative z-10 flex items-start gap-1.5 font-mono text-[9px] uppercase leading-tight drop-shadow-md">
                <span className="text-xs transition-colors duration-500" style={{ color: currentRank.color }}>✦</span>
                <div>
                  <div className="font-extrabold text-white tracking-wide">{currentRank.roleShort.split(" ")[0] || "VOID"}</div>
                  <div className="font-extrabold text-white tracking-wide">{currentRank.roleShort.split(" ")[1] || "BLADE"}</div>
                  <div className="text-[#828F9E] text-[8px] font-semibold tracking-wider">CLASS</div>
                </div>
              </div>

              {/* Bottom Dynamic Monogram, Rank & Quote (Text adapts dynamically to user's typed name!) */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-end justify-between pr-2">
                  <div className="font-sans font-black text-4xl sm:text-5xl text-[#FFFFFF] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                    {initials}
                  </div>

                  {/* Triangular Rank Insignia Crest in Rank Color */}
                  <div className="flex flex-col items-center pb-1">
                    <div
                      className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] transition-colors duration-500"
                      style={{
                        borderBottomColor: currentRank.color,
                        filter: `drop-shadow(0 0 8px ${currentRank.color})`,
                      }}
                    />
                    <span
                      className="font-mono text-[7px] font-black uppercase tracking-wider pt-0.5"
                      style={{ color: currentRank.color }}
                    >
                      {hunterRank.split("-")[0]}
                    </span>
                  </div>
                </div>

                {/* Rank Label */}
                <div
                  className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-extrabold transition-colors duration-500 drop-shadow"
                  style={{ color: currentRank.color }}
                >
                  {hunterRank} HUNTER
                </div>

                {/* Quote & Signature */}
                <div className="pt-1.5 flex items-center justify-between border-t border-white/[0.12]">
                  <div className="font-mono italic text-[7.5px] sm:text-[8px] text-[#828F9E] leading-tight max-w-[150px]">
                    &quot;DISCIPLINE TURNS POTENTIAL INTO REALITY.&quot;
                  </div>
                  {/* Authentic Signature Stroke */}
                  <svg viewBox="0 0 50 16" className="w-11 h-4 stroke-white/85 fill-none stroke-[1.5] opacity-85 ml-1 flex-shrink-0 drop-shadow">
                    <path d="M2 11 C8 3, 12 14, 18 7 C23 2, 28 12, 34 5 C39 2, 43 9, 48 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Middle Section: UNIFIED SEAMLESS GLASS HUD (Clean name without blue tick, smooth dark obsidian blending!) */}
            <div
              style={{
                left: "38.5%",
                top: "16.8%",
                width: "34.5%",
                height: "68.2%",
                boxShadow: `inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${currentRank.color}15`,
              }}
              className="absolute z-10 rounded-2xl bg-gradient-to-b from-[#070A12]/95 via-[#05070E]/90 to-[#030509]/95 backdrop-blur-[8px] border border-white/[0.08] p-3 flex flex-col justify-between transition-all duration-500"
            >
              {/* Top Row: Hunter ID & 1-Click Copy */}
              <div className="flex items-center justify-between font-mono text-[9px] text-[#828F9E]">
                <div className="flex items-center gap-1.5">
                  <span>HUNTER ID</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-[#E4E8F0] font-bold border border-white/5">
                    {hunterId}
                  </span>
                </div>
                <button
                  onClick={handleCopyId}
                  className="text-[#828F9E] hover:text-white flex items-center gap-1 cursor-pointer transition-colors px-1 py-0.5 rounded hover:bg-white/5"
                  title="Copy Hunter ID"
                >
                  {copiedId ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                  <span>{copiedId ? "Copied" : "COPY"}</span>
                </button>
              </div>

              {/* Hunter Name Row: Clean, bold, crisp white typography (Blue tick removed as requested!) */}
              <div className="space-y-0.5">
                <div className="flex items-center">
                  {displayName ? (
                    <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight truncate max-w-[240px] drop-shadow-sm">
                      {displayName}
                    </span>
                  ) : (
                    <span className="font-sans font-extrabold text-lg sm:text-xl text-white/35 italic tracking-wider">
                      YOUR CALL-SIGN
                    </span>
                  )}
                </div>

                {/* Subtitle: ✦ Role • Rank HUNTER */}
                <div
                  className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] font-semibold transition-colors duration-500"
                  style={{ color: currentRank.color }}
                >
                  <span>✦</span>
                  <span className="truncate">{currentRank.role}</span>
                  <span>•</span>
                  <span>{hunterRank} HUNTER</span>
                </div>
              </div>

              {/* Level & XP Progress Section */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between font-mono text-[9px] sm:text-[10px]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#828F9E] text-[8px]">LEVEL</span>
                    <span className="text-white font-extrabold text-sm sm:text-base">{currentRank.level}</span>
                  </div>
                  <span className="text-[8px] text-[#717B8A]">{currentRank.xpText}</span>
                  <span className="text-[8px] text-[#E4E8F0] font-bold">{currentRank.xpPercent}</span>
                </div>
                {/* Glowing Capsule Bar */}
                <div className="w-full h-2 bg-[#0E131E] rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${currentRank.barGrad}`}
                    style={{
                      width: currentRank.xpPercent,
                      boxShadow: `0 0 10px ${currentRank.color}`,
                    }}
                  />
                </div>
              </div>

              {/* 3 Telemetry Pods (Streak, Mana, Crystals) */}
              <div className="grid grid-cols-3 gap-1.5 font-mono">
                {/* Pod 1: Streak */}
                <div className="p-1.5 rounded-lg bg-[#0A0D15]/90 border border-white/[0.08] flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🔥</span>
                    <div>
                      <div className="text-xs font-extrabold text-white leading-none">{currentRank.streak}</div>
                      <div className="text-[6px] text-[#828F9E]">DAYS</div>
                    </div>
                  </div>
                  <div className="text-[7px] text-[#828F9E] uppercase tracking-wider pt-1">STREAK</div>
                </div>

                {/* Pod 2: Mana */}
                <div className="p-1.5 rounded-lg bg-[#0A0D15]/90 border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-white leading-none truncate">{currentRank.mana}</div>
                    <div className="text-[6px] text-[#828F9E] uppercase tracking-wider pt-0.5">MANA</div>
                  </div>
                  {/* Equalizer Frequency Bars */}
                  <div className="flex items-end gap-0.5 h-2 pt-0.5">
                    <div className="w-0.5 h-1 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-2 rounded-full animate-pulse delay-75" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-1.5 rounded-full animate-pulse delay-150" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                  </div>
                </div>

                {/* Pod 3: Crystals */}
                <div className="p-1.5 rounded-lg bg-[#0A0D15]/90 border border-white/[0.08] flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-white leading-none truncate">{currentRank.crystals}</div>
                    <div className="text-[6px] text-[#828F9E] uppercase tracking-wider pt-0.5">CRYSTALS</div>
                  </div>
                  <div className="flex items-end gap-0.5 h-2 pt-0.5">
                    <div className="w-0.5 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-1.5 rounded-full animate-pulse delay-75" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-2 rounded-full animate-pulse delay-150" style={{ backgroundColor: currentRank.color }} />
                    <div className="w-0.5 h-1 rounded-full animate-pulse" style={{ backgroundColor: currentRank.color }} />
                  </div>
                </div>
              </div>

              {/* Current Mission Capsule */}
              <div className="p-1.5 px-2 rounded-lg bg-[#080B12] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <div
                    className="w-4 h-4 rounded border flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                    style={{ borderColor: currentRank.color, color: currentRank.color }}
                  >
                    🛡️
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[6px] text-[#828F9E] uppercase tracking-wider leading-none">CURRENT MISSION</div>
                    <div className="font-sans font-bold text-[9px] text-white truncate max-w-[170px]">
                      {currentRank.mission}
                    </div>
                  </div>
                </div>
                <span className="text-[#828F9E] text-[10px] font-bold flex-shrink-0 ml-1">&gt;</span>
              </div>

            </div>

            {/* Right 3D Chrome Rank Totem Banner (100% Photorealistic Artwork for ALL 6 Ranks!) */}
            <div
              style={{
                left: "75.4%",
                top: "16.8%",
                width: "18.8%",
                height: "68.2%",
                boxShadow: `0 0 25px ${currentRank.color}35`,
              }}
              className="absolute z-10 rounded-xl overflow-hidden border border-white/10 transition-all duration-500 group/totem"
            >
              <img
                src={currentRank.bannerImg}
                alt={`${hunterRank} 3D Chrome Totem Banner`}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/totem:scale-105"
              />
              {/* Rank color edge glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-xl border transition-colors duration-500"
                style={{ borderColor: `${currentRank.color}55` }}
              />
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
              <span className="font-mono text-[10px] transition-colors duration-500" style={{ color: currentRank.color }}>
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

          {/* Row 2: Call-Sign Input (Clean, without blue tick) */}
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
