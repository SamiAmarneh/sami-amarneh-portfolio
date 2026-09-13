import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderNavProps {
  onOpenResume: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Archive', num: '01', href: '#archive' },
    { label: 'Profile', num: '02', href: '#profile' },
    { label: 'Experience', num: '03', href: '#experience' },
    { label: 'Capabilities', num: '04', href: '#capabilities' },
    { label: 'Contact', num: '05', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 lg:left-16 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B10]/92 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left Brand Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-xs sm:text-sm font-mono-tech tracking-wider uppercase text-white hover:text-[#00F0FF] transition-colors"
        >
          <span className="font-bold">AMARNEH</span>
          <span className="text-[#94A3B8]">/</span>
          <span className="text-[#94A3B8] hidden sm:inline text-xs">SYSTEMS &amp; WEB ENGINEER</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono-tech text-xs tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors group cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="text-[#00F0FF] text-[11px] font-bold group-hover:translate-x-0.5 transition-transform">
                {item.num}
              </span>
            </a>
          ))}

          {/* CV Button */}
          <button
            onClick={() => {
              onOpenResume();
            }}
            className="flex items-center gap-1 text-xs text-[#00F0FF] hover:text-white font-mono-tech border border-[#00F0FF]/40 hover:border-[#00F0FF] px-2.5 py-1 transition-all cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.1)]"
          >
            <span>CV</span>
            <span className="text-[10px] text-white">06</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#00F0FF]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B10]/98 border-b border-white/10 px-6 py-6 font-mono-tech space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center justify-between py-2 text-sm text-[#F1F5F9] border-b border-white/5"
              >
                <span>{item.label}</span>
                <span className="text-[#00F0FF] font-bold">{item.num}</span>
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left py-2 text-sm text-[#00F0FF] font-bold flex items-center justify-between"
            >
              <span>View Curriculum Vitae</span>
              <span>06</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
