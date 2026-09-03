import React from 'react';
import { Heart, Award, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-[#2B1D18] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-[#C9A77C]/30 shadow-lg h-56 sm:h-64">
                  <img
                    src="/503079095_3943644175949560_4984966690941663627_n.jpg"
                    alt="Processo artesanal do brownie"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-[#C9A77C]/30 shadow-lg h-40 sm:h-48 bg-[#151515] p-6 flex flex-col justify-center text-[#F8F4EE]">
                  <p className="font-title text-3xl text-[#C9A77C] tracking-wide uppercase">Puro Cacau</p>
                  <p className="text-xs font-body font-light mt-1 text-[#E8D8C4]">
                    Selecionamos os melhores grãos da Bahia para um sabor inconfundível.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden border-2 border-[#C9A77C]/30 shadow-lg h-40 sm:h-48 bg-[#A66A3F] p-6 flex flex-col justify-center text-[#F8F4EE]">
                  <p className="font-title text-3xl tracking-wide uppercase">100% Baiano</p>
                  <p className="text-xs font-body font-medium mt-1 text-[#F8F4EE]">
                    Tradição, afeto e o verdadeiro gosto de feito em casa.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-[#C9A77C]/30 shadow-lg h-56 sm:h-64">
                  <img
                    src="/504558408_1056191353284883_38304956085444689_n.jpg"
                    alt="Embalagem artesanal do brownie"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-support font-semibold uppercase tracking-wider text-[#C9A77C] bg-[#151515] px-4 py-2 rounded-full border border-[#C9A77C]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#A66A3F]" />
              <span>Nossa História</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-title text-[#F8F4EE] leading-tight tracking-wide uppercase">
              Amor Pelo Chocolate e Pela <br className="hidden sm:block" />
              <span className="text-[#C9A77C]">
                Tradição Baiana
              </span>
            </h2>

            <p className="text-[#E8D8C4] text-base leading-relaxed font-body font-light">
              O <strong className="font-semibold text-[#F8F4EE]">Seu Brownie</strong> nasceu do desejo de criar o brownie perfeito: aquele que tem a casquinha craquelada crocante e um interior absurdamente macio, denso e molhadinho.
            </p>

            <p className="text-[#E8D8C4] text-base leading-relaxed font-body font-light">
              Inspirados pela riqueza gastronômica da Bahia e no amor incondicional pelo cacau puro, preparamos cada fornada de forma totalmente artesanal, garantindo frescor e afeto em cada fatia.
            </p>

            {/* Grid of Values */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#151515] border border-[#C9A77C]/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#A66A3F] text-[#F8F4EE] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-support font-semibold text-sm text-[#F8F4EE]">Feito com Afeto</h3>
                  <p className="text-xs font-body text-[#E8D8C4] mt-0.5">Cada lote é preparado individualmente</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#151515] border border-[#C9A77C]/30 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#A66A3F] text-[#F8F4EE] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-support font-semibold text-sm text-[#F8F4EE]">Ingredientes Nobres</h3>
                  <p className="text-xs font-body text-[#E8D8C4] mt-0.5">Cacau selecionado de alta qualidade</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
