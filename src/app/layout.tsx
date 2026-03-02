import type { Metadata } from 'next'
import '@/styles/globals.css'
import CookieConsentBanner from '@/components/layout/CookieConsent'
import AnalyticsLoader from '@/components/layout/AnalyticsLoader'

export const metadata: Metadata = {
  metadataBase: new URL('https://cobiz.be'),
  title: {
    default: 'Externe CFO voor KMO\'s | Flexibele financiële begeleiding | COBIZ',
    template: '%s',
  },
  description: 'COBIZ biedt flexibele CFO-expertise en financiële stuurinformatie voor KMO\'s in Dendermonde, Antwerpen, Brussel en Gent. Workshop Stuurcijfers, Groeirapport en strategische begeleiding op maat.',
  keywords: [
    'externe CFO KMO',
    'CFO diensten KMO',
    'stuurcijfers onderneming',
    'stuurinformatie KMO',
    'financiële sturing KMO',
    'cashflow problemen oplossen',
    'winstgevendheid verbeteren KMO',
    'financiële rechterhand ondernemer',
    'business controller Dendermonde',
    'business controller Antwerpen',
    'business controller Gent',
    'business controller Brussel',
    'CFO Dendermonde',
    'financieel advies Dendermonde',
    'KMO begeleiding Oost-Vlaanderen',
    'financieel management KMO',
    'boekhouder vs CFO',
  ],
  authors: [{ name: 'COBIZ' }],
  creator: 'COBIZ',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://cobiz.be',
    siteName: 'COBIZ',
    title: 'Externe CFO voor KMO\'s | COBIZ',
    description: 'Flexibele CFO-expertise en financiële stuurinformatie voor KMO\'s. Workshop Stuurcijfers, Groeirapport en strategische begeleiding.',
  },
  twitter: {
    card: 'summary_large_image',
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
  description: 'Flexibele CFO-expertise en financiële stuurinformatie voor KMO\'s in de regio Dendermonde. Workshop Stuurcijfers, Groeirapport en strategische begeleiding.',
  url: 'https://cobiz.be',
  logo: 'https://cobiz.be/logo-full.png',
  telephone: '+32475544952',
  email: 'info@cobiz.be',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hoogveld 105',
    postalCode: '9200',
    addressLocality: 'Dendermonde',
    addressRegion: 'Oost-Vlaanderen',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.0286,
    longitude: 4.1003,
  },
  areaServed: [
    { '@type': 'City', name: 'Dendermonde' },
    { '@type': 'City', name: 'Lebbeke' },
    { '@type': 'City', name: 'Buggenhout' },
    { '@type': 'City', name: 'Hamme' },
    { '@type': 'City', name: 'Zele' },
    { '@type': 'City', name: 'Berlare' },
    { '@type': 'City', name: 'Wetteren' },
    { '@type': 'City', name: 'Aalst' },
    { '@type': 'City', name: 'Lokeren' },
    { '@type': 'City', name: 'Temse' },
    { '@type': 'City', name: 'Antwerpen' },
    { '@type': 'City', name: 'Brussel' },
    { '@type': 'City', name: 'Gent' },
  ],
  founder: [
    { '@type': 'Person', name: 'Anja Warrot' },
    { '@type': 'Person', name: 'Dirk Colman' },
  ],
  knowsAbout: [
    'CFO diensten',
    'Financiële stuurinformatie',
    'Stuurcijfers',
    'Cashflow management',
    'Winstgevendheid KMO',
    'Financiële planning',
    'Business controlling',
  ],
  serviceType: ['CFO diensten', 'Financieel advies', 'Business controlling', 'Stuurcijfers', 'Workshop financieel management'],
  priceRange: '€€',
  knowsLanguage: ['nl'],
  sameAs: [
    'https://share.google/HMIlC7q4j4Ud55mZB',
    'https://www.linkedin.com/company/cobiz-consultancy/',
    'https://www.facebook.com/COBIZConsult',
    'https://www.instagram.com/cobizconsult/',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        {children}
        <CookieConsentBanner />
        <AnalyticsLoader />
      </body>
    </html>
  )
}
