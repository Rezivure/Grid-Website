'use client'

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCode, FiEye, FiLock, FiMap, FiShield, FiUsers } from 'react-icons/fi'
import { BRAND, Eyebrow, GEIST, monoCaps } from '#components/brand/brand'

const features = [
  {
    icon: FiLock,
    title: 'End-to-End Encrypted',
    description:
      'Your phone encrypts your location before sending it. Nobody else can read it, including us.',
  },
  {
    icon: FiMap,
    title: 'Private Maps',
    description:
      'Grid renders maps with our own Protomaps tiles. Google and Apple never see where you’re looking.',
  },
  {
    icon: FiEye,
    title: 'You Control Everything',
    description:
      'Pick who can see you and for how long. Turn it off whenever.',
  },
  {
    icon: FiShield,
    title: 'Your Data Stays Yours',
    description:
      'We don’t sell anything to anyone. There are no ads and no third-party trackers in the app.',
  },
  {
    icon: FiUsers,
    title: 'Unlimited Sharing',
    description:
      'Make as many groups as you want. There’s no premium tier and nothing is paywalled.',
  },
  {
    icon: FiCode,
    title: '100% Open Source',
    description: 'The Grid app is fully open source. Read the code or fork it on GitHub.',
  },
]

const stats = [
  { label: 'Ads shown', value: '0', suffix: '' },
  { label: 'Data sold', value: '0', suffix: 'GB' },
  { label: 'Trackers', value: '0', suffix: '' },
  { label: 'Your privacy', value: '100', suffix: '%' },
]

export const PrivacyFeatures = () => {
  return (
    <Box as="section" bg={BRAND.ink} color={BRAND.paper} py={{ base: 20, lg: 28 }}>
      <Container maxW="container.xl" px={{ base: 6, md: 10 }}>
        <VStack spacing={{ base: 14, lg: 20 }} align="stretch">
          {/* Header */}
          <VStack spacing={5} align="flex-start" maxW="720px">
            <Eyebrow>How Grid works</Eyebrow>
            <Heading
              as="h2"
              fontFamily={GEIST}
              fontWeight={700}
              lineHeight="0.98"
              letterSpacing="-0.035em"
              sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
            >
              <Box as="span" color={BRAND.paper}>
                Built so we can&apos;t{' '}
              </Box>
              <Box as="span" color={BRAND.mint}>
                see where you are.
              </Box>
            </Heading>
          </VStack>

          {/* Features Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={{ base: 4, lg: 5 }}
          >
            {features.map((feature) => (
              <GridItem key={feature.title}>
                <Box
                  h="full"
                  p={{ base: 6, lg: 8 }}
                  bg={BRAND.shell}
                  border="1px solid"
                  borderColor={BRAND.hairline}
                  borderRadius="20px"
                  transition="all 0.2s ease"
                  _hover={{
                    bg: BRAND.shellHi,
                    borderColor: BRAND.hairlineHi,
                    transform: 'translateY(-4px)',
                  }}
                >
                  <VStack align="start" spacing={5}>
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      w="44px"
                      h="44px"
                      borderRadius="13px"
                      bg={BRAND.mintSoft}
                    >
                      <Icon as={feature.icon} boxSize={5} color={BRAND.mint} />
                    </Box>
                    <Box>
                      <Heading
                        as="h3"
                        fontFamily={GEIST}
                        fontSize="19px"
                        fontWeight={600}
                        letterSpacing="-0.01em"
                        color={BRAND.paper}
                        mb={2}
                      >
                        {feature.title}
                      </Heading>
                      <Text color={BRAND.slateHi} fontSize="15px" lineHeight="1.6">
                        {feature.description}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>

          {/* Stats */}
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            {stats.map((stat) => (
              <Box
                key={stat.label}
                bg={BRAND.shell}
                border="1px solid"
                borderColor={BRAND.hairline}
                borderRadius="20px"
                py={8}
                px={6}
                textAlign="center"
              >
                <Text
                  as="div"
                  fontFamily={GEIST}
                  fontSize={{ base: '40px', md: '48px' }}
                  fontWeight={700}
                  letterSpacing="-0.04em"
                  lineHeight="1"
                  color={stat.value === '100' ? BRAND.mint : BRAND.paper}
                >
                  {stat.value}
                  <Box as="span" fontSize="20px" ml={1} color={BRAND.slate}>
                    {stat.suffix}
                  </Box>
                </Text>
                <Text mt={3} fontSize="11px" color={BRAND.slate} {...monoCaps}>
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
