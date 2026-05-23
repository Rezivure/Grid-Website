'use client'

import {
  Box,
  Container,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { FiCheck, FiX } from 'react-icons/fi'
import { Link } from '@saas-ui/react'

type Cell =
  | { kind: 'yes'; note?: string }
  | { kind: 'no'; note?: string }
  | { kind: 'text'; value: string }

interface Row {
  capability: string
  life360: Cell
  grid: Cell
}

const rows: Row[] = [
  {
    capability: 'End-to-end encryption',
    life360: { kind: 'no' },
    grid: { kind: 'yes', note: 'Matrix Olm / Megolm' },
  },
  {
    capability: 'Open source',
    life360: { kind: 'no' },
    grid: { kind: 'yes', note: 'MPL-2.0' },
  },
  {
    capability: 'Self-hostable',
    life360: { kind: 'no' },
    grid: { kind: 'yes', note: 'Run your own Matrix homeserver' },
  },
  {
    capability: 'Account requires phone or email',
    life360: { kind: 'yes' },
    grid: { kind: 'no', note: 'No phone, no email, no ID' },
  },
  {
    capability: 'Map data source',
    life360: { kind: 'text', value: 'Google Maps' },
    grid: { kind: 'text', value: 'Protomaps (no commercial trackers)' },
  },
  {
    capability: 'Works on GrapheneOS / de-Googled Android',
    life360: { kind: 'no', note: 'Requires Google Play Services' },
    grid: {
      kind: 'yes',
      note: 'Custom libre_location plugin — no Play Services dependency',
    },
  },
  {
    capability: 'Sells your location data',
    life360: { kind: 'yes', note: 'Per FTC settlement (2024)' },
    grid: { kind: 'no', note: 'Never — we cannot read it' },
  },
  {
    capability: 'Third-party tracking SDKs',
    life360: { kind: 'yes' },
    grid: { kind: 'no' },
  },
]

const YesIcon = () => (
  <Box
    as="span"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    w="22px"
    h="22px"
    borderRadius="full"
    bg="#1FD9A0"
    color="#0B5840"
    flexShrink={0}
    aria-label="Yes"
    role="img"
  >
    <FiCheck size={14} strokeWidth={3} />
  </Box>
)

const NoIcon = () => (
  <Box
    as="span"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    w="22px"
    h="22px"
    borderRadius="full"
    bg="rgba(255,255,255,0.06)"
    color="#5A6670"
    flexShrink={0}
    aria-label="No"
    role="img"
  >
    <FiX size={14} strokeWidth={3} />
  </Box>
)

const CellRender = ({ cell }: { cell: Cell }) => {
  if (cell.kind === 'yes') {
    return (
      <Stack direction="row" spacing={3} align="center">
        <YesIcon />
        {cell.note && (
          <Text fontSize="sm" color="#FAFAF9" fontWeight={500}>
            {cell.note}
          </Text>
        )}
        {!cell.note && (
          <Text fontSize="sm" color="#FAFAF9" fontWeight={500}>
            Yes
          </Text>
        )}
      </Stack>
    )
  }
  if (cell.kind === 'no') {
    return (
      <Stack direction="row" spacing={3} align="center">
        <NoIcon />
        {cell.note && (
          <Text fontSize="sm" color="#5A6670">
            {cell.note}
          </Text>
        )}
        {!cell.note && (
          <Text fontSize="sm" color="#5A6670">
            No
          </Text>
        )}
      </Stack>
    )
  }
  return (
    <Text fontSize="sm" color="#FAFAF9" fontWeight={500}>
      {cell.value}
    </Text>
  )
}

export default function ComparePage() {
  return (
    <Box bg="#0E1115" color="#FAFAF9" minH="100vh" pt={{ base: 24, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="container.lg" px={{ base: 6, md: 10 }}>
        <Stack spacing={{ base: 6, md: 8 }} mb={{ base: 10, md: 14 }} alignItems="flex-start">
          <Text
            as="span"
            color="#5A6670"
            fontFamily="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
            fontWeight={500}
            fontSize="12px"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            Grid vs Life360
          </Text>
          <Heading
            as="h1"
            fontFamily="'Geist', system-ui, sans-serif"
            fontWeight={700}
            lineHeight="0.95"
            letterSpacing="-0.04em"
            sx={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            <Box as="span" display="block" color="#5A6670" sx={{
              textDecoration: 'line-through',
              textDecorationColor: '#5A6670',
              textDecorationThickness: 'clamp(3px, 0.5vw, 6px)',
            }}>
              Life360.
            </Box>
            <Box as="span" display="block" color="#1FD9A0">Grid.</Box>
          </Heading>
          <Text color="#5A6670" fontSize={{ base: 'md', md: 'lg' }} maxW="640px" lineHeight="1.5">
            A straightforward comparison of how Grid and Life360 handle the
            things that matter most: encryption, identity, map data, and what
            happens to your location after it leaves your phone.
          </Text>
        </Stack>

        <TableContainer
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.08)"
          borderRadius="lg"
          bg="#191B1E"
        >
          <Table
            variant="unstyled"
            sx={{
              'th, td': {
                borderBottomWidth: '1px',
                borderBottomColor: 'rgba(255,255,255,0.06)',
                py: 4,
                px: { base: 4, md: 6 },
                verticalAlign: 'middle',
              },
              'tbody tr:last-of-type td': { borderBottomWidth: 0 },
            }}
          >
            <Thead>
              <Tr>
                <Th
                  textAlign="left"
                  color="#5A6670"
                  fontFamily="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontWeight={500}
                  fontSize="11px"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  w={{ base: '40%', md: '38%' }}
                >
                  Capability
                </Th>
                <Th
                  textAlign="left"
                  color="#5A6670"
                  fontFamily="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontWeight={500}
                  fontSize="11px"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Life360
                </Th>
                <Th
                  textAlign="left"
                  color="#1FD9A0"
                  fontFamily="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
                  fontWeight={600}
                  fontSize="11px"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Grid
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((row) => (
                <Tr key={row.capability}>
                  <Td>
                    <Text
                      color="#FAFAF9"
                      fontWeight={500}
                      fontFamily="'Geist', system-ui, sans-serif"
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      {row.capability}
                    </Text>
                  </Td>
                  <Td>
                    <CellRender cell={row.life360} />
                  </Td>
                  <Td>
                    <CellRender cell={row.grid} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Stack spacing={3} mt={{ base: 8, md: 10 }}>
          <Text
            as="span"
            color="#5A6670"
            fontFamily="'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
            fontWeight={500}
            fontSize="11px"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            Footnotes
          </Text>
          <Text fontSize="sm" color="#5A6670" lineHeight="1.6">
            Grid renders maps with{' '}
            <Link href="https://protomaps.com" color="#FAFAF9" _hover={{ color: '#1FD9A0' }}>
              Protomaps
            </Link>{' '}
            tiles served from our own infrastructure — no Google Maps, no Apple
            Maps, no commercial tile provider. Grid runs on de-Googled Android
            (including GrapheneOS) because we ship our own location plugin,{' '}
            <Link
              href="https://pub.dev/packages/libre_location"
              color="#FAFAF9"
              _hover={{ color: '#1FD9A0' }}
            >
              libre_location
            </Link>
            , which does not depend on Google Play Services. Life360&apos;s
            historical data sales are documented in the{' '}
            <Link
              href="https://www.ftc.gov/news-events/news/press-releases/2024/05/ftc-order-will-ban-x-mode-and-its-successor-outlogic-sharing-or-selling-any-sensitive-location-data"
              color="#FAFAF9"
              _hover={{ color: '#1FD9A0' }}
            >
              FTC settlement
            </Link>{' '}
            with X-Mode/Outlogic, who purchased location data from Life360.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
