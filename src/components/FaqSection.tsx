import React, { useState } from 'react';
import { FAQS } from '../data/brownies';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF2E8] border-t border-[#4A2C2A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#F5E6D3] px-3.5 py-1.5 rounded-full border border-[#4A2C2A]/10 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#4A2C2A]">
            Tudo o que você precisa saber <br />
            <span className="font-script text-4xl sm:text-5xl text-[#D9A441] font-normal block mt-1">
              sobre nossos brownies artesanais
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F5E6D3] rounded-2xl border border-[#4A2C2A]/10 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-poppins font-bold text-sm sm:text-base text-[#4A2C2A] hover:text-[#331C1A] focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#4A2C2A] text-[#D9A441]' : 'text-[#4A2C2A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 font-poppins text-xs sm:text-sm text-[#4A2C2A]/85 leading-relaxed border-t border-[#4A2C2A]/5">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 text-center font-poppins text-xs sm:text-sm text-[#4A2C2A]/80">
          Ainda ficou com alguma dúvida?{' '}
          <a
            href="https://wa.me/5575998513158?text=Ol%C3%A1!%20Estou%20com%20uma%20d%C3%BAvida%20sobre%20os%20brownies."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9A441] font-bold underline hover:text-[#C5912E] inline-flex items-center gap-1"
          >
            Fale com a nossa equipe no WhatsApp <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </a>
        </div>

      </div>
    </section>
  );
};
