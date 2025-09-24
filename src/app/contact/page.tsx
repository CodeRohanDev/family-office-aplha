'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Contact Us
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-offWhite max-w-3xl mx-auto px-4 leading-relaxed">
              Ready to secure your family's future? Get in touch for a confidential consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            >
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                      Company/Family Office
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">General Consultation</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="family-office">Family Office Setup</option>
                    <option value="compliance">Compliance Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold transition-colors resize-none text-sm sm:text-base"
                    placeholder="Please describe your needs and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gold/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-charcoal text-sm sm:text-base break-all">info@familyofficealpha.io</p>
                      <p className="text-charcoal text-xs sm:text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gold/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">Phone</h4>
                      <p className="text-charcoal text-sm sm:text-base">+1 (555) 123-4567</p>
                      <p className="text-charcoal text-xs sm:text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gold/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">Office</h4>
                      <p className="text-charcoal text-sm sm:text-base">27 West 60th Street</p>
                      <p className="text-charcoal text-sm sm:text-base">New York, NY 10023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gold/10 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                      <Clock className="text-gold" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-charcoal text-xs sm:text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-charcoal text-xs sm:text-sm">Emergency Support: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">
                  Our Location
                </h3>
                <div className="bg-offWhite rounded-lg h-48 sm:h-64 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin className="text-gold mx-auto mb-2" size={40} />
                    <p className="text-charcoal text-sm sm:text-base">Interactive Map</p>
                    <p className="text-charcoal text-xs sm:text-sm">27 West 60th Street, New York, NY</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Emergency Security Support
            </h2>
            <p className="text-lg sm:text-xl text-offWhite mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              For urgent cybersecurity incidents or security breaches, our emergency response team is available 24/7.
            </p>
            <a
              href="tel:+15551234567"
              className="bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all duration-300 inline-flex items-center text-sm sm:text-base"
            >
              <Phone className="mr-2" size={18} />
              <span className="whitespace-nowrap">Emergency Hotline: +1 (555) 123-4567</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}