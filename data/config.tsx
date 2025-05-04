import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLink, FaMastodon, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Grid – Private Location Sharing',
    description: 'Grid is an end-to-end encrypted location sharing app. Stay private, stay connected.',
    canonical: 'https://mygrid.app',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://mygrid.app',
      site_name: 'Grid',
      title: 'Grid – Private Location Sharing',
      description:
        'Grid is an encrypted location sharing app that respects your privacy. Unlike Life360, Grid never tracks or sells your location data.',
      images: [
        {
          url: 'https://r2-static-grid-files.mygrid.app/iphone-mockup.png',
          width: 1200,
          height: 630,
          alt: 'Grid App Preview',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      handle: '@MyGridHQ',
      site: '@MyGridHQ',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        name: 'application-name',
        content: 'Grid',
      },
    ],
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      {
        label: 'Github',
        href: 'https://github.com/rezivure/Grid-Mobile',
        id: 'github',
      },
      {
        label: 'Get Support',
        href: '/help',
        id: 'help',
      },
      {
        label: 'Newsletter',
        href: 'https://rezivure.io',
        id: 'blog',
      },
      {
        label: 'Documentation',
        href: 'https://docs.mygrid.app',
        id: 'docs',
      },
      {
        label: 'Donate',
        href: '/donate',
        id: 'donate',
      },
      {
        label: 'Get Grid',
        href: 'https://get.grid.lat',
        variant: 'primary',
        id: 'get-grid',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2024 Rezivure LLC. All rights reserved.
      </>
    ),
    links: [
      {
        href: '/about',
        label: 'About',
      },
      {
        href: '/privacy',
        label: 'Privacy Policy',
      },
      {
        href: '/terms',
        label: 'Terms and Conditions',
      },
      {
        href: '/report',
        label: 'Report Abuse',
      },
      {
        href: 'mailto:contact@mygrid.app',
        label: 'Contact',
      },
      {
        href: 'https://x.com/MyGridHQ',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/rezivure/grid-mobile',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://mastodon.social/@getgrid',
        label: <FaMastodon size="14" />,
      },
      {
        href: 'https://bsky.app/profile/getgrid.bsky.social',
        label: <FaLink size="14" />,
      },
    ],
  },
}

export default siteConfig
