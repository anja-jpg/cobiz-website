import SiteLayout from '@/components/layout/SiteLayout'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ProductSpotlight from '@/components/sections/ProductSpotlight'
import AboutPreview from '@/components/sections/AboutPreview'
import DifferenceSection from '@/components/sections/DifferenceSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <ProblemSection />
      <ProductSpotlight />
      <AboutPreview />
      <DifferenceSection />
      {/* Social Proof section - Phase 2, after first clients */}
      <FinalCTA />
    </SiteLayout>
  )
}
