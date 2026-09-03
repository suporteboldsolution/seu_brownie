import React from 'react';
import { TESTIMONIALS } from '../data/brownies';
import { Star, Quote, Heart, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#FAF2E8] border-t border-[#4A2C2A]/10 relative overflow-hidden">
      {/* Decorative blurred background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-[#4A2C2A] bg-[#F5E6D3] px-3.5 py-1.5 rounded-full border border-[#4A2C2A]/10 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-red-700 fill-current" />
            <span>Depoimentos Reais de Clientes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-[#4A2C2A]">
            Quem prova o Seu Brownie <br />
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#D9A441] font-normal block mt-1">
              se apaixona no primeiro pedaço!
            </span>
          </h2>

          <p className="font-poppins text-sm sm:text-base text-[#4A2C2A]/80 font-normal">
            Confira a opinião de quem já pediu nossas fornadas em Salvador e região.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F5E6D3] p-6 rounded-2xl border border-[#4A2C2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#D9A441]/30 absolute top-4 right-4 pointer-events-none group-hover:text-[#D9A441]/50 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#D9A441]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-poppins text-xs sm:text-sm text-[#4A2C2A]/90 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-[#4A2C2A]/10 mt-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#D9A441]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-poppins font-bold text-sm text-[#4A2C2A]">
                    {review.name}
                  </h4>
                  <p className="font-poppins text-xs text-[#4A2C2A]/60">
                    {review.location}
                  </p>
                  <span className="inline-block font-poppins text-[10px] font-semibold text-[#D9A441] bg-[#4A2C2A] px-2 py-0.5 rounded mt-0.5">
                    Favorito: {review.favoriteFlavor}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Proof Counter Strip */}
        <div className="mt-12 bg-[#4A2C2A] text-[#F5E6D3] rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center border border-[#D9A441]/30">
          <div>
            <p className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#D9A441]">+10.000</p>
            <p className="font-poppins text-xs text-[#F5E6D3]/80">Brownies Entregues</p>
          </div>
          <div>
            <p className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#D9A441]">4.9 / 5.0</p>
            <p className="font-poppins text-xs text-[#F5E6D3]/80">Média de Avaliação</p>
          </div>
          <div>
            <p className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#D9A441]">100%</p>
            <p className="font-poppins text-xs text-[#F5E6D3]/80">Cacau Nobre Baiano</p>
          </div>
          <div>
            <p className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#D9A441]">Diária</p>
            <p className="font-poppins text-xs text-[#F5E6D3]/80">Fornada Fresquinha</p>
          </div>
        </div>

      </div>
    </section>
  );
};
