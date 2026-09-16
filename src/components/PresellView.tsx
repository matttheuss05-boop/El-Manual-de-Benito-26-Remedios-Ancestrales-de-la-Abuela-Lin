import React from 'react';
import { PresellConfig, SAMPLE_HERO_IMAGE, SAMPLE_EBOOK_IMAGE } from '../types';
import { Image as ImageIcon, BookOpen } from 'lucide-react';

interface PresellViewProps {
  config: PresellConfig;
}

export const PresellView: React.FC<PresellViewProps> = ({ config }) => {
  const isHeroPlaceholder = config.heroImgUrl === 'COLE_AQUI_A_FOTO_ABUELA' && !config.useSampleImages;
  const isEbookPlaceholder = config.ebookImgUrl === 'COLE_AQUI_A_FOTO_EBOOK' && !config.useSampleImages;

  const heroSrc = config.useSampleImages ? SAMPLE_HERO_IMAGE : config.heroImgUrl;
  const ebookSrc = config.useSampleImages ? SAMPLE_EBOOK_IMAGE : config.ebookImgUrl;

  const isGold = config.ctaColor === 'gold';

  return (
    <div 
      id="presell-container"
      className="w-full max-w-[440px] mx-auto min-h-screen px-5 py-6 sm:py-8 flex flex-col items-center text-center transition-all duration-300"
      style={{
        backgroundColor: '#F9F6F0',
        color: '#1E392A',
        fontFamily: "'Lora', Georgia, serif",
      }}
    >
      {/* 1. Imagem de Cabeçalho (Hero Image) */}
      <div className="w-full mb-5 relative group">
        {isHeroPlaceholder ? (
          <div 
            id="hero-placeholder-box"
            className="w-full h-[220px] rounded-xl flex flex-col items-center justify-center p-4 border border-dashed border-[#1E392A]/30 bg-[#EDE8DC] text-[#1E392A] shadow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#1E392A]/10 flex items-center justify-center mb-2">
              <ImageIcon className="w-6 h-6 text-[#1E392A]/80" />
            </div>
            <p className="font-semibold text-sm tracking-wide">COLE_AQUI_A_FOTO_ABUELA</p>
            <p className="text-xs text-[#1E392A]/70 mt-1 max-w-[260px]">
              Imagem de Cabeçalho (max-height: 250px, bordas arredondadas e sombra suave)
            </p>
          </div>
        ) : (
          <img 
            id="hero-image"
            src={heroSrc} 
            alt="Foto de la Abuela con remedios ancestrales para perritos" 
            className="w-full max-h-[250px] object-cover rounded-xl shadow-[0_4px_18px_rgba(30,57,42,0.12)] border border-[#1E392A]/10"
            onError={(e) => {
              // Gracefully handle if external custom url fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        )}
      </div>

      {/* 2. Título de Boas-vindas (H1) */}
      <h1 
        id="welcome-heading"
        className="font-bold text-[#1E392A] mb-3.5 tracking-tight"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(24px, 6.5vw, 29px)',
          lineHeight: '1.25',
        }}
      >
        {config.title}
      </h1>

      {/* 3. Subtítulo / Promessa (P) */}
      <p 
        id="promise-paragraph"
        className="text-[#254934] mb-6 px-1 leading-relaxed text-[16px] sm:text-[17px] font-normal"
        style={{
          lineHeight: '1.58',
        }}
      >
        {config.subtitle}
      </p>

      {/* 4. Imagem do Produto (Ebook 3D / Físico) */}
      <div className="w-[70%] max-w-[270px] mx-auto mb-7 relative flex justify-center">
        {isEbookPlaceholder ? (
          <div 
            id="ebook-placeholder-box"
            className="w-full aspect-[3/4] rounded-lg flex flex-col items-center justify-center p-4 border border-dashed border-[#1E392A]/30 bg-[#EDE8DC] text-[#1E392A] shadow-[-8px_12px_28px_rgba(30,57,42,0.22)]"
          >
            <div className="w-12 h-12 rounded-full bg-[#1E392A]/10 flex items-center justify-center mb-2">
              <BookOpen className="w-6 h-6 text-[#1E392A]/80" />
            </div>
            <p className="font-semibold text-xs tracking-wide text-center">COLE_AQUI_A_FOTO_EBOOK</p>
            <p className="text-[11px] text-[#1E392A]/70 mt-1 text-center">
              Efeito livro físico 3D (70% largura)
            </p>
          </div>
        ) : (
          <div className="relative">
            <img 
              id="ebook-image"
              src={ebookSrc} 
              alt="Ebook 26 Remedios Ancestrales para tu Perrito" 
              className="w-full h-auto rounded-lg shadow-[-8px_12px_28px_rgba(30,57,42,0.25),0_3px_8px_rgba(0,0,0,0.08)] border border-[#1E392A]/10 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* 5. O Botão de Ação (CTA) */}
      <a 
        id="cta-action-button"
        href={config.stripeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[90%] max-w-[380px] py-[17px] px-4 rounded-full font-bold text-[16px] sm:text-[17.5px] tracking-wide inline-flex items-center justify-center text-center transition-all duration-300 active:scale-[0.98] select-none cursor-pointer"
        style={{
          backgroundColor: isGold ? '#D4AF37' : '#2E5A3F',
          color: isGold ? '#1E392A' : '#FFFFFF',
          boxShadow: isGold 
            ? '0 8px 24px rgba(212, 175, 55, 0.45)' 
            : '0 8px 24px rgba(46, 90, 63, 0.38)',
          animation: 'pulseCTA 2.2s infinite ease-in-out',
        }}
      >
        {config.ctaText}
      </a>

      {/* 6. Rodapé de Confiança (Trust Badges) */}
      <footer id="trust-badges-footer" className="flex items-center justify-center flex-wrap gap-4 mt-4.5 text-[#385E48] text-[13px] sm:text-[13.5px] font-medium">
        <span className="inline-flex items-center gap-1.5">
          <span>🔒</span>
          <span>Pago 100% Seguro</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span>✉️</span>
          <span>Acceso Inmediato</span>
        </span>
      </footer>

      <style>{`
        @keyframes pulseCTA {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.028);
          }
        }
      `}</style>
    </div>
  );
};
