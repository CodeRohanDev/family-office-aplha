import Hero from '@/components/Hero';
import ServicePreview from '@/components/ServicePreview';
import AboutPreview from '@/components/AboutPreview';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <ServicePreview />
      <AboutPreview />
    </div>
  );
}