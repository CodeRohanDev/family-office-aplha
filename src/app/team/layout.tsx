import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Team - Expert Leadership in Family Office & Cybersecurity',
  description: 'Meet the experienced professionals at Family Office Alpha. Our team includes former SEC advisors, wealth management experts, and cybersecurity specialists dedicated to protecting your family\'s wealth.',
  keywords: [
    'family office team',
    'wealth management experts',
    'cybersecurity professionals',
    'Julia Valentine CEO',
    'Tracy McWilliams',
    'Isabella Kennedy',
    'financial advisory team',
    'SEC advisors',
    'wealth management leadership'
  ],
  canonical: '/team'
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}