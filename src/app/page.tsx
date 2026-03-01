import SiteLayout from '@/components/layout/SiteLayout'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ProductSpotlight from '@/components/sections/ProductSpotlight'
import AboutPreview from '@/components/sections/AboutPreview'
import DifferenceSection from '@/components/sections/DifferenceSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import HomeFAQ from '@/components/sections/HomeFAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import { getPageContent } from '@/lib/content'
import type {
  HeroContent,
  ProblemContent,
  ProductsContent,
  AboutContent,
  DifferenceContent,
  TestimonialsContent,
  FAQContent,
  FinalCTAContent,
} from '@/lib/content'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const content = await getPageContent('home')

  return (
    <SiteLayout>
      <HeroSection content={content.hero as HeroContent} />
      <ProblemSection content={content.problem as ProblemContent} />
      <ProductSpotlight content={content.products as ProductsContent} />
      <AboutPreview content={content.about as AboutContent} />
      <DifferenceSection content={content.difference as DifferenceContent} />
      <TestimonialsSection content={content.testimonials as TestimonialsContent} />
      <HomeFAQ content={content.faq as FAQContent} />
      <FinalCTA content={content.finalcta as FinalCTAContent} />
    </SiteLayout>
  )
}
