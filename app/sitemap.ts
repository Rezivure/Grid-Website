import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mygrid.app'
  
  const routes = [
    '',
    '/about',
    '/privacy', 
    '/terms',
    '/feedback',
    '/donate',
    '/report',
  ]

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFreq: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/about' ? 0.9 : 0.7,
  }))

  return sitemap
}