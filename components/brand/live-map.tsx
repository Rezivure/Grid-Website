'use client'

import { Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { BRAND, GEIST_MONO } from './brand'

const MotionBox = motion(Box)

// Expanding "ping" ring under each pin — the live-location signal.
const ping = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
`

// Pulsing dot in the LIVE chip.
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.25; }
`

interface Pin {
  /** anchor point, as % of the panel; also where the ping emanates */
  x: number
  y: number
  size: number
  dur: number
  delay: number
  /** the "you" pin reads a touch brighter */
  you?: boolean
}

const PINS: Pin[] = [
  { x: 30, y: 35, size: 30, dur: 7.5, delay: 0, you: true },
  { x: 66, y: 27, size: 24, dur: 9, delay: 1.1 },
  { x: 54, y: 69, size: 24, dur: 8.2, delay: 2.2 },
]

// Stylized city-grid "streets".
const STREETS = [14, 28, 42, 56, 70, 86]

const PinGlyph = ({ size, you }: { size: number; you?: boolean }) => (
  <Box
    as="svg"
    viewBox="0 0 24 34"
    width={`${size}px`}
    height={`${size * (34 / 24)}px`}
    sx={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.45))' }}
  >
    <path
      d="M12 0C5.37 0 0 5.37 0 12c0 9 12 22 12 22s12-13 12-22C24 5.37 18.63 0 12 0z"
      fill={BRAND.mint}
    />
    <circle cx="12" cy="12" r="4.5" fill={you ? BRAND.ink : BRAND.mintDeep} />
  </Box>
)

export const LiveMap = (props: BoxProps) => {
  return (
    <Box
      position="relative"
      w="100%"
      maxW={{ base: '300px', md: '380px', lg: '440px' }}
      mx={{ base: 'auto', lg: 0 }}
      sx={{ aspectRatio: '1 / 1' }}
      borderRadius="24px"
      overflow="hidden"
      bg="#121519"
      border="1px solid"
      borderColor={BRAND.hairline}
      boxShadow="0 24px 60px rgba(0,0,0,0.45)"
      {...props}
    >
      {/* Map: streets + connecting lines */}
      <Box
        as="svg"
        viewBox="0 0 100 100"
        position="absolute"
        inset={0}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* a subtly tinted "park" block for depth */}
        <rect x="58" y="48" width="30" height="30" rx="3" fill="rgba(31,217,160,0.05)" />

        {/* minor streets */}
        {STREETS.map((p) => (
          <line key={`v${p}`} x1={p} y1="0" x2={p} y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        ))}
        {STREETS.map((p) => (
          <line key={`h${p}`} x1="0" y1={p} x2="100" y2={p} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        ))}

        {/* major avenues */}
        <line x1="42" y1="0" x2="42" y2="100" stroke="rgba(255,255,255,0.09)" strokeWidth="1.1" />
        <line x1="0" y1="56" x2="100" y2="56" stroke="rgba(255,255,255,0.09)" strokeWidth="1.1" />
        {/* a diagonal boulevard */}
        <line x1="0" y1="86" x2="100" y2="34" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

        {/* connecting lines between the circle of pins */}
        <polygon
          points={PINS.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="rgba(31,217,160,0.04)"
          stroke="rgba(31,217,160,0.30)"
          strokeWidth="0.5"
          strokeDasharray="1.6 1.6"
        />
      </Box>

      {/* edge vignette */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        bgGradient="radial(closest-side, transparent 55%, rgba(0,0,0,0.35))"
      />

      {/* Pins (drifting) with ping rings */}
      {PINS.map((pin, i) => (
        <MotionBox
          key={i}
          position="absolute"
          left={`${pin.x}%`}
          top={`${pin.y}%`}
          w="0"
          h="0"
          animate={{ x: [0, 4, -3, 2, 0], y: [0, -3, 3, -2, 0] }}
          transition={{ duration: pin.dur, delay: pin.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* ping ring — emanates from the ground point */}
          <Box
            position="absolute"
            left="0"
            top="0"
            w={`${pin.size * 1.4}px`}
            h={`${pin.size * 1.4}px`}
            borderRadius="full"
            border="1.5px solid"
            borderColor={BRAND.mint}
            sx={{ animation: `${ping} 3s ease-out ${pin.delay}s infinite` }}
          />
          {/* the pin sits with its tip on the ground point */}
          <Box
            position="absolute"
            left="0"
            top="0"
            transform="translate(-50%, -100%)"
            transformOrigin="bottom center"
          >
            <PinGlyph size={pin.size} you={pin.you} />
          </Box>
        </MotionBox>
      ))}

      {/* LIVE chip */}
      <Box
        position="absolute"
        top="14px"
        left="14px"
        display="inline-flex"
        alignItems="center"
        gap="7px"
        px="10px"
        py="5px"
        borderRadius="full"
        bg="rgba(14,17,21,0.72)"
        border="1px solid"
        borderColor={BRAND.hairline}
        sx={{ backdropFilter: 'blur(6px)' }}
      >
        <Box
          w="7px"
          h="7px"
          borderRadius="full"
          bg={BRAND.mint}
          sx={{ animation: `${blink} 1.6s ease-in-out infinite` }}
        />
        <Box
          as="span"
          color={BRAND.paper}
          fontFamily={GEIST_MONO}
          fontWeight={500}
          fontSize="10px"
          letterSpacing="0.14em"
          textTransform="uppercase"
        >
          Live · encrypted
        </Box>
      </Box>
    </Box>
  )
}
