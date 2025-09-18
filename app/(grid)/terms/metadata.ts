import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Terms of Service - Grid E2EE Location Sharing App',
  description: 'Terms and conditions for Grid\'s end-to-end encrypted (E2EE) location sharing service. Understand your rights using our secure E2EE GPS tracking app.',
  keywords: [
    'grid terms of service',
    'e2ee app terms',
    'encrypted location terms',
    'location sharing agreement',
    'grid app terms',
    'e2ee terms conditions'
  ],
  alternates: {
    canonical: `${seoConfig.site.url}/terms`,
  },
  openGraph: {
    title: 'Terms of Service - Grid E2EE Location Sharing',
    description: 'Terms for using Grid\'s end-to-end encrypted location sharing service. Privacy-first GPS tracking.',
    url: `${seoConfig.site.url}/terms`,
    siteName: 'Grid',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms - Grid E2EE Location Sharing',
    description: 'Terms for Grid\'s encrypted location sharing service',
  },
}