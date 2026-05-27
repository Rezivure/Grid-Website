'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { keyframes } from '@emotion/react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BRAND, Eyebrow, GEIST } from '#components/brand/brand'

const testimonials = [
  { name: 'Honk', text: 'This app is a freaking awesome project.' },
  { name: 'Anonymous', text: 'You stand alone in the private location sharing space.' },
  {
    name: 'Early Adopter',
    text: "I've been using Grid for a very long time and I'm happy with new changes.",
  },
  {
    name: 'Norbinkus',
    text: 'My family and I use other location sharing apps but I’ve been looking for a privacy focused one. Grid has been a solid alternative.',
  },
  {
    name: 'WhizzingWizard',
    text: 'Extremely excited to see a location-sharing app that prioritizes privacy with E2EE. This app works very well and is easy to setup.',
  },
  { name: 'Luke A.', text: 'I love the limited sharing of this app.' },
  { name: 'Jeff', text: 'Great private alternative to all the data mining companies.' },
  {
    name: 'Puppymang P',
    text: "Easy to set up. Just pick a username and do a phone verification then you're set.",
  },
]

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export const FinalCTASection = () => {
  return (
    <Box
      as="section"
      bg={BRAND.ink}
      color={BRAND.paper}
      py={{ base: 20, lg: 28 }}
      position="relative"
      overflow="hidden"
      borderTop="1px solid"
      borderColor={BRAND.hairline}
    >
      {/* soft mint glow */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="45%"
        h="120%"
        bg={BRAND.mint}
        opacity={0.05}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Container maxW="container.xl" px={{ base: 6, md: 10 }} position="relative">
        <VStack spacing={{ base: 16, lg: 24 }}>
          {/* Testimonials */}
          <VStack spacing={10} w="full" align="stretch">
            <VStack spacing={5} align="flex-start" maxW="720px">
              <Eyebrow>What people say</Eyebrow>
              <Heading
                as="h2"
                fontFamily={GEIST}
                fontWeight={700}
                lineHeight="0.98"
                letterSpacing="-0.035em"
                sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
              >
                Trusted by privacy-conscious users.
              </Heading>
            </VStack>

            {/* Carousel */}
            <Box w="full" overflow="hidden" position="relative">
              <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                w={{ base: '40px', md: '100px' }}
                bgGradient={`linear(to-r, ${BRAND.ink}, transparent)`}
                zIndex={1}
                pointerEvents="none"
              />
              <Box
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                w={{ base: '40px', md: '100px' }}
                bgGradient={`linear(to-l, ${BRAND.ink}, transparent)`}
                zIndex={1}
                pointerEvents="none"
              />
              <Box
                display="flex"
                animation={`${scroll} 45s linear infinite`}
                _hover={{ animationPlayState: 'paused' }}
              >
                {[...Array(2)].map((_, setIndex) => (
                  <HStack key={setIndex} spacing={4} px={2}>
                    {testimonials.map((testimonial, index) => (
                      <Box
                        key={`${setIndex}-${index}`}
                        bg={BRAND.shell}
                        p={6}
                        borderRadius="16px"
                        border="1px solid"
                        borderColor={BRAND.hairline}
                        minW="300px"
                        maxW="300px"
                        flexShrink={0}
                      >
                        <VStack align="start" spacing={3}>
                          <HStack spacing={0.5}>
                            {[...Array(5)].map((_, i) => (
                              <Text key={i} color={BRAND.mint} fontSize="md">
                                ★
                              </Text>
                            ))}
                          </HStack>
                          <Text fontSize="sm" color={BRAND.slateHi} lineHeight="1.6">
                            &ldquo;{testimonial.text}&rdquo;
                          </Text>
                          <Text fontWeight={600} fontSize="sm" color={BRAND.paper}>
                            — {testimonial.name}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </HStack>
                ))}
              </Box>
            </Box>
          </VStack>

          {/* Download CTA */}
          <VStack spacing={{ base: 8, lg: 10 }} textAlign="center">
            <VStack spacing={4}>
              <Heading
                as="h2"
                fontFamily={GEIST}
                fontWeight={700}
                letterSpacing="-0.035em"
                lineHeight="1"
                sx={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                Ready to share privately?
              </Heading>
              <Text color={BRAND.slateHi} fontSize={{ base: 'md', md: 'lg' }}>
                Join thousands who&apos;ve chosen privacy over surveillance.
              </Text>
            </VStack>

            {/* Store badges */}
            <HStack spacing={4} justify="center" flexWrap="wrap" rowGap={3}>
              <Link href="https://appstore.mygrid.app">
                <Image
                  src="/static/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={60}
                />
              </Link>
              <Link href="https://playstore.mygrid.app">
                <Image
                  src="/static/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={178}
                  height={60}
                />
              </Link>
            </HStack>

            {/* Contact */}
            <Box pt={8} borderTop="1px solid" borderColor={BRAND.hairline} w="full" maxW="640px">
              <Text fontSize="md" color={BRAND.slate} mb={5}>
                Have more questions?
              </Text>
              <Flex justify="center" gap={4} direction={{ base: 'column', sm: 'row' }} align="center">
                <Link href="https://discord.gg/cJrQXMn6Hk" _hover={{ textDecoration: 'none' }}>
                  <Button
                    leftIcon={<FaDiscord />}
                    bg={BRAND.mint}
                    color={BRAND.mintDeep}
                    size="lg"
                    px={6}
                    borderRadius="full"
                    fontFamily={GEIST}
                    fontWeight={600}
                    _hover={{ bg: BRAND.mintHover, transform: 'translateY(-1px)' }}
                    transition="all 0.15s ease"
                  >
                    Join our Discord
                  </Button>
                </Link>
                <Link href="mailto:contact@mygrid.app" _hover={{ textDecoration: 'none' }}>
                  <Button
                    leftIcon={<Icon as={FiMail} />}
                    bg="transparent"
                    color={BRAND.paper}
                    size="lg"
                    px={6}
                    borderRadius="full"
                    border="1px solid"
                    borderColor={BRAND.hairlineHi}
                    fontFamily={GEIST}
                    fontWeight={500}
                    _hover={{ bg: BRAND.shell, transform: 'translateY(-1px)' }}
                    transition="all 0.15s ease"
                  >
                    Contact us
                  </Button>
                </Link>
              </Flex>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
