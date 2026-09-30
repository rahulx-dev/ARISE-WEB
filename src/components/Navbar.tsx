"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import AriseLogo from "./AriseLogo";
import { sound } from "@/lib/audio";
import GlassGalaxyButton from "./ui/GlassGalaxyButton";

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
    if (href === "#" || href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "py-3 bg-[#050607]/90 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#");
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <AriseLogo size="md" />
        </a>

        {/* Center Desktop Navigation */}
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
                    ? "text-[#F5F5F2] font-medium"
                    : "text-[#A6A9AE] hover:text-[#F5F5F2]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#9AAEFF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Glass Galaxy Pill CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <GlassGalaxyButton
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={onOpenDownload}
            >
              Download App
            </GlassGalaxyButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-[#A6A9AE] hover:text-[#F5F5F2] rounded-lg cursor-pointer transition-colors"
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
            className="md:hidden bg-[#0A0C0F]/95 border-b border-white/10 px-6 py-5 space-y-3 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block text-xs font-sans tracking-wide py-2 transition-colors ${
                  activeSection === link.id
                    ? "text-[#F5F5F2] font-semibold"
                    : "text-[#A6A9AE] hover:text-[#F5F5F2]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <GlassGalaxyButton
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
              >
                Download App
              </GlassGalaxyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
