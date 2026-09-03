import React from 'react';
import { ShoppingBag, MessageCircle, Truck, Check, ArrowRight } from 'lucide-react';

interface HowToOrderSectionProps {
  onOpenWhatsapp: () => void;
  onScrollToMenu: () => void;
}

export const HowToOrderSection: React.FC<HowToOrderSectionProps> = ({
  onOpenWhatsapp,
  onScrollToMenu,
}) => {
  const steps = [
    {
      number: '01',
      title: 'Escolha seus sabores favoritos',
      description: 'Navegue pelo nosso cardápio no site, veja as fotos apetitosas e adicione os brownies ou caixinhas mistas na sua sacola.',
      icon: ShoppingBag,
    },
    {
      number: '02',
      title: 'Envie o pedido pelo WhatsApp',
      description: 'Clique em enviar pedido no WhatsApp. Sua lista vai formatada com nome, endereço e opção de pagamento (Pix, Cartão ou Dinheiro).',
      icon: MessageCircle,
    },
    {
      number: '03',
      title: 'Receba em casa quentinho',
      description: 'Nossa equipe prepara seu pacote com todo o carinho e envia via delivery para Salvador e Lauro de Freitas. É só se deliciar!',
      icon: Truck,
    },
  ];

  return (
    <section id="como-pedir" className="py-16 sm:py-24 bg-[#F5E6D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#FAF2E8] px-3.5 py-1.5 rounded-full border border-[#4A2C2A]/10 shadow-xs">
            <Truck className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Passo a Passo Simples</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#4A2C2A]">
            Como fazer o seu pedido <br />
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#D9A441] font-normal block mt-1">
              em menos de 2 minutos
            </span>
          </h2>

          <p className="font-poppins text-sm sm:text-base text-[#4A2C2A]/80 font-normal">
            Sem burocracia nem cadastros longos. Pedido direto no WhatsApp com atendimento humanizado baiano!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF4EB] p-8 rounded-3xl border border-[#4A2C2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Large Background Step Number */}
                <span className="font-poppins font-extrabold text-6xl text-[#4A2C2A]/10 absolute top-4 right-6 pointer-events-none group-hover:text-[#D9A441]/20 transition-colors">
                  {step.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#4A2C2A] text-[#D9A441] flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-[#4A2C2A]">
                    {step.title}
                  </h3>

                  <p className="font-poppins text-xs sm:text-sm text-[#4A2C2A]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#4A2C2A]/10 flex items-center gap-2 text-xs font-bold text-[#D9A441]">
                  <Check className="w-4 h-4 text-[#4A2C2A]" />
                  <span>Rápido, seguro e prático</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenWhatsapp}
            className="w-full sm:w-auto px-8 py-4 bg-[#D9A441] hover:bg-[#C5912E] text-[#4A2C2A] font-poppins font-bold text-base rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Fazer Pedido no WhatsApp</span>
          </button>

          <button
            onClick={onScrollToMenu}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#4A2C2A]/5 text-[#4A2C2A] font-poppins font-semibold text-base rounded-full border-2 border-[#4A2C2A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Montar na Sacola</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
