'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertCircle, Clock, Award, FileCheck } from 'lucide-react';

export default function ComplianceMatrix() {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      score: 100,
      lastAudit: '2024-Q1',
      nextAudit: '2024-Q4',
      description: 'Security, availability, and confidentiality controls',
      controls: ['Access Controls', 'System Operations', 'Change Management', 'Risk Mitigation']
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      score: 98,
      lastAudit: '2023-Q4',
      nextAudit: '2024-Q2',
      description: 'Information security management system',
      controls: ['Risk Assessment', 'Security Policies', 'Incident Response', 'Business Continuity']
    },
    {
      name: 'NIST Framework',
      status: 'Compliant',
      score: 96,
      lastAudit: '2024-Q1',
      nextAudit: '2024-Q3',
      description: 'Cybersecurity framework implementation',
      controls: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover']
    },
    {
      name: 'SEC Regulations',
      status: 'Compliant',
      score: 100,
      lastAudit: '2024-Q1',
      nextAudit: '2024-Q4',
      description: 'Investment advisor regulatory compliance',
      controls: ['Client Protection', 'Record Keeping', 'Disclosure', 'Fiduciary Duty']
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      score: 94,
      lastAudit: '2023-Q4',
      nextAudit: '2024-Q2',
      description: 'Data protection and privacy regulation',
      controls: ['Data Minimization', 'Consent Management', 'Right to Erasure', 'Data Portability']
    },
    {
      name: 'PCI DSS',
      status: 'Certified',
      score: 100,
      lastAudit: '2024-Q1',
      nextAudit: '2024-Q4',
      description: 'Payment card industry data security',
      controls: ['Secure Network', 'Cardholder Data', 'Vulnerability Management', 'Access Control']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified': return 'text-green-600 bg-green-50';
      case 'Compliant': return 'text-blue-600 bg-blue-50';
      case 'In Progress': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 98) return 'text-green-600';
    if (score >= 90) return 'text-blue-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const overallCompliance = Math.round(
    complianceFrameworks.reduce((sum, framework) => sum + framework.score, 0) / complianceFrameworks.length
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <FileCheck className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Compliance & Certification Matrix</h3>
          <p className="text-charcoal/70 text-sm">Comprehensive regulatory compliance and security certifications</p>
        </div>
      </div>

      {/* Overall Compliance Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Award className="text-gold" size={24} />
          <h4 className="font-semibold text-navy">Overall Compliance Score</h4>
        </div>
        <div className="text-3xl font-bold text-green-600 mb-1">{overallCompliance}%</div>
        <div className="text-sm text-charcoal/70">Across all regulatory frameworks</div>
      </motion.div>

      {/* Compliance Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {complianceFrameworks.map((framework, index) => (
          <motion.div
            key={framework.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h5 className="font-semibold text-navy mb-1">{framework.name}</h5>
                <p className="text-xs text-charcoal/70">{framework.description}</p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${getScoreColor(framework.score)}`}>
                  {framework.score}%
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                  {framework.status}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <motion.div
                className={`h-2 rounded-full ${
                  framework.score >= 98 ? 'bg-green-500' :
                  framework.score >= 90 ? 'bg-blue-500' :
                  framework.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${framework.score}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>

            {/* Audit Information */}
            <div className="flex items-center justify-between text-xs text-charcoal/60 mb-3">
              <div className="flex items-center gap-1">
                <CheckCircle size={12} />
                <span>Last: {framework.lastAudit}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>Next: {framework.nextAudit}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-1">
              {framework.controls.slice(0, 2).map((control, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 bg-gold rounded-full"></div>
                  <span className="text-charcoal/70">{control}</span>
                </div>
              ))}
              {framework.controls.length > 2 && (
                <div className="text-xs text-charcoal/50">
                  +{framework.controls.length - 2} more controls
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Compliance Timeline */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Clock size={16} />
          Upcoming Compliance Activities
        </h4>
        <div className="space-y-3">
          {[
            { date: '2024-Q2', activity: 'ISO 27001 Surveillance Audit', type: 'audit' },
            { date: '2024-Q3', activity: 'NIST Framework Assessment', type: 'assessment' },
            { date: '2024-Q4', activity: 'SOC 2 Type II Renewal', type: 'renewal' },
            { date: '2024-Q4', activity: 'SEC Regulatory Examination', type: 'examination' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-white rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  item.type === 'audit' ? 'bg-blue-500' :
                  item.type === 'assessment' ? 'bg-green-500' :
                  item.type === 'renewal' ? 'bg-gold' : 'bg-purple-500'
                }`}></div>
                <span className="font-medium text-charcoal">{item.activity}</span>
              </div>
              <span className="text-sm text-charcoal/70 font-medium">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-3 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Shield className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">6</div>
          <div className="text-xs text-green-700">Active Certifications</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-3 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <CheckCircle className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">100%</div>
          <div className="text-xs text-blue-700">Audit Pass Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-3 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Award className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">15+</div>
          <div className="text-xs text-gold/80">Years Compliant</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-3 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <FileCheck className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">0</div>
          <div className="text-xs text-navy/80">Violations</div>
        </motion.div>
      </div>
    </div>
  );
}