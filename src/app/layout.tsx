import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'COBIZ - Flexibele CFO-expertise voor KMO\'s',
    template: '%s | COBIZ',
  },
  description: 'Van cijferchaos naar grip op je cijfers en rust in je hoofd. COBIZ biedt flexibele CFO-expertise voor KMO\'s die vooruit willen kijken. Workshop Stuurcijfers, Groeirapport en strategische begeleiding.',
  keywords: [
    'CFO diensten KMO',
    'stuurcijfers onderneming',
    'stuurinformatie KMO',
    'cashflow problemen oplossen',
    'winstgevendheid verbeteren KMO',
    'financiële rechterhand',
    'business controller Antwerpen',
    'business controller Gent',
    'business controller Brussel',
  ],
  authors: [{ name: 'COBIZ' }],
  creator: 'COBIZ',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://cobiz.be',
    siteName: 'COBIZ',
    title: 'COBIZ - Flexibele CFO-expertise voor KMO\'s',
    description: 'Van cijferchaos naar grip op je cijfers en rust in je hoofd. Flexibele CFO-expertise voor KMO\'s.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'COBIZ',
  description: 'Flexibele CFO-expertise voor KMO\'s. Van cijferchaos naar grip op je cijfers.',
  url: 'https://cobiz.be',
  logo: 'https://cobiz.be/logo-full.svg',
  areaServed: {
    '@type': 'Country',
    name: 'Belgium',
  },
  serviceType: ['CFO diensten', 'Financieel advies', 'Business controlling', 'Stuurcijfers'],
  priceRange: '€€',
  knowsLanguage: ['nl'],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl-BE">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#51B848" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://cobiz.be" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
