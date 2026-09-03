import React from 'react';
import { Gift, Building2, PartyPopper, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';

interface OccasionsSectionProps {
  onOpenWhatsapp: () => void;
}

export function OccasionsSection({ onOpenWhatsapp }: OccasionsSectionProps) {
  const occasions = [
    {
      id: 'empresas',
      title: 'Eventos Corporativos',
      subtitle: 'Kits e Lembranças de Empresa',
      description: 'Impressione clientes e colaboradores com brownies gourmet embalados individualmente ou caixas personalizadas com a sua marca.',
      icon: Building2,
      features: ['Embalagens com sua marca', 'Desconto para grandes volumes', 'Fornada entregue no dia do evento'],
      image: '/620414036_18108345682671832_1573911304605873581_n.jpg',
      badge: 'Corporativo',
    },
    {
      id: 'aniversarios',
      title: 'Aniversários & Festas',
      subtitle: 'Mesa de Doces & Mimos',
      description: 'Substitua ou complemente os docinhos tradicionais por fatias irresistíveis de brownie artesanal que encantam todos os convidados.',
      icon: PartyPopper,
      features: ['Mini fatias para mesa de doces', 'Torre de brownies decorada', 'Sabor intenso e inesquecível'],
      image: '/622566343_18103584712830664_463748380041679159_n.jpg',
      badge: 'Celebrações',
    },
    {
      id: 'presentes',
      title: 'Presentes & Mimos',
      subtitle: 'Caixas Especiais com Laço',
      description: 'Demonstre carinho em datas comemorativas, aniversários ou surpresas com caixas de presente montadas com muito capricho.',
      icon: Gift,
      features: ['Caixa rígida para presente', 'Laço de fita especial', 'Cartão com mensagem personalizada'],
      image: '/501536216_1076114364437726_2072914114087054570_n.jpg',
      badge: 'Presentes',
    },
    {
      id: 'casamentos',
      title: 'Casamentos & Lembrancinhas',
      subtitle: 'Bem-Casado de Brownie',
      description: 'Uma versão moderna e incrivelmente saborosa do tradicional bem-casado para marcar para sempre o seu grande dia.',
      icon: HeartHandshake,
      features: ['Embalagem combinando com a festa', 'Recheio cremoso e marcante', 'Degustação para os noivos'],
      image: '/464385983_18356650405143931_50394612423423020_n.webp',
      badge: 'Casamentos',
    },
  ];

  return (
    <section id="ocasioes" className="py-24 bg-[#151515] relative overflow-hidden scroll-mt-24">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A77C]/40 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A66A3F]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-support font-semibold uppercase tracking-wider text-[#C9A77C] bg-[#2B1D18] px-4 py-2 rounded-full border border-[#C9A77C]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#A66A3F]" />
            <span>Serviços Especiais</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-title text-[#F8F4EE] leading-tight tracking-wide uppercase">
            Brownies Artesanais Para <br />
            <span className="text-[#A66A3F]">
              Todas As Suas Ocasiões
            </span>
          </h2>

          <p className="text-[#E8D8C4] text-base font-body font-light">
            Atendemos desde pequenos mimos individuais até grandes encomendas corporativas e festas em toda Feira de Santana e região.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {occasions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#2B1D18] rounded-3xl border border-[#C9A77C]/30 overflow-hidden shadow-xl hover:border-[#A66A3F] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Box */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D18] via-[#2B1D18]/30 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-[#A66A3F] text-[#F8F4EE] text-xs font-support font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-[#C9A77C]/30">
                      {item.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#151515] text-[#A66A3F] rounded-2xl shrink-0 border border-[#C9A77C]/30">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-title text-[#F8F4EE] tracking-wide uppercase">
                          {item.title}
                        </h3>
                        <p className="text-xs font-support font-semibold text-[#C9A77C] tracking-wider uppercase">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#E8D8C4] font-body font-light leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#F8F4EE] font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A66A3F]"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={onOpenWhatsapp}
                    className="w-full bg-[#151515] hover:bg-[#A66A3F] text-[#F8F4EE] py-3.5 rounded-2xl font-cta font-medium text-sm tracking-wider uppercase transition-all border border-[#C9A77C]/30 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Solicitar Orçamento</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
