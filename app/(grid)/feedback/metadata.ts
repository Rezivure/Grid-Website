import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Feedback - Help Improve Grid E2EE Location Sharing',
  description: 'Share feedback about Grid\'s end-to-end encrypted (E2EE) location sharing features. Help us improve private GPS tracking and E2EE security.',
  keywords: [
    'grid feedback',
    'e2ee app feedback',
    'location sharing feedback',
    'encrypted app suggestions',
    'grid app improvements',
    'e2ee location feedback'
  ],
  alternates: {
    canonical: `${seoConfig.site.url}/feedback`,
  },
  openGraph: {
    title: 'Feedback - Grid E2EE Location Sharing',
    description: 'Help improve Grid\'s end-to-end encrypted location sharing. Your feedback matters.',
    url: `${seoConfig.site.url}/feedback`,
    siteName: 'Grid',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Feedback - Grid E2EE Location App',
    description: 'Share your thoughts on Grid\'s encrypted location sharing',
  },
}