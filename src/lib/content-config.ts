// Client-safe exports: types, labels, defaults
// No database imports here - safe for 'use client' components

// ── Types per section ──────────────────────────────────────────

export interface HeroContent {
  title: string
  subtitle: string
  seoText: string
}

export interface ProblemContent {
  title: string
  problems: string[]
  ctaDescription: string
}

export interface ProductsContent {
  title: string
  subtitle: string
  items: Array<{
    badge: string
    title: string
    description: string
    price: string
    details: string
    ctaLabel: string
    ctaHref: string
  }>
}

export interface AboutContent {
  title: string
  paragraph1: string
  quote: string
  paragraph2: string
}

export interface DifferenceContent {
  title: string
  items: Array<{ title: string; text: string }>
}

export interface TestimonialsContent {
  title: string
  items: Array<{ quote: string; name: string; source: string }>
}

export interface FAQContent {
  title: string
  items: Array<{ question: string; answer: string }>
}

export interface FinalCTAContent {
  title: string
  subtitle: string
}

export interface BannerContent {
  title: string
  subtitle: string
}

export interface OverOnsStoryContent {
  paragraph1: string
  paragraph2: string
  quote: string
}

export interface OverOnsExpertiseContent {
  title: string
  items: Array<{ title: string; text: string }>
}

export interface OverOnsValuesContent {
  title: string
  items: Array<{ title: string; description: string }>
}

export interface OverOnsMissionContent {
  title: string
  paragraph1: string
  paragraph2: string
}

// ── Sectie-labels voor de admin ────────────────────────────────

export const sectionLabels: Record<string, Record<string, string>> = {
  home: {
    hero: 'Hero (bovenaan)',
    problem: 'Herkenningspunten',
    products: 'Diensten',
    about: 'Over Ons preview',
    difference: 'Hoe wij verschillen',
    testimonials: 'Testimonials',
    faq: 'Veelgestelde vragen',
    finalcta: 'Call-to-action (onderaan)',
  },
  banners: {
    'over-ons': 'Over Ons',
    diensten: 'Diensten',
    contact: 'Contact',
    'gratis-gesprek': 'Gratis Gesprek',
    groeirapport: 'Groeirapport',
    'workshop-stuurcijfers': 'Workshop Stuurcijfers',
    opleidingstraject: 'Opleidingstraject',
    inzichten: 'Inzichten',
  },
  overons: {
    story: 'Ons verhaal',
    expertise: 'Expertise',
    values: 'Waarom COBIZ',
    mission: 'Missie',
  },
}

export const pageLabels: Record<string, string> = {
  home: 'Homepage',
  banners: 'Pagina-banners',
  overons: 'Over Ons pagina',
}
