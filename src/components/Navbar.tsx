"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ShieldCheck } from "lucide-react";
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
    { id: "features", name: "Features", href: "#features" },
    { id: "ai", name: "AI Tracker", href: "#ai" },
    { id: "gate", name: "Gates", href: "#gate" },
    { id: "quests", name: "Daily Quests", href: "#quests" },
    { id: "rewards", name: "Rewards", href: "#rewards" },
    { id: "faq", name: "FAQ", href: "#faq" },
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

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick();
    const el = document.getElementById("privacy") || document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "py-3 bg-white/85 dark:bg-[#030712]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-2xl dark:shadow-black/60"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo with Glowing Hunter Rank Badge and micro-hover */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            sound.playClick();
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0A84FF] via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5L3.5 18h4.5l4-7.5 4 7.5h4.5L12 2.5z" />
              <path d="M12 12.5l-2 3.5h4l-2-3.5z" fill="#00D2EE" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white font-mono group-hover:text-[#0A84FF] dark:group-hover:text-cyan-400 transition-colors">
              ARISE
            </span>
            <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono font-bold text-[#0A84FF] uppercase tracking-wider group-hover:bg-blue-500/20 transition-all">
              S-RANK
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation with Scroll Spy Active Indicator */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 font-sans cursor-pointer hover:text-slate-950 dark:hover:text-white ${
                  isActive
                    ? "text-[#0A84FF] dark:text-white font-bold"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-200/60 dark:border-white/10 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
          
          <a
            href="#privacy"
            onClick={handlePrivacyClick}
            className="px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors tracking-tight inline-flex items-center gap-1.5 cursor-pointer font-sans hover:scale-105 duration-200"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Offline</span>
          </a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Clean 'DOWNLOAD APK' CTA Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenDownload();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] shadow-md cursor-pointer border border-transparent dark:border-white/20"
          >
            <span>DOWNLOAD APK</span>
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
                className={`block text-sm font-semibold py-1.5 transition-colors ${
                  activeSection === link.id
                    ? "text-[#0A84FF] dark:text-cyan-400 font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#privacy"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handlePrivacyClick(e);
              }}
              className="block text-sm font-semibold text-emerald-600 dark:text-emerald-400 py-1.5 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>100% Offline &amp; Privacy First</span>
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playClick();
                  onOpenDownload();
                }}
                className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-transform active:scale-95"
              >
                <span>DOWNLOAD APK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
