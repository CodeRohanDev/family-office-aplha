'use client';

import { motion } from 'framer-motion';
import { PieChart, TrendingUp, DollarSign, BarChart3, Target } from 'lucide-react';

export default function PortfolioComposition() {
  const portfolioSegments = [
    {
      category: 'Growth Investments',
      allocation: 45,
      value: 945,
      return: 28.4,
      risk: 'Medium-High',
      color: '#1E3A8A',
      subcategories: [
        { name: 'Tech Equities', percentage: 60, return: 32.1 },
        { name: 'Growth Funds', percentage: 25, return: 24.8 },
        { name: 'Emerging Markets', percentage: 15, return: 22.3 }
      ]
    },
    {
      category: 'Stable Income',
      allocation: 30,
      value: 630,
      return: 8.2,
      risk: 'Low',
      color: '#059669',
      subcategories: [
        { name: 'Government Bonds', percentage: 50, return: 6.8 },
        { name: 'Corporate Bonds', percentage: 35, return: 9.2 },
        { name: 'REITs', percentage: 15, return: 12.1 }
      ]
    },
    {
      category: 'Alternative Investments',
      allocation: 15,
      value: 315,
      return: 15.7,
      risk: 'Medium',
      color: '#D4AF37',
      subcategories: [
        { name: 'Private Equity', percentage: 60, return: 18.2 },
        { name: 'Hedge Funds', percentage: 25, return: 12.4 },
        { name: 'Commodities', percentage: 15, return: 11.8 }
      ]
    },
    {
      category: 'Liquidity Reserve',
      allocation: 10,
      value: 210,
      return: 2.1,
      risk: 'Very Low',
      color: '#6B7280',
      subcategories: [
        { name: 'Cash Equivalents', percentage: 70, return: 1.8 },
        { name: 'Money Market', percentage: 20, return: 2.5 },
        { name: 'Short-term CDs', percentage: 10, return: 3.2 }
      ]
    }
  ];

  const performanceMetrics = [
    { label: 'Total Return', value: '18.6%', change: '+2.3%', positive: true },
    { label: 'Sharpe Ratio', value: '1.84', change: '+0.12', positive: true },
    { label: 'Max Drawdown', value: '-3.2%', change: '-0.8%', positive: true },
    { label: 'Beta', value: '0.87', change: '-0.05', positive: true }
  ];

  const riskAllocation = [
    { risk: 'Conservative', percentage: 40, color: '#059669' },
    { risk: 'Moderate', percentage: 35, color: '#D4AF37' },
    { risk: 'Aggressive', percentage: 25, color: '#DC2626' }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <BarChart3 className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Portfolio Composition Analysis</h3>
          <p className="text-charcoal/70 text-sm">Detailed breakdown of investment categories and performance</p>
        </div>
      </div>

      {/* Main Portfolio Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-navy mb-4">Investment Categories</h4>
          <div className="space-y-4">
            {portfolioSegments.map((segment, index) => (
              <motion.div
                key={segment.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    ></div>
                    <h5 className="font-semibold text-navy">{segment.category}</h5>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-navy">{segment.allocation}%</div>
                    <div className="text-xs text-charcoal/70">${segment.value}M</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-charcoal/70">Annual Return</div>
                    <div className={`font-bold ${segment.return > 10 ? 'text-green-600' : segment.return > 5 ? 'text-blue-600' : 'text-charcoal'}`}>
                      +{segment.return}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/70">Risk Level</div>
                    <div className="font-medium text-charcoal">{segment.risk}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: segment.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${segment.allocation}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                {/* Subcategories */}
                <div className="space-y-1">
                  {segment.subcategories.map((sub, idx) => (
                    <div key={sub.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-charcoal/40 rounded-full"></div>
                        <span className="text-charcoal/70">{sub.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-charcoal/70">{sub.percentage}%</span>
                        <span className="text-green-600 font-medium">+{sub.return}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Composition */}
        <div className="space-y-6">
          {/* Stacked Bar Chart */}
          <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4">Allocation Visualization</h4>
            <div className="space-y-4">
              {/* Main allocation bar */}
              <div className="relative">
                <div className="flex h-8 rounded-lg overflow-hidden">
                  {portfolioSegments.map((segment, index) => (
                    <motion.div
                      key={segment.category}
                      className="flex items-center justify-center text-white text-xs font-medium"
                      style={{ 
                        backgroundColor: segment.color,
                        width: `${segment.allocation}%`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${segment.allocation}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      {segment.allocation > 15 && `${segment.allocation}%`}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-charcoal/70">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Risk Distribution */}
              <div>
                <h5 className="font-medium text-navy mb-2">Risk Distribution</h5>
                <div className="space-y-2">
                  {riskAllocation.map((risk, index) => (
                    <div key={risk.risk} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded"
                          style={{ backgroundColor: risk.color }}
                        ></div>
                        <span className="text-sm text-charcoal">{risk.risk}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <motion.div
                            className="h-1.5 rounded-full"
                            style={{ backgroundColor: risk.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${risk.percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-navy">{risk.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4">Performance Metrics</h4>
            <div className="grid grid-cols-2 gap-3">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-3 bg-white rounded-lg"
                >
                  <div className="text-lg font-bold text-navy">{metric.value}</div>
                  <div className="text-xs text-charcoal/70 mb-1">{metric.label}</div>
                  <div className={`text-xs font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.positive ? '+' : ''}{metric.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl">
        <div className="text-center">
          <PieChart className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">4</div>
          <div className="text-xs text-charcoal/70">Asset Categories</div>
        </div>
        <div className="text-center">
          <TrendingUp className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">18.6%</div>
          <div className="text-xs text-charcoal/70">Weighted Return</div>
        </div>
        <div className="text-center">
          <Target className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">1.84</div>
          <div className="text-xs text-charcoal/70">Sharpe Ratio</div>
        </div>
        <div className="text-center">
          <DollarSign className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">$2.1B</div>
          <div className="text-xs text-charcoal/70">Total Value</div>
        </div>
      </div>
    </div>
  );
}