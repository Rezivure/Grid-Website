import { Flex, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  const BrandLogo = siteConfig.logo

  return (
    <Flex h={['10', '12', '14']} flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        alignItems="center"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        _hover={{ textDecoration: 'none' }}
      >
        <BrandLogo size={32} />
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
