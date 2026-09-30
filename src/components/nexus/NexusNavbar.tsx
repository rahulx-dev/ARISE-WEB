"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

interface NexusNavbarProps {
  onOpenDownload?: () => void;
  onOpenCashout?: () => void;
}

export default function NexusNavbar({ onOpenDownload, onOpenCashout }: NexusNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "AI Vision", href: "#ai-vision" },
    { name: "Gate Guardian", href: "#guardian" },
    { name: "RPG System", href: "#rpg-system" },
    { name: "Real Cash", href: "#rewards" },
    { name: "Passes", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-signal/15 border border-signal/40 flex items-center justify-center text-signal group-hover:scale-105 group-hover:bg-signal group-hover:text-ink-950 transition-all duration-300">
            <Sparkles className="w-4 h-4 fill-current" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-mist-100 group-hover:text-white transition-colors">
              ARISE
            </span>
            <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_#e8ff47] group-hover:scale-125 transition-transform animate-pulse" />
          </div>
        </a>

        {/* Center Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-xs font-mono tracking-wider uppercase text-mist-400 hover:text-signal transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          {onOpenCashout && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenCashout();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-signal/40 hover:text-signal text-xs font-mono text-mist-300 transition-all duration-300 cursor-pointer"
            >
              <span className="text-signal font-bold">2,450</span>
              <span>Mana Crystals</span>
            </button>
          )}

          <button
            onClick={() => {
              sound.playClick();
              if (onOpenDownload) onOpenDownload();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-signal/60 bg-signal/15 hover:bg-signal text-signal hover:text-ink-950 font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,255,71,0.35)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-mist-100 hover:text-signal transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ink-900/95 border-b border-white/5 px-6 py-6 space-y-4 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block font-mono text-sm uppercase tracking-wider text-mist-300 hover:text-signal py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDownload) onOpenDownload();
                }}
                className="w-full py-3.5 rounded-full bg-signal text-ink-950 font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(232,255,71,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>Get ARISE for Android (APK)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
