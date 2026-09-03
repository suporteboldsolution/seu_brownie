import React from 'react';
import { Heart, Instagram, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#' || href === '#top' || href === '#hero') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    e.preventDefault();
    if (element) {
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#151515] text-[#F8F4EE] pt-16 pb-12 relative border-t-4 border-[#A66A3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#C9A77C]/20">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="inline-block group">
                <img
                  src="/seu_brownie_branco.png"
                  alt="Seu Brownie Logo"
                  className="h-20 sm:h-24 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </a>
            </div>
            <p className="text-[#E8D8C4] text-sm leading-relaxed font-body font-light">
              Receita artesanal autêntica baiana, crocante por fora e cremosa por dentro. Feito com cacau selecionado e muito amor em Feira de Santana.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-support font-bold text-[#C9A77C] text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-body font-light text-[#E8D8C4]">
              <li>
                <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="hover:text-[#C9A77C] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-[#C9A77C] transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#ocasioes" onClick={(e) => handleNavClick(e, '#ocasioes')} className="hover:text-[#C9A77C] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-[#C9A77C] transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-support font-bold text-[#C9A77C] text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm font-body font-light text-[#E8D8C4]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A66A3F] shrink-0 mt-0.5" />
                <span>Rua Frei Henrique de Ascole, 42, Bairro Capuchinhos, Feira de Santana - BA | CEP: 44076-250</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A66A3F] shrink-0" />
                <a href="https://wa.me/5575998513158" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A77C] transition-colors">
                  (75) 99851-3158 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A66A3F] shrink-0 mt-0.5" />
                <span>Horário de funcionamento:<br />Das 8h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div className="space-y-4">
            <h4 className="font-support font-bold text-[#C9A77C] text-sm uppercase tracking-wider">
              Redes Sociais
            </h4>
            <p className="text-xs text-[#E8D8C4] leading-relaxed font-body font-light">
              Acompanhe nossos bastidores, novidades e fotos de dar água na boca no Instagram!
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A66A3F] hover:bg-[#8F5831] text-[#F8F4EE] px-4 py-2.5 rounded-full font-cta font-medium uppercase tracking-wider text-xs transition-all shadow-md border border-[#C9A77C]/30"
            >
              <Instagram className="w-4 h-4" />
              <span>@seubrownie.ba</span>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body font-light text-[#E8D8C4]/90">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Seu Brownie — Todos os direitos reservados. Feira de Santana - BA.</p>
            <p className="text-[#C9A77C] font-semibold text-xs">CNPJ: 43.879.284/0001-40</p>
          </div>
          <div className="flex items-center gap-2">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>na Bahia</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 bg-[#A66A3F] hover:bg-[#8F5831] text-[#F8F4EE] p-3 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer border border-[#C9A77C]/30"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
