'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function ClientGrowthChart() {
  const growthData = [
    { year: '2020', clients: 25 },
    { year: '2021', clients: 32 },
    { year: '2022', clients: 38 },
    { year: '2023', clients: 45 },
    { year: '2024', clients: 52 }
  ];

  const maxClients = Math.max(...growthData.map(d => d.clients));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Client Growth</h3>
          <p className="text-gold font-semibold">+108% Since 2020</p>
        </div>
        <div className="bg-gold/10 p-3 rounded-xl">
          <Users className="text-gold" size={24} />
        </div>
      </div>

      <div className="flex items-end justify-between h-32 mb-4">
        {growthData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(item.clients / maxClients) * 100}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-t from-gold to-gold/60 rounded-t-lg w-8 mb-2 flex items-end justify-center"
            >
              <span className="text-xs text-white font-semibold mb-1">{item.clients}</span>
            </motion.div>
            <span className="text-xs text-charcoal/60 font-medium">{item.year}</span>
          </div>
        ))}
      </div>

      <div className="bg-gold/5 rounded-lg p-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-charcoal/70">Average Annual Growth</span>
          <span className="text-sm font-bold text-gold">+21.6%</span>
        </div>
      </div>
    </motion.div>
  );
}