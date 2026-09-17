"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { sound } from "@/lib/audio";

interface NavbarProps {
  onOpenDownload: () => void;
}

export default function Navbar({ onOpenDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sectionIds = ["hero", "features", "ai", "gate", "quests", "rewards", "faq"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", name: "Home", href: "#" },
    { id: "features", name: "Features", href: "#features" },
    { id: "rewards", name: "Rewards", href: "#rewards" },
    { id: "faq", name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-white/[0.06]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo - Exact ARISE Monospace / Geometric Typography */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            sound.playClick();
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-slate-900 dark:text-white font-sans transition-colors">
            ARISE
          </span>
        </a>

        {/* Center Desktop Navigation with Clean Title Case & Active Underline */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === "hero" && activeSection === "hero");
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 text-xs font-sans tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-slate-900 dark:text-white font-medium"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-slate-900 dark:bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & Solid White Pill Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Exact Mockup Pill Button: Solid White with Black Text */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenDownload();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Download App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white rounded-lg cursor-pointer transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden bg-white/95 dark:bg-[#030712]/95 border-b border-slate-200 dark:border-white/[0.08] px-6 py-4 space-y-3 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block text-xs font-mono tracking-widest py-2 transition-colors ${
                  activeSection === link.id
                    ? "text-[#0A84FF] dark:text-white font-bold"
                    : "text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playClick();
                  onOpenDownload();
                }}
                className="w-full py-3 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white text-xs font-sans font-medium flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-transform active:scale-95"
              >
                <span>Download App</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
