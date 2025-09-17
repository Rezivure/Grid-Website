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
  Icon,
  useColorModeValue,
  Divider,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { FiShield, FiLock, FiServer, FiCreditCard, FiMail } from 'react-icons/fi'

const Section = ({
  title,
  children,
  icon,
  isNumbered = false,
  headingColor,
  iconColor,
  borderColor,
}: {
  title: string;
  children: React.ReactNode;
  icon?: any;
  isNumbered?: boolean;
  headingColor: string;
  iconColor: string;
  borderColor: string;
}) => {
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
      {children}
    </Box>
  )
}

export function PrivacyContent() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const containerBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')
  const accentColor = useColorModeValue('green.500', 'green.400')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const linkColor = useColorModeValue('green.600', 'green.400')

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
              <Icon as={FiShield} boxSize={14} color={accentColor} />
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
              Privacy Policy
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
              maxW="2xl"
              mx="auto"
              mb={6}
              lineHeight="relaxed"
            >
              If you are here, good on you. You value privacy like us. Please feel free to read our policy, it is short-and reach out to us with any questions!
            </Text>
            <Box
              display="inline-block"
              px={4}
              py={2}
              bg={useColorModeValue('gray.100', 'gray.700')}
              borderRadius="full"
            >
              <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                Effective Date: September 17, 2025
              </Text>
            </Box>
          </Box>

          <Divider borderColor={borderColor} mb={16} opacity={0.5} />

          {/* Content Sections */}
          <Box w="full">
            <Section title="Introduction" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Box
                bg={useColorModeValue('blue.50', 'blue.950')}
                borderLeft="4px solid"
                borderColor="blue.500"
                p={6}
                borderRadius="lg"
              >
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={textColor} lineHeight="tall">
                Grid ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our end-to-end encrypted (E2EE) location-sharing application ("App"), available on iPhone and Android. By using Grid, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please discontinue use of the App.
              </Text>
              </Box>
            </Section>

            <Section title="1. Information We Collect" icon={FiLock} headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text mb={8} fontSize="md" color={textColor}>
                We collect only the minimal personal information necessary to provide the App's services:
              </Text>
              <Box
                bg={useColorModeValue('gray.50', 'gray.800')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor={accentColor}
              >
                <Text fontWeight="bold" color={headingColor} mb={3} fontSize="lg">
                  Phone Number and Username:
                </Text>
                <Text color={textColor} fontSize="md" lineHeight="tall">
                  When you register for Grid, we collect your phone number for verification purposes and to create your account. We also collect your username for identification within the app.
                </Text>
              </Box>
            </Section>

            <Section title="2. Information We DON'T Collect" icon={FiShield} headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text mb={8} fontSize="md" color={textColor}>
                Your privacy is our priority. Here's what we never see or store:
              </Text>
              <Box
                bg={useColorModeValue('red.50', 'red.950')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="red.500"
              >
                <Text fontWeight="bold" color={headingColor} mb={3} fontSize="lg">
                  Location Data:
                </Text>
                <Text color={textColor} fontSize="md" lineHeight="tall">
                  Grid does not have access to your location data. Your location is collected locally on your device and shared only with individuals or groups that you select. All location data is encrypted on your device before being transmitted using the Matrix protocol, ensuring that only the intended recipient(s) can view your location.
                </Text>
              </Box>
            </Section>

            <Section title="3. End-to-End Encryption (E2EE)" icon={FiLock} headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
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
              <Text fontSize="lg" color={textColor} lineHeight="tall" position="relative">
                Your location data is encrypted on your device before it is transmitted using Matrix Synapse servers. This ensures that only the intended recipients can decrypt and view your location. Grid, Matrix Synapse, and any third parties involved cannot decrypt or view this data. We take every measure to ensure that your location-sharing remains private and secure.
              </Text>
              </Box>
            </Section>

            <Section title="4. Map Services and Cloudflare" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={textColor} lineHeight="relaxed">
                Grid hosts its own map tile server on Cloudflare using Protomaps to provide map services. We do not log your location or map usage data, but Cloudflare may log anonymized information such as IP addresses or requests for technical performance purposes. This logging is managed by Cloudflare and is outside our control. Please refer to Cloudflare's Privacy Policy for more details on how they handle data and our About Map Data page to learn more.
              </Text>
            </Section>

            <Section title="5. Self-Hosting" icon={FiServer} headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="relaxed">
                Grid is designed to allow users to host their own backend/Matrix server. If you choose to use your own server or another third-party server, please be aware that Grid is not responsible for the privacy, security, or handling of your data on those servers. Your location data and other personal information may be at risk if the server you use is not properly secured or managed.
              </Text>
            </Section>

            <Section title="6. Payment Information" icon={FiCreditCard} headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <VStack align="start" spacing={6}>
                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="semibold"
                    color={headingColor}
                    mb={4}
                  >
                    What We Don't Collect
                  </Heading>
                  <UnorderedList spacing={3} pl={4}>
                    <ListItem color={textColor}>Grid never directly collects or stores credit card numbers, banking details, or other payment information</ListItem>
                    <ListItem color={textColor}>We do not have access to your Apple ID payment information</ListItem>
                    <ListItem color={textColor}>We do not store Stripe payment details on our servers</ListItem>
                  </UnorderedList>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="semibold"
                    color={headingColor}
                    mb={4}
                  >
                    Payment Processing
                  </Heading>
                  <UnorderedList spacing={3} pl={4}>
                    <ListItem color={textColor}>
                      <strong>iOS Users:</strong> All payments are processed by Apple through their In-App Purchase system. Apple's privacy policy governs their collection and use of your payment information
                    </ListItem>
                    <ListItem color={textColor}>
                      <strong>Android/Web Users:</strong> Payments are processed by Stripe, Inc. Your payment information is transmitted directly to Stripe and is subject to Stripe's privacy policy
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="semibold"
                    color={headingColor}
                    mb={4}
                  >
                    Subscription Data We Store
                  </Heading>
                  <UnorderedList spacing={3} pl={4} mb={4}>
                    <ListItem color={textColor}>User ID associated with the subscription</ListItem>
                    <ListItem color={textColor}>Subscription status (active/inactive)</ListItem>
                    <ListItem color={textColor}>Subscription start and end dates</ListItem>
                    <ListItem color={textColor}>Subscription type (e.g., Satellite Maps)</ListItem>
                  </UnorderedList>
                  <Text fontSize={{ base: 'sm', lg: 'md' }} color={textColor}>
                    This minimal subscription data is stored solely to provide you with the subscribed features and is never shared with third parties.
                  </Text>
                </Box>
              </VStack>
            </Section>

            <Section title="7. Donation Privacy" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text mb={8} fontSize="md" color={textColor}>
                We respect and protect the privacy of everyone who supports Grid's mission through donations.
              </Text>
              <Box
                bg={useColorModeValue('orange.50', 'orange.950')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="orange.500"
              >
                <Text fontWeight="bold" color={headingColor} mb={3} fontSize="lg">
                  Our Commitment:
                </Text>
                <Text color={textColor} fontSize="md" lineHeight="tall" mb={4}>
                  Grid does not collect, sell, share, or store donor information. We will never trade our supporters' names or personal data with any other entity. When you donate through our website, you are redirected to DonorBox, our trusted third-party donation processor.
                </Text>
                <Text color={textColor} fontSize="md" lineHeight="tall">
                  DonorBox handles all donation processing, receipt generation, and tax documentation directly. Your payment information and donor details are transmitted securely to DonorBox and are governed by their privacy policy. Grid never sees or stores this information. Please review DonorBox's privacy policy to understand how they protect and manage your donation data.
                </Text>
              </Box>
            </Section>

            <Section title="8. Data Security" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={textColor} lineHeight="relaxed">
                We take appropriate security measures to protect your personal information. All location data is encrypted end-to-end. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </Text>
            </Section>

            {/* Contact Section - Cleaner */}
            <Box
              mt={24}
              p={{ base: 8, md: 12 }}
              bg={useColorModeValue('green.50', 'green.950')}
              borderRadius="3xl"
              textAlign="center"
              boxShadow="xl"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-50%"
                left="-20%"
                w="60%"
                h="200%"
                bg="green.400"
                opacity="0.05"
                borderRadius="full"
                filter="blur(100px)"
              />
              <Box
                p={4}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="full"
                display="inline-block"
                mb={6}
                boxShadow="md"
              >
                <Icon as={FiMail} boxSize={10} color={accentColor} />
              </Box>
              <Heading
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="black"
                color={headingColor}
                mb={4}
              >
                Questions about privacy?
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} mb={8}>
                We're here to help clarify any concerns
              </Text>
              <VStack spacing={4}>
                <Box
                  display="inline-block"
                  bg={useColorModeValue('white', 'gray.800')}
                  px={6}
                  py={3}
                  borderRadius="full"
                  boxShadow="sm"
                  transition="all 0.2s"
                  _hover={{ transform: 'scale(1.05)' }}
                >
                  <Link
                    href="mailto:contact@mygrid.app"
                    fontSize="lg"
                    color={accentColor}
                    fontWeight="bold"
                    _hover={{ textDecoration: 'none' }}
                  >
                    contact@mygrid.app
                  </Link>
                </Box>
                <Text fontSize="sm" color={textColor} opacity={0.7} fontStyle="italic">
                  8 The Green Suite B, Dover, DE 19901
                </Text>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}