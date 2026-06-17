'use client'

import { Box, Container, Flex, Grid, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FiCheck, FiX } from 'react-icons/fi'
import { BRAND, Eyebrow, GEIST, monoCaps } from '#components/brand/brand'

const rows = [
  'End-to-end encrypted',
  'No phone number or email required',
  'Open source',
  'Never sells your location data',
  'Works on GrapheneOS / de-Googled Android',
]

const Yes = () => (
  <Flex
    align="center"
    justify="center"
    w="22px"
    h="22px"
    borderRadius="full"
    bg={BRAND.mint}
    color={BRAND.mintDeep}
    mx="auto"
    aria-label="Grid: yes"
  >
    <Icon as={FiCheck} boxSize={3} strokeWidth={3} />
  </Flex>
)

const No = () => (
  <Flex
    align="center"
    justify="center"
    w="22px"
    h="22px"
    borderRadius="full"
    bg="rgba(242,117,92,0.14)"
    color="#F2755C"
    mx="auto"
    aria-label="Life360: no"
  >
    <Icon as={FiX} boxSize={3} strokeWidth={3} />
  </Flex>
)

export const CompareTeaser = () => {
  const cols = { base: '1fr 60px 60px', md: '1fr 120px 120px' }
  return (
    <Box
      as="section"
      bg={BRAND.ink}
      color={BRAND.paper}
      py={{ base: 20, lg: 28 }}
      borderTop="1px solid"
      borderColor={BRAND.hairline}
    >
      <Container maxW="container.lg" px={{ base: 6, md: 10 }}>
        <VStack spacing={{ base: 12, lg: 16 }} align="stretch">
          {/* Header */}
          <VStack spacing={5} align="flex-start" maxW="760px">
            <Eyebrow>Grid vs Life360</Eyebrow>
            <Heading
              as="h2"
              fontFamily={GEIST}
              fontWeight={700}
              lineHeight="0.98"
              letterSpacing="-0.035em"
              sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
            >
              <Box as="span" color={BRAND.paper}>
                Why Grid,{' '}
              </Box>
              <Box as="span" color={BRAND.mint}>
                not Life360.
              </Box>
            </Heading>
            <Text color={BRAND.slateHi} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.6">
              Both apps let you share your location with people you trust. Grid
              just doesn&apos;t make money off it.
            </Text>
          </VStack>

          {/* Condensed comparison */}
          <Box
            bg={BRAND.shell}
            border="1px solid"
            borderColor={BRAND.hairline}
            borderRadius="20px"
            px={{ base: 5, md: 8 }}
            py={2}
          >
            <Grid templateColumns={cols} columnGap={4} alignItems="center" py={4}>
              <Box />
              <Text textAlign="center" color={BRAND.slate} fontSize="11px" {...monoCaps}>
                Life360
              </Text>
              <Text textAlign="center" color={BRAND.mint} fontSize="11px" fontWeight={600} {...monoCaps}>
                Grid
              </Text>
            </Grid>
            {rows.map((row) => (
              <Grid
                key={row}
                templateColumns={cols}
                columnGap={4}
                alignItems="center"
                py={4}
                borderTop="1px solid"
                borderColor={BRAND.hairline}
              >
                <Text
                  fontFamily={GEIST}
                  fontWeight={500}
                  color={BRAND.paper}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  {row}
                </Text>
                <No />
                <Yes />
              </Grid>
            ))}
          </Box>

          {/* CTA to full comparison */}
          <Box>
            <Link
              href="/compare"
              display="inline-flex"
              alignItems="center"
              bg="transparent"
              color={BRAND.paper}
              fontFamily={GEIST}
              fontWeight={600}
              fontSize="15px"
              borderRadius="full"
              border="1px solid"
              borderColor={BRAND.hairlineHi}
              px="22px"
              py="13px"
              _hover={{ bg: BRAND.shell, textDecoration: 'none', transform: 'translateY(-1px)' }}
              transition="all 0.15s ease"
            >
              See the full comparison →
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
