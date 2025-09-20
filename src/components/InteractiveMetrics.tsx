'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Globe, 
  DollarSign, 
  Award, 
  Activity,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

export default function InteractiveMetrics() {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs = [
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'global', label: 'Global Reach', icon: Globe },
  ];

  const metricsData = {
    performance: [
      { 
        title: 'Annual Returns', 
        value: '25.4%', 
        change: '+5.2%', 
        trend: 'up',
        description: 'Consistent outperformance vs benchmarks',
        details: ['Risk-adjusted returns: 1.8 Sharpe ratio', 'Maximum drawdown: -3.2%', 'Volatility: 8.4%']
      },
      { 
        title: 'Assets Under Management', 
        value: '$2.1B', 
        change: '+12.8%', 
        trend: 'up',
        description: 'Steady growth in client assets',
        details: ['Average account size: $42M', 'Organic growth: 85%', 'Client retention: 98%']
      },
      { 
        title: 'Alpha Generation', 
        value: '5.8%', 
        change: '+1.2%', 
        trend: 'up',
        description: 'Excess returns above market',
        details: ['3-year average alpha: 4.9%', 'Information ratio: 1.6', 'Tracking error: 3.2%']
      },
    ],
    security: [
      { 
        title: 'Security Score', 
        value: '100%', 
        change: '0%', 
        trend: 'stable',
        description: 'Perfect security track record',
        details: ['Zero breaches in 15+ years', 'SOC 2 Type II certified', '24/7 monitoring']
      },
      { 
        title: 'Threat Detection', 
        value: '99.9%', 
        change: '+0.1%', 
        trend: 'up',
        description: 'Advanced AI-powered detection',
        details: ['Real-time threat intelligence', 'Machine learning algorithms', 'Behavioral analysis']
      },
      { 
        title: 'Response Time', 
        value: '<2min', 
        change: '-30sec', 
        trend: 'up',
        description: 'Rapid incident response',
        details: ['Automated threat response', 'Expert security team', 'Incident playbooks']
      },
    ],
    clients: [
      { 
        title: 'Families Served', 
        value: '50+', 
        change: '+8', 
        trend: 'up',
        description: 'Ultra-high-net-worth families',
        details: ['Average relationship: 8+ years', 'Multi-generational service', 'Global presence']
      },
      { 
        title: 'Client Satisfaction', 
        value: '98%', 
        change: '+2%', 
        trend: 'up',
        description: 'Exceptional service delivery',
        details: ['Net Promoter Score: 85', 'Annual client reviews', 'Personalized service']
      },
      { 
        title: 'Retention Rate', 
        value: '98%', 
        change: '0%', 
        trend: 'stable',
        description: 'Long-term client relationships',
        details: ['Average tenure: 12+ years', 'Family office transitions', 'Generational planning']
      },
    ],
    global: [
      { 
        title: 'Countries Served', 
        value: '25+', 
        change: '+3', 
        trend: 'up',
        description: 'Worldwide family office services',
        details: ['North America: 60%', 'Europe: 25%', 'Asia-Pacific: 15%']
      },
      { 
        title: 'Jurisdictions', 
        value: '15+', 
        change: '+2', 
        trend: 'up',
        description: 'Multi-jurisdiction expertise',
        details: ['Tax optimization', 'Regulatory compliance', 'Cross-border structures']
      },
      { 
        title: 'Time Zones', 
        value: '24/7', 
        change: '0', 
        trend: 'stable',
        description: 'Round-the-clock coverage',
        details: ['Global support teams', 'Follow-the-sun model', 'Emergency response']
      },
    ],
  };

  const currentMetrics = metricsData[activeTab as keyof typeof metricsData];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Activity className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Interactive Analytics</h3>
          <p className="text-charcoal/70 text-sm">Explore key performance indicators across all dimensions</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-navy text-white shadow-md'
                : 'text-charcoal/70 hover:text-navy hover:bg-white'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Metrics Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {currentMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">
                      {metric.title}
                    </h4>
                    <ChevronRight 
                      className="text-charcoal/40 group-hover:text-gold group-hover:translate-x-1 transition-all" 
                      size={16} 
                    />
                  </div>
                  <p className="text-charcoal/70 text-sm mb-3">{metric.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-1">
                    {metric.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/60">
                        <div className="w-1 h-1 bg-gold rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-navy mb-1">{metric.value}</div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-charcoal/70'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp size={14} />}
                    {metric.trend === 'down' && <TrendingUp size={14} className="rotate-180" />}
                    {metric.trend === 'stable' && <Target size={14} />}
                    <span>{metric.change}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    className={`h-1.5 rounded-full ${
                      activeTab === 'performance' ? 'bg-gold' :
                      activeTab === 'security' ? 'bg-green-500' :
                      activeTab === 'clients' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-navy">15+</div>
            <div className="text-xs text-charcoal/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-navy">$2B+</div>
            <div className="text-xs text-charcoal/70">Assets Protected</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-navy">99.9%</div>
            <div className="text-xs text-charcoal/70">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-navy">24/7</div>
            <div className="text-xs text-charcoal/70">Support</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}