import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Support Grid - Keep E2EE Location Sharing Free & Private',
  description: 'Support Grid\'s mission to provide end-to-end encrypted (E2EE) location sharing for everyone. Help maintain our E2EE infrastructure and keep private GPS tracking accessible.',
  keywords: [
    'support grid app',
    'donate e2ee app',
    'support encrypted location',
    'grid donation',
    'privacy app support',
    'e2ee location donation'
  ],
  alternates: {
    canonical: `${seoConfig.site.url}/donate`,
  },
  openGraph: {
    title: 'Support Grid E2EE Location Sharing',
    description: 'Help keep end-to-end encrypted location sharing free and accessible for everyone.',
    url: `${seoConfig.site.url}/donate`,
    siteName: 'Grid',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Support Grid E2EE Location App',
    description: 'Help maintain private, encrypted location sharing',
  },
}