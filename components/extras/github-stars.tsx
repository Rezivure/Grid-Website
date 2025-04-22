import React, { useState, useEffect } from 'react';
import { HStack, Text, Link } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';

interface GitHubStarsProps {
  repository?: string;
}

interface GitHubResponse {
  stargazers_count: number;
}

const GitHubStars: React.FC<GitHubStarsProps> = ({ 
  repository = 'rezivure/grid-mobile' 
}) => {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repository}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch stars');
        }

        const data: GitHubResponse = await response.json();
        setStars(data.stargazers_count);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub stars:', err);
        setError('Failed to load stars');
      }
    };

    fetchStars();
  }, [repository]);

  if (error || stars === null) {
    return null;
  }

  return (
    <Link 
      href={`https://github.com/${repository}`}
      isExternal
      _hover={{ textDecoration: 'none' }}
      maxW="fit-content"
      display="block"
    >
      <HStack
        bg="gray.800"
        px="3"
        py="1"
        rounded="full"
        spacing="2"
        opacity="0.9"
        _hover={{ opacity: 1 }}
        transition="all 0.2s"
        maxW="fit-content"
      >
        <FiStar color="#FFD700" />
        <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
        Open Source
        </Text>
      </HStack>
    </Link>
  );
};

export default GitHubStars;