import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  structuredData?: object
}

const defaultMetadata = {
  siteName: 'Family Office Alpha',
  domain: 'familyofficealpha.io',
  defaultTitle: 'Family Office Alpha - Professional Family Office & Cybersecurity Advisory',
  defaultDescription: 'Expert family office and cybersecurity advisory services for high-net-worth families and institutions. Comprehensive wealth management, security consulting, and strategic advisory solutions.',
  defaultKeywords: [
    'family office',
    'cybersecurity',
    'advisory services',
    'wealth management',
    'security consulting',
    'high net worth',
    'financial advisory',
    'risk management',
    'investment advisory',
    'private wealth'
  ],
  defaultImage: '/logo.png'
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  noIndex = false,
  structuredData
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${defaultMetadata.siteName}`
    : defaultMetadata.defaultTitle

  const metaDescription = description || defaultMetadata.defaultDescription
  
  const allKeywords = [
    ...defaultMetadata.defaultKeywords,
    ...keywords
  ].join(', ')

  const canonicalUrl = canonical 
    ? `https://${defaultMetadata.domain}${canonical}`
    : undefined

  const imageUrl = ogImage || defaultMetadata.defaultImage
  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://${defaultMetadata.domain}${imageUrl}`

  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: 'Family Office Alpha' }],
    creator: 'Family Office Alpha',
    publisher: 'Family Office Alpha',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(`https://${defaultMetadata.domain}`),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: defaultMetadata.siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [fullImageUrl],
      creator: '@familyofficealpha',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }

  return metadata
}

export function generateStructuredData(type: string, data: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }

  return JSON.stringify(baseData)
}

// Common structured data templates
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Family Office Alpha',
  url: 'https://familyofficealpha.io',
  logo: 'https://familyofficealpha.io/logo.png',
  description: 'Professional family office and cybersecurity advisory services for high-net-worth families and institutions.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://linkedin.com/company/family-office-alpha',
    'https://twitter.com/familyofficealpha'
  ]
}

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Family Office Alpha',
  url: 'https://familyofficealpha.io',
  description: 'Professional family office and cybersecurity advisory services',
  publisher: {
    '@type': 'Organization',
    name: 'Family Office Alpha'
  }
}