"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

interface AriseNavbarProps {
  onOpenDownload: () => void;
}

export default function AriseNavbar({ onOpenDownload }: AriseNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Hunters", href: "#hunters" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);
    const target = document.getElementById(id.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-sans font-bold text-xl tracking-tight text-[#F5F5F7]">
            ARISE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#86868B]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="hover:text-[#F5F5F7] transition-colors cursor-pointer tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-semibold text-xs tracking-tight transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ARISE</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#86868B] hover:text-[#F5F5F7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08090C] border-b border-white/[0.08] px-6 py-6 space-y-4 backdrop-blur-3xl"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="block text-sm font-medium text-[#86868B] hover:text-[#F5F5F7] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-3 rounded-full bg-[#F5F5F7] text-[#000000] font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download ARISE (Android)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
