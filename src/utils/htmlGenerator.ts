import { PresellConfig } from '../types';

export function generatePresellHTML(config: PresellConfig): string {
  const ctaBgColor = config.ctaColor === 'gold' ? '#D4AF37' : '#2E5A3F';
  const ctaHoverBg = config.ctaColor === 'gold' ? '#C29C28' : '#244B34';
  const ctaTextColor = config.ctaColor === 'gold' ? '#1E392A' : '#FFFFFF';
  const ctaShadowRgba = config.ctaColor === 'gold' ? 'rgba(212, 175, 55, 0.4)' : 'rgba(46, 90, 63, 0.38)';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${config.title} - 26 Remedios Ancestrales</title>
  
  <!-- Google Fonts: Playfair Display + Lora -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">

  <style>
    /* Reset & Estilos Base */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background-color: #F9F6F0; /* Tom creme/pergaminho vintage */
      color: #1E392A; /* Verde escuro rústico sofisticado */
      font-family: 'Lora', Georgia, serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Container Principal Mobile-First */
    .presell-wrapper {
      width: 100%;
      max-width: 440px;
      margin: 0 auto;
      padding: 24px 20px 48px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    /* 1. Imagem de Cabeçalho (Hero Image) */
    .hero-img {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      border-radius: 14px;
      box-shadow: 0 4px 18px rgba(30, 57, 42, 0.12);
      margin-bottom: 22px;
      display: block;
      background-color: #EDE8DC;
    }

    /* 2. Título de Boas-vindas (H1) */
    h1.welcome-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 28px;
      line-height: 1.25;
      font-weight: 700;
      color: #1E392A;
      margin: 0 0 14px 0;
      letter-spacing: -0.01em;
    }

    /* 3. Subtítulo / Promessa (P) */
    p.promise-subtitle {
      font-family: 'Lora', Georgia, serif;
      font-size: 16.5px;
      line-height: 1.58;
      color: #254934;
      margin: 0 0 26px 0;
      padding: 0 6px;
      font-weight: 400;
    }

    /* 4. Imagem do Produto (Livro Físico com Sombra) */
    .product-img {
      width: 70%;
      max-width: 270px;
      height: auto;
      margin: 0 auto 28px auto;
      display: block;
      border-radius: 8px;
      box-shadow: -8px 12px 28px rgba(30, 57, 42, 0.22), 0 3px 8px rgba(0, 0, 0, 0.08);
      background-color: #EDE8DC;
    }

    /* 5. O Botão de Ação (CTA Pulsante de Alta Conversão) */
    .cta-button {
      width: 90%;
      max-width: 380px;
      background-color: ${ctaBgColor};
      color: ${ctaTextColor};
      font-family: 'Lora', Georgia, serif;
      font-size: 17px;
      font-weight: 700;
      text-decoration: none;
      padding: 18px 16px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 0.02em;
      box-shadow: 0 8px 24px ${ctaShadowRgba};
      cursor: pointer;
      transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
      animation: pulse-cta 2.2s infinite ease-in-out;
    }

    .cta-button:hover {
      background-color: ${ctaHoverBg};
      transform: translateY(-2px) scale(1.01);
      box-shadow: 0 12px 28px ${ctaShadowRgba};
    }

    .cta-button:active {
      transform: translateY(1px) scale(0.99);
      box-shadow: 0 4px 12px ${ctaShadowRgba};
    }

    /* Animação Pulsante */
    @keyframes pulse-cta {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 6px 20px ${ctaShadowRgba};
      }
      50% {
        transform: scale(1.03);
        box-shadow: 0 10px 28px ${ctaShadowRgba};
      }
    }

    /* 6. Rodapé de Confiança (Trust Badges) */
    .trust-badges {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 18px;
      font-size: 13.5px;
      color: #385E48;
      font-weight: 500;
    }

    .badge-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    /* Responsividade */
    @media (max-width: 340px) {
      h1.welcome-title {
        font-size: 24px;
      }
      p.promise-subtitle {
        font-size: 15px;
      }
      .cta-button {
        font-size: 15px;
        padding: 16px 12px;
      }
      .trust-badges {
        gap: 10px;
        font-size: 12px;
      }
    }
  </style>
</head>
<body>

  <main class="presell-wrapper">
    
    <!-- 1. Imagem de Cabeçalho (Hero Image) -->
    <img 
      src="${config.heroImgUrl}" 
      alt="Foto de la Abuela con remedios ancestrales" 
      class="hero-img"
    />

    <!-- 2. Título de Boas-vindas (H1) -->
    <h1 class="welcome-title">${config.title}</h1>

    <!-- 3. Subtítulo / Promessa (P) -->
    <p class="promise-subtitle">${config.subtitle}</p>

    <!-- 4. Imagem do Produto (Ebook Físico 3D) -->
    <img 
      src="${config.ebookImgUrl}" 
      alt="Ebook 26 Remedios Ancestrales para tu Perrito" 
      class="product-img"
    />

    <!-- 5. O Botão de Ação (CTA) -->
    <a 
      href="${config.stripeLink}" 
      class="cta-button"
      target="_blank" 
      rel="noopener noreferrer"
    >
      ${config.ctaText}
    </a>

    <!-- 6. Rodapé de Confiança (Trust Badges) -->
    <footer class="trust-badges">
      <span class="badge-item">🔒 Pago 100% Seguro</span>
      <span class="badge-item">✉️ Acceso Inmediato</span>
    </footer>

  </main>

</body>
</html>`;
}
