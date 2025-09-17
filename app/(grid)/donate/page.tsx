// app/(grid)/donate/page.tsx
'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Center,
  useColorModeValue,
  Icon,
  Divider,
  HStack,
  Badge,
} from '@chakra-ui/react'
import { FiHeart, FiShield, FiLock } from 'react-icons/fi'
import Script from 'next/script'

export default function DonatePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const containerBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')
  const accentColor = useColorModeValue('red.500', 'red.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const greenBadgeBg = useColorModeValue('green.50', 'green.900')
  const greenBadgeColor = useColorModeValue('green.600', 'green.300')

  return (
    <Box bg={bgColor} minH="100vh">
      <Script
        src="https://donorbox.org/widget.js"
        strategy="afterInteractive"
      />

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
              bg={useColorModeValue('red.50', `${accentColor}20`)}
              borderRadius="full"
              display="inline-block"
              mb={8}
              boxShadow="md"
            >
              <Icon as={FiHeart} boxSize={14} color={accentColor} />
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
              Support Grid
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
              Grid is dedicated to providing seamless private location sharing
              with zero ads, trackers, or data selling. Your donation helps us
              maintain servers, bandwidth, and continue development to keep Grid
              accessible for everyone who values privacy.
            </Text>
            <HStack spacing={4} justify="center">
              {['100% Independent', 'No Ads Ever', 'Privacy First'].map((item) => (
                <Badge
                  key={item}
                  px={3}
                  py={2}
                  bg={greenBadgeBg}
                  color={greenBadgeColor}
                  fontSize="sm"
                  fontWeight="semibold"
                  borderRadius="full"
                >
                  {item}
                </Badge>
              ))}
            </HStack>
          </Box>

          <Divider borderColor={borderColor} mb={16} opacity={0.5} />

          {/* Important Note Section */}
          <Box mb={12} width="100%">
            <Box
              bg={useColorModeValue('blue.50', 'blue.950')}
              borderLeft="4px solid"
              borderColor="blue.500"
              p={6}
              borderRadius="lg"
            >
              <HStack spacing={3} mb={3}>
                <Icon as={FiShield} color="blue.500" boxSize={5} />
                <Text fontWeight="bold" color={headingColor} fontSize="lg">
                  Privacy-First Donation Processing
                </Text>
              </HStack>
              <Text color={textColor} fontSize="md" lineHeight="tall" mb={4}>
                Your donation is processed directly through DonorBox, our trusted
                third-party processor. Grid never sees or stores your payment
                information. All donor data is handled according to DonorBox's
                privacy policy.
              </Text>
              <Box
                bg={useColorModeValue('orange.50', 'orange.950')}
                p={4}
                borderRadius="md"
                borderLeft="3px solid"
                borderLeftColor="orange.500"
              >
                <HStack spacing={2} mb={2}>
                  <Icon as={FiLock} color="orange.500" boxSize={4} />
                  <Text fontWeight="semibold" color={headingColor} fontSize="sm">
                    Important Note
                  </Text>
                </HStack>
                <Text color={textColor} fontSize="sm" lineHeight="tall">
                  Donations made here do not provide any in-app features, badges,
                  or premium maps. This is purely to support our mission of
                  privacy-focused location sharing. For satellite maps, please
                  subscribe through the app.
                </Text>
              </Box>
            </Box>
          </Box>

          {/* Donation Widget */}
          <Box width="100%">
            <Center w="full">
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
<iframe
  src="https://donorbox.org/embed/initial-donations-3?"
  name="donorbox"
  allowpaymentrequest="allowpaymentrequest"
  seamless="seamless"
  frameborder="0"
  scrolling="no"
  height="900px"
  width="100%"
  style="max-width: 560px; min-width: 250px; max-height:none!important"
  allow="payment">
</iframe>`,
                }}
              />
            </Center>
          </Box>

          {/* Thank You Section */}
          <Box
            mt={24}
            p={{ base: 8, md: 12 }}
            bg={useColorModeValue('green.50', 'green.950')}
            borderRadius="3xl"
            textAlign="center"
            boxShadow="xl"
            position="relative"
            overflow="hidden"
            width="100%"
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
            <Icon as={FiHeart} boxSize={10} color={accentColor} mb={4} />
            <Heading
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="black"
              color={headingColor}
              mb={4}
            >
              Thank You for Supporting Privacy
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor}>
              Every donation helps us maintain Grid as a truly independent,
              privacy-focused alternative to Big Tech location sharing.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}