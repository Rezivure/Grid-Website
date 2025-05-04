// app/(grid)/donate/page.tsx
'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import Script from 'next/script'

export default function DonatePage() {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box bg={bg} minH="100vh" py={{ base: 20, lg: 32 }}>
      <Script
        src="https://donorbox.org/widget.js"
        strategy="afterInteractive"
        {...{ paypalExpress: 'false' }}
      />

      <Container maxW="container.md">
        <VStack spacing={12} align="start">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="extrabold"
          >
            Support Grid
          </Heading>

          <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
          Grid is dedicated to providing seamless private location sharing.
          With zero ads, trackers, or selling your data. By donating to Grid 
          you can significantly help us pay for the servers, bandwidth, 
          and development costs to ensure that Grid remains accessible for 
          folks that value privacy. Please be aware 
          that donating here does not translate to any in-app features, badges, maps,
          etc. Thank you for your support!


          </Text>

          <Center w="full">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
<iframe
  src="https://donorbox.org/embed/initial-donations-3?"
  name="donorbox"
  allowpaymentrequest="allowpaymentrequest"
  seamless="seamless"
  frameborder="0"
  scrolling="no"
  height="900px"
  width="100%"
  style="max-width: 560px; min-width: 250px; max-height:none!important"
  allow="payment">
</iframe>`,
              }}
            />
          </Center>
        </VStack>
      </Container>
    </Box>
  )
}
