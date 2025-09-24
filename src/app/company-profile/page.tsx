'use client';

import { Award, Target, Globe, Users, Shield, TrendingUp, CheckCircle, Star, Building, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import MarketTrendsChart from '@/components/MarketTrendsChart';
import RiskAnalysisChart from '@/components/RiskAnalysisChart';
import ClientGrowthChart from '@/components/ClientGrowthChart';
import GlobalMarketsChart from '@/components/GlobalMarketsChart';

export default function CompanyProfile() {
  const stats = [
    { number: '$2B+', label: 'Assets Under Protection', icon: Shield },
    { number: '50+', label: 'Families Served', icon: Users },
    { number: '15+', label: 'Years of Excellence', icon: Award },
    { number: '99.9%', label: 'Security Success Rate', icon: Star }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Foundation & Vision',
      description: 'Founded by Goldman Sachs veterans and cybersecurity experts with a revolutionary vision to integrate wealth management with advanced security.',
      achievements: ['Initial $50M AUM', 'First 5 family clients', 'Core team assembled']
    },
    {
      year: '2012',
      title: 'Innovation & Growth',
      description: 'Developed proprietary cybersecurity frameworks specifically designed for high-net-worth families and their unique digital vulnerabilities.',
      achievements: ['$500M AUM milestone', '20+ families served', 'ISO 27001 certification']
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, establishing presence in Europe and Asia to serve global ultra-high-net-worth families.',
      achievements: ['International offices', '$1B AUM achieved', 'Multi-jurisdiction expertise']
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Led the industry in digital transformation, helping families navigate unprecedented cybersecurity challenges during global digitalization.',
      achievements: ['Zero security breaches', 'Advanced AI integration', 'Remote service delivery']
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as the premier family office cybersecurity advisor, setting new standards for integrated wealth protection services.',
      achievements: ['$2B+ AUM', '50+ families worldwide', 'Industry thought leadership']
    }
  ];

  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-charcoal text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Building size={14} className="sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Established 2008 • SEC Registered</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
              About Family Office Alpha
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed px-4">
              Our Management Team has seen economic and interest rate fluctuations, the tech bubble,
              terrorist attacks, the Great Financial Crisis, superstorms, zero interest rates, and the pandemic.
              We offer solutions that instill confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-6 bg-offWhite rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-navy/5 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="text-navy" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gold mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-charcoal/70 font-medium text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analytics Section */}
      <section id="market-analytics" className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-4">Market Intelligence</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Real-time insights driving our investment strategies and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MarketTrendsChart />
            <RiskAnalysisChart />
            <ClientGrowthChart />
            <GlobalMarketsChart />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
              Our Purpose & Vision
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-gold"
            >
              <Target className="text-gold mb-4 sm:mb-6" size={40} />
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-4 sm:mb-6">
                To provide exceptional family office and cybersecurity advisory services that protect,
                preserve, and grow our clients' wealth while ensuring the highest standards of digital
                security and privacy protection.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Comprehensive wealth protection strategies</span>
                </li>
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Advanced cybersecurity frameworks</span>
                </li>
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-gold mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Generational legacy preservation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-navy"
            >
              <Globe className="text-navy mb-4 sm:mb-6" size={40} />
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed mb-4 sm:mb-6">
                To be the world's most trusted advisor for high-net-worth families, setting the
                standard for integrated wealth management and cybersecurity excellence in the
                digital age.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-navy mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Global leadership in family office security</span>
                </li>
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-navy mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Innovation in wealth protection technology</span>
                </li>
                <li className="flex items-start text-charcoal/70 text-sm sm:text-base">
                  <CheckCircle className="text-navy mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                  <span>Trusted advisor to 100+ families by 2030</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
              Our Core Values
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
              The principles that guide every decision and interaction with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service delivery, maintaining the highest professional standards and exceeding client expectations."
              },
              {
                icon: Shield,
                title: "Security",
                description: "Security is at the core of everything we do, protecting our clients' assets and information with military-grade solutions and protocols."
              },
              {
                icon: Users,
                title: "Trust",
                description: "We build lasting relationships based on trust, transparency, and unwavering commitment to our clients' success and confidentiality."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 sm:p-8 bg-gradient-to-b from-gold/5 to-transparent rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`${index === 0 ? 'bg-gold/10' : index === 1 ? 'bg-navy/10' : 'bg-gold/10'} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 ${index === 0 ? 'group-hover:bg-gold/20' : index === 1 ? 'group-hover:bg-navy/20' : 'group-hover:bg-gold/20'} transition-colors`}>
                  <value.icon className={`${index === 0 ? 'text-gold' : index === 1 ? 'text-navy' : 'text-gold'}`} size={32} />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
              Our Journey of Excellence
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
              From startup vision to industry leadership - the milestones that shaped our success.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/20 hidden lg:block"></div>

            {/* Timeline Line - Mobile */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-gold/20 lg:hidden"></div>

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg ml-12 lg:ml-0 relative">
                      {/* Mobile Timeline Dot */}
                      <div className="absolute -left-14 top-6 w-4 h-4 bg-gold rounded-full border-2 border-white shadow-lg lg:hidden"></div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="bg-navy text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-playfair text-lg sm:text-xl font-bold inline-block w-fit">
                          {milestone.year}
                        </div>
                        <Calendar className="text-gold" size={20} />
                      </div>
                      <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-charcoal/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {milestone.description}
                      </p>
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-xs sm:text-sm text-charcoal/70">
                            <CheckCircle className="text-gold mr-2 flex-shrink-0 mt-0.5" size={12} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="hidden lg:block relative">
                    <div className="w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="lg:w-1/2 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-navy to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Experience the Alpha Difference?
            </h2>
            <p className="text-lg sm:text-xl text-offWhite/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join the families who trust us with their most valuable assets and sensitive information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="/team"
                className="bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 text-sm sm:text-base"
              >
                Meet Our Team
              </a>
              <a
                href="/contact"
                className="border-2 border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gold hover:text-navy transition-all duration-300 text-sm sm:text-base"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}