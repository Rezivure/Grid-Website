'use client'

import { Box, Text } from '@chakra-ui/react'
import type { BoxProps, TextProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

/**
 * Single source of truth for the 2026 brand kit.
 * Mirrors the semantic tokens in theme/index.ts and the treatment on /compare.
 */
export const BRAND = {
  ink: '#0E1115', // primary dark surface
  shell: '#191B1E', // raised card surface
  shellHi: '#202327', // hover / elevated card
  hairline: 'rgba(255,255,255,0.08)',
  hairlineHi: 'rgba(255,255,255,0.16)',
  paper: '#FAFAF9', // primary text on dark
  slate: '#5A6670', // muted text / labels
  slateHi: '#8995A0', // slightly brighter muted text
  dot: '#D6D8DA', // grid-motif dots (matches app icon)
  mint: '#1FD9A0',
  mintHover: '#19B587',
  mintDeep: '#0B5840', // text on mint
  mintSoft: 'rgba(31,217,160,0.10)', // tinted icon wells
  danger: '#B23A1F',
} as const

export const GEIST = "'Geist', system-ui, sans-serif"
export const GEIST_MONO =
  "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

/** Mono uppercase label used as section eyebrows (see /compare). */
export const monoCaps = {
  fontFamily: GEIST_MONO,
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
}

interface EyebrowProps extends TextProps {
  children: React.ReactNode
}

export const Eyebrow = ({ children, ...rest }: EyebrowProps) => (
  <Text
    as="span"
    display="inline-block"
    color={BRAND.slate}
    fontSize={{ base: '11px', md: '12px' }}
    {...monoCaps}
    {...rest}
  >
    {children}
  </Text>
)

const pinPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.06); opacity: 0.85; }
`

interface GridMotifProps extends BoxProps {
  /** rendered square size */
  size?: BoxProps['w']
  dotColor?: string
  pinColor?: string
  animated?: boolean
}

/**
 * The signature brand mark: a 3x3 grid of dots with the top-left dot
 * replaced by a location pin. Geometry taken verbatim from
 * /public/static/brand/grid-symbol-color-dark.svg.
 */
export const GridMotif = ({
  size = '320px',
  dotColor = BRAND.dot,
  pinColor = BRAND.mint,
  animated = true,
  ...rest
}: GridMotifProps) => {
  const dots = [
    [20, 12],
    [28, 12],
    [12, 20],
    [20, 20],
    [28, 20],
    [12, 28],
    [20, 28],
    [28, 28],
  ]
  return (
    <Box w={size} h={size} {...rest}>
      <Box
        as="svg"
        viewBox="0 0 40 40"
        width="100%"
        height="100%"
        role="img"
        aria-label="Grid"
        sx={{
          '& .grid-pin': animated
            ? {
                transformOrigin: '12px 11.6px',
                animation: `${pinPulse} 2.8s ease-in-out infinite`,
              }
            : undefined,
        }}
      >
        {dots.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.4} fill={dotColor} />
        ))}
        <path
          className="grid-pin"
          d="M 12 14.5 Q 10.68 13.060582854123025 9.682 11.621 A 2.4 2.4 0 1 1 14.318 11.621 Q 13.32 13.060582854123025 12 14.5 Z"
          fill={pinColor}
        />
      </Box>
    </Box>
  )
}
