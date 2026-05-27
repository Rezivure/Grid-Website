import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

// Brand palette derived from Mint #1FD9A0
const colors = {
  primary: {
    50: '#E8FBF4',
    100: '#C2F4E0',
    200: '#9BEDCB',
    300: '#74E5B7',
    400: '#4DDEA3',
    500: '#1FD9A0', // Mint
    600: '#19B587',
    700: '#13916B',
    800: '#0B5840', // Mint Deep
    900: '#062F22',
  },
  brand: {
    primary: '#1FD9A0',
  },
}

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors,
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: "'Geist', Inter Variable, Inter, system-ui, sans-serif",
      body: "'Geist', Inter Variable, Inter, system-ui, sans-serif",
      mono: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    },
    fontSizes,
    components,
    semanticTokens: {
      colors: {
        // Brand semantic tokens
        ink: '#0E1115',
        shell: '#191B1E',
        paper: '#FAFAF9',
        slate: '#5A6670',
        mint: '#1FD9A0',
        mintDeep: '#0B5840',
        'chakra-body-text': { _light: 'gray.900', _dark: 'white' },
        'chakra-body-bg': { _light: 'white', _dark: 'gray.900' },
        'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
        'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
      },
    },
  },
  baseTheme,
)