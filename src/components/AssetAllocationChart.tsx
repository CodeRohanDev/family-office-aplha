'use client';

import { motion } from 'framer-motion';
import { PieChart } from 'lucide-react';

export default function AssetAllocationChart() {
  const allocations = [
    { name: 'Equities', value: 45, color: '#1e3a8a' },
    { name: 'Fixed Income', value: 25, color: '#D4AF37' },
    { name: 'Real Estate', value: 15, color: '#374151' },
    { name: 'Alternatives', value: 10, color: '#6b7280' },
    { name: 'Cash', value: 5, color: '#9ca3af' }
  ];

  // Calculate angles for pie chart
  let cumulativeAngle = 0;
  const pieData = allocations.map(item => {
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + (item.value / 100) * 360;
    cumulativeAngle = endAngle;
    
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);
    
    const largeArcFlag = item.value > 50 ? 1 : 0;
    
    const x1 = 100 + 80 * Math.cos(startAngleRad);
    const y1 = 100 + 80 * Math.sin(startAngleRad);
    const x2 = 100 + 80 * Math.cos(endAngleRad);
    const y2 = 100 + 80 * Math.sin(endAngleRad);
    
    const pathData = [
      `M 100 100`,
      `L ${x1} ${y1}`,
      `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    return { ...item, pathData };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Asset Allocation</h3>
          <p className="text-charcoal/60">Diversified Portfolio</p>
        </div>
        <div className="bg-navy/10 p-3 rounded-xl">
          <PieChart className="text-navy" size={24} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {pieData.map((item, index) => (
              <path
                key={index}
                d={item.pathData}
                fill={item.color}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </svg>
        </div>

        <div className="flex-1 ml-6">
          {allocations.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-charcoal/80">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-navy">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}