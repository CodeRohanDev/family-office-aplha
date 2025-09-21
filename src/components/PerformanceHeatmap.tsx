'use client';

import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Award } from 'lucide-react';

export default function PerformanceHeatmap() {
  // Monthly performance data (returns in %)
  const performanceData = [
    { year: '2024', months: [2.1, 1.8, -0.5, 3.2, 2.7, 1.9, 2.4, 1.6, 2.8, 1.3, 2.2, 0] },
    { year: '2023', months: [1.9, 2.3, 1.1, 2.8, -1.2, 3.1, 2.6, 1.8, 2.4, 2.9, 1.7, 2.5] },
    { year: '2022', months: [1.2, -0.8, 2.1, 1.9, 2.4, 1.6, 2.8, 2.2, 1.5, 2.7, 1.9, 2.3] },
    { year: '2021', months: [2.8, 2.1, 1.9, 3.2, 2.6, 2.4, 1.8, 2.9, 2.2, 2.7, 2.5, 1.6] },
    { year: '2020', months: [-2.1, -1.8, -3.2, 4.1, 3.8, 2.9, 2.1, 1.9, 2.6, 2.3, 3.1, 2.8] },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getColorIntensity = (value: number) => {
    if (value > 2.5) return 'bg-green-600 text-white';
    if (value > 1.5) return 'bg-green-400 text-white';
    if (value > 0.5) return 'bg-green-200 text-green-800';
    if (value > -0.5) return 'bg-gray-200 text-gray-700';
    if (value > -1.5) return 'bg-red-200 text-red-800';
    return 'bg-red-400 text-white';
  };

  const yearlyReturns = performanceData.map(year => ({
    year: year.year,
    return: year.months.reduce((sum, month) => sum + month, 0)
  }));

  const bestMonth = Math.max(...performanceData.flatMap(year => year.months));
  const worstMonth = Math.min(...performanceData.flatMap(year => year.months));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Calendar className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Performance Heatmap</h3>
          <p className="text-charcoal/70 text-sm">Monthly returns visualization over 5 years</p>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="mb-6">
        {/* Month Headers */}
        <div className="grid grid-cols-13 gap-1 mb-2">
          <div className="text-xs font-medium text-charcoal/70 text-right pr-2">Year</div>
          {months.map(month => (
            <div key={month} className="text-xs font-medium text-charcoal/70 text-center">
              {month}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {performanceData.map((yearData, yearIndex) => (
          <motion.div
            key={yearData.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
            className="grid grid-cols-13 gap-1 mb-1"
          >
            <div className="text-sm font-medium text-navy text-right pr-2 py-2">
              {yearData.year}
            </div>
            {yearData.months.map((monthReturn, monthIndex) => (
              <motion.div
                key={`${yearData.year}-${monthIndex}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: (yearIndex * 12 + monthIndex) * 0.02 }}
                className={`
                  ${getColorIntensity(monthReturn)}
                  rounded text-xs font-medium text-center py-2 cursor-pointer
                  hover:scale-110 transition-transform duration-200
                  ${monthReturn === 0 ? 'opacity-50' : ''}
                `}
                title={`${months[monthIndex]} ${yearData.year}: ${monthReturn > 0 ? '+' : ''}${monthReturn.toFixed(1)}%`}
              >
                {monthReturn !== 0 ? (monthReturn > 0 ? '+' : '') + monthReturn.toFixed(1) : '-'}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mb-6 text-xs">
        <span className="text-charcoal/70">Less</span>
        <div className="bg-gray-200 w-3 h-3 rounded"></div>
        <div className="bg-green-200 w-3 h-3 rounded"></div>
        <div className="bg-green-400 w-3 h-3 rounded"></div>
        <div className="bg-green-600 w-3 h-3 rounded"></div>
        <span className="text-charcoal/70">More</span>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="text-green-600" size={16} />
            <span className="text-sm font-medium text-green-800">Best Month</span>
          </div>
          <div className="text-2xl font-bold text-green-600">+{bestMonth.toFixed(1)}%</div>
          <div className="text-xs text-green-700">Highest monthly return</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="text-blue-600" size={16} />
            <span className="text-sm font-medium text-blue-800">Avg Annual</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">
            +{(yearlyReturns.reduce((sum, year) => sum + year.return, 0) / yearlyReturns.length).toFixed(1)}%
          </div>
          <div className="text-xs text-blue-700">Average yearly return</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-navy/10 to-navy/20 p-4 rounded-xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calendar className="text-navy" size={16} />
            <span className="text-sm font-medium text-navy">Positive Months</span>
          </div>
          <div className="text-2xl font-bold text-navy">
            {Math.round((performanceData.flatMap(year => year.months).filter(month => month > 0).length / 
              performanceData.flatMap(year => year.months).filter(month => month !== 0).length) * 100)}%
          </div>
          <div className="text-xs text-navy/70">Win rate consistency</div>
        </motion.div>
      </div>

      {/* Yearly Performance Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-gold/5 to-navy/5 rounded-xl">
        <h4 className="font-semibold text-navy mb-3">Annual Performance Summary</h4>
        <div className="grid grid-cols-5 gap-2">
          {yearlyReturns.map((year, index) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
              className="text-center p-2 bg-white rounded-lg"
            >
              <div className="text-xs text-charcoal/70">{year.year}</div>
              <div className={`text-sm font-bold ${year.return > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {year.return > 0 ? '+' : ''}{year.return.toFixed(1)}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}