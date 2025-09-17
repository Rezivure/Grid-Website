'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  Icon,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiShield, FiUsers, FiTarget, FiInfo } from 'react-icons/fi'
import type { Metadata } from 'next'
import { FallInPlace } from '#components/motion/fall-in-place'

const Section = ({
  title,
  children,
  icon,
}: {
  title: string
  children: React.ReactNode
  icon?: React.ComponentType
}) => {
  const headingColor = useColorModeValue('gray.900', 'white')
  const iconColor = useColorModeValue('green.500', 'green.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box mb={20} position="relative">
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        mb={10}
        pb={5}
        borderBottom="2px solid"
        borderColor={borderColor}
        position="relative"
      >
        {icon && (
          <Box
            p={3}
            bg={useColorModeValue(`${iconColor}10`, `${iconColor}20`)}
            borderRadius="xl"
            display="inline-flex"
            boxShadow="sm"
          >
            <Icon as={icon} boxSize={7} color={iconColor} />
          </Box>
        )}
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          color={headingColor}
          letterSpacing="tight"
        >
          {title}
        </Heading>
      </Box>
      <Stack spacing={6} fontSize={{ base: 'md', lg: 'lg' }} lineHeight="tall">
        {children}
      </Stack>
    </Box>
  )
}

export default function AboutPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const containerBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')
  const accentColor = useColorModeValue('green.500', 'green.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.lg" pt={{ base: 32, lg: 40 }} pb={{ base: 16, lg: 24 }}>
        <VStack spacing={0} align="start" width="100%">
          {/* Hero Section */}
          <Box
            textAlign="center"
            width="100%"
            mb={20}
            bg={containerBg}
            borderRadius="3xl"
            p={{ base: 8, md: 12 }}
            boxShadow="sm"
          >
            <Box
              p={4}
              bg={useColorModeValue('green.50', `${accentColor}20`)}
              borderRadius="full"
              display="inline-block"
              mb={8}
              boxShadow="md"
            >
              <Icon as={FiInfo} boxSize={14} color={accentColor} />
            </Box>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color={headingColor}
              mb={8}
              letterSpacing="tight"
              lineHeight="1.1"
            >
              About Grid
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed"
            >
              Learn more about our mission, values, and the people behind the app.
            </Text>
          </Box>

          <Divider borderColor={borderColor} mb={16} opacity={0.5} />

          {/* Content Sections */}
          <Box w="full">
            <Section title="Our Mission" icon={FiTarget}>
              <Box
                bg={useColorModeValue('blue.50', 'blue.950')}
                borderLeft="4px solid"
                borderColor="blue.500"
                p={6}
                borderRadius="lg"
              >
                <Text color={textColor}>
                  Our mission is to make privacy a reality for everyone in a world where
                  it's too often treated as an afterthought. We believe privacy is a right,
                  not a privilege.
                </Text>
              </Box>
              <Text color={textColor}>
                That's why we've created a secure, end-to-end encrypted location-sharing
                service that puts your safety and privacy first. No selling, no tracking,
                no compromises—ever.
              </Text>
              <Text color={textColor}>
                We're building trust, one encrypted location at a time, so you can live
                freely and securely in the digital age.
              </Text>
            </Section>

            <Section title="Who We Are" icon={FiUsers}>
              <Box
                bg={useColorModeValue('purple.50', 'purple.950')}
                p={8}
                borderRadius="2xl"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="-20%"
                  right="-10%"
                  w="40%"
                  h="150%"
                  bg="purple.400"
                  opacity="0.1"
                  borderRadius="full"
                  filter="blur(60px)"
                />
                <Text color={textColor} position="relative">
                  We come from backgrounds in defense, intelligence, and cybersecurity—fields
                  where protecting sensitive information is mission-critical.
                </Text>
              </Box>
              <Text color={textColor}>
                Now we're using that experience to build technology that empowers you to
                control your own data and feel confident when you share your location.
              </Text>
            </Section>

            <Section title="Why Grid" icon={FiShield}>
              <Box
                bg={useColorModeValue('green.50', 'green.950')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor={accentColor}
              >
                <Text color={textColor} mb={4}>
                  Grid gives you full control over your location sharing. Your data is
                  encrypted, never stored long-term, and never sold. You decide who can see
                  your location—and for how long.
                </Text>
                <Text color={textColor}>
                  Whether you're meeting friends, coordinating with family, or just ensuring
                  your safety, Grid gives you the privacy and confidence to move freely.
                </Text>
              </Box>
              <Text color={textColor} fontWeight="semibold">
                While other companies monetize your location, we protect it. That's our
                promise.
              </Text>
            </Section>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}