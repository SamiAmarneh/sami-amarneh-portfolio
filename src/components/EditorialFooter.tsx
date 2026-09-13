import React from 'react';

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="py-12 px-6 sm:px-10 bg-[#080B10] border-t border-white/5 font-mono-tech text-xs text-[#94A3B8]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[#00F0FF] font-bold">© 2026 SAMI AMARNEH</span>
          <span>/</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        {/* Center telemetry */}
        <div className="flex items-center gap-4 text-[11px] text-[#94A3B8]">
          <span>NODE: PALESTINE</span>
          <span>•</span>
          <span className="text-[#00F0FF]">SYS: ONLINE</span>
        </div>

        {/* Right back to top */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-[#00F0FF] transition-colors cursor-pointer"
        >
          BACK TO TOP [↑]
        </button>
      </div>
    </footer>
  );
};
