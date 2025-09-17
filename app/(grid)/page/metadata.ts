import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Grid - E2EE Location Sharing App | End-to-End Encrypted GPS Tracking',
  description: 'Grid is the #1 end-to-end encrypted (E2EE) location sharing app. Share GPS location privately with military-grade E2EE encryption. Open source, self-hostable, zero tracking. The secure Life360 alternative.',
  keywords: [
    'e2ee location sharing',
    'end-to-end encrypted location sharing', 
    'e2ee location app',
    'grid e2ee',
    'end to end encrypted gps',
    'private e2ee location tracker',
    'encrypted location sharing app',
    'e2ee gps tracking',
    'end-to-end encryption location',
    'secure e2ee location',
    'private location sharing e2ee',
    'grid app',
    'mygrid app',
    'life360 alternative',
    'e2ee life360 alternative'
  ],
  alternates: {
    canonical: seoConfig.site.url,
  },
  openGraph: {
    title: 'Grid - E2EE Location Sharing App',
    description: 'End-to-end encrypted (E2EE) location sharing. Military-grade encryption ensures your GPS location stays private. Open source & self-hostable.',
    url: seoConfig.site.url,
    siteName: 'Grid',
    type: 'website',
    images: [
      {
        url: seoConfig.pages.home.image,
        width: 1200,
        height: 630,
        alt: 'Grid - E2EE Location Sharing App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.handle,
    title: 'Grid - E2EE Location Sharing',
    description: 'End-to-end encrypted GPS tracking. Your location stays private with E2EE.',
    images: [seoConfig.pages.home.image],
  },
}