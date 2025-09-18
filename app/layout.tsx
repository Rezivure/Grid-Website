import { ColorModeScript, theme } from '@chakra-ui/react'
import { Provider } from './provider'
import { seoConfig } from '#data/seo-config'
import { StructuredData } from '#components/seo/structured-data'

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = 'dark';

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicons/favicon.ico"
        />
        <link rel="canonical" href={seoConfig.site.url} />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Grid" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Grid" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              seoConfig.structuredData.organization,
              seoConfig.structuredData.webApplication,
              seoConfig.structuredData.softwareApplication,
            ]),
          }}
        />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}