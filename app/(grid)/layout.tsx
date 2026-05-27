// app/(grid)/layout.tsx
import { ReactNode } from 'react'
import { MarketingLayout } from '#components/layout'
import { seoConfig } from '#data/seo-config'

export const metadata = {
  metadataBase: new URL(seoConfig.site.url),
  title: {
    default: 'Grid - E2EE Location Sharing App | End-to-End Encrypted GPS Tracking',
    template: '%s | Grid E2EE Location Sharing',
  },
  description: 'Grid is the leading end-to-end encrypted (E2EE) location sharing app. Share GPS location privately with military-grade E2EE encryption. Open source, self-hostable, zero tracking.',
  keywords: [
    'e2ee location sharing',
    'end-to-end encrypted location sharing',
    'e2ee location app',
    'end to end encrypted gps',
    'grid e2ee',
    'encrypted location sharing app',
    'e2ee gps tracking',
    'end-to-end encryption location',
    'secure e2ee location',
    'private location sharing e2ee',
    'grid location app',
    'mygrid app'
  ],
  authors: [{ name: 'Rezivure LLC' }],
  creator: 'Rezivure LLC',
  publisher: 'Rezivure LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: seoConfig.site.url,
  },
  openGraph: {
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    url: seoConfig.site.url,
    siteName: seoConfig.site.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/static/brand/ad-07-display-ditch-1200x628.png',
        width: 1200,
        height: 628,
        alt: 'Grid - Private E2EE Location Sharing App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.handle,
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    images: ['/static/brand/ad-07-display-ditch-1200x628.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/static/favicons/favicon.ico' },
      { url: '/static/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/static/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/static/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/static/brand/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/static/favicons/favicon.ico',
    apple: '/static/brand/grid-app-icon-1024.png',
  },
  manifest: '/manifest.json',
}

export default function GridLayout({ children }: { children: ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>
}
