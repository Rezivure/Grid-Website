'use client'

import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ModernFaq } from '#components/faq/modern-faq'
import { BrandHero } from '#components/hero/brand-hero'
import faq from '#data/faq'
import React from 'react'
import { PrivacyFeatures } from '#components/pages/privacy-features'
import { TrustSection } from '#components/pages/trust-section'
import { SecurityAuditSection } from '#components/pages/security-audit-section'
import { FinalCTASection } from '#components/pages/final-cta-section'

const Home: NextPage = () => {
  return (
    <Box>
      {/* Hero — minimal brand-kit treatment with built-in nav row */}
      <BrandHero />

      {/* Privacy Features Section */}
      <Box id="privacy-features">
        <PrivacyFeatures />
      </Box>

      {/* Security Audit Section */}
      <SecurityAuditSection />

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <Box>
        <FaqSection />
      </Box>

      {/* Combined Testimonials and Download CTA Section */}
      <FinalCTASection />
    </Box>
  )
}

const FaqSection = () => <ModernFaq {...faq} />

export default Home
