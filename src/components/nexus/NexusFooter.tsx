"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

export default function NexusFooter() {
  const [sfTime, setSfTime] = useState("");
  const [lonTime, setLonTime] = useState("");
  const [mumTime, setMumTime] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setSfTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setLonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
      setMumTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-20 pb-12 text-mist-500 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Tier: Big Logo & Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div>
            <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-signal/15 border border-signal/40 flex items-center justify-center text-signal group-hover:scale-105 transition-all">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-mist-100 tracking-tighter group-hover:text-white transition-colors">
                ARISE
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-signal shadow-[0_0_10px_#e8ff47]" />
            </a>
            <p className="font-body text-mist-400 text-sm mt-2 max-w-sm">
              The Real-Life RPG Fitness System. 30 FPS On-device AI posture tracking, Gate Guardian app lock, and real cash rewards.
            </p>
          </div>

          <div className="flex flex-wrap gap-7 font-mono text-xs uppercase tracking-wider text-mist-400">
            <button
              onClick={() => scrollTo("features")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("work")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              Manifesto
            </button>
            <button
              onClick={() => scrollTo("team")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              Architects
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              Passes
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-signal transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Middle Tier: Live System Nodes Clocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 px-8 rounded-2xl bg-ink-900/60 border border-white/5 font-mono text-xs">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span className="text-mist-100 font-semibold tracking-wider">SF NODE // US-WEST</span>
            </div>
            <span className="text-signal bg-signal/10 px-2 py-0.5 rounded border border-signal/20">
              {sfTime || "09:42:15"} PST
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span className="text-mist-100 font-semibold tracking-wider">LONDON NODE // EU</span>
            </div>
            <span className="text-signal bg-signal/10 px-2 py-0.5 rounded border border-signal/20">
              {lonTime || "17:42:15"} GMT
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
              <span className="text-mist-100 font-semibold tracking-wider">MUMBAI NODE // IN-ASIA</span>
            </div>
            <span className="text-signal bg-signal/10 px-2 py-0.5 rounded border border-signal/20">
              {mumTime || "23:12:15"} IST
            </span>
          </div>
        </div>

        {/* Bottom Tier: Legal & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-mist-600">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} ARISE Protocol Inc. 100% On-Device AI Security.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] hover:border-signal hover:text-signal transition-all cursor-pointer text-mist-300"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
