import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Privacy Policy - Grid E2EE Location Sharing | Your Data Stays Encrypted',
  description: 'Grid\'s privacy-first approach: End-to-end encrypted (E2EE) location sharing means we can\'t see your data. Learn how Grid protects your privacy with E2EE technology.',
  keywords: [
    'grid privacy policy',
    'e2ee privacy',
    'encrypted location privacy',
    'end-to-end encrypted privacy',
    'secure location data',
    'private gps tracking policy',
    'e2ee location app privacy'
  ],
  alternates: {
    canonical: `${seoConfig.site.url}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy - Grid E2EE Location Sharing',
    description: 'Learn how Grid\'s end-to-end encryption (E2EE) protects your location data. We can\'t see, track, or sell your encrypted location information.',
    url: `${seoConfig.site.url}/privacy`,
    siteName: 'Grid',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Grid E2EE Location Sharing',
    description: 'Grid\'s E2EE technology ensures your location stays private. We can\'t access your encrypted data.',
  },
}