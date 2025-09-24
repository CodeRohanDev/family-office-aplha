'use client';

import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

export default function MarketTrendsChart() {
  const marketData = [
    { sector: 'Tech', performance: 85, color: '#1e3a8a' },
    { sector: 'Healthcare', performance: 72, color: '#D4AF37' },
    { sector: 'Finance', performance: 68, color: '#374151' },
    { sector: 'Energy', performance: 45, color: '#6b7280' },
    { sector: 'Real Estate', performance: 58, color: '#9ca3af' }
  ];

  const maxPerformance = Math.max(...marketData.map(d => d.performance));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Sector Performance</h3>
          <p className="text-charcoal/60">YTD Returns</p>
        </div>
        <div className="bg-navy/10 p-3 rounded-xl">
          <BarChart3 className="text-navy" size={24} />
        </div>
      </div>

      <div className="space-y-4">
        {marketData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-sm text-charcoal/80 font-medium">
              {item.sector}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-100 rounded-full h-3 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.performance / maxPerformance) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                ></motion.div>
              </div>
            </div>
            <div className="w-12 text-sm font-semibold text-navy text-right">
              {item.performance}%
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}