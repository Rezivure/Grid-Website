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
} from '@chakra-ui/react'
import { FiShield, FiUsers, FiTarget } from 'react-icons/fi'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Grid',
  description: 'Learn about Grid\'s mission and commitment to privacy',
}

const Section = ({ 
  title, 
  children, 
  icon,
}: { 
  title: string; 
  children: React.ReactNode;
  icon?: React.ComponentType;
}) => (
  <Box mb={16} width="100%">
    <Flex align="center" mb={6}>
      {icon && (
        <Box mr={4}>
          <Icon as={icon} boxSize={8} color="blue.400" />
        </Box>
      )}
      <Heading as="h2" size="xl">
        {title}
      </Heading>
    </Flex>
    <VStack spacing={6} align="start" pl={icon ? 12 : 0}>
      {children}
    </VStack>
  </Box>
)

export default function AboutPage() {
  return (
    <Container maxW="container.md" pt={{ base: 40, lg: 60 }}>
      <VStack spacing={8} align="start" width="100%">
        <Box textAlign="left" width="100%" mb={12}>
          <Section title="About Grid">
            <Text>
              Please feel free to read our story and learn more about our mission to protect your privacy.
            </Text>
          </Section>
        </Box>

        <Section title="Our Mission" icon={FiTarget}>
          <Text>
            Our mission is to make privacy a reality for everyone in a world where it's too often treated as an afterthought. We believe that privacy isn't a luxury—it's a fundamental right that belongs to each and every one of us. That's why we've created a secure, end-to-end encrypted location-sharing service that puts your safety and privacy first.
          </Text>
          <Text>
            Too many companies have violated consumer trust by selling private data to third parties, treating your personal information as a commodity rather than something to be safeguarded. We refuse to be part of that cycle. Your data is yours, and we're committed to keeping it that way—no selling, no sharing, no compromises.
          </Text>
          <Text>
            At the heart of what we do is a commitment to transparency and respect for your privacy. We're here to challenge the idea that privacy should be compromised for profit or convenience. Instead, we're working to create a world where you can share what matters to you without sacrificing your security or peace of mind.
          </Text>
          <Text>
            We're not just building a product—we're building trust, one encrypted location at a time. And we're doing it because we believe that everyone deserves to live freely and securely in the digital age.
          </Text>
        </Section>

        <Divider borderColor="whiteAlpha.300" />

        <Section title="Who We Are" icon={FiUsers}>
          <Text>
            We come from a background in defense, intelligence and cybersecurity, where we learned the value of protecting sensitive information and how vulnerable every day individuals are. Now, we're using that experience to build technology that empowers you to take control of your personal data.
          </Text>
          <Text>
            We want you to feel confident when you share your location, knowing that your information is protected and your trust is earned.
          </Text>
        </Section>

        <Divider borderColor="whiteAlpha.300" />

        <Section title="Why Grid" icon={FiShield}>
          <Text>
            With our app, you can share your location securely, knowing that your data is encrypted and never sold—ever. Unlike other services that profit off your information, we've built our platform with one goal in mind: to protect your privacy. You have full control over who sees your location and for how long, and you can trust that your information stays strictly between you and those you choose to share it with.
          </Text>
          <Text>
            Whether you're meeting friends, coordinating with family, or ensuring your safety, our app offers the peace of mind you need. We don't believe in using your data to target you with ads or sell it to the highest bidder. Instead, we've created a service that's focused on your security, your privacy, and your trust.
          </Text>
          <Text>
            With us, you can navigate the world with confidence, knowing your location and personal information are secure, trusted, and never compromised. While other companies may see you as a product, we see you as someone worth protecting.
          </Text>
        </Section>
      </VStack>
    </Container>
  )
}