import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Company Profile - Family Office Alpha Leadership & History',
  description: 'Learn about Family Office Alpha\'s history, leadership team, and commitment to protecting over $2B in assets for high-net-worth families. 15+ years of excellence in wealth management and cybersecurity.',
  keywords: [
    'family office company profile',
    'wealth management history',
    'cybersecurity leadership',
    'assets under protection',
    'family office experience',
    'financial security expertise',
    'company milestones',
    'wealth management track record'
  ],
  canonical: '/company-profile'
});

export default function CompanyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}