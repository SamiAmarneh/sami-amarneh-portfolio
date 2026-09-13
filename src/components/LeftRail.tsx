import React from 'react';

export const LeftRail: React.FC = () => {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-16 bg-[#080B10] border-r border-white/5 z-40 flex-col justify-between items-center py-6 select-none">
      {/* Top Monogram Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="font-display font-extrabold text-lg text-white hover:text-[#00F0FF] transition-colors tracking-tighter group flex flex-col items-center"
      >
        <span>SA</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] mt-1 group-hover:scale-125 transition-transform shadow-[0_0_8px_#00F0FF]" />
      </a>

      {/* Center Delicate Vertical Guide Line */}
      <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00F0FF]/30 to-transparent" />

      {/* Bottom Vertical Technical Coordinates */}
      <div className="flex flex-col items-center gap-6 font-mono-tech text-[10px] tracking-widest text-[#94A3B8]">
        <div className="vertical-lr rotate-180 uppercase tracking-widest text-white/50 hover:text-[#00F0FF] transition-colors cursor-default">
          SYSTEMS ENG / 2026PS
        </div>
        <div className="text-[#00F0FF] text-[10px] font-bold">
          32°27&apos;N
        </div>
      </div>
    </aside>
  );
};
