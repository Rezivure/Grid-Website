import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  let logo
  if (siteConfig.logo) {
    logo = (
      <Box 
        as={siteConfig.logo} 
        height={["40px", "48px", "56px"]} // Responsive height
        mt="-6px" // Adjusted margin to compensate for larger size
      />
    )
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    )
  }

  return (
    <Flex 
      h={["10", "12", "14"]} // Adjusted container height
      flexShrink="0" 
      alignItems="flex-start"
    >
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}