'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function RiskAnalysisChart() {
  const riskData = [
    { category: 'Low Risk', value: 35, color: '#10b981' },
    { category: 'Medium Risk', value: 45, color: '#D4AF37' },
    { category: 'High Risk', value: 20, color: '#ef4444' }
  ];

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercentage = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Risk Distribution</h3>
          <p className="text-charcoal/60">Portfolio Risk Profile</p>
        </div>
        <div className="bg-green-50 p-3 rounded-xl">
          <Shield className="text-green-600" size={24} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="12"
            />
            {riskData.map((item, index) => {
              const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -cumulativePercentage * circumference / 100;
              cumulativePercentage += item.value;
              
              return (
                <motion.circle
                  key={index}
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="12"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  whileInView={{ strokeDasharray }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy">A+</div>
              <div className="text-xs text-charcoal/60">Risk Score</div>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-6">
          {riskData.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-charcoal/80">{item.category}</span>
              </div>
              <span className="text-sm font-semibold text-navy">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}