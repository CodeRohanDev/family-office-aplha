'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Brain, Cloud, Code, Smartphone, Database, Lock } from 'lucide-react';

export default function TechnologyInnovationDashboard() {
  const techStack = [
    {
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT'],
      maturity: 92,
      investment: '$2.1M',
      icon: Brain,
      color: '#7C3AED',
      applications: ['Risk Analysis', 'Fraud Detection', 'Portfolio Optimization', 'Client Insights']
    },
    {
      category: 'Cloud Infrastructure',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
      maturity: 95,
      investment: '$1.8M',
      icon: Cloud,
      color: '#1E3A8A',
      applications: ['Scalable Computing', 'Data Storage', 'Disaster Recovery', 'Global Access']
    },
    {
      category: 'Cybersecurity',
      technologies: ['Zero Trust', 'SIEM', 'EDR', 'Multi-factor Auth'],
      maturity: 98,
      investment: '$3.2M',
      icon: Lock,
      color: '#DC2626',
      applications: ['Threat Detection', 'Identity Management', 'Data Protection', 'Compliance']
    },
    {
      category: 'Data Analytics',
      technologies: ['Apache Spark', 'Tableau', 'Power BI', 'Elasticsearch'],
      maturity: 89,
      investment: '$1.5M',
      icon: Database,
      color: '#059669',
      applications: ['Real-time Analytics', 'Reporting', 'Data Visualization', 'Business Intelligence']
    }
  ];

  const innovationMetrics = [
    { metric: 'R&D Investment', value: '$8.6M', change: '+15%', period: 'Annual' },
    { metric: 'Tech Patents', value: '12', change: '+3', period: 'Filed' },
    { metric: 'System Uptime', value: '99.99%', change: '+0.01%', period: 'YTD' },
    { metric: 'API Response Time', value: '<50ms', change: '-10ms', period: 'Avg' }
  ];

  const developmentPipeline = [
    {
      project: 'Quantum-Safe Encryption',
      phase: 'Research',
      progress: 25,
      timeline: 'Q4 2024',
      priority: 'High',
      description: 'Post-quantum cryptography implementation'
    },
    {
      project: 'AI Risk Modeling 2.0',
      phase: 'Development',
      progress: 67,
      timeline: 'Q2 2024',
      priority: 'Critical',
      description: 'Advanced ML models for portfolio risk assessment'
    },
    {
      project: 'Blockchain Integration',
      phase: 'Testing',
      progress: 85,
      timeline: 'Q1 2024',
      priority: 'Medium',
      description: 'Distributed ledger for transaction verification'
    },
    {
      project: 'Mobile App 3.0',
      phase: 'Deployment',
      progress: 95,
      timeline: 'Q1 2024',
      priority: 'High',
      description: 'Next-generation mobile client platform'
    }
  ];

  const systemPerformance = [
    { system: 'Trading Platform', cpu: 23, memory: 45, network: 12, status: 'optimal' },
    { system: 'Risk Engine', cpu: 67, memory: 78, network: 34, status: 'normal' },
    { system: 'Data Warehouse', cpu: 45, memory: 62, network: 89, status: 'normal' },
    { system: 'Security Gateway', cpu: 34, memory: 41, network: 23, status: 'optimal' },
    { system: 'Client Portal', cpu: 28, memory: 35, network: 45, status: 'optimal' },
    { system: 'Analytics Engine', cpu: 56, memory: 67, network: 43, status: 'normal' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-600 bg-green-50';
      case 'normal': return 'text-blue-600 bg-blue-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-red-600 bg-red-50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-blue-600 bg-blue-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Cpu className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Technology Innovation Dashboard</h3>
          <p className="text-charcoal/70 text-sm">Advanced technology stack and innovation pipeline</p>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-navy mb-4">Technology Stack Maturity</h4>
          <div className="space-y-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <tech.icon 
                        className="text-current" 
                        style={{ color: tech.color }}
                        size={20} 
                      />
                    </div>
                    <h5 className="font-semibold text-navy">{tech.category}</h5>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-lg font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.maturity}%
                    </div>
                    <div className="text-xs text-charcoal/70">{tech.investment}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.maturity}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {tech.technologies.map((technology, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-charcoal text-xs rounded"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-charcoal/70">
                  Applications: {tech.applications.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="space-y-4">
          <h4 className="font-semibold text-navy">Real-time System Performance</h4>
          <div className="bg-gradient-to-br from-navy/5 to-blue/5 p-4 rounded-xl">
            <div className="space-y-3">
              {systemPerformance.map((system, index) => (
                <motion.div
                  key={system.system}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-charcoal">{system.system}</div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(system.status)}`}>
                      {system.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-charcoal/70">CPU</div>
                      <div className="flex items-center gap-1">
                        <div className="w-8 bg-gray-200 rounded-full h-1">
                          <motion.div
                            className={`h-1 rounded-full ${
                              system.cpu > 80 ? 'bg-red-500' :
                              system.cpu > 60 ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${system.cpu}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="font-medium">{system.cpu}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-charcoal/70">Memory</div>
                      <div className="flex items-center gap-1">
                        <div className="w-8 bg-gray-200 rounded-full h-1">
                          <motion.div
                            className={`h-1 rounded-full ${
                              system.memory > 80 ? 'bg-red-500' :
                              system.memory > 60 ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${system.memory}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
                          />
                        </div>
                        <span className="font-medium">{system.memory}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-charcoal/70">Network</div>
                      <div className="flex items-center gap-1">
                        <div className="w-8 bg-gray-200 rounded-full h-1">
                          <motion.div
                            className={`h-1 rounded-full ${
                              system.network > 80 ? 'bg-red-500' :
                              system.network > 60 ? 'bg-yellow-500' : 'bg-green-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${system.network}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                          />
                        </div>
                        <span className="font-medium">{system.network}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Innovation Metrics */}
          <div className="bg-gradient-to-br from-gold/10 to-purple/10 p-4 rounded-xl">
            <h5 className="font-semibold text-navy mb-3">Innovation Metrics</h5>
            <div className="grid grid-cols-2 gap-3">
              {innovationMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-3 bg-white rounded-lg"
                >
                  <div className="text-lg font-bold text-navy">{metric.value}</div>
                  <div className="text-xs text-charcoal/70 mb-1">{metric.metric}</div>
                  <div className={`text-xs font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {metric.change} {metric.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Development Pipeline */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-purple/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Code size={16} />
          Innovation Pipeline
        </h4>
        <div className="space-y-3">
          {developmentPipeline.map((project, index) => (
            <motion.div
              key={project.project}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white rounded-xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h5 className="font-semibold text-navy">{project.project}</h5>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 mb-2">{project.description}</p>
                  <div className="flex items-center gap-4 text-xs text-charcoal/60">
                    <span>Phase: {project.phase}</span>
                    <span>Timeline: {project.timeline}</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-lg font-bold text-navy">{project.progress}%</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${
                    project.progress >= 90 ? 'bg-green-500' :
                    project.progress >= 70 ? 'bg-blue-500' :
                    project.progress >= 50 ? 'bg-yellow-500' : 'bg-orange-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl"
        >
          <Brain className="text-purple-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-purple-600">4</div>
          <div className="text-xs text-purple-700">AI Models</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <Zap className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">99.99%</div>
          <div className="text-xs text-blue-700">Uptime</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Smartphone className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">&lt;50ms</div>
          <div className="text-xs text-green-700">Response Time</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Database className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">$8.6M</div>
          <div className="text-xs text-gold/80">R&D Investment</div>
        </motion.div>
      </div>
    </div>
  );
}