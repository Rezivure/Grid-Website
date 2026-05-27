'use client'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { BRAND, Eyebrow, GEIST } from '#components/brand/brand'

interface FaqProps {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const ModernFaq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently asked questions',
    description = 'Everything you need to know about Grid',
    items = [],
  } = props

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
          <VStack spacing={5} align="flex-start" maxW="720px">
            <Eyebrow>Questions</Eyebrow>
            <Heading
              as="h2"
              fontFamily={GEIST}
              fontWeight={700}
              lineHeight="0.98"
              letterSpacing="-0.035em"
              sx={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
            >
              {title}
            </Heading>
            <Text color={BRAND.slateHi} fontSize={{ base: 'md', md: 'lg' }}>
              {description}
            </Text>
          </VStack>

          {/* Accordion */}
          <Accordion allowMultiple>
            {items.map((item, index) => (
              <AccordionItem key={index} border="none" mb={3}>
                {({ isExpanded }) => (
                  <Box
                    bg={BRAND.shell}
                    borderRadius="16px"
                    overflow="hidden"
                    border="1px solid"
                    borderColor={isExpanded ? BRAND.hairlineHi : BRAND.hairline}
                    transition="border-color 0.2s ease"
                  >
                    <AccordionButton
                      p={{ base: 5, md: 6 }}
                      _hover={{ bg: BRAND.shellHi }}
                      _expanded={{ bg: 'transparent' }}
                    >
                      <Box flex="1" textAlign="left">
                        <HStack spacing={4} align="center">
                          <Box
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            w="28px"
                            h="28px"
                            flexShrink={0}
                            borderRadius="8px"
                            bg={isExpanded ? BRAND.mintSoft : 'rgba(255,255,255,0.05)'}
                          >
                            <Icon
                              as={isExpanded ? FiMinus : FiPlus}
                              boxSize={4}
                              color={isExpanded ? BRAND.mint : BRAND.slateHi}
                            />
                          </Box>
                          <Text
                            fontFamily={GEIST}
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight={600}
                            letterSpacing="-0.01em"
                            color={BRAND.paper}
                            pr={4}
                          >
                            {item.q}
                          </Text>
                        </HStack>
                      </Box>
                    </AccordionButton>
                    <AccordionPanel pb={6} px={{ base: 5, md: 6 }} pt={0}>
                      <Box pl={{ base: 0, md: 12 }}>
                        <Text
                          color={BRAND.slateHi}
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.7"
                        >
                          {item.a}
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  )
}
