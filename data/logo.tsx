import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export interface LogoProps {
  size?: number
  wordmark?: boolean
}

export const Logo: React.FC<LogoProps> = ({ size = 32, wordmark = true }) => {
  const src = useColorModeValue(
    '/static/brand/grid-symbol-color.svg',
    '/static/brand/grid-symbol-color-dark.svg',
  )
  const wordColor = useColorModeValue('#0E1115', '#FAFAF9')

  return (
    <HStack spacing={2.5} align="center" h="full">
      <Box
        as="span"
        display="inline-flex"
        w={`${size}px`}
        h={`${size}px`}
        flexShrink={0}
      >
        <Image
          src={src}
          alt="Grid"
          width={size}
          height={size}
          priority
        />
      </Box>
      {wordmark && (
        <Text
          as="span"
          fontFamily="'Geist', system-ui, sans-serif"
          fontWeight={600}
          letterSpacing="-0.04em"
          fontSize={`${Math.round(size * 0.75)}px`}
          lineHeight="1"
          color={wordColor}
        >
          grid
        </Text>
      )}
    </HStack>
  )
}
