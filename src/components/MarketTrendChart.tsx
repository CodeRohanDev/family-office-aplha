'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function MarketTrendChart() {
  // Sample data representing portfolio performance and market trends
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const portfolioData = [100, 102.5, 98.2, 105.1, 108.7, 112.3, 109.8, 115.2, 118.9, 122.1, 119.7, 125.4];
  const marketData = [100, 101.2, 96.8, 103.5, 106.2, 108.9, 105.7, 111.3, 114.8, 117.2, 113.9, 119.6];
  const securityScore = [95, 96, 97, 98, 97, 98, 99, 99, 98, 99, 99, 100];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Portfolio Performance',
        data: portfolioData,
        borderColor: 'rgb(212, 175, 55)', // gold
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(212, 175, 55)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Market Benchmark',
        data: marketData,
        borderColor: 'rgb(30, 58, 138)', // navy
        backgroundColor: 'rgba(30, 58, 138, 0.1)',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: 'rgb(30, 58, 138)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 3,
        borderDash: [5, 5],
      },
      {
        label: 'Security Score',
        data: securityScore,
        borderColor: 'rgb(34, 197, 94)', // green
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: 'rgb(34, 197, 94)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 3,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: 'rgb(30, 58, 138)',
        bodyColor: 'rgb(75, 85, 99)',
        borderColor: 'rgb(212, 175, 55)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            size: 11,
          },
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Performance (%)',
          color: 'rgb(107, 114, 128)',
          font: {
            size: 12,
          },
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            size: 11,
          },
          callback: function(value: any) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Security Score (%)',
          color: 'rgb(107, 114, 128)',
          font: {
            size: 12,
          },
        },
        min: 90,
        max: 100,
      },
    },
  };

  // Calculate performance metrics
  const currentPerformance = portfolioData[portfolioData.length - 1];
  const previousPerformance = portfolioData[portfolioData.length - 2];
  const performanceChange = currentPerformance - previousPerformance;
  const isPositive = performanceChange > 0;

  const currentSecurity = securityScore[securityScore.length - 1];
  const ytdReturn = ((currentPerformance - 100) / 100) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-navy/10 p-2 rounded-lg">
            <BarChart3 className="text-navy" size={24} />
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-navy">Portfolio Performance & Security</h3>
            <p className="text-charcoal/70 text-sm">Year-to-date performance with security metrics</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="text-right">
            <div className="text-xs text-charcoal/70">YTD Return</div>
            <div className={`text-lg font-bold ${ytdReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {ytdReturn >= 0 ? '+' : ''}{ytdReturn.toFixed(1)}%
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-charcoal/70">Security Score</div>
            <div className="text-lg font-bold text-green-600">
              {currentSecurity}%
            </div>
          </div>
        </div>
      </div>

      <div className="h-80 mb-6">
        <Line data={data} options={options} />
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gold/10 to-gold/5 p-4 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="text-gold" size={16} />
            <span className="text-sm font-medium text-charcoal/80">Current Value</span>
          </div>
          <div className="text-xl font-bold text-navy">${currentPerformance.toFixed(1)}K</div>
          <div className={`text-xs flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? '+' : ''}{performanceChange.toFixed(1)}% this month
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-navy/10 to-navy/5 p-4 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-navy" size={16} />
            <span className="text-sm font-medium text-charcoal/80">Outperformance</span>
          </div>
          <div className="text-xl font-bold text-navy">+{(currentPerformance - marketData[marketData.length - 1]).toFixed(1)}%</div>
          <div className="text-xs text-charcoal/70">vs. market benchmark</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-4 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-600" size={16} />
            <span className="text-sm font-medium text-charcoal/80">Risk Score</span>
          </div>
          <div className="text-xl font-bold text-navy">Low</div>
          <div className="text-xs text-green-600">Optimal risk-adjusted returns</div>
        </motion.div>
      </div>
    </div>
  );
}