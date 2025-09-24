import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Get Expert Family Office & Cybersecurity Consultation',
  description: 'Contact Family Office Alpha for confidential consultation on wealth management, cybersecurity, and family office services. Schedule your consultation with our expert team today.',
  keywords: [
    'contact family office',
    'cybersecurity consultation',
    'wealth management contact',
    'family office consultation',
    'financial security advice',
    'expert consultation',
    'schedule consultation',
    'family office services contact'
  ],
  canonical: '/contact'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}