import Hero from '@/components/Hero';
import ServicePreview from '@/components/ServicePreview';
import HomePerformanceChart from '@/components/HomePerformanceChart';
import HomeSecurityVisualization from '@/components/HomeSecurityVisualization';
import AnalyticsButton from '@/components/AnalyticsButton';
import AboutPreview from '@/components/AboutPreview';
import IsabellaProfile from '@/components/IsabellaProfile';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      <Hero />
      <ServicePreview />
      
      {/* Performance & Security Charts */}
      <section className="py-16 sm:py-20 lg:py-24 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
            <HomePerformanceChart />
            <HomeSecurityVisualization />
          </div>
          
          {/* View More Analytics Button */}
          <AnalyticsButton />
        </div>
      </section>
      
      <AboutPreview />
      <IsabellaProfile />
      <Testimonials />
    </div>
  );
}