"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";
import { resolveCloudinaryVideoUrl } from "@/lib/videoUrl";
import { sound } from "@/lib/audio";

interface TutorialVideoModalProps {
  isOpen: boolean;
  videoUrl?: string;
  language?: "en" | "hi";
  onClose: () => void;
}

export default function TutorialVideoModal({
  isOpen,
  videoUrl,
  language = "en",
  onClose,
}: TutorialVideoModalProps) {
  const [currentLang, setCurrentLang] = useState<"en" | "hi">(language);

  useEffect(() => {
    setCurrentLang(language);
  }, [language]);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const defaultHeroVideo = "https://player.cloudinary.com/embed/?cloud_name=idadrqss&public_id=erasio_Smartphone_advertisement_for_ARISE_1080p_20260915165523-upscaled-2x";
  const activeRawUrl = videoUrl && videoUrl.trim().length > 0 ? videoUrl : defaultHeroVideo;
  const activeVideoUrl = resolveCloudinaryVideoUrl(activeRawUrl);

  const handleTabChange = (lang: "en" | "hi") => {
    setCurrentLang(lang);
    sound.playClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[94vw] max-w-5xl flex flex-col space-y-3"
          >
            {/* Top Bar with Language Tabs & Close Button */}
            <div className="w-full flex items-center justify-between px-2 bg-slate-900/80 p-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  SYSTEM WALKTHROUGH //
                </span>
                
                {/* Language Switcher Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 font-mono text-xs">
                  <button
                    onClick={() => handleTabChange("en")}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      currentLang === "en"
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleTabChange("hi")}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      currentLang === "hi"
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close tutorial"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center group">
              <video
                key={currentLang}
                src={activeVideoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
