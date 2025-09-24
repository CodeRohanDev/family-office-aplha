'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';
import { subscribeToNewsletter, isValidEmail } from '@/lib/api';
import { trackFormSubmission } from '@/lib/analytics';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setNewsletterStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    if (!isValidEmail(email)) {
      setNewsletterStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setNewsletterStatus({ type: 'loading', message: 'Subscribing...' });

    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setNewsletterStatus({
          type: 'success',
          message: result.message
        });
        trackFormSubmission('newsletter', true);
        setEmail('');
      } else {
        setNewsletterStatus({
          type: 'error',
          message: result.message
        });
        trackFormSubmission('newsletter', false);
      }
    } catch (error) {
      setNewsletterStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again.'
      });
      trackFormSubmission('newsletter', false);
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Newsletter Section */}
        <div className="bg-charcoal/30 rounded-xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Stay Informed
            </h3>
            <p className="text-offWhite mb-4 sm:mb-6 text-sm sm:text-base">
              Get the latest insights on cybersecurity, wealth management, and family office best practices delivered to your inbox.
            </p>
            
            {/* Newsletter Status */}
            {newsletterStatus.type !== 'idle' && (
              <div className={`mb-4 p-3 rounded-lg flex items-center justify-center gap-2 text-sm ${
                newsletterStatus.type === 'success' 
                  ? 'bg-green-900/50 text-green-200' 
                  : newsletterStatus.type === 'error'
                  ? 'bg-red-900/50 text-red-200'
                  : 'bg-blue-900/50 text-blue-200'
              }`}>
                {newsletterStatus.type === 'loading' && <Loader className="animate-spin" size={16} />}
                {newsletterStatus.type === 'success' && <CheckCircle size={16} />}
                {newsletterStatus.type === 'error' && <AlertCircle size={16} />}
                <span>{newsletterStatus.message}</span>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (newsletterStatus.type !== 'idle') {
                    setNewsletterStatus({ type: 'idle', message: '' });
                  }
                }}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                disabled={newsletterStatus.type === 'loading'}
              />
              <button
                type="submit"
                disabled={newsletterStatus.type === 'loading'}
                className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {newsletterStatus.type === 'loading' ? (
                  <Loader className="animate-spin" size={18} />
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2" size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Family Office Alpha
            </h3>
            <p className="text-offWhite mb-4 max-w-md text-sm sm:text-base leading-relaxed">
              Professional family office and cybersecurity advisory services for 
              high-net-worth families and institutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-offWhite hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-offWhite hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/company-profile" className="text-offWhite hover:text-gold transition-colors text-sm sm:text-base">Company Profile</Link></li>
              <li><Link href="/services" className="text-offWhite hover:text-gold transition-colors text-sm sm:text-base">Services</Link></li>
              <li><Link href="/team" className="text-offWhite hover:text-gold transition-colors text-sm sm:text-base">Team</Link></li>
              <li><Link href="/activities" className="text-offWhite hover:text-gold transition-colors text-sm sm:text-base">Activities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail size={16} className="mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-offWhite text-sm sm:text-base break-all">info@familyofficealpha.io</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold flex-shrink-0" />
                <span className="text-offWhite text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-offWhite text-sm sm:text-base">27 West 60th Street, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-offWhite text-sm sm:text-base">
            © 2024 Family Office Alpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;