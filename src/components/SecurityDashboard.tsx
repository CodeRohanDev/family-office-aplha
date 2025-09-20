'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, AlertTriangle, CheckCircle, Activity, Wifi } from 'lucide-react';

export default function SecurityDashboard() {
  const securityMetrics = [
    { label: 'Threat Detection', value: 99.9, color: 'bg-green-500', icon: Eye },
    { label: 'Data Encryption', value: 100, color: 'bg-blue-500', icon: Lock },
    { label: 'Network Security', value: 98.7, color: 'bg-purple-500', icon: Wifi },
    { label: 'Access Control', value: 100, color: 'bg-gold', icon: Shield },
  ];

  const threatLevels = [
    { type: 'Critical', count: 0, color: 'bg-red-500' },
    { type: 'High', count: 2, color: 'bg-orange-500' },
    { type: 'Medium', count: 5, color: 'bg-yellow-500' },
    { type: 'Low', count: 12, color: 'bg-green-500' },
  ];

  const recentActivity = [
    { time: '2 min ago', event: 'Security scan completed', status: 'success' },
    { time: '15 min ago', event: 'Firewall rule updated', status: 'info' },
    { time: '1 hour ago', event: 'Access granted to new device', status: 'warning' },
    { time: '3 hours ago', event: 'Backup verification successful', status: 'success' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Shield className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Security Operations Center</h3>
          <p className="text-charcoal/70 text-sm">Real-time cybersecurity monitoring dashboard</p>
        </div>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {securityMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border"
          >
            <div className="flex items-center justify-between mb-3">
              <metric.icon className="text-charcoal/60" size={20} />
              <div className="text-right">
                <div className="text-lg font-bold text-navy">{metric.value}%</div>
              </div>
            </div>
            <div className="text-xs font-medium text-charcoal/70 mb-2">{metric.label}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${metric.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Level Distribution */}
        <div className="bg-gradient-to-br from-navy/5 to-transparent p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <AlertTriangle size={16} />
            Threat Level Distribution
          </h4>
          <div className="space-y-3">
            {threatLevels.map((threat, index) => (
              <motion.div
                key={threat.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${threat.color}`}></div>
                  <span className="text-sm font-medium text-charcoal">{threat.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-navy">{threat.count}</span>
                  <div className="w-16 bg-gray-200 rounded-full h-1.5">
                    <motion.div
                      className={`h-1.5 rounded-full ${threat.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(threat.count / 20) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-gold/5 to-transparent p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
            <Activity size={16} />
            Recent Security Activity
          </h4>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-charcoal">{activity.event}</div>
                  <div className="text-xs text-charcoal/60">{activity.time}</div>
                </div>
                {activity.status === 'success' && <CheckCircle className="text-green-500" size={14} />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}