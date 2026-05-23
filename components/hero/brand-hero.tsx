'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'

const MONO_CAPS = {
  fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  fontSize: { base: '10px', md: '12px' },
}

export const BrandHero = () => {
  return (
    <Box
      as="section"
      position="relative"
      bg="#0E1115"
      color="#FAFAF9"
      minH={{ base: 'auto', lg: '100vh' }}
      overflow="hidden"
    >
      {/* Subtle grid pattern background */}
      <Box
        position="absolute"
        inset="0"
        zIndex={0}
        backgroundImage="url('/static/brand/grid-pattern-low-color.svg')"
        backgroundRepeat="repeat"
        backgroundSize="320px 320px"
        opacity={0.07}
        pointerEvents="none"
      />

      {/* Top nav row: logo (left) + mono caps label (right) */}
      <Container
        maxW="container.2xl"
        px={{ base: 6, md: 10 }}
        pt={{ base: 6, md: 8 }}
        position="relative"
        zIndex={2}
      >
        <Flex align="center" justify="space-between" gap={4}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <HStack spacing={2.5} align="center">
              <Box as="span" display="inline-flex" w="32px" h="32px" flexShrink={0}>
                <Image
                  src="/static/brand/grid-symbol-color-dark.svg"
                  alt="Grid"
                  width={32}
                  height={32}
                  priority
                />
              </Box>
              <Text
                as="span"
                fontFamily="'Geist', system-ui, sans-serif"
                fontWeight={600}
                letterSpacing="-0.04em"
                fontSize="24px"
                lineHeight="1"
                color="#FAFAF9"
              >
                grid
              </Text>
            </HStack>
          </Link>

          <Text
            as="span"
            color="#5A6670"
            display={{ base: 'none', sm: 'inline' }}
            {...MONO_CAPS}
          >
            End-to-end encrypted · Open source
          </Text>
        </Flex>
      </Container>

      {/* Hero body */}
      <Container
        maxW="container.2xl"
        px={{ base: 6, md: 10 }}
        pt={{ base: 16, md: 24, lg: 28 }}
        pb={{ base: 24, md: 28, lg: 32 }}
        position="relative"
        zIndex={1}
      >
        <Stack spacing={{ base: 8, md: 10 }} alignItems="flex-start" maxW="1400px">
          <Heading
            as="h1"
            fontFamily="'Geist', system-ui, sans-serif"
            fontWeight={700}
            lineHeight="0.95"
            letterSpacing="-0.04em"
            textAlign="left"
            sx={{
              fontSize: 'clamp(64px, 12vw, 144px)',
            }}
          >
            <Box
              as="span"
              display="block"
              color="#5A6670"
              sx={{
                textDecoration: 'line-through',
                textDecorationColor: '#5A6670',
                textDecorationThickness: 'clamp(4px, 0.7vw, 8px)',
                textUnderlineOffset: '0',
              }}
            >
              Life360.
            </Box>
            <Box as="span" display="block" color="#1FD9A0">
              Grid.
            </Box>
          </Heading>

          <Text
            as="p"
            color="#5A6670"
            fontFamily="'Geist', system-ui, sans-serif"
            fontWeight={500}
            lineHeight="1.4"
            sx={{
              fontSize: 'clamp(16px, 1.8vw, 22px)',
            }}
            maxW="640px"
          >
            Real-time location, end-to-end encrypted.
            <br />
            No phone number. No email. No tracking SDKs.
          </Text>

          <HStack spacing={6} align="center" flexWrap="wrap" rowGap={3}>
            <Link
              href="https://appstore.mygrid.app"
              display="inline-flex"
              alignItems="center"
              bg="#1FD9A0"
              color="#0B5840"
              fontFamily="'Geist', system-ui, sans-serif"
              fontWeight={600}
              fontSize="16px"
              borderRadius="full"
              px="24px"
              py="14px"
              _hover={{
                bg: '#19B587',
                textDecoration: 'none',
                transform: 'translateY(-1px)',
              }}
              transition="all 0.15s ease"
            >
              Get Grid →
            </Link>

            <Link
              href="https://github.com/Rezivure/Grid-Mobile"
              color="#5A6670"
              fontFamily="'Geist', system-ui, sans-serif"
              fontWeight={500}
              fontSize="14px"
              _hover={{ color: '#FAFAF9', textDecoration: 'none' }}
              transition="color 0.15s ease"
            >
              ★ Star on GitHub
            </Link>
          </HStack>
        </Stack>
      </Container>

      {/* Bottom-right "available on" stack */}
      <Box
        position="absolute"
        right={{ base: 6, md: 10 }}
        bottom={{ base: 6, md: 10 }}
        textAlign="right"
        zIndex={2}
        display={{ base: 'none', md: 'block' }}
      >
        <Text as="span" display="block" color="#5A6670" {...MONO_CAPS}>
          Available on
        </Text>
        <Text
          as="span"
          display="block"
          color="#FAFAF9"
          fontFamily="'Geist', system-ui, sans-serif"
          fontWeight={500}
          fontSize="14px"
          mt={1}
        >
          iOS · App Store
        </Text>
      </Box>
    </Box>
  )
}
