import { Metadata } from 'next'
import { seoConfig } from '#data/seo-config'

export const metadata: Metadata = {
  title: seoConfig.pages.about.title,
  description: seoConfig.pages.about.description,
  keywords: seoConfig.pages.about.keywords,
  alternates: {
    canonical: `${seoConfig.site.url}/about`,
  },
  openGraph: {
    title: seoConfig.pages.about.title,
    description: seoConfig.pages.about.description,
    url: `${seoConfig.site.url}/about`,
  },
  twitter: {
    title: seoConfig.pages.about.title,
    description: seoConfig.pages.about.description,
  },
}