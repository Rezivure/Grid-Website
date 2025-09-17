import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/deleteaccount', '/_next/', '/static/js/', '/static/css/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://mygrid.app/sitemap.xml',
  }
}