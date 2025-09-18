'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { FiAlertCircle, FiShield } from 'react-icons/fi'
import { useEffect } from 'react'

export default function ReportPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const containerBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.900', 'white')
  const accentColor = useColorModeValue('red.500', 'red.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.rapidforms.co/embed/index.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

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
              bg={useColorModeValue('red.50', `${accentColor}20`)}
              borderRadius="full"
              display="inline-block"
              mb={8}
              boxShadow="md"
            >
              <Icon as={FiAlertCircle} boxSize={14} color={accentColor} />
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
              Report Abuse
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
              maxW="2xl"
              mx="auto"
              lineHeight="relaxed"
            >
              We take abuse reports seriously. Please use the form below to report any violations or concerns.
            </Text>
          </Box>

          <Divider borderColor={borderColor} mb={16} opacity={0.5} />

          {/* Important Note Section */}
          <Box mb={12} width="100%">
            <Text fontWeight="bold" color={headingColor} mb={4} fontSize="xl">
              What We Take Action On:
            </Text>
            <VStack align="start" spacing={3}>
              <Text color={textColor} fontSize="lg">
                • Harassment, threats, or abusive behavior
              </Text>
              <Text color={textColor} fontSize="lg">
                • Unauthorized sharing or tracking
              </Text>
              <Text color={textColor} fontSize="lg">
                • Spam or fraudulent activities
              </Text>
              <Text color={textColor} fontSize="lg">
                • Violations of our Terms of Service
              </Text>
            </VStack>
          </Box>

          {/* Form Container */}
          <Box
            width="100%"
            bg={containerBg}
            p={{ base: 4, md: 8 }}
            borderRadius="2xl"
            boxShadow="lg"
            minH="800px"
          >
            <iframe
              id="rapidforms-iframe"
              src="https://app.rapidforms.co/embed/3ca7a2?bg=1a1a1a"
              style={{
                width: '100%',
                height: '700px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: '#1a1a1a',
              }}
              title="Report Abuse Form"
            />
          </Box>

          {/* Privacy Note */}
          <Box
            mt={12}
            p={6}
            bg={useColorModeValue('green.50', 'green.950')}
            borderRadius="xl"
            borderLeft="4px solid"
            borderLeftColor="green.500"
            width="100%"
          >
            <Text fontWeight="semibold" color={headingColor} mb={2}>
              Your Privacy Matters
            </Text>
            <Text color={textColor} fontSize="sm">
              Reports are handled with strict confidentiality. We only use the information you provide
              to investigate and address the reported issue. Your identity will not be shared with the
              reported user unless legally required.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}