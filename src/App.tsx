export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] flex justify-center text-[#1A3322]">
      <main className="w-full max-w-[480px] min-h-screen bg-[#FDFBF7] flex flex-col mx-auto">
        {/* Header Image - Carregamento Ultra Rápido */}
        <img
          id="header-hero-img"
          src="https://i.postimg.cc/ZKZ6fmSq/Woman-petting-dog-on-couch-2K-20260914122350.jpg"
          alt="Mujer acariciando a su perro con cariño"
          width="480"
          height="240"
          loading="eager"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "/header-hero.jpg";
          }}
          referrerPolicy="no-referrer"
          className="w-full h-[240px] object-cover block rounded-b-[20px] bg-[#EDE8DC]"
        />

        {/* Área de Conteúdo */}
        <div className="flex-1 flex flex-col items-center text-center px-6 pt-8 pb-10">
          {/* Prova Social */}
          <p 
            id="social-proof"
            className="text-[13px] font-semibold text-[#274E37] mb-2 tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ⭐⭐⭐⭐⭐ Más de 1.000 perritos ayudados
          </p>

          {/* Título (H1) */}
          <h1 
            id="main-title"
            className="font-bold text-[#1A3322] mb-4 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(24px, 6.8vw, 28px)',
              lineHeight: '1.25'
            }}
          >
            ¡Hola! Qué alegría verte por aquí.
          </h1>

          {/* Subtítulo (P) */}
          <p 
            id="main-subtitle"
            className="text-[#4A4A4A] text-[15.5px] leading-[1.6] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Estás a un paso de descubrir mis 26 recetas ancestrales para que tu perrito viva sano, feliz y sin dolores.
          </p>

          {/* Destaque dos Bônus */}
          <p 
            id="bonus-highlight"
            className="text-[14.5px] font-bold text-[#274E37] mb-7"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            🎁 + Incluye 3 Bonos Exclusivos de Regalo (Solo por hoy).
          </p>

          {/* Capa do E-book / Mockup de Livros e Tablet - Carregamento Ultra Rápido */}
          <img
            id="ebook-cover-img"
            src="https://i.postimg.cc/KYVnQgG4/Books-and-tablet-digital-mockup-2K-20260916201118.jpg"
            alt="Mockup do Livro e Tablet - 26 Recetas Ancestrales"
            width="340"
            height="254"
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/books-mockup.jpg";
            }}
            referrerPolicy="no-referrer"
            className="w-[80%] max-w-[340px] h-auto block mb-[34px] rounded-[8px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] bg-[#EDE8DC]"
          />

          {/* Botão de CTA */}
          <a
            id="cta-button"
            href="https://buy.stripe.com/5kQaEZeASfPJgw077M4Ni01"
            className="w-full bg-[#274E37] hover:bg-[#1E3D2B] text-white font-bold text-[16px] py-[18px] px-5 rounded-[8px] flex items-center justify-center text-center tracking-wide shadow-[0_4px_14px_rgba(39,78,55,0.25)] transition-colors duration-200 cursor-pointer select-none"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              animation: 'ctaPulse 2.2s infinite ease-in-out',
            }}
          >
            👉 ¡SÍ! QUIERO TODO POR SOLO US$ 9,90
          </a>

          {/* Rodapé de Confiança */}
          <span 
            id="trust-badge"
            className="text-[12.5px] text-[#8E8E8E] font-medium mt-[14px] text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            🔒 Pago 100% Seguro por Stripe
          </span>
        </div>
      </main>

      <style>{`
        @keyframes ctaPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 14px rgba(39, 78, 55, 0.25);
          }
          50% {
            transform: scale(1.025);
            box-shadow: 0 8px 22px rgba(39, 78, 55, 0.38);
          }
        }
      `}</style>
    </div>
  );
}
