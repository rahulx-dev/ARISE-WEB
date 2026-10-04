"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("A-RANK");
  const [selectedAvatar, setSelectedAvatar] = useState("/visuals/rank_a.jpg");
  const [hunterClass, setHunterClass] = useState("VOID BLADE");
  const [hunterMission, setHunterMission] = useState("Stronger Than Yesterday.");
  const [hunterQuote, setHunterQuote] = useState("DISCIPLINE TURNS POTENTIAL INTO REALITY.");
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

  const rankConfig = {
    "S-RANK": {
      letter: "S",
      color: "#EF4444",
      accentCyan: "#00E5FF",
      glowColor: "rgba(239, 68, 68, 0.45)",
      textColor: "text-[#EF4444]",
      status: "SOVEREIGN",
      defaultAvatar: "/visuals/rank_s.jpg",
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
      accentCyan: "#00E5FF",
      glowColor: "rgba(0, 229, 255, 0.45)",
      textColor: "text-[#00E5FF]",
      status: "ELITE",
      defaultAvatar: "/visuals/rank_a.jpg",
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
      accentCyan: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.45)",
      textColor: "text-[#38BDF8]",
      status: "ADVANCED",
      defaultAvatar: "/visuals/rank_b.jpg",
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
      accentCyan: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.45)",
      textColor: "text-[#10B981]",
      status: "STABLE",
      defaultAvatar: "/visuals/rank_c.jpg",
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
      accentCyan: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.45)",
      textColor: "text-[#F59E0B]",
      status: "NOVICE",
      defaultAvatar: "/visuals/rank_d.jpg",
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
      accentCyan: "#86868B",
      glowColor: "rgba(255, 255, 255, 0.2)",
      textColor: "text-[#86868B]",
      status: "INITIATE",
      defaultAvatar: "/visuals/rank_e.jpg",
      level: "04",
      streak: "07",
      mana: "850",
      crystals: "420",
      xpText: "1,200 / 5,000 XP",
      xpPercent: "24%",
      xpRatio: 0.24,
    },
  };

  const currentRank = rankConfig[hunterRank];

  const avatarGallery = [
    { id: "rank_a", title: "A-Rank Void Blade", src: "/visuals/rank_a.jpg", tag: "Original" },
    { id: "female_crimson", title: "Crimson Sovereign", src: "/visuals/female_hunter_crimson.jpg", tag: "Female" },
    { id: "female_shadow", title: "Shadow Valkyrie", src: "/visuals/female_hunter_shadow.jpg", tag: "Female" },
    { id: "bloodred", title: "Bloodred Commander", src: "/visuals/bloodred_commander.jpg", tag: "Knight" },
    { id: "rank_s", title: "S-Rank Monarch", src: "/visuals/rank_s.jpg", tag: "Monarch" },
    { id: "female_1", title: "Golden Valkyrie", src: "/visuals/female_hunter_1.jpg", tag: "Female" },
    { id: "rank_b", title: "B-Rank Assassin", src: "/visuals/rank_b.jpg", tag: "Assassin" },
    { id: "rank_c", title: "C-Rank Vanguard", src: "/visuals/rank_c.jpg", tag: "Vanguard" },
    { id: "rank_d", title: "D-Rank Blade", src: "/visuals/rank_d.jpg", tag: "Warrior" },
    { id: "rank_e", title: "E-Rank Initiate", src: "/visuals/rank_e.jpg", tag: "Awakened" },
  ];

  const handleRankSelect = (r: typeof hunterRank) => {
    setHunterRank(r);
    // If avatar was default for previous rank, switch to new rank's default
    if (selectedAvatar === currentRank.defaultAvatar) {
      setSelectedAvatar(rankConfig[r].defaultAvatar);
    }
  };

  // 100% Same-to-Same High-Resolution 1200x680 PNG Card Generator
  const handleDownloadCard = async () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 680;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Dark Luxe Obsidian Beveled Base
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 680);
      bgGrad.addColorStop(0, "#0E121A");
      bgGrad.addColorStop(0.4, "#080A10");
      bgGrad.addColorStop(1, "#030407");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 680);

      // Chamfered Sci-Fi Chassis Outer Border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
      ctx.lineWidth = 2.5;
      const corner = 28;
      ctx.beginPath();
      ctx.moveTo(corner + 10, 14);
      ctx.lineTo(1200 - corner - 10, 14);
      ctx.lineTo(1200 - 14, corner + 10);
      ctx.lineTo(1200 - 14, 680 - corner - 10);
      ctx.lineTo(1200 - corner - 10, 680 - 14);
      ctx.lineTo(corner + 10, 680 - 14);
      ctx.lineTo(14, 680 - corner - 10);
      ctx.lineTo(14, corner + 10);
      ctx.closePath();
      ctx.stroke();

      // Cyan Glowing Corner LED Accents
      ctx.strokeStyle = "#00E5FF";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#00E5FF";
      ctx.shadowBlur = 12;

      // Top-Left Chamfer LED
      ctx.beginPath();
      ctx.moveTo(14, corner + 24);
      ctx.lineTo(14, corner + 10);
      ctx.lineTo(corner + 10, 14);
      ctx.lineTo(corner + 28, 14);
      ctx.stroke();

      // Top-Right Chamfer LED
      ctx.beginPath();
      ctx.moveTo(1200 - corner - 28, 14);
      ctx.lineTo(1200 - corner - 10, 14);
      ctx.lineTo(1200 - 14, corner + 10);
      ctx.lineTo(1200 - 14, corner + 24);
      ctx.stroke();

      // Bottom-Left Chamfer LED
      ctx.beginPath();
      ctx.moveTo(14, 680 - corner - 24);
      ctx.lineTo(14, 680 - corner - 10);
      ctx.lineTo(corner + 10, 680 - 14);
      ctx.lineTo(corner + 28, 680 - 14);
      ctx.stroke();

      // Bottom-Right Chamfer LED
      ctx.beginPath();
      ctx.moveTo(1200 - corner - 28, 680 - 14);
      ctx.lineTo(1200 - corner - 10, 680 - 14);
      ctx.lineTo(1200 - 14, 680 - corner - 10);
      ctx.lineTo(1200 - 14, 680 - corner - 24);
      ctx.stroke();

      // Reset Shadow
      ctx.shadowBlur = 0;

      // Mechanical side notched tabs
      ctx.fillStyle = "rgba(0, 229, 255, 0.4)";
      ctx.fillRect(8, 280, 5, 80);
      ctx.fillRect(1187, 280, 5, 80);

      // 2. Header
      // "A R I S E"
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 26px -apple-system, sans-serif";
      ctx.fillText("A  R  I  S  E", 64, 68);

      // Blue Glowing Orb
      ctx.fillStyle = "#00E5FF";
      ctx.shadowColor = "#00E5FF";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(206, 60, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Vertical Divider Line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(234, 48);
      ctx.lineTo(234, 76);
      ctx.stroke();

      // HUNTER PROTOCOL / IDENTITY CARD
      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("HUNTER PROTOCOL", 250, 57);
      ctx.fillText("IDENTITY CARD", 250, 72);

      // Right Header: Line + REAL EFFORT / REAL PROGRESSION
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(940, 62);
      ctx.lineTo(974, 62);
      ctx.stroke();

      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("REAL EFFORT", 990, 57);
      ctx.fillText("REAL PROGRESSION", 990, 72);

      // 3. Left Hunter Avatar Frame Box
      const avX = 64;
      const avY = 110;
      const avW = 330;
      const avH = 430;

      // Frame background
      ctx.fillStyle = "#070A11";
      ctx.fillRect(avX, avY, avW, avH);

      // Cyan High-Tech Chamfered Border
      ctx.strokeStyle = "rgba(0, 229, 255, 0.7)";
      ctx.lineWidth = 2;
      ctx.strokeRect(avX, avY, avW, avH);

      // Angled corner cybernetic brackets
      ctx.strokeStyle = "#00E5FF";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(avX, avY + 28);
      ctx.lineTo(avX, avY);
      ctx.lineTo(avX + 28, avY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(avX + avW - 28, avY + avH);
      ctx.lineTo(avX + avW, avY + avH);
      ctx.lineTo(avX + avW, avY + avH - 28);
      ctx.stroke();

      // Preload & Draw Avatar Image
      try {
        const avatarImg = new Image();
        avatarImg.crossOrigin = "anonymous";
        await new Promise((resolve) => {
          avatarImg.onload = () => resolve(true);
          avatarImg.onerror = () => resolve(false);
          avatarImg.src = selectedAvatar;
        });

        ctx.save();
        ctx.beginPath();
        ctx.rect(avX + 2, avY + 2, avW - 4, avH - 4);
        ctx.clip();
        ctx.drawImage(avatarImg, avX, avY, avW, avH);

        // Vignette & gradient for text visibility
        const imgGrad = ctx.createLinearGradient(avX, avY, avX, avY + avH);
        imgGrad.addColorStop(0, "rgba(0,0,0,0.3)");
        imgGrad.addColorStop(0.5, "transparent");
        imgGrad.addColorStop(1, "rgba(4, 7, 13, 0.95)");
        ctx.fillStyle = imgGrad;
        ctx.fillRect(avX, avY, avW, avH);
        ctx.restore();
      } catch {
        // Fallback
      }

      // Top-Left Class Badge in avatar
      ctx.fillStyle = "#00E5FF";
      ctx.font = "12px sans-serif";
      ctx.fillText("✦", avX + 18, avY + 28);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 9px monospace";
      ctx.fillText("VOID", avX + 34, avY + 24);
      ctx.fillText("BLADE", avX + 34, avY + 34);
      ctx.fillStyle = "#828F9E";
      ctx.fillText("CLASS", avX + 34, avY + 44);

      // KA Monogram
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "extrabold 56px -apple-system, sans-serif";
      ctx.fillText(initials, avX + 22, avY + avH - 95);

      // Rank Label under monogram
      ctx.fillStyle = "#00E5FF";
      ctx.font = "bold 12px monospace";
      ctx.letterSpacing = "1.5px";
      ctx.fillText(`${hunterRank} HUNTER`, avX + 24, avY + avH - 74);

      // Quote & Signature
      ctx.fillStyle = "#828F9E";
      ctx.font = "italic 8px monospace";
      ctx.fillText(`"${hunterQuote}"`, avX + 24, avY + avH - 50);

      // Signature scribble curve
      ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(avX + 200, avY + avH - 50);
      ctx.bezierCurveTo(avX + 215, avY + avH - 60, avX + 225, avY + avH - 42, avX + 245, avY + avH - 52);
      ctx.bezierCurveTo(avX + 255, avY + avH - 62, avX + 270, avY + avH - 46, avX + 290, avY + avH - 54);
      ctx.stroke();

      // Bottom-Right Avatar Rank Triangle Crest
      ctx.fillStyle = "#00E5FF";
      ctx.beginPath();
      ctx.moveTo(avX + avW - 35, avY + avH - 20);
      ctx.lineTo(avX + avW - 20, avY + avH - 45);
      ctx.lineTo(avX + avW - 5, avY + avH - 20);
      ctx.closePath();
      ctx.fill();

      // 4. Middle Content Area
      const midX = 428;

      // HUNTER ID #KA01918
      ctx.fillStyle = "#828F9E";
      ctx.font = "11px monospace";
      ctx.fillText("HUNTER ID", midX, 138);

      ctx.fillStyle = "#121722";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(midX + 74, 122, 105, 24, 6);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
        ctx.stroke();
      } else {
        ctx.fillRect(midX + 74, 122, 105, 24);
      }

      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 12px monospace";
      ctx.fillText(hunterId, midX + 84, 138);

      // Copy icon representation
      ctx.strokeStyle = "#828F9E";
      ctx.strokeRect(midX + 158, 128, 10, 11);

      // Name + Verified Badge
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 38px -apple-system, sans-serif";
      ctx.fillText(hunterName || "Karan_Awakened", midX, 192);

      const nameMetrics = ctx.measureText(hunterName || "Karan_Awakened");
      const badgeX = midX + nameMetrics.width + 14;
      const badgeY = 178;

      // Blue Verified Badge Circle
      ctx.fillStyle = "#0095FF";
      ctx.beginPath();
      ctx.arc(badgeX + 10, badgeY, 11, 0, Math.PI * 2);
      ctx.fill();

      // Checkmark in badge
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(badgeX + 6, badgeY);
      ctx.lineTo(badgeX + 9, badgeY + 4);
      ctx.lineTo(badgeX + 15, badgeY - 3);
      ctx.stroke();

      // Subtitle: Diamond + VOID BLADE • A-RANK HUNTER
      ctx.fillStyle = "#00E5FF";
      ctx.font = "14px sans-serif";
      ctx.fillText("✦", midX, 226);

      ctx.fillStyle = "#00E5FF";
      ctx.font = "bold 12px monospace";
      ctx.fillText(`${hunterClass}  •  ${hunterRank} HUNTER`, midX + 20, 226);

      // Level & XP Row
      ctx.fillStyle = "#828F9E";
      ctx.font = "11px monospace";
      ctx.fillText("LEVEL", midX, 280);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 34px -apple-system, sans-serif";
      ctx.fillText(currentRank.level, midX + 54, 282);

      ctx.fillStyle = "#717B8A";
      ctx.font = "12px monospace";
      ctx.fillText(currentRank.xpText, midX + 140, 280);

      ctx.fillStyle = "#E4E8F0";
      ctx.font = "bold 12px monospace";
      ctx.fillText(currentRank.xpPercent, midX + 380, 280);

      // Glowing XP Capsule Bar
      const barX = midX;
      const barY = 296;
      const barW = 420;
      const barH = 14;

      ctx.fillStyle = "#0E131E";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW, barH, 7);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();
      } else {
        ctx.fillRect(barX, barY, barW, barH);
      }

      const activeBarW = barW * currentRank.xpRatio;
      const barGrad = ctx.createLinearGradient(barX, barY, barX + activeBarW, barY);
      barGrad.addColorStop(0, "#0070F3");
      barGrad.addColorStop(1, "#00E5FF");
      ctx.fillStyle = barGrad;
      ctx.shadowColor = "#00E5FF";
      ctx.shadowBlur = 10;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, barY, activeBarW, barH, 7);
        ctx.fill();
      } else {
        ctx.fillRect(barX, barY, activeBarW, barH);
      }
      ctx.shadowBlur = 0;

      // 3 Telemetry Pods (Equal 3-column row)
      const podY = 330;
      const podW = 132;
      const podH = 96;

      // Pod 1: Streak
      const pod1X = midX;
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pod1X, podY, podW, podH, 14);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.stroke();
      } else {
        ctx.fillRect(pod1X, podY, podW, podH);
      }

      ctx.fillStyle = "#FF3B30";
      ctx.font = "24px -apple-system, sans-serif";
      ctx.fillText("🔥", pod1X + 16, podY + 54);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 22px -apple-system, sans-serif";
      ctx.fillText(currentRank.streak, pod1X + 54, podY + 44);

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("DAYS", pod1X + 54, podY + 58);
      ctx.fillText("STREAK", pod1X + 54, podY + 76);

      // Pod 2: Mana + Frequency bars
      const pod2X = midX + 144;
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pod2X, podY, podW, podH, 14);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.stroke();
      } else {
        ctx.fillRect(pod2X, podY, podW, podH);
      }

      ctx.fillStyle = "#00E5FF";
      ctx.font = "20px -apple-system, sans-serif";
      ctx.fillText("🧬", pod2X + 14, podY + 54);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText(currentRank.mana, pod2X + 46, podY + 44);

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("MANA", pod2X + 46, podY + 58);

      // Cyan equalizer bars
      const eqHeights = [5, 10, 14, 8, 12];
      ctx.fillStyle = "#00E5FF";
      eqHeights.forEach((h, i) => {
        ctx.fillRect(pod2X + 46 + i * 8, pod2X + podH - 12 - h, 4, h);
      });

      // Pod 3: Crystals + Frequency bars
      const pod3X = midX + 288;
      ctx.fillStyle = "#0A0D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pod3X, podY, podW, podH, 14);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.stroke();
      } else {
        ctx.fillRect(pod3X, podY, podW, podH);
      }

      ctx.fillStyle = "#38BDF8";
      ctx.font = "20px -apple-system, sans-serif";
      ctx.fillText("💎", pod3X + 14, podY + 54);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText(currentRank.crystals, pod3X + 46, podY + 44);

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("CRYSTALS", pod3X + 46, podY + 58);

      // Blue equalizer bars
      const eqHeights3 = [8, 14, 6, 12, 16];
      ctx.fillStyle = "#38BDF8";
      eqHeights3.forEach((h, i) => {
        ctx.fillRect(pod3X + 46 + i * 8, pod3X + podH - 12 - h, 4, h);
      });

      // Current Mission Capsule
      const misY = 444;
      const misW = 420;
      const misH = 56;
      ctx.fillStyle = "#090D15";
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(barX, misY, misW, misH, 14);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();
      } else {
        ctx.fillRect(barX, misY, misW, misH);
      }

      // Mission Hex Crest
      ctx.strokeStyle = "#00E5FF";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const hx = barX + 24;
      const hy = misY + 28;
      ctx.moveTo(hx, hy - 14);
      ctx.lineTo(hx + 12, hy - 7);
      ctx.lineTo(hx + 12, hy + 7);
      ctx.lineTo(hx, hy + 14);
      ctx.lineTo(hx - 12, hy + 7);
      ctx.lineTo(hx - 12, hy - 7);
      ctx.closePath();
      ctx.stroke();

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("CURRENT MISSION", barX + 48, misY + 24);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 13px -apple-system, sans-serif";
      ctx.fillText(hunterMission, barX + 48, misY + 42);

      ctx.fillStyle = "#828F9E";
      ctx.font = "bold 16px monospace";
      ctx.fillText(">", barX + misW - 24, misY + 34);

      // 5. Right Panel: 3D Chrome Rank Totem Banner with V-Ribbon Bottom
      const rkX = 890;
      const rkY = 110;
      const rkW = 246;
      const rkH = 430;

      // Outer frame with Pointed V-Ribbon Cut
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rkX, rkY);
      ctx.lineTo(rkX + rkW, rkY);
      ctx.lineTo(rkX + rkW, rkY + rkH - 36);
      ctx.lineTo(rkX + rkW / 2, rkY + rkH);
      ctx.lineTo(rkX, rkY + rkH - 36);
      ctx.closePath();
      ctx.clip();

      // Deep Icy Crystalline Gradient Background
      const rkGrad = ctx.createLinearGradient(rkX, rkY, rkX + rkW, rkY + rkH);
      rkGrad.addColorStop(0, "#0E2442");
      rkGrad.addColorStop(0.3, "#0A1728");
      rkGrad.addColorStop(0.7, "#060A14");
      rkGrad.addColorStop(1, "#020408");
      ctx.fillStyle = rkGrad;
      ctx.fill();

      // Crystalline frost highlights
      const frostGrad = ctx.createRadialGradient(rkX + rkW / 2, rkY + 160, 10, rkX + rkW / 2, rkY + 160, 120);
      frostGrad.addColorStop(0, "rgba(0, 229, 255, 0.25)");
      frostGrad.addColorStop(1, "transparent");
      ctx.fillStyle = frostGrad;
      ctx.fillRect(rkX, rkY, rkW, rkH);

      // Ribbon Outer Glow Border
      ctx.strokeStyle = "rgba(0, 229, 255, 0.6)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Top Diamond Star
      ctx.fillStyle = "#E4E8F0";
      ctx.font = "18px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✧", rkX + rkW / 2, rkY + 36);

      // Huge 3D Chrome Faceted Rank Letter
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#00E5FF";
      ctx.shadowBlur = 18;
      ctx.font = "900 84px -apple-system, sans-serif";
      ctx.fillText(currentRank.letter, rkX + rkW / 2, rkY + 165);
      ctx.shadowBlur = 0;

      // Faceted chrome inner star
      ctx.fillStyle = "#00E5FF";
      ctx.font = "16px sans-serif";
      ctx.fillText("✦", rkX + rkW / 2, rkY + 195);

      // Rank Title
      ctx.fillStyle = currentRank.color;
      ctx.font = "bold 28px -apple-system, sans-serif";
      ctx.letterSpacing = "2px";
      ctx.fillText(hunterRank, rkX + rkW / 2, rkY + 235);

      // Subtitle
      ctx.fillStyle = "#828F9E";
      ctx.font = "bold 11px monospace";
      ctx.letterSpacing = "3px";
      ctx.fillText(currentRank.status, rkX + rkW / 2, rkY + 262);

      // Vertical Creed at bottom of ribbon
      ctx.fillStyle = "#5E6977";
      ctx.font = "9px monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("DISCIPLINE", rkX + rkW / 2, rkY + 315);
      ctx.fillText("PROGRESS", rkX + rkW / 2, rkY + 332);
      ctx.fillText("FREEDOM", rkX + rkW / 2, rkY + 349);

      ctx.restore();
      ctx.textAlign = "left";

      // 6. Bottom Footer
      const footY = 578;

      // Sovereign Protocol
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "18px -apple-system, sans-serif";
      ctx.fillText("🛡️", 64, footY + 22);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 10px monospace";
      ctx.fillText("SOVEREIGN PROTOCOL", 98, footY + 14);

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("100% ON-DEVICE ENCRYPTED", 98, footY + 28);

      // Center Divider & Version
      ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(520, footY + 4);
      ctx.lineTo(520, footY + 32);
      ctx.stroke();

      ctx.fillStyle = "#828F9E";
      ctx.font = "10px monospace";
      ctx.fillText("ARISE-HUNTER-001", 540, footY + 14);
      ctx.fillStyle = "#56616F";
      ctx.fillText("VER 1.0.0", 540, footY + 28);

      ctx.beginPath();
      ctx.moveTo(760, footY + 4);
      ctx.lineTo(760, footY + 32);
      ctx.stroke();

      // Right 4-Grid Icon + Scan to view
      ctx.fillStyle = "#FFFFFF";
      const qrx = 1000;
      const qry = footY + 6;
      ctx.fillRect(qrx, qry, 7, 7);
      ctx.fillRect(qrx + 9, qry, 7, 7);
      ctx.fillRect(qrx, qry + 9, 7, 7);
      ctx.fillRect(qrx + 9, qry + 9, 7, 7);

      ctx.fillStyle = "#828F9E";
      ctx.font = "9px monospace";
      ctx.fillText("SCAN TO VIEW", qrx + 24, footY + 14);
      ctx.fillText("HUNTER PROFILE >", qrx + 24, footY + 28);

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
    <section id="hunter-card" className="bg-[#000000] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 select-none border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h1 data-h1-cursor className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F7] leading-tight cursor-default select-none">
            Mint Your Hunter Card.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Type your hunter call-sign below. Your 3D titanium identity card dynamically updates in real time with custom rank portraits, specular lighting and instant high-resolution PNG export.
          </p>
        </div>

        {/* Live Card + Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Live 3D Titanium Card (100% Matches Reference Image media_1791085168808.jpg) */}
          <div className="lg:col-span-8 flex justify-center perspective-[1400px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: "transform 0.12s ease-out",
              }}
              className="w-full max-w-4xl p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#0E121A] via-[#080A10] to-[#030407] border border-white/[0.18] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.98),0_0_50px_rgba(0,229,255,0.06)] relative overflow-hidden space-y-6 cursor-grab active:cursor-grabbing group"
            >
              {/* Dynamic 3D Specular Light Glare */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200 group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle 500px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(0, 229, 255, 0.12), transparent 70%)`,
                }}
              />

              {/* Sci-Fi Chamfer Corner LED Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00E5FF] shadow-[0_0_12px_#00E5FF] pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00E5FF] shadow-[0_0_12px_#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00E5FF] shadow-[0_0_12px_#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00E5FF] shadow-[0_0_12px_#00E5FF] pointer-events-none" />

              {/* Mechanical Side Notches */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-[#00E5FF]/50 shadow-[0_0_10px_#00E5FF] rounded-r pointer-events-none" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-[#00E5FF]/50 shadow-[0_0_10px_#00E5FF] rounded-l pointer-events-none" />

              {/* 1. Top Header Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-[0.25em] text-[#FFFFFF]">
                      A R I S E
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF] animate-pulse" />
                  </div>
                  <div className="h-5 w-[1px] bg-white/20 mx-1 hidden sm:block" />
                  <div className="font-mono text-[9px] text-[#828F9E] uppercase leading-tight hidden sm:block">
                    <div>HUNTER PROTOCOL</div>
                    <div>IDENTITY CARD</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[9px] text-[#828F9E] uppercase">
                  <span className="w-6 h-[1.5px] bg-white/30 hidden sm:block" />
                  <div className="text-right">
                    <div>REAL EFFORT</div>
                    <div>REAL PROGRESSION</div>
                  </div>
                </div>
              </div>

              {/* 2. Main 3-Column Core Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* Column 1: Left Hunter Avatar Frame (30%) */}
                <div className="md:col-span-4 rounded-2xl bg-[#070A11] border border-[#00E5FF]/60 shadow-[0_0_24px_rgba(0,229,255,0.2)] p-4 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[360px] group/avatar">
                  {/* Selected Avatar Image */}
                  <img
                    src={selectedAvatar}
                    alt={`${hunterName} Avatar`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover/avatar:scale-105"
                  />

                  {/* Gradient Vignette for Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04070D]/95 via-transparent to-[#04070D]/40 pointer-events-none" />

                  {/* Cybernetic Angled Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00E5FF] pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00E5FF] pointer-events-none" />

                  {/* Top-Left Class Badge */}
                  <div className="relative z-10 flex items-start gap-1.5 font-mono text-[9px] uppercase leading-tight drop-shadow-md">
                    <span className="text-[#00E5FF] text-xs">✦</span>
                    <div>
                      <div className="font-bold text-white">VOID</div>
                      <div className="font-bold text-white">BLADE</div>
                      <div className="text-[#828F9E]">CLASS</div>
                    </div>
                  </div>

                  {/* Bottom KA Monogram & Quote */}
                  <div className="relative z-10 space-y-1">
                    <div className="font-sans font-black text-4xl sm:text-5xl text-[#FFFFFF] tracking-tight drop-shadow-lg">
                      {initials}
                    </div>
                    <div className="font-mono text-[10px] text-[#00E5FF] uppercase tracking-widest font-bold">
                      {hunterRank} HUNTER
                    </div>
                    
                    {/* Motto & Signature */}
                    <div className="pt-1.5 flex items-center justify-between border-t border-white/[0.1]">
                      <div className="font-mono italic text-[8px] text-[#828F9E] max-w-[150px] leading-tight">
                        &quot;{hunterQuote}&quot;
                      </div>
                      <svg viewBox="0 0 60 20" className="w-12 h-5 stroke-white/80 fill-none stroke-[1.4] opacity-80">
                        <path d="M4 14 C10 4, 15 18, 22 9 C28 2, 34 16, 42 7 C48 3, 52 12, 58 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom-Right Rank Triangle Badge */}
                  <div className="absolute bottom-3 right-3 z-10 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#00E5FF] drop-shadow-[0_0_8px_#00E5FF]" />
                </div>

                {/* Column 2: Middle Stats & Telemetry Pods (45%) */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                  
                  {/* Hunter ID with Copy */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#828F9E]">
                      <span>HUNTER ID</span>
                      <button
                        onClick={handleCopyId}
                        className="px-2 py-0.5 rounded-md bg-[#121722] border border-white/10 text-[#E4E8F0] hover:border-[#00E5FF] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{hunterId}</span>
                        {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#828F9E]" />}
                      </button>
                    </div>

                    {/* Verified Call-Sign Name */}
                    <div className="flex items-center gap-2 pt-1">
                      <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#FFFFFF] tracking-tight truncate">
                        {hunterName || "Karan_Awakened"}
                      </h3>
                      {/* Blue Verified Checkmark Circle Badge */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0095FF] flex items-center justify-center text-white shadow-[0_0_10px_rgba(0,149,255,0.7)]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    </div>

                    {/* Class & Rank subtitle */}
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#00E5FF] font-semibold pt-0.5">
                      <span>✦</span>
                      <span>{hunterClass}</span>
                      <span>•</span>
                      <span>{hunterRank} HUNTER</span>
                    </div>
                  </div>

                  {/* Level & XP Progress Row */}
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between font-mono text-xs">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[#828F9E] text-[10px]">LEVEL</span>
                        <span className="text-white font-extrabold text-2xl">{currentRank.level}</span>
                      </div>
                      <span className="text-[10px] text-[#717B8A]">{currentRank.xpText}</span>
                      <span className="text-[10px] text-[#E4E8F0] font-bold">{currentRank.xpPercent}</span>
                    </div>
                    {/* Glowing XP Progress Capsule */}
                    <div className="w-full h-3 bg-[#0E131E] rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#0070F3] to-[#00E5FF] rounded-full shadow-[0_0_12px_#00E5FF]"
                        style={{ width: currentRank.xpPercent }}
                      />
                    </div>
                  </div>

                  {/* 3 Telemetry Pods (Flame Streak, Mana, Crystals) */}
                  <div className="grid grid-cols-3 gap-2">
                    
                    {/* Pod 1: Streak */}
                    <div className="p-2.5 rounded-xl bg-[#0A0D15] border border-white/[0.08] font-mono flex flex-col justify-between">
                      <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-[#FF3B30] drop-shadow-[0_0_8px_rgba(255,59,48,0.8)]" />
                        <div>
                          <div className="text-base font-extrabold text-white leading-none">{currentRank.streak}</div>
                          <div className="text-[8px] text-[#828F9E]">DAYS</div>
                        </div>
                      </div>
                      <div className="text-[9px] text-[#828F9E] uppercase tracking-wider pt-2">STREAK</div>
                    </div>

                    {/* Pod 2: Mana + Equalizer Bars */}
                    <div className="p-2.5 rounded-xl bg-[#0A0D15] border border-white/[0.08] font-mono flex flex-col justify-between">
                      <div>
                        <div className="text-sm font-extrabold text-white leading-none">{currentRank.mana}</div>
                        <div className="text-[9px] text-[#828F9E] uppercase tracking-wider pt-1">MANA</div>
                      </div>
                      {/* Mini Cyan Equalizer Bars */}
                      <div className="flex items-end gap-1 h-3 pt-1">
                        <div className="w-1 bg-[#00E5FF] h-2 rounded-full animate-pulse shadow-[0_0_4px_#00E5FF]" />
                        <div className="w-1 bg-[#00E5FF] h-3 rounded-full animate-pulse delay-75 shadow-[0_0_4px_#00E5FF]" />
                        <div className="w-1 bg-[#00E5FF] h-1.5 rounded-full animate-pulse delay-150 shadow-[0_0_4px_#00E5FF]" />
                        <div className="w-1 bg-[#00E5FF] h-2.5 rounded-full animate-pulse shadow-[0_0_4px_#00E5FF]" />
                      </div>
                    </div>

                    {/* Pod 3: Crystals + Equalizer Bars */}
                    <div className="p-2.5 rounded-xl bg-[#0A0D15] border border-white/[0.08] font-mono flex flex-col justify-between">
                      <div>
                        <div className="text-sm font-extrabold text-white leading-none">{currentRank.crystals}</div>
                        <div className="text-[9px] text-[#828F9E] uppercase tracking-wider pt-1">CRYSTALS</div>
                      </div>
                      {/* Mini Blue Equalizer Bars */}
                      <div className="flex items-end gap-1 h-3 pt-1">
                        <div className="w-1 bg-[#38BDF8] h-3 rounded-full animate-pulse shadow-[0_0_4px_#38BDF8]" />
                        <div className="w-1 bg-[#38BDF8] h-1.5 rounded-full animate-pulse delay-75 shadow-[0_0_4px_#38BDF8]" />
                        <div className="w-1 bg-[#38BDF8] h-2.5 rounded-full animate-pulse delay-150 shadow-[0_0_4px_#38BDF8]" />
                        <div className="w-1 bg-[#38BDF8] h-2 rounded-full animate-pulse shadow-[0_0_4px_#38BDF8]" />
                      </div>
                    </div>

                  </div>

                  {/* Current Mission Capsule */}
                  <div className="p-3 rounded-xl bg-[#090D15] border border-white/[0.1] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#101622] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] font-bold text-xs shadow-[0_0_8px_rgba(0,229,255,0.3)]">
                        🛡️
                      </div>
                      <div>
                        <div className="font-mono text-[8px] text-[#828F9E] uppercase tracking-wider">CURRENT MISSION</div>
                        <div className="font-sans font-bold text-xs sm:text-sm text-white">{hunterMission}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#828F9E]" />
                  </div>

                </div>

                {/* Column 3: Right 3D Chrome Rank Totem Banner with V-Ribbon Bottom (25%) */}
                <div
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 28px), 50% 100%, 0 calc(100% - 28px))",
                  }}
                  className="md:col-span-3 rounded-t-2xl bg-gradient-to-b from-[#0E2442] via-[#0A1728] to-[#04070D] border-x border-t border-[#00E5FF]/60 shadow-[0_0_30px_rgba(0,229,255,0.25)] p-4 sm:p-5 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[300px]"
                >
                  {/* Crystalline Frost Highlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.18)_0%,transparent_70%)] pointer-events-none" />

                  {/* Top Star */}
                  <div className="text-white/80 text-sm font-sans z-10">✧</div>

                  {/* 3D Chrome Faceted Metallic Letter */}
                  <div className="my-auto z-10 space-y-1">
                    <motion.div
                      animate={{ scale: [1, 1.04, 1], rotate: [0, 1, -1, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="font-black text-6xl sm:text-7xl tracking-tighter bg-gradient-to-b from-white via-[#D1E4F7] to-[#547391] bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(0,229,255,0.4)]"
                    >
                      {currentRank.letter}
                    </motion.div>
                    <div className="text-[#00E5FF] text-xs shadow-[0_0_8px_#00E5FF]">✦</div>
                  </div>

                  {/* Rank Title & Subtitle */}
                  <div className="z-10 space-y-0.5">
                    <div className={`font-sans font-extrabold text-xl tracking-wider ${currentRank.textColor} drop-shadow-[0_0_10px_currentColor]`}>
                      {hunterRank}
                    </div>
                    <div className="font-mono text-[9px] text-[#828F9E] uppercase tracking-[0.25em] font-bold">
                      {currentRank.status}
                    </div>
                  </div>

                  {/* Vertical Creed at bottom */}
                  <div className="font-mono text-[7px] text-[#5E6977] uppercase tracking-[0.2em] space-y-0.5 pt-3 pb-4 z-10">
                    <div>DISCIPLINE</div>
                    <div>PROGRESS</div>
                    <div>FREEDOM</div>
                  </div>
                </div>

              </div>

              {/* 3. Bottom Footer Bar */}
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/[0.08] font-mono text-[10px] text-[#828F9E]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <div className="space-y-0.5">
                    <div className="text-[#FFFFFF] font-bold uppercase text-[9px]">SOVEREIGN PROTOCOL</div>
                    <div className="text-[8px] text-[#828F9E]">100% ON-DEVICE ENCRYPTED</div>
                  </div>
                </div>

                <div className="hidden sm:block border-x border-white/[0.1] px-4 py-0.5 text-center space-y-0.5">
                  <div className="text-[#828F9E] text-[9px]">ARISE-HUNTER-001</div>
                  <div className="text-[#56616F] text-[8px]">VER 1.0.0</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5 w-5 h-5 bg-white p-0.5 rounded-sm">
                    <div className="bg-black w-full h-full" />
                    <div className="bg-black w-full h-full" />
                    <div className="bg-black w-full h-full" />
                    <div className="bg-black w-full h-full" />
                  </div>
                  <div className="space-y-0.5 text-right">
                    <div className="text-[#828F9E] text-[9px]">SCAN TO VIEW</div>
                    <div className="text-[#E4E8F0] text-[8px] font-bold">HUNTER PROFILE &gt;</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Live Customization Matrix */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Input 1: Hunter Name */}
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
                className="w-full px-5 py-3.5 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>

            {/* Input 2: Rank Selector */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Hunter Rank Tier
              </label>
              <div className="grid grid-cols-6 gap-1.5">
                {(["E-RANK", "D-RANK", "C-RANK", "B-RANK", "A-RANK", "S-RANK"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => handleRankSelect(r)}
                    className={`py-2 rounded-xl font-mono text-[11px] font-bold transition-all cursor-pointer border text-center ${
                      hunterRank === r
                        ? "bg-[#101B2E] border-[#00E5FF] text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                        : "bg-[#08090C] border-white/[0.06] text-[#86868B] hover:border-white/[0.15]"
                    }`}
                  >
                    {r.split("-")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Avatar Gallery Selector (Includes Male, Female & Knight Avatars) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                  Select Avatar Portrait
                </label>
                <span className="font-mono text-[10px] text-[#00E5FF]">10 Avatars</span>
              </div>
              <div className="grid grid-cols-5 gap-2 max-h-[170px] overflow-y-auto pr-1">
                {avatarGallery.map((av) => (
                  <button
                    key={av.id}
                    onClick={() => setSelectedAvatar(av.src)}
                    className={`relative aspect-[3/4] rounded-xl overflow-hidden border transition-all cursor-pointer group/thumb ${
                      selectedAvatar === av.src
                        ? "border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.5)] scale-105"
                        : "border-white/[0.1] opacity-70 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <img src={av.src} alt={av.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1">
                      <span className="font-mono text-[7px] text-white truncate">{av.tag}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Specialty Class */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Specialty Class
              </label>
              <select
                value={hunterClass}
                onChange={(e) => setHunterClass(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#00E5FF] transition-colors cursor-pointer"
              >
                <option value="VOID BLADE">VOID BLADE (Precision Katana & High Velocity HIIT)</option>
                <option value="SHADOW MONARCH">SHADOW MONARCH (Full Calisthenics & Unmatched Strength)</option>
                <option value="BLOODRED KNIGHT">BLOODRED KNIGHT (Iron Will, Heavy Lifting & Armor)</option>
                <option value="VALKYRIE BLADE">VALKYRIE BLADE (Sleek Agility, Speed & Strict Routine)</option>
                <option value="AETHER SPRINTER">AETHER SPRINTER (Endurance & 10KM Speed Runs)</option>
                <option value="AEGIS GUARDIAN">AEGIS GUARDIAN (Focus & Strict App Defense)</option>
              </select>
            </div>

            {/* Input 5: Current Mission */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Current Mission Motto
              </label>
              <input
                type="text"
                value={hunterMission}
                onChange={(e) => setHunterMission(e.target.value)}
                maxLength={32}
                placeholder="e.g. Stronger Than Yesterday."
                className="w-full px-5 py-3 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>

            {/* Input 6: Hunter Creed / Signature Quote */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#828F9E] uppercase tracking-wider">
                Personal Creed & Signature Quote
              </label>
              <input
                type="text"
                value={hunterQuote}
                onChange={(e) => setHunterQuote(e.target.value)}
                maxLength={48}
                placeholder="e.g. DISCIPLINE TURNS POTENTIAL INTO REALITY."
                className="w-full px-5 py-3 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <button
                onClick={handleDownloadCard}
                disabled={isDownloading}
                className="w-full py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F5F5F7] text-[#000000] font-sans font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_25px_rgba(0,229,255,0.3)] transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#000000]" />
                <span>{isDownloading ? "Generating High-Res PNG..." : "Download Hunter Card (PNG)"}</span>
              </button>
              <p className="text-[11px] font-mono text-[#828F9E] text-center mt-2">
                1200×680 HD PNG export matching reference card identity.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
