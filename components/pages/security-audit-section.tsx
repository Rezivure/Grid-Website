'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Badge,
  Flex,
} from '@chakra-ui/react'
import { FiShield, FiExternalLink, FiAward, FiLock, FiCheckCircle } from 'react-icons/fi'

const audits = [
  {
    name: 'NCC Group',
    year: '2016',
    description: 'Audited core encryption protocols',
    link: 'https://matrix.org/blog/2016/11/21/matrix-s-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last/',
    color: 'blue'
  },
  {
    name: 'Least Authority',
    year: '2022',
    description: 'Verified cryptography implementation',
    link: 'https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf',
    color: 'purple'
  },
  {
    name: 'German BSI',
    year: '2024',
    description: 'Government security analysis',
    link: 'https://element.io/blog/bsi-funds-security-analysis-of-matrix/',
    color: 'green'
  }
]

export const SecurityAuditSection = () => {
  const bgColor = 'gray.900'
  const cardBg = useColorModeValue('gray.800', 'gray.900')
  const textColor = 'gray.400'
  const headingColor = 'white'
  const accentColor = 'green.400'

  return (
    <Box
      py={{ base: 16, lg: 24 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="radial-gradient(circle at 1px 1px, green 1px, transparent 1px)"
        bgSize="50px 50px"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={{ base: 12, lg: 16 }}>
          {/* Header */}
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Flex justify="center" mb={6}>
              <Icon as={FiShield} boxSize={12} color={accentColor} />
            </Flex>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color={headingColor}
              mb={4}
            >
              Powered by proven security
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
            >
              Built on Matrix Protocol — independently audited by the same firms that verify Signal and Tor
            </Text>
          </Box>

          {/* Audit cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            {audits.map((audit) => (
              <Box
                key={audit.name}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
                position="relative"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{
                  borderColor: `${audit.color}.500`,
                  transform: 'translateY(-4px)',
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  height="2px"
                  bg={`${audit.color}.500`}
                />

                <VStack align="start" spacing={4}>
                  <HStack justify="space-between" w="full">
                    <Badge
                      bg={`${audit.color}.900`}
                      color={`${audit.color}.300`}
                      px={2}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                    >
                      {audit.year}
                    </Badge>
                    <Icon as={FiAward} color={`${audit.color}.400`} boxSize={5} />
                  </HStack>

                  <Box>
                    <Heading fontSize="xl" color={headingColor} mb={1}>
                      {audit.name}
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      {audit.description}
                    </Text>
                  </Box>

                  <Link
                    href={audit.link}
                    isExternal
                    fontSize="sm"
                    color={`${audit.color}.400`}
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                    _hover={{ color: `${audit.color}.300` }}
                  >
                    View report <Icon as={FiExternalLink} ml={1} />
                  </Link>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Trust indicators */}
          <HStack spacing={{ base: 8, md: 12 }} justify="center" wrap="wrap">
            {['Open Source', 'E2E Encrypted', 'Zero Knowledge', 'Self-Hostable'].map((item) => (
              <HStack key={item} spacing={2}>
                <Icon as={FiCheckCircle} color={accentColor} boxSize={5} />
                <Text color={textColor} fontSize="sm" fontWeight="medium">
                  {item}
                </Text>
              </HStack>
            ))}
          </HStack>

          {/* Links */}
          <HStack spacing={8} justify="center">
            <Link
              href="https://github.com/element-hq/synapse"
              isExternal
              color={accentColor}
              fontSize="sm"
              fontWeight="semibold"
              _hover={{ color: 'green.300' }}
            >
              View source code →
            </Link>
            <Link
              href="https://matrix.org/category/security/"
              isExternal
              color={accentColor}
              fontSize="sm"
              fontWeight="semibold"
              _hover={{ color: 'green.300' }}
            >
              All security reports →
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}