"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import TutorialVideoModal from "./TutorialVideoModal";

export default function HowToUseSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi">("en");

  const enVideoUrl =
    process.env.VITE_ARISE_TUTORIAL_EN_URL ||
    process.env.NEXT_PUBLIC_ARISE_TUTORIAL_EN_URL ||
    "";

  const hiVideoUrl =
    process.env.VITE_ARISE_TUTORIAL_HI_URL ||
    process.env.NEXT_PUBLIC_ARISE_TUTORIAL_HI_URL ||
    "";

  const handleOpen = (lang: "en" | "hi") => {
    setSelectedLanguage(lang);
    setModalOpen(true);
  };

  const activeVideoUrl = selectedLanguage === "en" ? enVideoUrl : hiVideoUrl;

  return (
    <section id="how-to-use" className="py-36 sm:py-48 relative overflow-hidden select-none text-center bg-[#0A0C0F]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="text-xs font-mono tracking-[0.25em] text-[#6F747B] uppercase">
            PROTOCOL ONBOARDING
          </div>
          <h2 className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-[#F5F5F2]">
            READY TO ARISE?
          </h2>
        </motion.div>

        {/* Two Minimal Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
          {/* English Option */}
          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpen("en")}
            className="w-full sm:w-1/2 p-6 rounded-3xl border border-white/10 bg-[#0E1115] hover:border-white/20 hover:bg-[#13171C] hover:shadow-xl transition-all text-left space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-[#F5F5F2]">
                ENGLISH
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#F5F5F2] group-hover:bg-[#F5F5F2] group-hover:text-[#050607] transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="text-xs font-medium text-[#A6A9AE] group-hover:text-[#F5F5F2] flex items-center gap-1.5 transition-colors font-mono">
              <span>Watch the guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.button>

          {/* Hindi Option */}
          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOpen("hi")}
            className="w-full sm:w-1/2 p-6 rounded-3xl border border-white/10 bg-[#0E1115] hover:border-white/20 hover:bg-[#13171C] hover:shadow-xl transition-all text-left space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-[#F5F5F2]">
                हिन्दी
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#F5F5F2] group-hover:bg-[#F5F5F2] group-hover:text-[#050607] transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
            </div>
            <div className="text-xs font-medium text-[#A6A9AE] group-hover:text-[#F5F5F2] flex items-center gap-1.5 transition-colors font-mono">
              <span>गाइड देखें</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.button>
        </div>

      </div>

      {/* Cinematic Modal */}
      <TutorialVideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={activeVideoUrl}
        language={selectedLanguage}
      />
    </section>
  );
}