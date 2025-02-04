import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLink, FaMastodon, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Grid',
    description: 'Private Location Sharing',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        label: 'Get Grid',
        href: 'https://get.grid.lat',
      },
      {
        label: 'Help',
        href: '/help',
      },
      {
        label: 'Blog',
        href: 'https://rezivure.io',
      },
      {
        label: 'Docs',
        href: 'https://docs.mygrid.app',
      },
      {
        label: 'Github',
        href: 'https://github.com/rezivure/Grid-Mobile',
        variant: 'primary',
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
