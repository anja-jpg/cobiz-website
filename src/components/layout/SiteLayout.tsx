import Header from './Header'
import Footer from './Footer'
import StickyMobileCTA from './StickyMobileCTA'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
