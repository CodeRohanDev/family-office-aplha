import { organizationStructuredData, websiteStructuredData } from '@/lib/seo';

interface SchemaMarkupProps {
  type?: 'organization' | 'website' | 'service' | 'person' | 'breadcrumb';
  data?: any;
}

export default function SchemaMarkup({ type = 'organization', data }: SchemaMarkupProps) {
  const getSchemaData = () => {
    switch (type) {
      case 'organization':
        return organizationStructuredData;
      case 'website':
        return websiteStructuredData;
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Family Office Advisory Services',
          provider: {
            '@type': 'Organization',
            name: 'Family Office Alpha',
            url: 'https://familyofficealpha.io'
          },
          serviceType: 'Financial Advisory',
          description: 'Comprehensive family office and cybersecurity advisory services',
          areaServed: 'United States',
          ...data
        };
      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          ...data
        };
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data
        };
      default:
        return organizationStructuredData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaData()),
      }}
    />
  );
}

// Breadcrumb schema helper
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://familyofficealpha.io${item.url}`
  }));
};

// Service schema helper
export const generateServiceSchema = (serviceName: string, description: string, price?: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Family Office Alpha',
      url: 'https://familyofficealpha.io'
    },
    serviceType: 'Financial Advisory',
    areaServed: 'United States',
    ...(price && { offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'USD'
    }})
  };
};

// Person schema helper
export const generatePersonSchema = (name: string, jobTitle: string, description: string, image?: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    worksFor: {
      '@type': 'Organization',
      name: 'Family Office Alpha',
      url: 'https://familyofficealpha.io'
    },
    ...(image && { image: image })
  };
};