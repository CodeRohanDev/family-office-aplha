import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Activities & Events - Family Office Alpha Insights & Webinars',
  description: 'Stay updated with Family Office Alpha\'s latest activities, webinars, and industry events. Access expert insights on cybersecurity, wealth management, and family office best practices.',
  keywords: [
    'family office events',
    'cybersecurity webinars',
    'wealth management insights',
    'industry activities',
    'financial security events',
    'family office education',
    'expert presentations',
    'thought leadership'
  ],
  canonical: '/activities'
});

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}