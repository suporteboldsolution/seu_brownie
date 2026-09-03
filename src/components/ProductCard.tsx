import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Check, Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity?: number, selectedVariant?: any) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedVariant || undefined);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-[#2B1D18] rounded-3xl border border-[#C9A77C]/30 overflow-hidden shadow-xl hover:border-[#A66A3F] transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Image Box */}
        <div className="relative h-60 overflow-hidden bg-[#151515]">
          <img
            src={product.image}
            alt={product.title || product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D18]/90 via-transparent to-transparent"></div>
          
          {/* Tag */}
          {product.tag && (
            <span className="absolute top-4 right-4 bg-[#A66A3F] text-[#F8F4EE] text-xs font-support font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-[#C9A77C]/30">
              {product.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="font-title text-2xl text-[#F8F4EE] leading-snug tracking-wide uppercase">
            {product.title || product.name}
          </h3>
          
          <p className="text-xs text-[#E8D8C4] font-body font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Variant Selector if available */}
          {product.variants && product.variants.length > 0 && (
            <div className="pt-2">
              <label className="block text-[11px] font-support font-semibold text-[#C9A77C] uppercase tracking-wider mb-1">
                Opções:
              </label>
              <select
                value={selectedVariant?.name}
                onChange={(e) => {
                  const variant = product.variants?.find((v) => v.name === e.target.value);
                  if (variant) setSelectedVariant(variant);
                }}
                className="w-full bg-[#151515] text-[#F8F4EE] text-xs font-body py-2 px-3 rounded-xl border border-[#C9A77C]/40 focus:outline-none focus:ring-2 focus:ring-[#A66A3F]"
              >
                {product.variants.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} — R$ {v.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 pt-0 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#C9A77C] font-support uppercase tracking-wider block">A partir de</span>
            <span className="font-price font-bold text-2xl text-[#F8F4EE]">
              R$ {currentPrice.toFixed(2)}
            </span>
          </div>

          {/* Qty Selector */}
          <div className="flex items-center gap-1 bg-[#151515] p-1 rounded-xl border border-[#C9A77C]/30">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:bg-[#A66A3F] hover:text-[#F8F4EE] rounded-lg transition-colors text-[#F8F4EE]"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-price font-bold text-[#F8F4EE] px-2">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:bg-[#A66A3F] hover:text-[#F8F4EE] rounded-lg transition-colors text-[#F8F4EE]"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-3 rounded-2xl font-cta font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C9A77C]/30 ${
            isAdded
              ? 'bg-[#C9A77C] text-[#151515]'
              : 'bg-[#A66A3F] hover:bg-[#8F5831] text-[#F8F4EE] shadow-md hover:scale-[1.02]'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Adicionado!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar à Sacola</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
