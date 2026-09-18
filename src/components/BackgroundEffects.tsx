export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none gpu-layer">
      {/* Subtle Cold Blue/Violet Ambient Glow (Ultra Low Opacity) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#9AAEFF]/[0.02] rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#747BFF]/[0.015] rounded-full blur-[180px]" />
    </div>
  );
}
