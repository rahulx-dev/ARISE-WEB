"use client";

import React from "react";
import { ArrowUp, ShieldCheck, ExternalLink } from "lucide-react";
import { sound } from "@/lib/audio";

export default function FooterMinimal() {
  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] py-16 text-xs transition-colors select-none bg-slate-50/50 dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0A84FF] via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5L3.5 18h4.5l4-7.5 4 7.5h4.5L12 2.5z" />
                  <path d="M12 12.5l-2 3.5h4l-2-3.5z" fill="#00D2EE" />
                </svg>
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                ARISE // HUNTER OS
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#94A3B8] text-xs font-sans max-w-sm leading-relaxed">
              The offline-first gamified fitness OS powered by on-device computer vision.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Offline SQLite Architecture</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
              SYSTEM SECTIONS
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-sans text-xs">
              <li>
                <button onClick={() => scrollTo("features")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  Subsystem Architecture
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("ai")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  BlazePose 30 FPS AI
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("gate")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  Gate Guardian App Lock
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("quests")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  Daily Quest System
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("rewards")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  Mana Crystals &amp; Payouts
                </button>
              </li>
            </ul>
          </div>

          {/* Security & Legal Col */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
              TRANSPARENCY
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-sans text-xs">
              <li>
                <button onClick={() => scrollTo("privacy")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer inline-flex items-center gap-1">
                  <span>Privacy Policy</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("faq")} className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all cursor-pointer">
                  FAQ &amp; Verification Proof
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/rahulx-dev/ARISE-WEB/releases/latest/download/ARISE_Final.apk"
                  download="ARISE_Final.apk"
                  onClick={() => sound.playClick()}
                  className="hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1"
                >
                  <span>Download APK</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-[11px] font-mono">
                  Payout SLA: 24–48 Hours
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} ARISE Hunter Operating System. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-blue-500 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-sm hover:scale-105"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}