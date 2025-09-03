'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FiMessageSquare, FiHeart, FiTarget } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Link } from '@saas-ui/react'

const FeatureCard = ({ icon, title, description }) => (
  <Flex gap={4} p={6} borderRadius="lg" bg={useColorModeValue('white', 'gray.800')} shadow="sm">
    <Box>
      <Icon as={icon} boxSize={6} color="green.400" />
    </Box>
    <Box flex={1}>
      <Heading as="h3" size="sm" mb={1}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
        {description}
      </Text>
    </Box>
  </Flex>
)

export default function FeedbackPage() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const formBg = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box bg={bg} minH="100vh" py={{ base: 20, lg: 32 }}>
      <Container maxW="container.lg">
        <FallInPlace>
          <Box mb={12}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="extrabold"
              lineHeight="1.1"
              mb={4}
            >
              Share Your Feedback
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
              Your input helps us make Grid better for everyone. Whether it's a feature request, 
              bug report, or general feedback, we're listening.
            </Text>
            
            {/* Discord CTA */}
            <HStack spacing={1} pt={4}>
              <Text fontSize="lg" color="gray.500">
                Rather have a conversation? Join our
              </Text>
              <Link
                href="https://discord.gg/cJrQXMn6Hk"
                _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', textDecoration: 'none' }}
                display="inline-flex"
                alignItems="center"
              >
                <HStack spacing={1}>
                  <FaDiscord size={22} color="#5865F2" />
                  <Text fontSize="lg" color="#5865F2" fontWeight="semibold">
                    Discord
                  </Text>
                </HStack>
              </Link>
            </HStack>
          </Box>
        </FallInPlace>

        <VStack spacing={8} align="stretch">
          <FallInPlace delay={0.1}>
            <Box display="grid" gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4} mb={8}>
              <FeatureCard 
                icon={FiMessageSquare} 
                title="Feature Requests" 
                description="Suggest new features or improvements to existing ones"
              />
              <FeatureCard 
                icon={FiTarget} 
                title="Bug Reports" 
                description="Help us identify and fix issues you encounter"
              />
              <FeatureCard 
                icon={FiHeart} 
                title="General Feedback" 
                description="Share what you love or what could be better"
              />
            </Box>
          </FallInPlace>

          <FallInPlace delay={0.2}>
            <Box 
              p={{ base: 8, md: 12 }}
              bg={formBg}
              borderRadius="xl"
              shadow="base"
              minH="400px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text 
                fontSize="lg" 
                color="gray.600" 
                _dark={{ color: 'gray.400' }} 
                mb={8}
                textAlign="center"
              >
                Press the button below to continue. Please do not provide any identifiable data.
              </Text>
              <div data-tf-live="01JW6YMZ604M0J8JWZTYHMTHZV"></div>
            </Box>
          </FallInPlace>
        </VStack>

        <FallInPlace delay={0.3}>
          <Box mt={16} p={6} bg="gray.700" _dark={{ bg: 'gray.800' }} borderRadius="xl">
            <Text fontSize="sm" color="gray.100">
              Thank you for taking the time to share your thoughts. Every piece of feedback 
              helps us improve Grid and better serve our community.
            </Text>
          </Box>
        </FallInPlace>
      </Container>
    </Box>
  )
}