'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function GlobalMarketsChart() {
  const marketData = [
    { region: 'North America', allocation: 40, performance: '+12.5%', color: '#1e3a8a' },
    { region: 'Europe', allocation: 25, performance: '+8.2%', color: '#D4AF37' },
    { region: 'Asia Pacific', allocation: 20, performance: '+15.8%', color: '#374151' },
    { region: 'Emerging Markets', allocation: 10, performance: '+6.1%', color: '#6b7280' },
    { region: 'Others', allocation: 5, performance: '+4.3%', color: '#9ca3af' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Global Exposure</h3>
          <p className="text-charcoal/60">Regional Allocation</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-xl">
          <Globe className="text-blue-600" size={24} />
        </div>
      </div>

      <div className="space-y-4">
        {marketData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-charcoal/80">{item.region}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-navy">{item.allocation}%</span>
                <span className="text-xs text-green-600 font-medium">{item.performance}</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.allocation * 2.5}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-charcoal/70">Total Global Exposure</span>
          <span className="text-sm font-bold text-navy">100%</span>
        </div>
      </div>
    </motion.div>
  );
}