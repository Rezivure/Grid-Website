// app/(grid)/layout.tsx
import { ReactNode } from 'react'

export const metadata = {
  title: 'Grid – Private Location Sharing',
  description:
    'Grid is an end-to-end encrypted location sharing app. Stay private, stay connected.',
  metadataBase: new URL('https://mygrid.app'),
  openGraph: {
    title: 'Grid – Private Location Sharing',
    description:
      'Grid is an end-to-end encrypted location sharing app. Stay private, stay connected.',
    url: 'https://mygrid.app',
    siteName: 'Grid',
    type: 'website',
    images: [
      {
        url: 'https://r2-static-grid-files.mygrid.app/iphone-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Grid screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MyGridHQ',
    title: 'Grid – Private Location Sharing',
    description:
      'Grid is an end-to-end encrypted location sharing app. Stay private, stay connected.',
    images: ['https://r2-static-grid-files.mygrid.app/iphone-mockup.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function GridLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
