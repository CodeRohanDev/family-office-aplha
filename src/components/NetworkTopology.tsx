'use client';

import { motion } from 'framer-motion';
import { Shield, Server, Globe, Lock, Eye, Zap } from 'lucide-react';

interface NetworkNode {
  id: string;
  x: number;
  y: number;
  type: 'core' | 'security' | 'endpoint' | 'cloud';
  label: string;
  icon: any;
  status: 'secure' | 'monitoring' | 'protected';
}

interface NetworkConnection {
  from: string;
  to: string;
  type: 'secure' | 'encrypted' | 'monitored';
}

export default function NetworkTopology() {
  const nodes: NetworkNode[] = [
    { id: 'core', x: 50, y: 50, type: 'core', label: 'Family Office Core', icon: Server, status: 'secure' },
    { id: 'security', x: 20, y: 30, type: 'security', label: 'Security Hub', icon: Shield, status: 'monitoring' },
    { id: 'cloud', x: 80, y: 30, type: 'cloud', label: 'Cloud Services', icon: Globe, status: 'protected' },
    { id: 'endpoint1', x: 20, y: 70, type: 'endpoint', label: 'Family Device', icon: Lock, status: 'secure' },
    { id: 'endpoint2', x: 50, y: 80, type: 'endpoint', label: 'Advisor Portal', icon: Eye, status: 'secure' },
    { id: 'endpoint3', x: 80, y: 70, type: 'endpoint', label: 'Mobile Access', icon: Zap, status: 'protected' },
  ];

  const connections: NetworkConnection[] = [
    { from: 'core', to: 'security', type: 'secure' },
    { from: 'core', to: 'cloud', type: 'encrypted' },
    { from: 'core', to: 'endpoint1', type: 'secure' },
    { from: 'core', to: 'endpoint2', type: 'monitored' },
    { from: 'core', to: 'endpoint3', type: 'encrypted' },
    { from: 'security', to: 'endpoint1', type: 'monitored' },
    { from: 'security', to: 'endpoint2', type: 'monitored' },
    { from: 'security', to: 'endpoint3', type: 'monitored' },
  ];

  const getNodeColor = (type: string, status: string) => {
    if (type === 'core') return 'bg-navy text-white';
    if (type === 'security') return 'bg-red-500 text-white';
    if (type === 'cloud') return 'bg-blue-500 text-white';
    if (status === 'secure') return 'bg-green-500 text-white';
    if (status === 'monitoring') return 'bg-yellow-500 text-white';
    return 'bg-gold text-navy';
  };

  const getConnectionColor = (type: string) => {
    if (type === 'secure') return 'stroke-green-500';
    if (type === 'encrypted') return 'stroke-blue-500';
    return 'stroke-yellow-500';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Shield className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Network Security Architecture</h3>
          <p className="text-charcoal/70 text-sm">Real-time security topology visualization</p>
        </div>
      </div>

      <div className="relative w-full h-80 bg-gradient-to-br from-navy/5 to-gold/5 rounded-xl overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Connections */}
          {connections.map((connection, index) => {
            const fromNode = nodes.find(n => n.id === connection.from);
            const toNode = nodes.find(n => n.id === connection.to);
            if (!fromNode || !toNode) return null;

            return (
              <motion.line
                key={`${connection.from}-${connection.to}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                className={`${getConnectionColor(connection.type)} stroke-2`}
                strokeDasharray={connection.type === 'encrypted' ? '2,2' : 'none'}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                className={`${getNodeColor(node.type, node.status).replace('bg-', 'fill-').replace('text-white', '').replace('text-navy', '')}`}
                stroke="white"
                strokeWidth="1"
              />
              
              {/* Pulse animation for core node */}
              {node.type === 'core' && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="1"
                  initial={{ r: 4, opacity: 1 }}
                  animate={{ r: 8, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.g>
          ))}
        </svg>

        {/* Node Labels */}
        {nodes.map((node, index) => (
          <motion.div
            key={`label-${node.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              marginTop: node.y > 50 ? '-40px' : '20px'
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border text-xs font-medium text-charcoal whitespace-nowrap">
              <div className="flex items-center gap-1">
                <node.icon size={12} />
                <span>{node.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-green-500"></div>
          <span className="text-charcoal/70">Secure Connection</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500" style={{ backgroundImage: 'repeating-linear-gradient(to right, rgb(59, 130, 246) 0, rgb(59, 130, 246) 2px, transparent 2px, transparent 4px)' }}></div>
          <span className="text-charcoal/70">Encrypted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-yellow-500"></div>
          <span className="text-charcoal/70">Monitored</span>
        </div>
      </div>
    </div>
  );
}