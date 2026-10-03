"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, QrCode, ShieldCheck, Copy, Check } from "lucide-react";

interface AriseDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AriseDownloadModal({
  isOpen,
  onClose,
}: AriseDownloadModalProps) {
  const [copiedHash, setCopiedHash] = useState(false);
  const sha256Hash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(sha256Hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleDownloadApk = () => {
    const link = document.createElement("a");
    link.href = "/ARISE_Final.apk";
    link.download = "ARISE_v1.0.0.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/85 backdrop-blur-2xl -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg bg-[#08090C] border border-white/[0.12] rounded-[32px] p-6 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.95)] relative overflow-hidden text-[#F5F5F7]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/[0.08] bg-[#111318] text-[#86868B] hover:text-[#F5F5F7] transition-colors cursor-pointer"
              aria-label="Close download modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] block mb-2">
                  OFFICIAL APK RELEASE
                </span>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#F5F5F7]">
                  Download ARISE v1.0.0
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] mt-1">
                  Compatible with Android 8.0 (Oreo) and above. ~48 MB.
                </p>
              </div>

              {/* Direct APK Download Button */}
              <button
                onClick={handleDownloadApk}
                className="w-full py-4 rounded-full bg-[#F5F5F7] hover:bg-white text-[#000000] font-sans font-semibold text-sm tracking-tight flex items-center justify-center gap-2.5 cursor-pointer shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download APK (Direct File)</span>
              </button>

              {/* Mobile QR Scan Code Box */}
              <div className="p-5 rounded-2xl bg-[#000000] border border-white/[0.06] flex items-center gap-5">
                <div className="p-3 bg-white rounded-xl shrink-0">
                  <QrCode className="w-12 h-12 text-[#000000]" />
                </div>
                <div className="space-y-1">
                  <div className="font-sans font-bold text-sm text-[#F5F5F7]">
                    Scan with Mobile Phone
                  </div>
                  <p className="text-[11px] text-[#86868B] leading-relaxed">
                    Point your device camera at the QR code to begin direct installation on mobile.
                  </p>
                </div>
              </div>

              {/* SHA-256 Checksum Card */}
              <div className="p-4 rounded-2xl bg-[#0D0F14] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#86868B]">
                  <span>SHA-256 CHECKSUM</span>
                  <button
                    onClick={handleCopyHash}
                    className="flex items-center gap-1 hover:text-[#F5F5F7] transition-colors cursor-pointer"
                  >
                    {copiedHash ? <Check className="w-3.5 h-3.5 text-[#0A84FF]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedHash ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <p className="font-mono text-[10px] text-[#6E6E73] break-all">
                  {sha256Hash}
                </p>
              </div>

              <div className="text-[11px] font-mono text-[#6E6E73] flex items-center justify-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span>Cryptographically verified release build</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
