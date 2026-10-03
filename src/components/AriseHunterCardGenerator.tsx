"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, QrCode } from "lucide-react";
import confetti from "canvas-confetti";

export default function AriseHunterCardGenerator() {
  const [hunterName, setHunterName] = useState("Karan_Awakened");
  const [hunterRank, setHunterRank] = useState<"S-RANK" | "A-RANK" | "B-RANK" | "E-RANK">("S-RANK");
  const [hunterClass, setHunterClass] = useState("Shadow Vanguard");
  const [streakDays] = useState(48);
  const [totalReps] = useState(14850);
  const [manaPoints] = useState(9420);
  const [isDownloading, setIsDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const rankColor =
    hunterRank === "S-RANK"
      ? { text: "text-[#EF4444]", bg: "bg-[#EF4444]/15", border: "border-[#EF4444]/40", glow: "#EF4444" }
      : hunterRank === "A-RANK"
      ? { text: "text-[#0A84FF]", bg: "bg-[#0A84FF]/15", border: "border-[#0A84FF]/40", glow: "#0A84FF" }
      : hunterRank === "B-RANK"
      ? { text: "text-[#38BDF8]", bg: "bg-[#38BDF8]/15", border: "border-[#38BDF8]/40", glow: "#38BDF8" }
      : { text: "text-[#86868B]", bg: "bg-white/10", border: "border-white/20", glow: "#86868B" };

  // Native High-Resolution HTML5 Canvas Generator (Exports Crisp 1200x750 PNG)
  const handleDownloadCard = () => {
    setIsDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 760;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // 1. Dark Titanium Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 760);
      bgGrad.addColorStop(0, "#12141A");
      bgGrad.addColorStop(0.5, "#08090C");
      bgGrad.addColorStop(1, "#030406");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 760);

      // Subtle Outer Rounded Border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 4;
      ctx.strokeRect(10, 10, 1180, 740);

      // 2. Top Blue / Red Horizon Glow
      const accentGrad = ctx.createLinearGradient(0, 0, 1200, 0);
      accentGrad.addColorStop(0, "transparent");
      accentGrad.addColorStop(0.5, hunterRank === "S-RANK" ? "#EF4444" : "#0A84FF");
      accentGrad.addColorStop(1, "transparent");
      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, 0, 1200, 6);

      // 3. Header: Brand & Rank Pill
      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 44px -apple-system, sans-serif";
      ctx.fillText("ARISE", 60, 95);

      ctx.fillStyle = hunterRank === "S-RANK" ? "#EF4444" : "#0A84FF";
      ctx.beginPath();
      ctx.arc(190, 80, 7, 0, Math.PI * 2);
      ctx.fill();

      // Rank Label Top Right
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      if (ctx.roundRect) {
        ctx.roundRect(880, 50, 260, 56, 28);
      } else {
        ctx.fillRect(880, 50, 260, 56);
      }
      ctx.fill();
      ctx.strokeStyle = hunterRank === "S-RANK" ? "rgba(239, 68, 68, 0.5)" : "rgba(10, 132, 255, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = hunterRank === "S-RANK" ? "#EF4444" : "#0A84FF";
      ctx.font = "bold 24px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`RANK // ${hunterRank}`, 1010, 87);
      ctx.textAlign = "left";

      // 4. Center: Hunter Avatar / Monogram Box
      ctx.fillStyle = "#0D0F14";
      ctx.fillRect(60, 150, 140, 140);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.strokeRect(60, 150, 140, 140);

      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 56px -apple-system, sans-serif";
      ctx.fillText((hunterName || "AR").slice(0, 2).toUpperCase(), 95, 240);

      // 5. Hunter Name & Class
      ctx.fillStyle = "#F5F5F7";
      ctx.font = "bold 54px -apple-system, sans-serif";
      ctx.fillText(hunterName || "Anonymous Hunter", 240, 210);

      ctx.fillStyle = "#86868B";
      ctx.font = "24px monospace";
      ctx.fillText(`CLASS: ${hunterClass.toUpperCase()} · PROTOCOL ACTIVE`, 240, 260);

      // 6. Dividing Line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 330);
      ctx.lineTo(1140, 330);
      ctx.stroke();

      // 7. Telemetry Metrics Matrix (4 Columns)
      const metrics = [
        { label: "STREAK", val: `${streakDays} DAYS` },
        { label: "AI REPS", val: `${totalReps.toLocaleString()}` },
        { label: "MANA CRYSTALS", val: `${manaPoints.toLocaleString()}` },
        { label: "STATUS", val: "AWAKENED" },
      ];

      metrics.forEach((m, idx) => {
        const xPos = 60 + idx * 280;
        ctx.fillStyle = "#6E6E73";
        ctx.font = "18px monospace";
        ctx.fillText(m.label, xPos, 390);

        ctx.fillStyle = idx === 2 ? "#0A84FF" : idx === 3 ? (hunterRank === "S-RANK" ? "#EF4444" : "#F5F5F7") : "#F5F5F7";
        ctx.font = "bold 40px -apple-system, sans-serif";
        ctx.fillText(m.val, xPos, 445);
      });

      // 8. Bottom Sovereign Signature & Verification
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.fillRect(60, 520, 1080, 180);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.strokeRect(60, 520, 1080, 180);

      ctx.fillStyle = "#86868B";
      ctx.font = "20px monospace";
      ctx.fillText("SOVEREIGN HUNTER DOSSIER // ON-DEVICE VERIFIED", 100, 580);
      ctx.fillStyle = "#6E6E73";
      ctx.font = "16px monospace";
      ctx.fillText("HASH: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 100, 620);
      ctx.fillText(`ISSUED: ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · ARISE SYSTEM OFFICIAL`, 100, 655);

      // Trigger Direct Download
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `ARISE_Hunter_Card_${(hunterName || "Hunter").replace(/\s+/g, "_")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#0A84FF", "#EF4444", "#FFFFFF"],
      });
    }

    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <section id="hunter-card" className="bg-[#000000] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 select-none border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0A84FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE DOSSIER // 3D CARD</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            Create Your Hunter Card.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed max-w-2xl">
            Type your call-sign below. Your holographic Hunter ID dynamically renders in real time and can be exported as a high-resolution story card.
          </p>
        </div>

        {/* Live Card + Customizer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Live 3D Holographic Titanium Card Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              ref={cardRef}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#12141A] via-[#08090C] to-[#030406] border border-white/[0.15] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden space-y-8"
            >
              {/* Top Accent Rim */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent"
                style={{ color: rankColor.glow }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-2xl text-[#F5F5F7] tracking-tight">
                    ARISE
                  </span>
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: rankColor.glow }}
                  />
                </div>

                <span className={`px-3 py-1 rounded-full border font-mono text-xs font-bold ${rankColor.text} ${rankColor.bg} ${rankColor.border}`}>
                  {hunterRank}
                </span>
              </div>

              {/* Avatar + Hunter Identity */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-[#0D0F14] border border-white/[0.12] flex items-center justify-center text-[#F5F5F7] font-bold text-2xl shadow-inner">
                  {(hunterName || "AR").slice(0, 2).toUpperCase()}
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#000000]/60 border border-white/[0.06] font-mono text-xs">
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
            </motion.div>
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

            {/* Input 2: Rank Selector */}
            <div className="space-y-2">
              <label className="block font-mono text-xs text-[#86868B] uppercase tracking-wider">
                Select Hunter Rank
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(["E-RANK", "B-RANK", "A-RANK", "S-RANK"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setHunterRank(r)}
                    className={`py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                      hunterRank === r
                        ? "bg-[#111318] border-[#0A84FF] text-[#F5F5F7] shadow-sm"
                        : "bg-[#08090C] border-white/[0.06] text-[#86868B] hover:border-white/[0.15]"
                    }`}
                  >
                    {r}
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
                <option value="Shadow Vanguard">Shadow Vanguard (Strength & Push-ups)</option>
                <option value="Aether Sprinter">Aether Sprinter (Endurance & 10KM Runs)</option>
                <option value="Monarch Berserker">Monarch Berserker (Full Calisthenics Matrix)</option>
                <option value="Iron Guardian">Iron Guardian (Focus & App Defense)</option>
              </select>
            </div>

            {/* Download Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadCard}
                disabled={isDownloading}
                className="w-full py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_25px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.01]"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloading ? "Generating High-Res PNG..." : "Download Hunter Card (PNG)"}</span>
              </button>
              <p className="text-[11px] font-mono text-[#6E6E73] text-center mt-2">
                Exports a high-resolution 1200×760 image ready for Instagram Stories & Wallpapers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
