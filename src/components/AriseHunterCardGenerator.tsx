"use client";

import React, { useState, useRef } from "react";
import { Download, Sparkles, QrCode } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "C-RANK" | "D-RANK" | "E-RANK">("S-RANK");
  const [hunterClass, setHunterClass] = useState("Shadow Monarch Vanguard");
  const [streakDays] = useState(48);
  const [totalReps] = useState(14850);
  const [manaPoints] = useState(9420);
  const [isDownloading, setIsDownloading] = useState(false);

  // 3D Card Gyroscope / Mouse State
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * -18;
    const rotY = ((x / rect.width) - 0.5) * 18;
    setCardRotate({ x: rotX, y: rotY });
    setMouseCoord({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    setMouseCoord({ x: 50, y: 50 });
  };

  const rankColor =
    hunterRank === "S-RANK"
      ? { text: "text-[#EF4444]", bg: "bg-[#EF4444]/15", border: "border-[#EF4444]/50", glow: "#EF4444", bar: "#EF4444" }
      : hunterRank === "A-RANK"
      ? { text: "text-[#0A84FF]", bg: "bg-[#0A84FF]/15", border: "border-[#0A84FF]/50", glow: "#0A84FF", bar: "#0A84FF" }
      : hunterRank === "B-RANK"
      ? { text: "text-[#38BDF8]", bg: "bg-[#38BDF8]/15", border: "border-[#38BDF8]/50", glow: "#38BDF8", bar: "#38BDF8" }
      : hunterRank === "C-RANK"
      ? { text: "text-[#10B981]", bg: "bg-[#10B981]/15", border: "border-[#10B981]/50", glow: "#10B981", bar: "#10B981" }
      : hunterRank === "D-RANK"
      ? { text: "text-[#F59E0B]", bg: "bg-[#F59E0B]/15", border: "border-[#F59E0B]/50", glow: "#F59E0B", bar: "#F59E0B" }
      : { text: "text-[#86868B]", bg: "bg-white/10", border: "border-white/20", glow: "#86868B", bar: "#6E6E73" };

  // Native High-Resolution HTML5 Canvas Generator (Exports Crisp 1200x760 PNG)
  const handleDownloadCard = () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 760;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Dark Luxe Obsidian / Titanium Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 760);
      bgGrad.addColorStop(0, "#161922");
      bgGrad.addColorStop(0.4, "#0B0D12");
      bgGrad.addColorStop(1, "#020305");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 760);

      // Micro grid background
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let x = 40; x < 1200; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 760);
        ctx.stroke();
      }
      for (let y = 40; y < 760; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1200, y);
        ctx.stroke();
      }

      // 2. Hardware Titanium Outer Border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 3;
      ctx.strokeRect(12, 12, 1176, 736);

      // Inner subtle border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1;
      ctx.strokeRect(20, 20, 1160, 720);

      // 3. Cyberpunk Horizon Neon Line
      const accentGrad = ctx.createLinearGradient(0, 0, 1200, 0);
      accentGrad.addColorStop(0, "transparent");
      accentGrad.addColorStop(0.3, rankColor.glow);
      accentGrad.addColorStop(0.7, rankColor.glow);
      accentGrad.addColorStop(1, "transparent");
      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, 0, 1200, 6);

      // 4. Header: ARISE System Wordmark
      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 44px -apple-system, sans-serif";
      ctx.fillText("ARISE", 60, 95);

      ctx.fillStyle = rankColor.glow;
      ctx.beginPath();
      ctx.arc(195, 80, 7, 0, Math.PI * 2);
      ctx.fill();

      // Telemetry small tag next to logo
      ctx.fillStyle = "#86868B";
      ctx.font = "14px monospace";
      ctx.fillText("SOVEREIGN HUNTER CLEARANCE DOSSIER", 220, 85);

      // Rank Badge Top Right
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      if (ctx.roundRect) {
        ctx.roundRect(870, 50, 270, 60, 30);
      } else {
        ctx.fillRect(870, 50, 270, 60);
      }
      ctx.fill();
      ctx.strokeStyle = rankColor.glow;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = rankColor.glow;
      ctx.font = "bold 26px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`RANK // ${hunterRank}`, 1005, 90);
      ctx.textAlign = "left";

      // 5. Hunter Avatar / Holographic Monogram Frame
      ctx.fillStyle = "#0E1017";
      ctx.fillRect(60, 150, 140, 140);
      ctx.strokeStyle = rankColor.glow;
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 150, 140, 140);

      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 58px -apple-system, sans-serif";
      ctx.fillText((hunterName || "AR").slice(0, 2).toUpperCase(), 94, 242);

      // 6. Hunter Name & Class
      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 52px -apple-system, sans-serif";
      ctx.fillText(hunterName || "Anonymous Hunter", 240, 210);

      ctx.fillStyle = "#86868B";
      ctx.font = "22px monospace";
      ctx.fillText(`CLASS: ${hunterClass.toUpperCase()}`, 240, 260);

      // 7. Divider Line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 330);
      ctx.lineTo(1140, 330);
      ctx.stroke();

      // 8. 4 Telemetry Metrics
      const metrics = [
        { label: "DISCIPLINE STREAK", val: `${streakDays} DAYS` },
        { label: "VISION REPS", val: `${totalReps.toLocaleString()}` },
        { label: "MANA CRYSTALS", val: `${manaPoints.toLocaleString()}` },
        { label: "SYSTEM STATUS", val: "AWAKENED" },
      ];

      metrics.forEach((m, idx) => {
        const xPos = 60 + idx * 280;
        ctx.fillStyle = "#6E6E73";
        ctx.font = "16px monospace";
        ctx.fillText(m.label, xPos, 385);

        ctx.fillStyle = idx === 2 ? "#0A84FF" : idx === 3 ? rankColor.glow : "#F5F5F7";
        ctx.font = "bold 38px -apple-system, sans-serif";
        ctx.fillText(m.val, xPos, 440);
      });

      // 9. Bottom Encrypted Verification Box
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(60, 510, 1080, 190);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.strokeRect(60, 510, 1080, 190);

      ctx.fillStyle = "#86868B";
      ctx.font = "18px monospace";
      ctx.fillText("ON-DEVICE NEURAL RECOGNITION ENCRYPTED // ARISE SYSTEM KERNEL v4.2.9", 100, 565);
      
      ctx.fillStyle = "#6E6E73";
      ctx.font = "15px monospace";
      ctx.fillText("HASH: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 100, 610);
      ctx.fillText(`ISSUED: ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · LEVEL 24 · SYSTEM RECOGNIZED`, 100, 650);

      // Trigger Direct Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_Hunter_Card_${(hunterName || "Hunter").replace(/\s+/g, "_")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#0A84FF", rankColor.glow, "#FFFFFF"],
      });
    }

    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section id="hunter-card" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE DOSSIER // 3D HOLOGRAPHIC CARD</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Mint Your Hunter ID.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Type your call-sign below. Your 3D holographic Hunter ID dynamically renders in real-time with specular lighting and exports as a high-resolution 1200×760 PNG.
          </p>
        </div>

        {/* Live Card + Customizer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Live 3D Holographic Titanium Card Preview */}
          <div className="lg:col-span-7 flex justify-center perspective-[1000px]">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="w-full max-w-xl p-8 sm:p-10 rounded-[36px] bg-gradient-to-br from-[#161922] via-[#0B0D12] to-[#020305] border border-white/[0.18] shadow-[0_35px_90px_-15px_rgba(0,0,0,0.98),inset_0_1px_1px_rgba(255,255,255,0.25)] relative overflow-hidden space-y-8 cursor-grab active:cursor-grabbing group"
            >
              {/* Dynamic 3D Specular Sheen Glare following cursor */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-200 group-hover:opacity-70"
                style={{
                  background: `radial-gradient(circle 350px at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(255,255,255,0.18), transparent 70%)`,
                }}
              />

              {/* Top Accent Rim */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-current to-transparent"
                style={{ color: rankColor.glow }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-sans font-bold text-2xl text-[#F5F5F7] tracking-tight">
                    ARISE
                  </span>
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: rankColor.glow }}
                  />
                  <span className="font-mono text-[10px] text-[#86868B] tracking-widest hidden sm:inline">
                    CLEARANCE ID
                  </span>
                </div>

                <span className={`px-3.5 py-1 rounded-full border font-mono text-xs font-bold ${rankColor.text} ${rankColor.bg} ${rankColor.border}`}>
                  {hunterRank}
                </span>
              </div>

              {/* Avatar + Hunter Identity */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-[#0E1017] border border-white/[0.15] flex items-center justify-center text-[#F5F5F7] font-bold text-2xl shadow-inner relative overflow-hidden">
                  {(hunterName || "AR").slice(0, 2).toUpperCase()}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F5F5F7] tracking-tight">
                    {hunterName || "Anonymous Hunter"}
                  </h3>
                  <div className="font-mono text-xs text-[#86868B]">
                    CLASS: <span className="text-[#F5F5F7] font-semibold">{hunterClass.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              {/* 4 Telemetry Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#000000]/70 border border-white/[0.08] font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">STREAK</span>
                  <span className="text-base font-bold text-[#F5F5F7]">{streakDays} DAYS</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">AI REPS</span>
                  <span className="text-base font-bold text-[#F5F5F7]">{totalReps.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">MANA</span>
                  <span className="text-base font-bold text-[#0A84FF]">{manaPoints.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#6E6E73] block uppercase tracking-wider">STATUS</span>
                  <span className={`text-base font-bold ${rankColor.text}`}>AWAKENED</span>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] font-mono text-[11px] text-[#6E6E73]">
                <div className="space-y-0.5">
                  <div className="text-[#86868B] font-semibold">SOVEREIGN PROTOCOL</div>
                  <div>100% ON-DEVICE ENCRYPTED</div>
                </div>
                <QrCode className="w-8 h-8 text-[#F5F5F7]" />
              </div>
            </div>
          </div>

          {/* Right Live Customization Inputs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Input 1: Hunter Name */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Type Your Hunter Name
              </label>
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                maxLength={24}
                placeholder="e.g. Sung_Jin_Woo"
                className="w-full px-5 py-4 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-sm outline-none focus:border-[#0A84FF] transition-colors"
              />
            </div>

            {/* Input 2: Rank Selector (All Ranks) */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Select Hunter Rank
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
                Hunter Specialty Class
              </label>
              <select
                value={hunterClass}
                onChange={(e) => setHunterClass(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-[#08090C] border border-white/[0.12] text-[#F5F5F7] font-mono text-xs outline-none focus:border-[#0A84FF] transition-colors cursor-pointer"
              >
                <option value="Shadow Monarch Vanguard">Shadow Monarch Vanguard (Strength & Calisthenics)</option>
                <option value="Aether Speed Sprinter">Aether Speed Sprinter (Endurance & 10KM GPS Runs)</option>
                <option value="Titan Core Berserker">Titan Core Berserker (Full Biomechanical Matrix)</option>
                <option value="Aegis Gate Guardian">Aegis Gate Guardian (Focus & Strict App Defense)</option>
                <option value="Void Voidblade">Void Voidblade (Speed & High-Intensity Reps)</option>
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
                1200×760 HD PNG output · Ready for Instagram Stories & Wallpapers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
