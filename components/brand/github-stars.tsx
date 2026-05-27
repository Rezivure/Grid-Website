'use client'

import { HStack, Text } from '@chakra-ui/react'
import type { HStackProps } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { useEffect, useState } from 'react'
import { FaGithub, FaStar } from 'react-icons/fa'
import { BRAND, GEIST } from './brand'

const REPO = 'Rezivure/Grid-Mobile'
const FALLBACK = 480

/** Star-count pill that fetches the live count, falling back to FALLBACK. */
export const GithubStars = (props: HStackProps) => {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    let active = true
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (active && d && typeof d.stargazers_count === 'number') {
          setStars(d.stargazers_count)
        }
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const count = stars ?? FALLBACK

  return (
    <Link href={`https://github.com/${REPO}`} isExternal _hover={{ textDecoration: 'none' }}>
      <HStack
        spacing={2.5}
        px={4}
        py="9px"
        borderRadius="full"
        bg={BRAND.shell}
        border="1px solid"
        borderColor={BRAND.hairline}
        transition="all 0.15s ease"
        _hover={{ borderColor: BRAND.hairlineHi, bg: BRAND.shellHi, transform: 'translateY(-1px)' }}
        {...props}
      >
        <FaGithub color={BRAND.paper} size={16} />
        <FaStar color={BRAND.mint} size={13} />
        <Text fontFamily={GEIST} fontWeight={600} fontSize="14px" color={BRAND.paper}>
          {count.toLocaleString()}
        </Text>
        <Text fontFamily={GEIST} fontWeight={500} fontSize="14px" color={BRAND.slate}>
          stars on GitHub
        </Text>
      </HStack>
    </Link>
  )
}
