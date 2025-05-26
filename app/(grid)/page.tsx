'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react'
import GitHubStars from '#components/extras/github-stars'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Faq } from '#components/faq'
import FeatureSection from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'
import faq from '#data/faq'
 

const Home: NextPage = () => {
  const lightBg = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex={-1} />
        <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb={{ base: 20, lg: 32 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            gap={{ base: 16, lg: 24 }}
          >
            {/* Copy */}
            <Box flex="1" maxW={{ base: 'full', lg: '480px' }}>
              <FallInPlace>
                <Heading
                  as="h1"
                  fontSize={{ base: '6xl', sm: '7xl', lg: '7xl' }}
                  lineHeight="1.1"
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  Share Your Location,<Br />Not Your Privacy.
                </Heading>
              </FallInPlace>

              <FallInPlace delay={0.4}>
                <Text
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  mt={6}
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  Share locations with family, friends, and co‑workers – all with
                  privacy baked in. Our end‑to‑end encrypted service keeps your
                  location data under your control. No selling. No sharing. Just
                  the privacy you deserve.
                </Text>
              </FallInPlace>

              <FallInPlace delay={0.5}>
                <Stack
                  spacing={6}
                  mt={8}
                  align={{ base: 'center', lg: 'flex-start' }}
                >
                  <Wrap spacing={8} align="center">
                    <WrapItem>
                      <Image
                        src="/static/images/matrix-logo-white.svg"
                        alt="Matrix Logo"
                        height={40}
                        width={40}
                      />
                    </WrapItem>
                    <WrapItem>
                      <Image
                        src="/static/images/flutter-logo.svg"
                        alt="Flutter Logo"
                        height={40}
                        width={40}
                      />
                    </WrapItem>
                    <WrapItem>
                      <Image
                        src="/static/images/protomaps-logo.svg"
                        alt="Protomaps Logo"
                        height={30}
                        width={30}
                      />
                    </WrapItem>
                    <GitHubStars />
                  </Wrap>

                  <HStack spacing={4}>
                    <Link href="https://appstore.mygrid.app">
                      <Image
                        src="/static/images/app-store-badge.svg"
                        alt="Download on the App Store"
                        width={140}
                        height={50}
                      />
                    </Link>
                    <Link href="https://playstore.mygrid.app">
                      <Image
                        src="/static/images/google-play-badge.svg"
                        alt="Get it on Google Play"
                        width={156}
                        height={50}
                      />
                    </Link>
                  </HStack>
                </Stack>
              </FallInPlace>
            </Box>

            {/* Phone mockup */}
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
            >
              <Image
                src="https://r2-static-grid-files.mygrid.app/iphone-mockup.png"
                alt="Screenshot of Grid"
                width={1000}
                height={1000}
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAF0lEQVR42mP8z/D/PwMDAwMTAwMjBDAAAE7UBAf+Wep0AAAAASUVORK5CYII="
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Gray Section: Features + Tracks */}
      <Box bg={lightBg}>
        {/* Feature Section */}
        <Box px={{ base: 4, lg: 0 }} py={{ base: 20, lg: 28 }}>
          <FeatureSection />
        </Box>

        {/* Tracks Screenshot */}
        <Box
          py={{ base: 20, lg: 28 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://r2-static-grid-files.mygrid.app/tracks.png"
            alt="Tracks"
            width={1000}
            height={1000}
            style={{ maxWidth: '100%', height: 'auto' }}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAF0lEQVR42mP8z/D/PwMDAwMTAwMjBDAAAE7UBAf+Wep0AAAAASUVORK5CYII="
          />
        </Box>
      </Box>

      {/* FAQ Section — returns to base site background */}
      <Box pt={{ base: 12, lg: 16 }} pb={{ base: 20, lg: 28 }}>
        <FaqSection />
      </Box>
    </Box>
  )
}

const FaqSection = () => <Faq {...faq} />

export default Home
