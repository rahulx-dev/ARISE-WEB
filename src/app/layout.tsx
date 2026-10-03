import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ARISE — Turn Real Life Into Progression",
  description:
    "ARISE is a gamified fitness and focus ecosystem that turns real-world effort into progression, quests and rewards.",
  keywords: [
    "ARISE",
    "Real-Life Progression",
    "AI Vision Tracker",
    "Focus Shield",
    "App Blocker",
    "Daily Quests",
    "Mana Economy",
    "Solo Leveling Fitness",
  ],
  authors: [{ name: "ARISE Technologies" }],
  openGraph: {
    title: "ARISE — Turn Real Life Into Progression",
    description:
      "ARISE is a gamified fitness and focus ecosystem that turns real-world effort into progression, quests and rewards.",
    type: "website",
    locale: "en_US",
    siteName: "ARISE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARISE — Turn Real Life Into Progression",
    description:
      "ARISE is a gamified fitness and focus ecosystem that turns real-world effort into progression, quests and rewards.",
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#000000] text-[#F5F5F7] selection:bg-[#0A84FF]/30 selection:text-[#FFFFFF] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
