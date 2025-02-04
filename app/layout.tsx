import { ColorModeScript, theme } from '@chakra-ui/react'
import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = 'dark';

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicons/favicon.ico"
        />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}