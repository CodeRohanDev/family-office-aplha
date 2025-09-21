'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AnalyticsButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/company-profile#charts-section');
    
    // Small delay to ensure page navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('charts-section');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="text-center">
      <motion.button
        onClick={handleClick}
        className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-charcoal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        View Complete Analytics Dashboard
        <motion.svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </motion.button>
      
      <motion.p 
        className="text-charcoal/70 text-sm mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Explore 18+ interactive charts and comprehensive business intelligence
      </motion.p>
    </div>
  );
}