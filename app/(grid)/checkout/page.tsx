'use client';

import { Button } from '@chakra-ui/react';
import { Box, Container, Heading, VStack, Text, Card, CardBody, HStack, useToast, Radio, RadioGroup, Stack, Divider } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PricingOption {
  id: string;
  name: string;
  price: string;
  interval: string;
  priceId: string;
  savings?: string;
}

const pricingOptions: PricingOption[] = [
  {
    id: 'monthly',
    name: 'Monthly Satellite Access',
    price: '$4.99',
    interval: 'month',
    priceId: process.env.NEXT_PUBLIC_STRIPE_SATELLITE_MONTHLY_PRICE_ID!,
  },
  {
    id: 'annual',
    name: 'Annual Satellite Access',
    price: '$49.99',
    interval: 'year',
    priceId: process.env.NEXT_PUBLIC_STRIPE_SATELLITE_ANNUAL_PRICE_ID!,
    savings: 'Save $10',
  },
];

function CheckoutContent() {
  const [selectedPriceId, setSelectedPriceId] = useState(pricingOptions[0].priceId);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const toast = useToast();

  const userId = searchParams.get('userId');
  const phoneNumber = searchParams.get('phone');

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: selectedPriceId,
          userId,
          phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId, url } = await response.json();

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        // Fallback to embedded checkout
        const stripe = await stripePromise;
        if (!stripe) {
          throw new Error('Stripe failed to load');
        }

        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          throw error;
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout failed',
        description: 'There was an error processing your request. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  // Check if user is logged in
  if (!userId) {
    return (
      <Container maxW="2xl" py={20}>
        <Card>
          <CardBody>
            <VStack spacing={6} align="center" py={8}>
              <Heading size="xl">Please Login First</Heading>
              <Text fontSize="lg" color="gray.600" textAlign="center">
                To subscribe to satellite maps, please login to your account in the Grid app first.
              </Text>
              <Text fontSize="md" color="gray.500">
                Open the Grid app and navigate to the subscription section while logged in.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxW="2xl" py={20}>
      <VStack spacing={8} align="stretch">
        <VStack spacing={4} textAlign="center">
          <Text fontSize="lg" color="gray.600">
            Welcome, {userId}
          </Text>
          <Heading size="2xl">Unlock Satellite Maps</Heading>
          <Text fontSize="lg" color="gray.600">
            Get high-resolution satellite imagery for enhanced navigation
          </Text>
        </VStack>

        <Card>
          <CardBody>
            <VStack spacing={6} align="stretch">
              <Text fontWeight="semibold" fontSize="lg">
                Choose your plan:
              </Text>
              
              <RadioGroup value={selectedPriceId} onChange={setSelectedPriceId}>
                <Stack spacing={4}>
                  {pricingOptions.map((option) => (
                    <Card
                      key={option.id}
                      variant="outline"
                      cursor="pointer"
                      onClick={() => setSelectedPriceId(option.priceId)}
                      borderColor={selectedPriceId === option.priceId ? 'blue.500' : 'gray.200'}
                      borderWidth={selectedPriceId === option.priceId ? 2 : 1}
                    >
                      <CardBody>
                        <HStack justify="space-between" align="start">
                          <Radio value={option.priceId} colorScheme="blue">
                            <VStack align="start" spacing={1} ml={2}>
                              <Text fontWeight="semibold">{option.name}</Text>
                              <HStack spacing={2}>
                                <Text fontSize="2xl" fontWeight="bold">
                                  {option.price}
                                </Text>
                                <Text color="gray.600">/{option.interval}</Text>
                              </HStack>
                              {option.savings && (
                                <Text color="green.600" fontSize="sm" fontWeight="medium">
                                  {option.savings}
                                </Text>
                              )}
                            </VStack>
                          </Radio>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}
                </Stack>
              </RadioGroup>

              <Divider />

              <VStack spacing={3} align="stretch">
                <Text fontSize="sm" color="gray.600">
                  ✓ High-resolution satellite imagery
                </Text>
                <Text fontSize="sm" color="gray.600">
                  ✓ Secured through Cloudflare
                </Text>
                <Text fontSize="sm" color="gray.600">
                  ✓ Priority support
                </Text>
                <Text fontSize="sm" color="gray.600">
                  ✓ Cancel anytime
                </Text>
              </VStack>

              <Button
                size="lg"
                colorScheme="blue"
                onClick={handleCheckout}
                isLoading={isLoading}
                loadingText="Processing..."
                width="full"
              >
                Subscribe Now
              </Button>

              <Text fontSize="xs" color="gray.500" textAlign="center">
                Secure payment powered by Stripe. Your payment information is never stored on our servers.
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}