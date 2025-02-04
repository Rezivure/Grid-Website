'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import GitHubStars from '#components/extras/github-stars';
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiMap,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import testimonials from '#data/testimonials'
import PrivacyPage from './privacy/page';

export const meta: Metadata = {
  title: 'Grid',
  description: 'Private Location Sharing',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Share Your Location,
                <Br /> Not Your Privacy.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Grid lets you share your real-time location with the people you trust, 
                protected with <Em>end-to-end encryption</Em>. Built on Matrix's secure protocol, 
                it's like having a private map that only your closest friends and family can see.
                 Whether you're coordinating meetups or keeping loved ones in the loop, 
                 Grid makes location sharing simple and truly private.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
            <HStack pt="4" pb="12" spacing="8" alignItems="center">
                <Image 
                  src="/static/images/matrix-logo-white.svg" 
                  alt="Matrix Logo" 
                  height={50} 
                  width={50}
                />
                <Image 
                  src="/static/images/flutter-logo.svg" 
                  alt="Flutter Logo" 
                  height={50} 
                  width={50}
                />
                <Image 
                  src="/static/images/protomaps-logo.svg" 
                  alt="Protomaps Logo" 
                  height={35} 
                  width={35}
                />
               <GitHubStars />
              </HStack>
              <HStack spacing={4} alignItems="center">
                <Link href="https://appstore.mygrid.app">
                  <Image 
                    src="/static/images/app-store-badge.svg" 
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                  />
                </Link>
                <Link href="https://playstore.mygrid.app">
                  <Image 
                    src="/static/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={156}
                    height={42}
                  />
                </Link>
              </HStack>
            </FallInPlace>
          </Hero>
          <Box
  height="600px"
  position="absolute"
  display={{ base: 'none', lg: 'block' }}
  left={{ lg: '60%', xl: '55%' }}
  width="80vw"
  maxW="1100px"
  margin="0 auto"
>
  <Box mb={4}>
    <FallInPlace delay={0.8}>
    </FallInPlace>
  </Box>
  <FallInPlace delay={1}>
    <Box overflow="hidden" height="100%">
      <Image
        src="/static/screenshots/iphone-mockup.png"
        width={700}
        height={700}
        alt="Screenshot of Grid"
        quality="100"
        priority
      />
    </Box>
  </FallInPlace>
  </Box>
  </Stack>
  </Container>

      
    </Box>
  )
}


const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Why Grid?
        </Heading>
      }
      description={
        <>
          See below why Grid is the best choice for your location sharing needs.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        
        {
          title: 'End-to-end Encryption.',
          icon: FiLock,
          description:
            'Grid is end-to-end encrypted by default, ensuring your location is always private and secure.',
          variant: 'inline',
        },
        {
          title: 'Ad and Tracker Free',
          icon: FiSearch,
          description:
            'Grid has zero ads, zero trackers, and zero data sharing. Your location is yours and yours alone.',
          variant: 'inline',
        },
        {
          title: 'Custom Sharing Controls',
          icon: FiUserPlus,
          description:
            'With custom sharing controls, schedule what days and times you want to share your location.',
          variant: 'inline',
        },
        {
          title: 'Built on Trusted Tech',
          icon: FiThumbsUp,
          description:
            "Grid implements E2EE with Matrix, a trusted protocol used by millions of users worldwide.",
          variant: 'inline',
        },
        {
          title: 'Maps Alternative',
          icon: FiMap,
          description:
            'Grid utilizes Protomaps, a privacy-focused mapping alternative to Google and Apple Maps.',
          variant: 'inline',
        },
        {
          title: 'Open Source and Self Hostable',
          icon: FiToggleLeft,
          description:
            'Grid is open-source and can be fully self hosted, giving you full control over your data.',
          variant: 'inline',
        },
      ]}
    />
  )
}





const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
