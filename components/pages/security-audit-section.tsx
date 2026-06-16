'use client'

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { FiCheckCircle, FiExternalLink } from 'react-icons/fi'
import { BRAND, Eyebrow, GEIST, monoCaps } from '#components/brand/brand'

const audits = [
  {
    name: 'NCC Group',
    year: '2016',
    description: 'Audited core encryption protocols',
    link: 'https://matrix.org/blog/2016/11/21/matrix-s-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last/',
  },
  {
    name: 'Least Authority',
    year: '2022',
    description: 'Verified cryptography implementation',
    link: 'https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf',
  },
  {
    name: 'German BSI',
    year: '2024',
    description: 'Government security analysis',
    link: 'https://element.io/blog/bsi-funds-security-analysis-of-matrix/',
  },
]

const guarantees = ['Open Source', 'E2E Encrypted', 'Zero Knowledge', 'Self-Hostable']

export const SecurityAuditSection = () => {
  return (
    <Box
      as="section"
      bg={BRAND.ink}
      color={BRAND.paper}
      py={{ base: 20, lg: 28 }}
      borderTop="1px solid"
      borderColor={BRAND.hairline}
    >
      <Container maxW="container.xl" px={{ base: 6, md: 10 }}>
        <VStack spacing={{ base: 12, lg: 16 }} align="stretch">
          {/* Header */}
          <VStack spacing={5} align="flex-start" maxW="760px">
            <Eyebrow>Independently audited</Eyebrow>
            <Heading
              as="h2"
              fontFamily={GEIST}
              fontWeight={700}
              lineHeight="0.98"
              letterSpacing="-0.035em"
              sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
            >
              Audited encryption.
            </Heading>
            <Text color={BRAND.slateHi} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.6">
              Grid uses the Matrix protocol for end-to-end encryption. The same
              protocol has been independently reviewed by the firms below.
            </Text>
          </VStack>

          {/* Audit cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            {audits.map((audit) => (
              <Box
                key={audit.name}
                bg={BRAND.shell}
                p={6}
                border="1px solid"
                borderColor={BRAND.hairline}
                borderRadius="20px"
                transition="all 0.2s ease"
                _hover={{ borderColor: BRAND.hairlineHi, transform: 'translateY(-4px)' }}
              >
                <VStack align="start" spacing={4}>
                  <Box
                    px={2.5}
                    py={1}
                    borderRadius="full"
                    bg={BRAND.mintSoft}
                    color={BRAND.mint}
                    fontSize="11px"
                    {...monoCaps}
                  >
                    {audit.year}
                  </Box>
                  <Box>
                    <Heading
                      as="h3"
                      fontFamily={GEIST}
                      fontSize="19px"
                      fontWeight={600}
                      color={BRAND.paper}
                      mb={1}
                    >
                      {audit.name}
                    </Heading>
                    <Text fontSize="14px" color={BRAND.slateHi}>
                      {audit.description}
                    </Text>
                  </Box>
                  <Link
                    href={audit.link}
                    isExternal
                    fontSize="14px"
                    color={BRAND.mint}
                    fontWeight={500}
                    display="inline-flex"
                    alignItems="center"
                    _hover={{ color: BRAND.mintHover, textDecoration: 'none' }}
                  >
                    View report <Icon as={FiExternalLink} ml={1.5} />
                  </Link>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Guarantees + links */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            gap={6}
            pt={2}
          >
            <Wrap spacing={{ base: 4, md: 7 }}>
              {guarantees.map((item) => (
                <WrapItem key={item}>
                  <HStack spacing={2}>
                    <Icon as={FiCheckCircle} color={BRAND.mint} boxSize={4} />
                    <Text color={BRAND.slateHi} fontSize="14px" fontWeight={500}>
                      {item}
                    </Text>
                  </HStack>
                </WrapItem>
              ))}
            </Wrap>

            <HStack spacing={6} flexShrink={0}>
              <Link
                href="https://github.com/element-hq/synapse"
                isExternal
                color={BRAND.slate}
                fontSize="14px"
                fontWeight={500}
                _hover={{ color: BRAND.paper, textDecoration: 'none' }}
              >
                View source →
              </Link>
              <Link
                href="https://matrix.org/category/security/"
                isExternal
                color={BRAND.slate}
                fontSize="14px"
                fontWeight={500}
                _hover={{ color: BRAND.paper, textDecoration: 'none' }}
              >
                All reports →
              </Link>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}
