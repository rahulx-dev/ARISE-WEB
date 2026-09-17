export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none gpu-layer">
      {/* Subtle Ambient Radial Glows (Static GPU Cached) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#0A84FF]/[0.035] dark:bg-[#0A84FF]/[0.05] rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03] rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] dark:bg-blue-600/[0.03] rounded-full blur-[160px]" />
    </div>
  );
}
