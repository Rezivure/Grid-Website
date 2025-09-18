'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { keyframes } from '@emotion/react'

const testimonials = [
  {
    name: 'Honk',
    text: 'This app is a freaking awesome project.',
  },
  {
    name: 'Anonymous',
    text: 'You stand alone in the private location sharing space.',
  },
  {
    name: 'Early Adopter',
    text: 'I\'ve been using Grid for a very long time and I\'m happy with new changes.',
  },
  {
    name: 'Norbinkus',
    text: 'My family and I use other location sharing apps but I\'ve been looking for a privacy focused one. Grid has been a solid alternative.',
  },
  {
    name: 'WhizzingWizard',
    text: 'Extremely excited to see a location-sharing app that prioritizes privacy with E2EE. This app works very well and is easy to setup.',
  },
  {
    name: 'Luke A.',
    text: 'I love the limited sharing of this app.',
  },
  {
    name: 'Jeff',
    text: 'Great private alternative to all the data mining companies.',
  },
  {
    name: 'Puppymang P',
    text: 'Easy to set up. Just pick a username and do a phone verification then you\'re set.',
  },
]

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

export const FinalCTASection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, green.50, white)',
    'linear(to-br, green.950, gray.900)'
  )
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const btnBg = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box
      py={{ base: 16, lg: 24 }}
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="50%"
        height="200%"
        bg="green.400"
        opacity="0.05"
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={{ base: 16, lg: 20 }}>
          {/* Testimonials Carousel */}
          <VStack spacing={8} w="full">
            <Box maxW="2xl" mx="auto">
              <Heading
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="black"
                color={headingColor}
                textAlign="center"
                letterSpacing="tight"
                lineHeight="1"
              >
                Trusted by Privacy-Conscious Users
              </Heading>
            </Box>

            {/* Carousel */}
            <Box w="full" overflow="hidden" position="relative">
              {/* Gradient masks for smooth edges */}
              <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                w="100px"
                bgGradient={`linear(to-r, ${bgGradient.split(',')[0].split('(')[1]}, transparent)`}
                zIndex={1}
              />
              <Box
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                w="100px"
                bgGradient={`linear(to-l, ${bgGradient.split(',')[1].split(')')[0]}, transparent)`}
                zIndex={1}
              />

              {/* Scrolling content */}
              <Box
                display="flex"
                animation={`${scroll} 40s linear infinite`}
                _hover={{ animationPlayState: 'paused' }}
              >
                {/* Double the testimonials for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <HStack key={setIndex} spacing={4} px={2}>
                    {testimonials.map((testimonial, index) => (
                      <Box
                        key={`${setIndex}-${index}`}
                        bg={cardBg}
                        p={6}
                        borderRadius="xl"
                        minW="300px"
                        maxW="300px"
                        flexShrink={0}
                        boxShadow="sm"
                      >
                        <VStack align="start" spacing={3}>
                          <HStack spacing={0.5}>
                            {[...Array(5)].map((_, i) => (
                              <Text key={i} color="yellow.400" fontSize="lg">
                                ★
                              </Text>
                            ))}
                          </HStack>
                          <Text
                            fontSize="sm"
                            color={textColor}
                            fontStyle="italic"
                          >
                            "{testimonial.text}"
                          </Text>
                          <Text fontWeight="semibold" fontSize="sm" color={headingColor}>
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
          <VStack spacing={{ base: 8, lg: 10 }}>
            {/* Main CTA */}
            <Box textAlign="center">
              <Heading
                fontSize={{ base: '3xl', md: '4xl', lg: '5.5xl' }}
                fontWeight="black"
                color={headingColor}
                mb={4}
                letterSpacing="tight"
                lineHeight="1"
              >
                Ready to share privately?
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                fontWeight="medium"
              >
                Join thousands who've chosen privacy over surveillance
              </Text>
            </Box>

            {/* Download buttons */}
            <HStack spacing={4} justify="center">
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

            {/* Contact section */}
            <Box
              textAlign="center"
              pt={8}
              borderTop="1px solid"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              w="full"
            >
              <Text
                fontSize="md"
                color={textColor}
                mb={4}
              >
                Have more questions?
              </Text>
              <Flex
                justify="center"
                gap={4}
                direction={{ base: 'column', sm: 'row' }}
                align="center"
              >
                <Link
                  href="https://discord.gg/cJrQXMn6Hk"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    leftIcon={<FaDiscord />}
                    bg="rgba(88, 101, 242, 0.15)"
                    color="#5865F2"
                    size="lg"
                    px={6}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="rgba(88, 101, 242, 0.3)"
                    _hover={{
                      bg: 'rgba(88, 101, 242, 0.25)',
                      transform: 'scale(1.05)'
                    }}
                    transition="all 0.2s"
                  >
                    Join our Discord
                  </Button>
                </Link>
                <Link
                  href="mailto:contact@mygrid.app"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    leftIcon={<Icon as={FiMail} />}
                    bg="rgba(72, 187, 120, 0.15)"
                    color="green.500"
                    size="lg"
                    px={6}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="rgba(72, 187, 120, 0.3)"
                    _hover={{
                      bg: 'rgba(72, 187, 120, 0.25)',
                      transform: 'scale(1.05)'
                    }}
                    transition="all 0.2s"
                  >
                    Contact Us
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