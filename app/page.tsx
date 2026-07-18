import { HeroSection } from '@/components/homepage/HeroSection'
import { CategoryCards } from '@/components/homepage/CategoryCards'
import { BestsellingProducts } from '@/components/homepage/BestsellingProducts'
import { TrustPillars } from '@/components/homepage/TrustPillars'
import { BundlesSection } from '@/components/homepage/BundlesSection'
import { ReviewsSection } from '@/components/homepage/ReviewsSection'
import { CorporateGifting } from '@/components/homepage/CorporateGifting'
import { NewsletterSignup } from '@/components/homepage/NewsletterSignup'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <BestsellingProducts />
      <TrustPillars />
      <BundlesSection />
      <CorporateGifting />
      <ReviewsSection />
      <NewsletterSignup />
    </>
  )
}
