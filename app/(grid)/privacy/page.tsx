'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react'
import type { Metadata } from 'next'


const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb={8}>
    <Heading as="h2" size="lg" mb={4}>
      {title}
    </Heading>
    {children}
  </Box>
)

export default function PrivacyPage() {
  return (
    <Container maxW="container.md" pt={{ base: 40, lg: 60 }}>
      <VStack spacing={8} align="start" width="100%">
        <Box textAlign="left" width="100%" mb={8}>
        <Section title="Privacy Policy">
           Effective Date: October 4th, 2024
          </Section>
          <Text>
            If you are here, good on you. You value privacy like us. Please feel free to read our policy, it is short-and reach out to us with any questions!
          </Text>
        </Box>

        <Section title="Introduction">
          <Text>
            Grid ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our end-to-end encrypted (E2EE) location-sharing application ("App"), available on iPhone and Android. By using Grid, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please discontinue use of the App.
          </Text>
        </Section>

        <Section title="1. Information We Collect">
          <Text mb={4}>
            We collect only the minimal personal information necessary to provide the App's services:
          </Text>
          <UnorderedList spacing={2} pl={4}>
            <ListItem>
              <Text>
                <strong>Phone Number and Username:</strong> When you register for Grid, we collect your phone number for verification purposes and to create your account. We also collect your username for identification within the app.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <strong>Location Data:</strong> Grid does not have access to your location data. Your location is collected locally on your device and shared only with individuals or groups that you select. All location data is encrypted on your device before being transmitted using the Matrix protocol, ensuring that only the intended recipient(s) can view your location.
              </Text>
            </ListItem>
          </UnorderedList>
        </Section>

        <Section title="2. End-to-End Encryption (E2EE)">
          <Text>
            Your location data is encrypted on your device before it is transmitted using Matrix Synapse servers. This ensures that only the intended recipients can decrypt and view your location. Grid, Matrix Synapse, and any third parties involved cannot decrypt or view this data. We take every measure to ensure that your location-sharing remains private and secure.
          </Text>
        </Section>

        <Section title="3. Map Services and Cloudflare">
          <Text>
            Grid hosts its own map tile server on Cloudflare using Protomaps to provide map services. We do not log your location or map usage data, but Cloudflare may log anonymized information such as IP addresses or requests for technical performance purposes. This logging is managed by Cloudflare and is outside our control. Please refer to Cloudflare's Privacy Policy for more details on how they handle data and our About Map Data page to learn more.
          </Text>
        </Section>

        <Section title="4. Self-Hosting">
          <Text>
            Grid is designed to allow users to host their own backend/Matrix server. If you choose to use your own server or another third-party server, please be aware that Grid is not responsible for the privacy, security, or handling of your data on those servers. Your location data and other personal information may be at risk if the server you use is not properly secured or managed.
          </Text>
        </Section>

        <Section title="5. Data Security">
          <Text>
            We take appropriate security measures to protect your personal information. All location data is encrypted end-to-end. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </Text>
        </Section>

        <Section title="Contact Us">
          <Text>
            If you have any questions or concerns about this Privacy Policy, or if you want to exercise any of your rights regarding your personal data, please contact us at:
          </Text>
          <Box mt={4}>
            <Text>Email: <Link href="mailto:contact@mygrid.app" color="blue.400">contact@mygrid.app</Link></Text>
            <Text>Address: 8 The Green Suite B, Dover, DE 19901</Text>
          </Box>
        </Section>
      </VStack>
    </Container>
  )
}