'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import {
  FaBicycle,
  FaBriefcase,
  FaHiking,
  FaMotorcycle,
  FaPlane,
  FaUsers,
} from 'react-icons/fa'
import { BRAND, Eyebrow, GEIST } from '#components/brand/brand'

const useCases = [
  { icon: FaUsers, label: 'Family', desc: 'Keep tabs on loved ones' },
  { icon: FaHiking, label: 'Hiking', desc: 'Track your trail buddies' },
  { icon: FaMotorcycle, label: 'Moto Clubs', desc: 'Ride together, stay connected' },
  { icon: FaBicycle, label: 'Cycling', desc: 'Group rides made easy' },
  { icon: FaPlane, label: 'Travel', desc: 'Meet up anywhere' },
  { icon: FaBriefcase, label: 'Work Teams', desc: 'Coordinate field work' },
]

export const TrustSection = () => {
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
        <VStack spacing={{ base: 14, lg: 18 }} align="stretch">
          {/* Header */}
          <VStack spacing={5} align="flex-start" maxW="760px">
            <Eyebrow>Who uses Grid</Eyebrow>
            <Heading
              as="h2"
              fontFamily={GEIST}
              fontWeight={700}
              lineHeight="0.98"
              letterSpacing="-0.035em"
              sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
            >
              <Box as="span" color={BRAND.paper}>
                Not just for{' '}
              </Box>
              <Box as="span" color={BRAND.mint}>
                families.
              </Box>
            </Heading>
            <Text color={BRAND.slateHi} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.6">
              Families use Grid. So do hiking groups, moto crews, and work teams
              who want to know where their people are without handing it to a
              tracking company.
            </Text>
          </VStack>

          {/* Use cases */}
          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
            {useCases.map((item) => (
              <Flex
                key={item.label}
                direction="column"
                p={{ base: 6, lg: 7 }}
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
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="44px"
                  h="44px"
                  borderRadius="13px"
                  bg={BRAND.mintSoft}
                  mb={5}
                >
                  <Icon as={item.icon} boxSize={5} color={BRAND.mint} />
                </Box>
                <Text
                  fontFamily={GEIST}
                  fontSize="18px"
                  fontWeight={600}
                  letterSpacing="-0.01em"
                  color={BRAND.paper}
                  mb={1}
                >
                  {item.label}
                </Text>
                <Text fontSize="14px" color={BRAND.slateHi}>
                  {item.desc}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
