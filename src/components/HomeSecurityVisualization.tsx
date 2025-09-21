'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

export default function HomeSecurityVisualization() {
  const securityLayers = [
    { name: 'Perimeter', strength: 98, color: '#DC2626', size: 120 },
    { name: 'Network', strength: 96, color: '#EA580C', size: 100 },
    { name: 'Application', strength: 99, color: '#D97706', size: 80 },
    { name: 'Data', strength: 100, color: '#EAB308', size: 60 },
  ];

  const threats = [
    { id: 1, x: 15, y: 20, blocked: true },
    { id: 2, x: 85, y: 30, blocked: true },
    { id: 3, x: 25, y: 70, blocked: true },
    { id: 4, x: 75, y: 80, blocked: true },
    { id: 5, x: 50, y: 15, blocked: true },
    { id: 6, x: 90, y: 65, blocked: true },
  ];

  const stats = [
    { icon: Shield, value: '2,641', label: 'Threats Blocked', color: 'text-red-600' },
    { icon: Lock, value: '100%', label: 'Success Rate', color: 'text-green-600' },
    { icon: Eye, value: '24/7', label: 'Monitoring', color: 'text-blue-600' },
    { icon: Zap, value: '<1s', label: 'Response', color: 'text-gold' },
  ];

  return (
    <div className="bg-gradient-to-br from-navy to-charcoal text-white p-6 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="font-playfair text-2xl font-bold mb-2">
          Fortress-Level Security
        </h3>
        <p className="text-offWhite/80">Multi-layered protection for your digital assets</p>
      </div>

      {/* Security Visualization */}
      <div className="relative h-48 mb-6 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 200 150">
          {/* Security Layers */}
          {securityLayers.map((layer, index) => (
            <motion.g key={layer.name}>
              <motion.circle
                cx="100"
                cy="75"
                r={layer.size / 2}
                fill="none"
                stroke={layer.color}
                strokeWidth="3"
                strokeOpacity="0.6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
              <motion.circle
                cx="100"
                cy="75"
                r={layer.size / 2}
                fill={layer.color}
                fillOpacity="0.1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              />
            </motion.g>
          ))}

          {/* Core Asset */}
          <motion.circle
            cx="100"
            cy="75"
            r="15"
            fill="rgb(212, 175, 55)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          
          {/* Pulse animation */}
          <motion.circle
            cx="100"
            cy="75"
            r="15"
            fill="none"
            stroke="rgb(212, 175, 55)"
            strokeWidth="2"
            initial={{ r: 15, opacity: 1 }}
            animate={{ r: 25, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Threats */}
          {threats.map((threat, index) => (
            <motion.g key={threat.id}>
              {/* Threat indicator */}
              <motion.circle
                cx={threat.x * 2}
                cy={threat.y * 1.5}
                r="3"
                fill="#EF4444"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.5 }}
              />
              
              {/* Block animation */}
              <motion.line
                x1={threat.x * 2}
                y1={threat.y * 1.5}
                x2="100"
                y2="75"
                stroke="#EF4444"
                strokeWidth="1"
                strokeDasharray="2,2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0], 
                  opacity: [0, 0.6, 0.6, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  delay: index * 0.1 + 2,
                  times: [0, 0.3, 0.7, 1]
                }}
              />
              
              {/* Block effect */}
              <motion.circle
                cx={threat.x * 2 + (100 - threat.x * 2) * 0.7}
                cy={threat.y * 1.5 + (75 - threat.y * 1.5) * 0.7}
                r="4"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1], 
                  opacity: [0, 1, 1] 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 2.5 
                }}
              />
            </motion.g>
          ))}
        </svg>

        {/* Layer Labels */}
        <div className="absolute inset-0 pointer-events-none">
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="absolute text-xs font-medium"
              style={{
                left: `${50 + (layer.size / 4)}%`,
                top: `${50 - (index * 8)}%`,
                color: layer.color
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            >
              {layer.name} {layer.strength}%
            </motion.div>
          ))}
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
            className="text-center"
          >
            <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <stat.icon className={stat.color} size={18} />
            </div>
            <div className={`text-lg font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs text-offWhite/70">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}