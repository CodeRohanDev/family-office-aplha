'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitContactForm, isValidEmail, isValidPhone, formatPhoneNumber } from '@/lib/api';
import { trackFormSubmission, trackContactInteraction } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Please correct the errors above and try again.'
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Map subject to purpose
      const purposeMap: Record<string, string> = {
        'consultation': 'General Consultation',
        'cybersecurity': 'Cybersecurity Services',
        'wealth-management': 'Wealth Management',
        'family-office': 'Family Office Setup',
        'compliance': 'Compliance Advisory',
        'other': 'Other Inquiry'
      };

      const contactData = {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone || '',
        purpose: purposeMap[formData.subject] || formData.subject,
        message: formData.message
      };

      const result = await submitContactForm(contactData);

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: result.message
        });
        
        // Track successful form submission
        trackFormSubmission('contact_form', true);
        trackContactInteraction('form');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        setFormStatus({
          type: 'error',
          message: result.message
        });
        trackFormSubmission('contact_form', false);
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
      trackFormSubmission('contact_form', false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format phone number as user types
    let formattedValue = value;
    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    }
    
    setFormData({
      ...formData,
      [name]: formattedValue
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }

    // Clear form status when user starts typing
    if (formStatus.type !== 'idle') {
      setFormStatus({ type: 'idle', message: '' });
    }
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
              
              {/* Status Message */}
              {formStatus.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : formStatus.type === 'error'
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}
                >
                  {formStatus.type === 'loading' && <Loader className="animate-spin" size={20} />}
                  {formStatus.type === 'success' && <CheckCircle size={20} />}
                  {formStatus.type === 'error' && <AlertCircle size={20} />}
                  <span className="text-sm sm:text-base">{formStatus.message}</span>
                </motion.div>
              )}
              
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border focus:outline-none transition-colors text-sm sm:text-base ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-charcoal/20 focus:border-gold'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.name}</p>
                    )}
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border focus:outline-none transition-colors text-sm sm:text-base ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-charcoal/20 focus:border-gold'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.email}</p>
                    )}
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
                      placeholder="Your company or family office name"
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
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border focus:outline-none transition-colors text-sm sm:text-base ${
                        errors.phone 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-charcoal/20 focus:border-gold'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.phone}</p>
                    )}
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
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border focus:outline-none transition-colors text-sm sm:text-base ${
                      errors.subject 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-charcoal/20 focus:border-gold'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">General Consultation</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="family-office">Family Office Setup</option>
                    <option value="compliance">Compliance Advisory</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.subject}</p>
                  )}
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
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border focus:outline-none transition-colors resize-none text-sm sm:text-base ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-charcoal/20 focus:border-gold'
                    }`}
                    placeholder="Please describe your needs and how we can help..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-gold text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <Loader className="animate-spin mr-2" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
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