export interface PresellConfig {
  heroImgUrl: string;
  ebookImgUrl: string;
  stripeLink: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaColor: 'green' | 'gold';
  useSampleImages: boolean;
}

export const DEFAULT_CONFIG: PresellConfig = {
  heroImgUrl: 'COLE_AQUI_A_FOTO_ABUELA',
  ebookImgUrl: 'COLE_AQUI_A_FOTO_EBOOK',
  stripeLink: 'https://buy.stripe.com/5kQaEZeASfPJgw077M4Ni01',
  title: '¡Hola! Qué alegría verte por aquí.',
  subtitle: 'Estás a un paso de descubrir mis 26 recetas ancestrales para que tu perrito viva sano, feliz y sin dolores.',
  ctaText: '👉 ¡SÍ! QUIERO TODO POR SOLO US$ 9,90',
  ctaColor: 'green',
  useSampleImages: false,
};

// High quality botanical sample assets for previewing
export const SAMPLE_HERO_IMAGE = 'https://i.postimg.cc/ZKZ6fmSq/Woman-petting-dog-on-couch-2K-20260914122350.jpg';
export const SAMPLE_EBOOK_IMAGE = 'https://i.postimg.cc/KYVnQgG4/Books-and-tablet-digital-mockup-2K-20260916201118.jpg';
