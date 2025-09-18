'use client';

import Link from 'next/link';
import { Shield, TrendingUp, Users, Lock, BarChart3, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicePreview = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Advisory consultation with Christopher Hetner, former Senior Cybersecurity Advisor to the SEC Chair, US Treasury Senior Cyber Advisor & G-7 Cyber Expert.',
      features: ['Christopher Hetner consultation', 'Two-stage assessment process', 'SEC compliance review'],
      highlight: 'Expert Led'
    },
    {
      icon: Lock,
      title: 'Cybersecurity Strengthening',
      description: 'Comprehensive security solutions based on CIS Controls Framework with advanced monitoring, vCISO services, and threat hunting capabilities.',
      features: ['vCISO services', 'Penetration testing', 'Threat hunting'],
      highlight: null
    },
    {
      icon: FileText,
      title: 'Family Office Operations',
      description: 'Professional accounting, bill pay, and administrative services to streamline your family office operations.',
      features: ['Accounting services', 'Bill payment', 'Vendor selection'],
      highlight: null
    }
  ];

  const additionalServices = [
    { icon: BarChart3, title: 'Technology Implementation', description: 'Strategic technology solutions and system integration' },
    { icon: TrendingUp, title: 'Custom Reporting', description: 'Tailored reporting and analytics solutions' },
    { icon: Users, title: 'Digital Identity Protection', description: 'Advanced privacy and identity security solutions' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <CheckCircle size={14} className="sm:w-4 sm:h-4" />
            <span className="whitespace-nowrap">Trusted by 50+ Families Worldwide</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6 px-4">
            Our Core Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive wealth protection and family office solutions tailored for
            ultra-high-net-worth families seeking institutional-grade excellence.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-4 sm:left-6 bg-gold text-navy px-2 sm:px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {service.highlight}
                </div>
              )}

              <div className="bg-white border-2 border-navy/10 rounded-2xl p-6 sm:p-8 h-full hover:border-gold/30 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="bg-navy/5 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                  <service.icon className="text-navy group-hover:text-gold transition-colors duration-300" size={24} />
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-charcoal/60">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-navy font-semibold group-hover:text-gold transition-colors duration-300 text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-navy/5 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16"
        >
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-6 sm:mb-8 text-center px-4">
            Additional Specialized Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <div key={service.title} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="bg-gold/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <service.icon className="text-gold" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-navy mb-1 sm:mb-2 text-sm sm:text-base">{service.title}</h4>
                  <p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-navy to-charcoal rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
            Ready to Protect Your Legacy?
          </h3>
          <p className="text-offWhite/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
            Schedule a confidential consultation to discuss your family's unique needs and discover how we can help secure your wealth for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/services"
              className="bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
            >
              Explore All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gold hover:text-navy transition-all duration-300 text-sm sm:text-base"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePreview;