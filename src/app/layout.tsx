import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
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
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-arise-cyan/30 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BackgroundEffects />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
