import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundEffects from "@/components/BackgroundEffects";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARISE — Build Discipline. Earn Your Time. | AI Hunter System",
  description:
    "The world's first AI-powered hunter system. Burn calories to unlock locked apps, complete daily quests with real-time camera tracking, and convert discipline into real wealth.",
  keywords: [
    "ARISE",
    "Solo Leveling App",
    "AI Workout Tracker",
    "BlazePose",
    "App Blocker",
    "Discipline Gamification",
    "Mana Crystals",
    "Earn While Working Out",
  ],
  authors: [{ name: "ARISE Hunter System" }],
  openGraph: {
    title: "ARISE — Build Discipline. Earn Your Time.",
    description:
      "The world's first AI-powered hunter system. Burn calories to unlock locked apps, complete daily quests with real-time camera tracking, and convert discipline into real wealth.",
    type: "website",
    locale: "en_US",
    siteName: "ARISE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARISE — Build Discipline. Earn Your Time.",
    description:
      "The world's first AI-powered hunter system. Burn calories to unlock locked apps, complete daily quests with real-time camera tracking, and convert discipline into real wealth.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050508] text-[#F0F0F8] selection:bg-[#E8FF47] selection:text-[#050508]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <BackgroundEffects />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
