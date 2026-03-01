import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cobiz.be'

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/diensten', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/workshop-stuurcijfers', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/groeirapport', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/opleidingstraject', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gezondheidscheck', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/over-ons', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/inzichten', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gratis-gesprek', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
