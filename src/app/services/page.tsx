import { Shield, TrendingUp, Users, Lock, BarChart3, FileText, Zap, Globe, Award, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Advisory',
      description: 'Comprehensive security assessments, threat analysis, and strategic cybersecurity planning tailored for family offices.',
      features: ['Security Risk Assessment', 'Incident Response Planning', 'Security Architecture Design', 'Compliance Auditing']
    },
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Strategic investment planning and portfolio management with a focus on long-term wealth preservation and growth.',
      features: ['Investment Strategy', 'Portfolio Management', 'Risk Assessment', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Family Office Setup',
      description: 'Complete family office establishment including governance structures, operational frameworks, and staff recruitment.',
      features: ['Governance Design', 'Operational Setup', 'Staff Recruitment', 'Policy Development']
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Advanced privacy solutions including digital asset protection, identity security, and confidentiality frameworks.',
      features: ['Digital Privacy', 'Identity Protection', 'Secure Communications', 'Data Encryption']
    },
    {
      icon: BarChart3,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies covering financial, operational, and reputational risks.',
      features: ['Risk Assessment', 'Mitigation Strategies', 'Insurance Planning', 'Crisis Management']
    },
    {
      icon: FileText,
      title: 'Compliance Advisory',
      description: 'Regulatory compliance guidance and governance framework implementation for complex family office structures.',
      features: ['Regulatory Compliance', 'Governance Frameworks', 'Reporting Systems', 'Audit Support']
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Why Choose Family Office Alpha</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Zap className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Innovative Solutions</h3>
              <p className="text-charcoal">
                Cutting-edge technology and methodologies to address modern family office challenges.
              </p>
            </div>
            
            <div className="text-center p-6">
              <Globe className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Global Expertise</h3>
              <p className="text-charcoal">
                International experience serving families across multiple jurisdictions and markets.
              </p>
            </div>
            
            <div className="text-center p-6">
              <Award className="text-gold mx-auto mb-4" size={64} />
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">Proven Track Record</h3>
              <p className="text-charcoal">
                15+ years of excellence with a 99.9% client satisfaction rate and zero security breaches.
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