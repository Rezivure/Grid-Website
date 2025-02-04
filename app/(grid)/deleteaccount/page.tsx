'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react'
import type { Metadata } from 'next'



const API_BASE_URL = 'https://gauth.mygrid.app'

export default function DeleteAccountPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [username, setUsername] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<'initial' | 'verify'>('initial')
  const toast = useToast()

  const handleRequestDelete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/deactivate/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          username: username.toLowerCase(),
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.detail || 'Failed to request account deletion')
      }

      setStep('verify')
      toast({
        title: 'Verification code sent',
        description: 'Please check your phone for the verification code',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to request deletion',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleConfirmDelete = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/deactivate/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.toLowerCase(),
          phone_number: phoneNumber,
          code: verificationCode,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.detail || 'Failed to confirm account deletion')
      }

      toast({
        title: 'Account deleted',
        description: 'Your account has been successfully deleted',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      // Redirect to home page after successful deletion
      window.location.href = 'https://mygrid.app'
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to confirm deletion',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container maxW="container.md" pt={{ base: 40, lg: 60 }}>
      <VStack spacing={8} align="start" width="100%">
        <Heading as="h1" size="xl">
          Delete Account
        </Heading>

        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          <AlertDescription>
            Warning: Deleting your account will permanently remove all your data and cannot be undone. 
            You will be removed from all contacts and groups.
          </AlertDescription>
        </Alert>

        {step === 'initial' ? (
          <Box as="form" onSubmit={handleRequestDelete} width="100%">
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="+1234567890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="\+[1-9]\d{10,14}"
                />
                <FormHelperText>
                  Enter your phone number in international format (e.g., +1234567890)
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  pattern="[a-zA-Z0-9]{5,}"
                />
                <FormHelperText>
                  Enter your Grid username (case-insensitive)
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                colorScheme="red"
                width="100%"
                isLoading={isLoading}
                loadingText="Sending verification code..."
              >
                Request Account Deletion
              </Button>
            </VStack>
          </Box>
        ) : (
          <Box as="form" onSubmit={handleConfirmDelete} width="100%">
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Verification Code</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <FormHelperText>
                  Enter the verification code sent to your phone
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                colorScheme="red"
                width="100%"
                isLoading={isLoading}
                loadingText="Deleting account..."
              >
                Confirm Deletion
              </Button>

              <Button
                variant="ghost"
                onClick={() => setStep('initial')}
                isDisabled={isLoading}
              >
                Back
              </Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  )
}