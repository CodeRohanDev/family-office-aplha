import Hero from '@/components/Hero';
import ServicePreview from '@/components/ServicePreview';
import MarketPerformanceChart from '@/components/MarketPerformanceChart';
import AssetAllocationChart from '@/components/AssetAllocationChart';
import AboutPreview from '@/components/AboutPreview';
import IsabellaProfile from '@/components/IsabellaProfile';
import Testimonials from '@/components/Testimonials';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Family Office & Cybersecurity Advisory Services',
  description: 'Family Office Alpha provides comprehensive wealth management, cybersecurity consulting, and strategic advisory services for high-net-worth families and institutions. Expert guidance for your financial security.',
  keywords: [
    'family office services',
    'wealth management',
    'cybersecurity advisory',
    'high net worth families',
    'financial security',
    'investment management',
    'risk assessment',
    'private wealth advisory'
  ],
  canonical: '/'
});

export default function Home() {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      <Hero />
      <ServicePreview />
      
      {/* Market Analytics Section */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <MarketPerformanceChart />
            <AssetAllocationChart />
          </div>
          
          {/* View More Analytics Button */}
          <div className="text-center">
            <a
              href="/company-profile#market-analytics"
              className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-charcoal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View Detailed Market Analytics</span>
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                />
              </svg>
            </a>
            <p className="text-sm text-charcoal/60 mt-3">
              Explore comprehensive market trends, risk analysis, and growth metrics
            </p>
          </div>
        </div>
      </section>
      
      <AboutPreview />
      <IsabellaProfile />
      <Testimonials />
    </div>
  );
}