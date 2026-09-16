import React from 'react';
import { X, Sparkles, RefreshCw, Palette } from 'lucide-react';
import { PresellConfig, DEFAULT_CONFIG } from '../types';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: PresellConfig;
  onChange: (updated: PresellConfig) => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="customize-drawer-panel"
        className="w-full max-w-md h-full bg-[#FAFAF5] text-[#1E392A] shadow-2xl flex flex-col border-l border-[#1E392A]/15 overflow-hidden animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1E392A]/10 bg-[#F4EFE6]">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#2E5A3F]" />
            <h3 className="font-serif font-bold text-lg text-[#1E392A]">Personalizar & Testar</h3>
          </div>
          <button
            id="close-drawer-btn"
            onClick={onClose}
            className="p-1.5 text-[#1E392A]/60 hover:text-[#1E392A] rounded-lg hover:bg-[#1E392A]/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Quick Demo Toggle */}
          <div className="p-4 rounded-xl bg-[#2E5A3F]/10 border border-[#2E5A3F]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2E5A3F]" />
                <span className="font-semibold text-sm text-[#1E392A]">Fotos de Demonstração</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={config.useSampleImages}
                  onChange={(e) => onChange({ ...config, useSampleImages: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E5A3F]"></div>
              </label>
            </div>
            <p className="text-xs text-[#2E5A3F]/80 mt-1.5 leading-relaxed">
              Ative para ver como a página fica com fotos de alta qualidade de uma avó botânica e o livro de ervas.
            </p>
          </div>

          {/* CTA Color Toggle */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1E392A]/80 block">
              Cor do Botão de CTA
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onChange({ ...config, ctaColor: 'green' })}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                  config.ctaColor === 'green'
                    ? 'bg-[#2E5A3F] text-white border-[#2E5A3F] shadow-sm'
                    : 'bg-white text-[#1E392A] border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-[#2E5A3F] border border-white"></span>
                Verde Botânico (#2E5A3F)
              </button>
              <button
                type="button"
                onClick={() => onChange({ ...config, ctaColor: 'gold' })}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                  config.ctaColor === 'gold'
                    ? 'bg-[#D4AF37] text-[#1E392A] border-[#D4AF37] shadow-sm'
                    : 'bg-white text-[#1E392A] border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-[#D4AF37] border border-stone-400"></span>
                Dourado Rústico (#D4AF37)
              </button>
            </div>
          </div>

          {/* Custom URLs */}
          <div className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1E392A] flex justify-between">
                <span>URL Foto da Abuela (Hero)</span>
                <span className="font-normal text-[11px] text-stone-500">max-height: 250px</span>
              </label>
              <input 
                type="text" 
                value={config.heroImgUrl}
                onChange={(e) => onChange({ ...config, heroImgUrl: e.target.value })}
                placeholder="COLE_AQUI_A_FOTO_ABUELA ou https://..."
                className="w-full text-xs font-mono px-3 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1E392A] flex justify-between">
                <span>URL Foto do Ebook (3D)</span>
                <span className="font-normal text-[11px] text-stone-500">70% largura</span>
              </label>
              <input 
                type="text" 
                value={config.ebookImgUrl}
                onChange={(e) => onChange({ ...config, ebookImgUrl: e.target.value })}
                placeholder="COLE_AQUI_A_FOTO_EBOOK ou https://..."
                className="w-full text-xs font-mono px-3 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1E392A] flex justify-between">
                <span>Link de Pagamento Stripe / Checkout</span>
                <span className="font-normal text-[11px] text-stone-500">href no botão</span>
              </label>
              <input 
                type="text" 
                value={config.stripeLink}
                onChange={(e) => onChange({ ...config, stripeLink: e.target.value })}
                placeholder="COLE_AQUI_O_LINK_STRIPE ou https://buy.stripe.com/..."
                className="w-full text-xs font-mono px-3 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50"
              />
            </div>
          </div>

          {/* Copy texts customization if desired */}
          <div className="space-y-3 pt-3 border-t border-stone-200">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1E392A]">Texto do Título (H1)</label>
              <input 
                type="text" 
                value={config.title}
                onChange={(e) => onChange({ ...config, title: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1E392A]">Texto do Subtítulo (P)</label>
              <textarea 
                rows={2}
                value={config.subtitle}
                onChange={(e) => onChange({ ...config, subtitle: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1E392A]">Texto do Botão (CTA)</label>
              <input 
                type="text" 
                value={config.ctaText}
                onChange={(e) => onChange({ ...config, ctaText: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E5A3F]/50"
              />
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onChange(DEFAULT_CONFIG)}
              className="w-full py-2.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-300 rounded-lg flex items-center justify-center gap-1.5 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Restaurar Valores Padrão (Placeholders Oficiais)
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1E392A]/10 bg-[#F4EFE6]">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-[#2E5A3F] hover:bg-[#244B34] text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer"
          >
            Aplicar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
