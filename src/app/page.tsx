import Hero from '@/components/Hero';
import ServicePreview from '@/components/ServicePreview';
import AboutPreview from '@/components/AboutPreview';
import IsabellaProfile from '@/components/IsabellaProfile';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      <Hero />
      <ServicePreview />
      <AboutPreview />
      <IsabellaProfile />
      <Testimonials />
    </div>
  );
}