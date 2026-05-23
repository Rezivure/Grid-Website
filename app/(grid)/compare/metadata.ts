import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: 'Grid vs Life360 - Private, Encrypted Location Sharing Compared',
  description:
    'Grid vs Life360 — a straightforward comparison of encryption, account requirements, map data sources, GrapheneOS support, and what each service does with your location data.',
  keywords: [
    'grid vs life360',
    'life360 alternative',
    'encrypted life360 alternative',
    'open source life360 alternative',
    'private family locator',
    'grapheneos location sharing',
  ],
  alternates: {
    canonical: `${seoConfig.site.url}/compare`,
  },
  openGraph: {
    title: 'Grid vs Life360 - Private, Encrypted Location Sharing Compared',
    description:
      'How Grid compares to Life360 on encryption, identity, map providers, and data selling.',
    url: `${seoConfig.site.url}/compare`,
  },
  twitter: {
    title: 'Grid vs Life360 - Private, Encrypted Location Sharing Compared',
    description:
      'How Grid compares to Life360 on encryption, identity, map providers, and data selling.',
  },
}
