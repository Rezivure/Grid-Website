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

export default function TermsPage() {
  return (
    <Container maxW="container.md" pt={{ base: 40, lg: 60 }}>
      <VStack spacing={8} align="start" width="100%">
        <Box textAlign="left" width="100%" mb={8}>
        <Section title="Terms of Service">
           Last Updated: August 16, 2025
          </Section>
          <Text>
            Welcome to Grid! Please read these Terms of Service ("Terms") carefully before using our website, mobile applications, or any services provided by Grid ("the Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
          </Text>
        </Box>

        <Section title="1. Acceptance of Terms">
          <Text>
            By accessing or using the Service, you confirm that you are at least 13 years of age. If you are between 13 and 18 years old, you may only use the Service with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms. By using the Service, you confirm that you meet this requirement, or you have obtained the necessary consent from a parent or legal guardian.
          </Text>
        </Section>

        <Section title="2. Privacy Policy">
          <Text>
            Your use of the Service is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand how we collect, use, and protect your information.
          </Text>
        </Section>

        <Section title="3. Description of Service">
          <Text>
            Grid is a location-sharing application that offers end-to-end encryption (E2EE) to protect user data. Our Service allows users to share their location in a secure and private manner with other authorized users.
          </Text>
        </Section>

        <Section title="4. User Accounts and Security">
          <Text>
            You may need to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or suspected breach of security.
          </Text>
        </Section>

        <Section title="5. User Conduct">
          <Text mb={4}>
            By using the Service, you agree that you will not:
          </Text>
          <UnorderedList spacing={2} pl={4}>
            <ListItem>Use the Service for any unlawful or fraudulent purposes.</ListItem>
            <ListItem>Harass, abuse, or harm another person or group through the Service.</ListItem>
            <ListItem>Attempt to gain unauthorized access to the Service or other accounts, computer systems, or networks connected to the Service.</ListItem>
            <ListItem>Post or share any content that is illegal, harmful, or in violation of these Terms.</ListItem>
            <ListItem>Distribute malware, viruses, or any other harmful code through the Service.</ListItem>
          </UnorderedList>
        </Section>

        <Section title="6. Subscriptions and Payments">
          <Heading as="h3" size="md" mb={4}>
            Subscription Services
          </Heading>
          <UnorderedList spacing={2} pl={4} mb={4}>
            <ListItem>Grid offers an optional subscription for Satellite Maps at $4.99 USD per month</ListItem>
            <ListItem>Core features of Grid (location sharing, end-to-end encryption, standard maps) are free and will always remain free</ListItem>
            <ListItem>Satellite Maps is a cosmetic enhancement and not required for app functionality</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" mb={4}>
            Payment Processing
          </Heading>
          <UnorderedList spacing={2} pl={4} mb={4}>
            <ListItem>iOS Users: Payments are processed through Apple's In-App Purchase system. Apple handles all payment processing and Grid does not have access to your payment information</ListItem>
            <ListItem>Android/Web Users: Payments are processed through Stripe. Grid does not store credit card details; all payment information is securely handled by Stripe</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" mb={4}>
            Subscription Terms
          </Heading>
          <UnorderedList spacing={2} pl={4} mb={4}>
            <ListItem>Subscriptions automatically renew monthly unless canceled</ListItem>
            <ListItem>You may cancel your subscription at any time through your device's account settings</ListItem>
            <ListItem>Cancellation must be made at least 24 hours before the end of the current period to avoid renewal</ListItem>
            <ListItem>No refunds for partial months</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" mb={4}>
            Managing Subscriptions
          </Heading>
          <UnorderedList spacing={2} pl={4}>
            <ListItem>iOS: Manage subscriptions in Settings {'>'}  [Your Name] {'>'} Subscriptions</ListItem>
            <ListItem>Android/Web: Manage subscriptions through the link provided in your subscription email</ListItem>
          </UnorderedList>
        </Section>

        <Section title="7. Data Sharing and End-to-End Encryption">
          <Text>
            The Service provides end-to-end encryption to protect the locations shared between users. Grid cannot access or decrypt the location data. By using the Service, you acknowledge and accept that you are responsible for the locations you share and whom you share them with. While we make every effort to ensure data security, you agree to use the Service at your own risk.
          </Text>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <Text>
            The Service is provided on an "as is" and "as available" basis. Grid makes no warranties, expressed or implied, regarding the Service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </Text>
        </Section>

        <Section title="9. Limitation of Liability">
          <Text>
            To the fullest extent permitted by law, Grid and its affiliates, officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Service, even if Grid has been advised of the possibility of such damages.
          </Text>
        </Section>

        <Section title="Contact Us">
          <Text>
            If you have any questions about these Terms, please contact us at:
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