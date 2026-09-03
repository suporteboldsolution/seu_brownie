import { Product, Testimonial, FaqItem } from '../types';

import heroImg from '../assets/images/hero_brownie_1786460074400.jpg';
import brownieTradicionalImg from '../assets/images/brownie_tradicional_1786460087096.jpg';
import brownieNinhoImg from '../assets/images/brownie_ninho_1786460100863.jpg';
import brownieDoceDeLeiteImg from '../assets/images/brownie_docedeleite_1786460118686.jpg';
import brownieCacauImg from '../assets/images/brownie_cacau_1786460132815.jpg';

export const HERO_IMAGE = '/628369530_18358431097206538_4454473719123521544_n.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'brownie-tradicional',
    name: 'Brownie Tradicional Baiano',
    tagline: 'Massa intensa com casquinha crocante por fora e coração derretendo',
    description: 'A receita clássica e secreta do Seu Brownie. Feito com cacau nobre da Costa do Cacau baiana e manteiga de verdade. Casquinha de vidro impecável!',
    price: 9.50,
    image: '/628369530_18358431097206538_4454473719123521544_n.jpg',
    category: 'tradicionais',
    badge: 'Mais Pedido',
    weight: '70g',
    cocoaPercentage: '55% Cacau',
    isPopular: true,
  },
  {
    id: 'brownie-ninho-nutella',
    name: 'Brownie Ninho & Nutella',
    tagline: 'Creme aveludado de Leite Ninho coberto com Nutella pura',
    description: 'Para quem ama indulgência máxima! O brownie tradicional coberto generosamente com brigadeiro cremoso de Ninho e finalizado com espiral de Nutella original.',
    price: 14.90,
    image: '/627459482_18213936721315599_3658433264515748218_n.jpg',
    category: 'recheados',
    badge: 'Favorito',
    weight: '110g',
    cocoaPercentage: '55% Cacau',
    isPopular: true,
  },
  {
    id: 'brownie-doce-de-leite-sal',
    name: 'Brownie Doce de Leite com Flor de Sal',
    tagline: 'Doce de leite artesanal cozido lentamente com um toque refinado de sal marinho',
    description: 'O contraste perfeito entre o doce denso do chocolate, o caramelo cremoso do doce de leite caseiro e os cristais crocantes de flor de sal.',
    price: 13.90,
    image: '/621789645_18097561939725724_7415312295477858449_n.jpg',
    category: 'recheados',
    badge: 'Especial',
    weight: '105g',
    cocoaPercentage: '60% Cacau',
    isPopular: true,
  },
  {
    id: 'brownie-cacau-castanha',
    name: 'Brownie Cacau 70% & Castanha de Caju',
    tagline: 'Sabor intenso do cacau sul-baiano com crocância de castanhas assadas',
    description: 'Uma homenagem às origens da Bahia! Elaborado com cacau 70% de produtores locais e salpicado com castanhas-de-caju levemente tostadas.',
    price: 12.90,
    image: '/618638393_18070545278410537_5725245131574473175_n.jpg',
    category: 'edicao_baiana',
    badge: 'Edição Baiana',
    weight: '80g',
    cocoaPercentage: '70% Cacau',
    isPopular: false,
  },
  {
    id: 'caixa-degustacao-4',
    name: 'Caixa Degustação O Bahião (4 Unidades)',
    tagline: 'Os 4 sabores mais amados em uma caixa presenteável artesanal',
    description: 'Ideal para presentear ou dividir com a família! Contém 1 Tradicional, 1 Ninho & Nutella, 1 Doce de Leite com Flor de Sal e 1 Cacau 70% com Castanha.',
    price: 45.00,
    originalPrice: 51.20,
    image: '/652686341_18126980818567616_6025387340345665603_n.jpg',
    category: 'combos',
    badge: 'Economia',
    weight: '365g',
    isPopular: true,
  },
  {
    id: 'marmita-brownie-quentinho',
    name: 'Marmitinha de Brownie com Brigadeiro Quente',
    tagline: 'Para aquecer no micro-ondas por 15 segundos e comer de colher',
    description: 'Sirva como sobremesa dos deuses! Pedaços generosos de brownie numa marmitinha de alumínio artesanal, cobertos com calda quente de brigadeiro ao leite.',
    price: 18.90,
    image: '/651285045_18081990494038236_1061460469957300521_n.jpg',
    category: 'combos',
    badge: 'Sobremesa',
    weight: '180g',
    cocoaPercentage: '55% Cacau',
    isPopular: false,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lorena Guimarães',
    location: 'Capuchinhos, Feira de Santana',
    comment: 'Ô meu pai, esse brownie é fora do sério! A casquinha fica crocante de verdade e o recheio de Ninho com Nutella derrete na boca. Virei cliente fiel toda semana!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    favoriteFlavor: 'Ninho & Nutella',
  },
  {
    id: '2',
    name: 'Gabriel Santana',
    location: 'Santa Mônica, Feira de Santana',
    comment: 'Pedi a Caixa Degustação para a reunião da família e todo mundo elogiou. O de Doce de Leite com Flor de Sal é inexplicável. Chegou super bem embalado e quentinho.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    favoriteFlavor: 'Doce de Leite c/ Flor de Sal',
  },
  {
    id: '3',
    name: 'Beatriz Cerqueira',
    location: 'Kalilândia, Feira de Santana',
    comment: 'O melhor brownie que já comi! Sensacional como eles usam cacau de qualidade e o atendimento pelo WhatsApp é mega rápido. Nota mil!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    favoriteFlavor: 'Cacau 70% e Castanha',
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Qual é o prazo de validade e como devo armazenar os brownies?',
    answer: 'Nossos brownies são feitos artesanalmente todos os dias, sem conservantes! Eles duram até 7 dias em temperatura ambiente em embalagem fechada, ou até 15 dias na geladeira. Uma dica de ouro: aqueça 10 a 15 segundos no micro-ondas antes de comer!',
  },
  {
    id: 'faq-2',
    question: 'Vocês entregam em quais bairros de Feira de Santana?',
    answer: 'Entregamos via delivery expresso em Feira de Santana (Capuchinhos, Santa Mônica, Kalilândia, Brasília, Centro, SIM, etc.). Você também pode retirar no endereço: Rua Frei Henrique de Ascole, 42, Bairro Capuchinhos (atendimento das 8h às 18h).',
  },
  {
    id: 'faq-3',
    question: 'Como funciona o pedido pelo WhatsApp?',
    answer: 'É muito simples! Basta clicar no botão "Peça no WhatsApp" aqui no site, informar quais brownies você deseja e combinaremos os detalhes de entrega ou retirada.',
  },
  {
    id: 'faq-4',
    question: 'Vocês fazem encomendas para festas, casamentos e eventos corporativos?',
    answer: 'Com certeza! Produzimos mini brownies para bem-casados, lembrancinhas de aniversário, caixas corporativas personalizadas e marmitinhas para eventos. Fale conosco no WhatsApp com antecedência para orçamentos especiais.',
  }
];

export const BRAND_STATS = [
  { number: '+10.000', label: 'Brownies Entregues' },
  { number: '100%', label: 'Cacau Nobre Baiano' },
  { number: '4.9★', label: 'Avaliação dos Clientes' },
  { number: ' Diária', label: 'Fornada Fresquinha' },
];
