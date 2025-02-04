import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

const colors = {
  primary: {
    50: '#E6F7F3',
    100: '#B3E8DE',
    200: '#80D9C9',
    300: '#4DCAB4',
    400: '#1ABB9F',
    500: '#00DBA4', // Your Caribbean Green
    600: '#00AF83',
    700: '#008362',
    800: '#005742',
    900: '#002C21',
  },
  teal: {
    50: '#E6EDED',
    100: '#B3CECE',
    200: '#80AFAF',
    300: '#4D9090',
    400: '#267373', // Your Oracle color
    500: '#1A7171',
    600: '#135B5B',
    700: '#0D4444',
    800: '#062E2E',
    900: '#001717',
  },
  brand: {
    primary: '#00DBA4',
    secondary: '#267373',
  }
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
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
    semanticTokens: {
      colors: {
        'chakra-body-text': { _light: 'gray.900', _dark: 'white' },
        'chakra-body-bg': { _light: 'white', _dark: 'gray.900' },
        'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
        'chakra-placeholder-color': { _light: 'gray.500', _dark: 'whiteAlpha.400' },
      },
    },
  },
  baseTheme,
)