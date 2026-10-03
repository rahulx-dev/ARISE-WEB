"use client";

import React, { useState } from "react";
import AriseNavbar from "@/components/AriseNavbar";
import AriseHero from "@/components/AriseHero";
import AriseLiveMetrics from "@/components/AriseLiveMetrics";
import AriseCorePhilosophy from "@/components/AriseCorePhilosophy";
import AriseVisionTracker from "@/components/AriseVisionTracker";
import AriseFocusShield from "@/components/AriseFocusShield";
import AriseQuestSystem from "@/components/AriseQuestSystem";
import AriseDungeons from "@/components/AriseDungeons";
import AriseManaEconomy from "@/components/AriseManaEconomy";
import AriseShadowSprint from "@/components/AriseShadowSprint";
import AriseFocusSanctuary from "@/components/AriseFocusSanctuary";
import AriseHunterProfile from "@/components/AriseHunterProfile";
import AriseLeaderboard from "@/components/AriseLeaderboard";
import AriseHunterLicense from "@/components/AriseHunterLicense";
import AriseHowItWorks from "@/components/AriseHowItWorks";
import AriseDownloadSection from "@/components/AriseDownloadSection";
import AriseInstallationGuide from "@/components/AriseInstallationGuide";
import ArisePrivacyTrust from "@/components/ArisePrivacyTrust";
import AriseFAQ from "@/components/AriseFAQ";
import AriseFinalCTA from "@/components/AriseFinalCTA";
import AriseFooter from "@/components/AriseFooter";
import AriseDownloadModal from "@/components/AriseDownloadModal";

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#000000] text-[#F5F5F7] font-sans selection:bg-[#0A84FF]/30 selection:text-[#FFFFFF] overflow-x-hidden">
      {/* 00. Top Navigation */}
      <AriseNavbar onOpenDownload={handleOpenDownload} />

      {/* 01. Cinematic Apple Hardware Hero */}
      <AriseHero onOpenDownload={handleOpenDownload} />

      {/* 02. Social Proof / Live Metrics */}
      <AriseLiveMetrics />

      {/* 03. Core Philosophy & Text Morphing */}
      <AriseCorePhilosophy />

      {/* 04. Feature 01 — AI Vision Tracking */}
      <AriseVisionTracker />

      {/* 05. Feature 02 — Focus Shield (App Blocker Toll) */}
      <AriseFocusShield />

      {/* 06. Feature 03 — Daily Quests & Dynamic Level Slider */}
      <AriseQuestSystem />

      {/* 07. Feature 04 — Dungeons */}
      <AriseDungeons />

      {/* 08. Mana Economy & Animated Crystal */}
      <AriseManaEconomy />

      {/* 09. Feature 05 — Shadow Sprint (GPS Running) */}
      <AriseShadowSprint />

      {/* 10. Feature 06 — Focus Sanctuary (Audio Player) */}
      <AriseFocusSanctuary />

      {/* 11. Digital Hunter Profile */}
      <AriseHunterProfile />

      {/* 12. Live Global Hunter Leaderboard */}
      <AriseLeaderboard />

      {/* 13. Shareable Hunter License */}
      <AriseHunterLicense />

      {/* 14. How It Works (3 Steps) */}
      <AriseHowItWorks />

      {/* 15. Download Section & System Video Tour */}
      <AriseDownloadSection onOpenDownload={handleOpenDownload} />

      {/* 16. Installation Guide */}
      <AriseInstallationGuide />

      {/* 17. Sovereign Privacy & Trust */}
      <ArisePrivacyTrust />

      {/* 18. Accordion FAQ (11 Questions) */}
      <AriseFAQ />

      {/* 19. Final Cinematic CTA */}
      <AriseFinalCTA onOpenDownload={handleOpenDownload} />

      {/* 20. Obsidian Footer */}
      <AriseFooter />

      {/* Interactive APK Download Modal */}
      <AriseDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </main>
  );
}