"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check, ShieldCheck, Flame, Gem } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("S-RANK");
  const [hunterClass, setHunterClass] = useState("AETHER SPRINTER");
  const [copiedId, setCopiedId] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // 3D Card Gyroscope State
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const hunterId = `#KA${(hunterName.length * 137).toString().padStart(5, "0").slice(0, 5)}`;
  const initials = (hunterName || "KA").replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "KA";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = (y / rect.height - 0.5) * -12;
    const rotY = (x / rect.width - 0.5) * 12;
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

  const rankConfig = {
    "S-RANK": {
      color: "#EF4444",
      gradient: "from-[#EF4444]/25 via-[#EF4444]/10 to-[#0A0C11]/80",
      border: "border-[#EF4444]/40",
      glow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      textColor: "text-[#EF4444]",
      starColor: "#EF4444",
      status: "AWAKENED",
      avatar: "/visuals/rank_s.jpg",
    },
    "A-RANK": {
      color: "#0A84FF",
      gradient: "from-[#0A84FF]/25 via-[#0A84FF]/10 to-[#0A0C11]/80",
      border: "border-[#0A84FF]/40",
      glow: "shadow-[0_0_30px_rgba(10,132,255,0.3)]",
      textColor: "text-[#0A84FF]",
      starColor: "#0A84FF",
      status: "ELITE",
      avatar: "/visuals/rank_a.jpg",
    },
    "B-RANK": {
      color: "#38BDF8",
      gradient: "from-[#38BDF8]/25 via-[#38BDF8]/10 to-[#0A0C11]/80",
      border: "border-[#38BDF8]/40",
      glow: "shadow-[0_0_30px_rgba(56,189,248,0.3)]",
      textColor: "text-[#38BDF8]",
      starColor: "#38BDF8",
      status: "ADVANCED",
      avatar: "/visuals/rank_b.jpg",
    },
    "C-RANK": {
      color: "#10B981",
      gradient: "from-[#10B981]/25 via-[#10B981]/10 to-[#0A0C11]/80",
      border: "border-[#10B981]/40",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      textColor: "text-[#10B981]",
      starColor: "#10B981",
      status: "STABLE",
      avatar: "/visuals/rank_c.jpg",
    },
    "D-RANK": {
      color: "#F59E0B",
      gradient: "from-[#F59E0B]/25 via-[#F59E0B]/10 to-[#0A0C11]/80",
      border: "border-[#F59E0B]/40",
      glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
      textColor: "text-[#F59E0B]",
      starColor: "#F59E0B",
      status: "NOVICE",
      avatar: "/visuals/rank_d.jpg",
    },
    "E-RANK": {
      color: "#86868B",
      gradient: "from-white/15 via-white/5 to-[#0A0C11]/80",
      border: "border-white/20",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.1)]",
      textColor: "text-[#86868B]",
      starColor: "#86868B",
      status: "INITIATE",
      avatar: "/visuals/rank_e.jpg",
    },
  };

  const currentRank = rankConfig[hunterRank];

  // High-Resolution 1200x680 PNG Card Generator
  const handleDownloadCard = async () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 680;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Dark Luxe Obsidian Bezel Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 680);
      bgGrad.addColorStop(0, "#0E1118");
      bgGrad.addColorStop(0.5, "#07080C");
      bgGrad.addColorStop(1, "#020305");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 680);

      // Outer Smooth Rounded Bezel Border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
      ctx.lineWidth = 3;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(10, 10, 1180, 660, 36);
        ctx.stroke();
      } else {
        ctx.strokeRect(10, 10, 1180, 660);
      }

      // Top-Left Cyan Ambient Rim Glow
      const cyanRim = ctx.createLinearGradient(0, 0, 400, 0);
      cyanRim.addColorStop(0, "rgba(10, 132, 255, 0.6)");
      cyanRim.addColorStop(1, "transparent");
      ctx.fillStyle = cyanRim;
      ctx.fillRect(10, 10, 300, 4);

      // Top-Right Rank Glow Rim
      const rankRim = ctx.createLinearGradient(800, 0, 1200, 0);
      rankRim.addColorStop(0, "transparent");
      rankRim.addColorStop(1, currentRank.color);
      ctx.fillStyle = rankRim;
      ctx.fillRect(900, 10, 280, 4);

      // 2. Header
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 32px -apple-system, sans-serif";
      ctx.letterSpacing = "6px";
      ctx.fillText("A R I S E", 60, 75);

      ctx.fillStyle = "#EF4444";
      ctx.beginPath();
      ctx.arc(225, 65, 5.5, 0, Math.PI * 2);
      ctx.fill();

      // HUNTER PROTOCOL / IDENTITY CARD
      ctx.fillStyle = "#86868B";
      ctx.font = "11px monospace";
      ctx.fillText("HUNTER PROTOCOL", 280, 62);
      ctx.fillText("IDENTITY CARD", 280, 78);

      // Right: REAL EFFORT / REAL PROGRESSION
      ctx.strokeStyle = "#404040";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(880, 68);
      ctx.lineTo(915, 68);
      ctx.stroke();

      ctx.fillStyle = "#86868B";
      ctx.font = "11px monospace";
      ctx.fillText("REAL EFFORT", 930, 62);
      ctx.fillText("REAL PROGRESSION", 930, 78);

      // 3. Left Avatar Frame Box
      const avatarX = 60;
      const avatarY = 120;
      const avatarW = 240;
      const avatarH = 370;

      ctx.fillStyle = "#0A0D14";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(avatarX, avatarY, avatarW, avatarH, 24);
        ctx.fill();
        ctx.strokeStyle = "rgba(10, 132, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillRect(avatarX, avatarY, avatarW, avatarH);
      }

      // Preload & Draw Avatar Image before proceeding
      try {
        const avatarImg = new Image();
        avatarImg.crossOrigin = "anonymous";
        await new Promise((resolve) => {
          avatarImg.onload = () => resolve(true);
          avatarImg.onerror = () => resolve(false);
          avatarImg.src = currentRank.avatar;
        });

        ctx.save();
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(avatarX, avatarY, avatarW, avatarH, 24);
          ctx.clip();
        }
        ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH);
        
        // Gradient overlay to maintain text contrast
        const imgGrad = ctx.createLinearGradient(avatarX, avatarY, avatarX, avatarY + avatarH);
        imgGrad.addColorStop(0, "rgba(0,0,0,0.1)");
        imgGrad.addColorStop(0.6, "transparent");
        imgGrad.addColorStop(1, "rgba(4,5,8,0.92)");
        ctx.fillStyle = imgGrad;
        ctx.fillRect(avatarX, avatarY, avatarW, avatarH);
        ctx.restore();
      } catch {
        // Fallback
      }

      // Monogram in avatar box
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 52px -apple-system, sans-serif";
      ctx.fillText(initials, avatarX + 24, avatarY + avatarH - 55);

      ctx.fillStyle = "#86868B";
      ctx.font = "12px monospace";
      ctx.fillText("HUNTER", avatarX + 24, avatarY + avatarH - 30);

      // 4. Middle Content Area
      const midX = 340;

      // HUNTER ID #KA00731
      ctx.fillStyle = "#6E6E73";
      ctx.font = "12px monospace";
      ctx.fillText("HUNTER ID", midX, 150);

      ctx.fillStyle = "#A1A1AA";
      ctx.font = "bold 15px monospace";
      ctx.fillText(hunterId, midX, 175);

      // Hunter Name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px -apple-system, sans-serif";
      ctx.fillText(hunterName || "Karan_Awakened", midX, 235);

      // Class
      ctx.fillStyle = "#71717A";
      ctx.font = "12px monospace";
      ctx.fillText("CLASS", midX, 280);

      ctx.fillStyle = "#38BDF8";
      ctx.font = "14px -apple-system, sans-serif";
      ctx.fillText("✦", midX + 60, 280);

      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 13px monospace";
      ctx.fillText(hunterClass, midX + 85, 280);

      // Level & Progress Row
      ctx.fillStyle = "#86868B";
      ctx.font = "bold 14px monospace";
      ctx.fillText("LEVEL", midX, 335);

      ctx.fillStyle = "#0A84FF";
      ctx.font = "bold 20px -apple-system, sans-serif";
      ctx.fillText("28", midX + 58, 335);

      ctx.fillStyle = "#71717A";
      ctx.font = "12px monospace";
      ctx.fillText("24,850 / 50,000 XP", midX + 160, 335);

      ctx.fillStyle = "#A1A1AA";
      ctx.font = "bold 12px monospace";
      ctx.fillText("56%", midX + 410, 335);

      // XP Progress Bar
      const barX = midX;
      const barY = 355;
      const barW = 440;
      const barH = 10;

      ctx.fillStyle = "#131620";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW, barH, 5);
        ctx.fill();
      } else {
        ctx.fillRect(barX, barY, barW, barH);
      }

      // Active Blue Glow Bar
      const xpFillGrad = ctx.createLinearGradient(barX, barY, barX + barW * 0.56, barY);
      xpFillGrad.addColorStop(0, "#0A84FF");
      xpFillGrad.addColorStop(1, "#38BDF8");
      ctx.fillStyle = xpFillGrad;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW * 0.56, barH, 5);
        ctx.fill();
      } else {
        ctx.fillRect(barX, barY, barW * 0.56, barH);
      }

      // 5. 4-Metrics Capsule Card
      const capX = midX;
      const capY = 390;
      const capW = 440;
      const capH = 100;

      ctx.fillStyle = "#080A0F";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(capX, capY, capW, capH, 20);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.fillRect(capX, capY, capW, capH);
      }

      // Column 1: STREAK 48 DAYS
      ctx.fillStyle = "#EF4444";
      ctx.font = "18px -apple-system, sans-serif";
      ctx.fillText("🔥", capX + 20, capY + 58);

      ctx.fillStyle = "#6E6E73";
      ctx.font = "9px monospace";
      ctx.fillText("STREAK", capX + 50, capY + 40);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px -apple-system, sans-serif";
      ctx.fillText("48", capX + 50, capY + 65);

      ctx.fillStyle = "#6E6E73";
      ctx.font = "8px monospace";
      ctx.fillText("DAYS", capX + 50, capY + 80);

      // Column 2: AI REPS 14,850
      ctx.fillStyle = "#6E6E73";
      ctx.font = "9px monospace";
      ctx.fillText("AI REPS", capX + 140, capY + 40);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText("14,850", capX + 140, capY + 68);

      // Column 3: MANA 9,420
      ctx.fillStyle = "#0A84FF";
      ctx.font = "16px -apple-system, sans-serif";
      ctx.fillText("💎", capX + 240, capY + 58);

      ctx.fillStyle = "#6E6E73";
      ctx.font = "9px monospace";
      ctx.fillText("MANA", capX + 265, capY + 40);

      ctx.fillStyle = "#0A84FF";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText("9,420", capX + 265, capY + 68);

      // Column 4: STATUS AWAKENED
      ctx.fillStyle = currentRank.color;
      ctx.font = "16px -apple-system, sans-serif";
      ctx.fillText("✦", capX + 340, capY + 58);

      ctx.fillStyle = "#6E6E73";
      ctx.font = "9px monospace";
      ctx.fillText("STATUS", capX + 360, capY + 40);

      ctx.fillStyle = currentRank.color;
      ctx.font = "bold 11px monospace";
      ctx.fillText(currentRank.status, capX + 360, capY + 65);

      // 6. Right Rank Frame Box
      const rankX = 810;
      const rankY = 120;
      const rankW = 330;
      const rankH = 370;

      const rankBoxGrad = ctx.createLinearGradient(rankX, rankY, rankX + rankW, rankY + rankH);
      rankBoxGrad.addColorStop(0, currentRank.color + "25");
      rankBoxGrad.addColorStop(0.5, "#0B0E14");
      rankBoxGrad.addColorStop(1, "#040508");
      ctx.fillStyle = rankBoxGrad;

      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(rankX, rankY, rankW, rankH, 24);
        ctx.fill();
        ctx.strokeStyle = currentRank.color + "55";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else {
        ctx.fillRect(rankX, rankY, rankW, rankH);
      }

      // RANK title
      ctx.fillStyle = "#86868B";
      ctx.font = "11px monospace";
      ctx.fillText("RANK", rankX + 28, rankY + 40);

      // Center 4-Point 3D Star
      ctx.fillStyle = currentRank.starColor;
      ctx.font = "72px -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✦", rankX + rankW / 2, rankY + 180);

      // S-RANK
      ctx.fillStyle = currentRank.color;
      ctx.font = "bold 34px -apple-system, sans-serif";
      ctx.fillText(hunterRank, rankX + rankW / 2, rankY + 250);

      // AWAKENED
      ctx.fillStyle = "#86868B";
      ctx.font = "11px monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText(currentRank.status, rankX + rankW / 2, rankY + 285);
      ctx.textAlign = "left";

      // 7. Footer
      const footY = 560;

      // Sovereign Protocol
      ctx.fillStyle = "#F5F5F7";
      ctx.font = "18px -apple-system, sans-serif";
      ctx.fillText("🛡️", 60, footY + 20);

      ctx.fillStyle = "#D4D4D8";
      ctx.font = "11px monospace";
      ctx.fillText("SOVEREIGN PROTOCOL", 95, footY + 12);

      ctx.fillStyle = "#6E6E73";
      ctx.font = "10px monospace";
      ctx.fillText("100% ON-DEVICE ENCRYPTED", 95, footY + 28);

      // Center Version Line
      ctx.strokeStyle = "#27272A";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(560, footY);
      ctx.lineTo(560, footY + 36);
      ctx.stroke();

      ctx.fillStyle = "#86868B";
      ctx.font = "11px monospace";
      ctx.fillText("ARISE-HUNTER-001", 580, footY + 12);

      ctx.fillStyle = "#52525B";
      ctx.font = "10px monospace";
      ctx.fillText("VER 1.0.0", 580, footY + 28);

      // Right QR Code representation
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(1030, footY - 8, 44, 44);
      ctx.fillStyle = "#000000";
      ctx.fillRect(1034, footY - 4, 12, 12);
      ctx.fillRect(1058, footY - 4, 12, 12);
      ctx.fillRect(1034, footY + 20, 12, 12);
      ctx.fillRect(1052, footY + 14, 8, 8);

      ctx.fillStyle = "#86868B";
      ctx.font = "10px monospace";
      ctx.fillText("SCAN TO VIEW", 1085, footY + 12);
      ctx.fillText("HUNTER PROFILE", 1085, footY + 28);

      // Trigger Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_Hunter_Card_${(hunterName || "Hunter").replace(/\s+/g, "_")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: [currentRank.color, "#0A84FF", "#FFFFFF"],
      });
    }

    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section id="hunter-card" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Mint Your Hunter Card.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Type your hunter call-sign below. Your 3D titanium identity card dynamically updates in real time with custom rank portraits, specular lighting and instant high-resolution PNG export.
          </p>
        </div>

        {/* Live Card + Customizer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Live 3D Titanium Card (Matches Reference Image Exactly) */}
          <div className="lg:col-span-8 flex justify-center perspective-[1200px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="w-full max-w-3xl p-6 sm:p-9 rounded-[36px] bg-gradient-to-br from-[#0E1118] via-[#07080C] to-[#020305] border border-white/[0.15] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.98),inset_0_1px_1px_rgba(255,255,255,0.2)] relative overflow-hidden space-y-6 cursor-grab active:cursor-grabbing group"
            >
              {/* Dynamic 3D Specular Light Glare following cursor */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200 group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle 450px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(255,255,255,0.15), transparent 70%)`,
                }}
              />

              {/* Cyan Top-Left Rim Accent */}
              <div className="absolute top-0 left-8 w-48 h-[2px] bg-gradient-to-r from-[#0A84FF] to-transparent pointer-events-none" />

              {/* Rank Top-Right Rim Accent */}
              <div
                className="absolute top-0 right-8 w-48 h-[2px] bg-gradient-to-l from-current to-transparent pointer-events-none"
                style={{ color: currentRank.color }}
              />

              {/* 1. Header Row */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-xl tracking-[0.25em] text-[#FFFFFF]">
                      A R I S E
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  </div>
                  <div className="font-mono text-[9px] text-[#86868B] uppercase leading-tight border-l border-white/[0.1] pl-3">
                    <div>HUNTER PROTOCOL</div>
                    <div>IDENTITY CARD</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] text-[#86868B] uppercase">
                  <span className="w-4 h-[1px] bg-white/30" />
                  <div className="text-right">
                    <div>REAL EFFORT</div>
                    <div>REAL PROGRESSION</div>
                  </div>
                </div>
              </div>

              {/* 2. Main 3-Column Core Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* Left: Hunter Avatar Box with Dynamic Rank Portrait */}
                <div className="md:col-span-4 rounded-2xl bg-[#0A0D14] border border-[#0A84FF]/40 p-4 relative overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[300px] shadow-[0_0_30px_rgba(10,132,255,0.15)] group/avatar">
                  {/* Generated Rank Avatar Image */}
                  <img
                    src={currentRank.avatar}
                    alt={`${hunterRank} Avatar`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-transform duration-500 group-hover/avatar:scale-105"
                  />

                  {/* Gradient Overlay for bottom text clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-transparent to-[#000000]/30 pointer-events-none" />

                  {/* Character Monogram Art */}
                  <div className="relative z-10 space-y-1">
                    <div
                      className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] animate-pulse"
                      style={{ backgroundColor: currentRank.color, color: currentRank.color }}
                    />
                  </div>

                  {/* Bottom KA / HUNTER Label */}
                  <div className="relative z-10 space-y-0.5">
                    <div className="font-sans font-extrabold text-4xl text-[#FFFFFF] tracking-tight drop-shadow-md">
                      {initials}
                    </div>
                    <div className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest font-semibold">
                      {hunterRank} HUNTER
                    </div>
                  </div>
                </div>

                {/* Middle: Name, Level, Progress, 4-Stats */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    {/* Hunter ID with copy button */}
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#6E6E73]">
                      <span>HUNTER ID</span>
                      <button
                        onClick={handleCopyId}
                        className="text-[#A1A1AA] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{hunterId}</span>
                        {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>

                    {/* Hunter Name */}
                    <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight truncate">
                      {hunterName || "Karan_Awakened"}
                    </h3>

                    {/* Class */}
                    <div className="flex items-center gap-2 font-mono text-xs text-[#86868B] pt-0.5">
                      <span>CLASS</span>
                      <span className="text-[#38BDF8]">✦</span>
                      <span className="text-[#F5F5F7] font-semibold">{hunterClass}</span>
                    </div>
                  </div>

                  {/* Level & XP Progress */}
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between font-mono text-xs">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#86868B]">LEVEL</span>
                        <span className="text-[#0A84FF] font-bold text-base">28</span>
                      </div>
                      <span className="text-[10px] text-[#71717A]">24,850 / 50,000 XP</span>
                      <span className="text-[10px] text-[#A1A1AA] font-bold">56%</span>
                    </div>
                    <div className="w-full h-2 bg-[#131620] rounded-full overflow-hidden p-0.5">
                      <div className="w-[56%] h-full bg-gradient-to-r from-[#0A84FF] to-[#38BDF8] rounded-full shadow-[0_0_10px_#0A84FF]" />
                    </div>
                  </div>

                  {/* 4-Stats Pill Box */}
                  <div className="grid grid-cols-4 gap-2 p-3 rounded-2xl bg-[#080A0F] border border-white/[0.08] text-center font-mono">
                    <div className="space-y-0.5">
                      <div className="text-[8px] text-[#6E6E73] uppercase">STREAK</div>
                      <div className="text-sm font-bold text-white flex items-center justify-center gap-0.5">
                        <Flame className="w-3 h-3 text-[#EF4444]" />
                        <span>48</span>
                      </div>
                      <div className="text-[7px] text-[#6E6E73]">DAYS</div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[8px] text-[#6E6E73] uppercase">AI REPS</div>
                      <div className="text-xs font-bold text-white pt-1">
                        14,850
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[8px] text-[#6E6E73] uppercase">MANA</div>
                      <div className="text-xs font-bold text-[#0A84FF] pt-1 flex items-center justify-center gap-0.5">
                        <Gem className="w-2.5 h-2.5" />
                        <span>9,420</span>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[8px] text-[#6E6E73] uppercase">STATUS</div>
                      <div className={`text-[10px] font-bold pt-1 ${currentRank.textColor}`}>
                        {currentRank.status}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Rank Box */}
                <div
                  className={`md:col-span-3 rounded-2xl bg-gradient-to-b ${currentRank.gradient} border ${currentRank.border} p-5 flex flex-col justify-between items-center text-center shadow-lg relative overflow-hidden min-h-[200px]`}
                >
                  <div className="w-full flex justify-between items-center font-mono text-[10px] text-[#86868B]">
                    <span>RANK</span>
                  </div>

                  {/* 3D 4-Point Glowing Star */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl my-2"
                    style={{ color: currentRank.starColor }}
                  >
                    ✦
                  </motion.div>

                  <div className="space-y-0.5">
                    <div className={`font-sans font-bold text-2xl tracking-tight ${currentRank.textColor}`}>
                      {hunterRank}
                    </div>
                    <div className="font-mono text-[9px] text-[#86868B] uppercase tracking-widest">
                      {currentRank.status}
                    </div>
                  </div>
                </div>

              </div>

              {/* 3. Bottom Footer */}
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/[0.06] font-mono text-[10px] text-[#6E6E73]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#F5F5F7]" />
                  <div className="space-y-0.5">
                    <div className="text-[#D4D4D8] font-semibold uppercase">SOVEREIGN PROTOCOL</div>
                    <div>100% ON-DEVICE ENCRYPTED</div>
                  </div>
                </div>

                <div className="hidden sm:block border-l border-white/[0.08] pl-4 space-y-0.5">
                  <div className="text-[#86868B]">ARISE-HUNTER-001</div>
                  <div className="text-[#52525B]">VER 1.0.0</div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-white rounded p-0.5 flex flex-wrap gap-0.5">
                    <div className="w-2.5 h-2.5 bg-black" />
                    <div className="w-2.5 h-2.5 bg-black ml-auto" />
                    <div className="w-2.5 h-2.5 bg-black" />
                    <div className="w-2.5 h-2.5 bg-black ml-auto" />
                  </div>
                  <div className="space-y-0.5 text-right">
                    <div className="text-[#86868B]">SCAN TO VIEW</div>
                    <div>HUNTER PROFILE</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Live Customization Inputs */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Input 1: Hunter Name */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Hunter Call-Sign
              </label>
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={24}
                placeholder="e.g. Karan_Awakened"
                className="w-full px-5 py-4 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#0A84FF] transition-colors"
              />
            </div>

            {/* Input 2: Rank Selector */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Hunter Rank Tier
              </label>
              <div className="grid grid-cols-6 gap-1.5">
                {(["E-RANK", "D-RANK", "C-RANK", "B-RANK", "A-RANK", "S-RANK"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setHunterRank(r)}
                    className={`py-2.5 rounded-xl font-mono text-[11px] font-bold transition-all cursor-pointer border text-center ${
                      hunterRank === r
                        ? "bg-[#161820] border-[#0A84FF] text-[#F5F5F7] shadow-[0_0_12px_rgba(10,132,255,0.25)]"
                        : "bg-[#08090C] border-white/[0.06] text-[#86868B] hover:border-white/[0.15]"
                    }`}
                  >
                    {r.split("-")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Class Specialty */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Specialty Class
              </label>
              <select
                value={hunterClass}
                onChange={(e) => setHunterClass(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#0A84FF] transition-colors cursor-pointer"
              >
                <option value="AETHER SPRINTER">AETHER SPRINTER (Endurance & 10KM Speed Runs)</option>
                <option value="SHADOW VANGUARD">SHADOW VANGUARD (Push-ups & Chest Power)</option>
                <option value="MONARCH BERSERKER">MONARCH BERSERKER (Full Calisthenics Matrix)</option>
                <option value="AEGIS GUARDIAN">AEGIS GUARDIAN (Focus & Strict App Defense)</option>
                <option value="VOID BLADE">VOID BLADE (High Velocity HIIT Reps)</option>
              </select>
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={handleDownloadCard}
                disabled={isDownloading}
                className="w-full py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloading ? "Generating High-Res PNG..." : "Download Hunter Card (PNG)"}</span>
              </button>
              <p className="text-[11px] font-mono text-[#6E6E73] text-center mt-2">
                1200×680 HD PNG export with custom rank artwork.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
