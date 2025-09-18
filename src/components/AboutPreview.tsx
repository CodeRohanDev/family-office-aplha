'use client';

import Link from 'next/link';
import { Award, Target, Globe, ArrowRight, Shield, Users, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  const stats = [
    { number: '$2B+', label: 'Assets Under Protection', icon: Shield },
    { number: '50+', label: 'Families Served', icon: Users },
    { number: '15+', label: 'Years of Excellence', icon: Award },
    { number: '99.9%', label: 'Security Success Rate', icon: Star }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising standards in every aspect of our service delivery'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in wealth protection strategies'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International expertise across multiple jurisdictions'
    }
  ];

  return (
    <section className="py-24 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6 px-4">
            Why Choose Family Office Alpha
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4">
            Where traditional wealth management meets cutting-edge cybersecurity, 
            creating unparalleled protection for your family's legacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">
                Our Story
              </h3>
              
              <p className="text-base sm:text-lg text-charcoal/80 mb-4 sm:mb-6 leading-relaxed">
                We are a team with decades of finance, accounting, and technology experience. Our founders 
                have managed their own family office, worked for one of the top 5 family offices globally 
                by AUM, and implemented banking and technology solutions.
              </p>
              
              <p className="text-base sm:text-lg text-charcoal/80 mb-6 sm:mb-8 leading-relaxed">
                We simplify tasks like bill pay and accounting, freeing family offices to focus on 
                investments and long-term wealth management. Our Management Team has navigated economic 
                fluctuations, tech bubbles, financial crises, and global pandemics.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {values.map((value, index) => (
                  <div key={value.title} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gold/10 p-2 rounded-lg flex-shrink-0">
                      <value.icon className="text-gold" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">{value.title}</h4>
                      <p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/company-profile"
                className="bg-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gold hover:text-navy transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
              >
                Our Full Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-navy/5 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <stat.icon className="text-navy" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-2xl sm:text-3xl font-playfair font-bold text-gold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-charcoal/70 font-medium text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy to-charcoal rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-gold fill-current" size={20} />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair text-white mb-4 sm:mb-6 leading-relaxed px-4">
              "Family Office Alpha transformed how we think about wealth protection. 
              Their integrated approach to cybersecurity and wealth management is unmatched."
            </blockquote>
            <cite className="text-gold font-medium text-sm sm:text-base">
              — Principal, $500M+ Family Office
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;