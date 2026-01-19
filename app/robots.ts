import { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og/'],
        disallow: ['/_next/', '*.json']
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/'
      },
      {
        userAgent: 'Twitterbot',
        allow: ['/api/og/', '/']
      }
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
    host: APP_URL
  };
}
