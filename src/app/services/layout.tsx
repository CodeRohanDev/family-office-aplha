import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cybersecurity & Family Office Services',
  description: 'Comprehensive cybersecurity assessment, wealth management, and advisory services for family offices. Expert consultation with former SEC and Treasury cybersecurity advisors.',
  keywords: [
    'cybersecurity assessment',
    'family office services',
    'SEC cybersecurity compliance',
    'wealth management security',
    'Christopher Hetner',
    'cybersecurity consulting',
    'endpoint monitoring',
    'threat detection',
    'financial security services'
  ],
  canonical: '/services'
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}