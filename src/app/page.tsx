"use client";

import React, { useState } from "react";
import NexusNavbar from "@/components/nexus/NexusNavbar";
import NexusHero from "@/components/nexus/NexusHero";
import NexusMarquee from "@/components/nexus/NexusMarquee";
import NexusCapabilities from "@/components/nexus/NexusCapabilities";
import NexusWork from "@/components/nexus/NexusWork";
import NexusStatsBanner from "@/components/NexusStatsBanner";
import NexusManifesto from "@/components/nexus/NexusManifesto";
import NexusTeam from "@/components/nexus/NexusTeam";
import NexusTestimonials from "@/components/nexus/NexusTestimonials";
import NexusPricing from "@/components/nexus/NexusPricing";
import NexusFAQ from "@/components/nexus/NexusFAQ";
import NexusContactCTA from "@/components/nexus/NexusContactCTA";
import NexusFooter from "@/components/nexus/NexusFooter";
import NexusProjectModal from "@/components/nexus/NexusProjectModal";

export default function Home() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleOpenProject = () => {
    setProjectModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-ink-950 text-mist-100 selection:bg-signal selection:text-ink-950 overflow-x-hidden font-body">
      {/* 01. Sticky / Floating Header */}
      <NexusNavbar onOpenContact={handleOpenProject} />

      {/* 02. Impact Hero Section */}
      <NexusHero onOpenContact={handleOpenProject} />

      {/* 03. Infinite Scrolling Brand Logos Marquee */}
      <NexusMarquee />

      {/* 04. Bento Capabilities / Services Grid */}
      <NexusCapabilities />

      {/* 05. Selected Case Studies & 3D Work Portfolio */}
      <NexusWork />

      {/* 06. Electric Signal Stats & Metrics Banner */}
      <NexusStatsBanner />

      {/* 07. Studio Philosophy & Manifesto */}
      <NexusManifesto />

      {/* 08. Core Team with 3D Flip & Generative Pixel Art */}
      <NexusTeam />

      {/* 09. Testimonials Carousel with Huge Quote Backdrop */}
      <NexusTestimonials />

      {/* 10. Transparent Pricing / Investment Packages */}
      <NexusPricing onSelectPlan={handleOpenProject} />

      {/* 11. Interactive FAQ Accordion */}
      <NexusFAQ />

      {/* 12. Direct Contact Form & Inquiry Section */}
      <NexusContactCTA />

      {/* 13. Studio Footer with Global Clocks (SF, London, Mumbai) */}
      <NexusFooter />

      {/* Interactive Project Inquiry Modal */}
      <NexusProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </main>
  );
}