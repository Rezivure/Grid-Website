import Head from 'next/head'
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
}

const defaultTitle = 'Grid – Private Location Sharing'
const defaultDescription =
  'Grid is an end-to-end encrypted location sharing app. Stay private, stay connected.'
const defaultCanonical = 'https://mygrid.app'

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const titleToUse = title || defaultTitle
  const descriptionToUse = description || defaultDescription
  const canonicalToUse = canonical || defaultCanonical

  return (
    <Head>
      <title>{titleToUse}</title>
      <meta name="description" content={descriptionToUse} />
      <meta name="theme-color" content="#000000" />
      <meta name="application-name" content="Grid" />

      <meta property="og:title" content={titleToUse} />
      <meta property="og:description" content={descriptionToUse} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalToUse} />
      <meta property="og:image" content="https://r2-static-grid-files.mygrid.app/iphone-mockup.png" />
      <meta property="og:site_name" content="Grid" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MyGridHQ" />
      <meta name="twitter:title" content={titleToUse} />
      <meta name="twitter:description" content={descriptionToUse} />
      <meta name="twitter:image" content="https://r2-static-grid-files.mygrid.app/iphone-mockup.png" />

      <link rel="canonical" href={canonicalToUse} />
    </Head>
  )
}
