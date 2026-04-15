import { MetadataRoute } from 'next'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: APP_URL!,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]

  return [...staticPages]
}
