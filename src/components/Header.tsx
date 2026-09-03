import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsapp: () => void;
}

export function Header({ onOpenWhatsapp }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#top' },
    { name: 'Nossa História', href: '#sobre' },
    { name: 'Serviços', href: '#ocasioes' },
    { name: 'Galeria', href: '#galeria' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '#' || href === '#top' || href === '#hero') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
      return;
    }

    const targetId = href.replace('#', '');
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#151515]/95 backdrop-blur-md border-b border-[#C9A77C]/20 transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-3 group">
          <img
            src="/seu_brownie_branco.png"
            alt="Seu Brownie Logo"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-title text-2xl text-[#F8F4EE] leading-none tracking-wider uppercase">
              Seu Brownie
            </span>
            <span className="font-support text-[10px] text-[#C9A77C] leading-tight font-semibold tracking-widest uppercase">
              O Brownie da Bahia
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-support font-semibold text-[#F8F4EE] hover:text-[#C9A77C] tracking-wider uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenWhatsapp}
            className="flex items-center gap-2 bg-[#A66A3F] hover:bg-[#8F5831] text-[#F8F4EE] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-cta font-medium tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer border border-[#C9A77C]/30"
          >
            <MessageCircle className="w-4 h-4 fill-[#F8F4EE]" />
            <span>Peça no WhatsApp</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#F8F4EE] hover:bg-[#2B1D18] transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#151515] border-b border-[#C9A77C]/20 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-sm font-support font-semibold uppercase tracking-wider text-[#F8F4EE] hover:text-[#C9A77C]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenWhatsapp();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#A66A3F] text-[#F8F4EE] py-3 rounded-full font-cta font-medium text-sm uppercase tracking-wider shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-[#F8F4EE]" />
            <span>Peça no WhatsApp</span>
          </button>
        </div>
      )}
    </header>
  );
}
