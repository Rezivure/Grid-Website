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
import { FiShield, FiUsers, FiTarget } from 'react-icons/fi'
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
}) => (
  <Box mb={20} width="100%">
    <FallInPlace>
      <Flex align="center" mb={6}>
        {icon && (
          <Box mr={4}>
            <Icon as={icon} boxSize={8} color="green.400" />
          </Box>
        )}
        <Heading as="h2" size="xl">
          {title}
        </Heading>
      </Flex>
    </FallInPlace>
    <Stack spacing={6} pl={icon ? 12 : 0} fontSize="lg" lineHeight="tall">
      {children}
    </Stack>
  </Box>
)

export default function AboutPage() {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const dividerColor = useColorModeValue('gray.300', 'whiteAlpha.200')

  return (
    <Box bg={bg} minH="100vh" py={{ base: 20, lg: 32 }}>
      <Container maxW="container.lg">
        <VStack spacing={16} align="start" width="100%">
          <FallInPlace delay={0.1}>
          <Heading
          as="h1"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="extrabold"
          lineHeight="1.1"
          mb={4}
        >
         About Grid
        </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
              Learn more about our mission, values, and the people behind the app.
            </Text>
          </FallInPlace>

          <Section title="Our Mission" icon={FiTarget}>
            <Text>
              Our mission is to make privacy a reality for everyone in a world where
              it's too often treated as an afterthought. We believe privacy is a right,
              not a privilege.
            </Text>
            <Text>
              That’s why we’ve created a secure, end-to-end encrypted location-sharing
              service that puts your safety and privacy first. No selling, no tracking,
              no compromises—ever.
            </Text>
            <Text>
              We’re building trust, one encrypted location at a time, so you can live
              freely and securely in the digital age.
            </Text>
          </Section>

          <Divider borderColor={dividerColor} />

          <Section title="Who We Are" icon={FiUsers}>
            <Text>
              We come from backgrounds in defense, intelligence, and cybersecurity—fields
              where protecting sensitive information is mission-critical.
            </Text>
            <Text>
              Now we’re using that experience to build technology that empowers you to
              control your own data and feel confident when you share your location.
            </Text>
          </Section>

          <Divider borderColor={dividerColor} />

          <Section title="Why Grid" icon={FiShield}>
            <Text>
              Grid gives you full control over your location sharing. Your data is
              encrypted, never stored long-term, and never sold. You decide who can see
              your location—and for how long.
            </Text>
            <Text>
              Whether you're meeting friends, coordinating with family, or just ensuring
              your safety, Grid gives you the privacy and confidence to move freely.
            </Text>
            <Text>
              While other companies monetize your location, we protect it. That’s our
              promise.
            </Text>
          </Section>
        </VStack>
      </Container>
    </Box>
  )
}