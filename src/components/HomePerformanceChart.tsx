'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Award } from 'lucide-react';

export default function HomePerformanceChart() {
  const performanceData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 103 },
    { month: 'Mar', value: 107 },
    { month: 'Apr', value: 112 },
    { month: 'May', value: 118 },
    { month: 'Jun', value: 125 },
  ];

  const keyMetrics = [
    { label: 'Portfolio Growth', value: '+25.4%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Security Score', value: '100%', icon: Shield, color: 'text-blue-600' },
    { label: 'Client Satisfaction', value: '4.8★', icon: Award, color: 'text-gold' },
  ];

  const maxValue = Math.max(...performanceData.map(d => d.value));
  const minValue = Math.min(...performanceData.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="font-playfair text-2xl font-bold text-navy mb-2">
          Proven Performance
        </h3>
        <p className="text-charcoal/70">Consistent results that speak for themselves</p>
      </div>

      {/* Performance Chart */}
      <div className="relative h-32 mb-6">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(212, 175, 55)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="rgb(212, 175, 55)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <motion.path
            d={`M 0 ${100 - ((performanceData[0].value - minValue) / (maxValue - minValue)) * 80} 
                ${performanceData.map((d, i) => 
                  `L ${(i / (performanceData.length - 1)) * 300} ${100 - ((d.value - minValue) / (maxValue - minValue)) * 80}`
                ).join(' ')} 
                L 300 100 L 0 100 Z`}
            fill="url(#performanceGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Performance line */}
          <motion.path
            d={`M 0 ${100 - ((performanceData[0].value - minValue) / (maxValue - minValue)) * 80} 
                ${performanceData.map((d, i) => 
                  `L ${(i / (performanceData.length - 1)) * 300} ${100 - ((d.value - minValue) / (maxValue - minValue)) * 80}`
                ).join(' ')}`}
            fill="none"
            stroke="rgb(212, 175, 55)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Data points */}
          {performanceData.map((d, i) => (
            <motion.circle
              key={d.month}
              cx={(i / (performanceData.length - 1)) * 300}
              cy={100 - ((d.value - minValue) / (maxValue - minValue)) * 80}
              r="4"
              fill="rgb(212, 175, 55)"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
            />
          ))}
        </svg>
        
        {/* Month labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-charcoal/60 px-2">
          {performanceData.map(d => (
            <span key={d.month}>{d.month}</span>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4">
        {keyMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="text-center"
          >
            <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
              <metric.icon className={metric.color} size={20} />
            </div>
            <div className={`text-lg font-bold ${metric.color} mb-1`}>
              {metric.value}
            </div>
            <div className="text-xs text-charcoal/70">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}