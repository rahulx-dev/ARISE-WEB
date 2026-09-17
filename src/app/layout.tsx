import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
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
        className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
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
