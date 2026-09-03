import React from 'react';
import { HERO_IMAGE } from '../data/brownies';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenWhatsapp: () => void;
  onScrollToMenu: () => void;
}

export function Hero({ onOpenWhatsapp, onScrollToMenu }: HeroProps) {
  return (
    <section id="hero" className="relative py-16 lg:py-24 bg-[#151515] overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#A66A3F]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#C9A77C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-title text-[#F8F4EE] leading-tight tracking-wide uppercase">
                O Brownie Mais <br />
                <span className="text-[#A66A3F] border-b-2 border-[#C9A77C]/60 pb-1">
                  Gostoso da Bahia
                </span>
              </h1>
            </div>

            <p className="text-[#E8D8C4] text-base sm:text-lg font-body font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Casquinha crocante por fora, recheio úmido e cremoso por dentro. Feito artesanalmente com puro cacau nobre da terra baiana, muito amor e ingredientes selecionados.
            </p>
          </div>

          {/* Right Column: Hero Product Image Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C9A77C]/40 shadow-2xl bg-[#2B1D18]">
                <img
                  src={HERO_IMAGE}
                  alt="Delicioso Brownie Artesanal Baiano"
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
