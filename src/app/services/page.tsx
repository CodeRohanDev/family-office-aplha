'use client';

import { Shield, TrendingUp, Users, Lock, BarChart3, FileText, Zap, Globe, Award, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment with Christopher Hetner',
      description: 'Advisory consultation with Christopher Hetner, former Senior Cybersecurity Advisor to the SEC Chair, Former US Treasury Senior Cyber Advisor & G-7 Cyber Expert. Two-stage consultation process designed specifically for family offices.',
      features: ['Initial meeting with Christopher Hetner', 'Comprehensive diagnostic questionnaire walkthrough', 'SEC cybersecurity regulations compliance assessment', 'Second meeting to discuss results and strategic next steps']
    },
    {
      icon: Lock,
      title: 'Cybersecurity Strengthening',
      description: 'Comprehensive security solutions based on CIS Controls Framework with advanced monitoring capabilities and endpoint protection.',
      features: ['Endpoint agent monitoring (user activity, mouse movements, location data, alerts)', '24/7 continuous monitoring and threat detection', 'Advanced firewall monitoring and network security', 'Real-time network context analysis and threat intelligence']
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
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              Our Services
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-offWhite max-w-3xl mx-auto px-4 leading-relaxed">
              Comprehensive solutions designed to protect, grow, and manage your family's wealth 
              with the highest standards of security and professionalism
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-gold/10 p-3 sm:p-4 rounded-xl group-hover:bg-gold/20 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="text-gold" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-charcoal mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-charcoal text-sm sm:text-base">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Christopher Hetner Expertise */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">Expert Leadership in Cybersecurity</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6 sm:mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/20"
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gold mb-4 sm:mb-6">Christopher Hetner</h3>
                <p className="text-base sm:text-lg text-offWhite mb-4 sm:mb-6 leading-relaxed">
                  Former Senior Cybersecurity Advisor to the SEC Chair, Former US Treasury Senior Cyber Advisor & G-7 Cyber Expert
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-offWhite text-sm sm:text-base">SEC Chair Senior Cybersecurity Advisory experience</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-offWhite text-sm sm:text-base">US Treasury Senior Cyber Advisor background</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-offWhite text-sm sm:text-base">G-7 Cyber Expert with international experience</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gold/10 p-6 sm:p-8 rounded-xl">
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-gold mb-3 sm:mb-4">Two-Stage Consultation Process</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gold text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                    <div className="min-w-0">
                      <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Initial Assessment Meeting</h5>
                      <p className="text-offWhite/80 text-xs sm:text-sm leading-relaxed">Comprehensive diagnostic questionnaire walkthrough to determine compliance with SEC cybersecurity regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gold text-navy w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                    <div className="min-w-0">
                      <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">Strategic Planning Session</h5>
                      <p className="text-offWhite/80 text-xs sm:text-sm leading-relaxed">Results discussion and development of customized cybersecurity roadmap and next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Cybersecurity Service Packages</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
              We work with family offices and RIAs to identify the right cybersecurity package for your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-offWhite p-6 sm:p-8 rounded-xl border-2 border-gold/20 hover:border-gold/40 transition-colors duration-300"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">Basic Package</h3>
                <p className="text-charcoal/70 text-sm sm:text-base">Essential cybersecurity protection</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Endpoint Agent</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Monitoring user activity with alerts and comprehensive tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">24/7 Monitoring</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Continuous threat detection and security monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Basic Firewall Monitoring</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Network security and traffic analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Advanced Analytics & Reporting</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Comprehensive security metrics and insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Identity & Access Management</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Enhanced user authentication and access controls</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Access Certifications & Reviews</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Regular access audits and compliance verification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">Customized Incident Response Plan</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Tailored emergency response procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-charcoal font-medium text-sm sm:text-base">vCISO Services</span>
                    <p className="text-charcoal/70 text-xs sm:text-sm">Virtual Chief Information Security Officer guidance</p>
                  </div>
                </li>
              </ul>
              
              <a
                href="/contact"
                className="block w-full bg-gold text-navy text-center px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Get Basic Package
              </a>
            </motion.div>

            {/* Comprehensive Package */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-navy p-6 sm:p-8 rounded-xl border-2 border-navy relative overflow-hidden"
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gold text-navy px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Most Popular
              </div>
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2">Comprehensive Package</h3>
                <p className="text-offWhite/80 text-sm sm:text-base">Complete cybersecurity solution</p>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <span className="text-white font-medium text-sm sm:text-base">All Basic Package Features Included</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">Privileged Identity Management</span>
                    <p className="text-offWhite/70 text-xs sm:text-sm">Advanced access controls for high-privilege accounts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">Incident Response Management</span>
                    <p className="text-offWhite/70 text-xs sm:text-sm">Professional incident handling and recovery services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">Penetration Testing</span>
                    <p className="text-offWhite/70 text-xs sm:text-sm">Regular security assessments and vulnerability testing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="text-gold mr-2 sm:mr-3 mt-1 flex-shrink-0" size={14} />
                  <div className="min-w-0">
                    <span className="text-white font-medium text-sm sm:text-base">Threat Hunting</span>
                    <p className="text-offWhite/70 text-xs sm:text-sm">Proactive threat detection and advanced persistent threat analysis</p>
                  </div>
                </li>
              </ul>
              
              <a
                href="/contact"
                className="block w-full bg-gold text-navy text-center px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 text-sm sm:text-base"
              >
                Get Comprehensive Package
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Cybersecurity Insights & Philosophy</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <h3 className="font-playfair text-xl sm:nt-bold text-navy mb-6">The ROI of Cybersecurity</h3>
              <blockquote className="text-lg text-charcoal/80 mb-6 italic leading-relaxed">
                "Cybersecurity ROI is about preventing business from grinding to a halt. It's not just about protecting data—it's about ensuring business continuity and maintaining trust."
              </blockquote>
              <p className="text-charcoal/70 leading-relaxed">
                Our approach focuses on comprehensive risk mitigation that protects both your financial assets and your family's reputation. 
                We understand that for family offices, a security breach isn't just a technical issue—it's a threat to generational wealth and privacy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-navy p-8 rounded-xl text-white"
            >
              <h3 className="font-playfair text-2xl font-bold text-gold mb-6">Next-Generation Wealth Transfer</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-playfair font-bold text-gold mb-2">$72 Trillion</div>
                <p className="text-offWhite/80">Expected wealth transfer over the next 25 years</p>
              </div>
              <p className="text-offWhite leading-relaxed">
                As the largest wealth transfer in history approaches, cybersecurity becomes critical for protecting family legacies. 
                Our solutions ensure your wealth transition is secure, compliant, and protected from emerging digital threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Why Choose Family Office Alpha</h2>
            <div className="section-divider mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expert Leadership",
                description: "Led by former SEC and Treasury cybersecurity advisors with decades of experience."
              },
              {
                icon: Clock,
                title: "24/7 Protection",
                description: "Round-the-clock monitoring and support to ensure your assets are always protected."
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Trusted by family offices and RIAs with a track record of zero security breaches."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <item.icon className="text-gold mx-auto mb-4" size={64} />
                <h3 className="font-playfair text-xl font-semibold text-navy mb-4">{item.title}</h3>
                <p className="text-charcoal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}