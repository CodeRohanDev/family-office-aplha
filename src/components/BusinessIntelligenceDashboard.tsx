'use client';

import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Users, DollarSign, Target, Zap, Award } from 'lucide-react';

export default function BusinessIntelligenceDashboard() {
  const businessMetrics = [
    {
      category: 'Revenue Analytics',
      kpis: [
        { name: 'Total Revenue', value: '$24.8M', change: '+18%', target: '$25M', status: 'on-track' },
        { name: 'Recurring Revenue', value: '$21.2M', change: '+22%', target: '$20M', status: 'exceeds' },
        { name: 'Revenue per Client', value: '$476K', change: '+12%', target: '$450K', status: 'exceeds' },
        { name: 'Revenue Growth Rate', value: '18.3%', change: '+2.1%', target: '15%', status: 'exceeds' }
      ],
      color: '#1E3A8A'
    },
    {
      category: 'Client Metrics',
      kpis: [
        { name: 'Client Acquisition', value: '8', change: '+60%', target: '6', status: 'exceeds' },
        { name: 'Client Retention', value: '98%', change: '+1%', target: '95%', status: 'exceeds' },
        { name: 'Lifetime Value', value: '$8.2M', change: '+15%', target: '$7.5M', status: 'exceeds' },
        { name: 'Acquisition Cost', value: '$125K', change: '-8%', target: '$150K', status: 'exceeds' }
      ],
      color: '#059669'
    },
    {
      category: 'Operational Excellence',
      kpis: [
        { name: 'Profit Margin', value: '42%', change: '+3%', target: '40%', status: 'exceeds' },
        { name: 'Operating Efficiency', value: '94%', change: '+5%', target: '90%', status: 'exceeds' },
        { name: 'Cost per Client', value: '$89K', change: '-12%', target: '$95K', status: 'exceeds' },
        { name: 'Employee Productivity', value: '127%', change: '+8%', target: '120%', status: 'exceeds' }
      ],
      color: '#D4AF37'
    }
  ];

  const revenueBreakdown = [
    { service: 'Wealth Management', revenue: 14.8, percentage: 60, growth: '+15%' },
    { service: 'Cybersecurity Advisory', revenue: 6.2, percentage: 25, growth: '+28%' },
    { service: 'Family Office Setup', revenue: 2.5, percentage: 10, growth: '+12%' },
    { service: 'Technology Services', revenue: 1.3, percentage: 5, growth: '+45%' }
  ];

  const clientSegmentation = [
    {
      segment: 'Ultra High Net Worth',
      clients: 28,
      aum: 1680,
      avgRevenue: 580,
      satisfaction: 98,
      color: '#7C2D12'
    },
    {
      segment: 'High Net Worth',
      clients: 18,
      aum: 360,
      avgRevenue: 420,
      satisfaction: 96,
      color: '#1E40AF'
    },
    {
      segment: 'Emerging Wealth',
      clients: 6,
      aum: 60,
      avgRevenue: 280,
      satisfaction: 94,
      color: '#059669'
    }
  ];

  const predictiveAnalytics = [
    {
      metric: 'Revenue Forecast (Q4)',
      prediction: '$7.2M',
      confidence: 92,
      trend: 'up',
      factors: ['Seasonal patterns', 'New client pipeline', 'Service expansion']
    },
    {
      metric: 'Client Churn Risk',
      prediction: '1.2%',
      confidence: 88,
      trend: 'down',
      factors: ['Satisfaction scores', 'Engagement levels', 'Market conditions']
    },
    {
      metric: 'Market Opportunity',
      prediction: '$45M',
      confidence: 85,
      trend: 'up',
      factors: ['Market growth', 'Competitive analysis', 'Service demand']
    }
  ];

  const competitiveAnalysis = [
    { metric: 'Market Share', our: 12, competitor: 8, industry: 100 },
    { metric: 'Client Satisfaction', our: 96, competitor: 87, industry: 82 },
    { metric: 'Service Quality', our: 94, competitor: 89, industry: 78 },
    { metric: 'Innovation Index', our: 91, competitor: 76, industry: 68 },
    { metric: 'Cost Efficiency', our: 88, competitor: 82, industry: 75 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exceeds': return 'text-green-600 bg-green-50';
      case 'on-track': return 'text-blue-600 bg-blue-50';
      case 'at-risk': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-red-600 bg-red-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'exceeds': return '↗️';
      case 'on-track': return '➡️';
      case 'at-risk': return '⚠️';
      default: return '⬇️';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <BarChart3 className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Business Intelligence Dashboard</h3>
          <p className="text-charcoal/70 text-sm">Comprehensive business analytics and predictive insights</p>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {businessMetrics.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-4 border border-gray-200 rounded-xl"
          >
            <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              ></div>
              {category.category}
            </h4>
            
            <div className="space-y-3">
              {category.kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-charcoal">{kpi.name}</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(kpi.status)}`}>
                      {getStatusIcon(kpi.status)} {kpi.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-navy">{kpi.value}</div>
                      <div className="text-xs text-charcoal/70">Target: {kpi.target}</div>
                    </div>
                    <div className={`text-sm font-medium ${
                      kpi.change.startsWith('+') ? 'text-green-600' : 
                      kpi.change.startsWith('-') && kpi.name.includes('Cost') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue & Client Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Breakdown */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <PieChart size={16} />
            Revenue by Service Line
          </h4>
          <div className="space-y-3">
            {revenueBreakdown.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium text-charcoal">{service.service}</div>
                  <div className="text-sm text-charcoal/70">${service.revenue}M ({service.percentage}%)</div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-medium text-sm">{service.growth}</div>
                  <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                    <motion.div
                      className="h-2 bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${service.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Segmentation */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Users size={16} />
            Client Segmentation Analysis
          </h4>
          <div className="space-y-3">
            {clientSegmentation.map((segment, index) => (
              <motion.div
                key={segment.segment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-3 bg-white rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    ></div>
                    <span className="font-medium text-charcoal">{segment.segment}</span>
                  </div>
                  <div className="text-sm font-bold text-navy">{segment.clients} clients</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-charcoal/70">AUM</div>
                    <div className="font-bold text-navy">${segment.aum}M</div>
                  </div>
                  <div>
                    <div className="text-charcoal/70">Avg Revenue</div>
                    <div className="font-bold text-navy">${segment.avgRevenue}K</div>
                  </div>
                  <div>
                    <div className="text-charcoal/70">Satisfaction</div>
                    <div className="font-bold text-green-600">{segment.satisfaction}%</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Target size={16} />
          Predictive Analytics & Forecasting
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {predictiveAnalytics.map((prediction, index) => (
            <motion.div
              key={prediction.metric}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-navy">{prediction.metric}</h5>
                {prediction.trend === 'up' ? (
                  <TrendingUp className="text-green-600" size={16} />
                ) : (
                  <TrendingUp className="text-red-600 rotate-180" size={16} />
                )}
              </div>
              
              <div className="text-2xl font-bold text-navy mb-2">{prediction.prediction}</div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-charcoal/70">Confidence:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.confidence}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                <span className="text-sm font-bold text-navy">{prediction.confidence}%</span>
              </div>
              
              <div className="space-y-1">
                {prediction.factors.map((factor, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/70">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Award size={16} />
          Competitive Benchmarking
        </h4>
        <div className="space-y-3">
          {competitiveAnalysis.map((metric, index) => (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-white rounded-lg"
            >
              <div className="font-medium text-charcoal w-1/4">{metric.metric}</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-charcoal/70 w-12">Us</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-navy rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.our}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-bold text-navy w-8">{metric.our}</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-charcoal/70 w-12">Comp</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-red-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.competitor}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-charcoal w-8">{metric.competitor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <DollarSign className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">$24.8M</div>
          <div className="text-xs text-blue-700">Annual Revenue</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <TrendingUp className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">18.3%</div>
          <div className="text-xs text-green-700">Growth Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Users className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">52</div>
          <div className="text-xs text-gold/80">Total Clients</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <Zap className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">94%</div>
          <div className="text-xs text-navy/80">Efficiency</div>
        </motion.div>
      </div>
    </div>
  );
}