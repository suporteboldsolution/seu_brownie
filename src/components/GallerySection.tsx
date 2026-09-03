import React from 'react';
import { Camera } from 'lucide-react';

export function GallerySection() {
  const galleryPhotos = [
    {
      url: '/624845946_18099385612700206_4109753806622587142_n.jpg',
      title: 'Presença em Eventos & Feiras',
      tag: 'Eventos & Mimos',
    },
    {
      url: '/628369530_18358431097206538_4454473719123521544_n.jpg',
      title: 'Degustação e Momentos Especiais',
      tag: 'Experiência',
    },
    {
      url: '/652686341_18126980818567616_6025387340345665603_n.jpg',
      title: 'Embalagens Especiais de Presente',
      tag: 'Corporativo',
    },
    {
      url: '/627459482_18213936721315599_3658433264515748218_n.jpg',
      title: 'Lembrancinhas e Detalhes Especiais',
      tag: 'Festas & Lembranças',
    },
    {
      url: '/655974546_18146249578478296_7016162725614011185_n.jpg',
      title: 'Brownies na Mesa de Celebração',
      tag: 'Aniversários',
    },
    {
      url: '/625979627_18070612340171301_8045895802272709244_n.jpg',
      title: 'Momentos com Nossos Brownies',
      tag: 'Clientes Felizes',
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-[#2B1D18] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-support font-semibold uppercase tracking-wider text-[#C9A77C] bg-[#151515] px-4 py-2 rounded-full border border-[#C9A77C]/30">
            <Camera className="w-3.5 h-3.5 text-[#A66A3F]" />
            <span>Galeria Visual</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-title text-[#F8F4EE] leading-tight tracking-wide uppercase">
            Conheça Nossas Delícias <br />
            <span className="text-[#C9A77C]">
              Feitas com Muito Amor
            </span>
          </h2>

          <p className="text-[#E8D8C4] text-base font-body font-light">
            Cada detalhe pensado para transformar sua experiência com chocolate em um momento inesquecível.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden border border-[#C9A77C]/30 shadow-xl group bg-[#151515] h-72 sm:h-80"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/95 via-[#151515]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[10px] font-support font-bold uppercase tracking-wider text-[#F8F4EE] bg-[#A66A3F] px-2.5 py-1 rounded-full inline-block border border-[#C9A77C]/30">
                  {photo.tag}
                </span>
                <h3 className="text-xl font-title text-[#F8F4EE] leading-snug tracking-wide uppercase">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
