import React from 'react';
import { ArrowUp, Radio, Terminal, Shield, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10 font-mono text-xs text-[#888899] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#00F3FF]/40 bg-[#00F3FF]/5 flex items-center justify-center">
              <span className="text-[#00F3FF] font-display font-bold text-xs">SA</span>
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white tracking-wider">
                SAMI AMARNEH
              </div>
              <div className="text-[10px] text-[#888899]">
                COMPUTER SYSTEMS ENGINEER // PALESTINE 🇵🇸
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <a href="#about" className="hover:text-[#00F3FF] transition-colors">// ABOUT</a>
            <a href="#experience" className="hover:text-[#00F3FF] transition-colors">// EXPERIENCE</a>
            <a href="#projects" className="hover:text-[#00F3FF] transition-colors">// PROJECTS</a>
            <a href="#skills" className="hover:text-[#00F3FF] transition-colors">// SKILLS</a>
            <a href="#contact" className="hover:text-[#00F3FF] transition-colors">// CONTACT</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 border border-white/10 hover:border-[#00F3FF] hover:text-[#00F3FF] text-white transition-all flex items-center gap-1.5 cursor-pointer"
            title="Return to top"
          >
            <span className="text-[10px]">[ TOP ]</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom row: Prompt requirement exact text */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-white/90 font-mono font-bold tracking-wider text-center sm:text-left">
            © 2026 SAMI AMARNEH // ALL SYSTEMS OPERATIONAL
          </div>

          <div className="flex items-center gap-4 text-[10px] text-[#888899]">
            <span className="flex items-center gap-1 text-[#00F3FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F3FF] animate-pulse" />
              UPTIME: 99.98%
            </span>
            <span className="text-white/10">•</span>
            <span>BUILD: v4.26-PROD</span>
            <span className="text-white/10">•</span>
            <span>JENIN, PALESTINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
