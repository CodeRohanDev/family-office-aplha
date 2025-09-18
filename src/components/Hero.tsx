'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy -mt-px">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-charcoal"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Clean Typography */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Family Office
            <span className="text-gold block">Alpha</span>
          </h1>
          
          {/* Simple Divider */}
          <div className="w-12 sm:w-16 h-0.5 bg-gold mx-auto mb-6 sm:mb-8"></div>
          
          {/* Clean Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-offWhite mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-2">
            Professional family office and cybersecurity advisory services for 
            high-net-worth families and institutions.
          </p>
          
          {/* Minimal CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20 px-4">
            <Link
              href="/services"
              className="bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center group "
            >
              Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="/contact"
              className="border border-gold text-gold px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-gold hover:text-navy transition-all duration-300 "
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Clean Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 border-t border-gold/20 px-4"
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gold mb-1">$2B+</div>
            <div className="text-offWhite/70 text-xs sm:text-sm">Assets Protected</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gold mb-1">15+</div>
            <div className="text-offWhite/70 text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gold mb-1">50+</div>
            <div className="text-offWhite/70 text-xs sm:text-sm">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gold mb-1">99.9%</div>
            <div className="text-offWhite/70 text-xs sm:text-sm">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;