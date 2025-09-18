'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export const DownloadCTA = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.950')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const btnBg = useColorModeValue('white', 'gray.800')

  return (
    <Box
      pt={0}
      pb={{ base: 16, lg: 20 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="50%"
        height="200%"
        bg="green.400"
        opacity="0.05"
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="container.lg" position="relative">
        <VStack spacing={{ base: 8, lg: 10 }}>
          {/* Main CTA */}
          <Box textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="black"
              color={headingColor}
              mb={4}
            >
              Ready to share privately?
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
            >
              Join thousands who've chosen privacy over surveillance
            </Text>
          </Box>

          {/* Download buttons */}
          <HStack spacing={4} justify="center">
            <Link href="https://appstore.mygrid.app">
              <Image
                src="/static/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={160}
                height={60}
              />
            </Link>
            <Link href="https://playstore.mygrid.app">
              <Image
                src="/static/images/google-play-badge.svg"
                alt="Get it on Google Play"
                width={178}
                height={60}
              />
            </Link>
          </HStack>

          {/* Contact section */}
          <Box
            textAlign="center"
            pt={8}
            borderTop="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            w="full"
          >
            <Text
              fontSize="md"
              color={textColor}
              mb={4}
            >
              Have more questions?
            </Text>
            <Flex
              justify="center"
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              align="center"
            >
              <Link
                href="https://discord.gg/cJrQXMn6Hk"
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  leftIcon={<FaDiscord />}
                  bg={btnBg}
                  size="lg"
                  px={6}
                  _hover={{ transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                >
                  Join our Discord
                </Button>
              </Link>
              <Link
                href="/feedback"
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  leftIcon={<Icon as={FiMail} />}
                  bg={btnBg}
                  size="lg"
                  px={6}
                  _hover={{ transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                >
                  Contact Us
                </Button>
              </Link>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}