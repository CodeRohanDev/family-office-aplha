'use client';

import { motion } from 'framer-motion';
import { Gauge, AlertTriangle, Shield, TrendingDown } from 'lucide-react';

export default function RiskMetricsGauge() {
  const riskMetrics = [
    { 
      name: 'Portfolio Risk', 
      value: 25, 
      max: 100, 
      color: '#059669', 
      status: 'Low',
      description: 'Overall portfolio risk level'
    },
    { 
      name: 'Volatility', 
      value: 12, 
      max: 30, 
      color: '#D4AF37', 
      status: 'Moderate',
      description: 'Price movement volatility'
    },
    { 
      name: 'Drawdown Risk', 
      value: 8, 
      max: 25, 
      color: '#1E3A8A', 
      status: 'Low',
      description: 'Maximum potential loss'
    },
  ];

  const securityMetrics = [
    { label: 'Cyber Threats Blocked', value: '99.9%', trend: 'up', color: 'text-green-600' },
    { label: 'System Uptime', value: '99.99%', trend: 'stable', color: 'text-blue-600' },
    { label: 'Data Encryption', value: '100%', trend: 'stable', color: 'text-navy' },
    { label: 'Compliance Score', value: '100%', trend: 'up', color: 'text-green-600' },
  ];

  const createGaugePath = (value: number, max: number) => {
    const percentage = (value / max) * 100;
    const angle = (percentage / 100) * 180; // Half circle
    const radians = (angle * Math.PI) / 180;
    
    const centerX = 60;
    const centerY = 60;
    const radius = 45;
    
    const x = centerX + radius * Math.cos(Math.PI - radians);
    const y = centerY - radius * Math.sin(Math.PI - radians);
    
    const largeArcFlag = angle > 90 ? 1 : 0;
    
    return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}`;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Gauge className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Risk & Security Metrics</h3>
          <p className="text-charcoal/70 text-sm">Real-time risk assessment and security monitoring</p>
        </div>
      </div>

      {/* Risk Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {riskMetrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center p-4 bg-gradient-to-b from-gray-50 to-white rounded-xl border"
          >
            <div className="relative mb-4">
              <svg width="120" height="80" className="mx-auto">
                {/* Background arc */}
                <path
                  d="M 15 60 A 45 45 0 0 1 105 60"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                
                {/* Progress arc */}
                <motion.path
                  d={createGaugePath(metric.value, metric.max)}
                  fill="none"
                  stroke={metric.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                />
                
                {/* Center value */}
                <text x="60" y="45" textAnchor="middle" className="text-lg font-bold fill-navy">
                  {metric.value}
                </text>
                <text x="60" y="60" textAnchor="middle" className="text-xs fill-charcoal/70">
                  {metric.status}
                </text>
              </svg>
            </div>
            
            <h4 className="font-semibold text-navy mb-1">{metric.name}</h4>
            <p className="text-xs text-charcoal/70">{metric.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {securityMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 bg-gradient-to-br from-navy/5 to-gold/5 rounded-xl text-center"
          >
            <div className={`text-xl font-bold ${metric.color} mb-1`}>
              {metric.value}
            </div>
            <div className="text-xs text-charcoal/70 mb-2">{metric.label}</div>
            <div className="flex items-center justify-center gap-1">
              {metric.trend === 'up' && <TrendingDown className="text-green-500 rotate-180" size={10} />}
              {metric.trend === 'stable' && <Shield className="text-blue-500" size={10} />}
              <span className="text-xs text-charcoal/60">
                {metric.trend === 'up' ? 'Improving' : 'Stable'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Risk Assessment Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <Shield className="text-green-600" size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-navy mb-2">Risk Assessment Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-charcoal mb-1">Portfolio Health</div>
                <div className="text-charcoal/70">
                  • Low overall risk profile with optimal diversification<br/>
                  • Controlled volatility within target parameters<br/>
                  • Strong downside protection mechanisms
                </div>
              </div>
              <div>
                <div className="font-medium text-charcoal mb-1">Security Status</div>
                <div className="text-charcoal/70">
                  • All systems operating at maximum security levels<br/>
                  • Zero critical vulnerabilities detected<br/>
                  • Continuous monitoring and threat prevention active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}