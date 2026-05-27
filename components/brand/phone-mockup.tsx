'use client'

import { Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { BRAND } from './brand'

const MotionBox = motion(Box)

// Expanding "live location" ping over the user's pin.
const ping = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; }
`

interface PhoneMockupProps extends BoxProps {
  /** screen image (defaults to the cleaned app screenshot) */
  src?: string
  /** location of the live-ping over the screen, as % */
  pingLeft?: string
  pingTop?: string
}

export const PhoneMockup = ({
  src = '/static/brand/app-hero.png',
  pingLeft = '51%',
  pingTop = '44%',
  ...rest
}: PhoneMockupProps) => {
  return (
    <MotionBox
      w={{ base: '232px', md: '278px', lg: '320px' }}
      mx={{ base: 'auto', lg: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {/* Phone body / titanium frame */}
      <Box
        position="relative"
        w="100%"
        p="3%"
        borderRadius="46px"
        bgGradient="linear(160deg, #3a3e44, #1b1d21 55%, #2a2d31)"
        boxShadow="0 40px 90px rgba(0,0,0,0.55), 0 10px 26px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)"
      >
        {/* Screen */}
        <Box
          position="relative"
          w="100%"
          sx={{ aspectRatio: '1170 / 2532' }}
          borderRadius="38px"
          overflow="hidden"
          bg="#0b0d10"
          backgroundImage={`url(${src})`}
          backgroundSize="cover"
          backgroundPosition="top center"
        >
          {/* Dynamic island */}
          <Box
            position="absolute"
            top="1.6%"
            left="50%"
            transform="translateX(-50%)"
            w="30%"
            h="3.2%"
            bg="#05070a"
            borderRadius="full"
            zIndex={3}
          />

          {/* Live-location ping over the user pin */}
          <Box position="absolute" left={pingLeft} top={pingTop} w="0" h="0" zIndex={2}>
            <Box
              position="absolute"
              left="0"
              top="0"
              w="46px"
              h="46px"
              borderRadius="full"
              border="2px solid"
              borderColor={BRAND.mint}
              sx={{ animation: `${ping} 2.8s ease-out infinite` }}
            />
          </Box>

          {/* subtle screen glare */}
          <Box
            position="absolute"
            inset={0}
            pointerEvents="none"
            bgGradient="linear(135deg, rgba(255,255,255,0.06), transparent 30%)"
          />
        </Box>
      </Box>
    </MotionBox>
  )
}
