import { Shield, TrendingUp, Users, Lock, BarChart3, FileText, Zap, Globe, Award, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Initial meeting with Christopher Hetner (Former Senior Cybersecurity Advisor to the SEC Chair, Former US Treasury Senior Cyber Advisor & G-7 Cyber Expert).',
      features: ['Walkthrough diagnostic questionnaire', 'SEC cybersecurity regulations compliance', 'Results discussion and next steps', 'Expert consultation']
    },
    {
      icon: Lock,
      title: 'Cybersecurity Strengthening',
      description: 'Based on CIS Controls Framework with comprehensive monitoring and protection solutions.',
      features: ['Endpoint monitoring (mouse movements, location data)', '24/7 monitoring', 'Basic firewall monitoring', 'Network context analysis']
    },
    {
      icon: FileText,
      title: 'Accounting and Bill Pay',
      description: 'Professional accounting services and bill payment management to streamline your administrative tasks.',
      features: ['Monthly accounting', 'Bill payment services', 'Financial reporting', 'Expense management']
    },
    {
      icon: Users,
      title: 'Vendor Selection',
      description: 'Expert guidance in selecting and managing vendors for your family office operations.',
      features: ['Vendor evaluation', 'Due diligence', 'Contract negotiation', 'Performance monitoring']
    },
    {
      icon: BarChart3,
      title: 'Technology Implementation',
      description: 'Strategic technology solutions and implementation for modern family office operations.',
      features: ['Technology assessment', 'System integration', 'Digital transformation', 'Training and support']
    },
    {
      icon: TrendingUp,
      title: 'Custom Reporting',
      description: 'Tailored reporting solutions to provide insights into your family office performance and security.',
      features: ['Custom dashboards', 'Performance analytics', 'Security reports', 'Compliance documentation']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-offWhite max-w-3xl mx-auto">
              Comprehensive solutions designed to protect, grow, and manage your family's wealth 
              with the highest standards of security and professionalism
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gold/10 p-4 rounded-xl group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="text-gold" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl font-semibold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-charcoal mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-charcoal">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Cybersecurity Service Packages</h2>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with family offices and RIAs to identify the right cybersecurity package for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Package */}
            <div className="bg-offWhite p-8 rounded-xl border-2 border-gold/20 hover:border-gold/40 transition-colors duration-300">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-2">Basic Package</h3>
                <p className="text-charcoal/70">Essential cybersecurity protection</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Endpoint agent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">24/7 monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Basic firewall monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Enhanced identity and access management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Access certifications and reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">Customized incident response plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-charcoal">vCISO (Virtual Chief Information Security Officer)</span>
                </li>
              </ul>
              
              <a
                href="/contact"
                className="block w-full bg-gold text-navy text-center px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300"
              >
                Get Basic Package
              </a>
            </div>

            {/* Comprehensive Package */}
            <div className="bg-navy p-8 rounded-xl border-2 border-navy relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Comprehensive Package</h3>
                <p className="text-offWhite/80">Complete cybersecurity solution</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white font-medium">All Basic Package features</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white">Privileged identity management</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white">Incident response management</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white">Penetration Testing</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white">Threat hunting</span>
                </li>
              </ul>
              
              <a
                href="/contact"
                className="block w-full bg-gold text-navy text-center px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
              >
                Get Comprehensive Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Why Choose Family Office Alpha</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Shield className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Expert Leadership</h3>
              <p className="text-charcoal">
                Led by former SEC and Treasury cybersecurity advisors with decades of experience.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Clock className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">24/7 Protection</h3>
              <p className="text-charcoal">
                Round-the-clock monitoring and support to ensure your assets are always protected.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Award className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Proven Results</h3>
              <p className="text-charcoal">
                Trusted by family offices and RIAs with a track record of zero security breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Family's Future?
          </h2>
          <p className="text-xl text-offWhite mb-8 max-w-2xl mx-auto">
            Contact us today for a confidential consultation and discover how we can protect and grow your wealth.
          </p>
          <a
            href="/contact"
            className="bg-gold text-navy px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all duration-300 inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}