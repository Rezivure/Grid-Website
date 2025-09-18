'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'

const testimonials = [
  {
    name: 'Privacy Advocate',
    role: 'Security Researcher',
    text: 'Finally, a location sharing app that respects user privacy. The E2E encryption and open source code give me confidence my data stays mine.',
  },
  {
    name: 'Sarah M.',
    role: 'Parent',
    text: 'I can keep track of my kids without worrying about their data being sold to advertisers. Grid gives me peace of mind.',
  },
  {
    name: 'Tech Community',
    role: 'Open Source Contributors',
    text: 'The Matrix protocol implementation is solid. Being able to self-host means true data ownership.',
  },
  {
    name: 'Digital Rights Group',
    role: 'Privacy Organization',
    text: 'Grid sets the standard for what location sharing should be: encrypted, transparent, and user-controlled.',
  },
]

export const TestimonialsMinimal = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.950')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.900', 'white')
  const quoteColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box py={{ base: 24, lg: 32 }} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={{ base: 16, lg: 24 }}>
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              mb={4}
              fontWeight="bold"
              color={headingColor}
              letterSpacing="tight"
            >
              Trusted by Privacy-Conscious Users
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="normal"
            >
              Join thousands who\'ve chosen privacy over surveillance
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, lg: 8 }} w="full">
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                p={{ base: 8, lg: 10 }}
                bg={cardBg}
                borderRadius="2xl"
                border="1px solid"
                borderColor={borderColor}
                borderLeft="4px solid"
                borderLeftColor="green.500"
                transition="all 0.3s"
                _hover={{
                  boxShadow: 'lg'
                }}
              >
                <VStack align="start" spacing={6}>
                  <Text
                    fontSize={{ base: 'lg', lg: 'xl' }}
                    color={quoteColor}
                    fontStyle="italic"
                    lineHeight="relaxed"
                  >
                    "{testimonial.text}"
                  </Text>
                  <Box pt={4} borderTop="1px solid" borderColor={borderColor} w="full">
                    <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                      {testimonial.name}
                    </Text>
                    <Text fontSize="md" color={textColor}>
                      {testimonial.role}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}