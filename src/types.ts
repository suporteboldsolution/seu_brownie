export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'tradicionais' | 'recheados' | 'edicao_baiana' | 'combos';
  badge?: string;
  weight: string;
  cocoaPercentage?: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
  favoriteFlavor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
