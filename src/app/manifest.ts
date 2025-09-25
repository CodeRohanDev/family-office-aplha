import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Family Office Alpha - Professional Family Office & Cybersecurity Advisory',
    short_name: 'Family Office Alpha',
    description: 'Expert family office and cybersecurity advisory services for high-net-worth families and institutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a2e',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['finance', 'business', 'security'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}