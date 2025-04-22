import React, { useState } from 'react';
import { Box, HStack, Text, IconButton, Heading } from '@chakra-ui/react';
import { FiLock, FiMap, FiUsers } from 'react-icons/fi';

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState('encryption');

  const features = {
    encryption: {
      title: 'End-to-end Encryption',
      description:
        'Your location data is encrypted on your device before it’s sent — ensuring that only you and the people you choose can access it. No one else, not even Grid, can see your location. We use the Matrix protocol, designed for secure, decentralized communication, so your data stays private every step of the way.',
    },
    map: {
      title: 'Private Maps',
      description:
        'Grid uses self-hosted Protomaps to serve map tiles privately, without third-party tracking or logging. Unlike other apps that rely on Google or Apple Maps — which may log every tile you view — our maps are delivered from our own infrastructure. Your browsing stays private.',
    },
    groups: {
      title: 'Custom Groups',
      description:
        'Create private groups to share your location on your terms. Whether it’s a temporary group for a weekend ride or a permanent one for your family, you’re in full control. Set custom schedules, share for just a few hours or indefinitely, and manage it all without paywalls or restrictions.',
    },
  }
  
  
  

  return (
    <Box mt={{ base: 10, lg: 0 }} position="relative" zIndex={2} paddingTop={0}>
      <Box textAlign="center" mb={8}>
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          mb={4}
        >
          Why Grid?
        </Heading>
        Explore below to see why Grid is a secure, trusted, and powerful way to share.


      </Box>

      <Box maxW="container.md" mx="auto">
        <HStack spacing={8} justify="center" mb={8}>
          <IconButton
            aria-label="Encryption"
            icon={<FiLock size={24} />}
            size="lg"
            variant={selectedFeature === 'encryption' ? 'solid' : 'ghost'}
            colorScheme="green"
            onClick={() => setSelectedFeature('encryption')}
            p={8}
          />
          <IconButton
            aria-label="Private Maps"
            icon={<FiMap size={24} />}
            size="lg"
            variant={selectedFeature === 'map' ? 'solid' : 'ghost'}
            colorScheme="green"
            onClick={() => setSelectedFeature('map')}
            p={8}
          />
          <IconButton
            aria-label="Groups"
            icon={<FiUsers size={24} />}
            size="lg"
            variant={selectedFeature === 'groups' ? 'solid' : 'ghost'}
            colorScheme="green"
            onClick={() => setSelectedFeature('groups')}
            p={8}
          />
        </HStack>

        <Box 
          textAlign="center" 
          px={4}
          height="120px" 
          display="flex" 
          flexDirection="column" 
          justifyContent="flex-start"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            mb={4}
            style={{
              opacity: 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            {features[selectedFeature].title}
          </Text>
          <Text
            fontSize="lg"
            color="gray.300"
            style={{
              opacity: 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            {features[selectedFeature].description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection;