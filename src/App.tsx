import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OccasionsSection } from './components/OccasionsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export default function App() {
  // General WhatsApp click
  const handleOpenGeneralWhatsapp = () => {
    const textMessage = `Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20brownies%20artesanais.`;
    window.open(`https://wa.me/5575998513158?text=${textMessage}`, '_blank', 'noopener,noreferrer');
  };

  // Scroll to gallery / occasions section
  const handleScrollToMenu = () => {
    const el = document.getElementById('ocasioes') || document.getElementById('galeria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#F8F4EE] font-body selection:bg-[#A66A3F] selection:text-[#F8F4EE]">
      
      {/* Main Header */}
      <Header
        onOpenWhatsapp={handleOpenGeneralWhatsapp}
      />

      {/* Page Sections */}
      <main>
        <Hero
          onOpenWhatsapp={handleOpenGeneralWhatsapp}
          onScrollToMenu={handleScrollToMenu}
        />

        <AboutSection />

        <OccasionsSection onOpenWhatsapp={handleOpenGeneralWhatsapp} />

        <GallerySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp onOpenWhatsapp={handleOpenGeneralWhatsapp} />

    </div>
  );
}
