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
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiFileText, FiMail } from 'react-icons/fi'

const Section = ({
  title,
  children,
  icon,
  headingColor,
  iconColor,
  borderColor,
}: {
  title: string
  children: React.ReactNode
  icon?: any
  headingColor: string
  iconColor: string
  borderColor: string
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

export function TermsContent() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const containerBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')
  const accentColor = useColorModeValue('green.500', 'green.400')
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
              <Icon as={FiFileText} boxSize={14} color={accentColor} />
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
              Terms of Service
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
              maxW="3xl"
              mx="auto"
              mb={6}
              lineHeight="relaxed"
            >
              Welcome to Grid! Please read these Terms of Service carefully before using our website,
              mobile applications, or any services provided by Grid.
            </Text>
            <Box
              display="inline-block"
              px={4}
              py={2}
              bg={useColorModeValue('gray.100', 'gray.700')}
              borderRadius="full"
            >
              <Text fontSize="sm" fontWeight="semibold" color={textColor}>
                Last Updated: August 16, 2025
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
                  By accessing or using the Service, you agree to be bound by these Terms.
                  If you do not agree to these Terms, please do not use the Service.
                </Text>
              </Box>
            </Section>

            <Section title="1. Acceptance of Terms" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                By accessing or using the Service, you confirm that you are at least 13 years of age.
                If you are between 13 and 18 years old, you may only use the Service with the consent
                and supervision of a parent or legal guardian who agrees to be bound by these Terms.
                By using the Service, you confirm that you meet this requirement, or you have obtained
                the necessary consent from a parent or legal guardian.
              </Text>
            </Section>

            <Section title="2. Privacy Policy" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                Your use of the Service is subject to our Privacy Policy, which is incorporated into
                these Terms by reference. Please review the Privacy Policy to understand how we collect,
                use, and protect your information.
              </Text>
            </Section>

            <Section title="3. Description of Service" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                Grid is a location-sharing application that offers end-to-end encryption (E2EE) to
                protect user data. Our Service allows users to share their location in a secure and
                private manner with other authorized users.
              </Text>
            </Section>

            <Section title="4. User Accounts and Security" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                You may need to create an account to access certain features of the Service. You are
                responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to notify us immediately of any
                unauthorized use or suspected breach of security.
              </Text>
            </Section>

            <Section title="5. User Conduct" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text mb={6} fontSize="md" color={textColor}>
                By using the Service, you agree that you will not:
              </Text>
              <Box
                bg={useColorModeValue('red.50', 'red.950')}
                p={6}
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="red.500"
              >
                <UnorderedList spacing={3} pl={4}>
                  <ListItem color={textColor}>Use the Service for any unlawful or fraudulent purposes.</ListItem>
                  <ListItem color={textColor}>Harass, abuse, or harm another person or group through the Service.</ListItem>
                  <ListItem color={textColor}>Attempt to gain unauthorized access to the Service or other accounts, computer systems, or networks connected to the Service.</ListItem>
                  <ListItem color={textColor}>Post or share any content that is illegal, harmful, or in violation of these Terms.</ListItem>
                  <ListItem color={textColor}>Distribute malware, viruses, or any other harmful code through the Service.</ListItem>
                </UnorderedList>
              </Box>
            </Section>

            <Section title="6. Subscriptions and Payments" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <VStack align="start" spacing={6}>
                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="semibold"
                    color={headingColor}
                    mb={4}
                  >
                    Subscription Services
                  </Heading>
                  <Box
                    bg={useColorModeValue('green.50', 'green.950')}
                    p={4}
                    borderRadius="lg"
                    borderLeft="3px solid"
                    borderLeftColor={accentColor}
                  >
                    <UnorderedList spacing={2} pl={4}>
                      <ListItem color={textColor}>Grid offers an optional subscription for Satellite Maps at $4.99 USD per month</ListItem>
                      <ListItem color={textColor}>Core features of Grid (location sharing, end-to-end encryption, standard maps) are free and will always remain free</ListItem>
                      <ListItem color={textColor}>Satellite Maps is a cosmetic enhancement and not required for app functionality</ListItem>
                    </UnorderedList>
                  </Box>
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
                      <strong>iOS Users:</strong> Payments are processed through Apple's In-App Purchase system.
                      Apple handles all payment processing and Grid does not have access to your payment information
                    </ListItem>
                    <ListItem color={textColor}>
                      <strong>Android/Web Users:</strong> Payments are processed through Stripe. Grid does not store
                      credit card details; all payment information is securely handled by Stripe
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
                    Subscription Terms
                  </Heading>
                  <UnorderedList spacing={2} pl={4}>
                    <ListItem color={textColor}>Subscriptions automatically renew monthly unless canceled</ListItem>
                    <ListItem color={textColor}>You may cancel your subscription at any time through your device's account settings</ListItem>
                    <ListItem color={textColor}>Cancellation must be made at least 24 hours before the end of the current period to avoid renewal</ListItem>
                    <ListItem color={textColor}>No refunds for partial months</ListItem>
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
                    Managing Subscriptions
                  </Heading>
                  <Box
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    p={4}
                    borderRadius="lg"
                  >
                    <UnorderedList spacing={2} pl={4}>
                      <ListItem color={textColor}>iOS: Manage subscriptions in Settings {'>'}  [Your Name] {'>'} Subscriptions</ListItem>
                      <ListItem color={textColor}>Android/Web: Manage subscriptions through the link provided in your subscription email</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </VStack>
            </Section>

            <Section title="7. Data Sharing and End-to-End Encryption" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
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
                  The Service provides end-to-end encryption to protect the locations shared between users.
                  Grid cannot access or decrypt the location data. By using the Service, you acknowledge and
                  accept that you are responsible for the locations you share and whom you share them with.
                  While we make every effort to ensure data security, you agree to use the Service at your own risk.
                </Text>
              </Box>
            </Section>

            <Section title="8. Disclaimer of Warranties" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                The Service is provided on an "as is" and "as available" basis. Grid makes no warranties,
                expressed or implied, regarding the Service, including but not limited to warranties of
                merchantability, fitness for a particular purpose, or non-infringement.
              </Text>
            </Section>

            <Section title="9. Limitation of Liability" headingColor={headingColor} iconColor={accentColor} borderColor={borderColor}>
              <Text fontSize="md" color={textColor} lineHeight="tall">
                To the fullest extent permitted by law, Grid and its affiliates, officers, directors,
                employees, and agents will not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of your access to or use of the Service, even if Grid has been
                advised of the possibility of such damages.
              </Text>
            </Section>

            {/* Contact Section */}
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
                Contact Us
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor} mb={8}>
                If you have any questions about these Terms, please contact us:
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
                    color={linkColor}
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