'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { FiShield, FiLock, FiEye, FiUsers, FiMap, FiCode } from 'react-icons/fi'

const features = [
  {
    icon: FiLock,
    title: 'End-to-End Encrypted',
    description: 'Your location is encrypted before leaving your phone. Nobody can see it - not even us.',
    color: 'purple'
  },
  {
    icon: FiMap,
    title: 'Private Maps',
    description: 'Self-hosted map tiles mean no tracking from Google or Apple Maps.',
    color: 'blue'
  },
  {
    icon: FiEye,
    title: 'You Control Everything',
    description: 'Set expiring shares, custom schedules, instant revocation. Your rules.',
    color: 'teal'
  },
  {
    icon: FiShield,
    title: 'Your Data Stays Yours',
    description: 'We never sell your data. Ever. No ads, no trackers, no compromise.',
    color: 'orange'
  },
  {
    icon: FiUsers,
    title: 'Unlimited Sharing',
    description: 'Create groups for family, friends, events. No premium features.',
    color: 'pink'
  },
  {
    icon: FiCode,
    title: '100% Open Source',
    description: 'The Grid app is fully open source. Audit it, fork it, improve it.',
    color: 'green'
  }
]

export const PrivacyFeatures = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.950')
  const headingColor = useColorModeValue('gray.800', 'white')
  const descColor = useColorModeValue('gray.600', 'gray.300')
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardShadow = useColorModeValue(
    '0 4px 20px rgba(0,0,0,0.08)',
    '0 4px 20px rgba(0,0,0,0.4)'
  )

  return (
    <Box
      py={{ base: 16, lg: 24 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        width="60%"
        height="150%"
        bg="green.500"
        opacity="0.03"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={{ base: 12, lg: 16 }}>
          {/* Header */}
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color={headingColor}
              lineHeight="1"
              letterSpacing="tight"
            >
              Privacy isn't optional
            </Heading>
            <Text
              mt={4}
              fontSize={{ base: 'lg', md: 'xl' }}
              color={descColor}
              fontWeight="medium"
            >
              It's built into everything we do
            </Text>
          </Box>

          {/* Features Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={{ base: 6, lg: 8 }}
            w="full"
          >
            {features.map((feature, index) => (
              <GridItem key={index}>
                <Box
                  p={8}
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow={cardShadow}
                  transition="all 0.3s"
                  cursor="pointer"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Colored accent */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="3px"
                    bg={`${feature.color}.500`}
                  />

                  <VStack align="start" spacing={4}>
                    <Box
                      p={3}
                      bg={`${feature.color}.100`}
                      _dark={{ bg: `${feature.color}.900` }}
                      borderRadius="xl"
                      display="inline-block"
                    >
                      <Icon
                        as={feature.icon}
                        boxSize={6}
                        color={`${feature.color}.500`}
                        _dark={{ color: `${feature.color}.300` }}
                      />
                    </Box>

                    <Box>
                      <Heading
                        fontSize="xl"
                        fontWeight="bold"
                        color={headingColor}
                        mb={2}
                      >
                        {feature.title}
                      </Heading>
                      <Text
                        color={descColor}
                        fontSize="md"
                        lineHeight="relaxed"
                      >
                        {feature.description}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>

          {/* Stats */}
          <Box w="full" pt={8}>
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
              gap={6}
            >
              {[
                { label: 'Ads shown', value: '0', suffix: '' },
                { label: 'Data sold', value: '0', suffix: 'GB' },
                { label: 'Trackers', value: '0', suffix: '' },
                { label: 'Your privacy', value: '100', suffix: '%' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="2xl"
                  boxShadow={cardShadow}
                  textAlign="center"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                >
                  <Text
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="black"
                    color={stat.value === '100' ? 'green.500' : headingColor}
                    lineHeight="1"
                  >
                    {stat.value}
                    <Box as="span" fontSize="xl" ml={1}>
                      {stat.suffix}
                    </Box>
                  </Text>
                  <Text
                    mt={2}
                    fontSize="sm"
                    color={descColor}
                    fontWeight="medium"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}