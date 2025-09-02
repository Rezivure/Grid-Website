import { HStack, Text, Box } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'

import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'
import { FaDiscord } from 'react-icons/fa'
import { Link } from '@saas-ui/react'

import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        // Custom Discord button for desktop
        if (id === 'discord-nav') {
          return (
            <Box key={i} display={['none', null, 'block']}>
              <Link
                href={href}
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', textDecoration: 'none' }}
              >
                <HStack
                  spacing={2}
                  bg="rgba(88, 101, 242, 0.1)"
                  px={4}
                  py={2}
                  borderRadius="full"
                  border="2px solid"
                  borderColor="#5865F2"
                  _hover={{ bg: 'rgba(88, 101, 242, 0.2)' }}
                >
                  <FaDiscord size={20} color="#5865F2" />
                  <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    color="#5865F2"
                  >
                    Discord
                  </Text>
                </HStack>
              </Link>
            </Box>
          )
        }
        
        return (
          <NavLink
            display={['none', null, 'block']}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!path?.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}


      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
