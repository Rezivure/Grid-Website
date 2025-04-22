import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props

  // Separate text links and icon links
  const textLinks = siteConfig.footer.links.filter(
    (link) => typeof link.label === 'string'
  )
  const iconLinks = siteConfig.footer.links.filter(
    (link) => typeof link.label !== 'string'
  )

  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={{ base: 1, md: columns }} spacing={8}>
          <Stack spacing="8">
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
              </Flex>
              <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text>
            </Stack>
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Stack>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            justify={{ base: 'flex-start', md: 'flex-end' }}
            align={{ base: 'flex-start', md: 'center' }}
          >
            {/* Text Links */}
            {textLinks.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}

            {/* Social Icon Links */}
            <HStack spacing={4}>
              {iconLinks.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `© ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
