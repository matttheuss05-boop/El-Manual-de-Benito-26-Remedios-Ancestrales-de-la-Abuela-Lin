import React, { useState } from 'react';
import { X, Check, Copy, Download, Code2 } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
}

export const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose, code }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'presell-remedios-ancestrales.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="code-modal-dialog"
        className="w-full max-w-3xl max-h-[88vh] bg-[#1a2e23] border border-[#2e5a3f]/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e5a3f]/40 bg-[#14241b]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2e5a3f]/50 flex items-center justify-center text-[#d4af37]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#f9f6f0]">Código HTML5 + CSS3 Embutido</h3>
              <p className="text-xs text-[#a0b5a8]">Arquivo completo e standalone, pronto para uso em produção</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              id="copy-in-modal-btn"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#2e5a3f] hover:bg-[#39724e] text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
            <button
              id="download-code-btn"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#d4af37] hover:bg-[#c29c28] text-[#1e392a] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Baixar .html
            </button>
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="p-1.5 text-[#a0b5a8] hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code View */}
        <div className="flex-1 overflow-auto p-4 bg-[#0d1712] font-mono text-xs leading-relaxed text-[#c6dbce] select-text">
          <pre className="whitespace-pre overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#2e5a3f]/40 bg-[#14241b] text-xs text-[#8ca897] flex items-center justify-between">
          <span>Mobile-First • Sem dependências • Estética Vintage Botanical</span>
          <span>{code.length} caracteres</span>
        </div>
      </div>
    </div>
  );
};
