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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/favicons/favicon.ico"
        />
        <link rel="icon" type="image/svg+xml" href="/static/brand/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/brand/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/brand/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/static/brand/favicon-512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/brand/grid-app-icon-1024.png"
        />
        <link rel="canonical" href={seoConfig.site.url} />
        <meta name="theme-color" content="#0E1115" />
        <meta name="application-name" content="Grid" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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