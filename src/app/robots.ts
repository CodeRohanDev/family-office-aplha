import { MetadataRoute } from 'next'

// Force static generation for robots when using "output: export"
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: 'https://familyofficealpha.io/sitemap.xml',
  }
}