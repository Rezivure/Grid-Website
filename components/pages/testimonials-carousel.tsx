'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const testimonials = [
  {
    name: 'Privacy Advocate',
    text: 'Finally, a location app that respects user privacy. The E2E encryption gives me confidence.',
  },
  {
    name: 'Sarah M.',
    text: 'I can keep track of my kids without worrying about their data being sold to advertisers.',
  },
  {
    name: 'Tech Community',
    text: 'The Matrix protocol implementation is solid. Being able to self-host means true ownership.',
  },
  {
    name: 'Digital Rights Group',
    text: 'Grid sets the standard for what location sharing should be: encrypted and user-controlled.',
  },
  {
    name: 'Mountain Biker',
    text: 'Perfect for our group rides. Everyone stays connected without sacrificing privacy.',
  },
  {
    name: 'Remote Worker',
    text: 'Helps our distributed team coordinate meetups when traveling. No corporate surveillance.',
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

export const TestimonialsCarousel = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.950')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')

  return (
    <Box pt={{ base: 12, lg: 16 }} pb={0} bg={bgColor} overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          {/* Header */}
          <Box textAlign="center">
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color={headingColor}
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
              bgGradient={`linear(to-r, ${bgColor}, transparent)`}
              zIndex={1}
            />
            <Box
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              w="100px"
              bgGradient={`linear(to-l, ${bgColor}, transparent)`}
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
                    >
                      <VStack align="start" spacing={3}>
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
      </Container>
    </Box>
  )
}