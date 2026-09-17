/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_ARISE_HERO_VIDEO_URL: process.env.VITE_ARISE_HERO_VIDEO_URL || process.env.NEXT_PUBLIC_ARISE_HERO_VIDEO_URL || "",
    NEXT_PUBLIC_ARISE_HERO_VIDEO_URL: process.env.NEXT_PUBLIC_ARISE_HERO_VIDEO_URL || process.env.VITE_ARISE_HERO_VIDEO_URL || "",
    VITE_ARISE_PROFILE_VIDEO_URL: process.env.VITE_ARISE_PROFILE_VIDEO_URL || process.env.NEXT_PUBLIC_ARISE_PROFILE_VIDEO_URL || "",
    NEXT_PUBLIC_ARISE_PROFILE_VIDEO_URL: process.env.NEXT_PUBLIC_ARISE_PROFILE_VIDEO_URL || process.env.VITE_ARISE_PROFILE_VIDEO_URL || "",
    VITE_ARISE_APK_DOWNLOAD_URL: "https://github.com/rahulx-dev/ARISE-WEB/releases/latest/download/ARISE_Final.apk",
    NEXT_PUBLIC_ARISE_APK_DOWNLOAD_URL: "https://github.com/rahulx-dev/ARISE-WEB/releases/latest/download/ARISE_Final.apk",
    VITE_ARISE_TUTORIAL_EN_URL: process.env.VITE_ARISE_TUTORIAL_EN_URL || process.env.NEXT_PUBLIC_ARISE_TUTORIAL_EN_URL || "",
    VITE_ARISE_TUTORIAL_HI_URL: process.env.VITE_ARISE_TUTORIAL_HI_URL || process.env.NEXT_PUBLIC_ARISE_TUTORIAL_HI_URL || "",
    NEXT_PUBLIC_ARISE_TUTORIAL_EN_URL: process.env.NEXT_PUBLIC_ARISE_TUTORIAL_EN_URL || process.env.VITE_ARISE_TUTORIAL_EN_URL || "",
    NEXT_PUBLIC_ARISE_TUTORIAL_HI_URL: process.env.NEXT_PUBLIC_ARISE_TUTORIAL_HI_URL || process.env.VITE_ARISE_TUTORIAL_HI_URL || "",
  },
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
