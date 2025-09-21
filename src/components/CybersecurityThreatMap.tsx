'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Eye, Zap, Lock, Activity } from 'lucide-react';

export default function CybersecurityThreatMap() {
  const threatCategories = [
    {
      name: 'Phishing Attempts',
      blocked: 1247,
      severity: 'High',
      trend: '+12%',
      color: '#DC2626',
      description: 'Email-based social engineering attacks'
    },
    {
      name: 'Malware Detection',
      blocked: 89,
      severity: 'Critical',
      trend: '-23%',
      color: '#7C2D12',
      description: 'Malicious software and ransomware'
    },
    {
      name: 'Unauthorized Access',
      blocked: 156,
      severity: 'High',
      trend: '-8%',
      color: '#EA580C',
      description: 'Failed login and access attempts'
    },
    {
      name: 'Data Exfiltration',
      blocked: 23,
      severity: 'Critical',
      trend: '-45%',
      color: '#991B1B',
      description: 'Attempts to steal sensitive data'
    },
    {
      name: 'Network Intrusion',
      blocked: 67,
      severity: 'Medium',
      trend: '+5%',
      color: '#F59E0B',
      description: 'Network penetration attempts'
    },
    {
      name: 'DDoS Attacks',
      blocked: 34,
      severity: 'Medium',
      trend: '-15%',
      color: '#D97706',
      description: 'Distributed denial of service'
    }
  ];

  const securityLayers = [
    { name: 'Perimeter Defense', status: 'Active', effectiveness: 98, threats: 892 },
    { name: 'Email Security', status: 'Active', effectiveness: 99, threats: 1247 },
    { name: 'Endpoint Protection', status: 'Active', effectiveness: 97, threats: 234 },
    { name: 'Network Monitoring', status: 'Active', effectiveness: 96, threats: 156 },
    { name: 'Data Loss Prevention', status: 'Active', effectiveness: 100, threats: 23 },
    { name: 'Identity Management', status: 'Active', effectiveness: 99, threats: 89 }
  ];

  const realtimeAlerts = [
    { time: '14:23', type: 'Blocked', threat: 'Phishing email to CFO', severity: 'High' },
    { time: '14:18', type: 'Detected', threat: 'Suspicious file download', severity: 'Medium' },
    { time: '14:12', type: 'Prevented', threat: 'Unauthorized API access', severity: 'High' },
    { time: '14:07', type: 'Quarantined', threat: 'Malicious attachment', severity: 'Critical' },
    { time: '14:02', type: 'Blocked', threat: 'Brute force login attempt', severity: 'Medium' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'Blocked': return 'text-red-600 bg-red-50';
      case 'Prevented': return 'text-orange-600 bg-orange-50';
      case 'Detected': return 'text-yellow-600 bg-yellow-50';
      case 'Quarantined': return 'text-purple-600 bg-purple-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Shield className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Cybersecurity Threat Intelligence</h3>
          <p className="text-charcoal/70 text-sm">Real-time threat detection and prevention analytics</p>
        </div>
      </div>

      {/* Threat Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Threat Categories */}
        <div>
          <h4 className="font-semibold text-navy mb-4">Threat Categories (Last 24h)</h4>
          <div className="space-y-3">
            {threatCategories.map((threat, index) => (
              <motion.div
                key={threat.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <AlertTriangle 
                      className="text-red-500" 
                      size={16}
                    />
                    <h5 className="font-semibold text-navy">{threat.name}</h5>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-navy">{threat.blocked}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-charcoal/70 mb-3">{threat.description}</p>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: threat.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((threat.blocked / 1500) * 100, 100)}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  <div className={`text-xs font-medium ${
                    threat.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {threat.trend}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Layers */}
        <div className="space-y-4">
          <h4 className="font-semibold text-navy">Defense Layer Status</h4>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl">
            <div className="space-y-3">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      layer.effectiveness >= 98 ? 'bg-green-500' :
                      layer.effectiveness >= 95 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <div className="font-medium text-charcoal">{layer.name}</div>
                      <div className="text-xs text-charcoal/70">{layer.threats} threats blocked</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      layer.effectiveness >= 98 ? 'text-green-600' :
                      layer.effectiveness >= 95 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {layer.effectiveness}%
                    </div>
                    <div className="text-xs text-green-600">{layer.status}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Real-time Alerts */}
          <div>
            <h4 className="font-semibold text-navy mb-3">Real-time Security Feed</h4>
            <div className="bg-gradient-to-br from-navy/5 to-red/5 p-4 rounded-xl max-h-64 overflow-y-auto">
              <div className="space-y-2">
                {realtimeAlerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-2 bg-white rounded-lg text-sm"
                  >
                    <div className="text-xs text-charcoal/60 min-w-fit">{alert.time}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getActionColor(alert.type)}`}>
                          {alert.type}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <div className="text-charcoal/80">{alert.threat}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Map Visualization */}
      <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Eye size={16} />
          Threat Intensity Heatmap
        </h4>
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 84 }, (_, i) => {
            const intensity = Math.random();
            return (
              <motion.div
                key={i}
                className={`h-4 rounded-sm ${
                  intensity > 0.8 ? 'bg-red-600' :
                  intensity > 0.6 ? 'bg-red-400' :
                  intensity > 0.4 ? 'bg-orange-400' :
                  intensity > 0.2 ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.01 }}
                title={`Threat level: ${Math.round(intensity * 100)}%`}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-charcoal/70">
          <span>Low Risk</span>
          <span>High Risk</span>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-red-50 to-red-100 rounded-xl"
        >
          <Shield className="text-red-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-red-600">2,641</div>
          <div className="text-xs text-red-700">Threats Blocked</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Lock className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">100%</div>
          <div className="text-xs text-green-700">Success Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <Activity className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">24/7</div>
          <div className="text-xs text-blue-700">Monitoring</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Zap className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">&lt;1s</div>
          <div className="text-xs text-gold/80">Response Time</div>
        </motion.div>
      </div>
    </div>
  );
}