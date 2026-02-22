import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'COBIZ - Flexibele CFO-expertise voor KMO\'s',
    template: '%s | COBIZ',
  },
  description: 'Van cijfersalade naar heldere stuurinformatie. COBIZ biedt flexibele CFO-expertise voor KMO\'s die vooruit willen kijken. Workshop Stuurcijfers, Groeirapport en strategische begeleiding.',
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
    description: 'Van cijfersalade naar heldere stuurinformatie. Flexibele CFO-expertise voor KMO\'s.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <meta name="theme-color" content="#133F3E" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
