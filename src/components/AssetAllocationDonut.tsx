'use client';

import { motion } from 'framer-motion';
import { PieChart, DollarSign, TrendingUp, Info } from 'lucide-react';

export default function AssetAllocationDonut() {
  const allocations = [
    { name: 'Public Equities', value: 35, color: '#1E3A8A', darkColor: '#1E40AF' },
    { name: 'Private Equity', value: 20, color: '#D4AF37', darkColor: '#B8941F' },
    { name: 'Fixed Income', value: 18, color: '#059669', darkColor: '#047857' },
    { name: 'Real Estate', value: 12, color: '#7C3AED', darkColor: '#6D28D9' },
    { name: 'Hedge Funds', value: 8, color: '#DC2626', darkColor: '#B91C1C' },
    { name: 'Commodities', value: 4, color: '#EA580C', darkColor: '#C2410C' },
    { name: 'Cash & Equivalents', value: 3, color: '#6B7280', darkColor: '#4B5563' },
  ];

  const total = allocations.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const radius = 80;
  const innerRadius = 50;
  const centerX = 120;
  const centerY = 120;

  const createPath = (startAngle: number, endAngle: number, outerR: number, innerR: number) => {
    const start = polarToCartesian(centerX, centerY, outerR, endAngle);
    const end = polarToCartesian(centerX, centerY, outerR, startAngle);
    const innerStart = polarToCartesian(centerX, centerY, innerR, endAngle);
    const innerEnd = polarToCartesian(centerX, centerY, innerR, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", outerR, outerR, 0, largeArcFlag, 0, end.x, end.y,
      "L", innerEnd.x, innerEnd.y,
      "A", innerR, innerR, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <PieChart className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Asset Allocation</h3>
          <p className="text-charcoal/70 text-sm">Strategic portfolio distribution across asset classes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="flex justify-center">
          <div className="relative">
            <svg width="240" height="240" className="transform -rotate-90">
              {allocations.map((allocation, index) => {
                const percentage = (allocation.value / total) * 100;
                const startAngle = (cumulativePercentage / 100) * 360;
                const endAngle = ((cumulativePercentage + percentage) / 100) * 360;
                
                cumulativePercentage += percentage;

                return (
                  <motion.path
                    key={allocation.name}
                    d={createPath(startAngle, endAngle, radius, innerRadius)}
                    fill={allocation.color}
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="hover:brightness-110 transition-all duration-300 cursor-pointer"
                  />
                );
              })}
            </svg>
            
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-navy">$2.1B</div>
              <div className="text-sm text-charcoal/70">Total AUM</div>
            </div>
          </div>
        </div>

        {/* Legend and Details */}
        <div className="space-y-3">
          {allocations.map((allocation, index) => (
            <motion.div
              key={allocation.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: allocation.color }}
                ></div>
                <div>
                  <div className="font-medium text-charcoal">{allocation.name}</div>
                  <div className="text-xs text-charcoal/60">
                    ${((allocation.value / 100) * 2.1).toFixed(1)}B allocated
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-navy">{allocation.value}%</div>
                <div className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp size={10} />
                  +2.3%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl">
        <div className="text-center">
          <div className="text-lg font-bold text-navy">7</div>
          <div className="text-xs text-charcoal/70">Asset Classes</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-navy">15.2%</div>
          <div className="text-xs text-charcoal/70">Avg Return</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-navy">0.85</div>
          <div className="text-xs text-charcoal/70">Correlation</div>
        </div>
      </div>
    </div>
  );
}