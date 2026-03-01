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
}

export const pageLabels: Record<string, string> = {
  home: 'Homepage',
}
