"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function AriseFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/[0.08] py-16 px-6 sm:px-8 lg:px-12 select-none text-xs text-[#86868B]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-xl text-[#F5F5F7] tracking-tight">
                ARISE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
            </div>
            <p className="text-xs text-[#6E6E73] max-w-sm">
              The Real-World Progression System. On-device AI fitness tracking, Focus Shield app blocking, and real quest rewards.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 font-mono text-xs uppercase tracking-wider text-[#86868B]">
            <button
              onClick={() => scrollTo("product")}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              Product
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("hunters")}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              Hunters
            </button>
            <button
              onClick={() => scrollTo("leaderboard")}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              Leaderboard
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#6E6E73]">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} ARISE Technologies. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[#86868B]">Android 8+ Compatible</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5F5F7] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F5F5F7] transition-colors">Terms</a>
            <a href="mailto:support@arise.io" className="hover:text-[#F5F5F7] transition-colors">Support</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors cursor-pointer ml-4"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
