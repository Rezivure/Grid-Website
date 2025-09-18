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
  Icon,
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { keyframes } from '@emotion/react'
import GitHubStars from '#components/extras/github-stars'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { ModernFaq } from '#components/faq/modern-faq'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'
import faq from '#data/faq'
import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import NewsBanner from '#components/news-banner'
import { PrivacyFeatures } from '#components/pages/privacy-features'
import { TrustSection } from '#components/pages/trust-section'
import { SecurityAuditSection } from '#components/pages/security-audit-section'
import { FinalCTASection } from '#components/pages/final-cta-section'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`

const Home: NextPage = () => {

  return (
    <Box>
      {/* News Banner - Fixed Overlay */}
      <Box
        position="fixed"
        top={{ base: '70px', sm: '75px', lg: '90px' }}
        left="0"
        right="0"
        zIndex={40}
      >
        <NewsBanner />
      </Box>

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
                  fontWeight="black"
                  lineHeight="1"
                  letterSpacing="tight"
                  textAlign={{ base: 'center', lg: 'left' }}
                >
                  Share Your Location,<Br />Not Your Privacy.
                </Heading>
              </FallInPlace>

              <FallInPlace delay={0.4}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  mt={6}
                  textAlign={{ base: 'center', lg: 'left' }}
                  color="gray.600"
                  _dark={{ color: 'gray.400' }}
                  fontWeight="medium"
                  lineHeight="relaxed"
                >
                  Grid is the leading <strong>end-to-end encrypted (E2EE)</strong> location
                  sharing app. Share locations with family, friends, and co‑workers – all with privacy baked in.
                   Unlike other apps, Grid's E2EE technology means we can't see,
                  track, or sell your location data - ever.
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

                  {/* Discord Section - Mobile Only */}
                  <Box display={{ base: 'flex', lg: 'none' }} justifyContent="center" mt={6}>
                    <Link
                      href="https://discord.gg/cJrQXMn6Hk"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
                    >
                      <HStack
                        spacing={2}
                        bg="rgba(88, 101, 242, 0.1)"
                        px={5}
                        py={2.5}
                        borderRadius="full"
                        border="2px solid"
                        borderColor="#5865F2"
                        _hover={{ bg: 'rgba(88, 101, 242, 0.2)' }}
                      >
                        <FaDiscord size={22} color="#5865F2" />
                        <Text
                          fontWeight="semibold"
                          fontSize="md"
                          color="#5865F2"
                        >
                          Join our Discord
                        </Text>
                      </HStack>
                    </Link>
                  </Box>
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
                src="https://r2-static-grid-files.mygrid.app/svg_mock.svg"
                alt="Screenshot of Grid"
                width={1000}
                height={1000}
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </Box>
          </Flex>
        </Container>

        {/* Scroll indicator */}
        <Box
          position="absolute"
          bottom={{ base: 4, lg: 8 }}
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          cursor="pointer"
          onClick={() => {
            const element = document.getElementById('privacy-features');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
            mb={2}
          >
            Why Grid?
          </Text>
          <Box
            animation={`${bounce} 2s ease-in-out infinite`}
            display="inline-block"
          >
            <Icon
              as={FiChevronDown}
              boxSize={8}
              color="green.500"
            />
          </Box>
        </Box>
      </Box>

      {/* Privacy Features Section */}
      <Box id="privacy-features">
        <PrivacyFeatures />
      </Box>

      {/* Security Audit Section */}
      <SecurityAuditSection />

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <Box>
        <FaqSection />
      </Box>

      {/* Combined Testimonials and Download CTA Section */}
      <FinalCTASection />
    </Box>
  )
}

const FaqSection = () => <ModernFaq {...faq} />

export default Home
