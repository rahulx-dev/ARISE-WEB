"use client";

import React, { useState } from "react";
import NexusNavbar from "@/components/nexus/NexusNavbar";
import NexusHero from "@/components/nexus/NexusHero";
import HeroVideoShowcase from "@/components/HeroVideoShowcase";
import NexusMarquee from "@/components/nexus/NexusMarquee";
import NexusCapabilities from "@/components/nexus/NexusCapabilities";
import DoomscrollVsAriseComparison from "@/components/DoomscrollVsAriseComparison";
import NexusWork from "@/components/nexus/NexusWork";
import NexusStatsBanner from "@/components/NexusStatsBanner";
import DailyQuestBoard from "@/components/DailyQuestBoard";
import NexusManifesto from "@/components/nexus/NexusManifesto";
import NexusTeam from "@/components/nexus/NexusTeam";
import NexusTestimonials from "@/components/nexus/NexusTestimonials";
import NexusPricing from "@/components/nexus/NexusPricing";
import NexusFAQ from "@/components/nexus/NexusFAQ";
import NexusContactCTA from "@/components/nexus/NexusContactCTA";
import NexusFooter from "@/components/nexus/NexusFooter";
import DownloadModal from "@/components/DownloadModal";
import CashoutModal from "@/components/CashoutModal";

export default function Home() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [cashoutModalOpen, setCashoutModalOpen] = useState(false);
  const [cashoutCrystals, setCashoutCrystals] = useState(2450);

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleOpenCashout = (crystals?: number) => {
    setCashoutCrystals(crystals || 2450);
    setCashoutModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-ink-950 text-mist-100 selection:bg-signal selection:text-ink-950 overflow-x-hidden font-body">
      {/* 01. Sticky / Floating Nexus Header */}
      <NexusNavbar
        onOpenDownload={handleOpenDownload}
        onOpenCashout={() => handleOpenCashout(2450)}
      />

      {/* 02. Impact Nexus Hero Section */}
      <NexusHero onOpenDownload={handleOpenDownload} />

      {/* 02.5 Full-Width Product Showcase Video */}
      <HeroVideoShowcase />

      {/* 03. Infinite Scrolling Brand Logos & System Marquee */}
      <NexusMarquee />

      {/* 04. Bento Capabilities / 8 Core Features Grid */}
      <NexusCapabilities />

      {/* 04.5 Interactive Feature: Doomscroll vs ARISE Matrix */}
      <section id="guardian" className="px-6 sm:px-8 lg:px-12 py-12 relative z-10 max-w-7xl mx-auto">
        <DoomscrollVsAriseComparison />
      </section>

      {/* 05. Selected Case Studies & 3D Proof Cards */}
      <NexusWork />

      {/* 06. Electric Signal Stats & Metrics Banner */}
      <NexusStatsBanner />

      {/* 06.5 Interactive Feature: Daily Quest Log & System Notification */}
      <section id="rpg-system" className="px-6 sm:px-8 lg:px-12 py-16 relative z-10 max-w-7xl mx-auto">
        <DailyQuestBoard />
      </section>

      {/* 07. Studio Philosophy & System Manifesto */}
      <NexusManifesto />

      {/* 08. Core Architects & Guardians with 3D Flip */}
      <NexusTeam />

      {/* 09. Verified Hunter Testimonials Carousel */}
      <NexusTestimonials />

      {/* 10. Transparent Hunter Passes & Pricing */}
      <NexusPricing onSelectPlan={handleOpenDownload} />

      {/* 11. Interactive FAQ Accordion */}
      <NexusFAQ />

      {/* 12. Final Enrollment & APK Download Portal */}
      <NexusContactCTA onOpenDownload={handleOpenDownload} />

      {/* 13. Studio Footer with Global Clocks (SF, London, Mumbai) */}
      <NexusFooter />

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