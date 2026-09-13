import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText, Terminal, Radio } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [soundEnabled, setSoundEnabled] = useState(soundManager.getSoundState());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSoundToggle = () => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: '// ABOUT', href: '#about' },
    { label: '// EXPERIENCE', href: '#experience' },
    { label: '// PROJECTS', href: '#projects' },
    { label: '// SKILLS', href: '#skills' },
    { label: '// CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#00F3FF]/20 shadow-[0_4px_24px_rgba(0,0,0,0.8)]'
          : 'bg-[#0A0A0F]/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Top micro telemetry bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#121218]/80 border-b border-white/5 text-[11px] font-mono text-[#888899]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#00F3FF]">
            <Radio className="w-3 h-3 animate-pulse" />
            SECURE_LINK // TLS 1.3
          </span>
          <span className="text-white/20">|</span>
          <span>LAT: 32.4646° N // LON: 35.2939° E (PALESTINE)</span>
          <span className="text-white/20">|</span>
          <span className="text-[#E0E0E5]">STACK: ASP.NET + REACT + NEXT.JS + IoT</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#00F3FF]/80">SYS_TIME: {currentTime || '00:00:00'} UTC</span>
          <span className="text-white/20">|</span>
          <span className="text-[#00F3FF]">SYS_LOAD: NORMAL (0.12)</span>
        </div>
      </div>

      {/* Main HUD Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            soundManager.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={() => soundManager.playHover()}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 border border-[#00F3FF]/40 bg-[#00F3FF]/5 flex items-center justify-center relative transition-all duration-300 group-hover:border-[#00F3FF] group-hover:shadow-[0_0_12px_rgba(0,243,255,0.4)]">
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[#00F3FF]" />
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[#00F3FF]" />
            <span className="text-[#00F3FF] font-display font-bold text-xs tracking-wider">SA</span>
          </div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg tracking-wider text-[#00F3FF] group-hover:text-white transition-colors duration-200">
              &lt; SAMI /&gt;
            </div>
            <div className="text-[9px] tracking-widest text-[#888899] font-mono -mt-1 hidden sm:block">
              SYSTEMS_ENG // DEV
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="relative px-3 py-1.5 text-xs lg:text-sm font-mono tracking-wider text-[#888899] hover:text-[#00F3FF] transition-all duration-200 hover:bg-[#00F3FF]/5 group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00F3FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00F3FF]" />
            </a>
          ))}
        </nav>

        {/* Status, Audio & Actions */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#121218] border border-[#00F3FF]/30 text-[11px] font-mono text-[#00F3FF]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F3FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F3FF]"></span>
            </span>
            <span className="tracking-wider">SYSTEM ONLINE</span>
          </div>

          {/* Sound FX Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={handleSoundToggle}
            title={soundEnabled ? 'Disable Cyber Sound Effects' : 'Enable Cyber Sound Effects'}
            className={`p-2 border transition-all duration-200 ${
              soundEnabled
                ? 'border-[#00F3FF]/40 text-[#00F3FF] bg-[#00F3FF]/10 hover:border-[#00F3FF]'
                : 'border-white/10 text-[#888899] hover:text-[#E0E0E5] hover:border-white/20'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick CV Button */}
          <button
            id="nav-cv-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundManager.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[#FF007F]/60 text-[#FF007F] hover:bg-[#FF007F] hover:text-black transition-all duration-300 text-xs font-mono tracking-wider group cursor-pointer shadow-[0_0_10px_rgba(255,0,127,0.15)]"
          >
            <FileText className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" />
            <span>// CV</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 border border-[#00F3FF]/30 text-[#00F3FF] bg-[#121218] hover:bg-[#00F3FF]/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0F]/98 border-b border-[#00F3FF]/30 px-6 py-6 font-mono space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs text-[#00F3FF]">
              <span className="w-2 h-2 rounded-full bg-[#00F3FF] animate-pulse" />
              SYSTEM ONLINE
            </div>
            <div className="text-xs text-[#888899]">SEC_LEVEL: ALPHA</div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2.5 px-3 text-sm text-[#E0E0E5] hover:text-[#00F3FF] hover:bg-[#00F3FF]/10 border-l-2 border-transparent hover:border-[#00F3FF] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-center border border-[#FF007F] text-[#FF007F] hover:bg-[#FF007F] hover:text-black font-mono text-xs tracking-wider transition-all"
            >
              [ VIEW / DOWNLOAD RESUME CV ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
