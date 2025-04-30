import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import siteConfig from '#data/config'

export interface SEOProps extends NextSeoProps {}

export const SEO = ({ title, description, ...props }: SEOProps) => {
  const defaultTitle = siteConfig.seo.title
  const defaultDescription = siteConfig.seo.description
  const titleToUse = title || defaultTitle
  const descriptionToUse = description || defaultDescription

  return (
    <NextSeo
      title={titleToUse}
      description={descriptionToUse}
      openGraph={{
        ...siteConfig.seo.openGraph,
        title: titleToUse,
        description: descriptionToUse,
      }}
      titleTemplate={siteConfig.seo.titleTemplate}
      twitter={siteConfig.seo.twitter}
      additionalMetaTags={siteConfig.seo.additionalMetaTags}
      canonical={siteConfig.seo.canonical}
      {...props}
    />
  )
}
