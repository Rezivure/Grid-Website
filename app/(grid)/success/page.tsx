'use client';

import { Box, Container, Heading, VStack, Text, Button, Card, CardBody, Icon, useToast } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const [isVerifying, setIsVerifying] = useState(true);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // In a real implementation, you might want to verify the session with your backend
      setTimeout(() => {
        setIsVerifying(false);
      }, 1000);
    } else {
      setIsVerifying(false);
    }
  }, [sessionId]);

  const handleReturnToApp = () => {
    toast({
      title: 'Return to Grid App',
      description: 'Please return to the Grid app to start using satellite maps.',
      status: 'info',
      duration: null,
      isClosable: true,
    });
  };

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="center">
        <Card w="full">
          <CardBody>
            <VStack spacing={6} align="center" py={8}>
              <Icon as={FiCheckCircle} w={16} h={16} color="green.500" />
              
              <VStack spacing={3} textAlign="center">
                <Heading size="xl">Payment Successful!</Heading>
                <Text fontSize="lg" color="gray.600">
                  Your satellite maps subscription is now active
                </Text>
              </VStack>

              {isVerifying ? (
                <Text color="gray.500">Verifying your subscription...</Text>
              ) : (
                <VStack spacing={4} w="full">
                  <Text textAlign="center" fontSize="sm" color="gray.600">
                    You now have access to high-resolution satellite imagery in the Grid app.
                    Your subscription will automatically renew unless cancelled.
                  </Text>

                  <VStack spacing={3} w="full">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => router.push('/manage')}
                      w="full"
                    >
                      Manage Subscription
                    </Button>
                  </VStack>

                  <Text fontSize="xs" color="gray.500" textAlign="center" mt={4}>
                    Need help? Contact contact@mygrid.app
                  </Text>
                </VStack>
              )}
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<Container maxW="2xl" py={20}><Text>Loading...</Text></Container>}>
      <SuccessContent />
    </Suspense>
  );
}