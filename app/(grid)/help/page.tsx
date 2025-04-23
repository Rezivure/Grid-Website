'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Flex,
  UnorderedList,
  OrderedList,
  ListItem,
  Link,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import {
  FiShield,
  FiUsers,
  FiTarget,
  FiMessageCircle,
  FiGithub,
  FiGlobe,
} from 'react-icons/fi'
import { FallInPlace } from '#components/motion/fall-in-place'

const HelpItem = ({ icon, title, children }) => (
  <FallInPlace>
    <Flex gap={4} mb={10} width="100%" align="flex-start">
      <Box w={10} h={10} display="flex" alignItems="center" justifyContent="center">
        <Icon as={icon} boxSize={6} color="green.400" />
      </Box>
      <Box flex={1}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Stack spacing={4}>{children}</Stack>
      </Box>
    </Flex>
  </FallInPlace>
)

export default function Help() {
  const bg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box bg={bg} minH="100vh" py={{ base: 20, lg: 32 }}>
      <Container maxW="container.lg">
        <FallInPlace>
          <Box mb={12}>
          <Heading
          as="h1"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="extrabold"
          lineHeight="1.1"
          mb={4}
        >
          How can we help?
        </Heading>


            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }}>
              We're a new app and growing quickly, thanks to feedback from users like you.
              Here's how to get support and learn more about Grid.
            </Text>
          </Box>
        </FallInPlace>

        <VStack spacing={12} align="stretch">
          <HelpItem icon={FiShield} title="Self Hosting">
            <Text>
              While Grid works out of the box using our secure servers and SMS verification,
              you can also self-host! Check out our{' '}
              <Link href="https://docs.mygrid.app" color="blue.500" fontWeight="medium">documentation</Link>{' '}
              or visit our{' '}
              <Link href="https://github.com/rezivure/grid-mobile" color="blue.500" fontWeight="medium">GitHub repository</Link>
              .
            </Text>
          </HelpItem>

          <HelpItem icon={FiMessageCircle} title="Community Support">
            <Text>
              Join our community for discussions, updates, and peer support:
            </Text>
            <UnorderedList spacing={2} pl={4} mt={2}>
              <ListItem>
                Real-time help in our{' '}
                <Link href="https://matrix.to/#/#grid:matrix.org" color="blue.500" fontWeight="medium">
                  Matrix channel
                </Link>
              </ListItem>
              <ListItem>
                Browse our{' '}
                <Link href="https://docs.mygrid.app" color="blue.500" fontWeight="medium">
                  documentation
                </Link>
              </ListItem>
              <ListItem>
                Open issues or request features on{' '}
                <Link href="https://github.com/rezivure/grid-mobile/issues" color="blue.500" fontWeight="medium">
                  GitHub
                </Link>
              </ListItem>
            </UnorderedList>
          </HelpItem>

          <HelpItem icon={FiTarget} title="Troubleshooting">
            <Text>If you're running into issues, try the following steps:</Text>
            <OrderedList spacing={2} pl={4} mt={2}>
              <ListItem>
                Reach out via{' '}
                <Link href="https://www.reddit.com/user/Rezivure/" color="blue.500" fontWeight="medium">Reddit</Link>
              </ListItem>
              <ListItem>
                Ping us on{' '}
                <Link href="https://mastodon.social/@getgrid" color="blue.500" fontWeight="medium">Mastodon</Link>
              </ListItem>
              <ListItem>
                Contact us on{' '}
                <Link href="https://bsky.app/profile/getgrid.bsky.social" color="blue.500" fontWeight="medium">Bluesky</Link>
              </ListItem>
              <ListItem>Check our documentation for common solutions</ListItem>
              <ListItem>Search open GitHub issues</ListItem>
              <ListItem>Ask for help in our Matrix channel</ListItem>
              <ListItem>Create a new GitHub issue with details</ListItem>
            </OrderedList>
          </HelpItem>
        </VStack>

        <FallInPlace delay={0.2}>
          <Box mt={16} p={6} bg="gray.700" _dark={{ bg: 'gray.800' }} borderRadius="xl">
            <Text fontSize="sm" color="gray.100">
              Still stuck? Hop in our Matrix channel for the fastest help—we’re happy to support you.
            </Text>
          </Box>
        </FallInPlace>
      </Container>
    </Box>
  )
}