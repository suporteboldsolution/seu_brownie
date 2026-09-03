import React from 'react';
import { PRODUCTS } from '../data/brownies';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  onAddToCart: (product: any, quantity?: number, selectedVariant?: any) => void;
}

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  return (
    <section id="cardapio" className="py-24 bg-[#151515] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-support font-semibold uppercase tracking-wider text-[#C9A77C] bg-[#2B1D18] px-4 py-2 rounded-full border border-[#C9A77C]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#A66A3F]" />
            <span>Cardápio Especial</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-title text-[#F8F4EE] leading-tight tracking-wide uppercase">
            Nossos Brownies <br />
            <span className="text-[#A66A3F]">
              Artesanais
            </span>
          </h2>

          <p className="text-[#E8D8C4] text-base font-body font-light">
            Escolha suas opções favoritas, adicione à sacola e faça seu pedido diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
