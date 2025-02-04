'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'


const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Box mb={8}>
      <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading>
      {children}
    </Box>
)

export default function ReportPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.rapidforms.co/embed/index.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Container maxW="container.md" pt={{ base: 40, lg: 60 }}>
      <VStack spacing={8} align="start" width="100%">
        <Box textAlign="left" width="100%" mb={8}>
          <Section title="Report Abuse">
            We take abuse reports seriously. Please use the form below to report any violations or concerns.
          </Section>
        </Box>
          <iframe 
            id="rapidforms-iframe"
            src="https://app.rapidforms.co/embed/3ca7a2?bg=1a1a1a"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: '#1a1a1a',
            }}
            title="Report Abuse Form"
          />
      </VStack>
    </Container>
  )
}