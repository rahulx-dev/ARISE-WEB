"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ShieldCheck, QrCode, Smartphone, Cpu, Check, Copy } from "lucide-react";
import TrustTelemetryBadges from "./TrustTelemetryBadges";
import { sound } from "@/lib/audio";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const apkUrl = "https://github.com/rahulx-dev/ARISE-WEB/releases/latest/download/ARISE_Final.apk";

  const hash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleDownload = () => {
    sound.playClick();
    setDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          sound.playCashout();
          
          // Direct APK download from GitHub Releases
          const link = document.createElement("a");
          link.href = apkUrl;
          link.setAttribute("download", "ARISE_Final.apk");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  const copyHash = () => {
    sound.playClick();
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl border border-slate-200 dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#070B16] text-slate-900 dark:text-slate-100 shadow-2xl shadow-slate-300/60 dark:shadow-cyan-950/50 z-10 overflow-hidden"
          >
            {/* Top Glowing Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0A84FF] to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-[#0A84FF] dark:text-cyan-400 font-bold uppercase">
                    SYSTEM PROTOCOL // DOWNLOAD
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  ARISE Hunter Client v1.0.4
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body: Dual Column (QR Code + Direct Download) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* QR Code Scanner Box with micro-hover */}
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-center relative group hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative p-3 bg-white rounded-xl shadow-md mb-3 border border-slate-200 dark:border-white/20">
                  <svg
                    className="w-32 h-32"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <path d="M0 0h30v30H0zm6 6v18h18V6zm4 4h10v10H10zM70 0h30v30H70zm6 6v18h18V6zm4 4h10v10H80zM0 70h30v30H0zm6 6v18h18V76zm4 4h10v10H10z" fill="black" />
                    <rect x="36" y="6" width="8" height="8" fill="black" />
                    <rect x="52" y="10" width="12" height="6" fill="black" />
                    <rect x="42" y="26" width="12" height="6" fill="black" />
                    <rect x="10" y="42" width="6" height="8" fill="black" />
                    <rect x="20" y="48" width="12" height="6" fill="black" />
                    <rect x="40" y="42" width="20" height="20" fill="#0A84FF" />
                    <rect x="46" y="48" width="8" height="8" fill="white" />
                    <rect x="68" y="42" width="6" height="12" fill="black" />
                    <rect x="80" y="46" width="10" height="6" fill="black" />
                    <rect x="42" y="68" width="14" height="6" fill="black" />
                    <rect x="58" y="74" width="8" height="12" fill="black" />
                    <rect x="70" y="68" width="16" height="6" fill="black" />
                    <rect x="80" y="78" width="10" height="10" fill="black" />
                  </svg>
                  <div className="absolute inset-0 border border-blue-500/40 rounded-xl pointer-events-none group-hover:border-blue-500 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#0A84FF] dark:text-cyan-400 font-mono font-bold">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>SCAN WITH PHONE</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Instant install on any Android phone
                </p>
              </a>

              {/* Direct APK Download Column */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#0A84FF] dark:text-cyan-400" /> Supported OS
                    </span>
                    <span className="font-mono text-slate-900 dark:text-white font-bold">Android 8.0+</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Target Arch
                    </span>
                    <span className="font-mono text-slate-900 dark:text-white font-bold">arm64-v8a</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Package File
                    </span>
                    <span className="font-mono text-slate-900 dark:text-white font-bold">ARISE_Final.apk</span>
                  </div>
                </div>

                {/* Clean Download APK Button */}
                <div>
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full relative group overflow-hidden py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-[#0A84FF] to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-75 cursor-pointer"
                  >
                    <Download className={`w-4 h-4 ${downloading ? "animate-bounce" : "group-hover:-translate-y-0.5 transition-transform"}`} />
                    <span>{downloading ? `Downloading (${downloadProgress}%)...` : "Download APK"}</span>
                  </button>
                  {downloading && (
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[#0A84FF] transition-all duration-150"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% Malware Free • Play Protect Verified</span>
                </div>
              </div>
            </div>

            {/* Trust Telemetry Strip */}
            <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10">
              <TrustTelemetryBadges showAll={false} />
            </div>

            {/* SHA-256 Hash Strip with hover */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-900/60 px-3.5 py-2.5 rounded-xl border border-slate-200/60 dark:border-white/5">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-mono text-[10px] text-slate-400 font-bold shrink-0">SHA-256:</span>
                <span className="font-mono text-[10px] text-slate-600 dark:text-slate-300 truncate">
                  {hash}
                </span>
              </div>
              <button
                onClick={copyHash}
                className="text-slate-400 hover:text-[#0A84FF] dark:hover:text-cyan-400 transition-colors p-1 cursor-pointer hover:scale-110 duration-200"
                title="Copy SHA-256 hash"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
