'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter, isValidEmail } from '@/lib/api';
import { trackFormSubmission } from '@/lib/analytics';

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

export default function Newsletter({ 
  title = "Stay Informed", 
  description = "Get the latest insights on cybersecurity, wealth management, and family office best practices delivered to your inbox.",
  className = "",
  variant = "default"
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    if (!isValidEmail(email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Subscribing...' });

    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message
        });
        trackFormSubmission('newsletter', true);
        setEmail('');
      } else {
        setStatus({
          type: 'error',
          message: result.message
        });
        trackFormSubmission('newsletter', false);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again.'
      });
      trackFormSubmission('newsletter', false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gold/10 p-2 rounded-lg">
            <Mail className="text-gold" size={20} />
          </div>
          <h3 className="font-playfair text-lg font-bold text-navy">{title}</h3>
        </div>
        
        {status.type !== 'idle' && (
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-800' 
              : status.type === 'error'
              ? 'bg-red-50 text-red-800'
              : 'bg-blue-50 text-blue-800'
          }`}>
            {status.type === 'loading' && <Loader className="animate-spin" size={16} />}
            {status.type === 'success' && <CheckCircle size={16} />}
            {status.type === 'error' && <AlertCircle size={16} />}
            <span>{status.message}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-gold transition-colors"
            disabled={status.type === 'loading'}
          />
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gold text-navy px-4 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? (
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
    );
  }

  if (variant === 'inline') {
    return (
      <div className={className}>
        {status.type !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-800' 
                : status.type === 'error'
                ? 'bg-red-50 text-red-800'
                : 'bg-blue-50 text-blue-800'
            }`}
          >
            {status.type === 'loading' && <Loader className="animate-spin" size={16} />}
            {status.type === 'success' && <CheckCircle size={16} />}
            {status.type === 'error' && <AlertCircle size={16} />}
            <span>{status.message}</span>
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-charcoal/20 focus:outline-none focus:border-gold transition-colors"
            disabled={status.type === 'loading'}
          />
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? (
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
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-r from-navy to-charcoal rounded-xl p-8 text-white ${className}`}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-offWhite mb-6 leading-relaxed">
          {description}
        </p>
        
        {status.type !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-center justify-center gap-3 ${
              status.type === 'success' 
                ? 'bg-green-900/50 text-green-200' 
                : status.type === 'error'
                ? 'bg-red-900/50 text-red-200'
                : 'bg-blue-900/50 text-blue-200'
            }`}
          >
            {status.type === 'loading' && <Loader className="animate-spin" size={20} />}
            {status.type === 'success' && <CheckCircle size={20} />}
            {status.type === 'error' && <AlertCircle size={20} />}
            <span>{status.message}</span>
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-gold transition-colors"
            disabled={status.type === 'loading'}
          />
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? (
              <Loader className="animate-spin" size={18} />
            ) : (
              <>
                Subscribe
                <Send className="ml-2" size={16} />
              </>
            )}
          </button>
        </form>
        
        <p className="text-white/60 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </motion.div>
  );
}