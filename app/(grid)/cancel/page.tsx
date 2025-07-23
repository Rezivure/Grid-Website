'use client';

import { Box, Container, Heading, VStack, Text, Button, Card, CardBody, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FiXCircle } from 'react-icons/fi';

export default function CancelPage() {
  const router = useRouter();

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="center">
        <Card w="full">
          <CardBody>
            <VStack spacing={6} align="center" py={8}>
              <Icon as={FiXCircle} w={16} h={16} color="red.500" />
              
              <VStack spacing={3} textAlign="center">
                <Heading size="xl">Payment Cancelled</Heading>
                <Text fontSize="lg" color="gray.600">
                  Your subscription purchase was cancelled
                </Text>
              </VStack>

              <VStack spacing={4} w="full">
                <Text textAlign="center" fontSize="sm" color="gray.600">
                  No charges were made to your payment method. You can try again whenever you&apos;re ready to unlock satellite maps.
                </Text>

                <VStack spacing={3} w="full">
                  <Button
                    size="lg"
                    colorScheme="blue"
                    onClick={() => router.push('/checkout')}
                    w="full"
                  >
                    Try Again
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push('/')}
                    w="full"
                  >
                    Return Home
                  </Button>
                </VStack>

                <Text fontSize="xs" color="gray.500" textAlign="center" mt={4}>
                  Questions? Contact contact@mygrid.app
                </Text>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}