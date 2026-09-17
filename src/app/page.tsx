"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroPillarsSection from "@/components/HeroPillarsSection";
import StorySection from "@/components/StorySection";
import DoomscrollVsAriseComparison from "@/components/DoomscrollVsAriseComparison";
import AITrackerShowcase from "@/components/AITrackerShowcase";
import GateGuardianSection from "@/components/GateGuardianSection";
import HunterStatsSection from "@/components/HunterStatsSection";
import DailyQuestBoard from "@/components/DailyQuestBoard";
import SecurityPrivacySection from "@/components/SecurityPrivacySection";
import RealCashSection from "@/components/RealCashSection";
import HowToUseSection from "@/components/HowToUseSection";
import GuildWorldSection from "@/components/GuildWorldSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import FooterMinimal from "@/components/FooterMinimal";
import DownloadModal from "@/components/DownloadModal";
import CashoutModal from "@/components/CashoutModal";
import SpotlightGlow from "@/components/SpotlightGlow";

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [cashoutModalOpen, setCashoutModalOpen] = useState(false);
  const [cashoutCrystals, setCashoutCrystals] = useState(2450);

  const handleOpenCashout = (crystals?: number) => {
    setCashoutCrystals(crystals || 2450);
    setCashoutModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-[#F8FAFC] selection:bg-[#0A84FF]/25 selection:text-white transition-colors">
      {/* Linear-Style Mouse Spotlight Glow */}
      <SpotlightGlow />

      {/* 00. Minimal Floating Navigation */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 01. Mockup Editorial Hero Section */}
      <Hero onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 02. Mockup 4-Pillars Sub-Hero Matrix */}
      <HeroPillarsSection />

      {/* 03. Section 01 — The Problem (Whitespace & Typography) */}
      <StorySection />

      {/* Interactive Feature: Doomscroll vs ARISE Matrix */}
      <section className="px-6 sm:px-8 lg:px-12 py-12 relative z-10">
        <DoomscrollVsAriseComparison />
      </section>

      {/* 04. Section 02 — AI (See Every Rep · 30 FPS On-Device AI) */}
      <AITrackerShowcase />

      {/* 05. Section 03 — Gate Guardian (Distraction Has a Toll · Interactive App Lock) */}
      <GateGuardianSection />

      {/* 06. Section 04 — Real Life RPG (You Are the Character · Warrior Identity) */}
      <HunterStatsSection />

      {/* 07. Interactive Feature: Daily Quest Log & System Notification */}
      <section id="quests" className="px-6 sm:px-8 lg:px-12 py-12 relative z-10">
        <DailyQuestBoard />
      </section>

      {/* 08. Security & Offline-First Privacy Architecture */}
      <SecurityPrivacySection />

      {/* 09. Section 05 — Rewards (Surveys to Real Payouts · Mana Crystals to UPI, Amazon, Google Play) */}
      <RealCashSection onOpenCashout={handleOpenCashout} />

      {/* 10. Section 06 — How to Use (Ready to Arise? · English & Hindi Video Guides) */}
      <HowToUseSection />

      {/* 11. Section 07 — Guild (Don't Level Up Alone · Blood-Red Commander Igris) */}
      <GuildWorldSection />

      {/* 12. Section 08 — Transparency & FAQ (Privacy, Offline Protocol, Survey Rewards) */}
      <FAQSection />

      {/* 13. Section 09 — Final CTA (Your Daily Quest is Waiting · APK + QR) */}
      <FinalCTA onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* 14. Minimalist Footer */}
      <FooterMinimal />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <CashoutModal
        isOpen={cashoutModalOpen}
        onClose={() => setCashoutModalOpen(false)}
        initialCrystals={cashoutCrystals}
      />
    </main>
  );
}