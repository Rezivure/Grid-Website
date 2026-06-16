'use client'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'
import { BRAND, Eyebrow, GEIST, monoCaps } from '#components/brand/brand'
import { PhoneMockup } from '#components/brand/phone-mockup'
import { GithubStars } from '#components/brand/github-stars'

export const BrandHero = () => {
  return (
    <Box
      as="section"
      position="relative"
      bg={BRAND.ink}
      color={BRAND.paper}
      minH={{ base: 'auto', lg: '100vh' }}
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      {/* Subtle grid pattern background */}
      <Box
        position="absolute"
        inset="0"
        zIndex={0}
        backgroundImage="url('/static/brand/grid-pattern-low-color.svg')"
        backgroundRepeat="repeat"
        backgroundSize="320px 320px"
        opacity={0.06}
        pointerEvents="none"
      />

      {/* Hero body — split: copy left, grid motif right */}
      <Container
        maxW="container.2xl"
        px={{ base: 6, md: 10 }}
        pt={{ base: 28, md: 32, lg: 0 }}
        pb={{ base: 16, md: 20, lg: 0 }}
        position="relative"
        zIndex={1}
        flex="1"
        display="flex"
        alignItems="center"
      >
        <Grid
          w="full"
          templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }}
          alignItems="center"
          gap={{ base: 14, lg: 10 }}
        >
          {/* Left: copy */}
          <GridItem minW={0}>
            <Stack spacing={{ base: 7, md: 9 }} alignItems="flex-start" maxW="640px">
              <Eyebrow color={BRAND.mint}>End-to-end encrypted location</Eyebrow>

              <Heading
                as="h1"
                w="full"
                fontFamily={GEIST}
                fontWeight={700}
                lineHeight="0.95"
                letterSpacing="-0.04em"
                textAlign="left"
                sx={{ fontSize: 'clamp(34px, 8.5vw, 104px)', overflowWrap: 'break-word' }}
              >
                <Box as="span" display="block" color={BRAND.paper}>
                  Location sharing
                </Box>
                <Box as="span" display="block" color={BRAND.mint}>
                  without surveillance.
                </Box>
              </Heading>

              <Text
                as="p"
                w="full"
                color={BRAND.slateHi}
                fontFamily={GEIST}
                fontWeight={500}
                lineHeight="1.5"
                sx={{ fontSize: 'clamp(16px, 1.8vw, 21px)' }}
                maxW="540px"
              >
                End-to-end encrypted, in real time. Sign up with a passkey,
                no phone number or email needed.
              </Text>

              <HStack spacing={4} align="center" flexWrap="wrap" rowGap={3}>
                <Link
                  href="https://appstore.mygrid.app"
                  display="inline-flex"
                  _hover={{ opacity: 0.85, transform: 'translateY(-1px)' }}
                  transition="all 0.15s ease"
                >
                  <Image
                    src="/static/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={168}
                    height={56}
                  />
                </Link>
                <Link
                  href="https://playstore.mygrid.app"
                  display="inline-flex"
                  _hover={{ opacity: 0.85, transform: 'translateY(-1px)' }}
                  transition="all 0.15s ease"
                >
                  <Image
                    src="/static/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={189}
                    height={56}
                  />
                </Link>
              </HStack>
            </Stack>
          </GridItem>

          {/* Right: iPhone mockup with the app */}
          <GridItem minW={0}>
            <Flex justify="center" position="relative">
              <Stack spacing={6} align="center">
                <PhoneMockup />
                <GithubStars />
              </Stack>
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      {/* Bottom-right "available on" stack */}
      <Container
        maxW="container.2xl"
        px={{ base: 6, md: 10 }}
        pb={{ base: 8, md: 10 }}
        position="relative"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <Flex justify="flex-end">
          <Box textAlign="right">
            <Text as="span" display="block" color={BRAND.slate} fontSize="12px" {...monoCaps}>
              Available on
            </Text>
            <Text
              as="span"
              display="block"
              color={BRAND.paper}
              fontFamily={GEIST}
              fontWeight={500}
              fontSize="14px"
              mt={1}
            >
              iOS · App Store
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
