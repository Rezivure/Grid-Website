'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FiZap, FiHeart, FiShield } from 'react-icons/fi'


export const TrustSection = () => {
  const bgColor = useColorModeValue('white', 'gray.900')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const accentColor = useColorModeValue('green.500', 'green.400')
  const shadowColor = useColorModeValue(
    '0 4px 20px rgba(0,0,0,0.08)',
    '0 4px 20px rgba(0,0,0,0.4)'
  )

  return (
    <Box
      py={{ base: 16, lg: 24 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="20%"
        left="-5%"
        width="30%"
        height="30%"
        bg="green.400"
        opacity="0.05"
        borderRadius="full"
        filter="blur(80px)"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="-5%"
        width="30%"
        height="30%"
        bg="blue.400"
        opacity="0.05"
        borderRadius="full"
        filter="blur(80px)"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={{ base: 16, lg: 20 }}>
          {/* Header */}
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color={headingColor}
              lineHeight="0.95"
              mb={6}
            >
              Made for real life.
              <Box as="span" color={accentColor}>
                {' '}Not surveillance.
              </Box>
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
            >
              From family check-ins to group adventures.
              <br />
              Share your journey, not your data.
            </Text>
          </Box>


          {/* Use Cases */}
          <Box w="full">
            <Heading
              fontSize="2xl"
              color={headingColor}
              mb={8}
              textAlign="center"
            >
              Perfect for every adventure
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} w="full">
              {[
                { label: '👨‍👩‍👧‍👦 Family', desc: 'Keep tabs on loved ones' },
                { label: '🏔️ Hiking', desc: 'Track trail buddies' },
                { label: '🏍️ Moto Clubs', desc: 'Ride together, stay connected' },
                { label: '🚴 Cycling', desc: 'Group rides made easy' },
                { label: '✈️ Travel', desc: 'Meet up anywhere' },
                { label: '💼 Work Teams', desc: 'Coordinate field work' },
              ].map((item, index) => (
                <Flex
                  key={index}
                  direction="column"
                  align="center"
                  textAlign="center"
                  p={6}
                  bg={cardBg}
                  borderRadius="2xl"
                  transition="all 0.3s"
                  cursor="pointer"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: shadowColor,
                  }}
                >
                  <Text fontSize="3xl" mb={2}>
                    {item.label.split(' ')[0]}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={1}>
                    {item.label.split(' ').slice(1).join(' ')}
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    {item.desc}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}