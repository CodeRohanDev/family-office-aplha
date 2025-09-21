'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, Target, TrendingUp, CheckCircle, AlertCircle, Settings, BarChart3 } from 'lucide-react';

export default function OperationalEfficiencyMatrix() {
  const efficiencyMetrics = [
    {
      department: 'Portfolio Management',
      efficiency: 94,
      automation: 87,
      accuracy: 98,
      speed: 92,
      cost: 'Low',
      trend: '+5%',
      color: '#1E3A8A',
      processes: [
        { name: 'Trade Execution', score: 96, automated: true },
        { name: 'Risk Assessment', score: 94, automated: true },
        { name: 'Reporting', score: 92, automated: true },
        { name: 'Compliance Check', score: 98, automated: true }
      ]
    },
    {
      department: 'Cybersecurity',
      efficiency: 98,
      automation: 95,
      accuracy: 99,
      speed: 96,
      cost: 'Medium',
      trend: '+3%',
      color: '#DC2626',
      processes: [
        { name: 'Threat Detection', score: 99, automated: true },
        { name: 'Incident Response', score: 97, automated: true },
        { name: 'Vulnerability Scan', score: 98, automated: true },
        { name: 'Access Control', score: 96, automated: false }
      ]
    },
    {
      department: 'Client Services',
      efficiency: 91,
      automation: 78,
      accuracy: 96,
      speed: 89,
      cost: 'Medium',
      trend: '+8%',
      color: '#059669',
      processes: [
        { name: 'Onboarding', score: 94, automated: true },
        { name: 'Support Tickets', score: 92, automated: true },
        { name: 'Reporting', score: 89, automated: true },
        { name: 'Relationship Mgmt', score: 88, automated: false }
      ]
    },
    {
      department: 'Operations',
      efficiency: 89,
      automation: 82,
      accuracy: 94,
      speed: 87,
      cost: 'Low',
      trend: '+12%',
      color: '#D4AF37',
      processes: [
        { name: 'Data Processing', score: 91, automated: true },
        { name: 'Reconciliation', score: 89, automated: true },
        { name: 'Backup & Recovery', score: 96, automated: true },
        { name: 'Quality Control', score: 85, automated: false }
      ]
    }
  ];

  const kpiMatrix = [
    { metric: 'Process Automation', current: 86, target: 90, benchmark: 75 },
    { metric: 'Error Rate', current: 0.02, target: 0.01, benchmark: 0.15, inverse: true },
    { metric: 'Response Time', current: 1.2, target: 1.0, benchmark: 2.5, inverse: true, unit: 'hrs' },
    { metric: 'Cost Efficiency', current: 94, target: 95, benchmark: 82 },
    { metric: 'Client Satisfaction', current: 96, target: 95, benchmark: 87 },
    { metric: 'Compliance Score', current: 99, target: 98, benchmark: 92 }
  ];

  const processFlow = [
    { step: 'Input', status: 'active', efficiency: 98, bottleneck: false },
    { step: 'Validation', status: 'active', efficiency: 94, bottleneck: false },
    { step: 'Processing', status: 'active', efficiency: 87, bottleneck: true },
    { step: 'Review', status: 'active', efficiency: 92, bottleneck: false },
    { step: 'Approval', status: 'active', efficiency: 89, bottleneck: true },
    { step: 'Output', status: 'active', efficiency: 96, bottleneck: false }
  ];

  const getPerformanceColor = (score: number) => {
    if (score >= 95) return 'text-green-600 bg-green-50';
    if (score >= 85) return 'text-blue-600 bg-blue-50';
    if (score >= 75) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getKPIStatus = (current: number, target: number, inverse = false) => {
    const ratio = inverse ? target / current : current / target;
    if (ratio >= 1) return 'exceeds';
    if (ratio >= 0.9) return 'meets';
    return 'below';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Settings className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Operational Efficiency Matrix</h3>
          <p className="text-charcoal/70 text-sm">Department performance and process optimization analytics</p>
        </div>
      </div>

      {/* Department Efficiency Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-navy mb-4">Department Performance</h4>
          <div className="space-y-4">
            {efficiencyMetrics.map((dept, index) => (
              <motion.div
                key={dept.department}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-navy">{dept.department}</h5>
                  <div className="flex items-center gap-2">
                    <div 
                      className="text-lg font-bold"
                      style={{ color: dept.color }}
                    >
                      {dept.efficiency}%
                    </div>
                    <div className="text-xs text-green-600 font-medium">{dept.trend}</div>
                  </div>
                </div>

                {/* Efficiency Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3 text-xs">
                  <div className="text-center">
                    <div className="text-charcoal/70">Auto</div>
                    <div className="font-bold text-navy">{dept.automation}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-charcoal/70">Accuracy</div>
                    <div className="font-bold text-navy">{dept.accuracy}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-charcoal/70">Speed</div>
                    <div className="font-bold text-navy">{dept.speed}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-charcoal/70">Cost</div>
                    <div className={`font-bold ${
                      dept.cost === 'Low' ? 'text-green-600' : 
                      dept.cost === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {dept.cost}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: dept.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${dept.efficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                {/* Process Breakdown */}
                <div className="space-y-1">
                  {dept.processes.map((process, idx) => (
                    <div key={process.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        {process.automated ? (
                          <Zap className="text-blue-500" size={10} />
                        ) : (
                          <Clock className="text-yellow-500" size={10} />
                        )}
                        <span className="text-charcoal/70">{process.name}</span>
                      </div>
                      <div className={`px-2 py-1 rounded ${getPerformanceColor(process.score)}`}>
                        {process.score}%
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* KPI Matrix */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4">Key Performance Indicators</h4>
            <div className="space-y-3">
              {kpiMatrix.map((kpi, index) => (
                <motion.div
                  key={kpi.metric}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-charcoal">{kpi.metric}</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      getKPIStatus(kpi.current, kpi.target, kpi.inverse) === 'exceeds' ? 'text-green-600 bg-green-50' :
                      getKPIStatus(kpi.current, kpi.target, kpi.inverse) === 'meets' ? 'text-blue-600 bg-blue-50' :
                      'text-yellow-600 bg-yellow-50'
                    }`}>
                      {getKPIStatus(kpi.current, kpi.target, kpi.inverse) === 'exceeds' ? 'Exceeds' :
                       getKPIStatus(kpi.current, kpi.target, kpi.inverse) === 'meets' ? 'Meets' : 'Below'}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-charcoal/70">Current: </span>
                        <span className="font-bold text-navy">
                          {kpi.current}{kpi.unit || '%'}
                        </span>
                      </div>
                      <div>
                        <span className="text-charcoal/70">Target: </span>
                        <span className="font-medium text-charcoal">
                          {kpi.target}{kpi.unit || '%'}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-charcoal/60">
                      Industry: {kpi.benchmark}{kpi.unit || '%'}
                    </div>
                  </div>

                  <div className="mt-2 flex gap-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="h-1.5 bg-navy rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((kpi.current / (kpi.inverse ? 1 : 100)) * 100, 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="h-1.5 bg-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((kpi.benchmark / (kpi.inverse ? 1 : 100)) * 100, 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
              <BarChart3 size={16} />
              Process Flow Analysis
            </h4>
            <div className="space-y-2">
              {processFlow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    step.bottleneck ? 'bg-yellow-100 border border-yellow-300' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium text-charcoal">{step.step}</span>
                    {step.bottleneck && (
                      <AlertCircle className="text-yellow-600" size={14} />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className={`h-1.5 rounded-full ${
                          step.efficiency >= 95 ? 'bg-green-500' :
                          step.efficiency >= 85 ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${step.efficiency}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    <span className="text-sm font-medium text-navy w-8">{step.efficiency}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
          <Target className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">93%</div>
          <div className="text-xs text-blue-700">Avg Efficiency</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Zap className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">86%</div>
          <div className="text-xs text-green-700">Automation</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <CheckCircle className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">97%</div>
          <div className="text-xs text-gold/80">Accuracy</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <TrendingUp className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">+7%</div>
          <div className="text-xs text-navy/80">Improvement</div>
        </motion.div>
      </div>
    </div>
  );
}