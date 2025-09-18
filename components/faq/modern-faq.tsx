'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Icon,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { FiHelpCircle, FiPlus, FiMinus } from 'react-icons/fi'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface FaqProps {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const ModernFaq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently Asked Questions',
    description = 'Everything you need to know about Grid',
    items = [],
  } = props

  const bgColor = useColorModeValue('white', 'gray.900')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const accordionBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')
  const accentColor = 'green.500'

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
        top="10%"
        left="-10%"
        width="40%"
        height="40%"
        bg="purple.400"
        opacity="0.03"
        borderRadius="full"
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-10%"
        width="40%"
        height="40%"
        bg="green.400"
        opacity="0.03"
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="container.lg" position="relative">
        <VStack spacing={{ base: 12, lg: 16 }}>
          {/* Header */}
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Flex justify="center" mb={6}>
              <Box
                p={4}
                bg={`${accentColor}20`}
                borderRadius="2xl"
              >
                <Icon as={FiHelpCircle} boxSize={10} color={accentColor} />
              </Box>
            </Flex>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color={headingColor}
              mb={4}
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="medium"
            >
              {description}
            </Text>
          </Box>

          {/* FAQ Accordion */}
          <Box w="full" maxW="3xl" mx="auto">
            <Accordion allowMultiple>
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={4}
                >
                  {({ isExpanded }) => (
                    <MotionBox
                      initial={false}
                      animate={{
                        backgroundColor: isExpanded
                          ? accordionBg
                          : accordionBg,
                      }}
                      bg={accordionBg}
                      borderRadius="2xl"
                      overflow="hidden"
                      boxShadow={isExpanded ? 'lg' : 'md'}
                      border="1px solid"
                      borderColor={isExpanded ? accentColor : 'transparent'}
                      transition="all 0.3s"
                    >
                      <AccordionButton
                        p={6}
                        _hover={{ bg: hoverBg }}
                        _expanded={{ bg: 'transparent' }}
                      >
                        <Box flex="1" textAlign="left">
                          <HStack spacing={3} align="start">
                            <Box
                              mt={1}
                              p={1.5}
                              borderRadius="md"
                              bg={isExpanded ? `${accentColor}20` : 'gray.100'}
                              _dark={{ bg: isExpanded ? `${accentColor}20` : 'gray.700' }}
                            >
                              <Icon
                                as={isExpanded ? FiMinus : FiPlus}
                                boxSize={4}
                                color={isExpanded ? accentColor : textColor}
                              />
                            </Box>
                            <Text
                              fontSize={{ base: 'lg', md: 'xl' }}
                              fontWeight={isExpanded ? 'bold' : 'semibold'}
                              color={isExpanded ? headingColor : headingColor}
                              pr={4}
                            >
                              {item.q}
                            </Text>
                          </HStack>
                        </Box>
                      </AccordionButton>
                      <AccordionPanel
                        pb={6}
                        px={6}
                        pt={0}
                      >
                        <Box
                          pl={{ base: 0, md: 12 }}
                          pt={2}
                        >
                          <Text
                            color={textColor}
                            fontSize={{ base: 'md', md: 'lg' }}
                            lineHeight="relaxed"
                          >
                            {item.a}
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </MotionBox>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

        </VStack>
      </Container>
    </Box>
  )
}