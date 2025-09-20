'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, Target, Award, BarChart3 } from 'lucide-react';

export default function PortfolioRadarChart() {
  const portfolioMetrics = [
    { label: 'Growth', value: 85, angle: 0 },
    { label: 'Stability', value: 92, angle: 60 },
    { label: 'Liquidity', value: 78, angle: 120 },
    { label: 'Diversification', value: 88, angle: 180 },
    { label: 'Risk Management', value: 95, angle: 240 },
    { label: 'Performance', value: 90, angle: 300 },
  ];

  const assetAllocation = [
    { name: 'Equities', percentage: 45, color: 'bg-blue-500' },
    { name: 'Fixed Income', percentage: 25, color: 'bg-green-500' },
    { name: 'Real Estate', percentage: 15, color: 'bg-gold' },
    { name: 'Alternatives', percentage: 10, color: 'bg-purple-500' },
    { name: 'Cash', percentage: 5, color: 'bg-gray-400' },
  ];

  const performanceData = [
    { period: '1M', return: 2.3, benchmark: 1.8 },
    { period: '3M', return: 7.2, benchmark: 5.9 },
    { period: '6M', return: 12.8, benchmark: 10.4 },
    { period: '1Y', return: 25.4, benchmark: 19.7 },
    { period: '3Y', return: 18.6, benchmark: 14.2 },
  ];

  // Calculate radar chart points
  const centerX = 120;
  const centerY = 120;
  const maxRadius = 80;

  const getRadarPoint = (value: number, angle: number) => {
    const radius = (value / 100) * maxRadius;
    const radian = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(radian - Math.PI / 2);
    const y = centerY + radius * Math.sin(radian - Math.PI / 2);
    return { x, y };
  };

  const radarPath = portfolioMetrics
    .map((metric, index) => {
      const point = getRadarPoint(metric.value, metric.angle);
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    })
    .join(' ') + ' Z';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <PieChart className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Portfolio Analytics</h3>
          <p className="text-charcoal/70 text-sm">Comprehensive performance and allocation overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4 text-center">Portfolio Health Score</h4>
          <div className="flex justify-center">
            <svg width="240" height="240" className="overflow-visible">
              {/* Grid circles */}
              {[20, 40, 60, 80, 100].map((percentage) => (
                <circle
                  key={percentage}
                  cx={centerX}
                  cy={centerY}
                  r={(percentage / 100) * maxRadius}
                  fill="none"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="1"
                />
              ))}
              
              {/* Grid lines */}
              {portfolioMetrics.map((metric) => {
                const point = getRadarPoint(100, metric.angle);
                return (
                  <line
                    key={metric.angle}
                    x1={centerX}
                    y1={centerY}
                    x2={point.x}
                    y2={point.y}
                    stroke="rgb(229, 231, 235)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data area */}
              <motion.path
                d={radarPath}
                fill="rgba(212, 175, 55, 0.2)"
                stroke="rgb(212, 175, 55)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Data points */}
              {portfolioMetrics.map((metric, index) => {
                const point = getRadarPoint(metric.value, metric.angle);
                return (
                  <motion.circle
                    key={metric.label}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="rgb(212, 175, 55)"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                  />
                );
              })}

              {/* Labels */}
              {portfolioMetrics.map((metric) => {
                const labelPoint = getRadarPoint(110, metric.angle);
                return (
                  <text
                    key={`label-${metric.label}`}
                    x={labelPoint.x}
                    y={labelPoint.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-medium fill-charcoal"
                  >
                    {metric.label}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="space-y-4">
          <h4 className="font-semibold text-navy">Asset Allocation</h4>
          <div className="space-y-3">
            {assetAllocation.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${asset.color}`}></div>
                  <span className="font-medium text-charcoal">{asset.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-navy">{asset.percentage}%</div>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                    <motion.div
                      className={`h-1.5 rounded-full ${asset.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${asset.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-navy mb-3">Performance vs Benchmark</h4>
            <div className="space-y-2">
              {performanceData.map((data, index) => (
                <motion.div
                  key={data.period}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-medium text-charcoal w-8">{data.period}</span>
                  <div className="flex-1 mx-3">
                    <div className="flex gap-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gold rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(data.return / 30) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-navy rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(data.benchmark / 30) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold">+{data.return}%</div>
                    <div className="text-navy text-xs">+{data.benchmark}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-charcoal/70">Portfolio</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-navy rounded-full"></div>
                <span className="text-charcoal/70">Benchmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}