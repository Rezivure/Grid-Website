'use client';

import { Box, Container, Heading, VStack, Text, Button, Card, CardBody, useToast, Spinner, HStack, Badge } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';


interface SubscriptionData {
  status: 'active' | 'canceled' | 'past_due' | 'none';
  customerId?: string;
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
  plan?: string;
  autoRenew?: boolean;
}

function ManageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionData>({ status: 'none' });

  const userId = searchParams.get('userId');
  const customerId = searchParams.get('customerId');
  const expires = searchParams.get('expires');
  const type = searchParams.get('type');
  const autoRenew = searchParams.get('autoRenew');

  useEffect(() => {
    // Use the data passed from the app
    const loadSubscription = async () => {
      try {
        if (!customerId || !expires) {
          setSubscription({ status: 'none' });
          setIsLoading(false);
          return;
        }

        // Parse the expiration date
        const expirationDate = new Date(expires);
        const now = new Date();
        
        // Determine subscription status based on expiration
        let status: 'active' | 'canceled' | 'past_due' | 'none' = 'active';
        if (expirationDate < now) {
          status = 'past_due';
        }

        // Set the subscription data from URL parameters
        setSubscription({
          status,
          customerId,
          currentPeriodEnd: expires,
          cancelAtPeriodEnd: autoRenew === 'false', // If autoRenew is false, it means it's set to cancel
          plan: type === 'satellite' ? 'Satellite Access' : type || 'Subscription',
          autoRenew: autoRenew === 'true' || autoRenew === null, // Default to true if not specified
        });
      } catch (error) {
        console.error('Error loading subscription:', error);
        toast({
          title: 'Error loading subscription',
          description: 'Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadSubscription();
  }, [userId, customerId, expires, type, autoRenew, toast]);

  const handleManageSubscription = async () => {
    if (!subscription.customerId) {
      toast({
        title: 'No subscription found',
        description: 'Please purchase a subscription first.',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsRedirecting(true);

    try {
      const response = await fetch('/api/stripe/portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: subscription.customerId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create portal session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Portal session error:', error);
      toast({
        title: 'Error',
        description: 'Failed to open subscription management portal.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsRedirecting(false);
    }
  };

  if (isLoading) {
    return (
      <Container maxW="2xl" py={20}>
        <VStack spacing={8} align="center">
          <Spinner size="xl" />
          <Text>Loading subscription details...</Text>
        </VStack>
      </Container>
    );
  }

  const getStatusBadge = () => {
    switch (subscription.status) {
      case 'active':
        return <Badge colorScheme="green">Active</Badge>;
      case 'canceled':
        return <Badge colorScheme="yellow">Canceled</Badge>;
      case 'past_due':
        return <Badge colorScheme="red">Past Due</Badge>;
      default:
        return <Badge>No Subscription</Badge>;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="stretch">
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl">Manage Subscription</Heading>
          <Text fontSize="lg" color="gray.600">
            View and manage your satellite maps subscription
          </Text>
        </VStack>

        <Card>
          <CardBody>
            <VStack spacing={6} align="stretch">
              {subscription.status === 'none' ? (
                <>
                  <Text textAlign="center" fontSize="lg">
                    You don&apos;t have an active subscription yet.
                  </Text>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    onClick={() => router.push('/checkout')}
                    w="full"
                  >
                    Subscribe Now
                  </Button>
                </>
              ) : (
                <>
                  <VStack spacing={4} align="stretch">
                    <HStack justify="space-between">
                      <Text fontWeight="semibold">Status:</Text>
                      {getStatusBadge()}
                    </HStack>
                    
                    {subscription.plan && (
                      <HStack justify="space-between">
                        <Text fontWeight="semibold">Plan:</Text>
                        <Text>{subscription.plan}</Text>
                      </HStack>
                    )}
                    
                    {subscription.currentPeriodEnd && (
                      <HStack justify="space-between">
                        <Text fontWeight="semibold">
                          {subscription.autoRenew ? 'Auto-renews on:' : 'Expires on:'}
                        </Text>
                        <Text>{formatDate(subscription.currentPeriodEnd)}</Text>
                      </HStack>
                    )}
                    
                    {!subscription.autoRenew && (
                      <Text fontSize="sm" color="orange.600">
                        Your subscription will not renew after the current period.
                      </Text>
                    )}
                  </VStack>

                  <Button
                    size="lg"
                    colorScheme="blue"
                    variant="outline"
                    onClick={handleManageSubscription}
                    isLoading={isRedirecting}
                    loadingText="Redirecting..."
                    w="full"
                  >
                    Manage in Stripe Portal
                  </Button>

                  <Text fontSize="xs" color="gray.500" textAlign="center">
                    Update payment method, download invoices, or cancel your subscription
                  </Text>
                </>
              )}
            </VStack>
          </CardBody>
        </Card>

        <Card variant="outline">
          <CardBody>
            <VStack spacing={3} align="stretch">
              <Text fontWeight="semibold">Need Help?</Text>
              <Text fontSize="sm" color="gray.600">
                If you&apos;re having issues with your subscription or billing, please contact our support team at contact@mygrid.app
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}

export default function ManagePage() {
  return (
    <Suspense fallback={<Container maxW="2xl" py={20}><Spinner size="xl" /></Container>}>
      <ManageContent />
    </Suspense>
  );
}