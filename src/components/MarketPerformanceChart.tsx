'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export default function MarketPerformanceChart() {
  // Sample market performance data
  const performanceData = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 92 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 95 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 102 },
    { month: 'Jul', value: 96 },
    { month: 'Aug', value: 108 },
    { month: 'Sep', value: 115 },
    { month: 'Oct', value: 122 },
    { month: 'Nov', value: 118 },
    { month: 'Dec', value: 125 }
  ];

  const maxValue = Math.max(...performanceData.map(d => d.value));

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
          <h3 className="font-playfair text-xl font-bold text-navy">Portfolio Growth</h3>
          <p className="text-gold font-semibold">+25.8% YTD</p>
        </div>
        <div className="bg-gold/10 p-3 rounded-xl">
          <TrendingUp className="text-gold" size={24} />
        </div>
      </div>

      <div className="relative h-48">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="40"
              y1={40 + i * 30}
              x2="380"
              y2={40 + i * 30}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
          ))}

          {/* Line chart */}
          <polyline
            fill="none"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={performanceData
              .map((d, i) => `${60 + i * 26},${180 - (d.value / maxValue) * 120}`)
              .join(' ')}
          />

          {/* Data points */}
          {performanceData.map((d, i) => (
            <circle
              key={i}
              cx={60 + i * 26}
              cy={180 - (d.value / maxValue) * 120}
              r="4"
              fill="#D4AF37"
              className="hover:r-6 transition-all cursor-pointer"
            />
          ))}

          {/* X-axis labels */}
          {performanceData.map((d, i) => (
            <text
              key={i}
              x={60 + i * 26}
              y="195"
              textAnchor="middle"
              className="text-xs fill-charcoal/60"
            >
              {d.month}
            </text>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}