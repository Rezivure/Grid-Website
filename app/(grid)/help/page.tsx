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
} from '@chakra-ui/react'
import { 
  FiShield, 
  FiUsers, 
  FiTarget, 
  FiMessageCircle, 
  FiGithub, 
  FiGlobe 
} from 'react-icons/fi'

const HelpItem = ({ icon, title, children }) => (
  <Flex gap={4} mb={8} width="100%">
    <Box w={8} h={8} display="flex" alignItems="center" justifyContent="center">
      <Icon as={icon} boxSize={6} color="blue.500" />
    </Box>
    <Box flex={1}>
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  </Flex>
)

export default function Help() {
  return (
    <Container maxW="container.md" pt={{ base: 20, lg: 32 }} px={4}>
      <Box mb={12}>
        <Heading as="h1" size="xl" mb={4}>
          How can we help?
        </Heading>
        <Text>
          We're a new app and quickly growing, but only with feedback from users like you. 
          Here's everything you need to know about Grid and how to get support.
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        <HelpItem 
          icon={FiShield}
          title="Self Hosting"
        >
          <Text>
            While Grid works by default with our servers using SMS verification, you can self-host! 
            Check out our <Link href="https://docs.mygrid.app" color="blue.500" fontWeight="medium">documentation</Link> or 
            visit our <Link href="https://github.com/rezivure/grid-mobile" color="blue.500" fontWeight="medium">GitHub repository</Link>.
          </Text>
        </HelpItem>

        <HelpItem
          icon={FiMessageCircle}
          title="Community Support"
        >
          <VStack spacing={4} align="stretch">
            <Text>
              Join our vibrant community for support, discussions, and updates:
            </Text>
            <UnorderedList spacing={2} pl={4}>
              <ListItem>
                Join our <Link href="https://matrix.to/#/#grid:matrix.org" color="blue.500" fontWeight="medium">Matrix channel</Link> for real-time help
              </ListItem>
              <ListItem>
                Check our <Link href="https://docs.mygrid.app" color="blue.500" fontWeight="medium">documentation</Link> for guides and FAQs
              </ListItem>
              <ListItem>
                Report issues on <Link href="https://github.com/rezivure/grid-mobile/issues" color="blue.500" fontWeight="medium">GitHub</Link>
              </ListItem>
            </UnorderedList>
          </VStack>
        </HelpItem>

        <HelpItem
          icon={FiTarget}
          title="Troubleshooting"
        >
          <VStack spacing={4} align="stretch">
            <Text>If you're experiencing issues:</Text>
            <OrderedList spacing={2} pl={4}>
              <ListItem>
                Reach out on <Link href="https://www.reddit.com/user/Rezivure/" color="blue.500" fontWeight="medium">Reddit</Link>
              </ListItem>
              <ListItem>
                Reach out on <Link href="https://mastodon.social/@getgrid" color="blue.500" fontWeight="medium">Mastodon</Link>
              </ListItem>
              <ListItem>
                Reach out on <Link href="https://bsky.app/profile/getgrid.bsky.social" color="blue.500" fontWeight="medium">Bluesky</Link>
              </ListItem>
              <ListItem>Check our documentation for common solutions</ListItem>
              <ListItem>Search existing GitHub issues</ListItem>
              <ListItem>Ask in our Matrix channel</ListItem>
              <ListItem>Create a new GitHub issue with detailed information</ListItem>
            </OrderedList>
          </VStack>
        </HelpItem>
      </VStack>

      <Box mt={12} p={4} bg="gray.700" borderRadius="lg">
        <Text fontSize="sm">
          Need more help? We're always here to support you. Join our Matrix channel for the fastest response.
        </Text>
      </Box>
    </Container>
  )
}