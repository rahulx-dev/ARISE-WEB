"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, Download, QrCode } from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/audio";

interface NexusContactCTAProps {
  onOpenDownload?: () => void;
}

export default function NexusContactCTA({ onOpenDownload }: NexusContactCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playCashout();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#e8ff47", "#ffffff", "#38bdf8"],
    });
    setSubmitted(true);
  };

  return (
    <section id="download" className="bg-ink-950 py-32 sm:py-44 text-mist-100 select-none relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-signal/[0.06] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-white/10 bg-ink-900/80 p-8 sm:p-16 backdrop-blur-2xl shadow-2xl relative">
          
          {/* Top subtle sheen line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-signal/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-signal/30 bg-signal/10 text-signal font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Immediate Hunter Enrollment</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.93] text-mist-100 uppercase">
                The System <br />
                has chosen <br />
                <span className="text-signal">you to ARISE.</span>
              </h2>

              <p className="font-body text-mist-400 text-base sm:text-lg leading-relaxed">
                Download the lightweight Android APK today or join the TestFlight beta queue. Level up your body, conquer doomscrolling, and get paid for your sweat.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    sound.playClick();
                    if (onOpenDownload) onOpenDownload();
                  }}
                  className="px-8 py-4 rounded-full bg-signal hover:bg-[#d4ff00] text-ink-950 font-display font-black text-sm uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-[0_0_30px_rgba(232,255,71,0.35)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download APK (24MB)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    if (onOpenDownload) onOpenDownload();
                  }}
                  className="px-6 py-4 rounded-full border border-white/10 hover:border-signal/40 bg-white/[0.02] text-mist-200 font-mono text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <QrCode className="w-4 h-4 text-signal" />
                  <span>Scan QR Code</span>
                </button>
              </div>
            </div>

            {/* Right Direct VIP Invite Form */}
            <div className="lg:col-span-5">
              {!submitted ? (
                <div className="p-8 rounded-3xl bg-ink-950 border border-white/10 space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-xl text-mist-100">
                      Get iOS / Discord Invite
                    </h3>
                    <p className="font-body text-mist-400 text-xs">
                      Receive early access builds, promo codes for 500 bonus Mana Crystals, and guild updates.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block font-mono text-[11px] text-mist-500 mb-1 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hunter@domain.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-ink-900 border border-white/10 focus:border-signal text-mist-100 placeholder:text-mist-700 font-body text-sm outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-white/[0.05] hover:bg-signal text-mist-200 hover:text-ink-950 border border-white/10 hover:border-signal font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
                    >
                      <span>Claim 500 Mana Crystals</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-ink-950 border border-signal/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-signal/15 border border-signal/40 flex items-center justify-center mx-auto text-signal">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-mist-100">
                    Hunter Enrolled!
                  </h3>
                  <p className="font-body text-mist-400 text-xs leading-relaxed">
                    A verification link and 500 Bonus Mana Crystal voucher have been sent to <span className="text-signal font-semibold">{email}</span>.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
