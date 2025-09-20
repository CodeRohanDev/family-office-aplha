'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'Principal, $500M+ Family Office',
      company: 'Mitchell Family Office',
      content: 'Family Office Alpha transformed how we think about wealth protection. Their integrated approach to cybersecurity and wealth management is unmatched in the industry.',
      rating: 5,
      image: '/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'David Chen',
      title: 'Managing Director',
      company: 'Chen Investment Group',
      content: 'The cybersecurity expertise Christopher Hetner brings is invaluable. We finally have peace of mind knowing our family\'s digital assets are protected by former SEC and Treasury advisors.',
      rating: 5,
      image: '/testimonials/david.jpg'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      title: 'Chief Investment Officer',
      company: 'Rodriguez Family Trust',
      content: 'Working with Julia Valentine and her team has been exceptional. Their technology implementation,family office operations support freed us to focus on what matters most - growing our wealth.',
      rating: 5,
      image: '/testimonials/maria.jpg'
    },
    {
      id: 4,
      name: 'Robert Thompson',
      title: 'Family Office CEO',
      company: 'Thompson Wealth Management',
      content: 'The comprehensive approach to both traditional wealth management and cutting-edge cybersecurity sets Family Office Alpha apart. They truly understand the unique challenges we face.',
      rating: 5,
      image: '/testimonials/robert.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-offWhite to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star size={14} className="sm:w-4 sm:h-4 fill-current" />
            <span className="whitespace-nowrap">Trusted by 50+ Families Worldwide</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6 px-4">
            What Our Clients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4">
            Hear from the families and institutions who trust us with their most valuable assets
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative h-[400px] sm:h-[350px] lg:h-[370px] mb-8 sm:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10">
                    <Quote size={60} className="text-gold" />
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:items-start h-full">
                    {/* Testimonial Content */}
                    <div className="lg:col-span-2 flex flex-col justify-center h-full space-y-4 sm:space-y-6 lg:space-y-8">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="text-gold fill-current" size={20} />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg sm:text-xl lg:text-2xl font-playfair text-charcoal leading-relaxed italic flex-1 lg:flex-none">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-gray-100 mt-auto lg:mt-0">
                        <div className="font-semibold text-navy text-base sm:text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gold font-medium text-sm sm:text-base mb-1 sm:mb-2">
                          {testimonials[currentIndex].title}
                        </div>
                        <div className="text-charcoal/70 text-sm mb-4">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>

                    {/* Profile Image Placeholder */}
                    <div className="hidden lg:flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 xl:w-40 xl:h-40 bg-gradient-to-br from-navy/20 to-gold/20 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                          <span className="text-navy font-playfair text-2xl xl:text-3xl font-bold">
                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 w-32 h-32 xl:w-40 xl:h-40 border-2 border-gold/30 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <button
              onClick={goToPrevious}
              className="bg-white hover:bg-navy text-navy hover:text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-gold scale-125'
                      : 'bg-charcoal/30 hover:bg-charcoal/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white hover:bg-navy text-navy hover:text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-charcoal/60 text-xs sm:text-sm">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-gold animate-pulse' : 'bg-charcoal/30'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-navy to-charcoal rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2">
                  50+
                </div>
                <div className="text-offWhite/80 text-sm sm:text-base">
                  Satisfied Families
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2">
                  $2B+
                </div>
                <div className="text-offWhite/80 text-sm sm:text-base">
                  Assets Protected
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2">
                  99.9%
                </div>
                <div className="text-offWhite/80 text-sm sm:text-base">
                  Success Rate
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-2">
                  15+
                </div>
                <div className="text-offWhite/80 text-sm sm:text-base">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;