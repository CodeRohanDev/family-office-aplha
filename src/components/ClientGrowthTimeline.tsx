'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Building, Globe, Award, DollarSign } from 'lucide-react';

export default function ClientGrowthTimeline() {
  const growthData = [
    {
      year: '2008',
      clients: 5,
      aum: 50,
      milestone: 'Foundation',
      description: 'Started with 5 founding families',
      highlight: 'First $50M AUM'
    },
    {
      year: '2010',
      clients: 12,
      aum: 150,
      milestone: 'Early Growth',
      description: 'Expanded service offerings',
      highlight: 'ISO 27001 Certified'
    },
    {
      year: '2012',
      clients: 20,
      aum: 400,
      milestone: 'Market Recognition',
      description: 'Industry awards and recognition',
      highlight: 'First $400M AUM'
    },
    {
      year: '2015',
      clients: 28,
      aum: 800,
      milestone: 'Global Expansion',
      description: 'International client base',
      highlight: 'Multi-jurisdiction expertise'
    },
    {
      year: '2018',
      clients: 35,
      aum: 1200,
      milestone: 'Technology Leadership',
      description: 'Advanced cybersecurity platform',
      highlight: 'AI-powered security'
    },
    {
      year: '2020',
      clients: 42,
      aum: 1600,
      milestone: 'Pandemic Resilience',
      description: 'Zero security breaches during crisis',
      highlight: 'Remote service excellence'
    },
    {
      year: '2022',
      clients: 48,
      aum: 1900,
      milestone: 'Market Leadership',
      description: 'Industry thought leadership',
      highlight: 'Top 1% performance'
    },
    {
      year: '2024',
      clients: 52,
      aum: 2100,
      milestone: 'Excellence Standard',
      description: 'Setting new industry benchmarks',
      highlight: '$2B+ AUM milestone'
    }
  ];

  const maxClients = Math.max(...growthData.map(d => d.clients));
  const maxAUM = Math.max(...growthData.map(d => d.aum));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Users className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Client Growth & AUM Timeline</h3>
          <p className="text-charcoal/70 text-sm">15+ years of consistent growth and client satisfaction</p>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="mb-8 p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl">
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-charcoal/70">
            <span>{maxClients} clients</span>
            <span>{Math.round(maxClients * 0.75)}</span>
            <span>{Math.round(maxClients * 0.5)}</span>
            <span>{Math.round(maxClients * 0.25)}</span>
            <span>0</span>
          </div>

          {/* Chart area */}
          <div className="ml-12 mr-4 h-full relative">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map(percentage => (
              <div
                key={percentage}
                className="absolute w-full border-t border-gray-200"
                style={{ bottom: `${percentage}%` }}
              />
            ))}

            {/* Client growth line */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <motion.polyline
                points={growthData.map((data, index) => 
                  `${(index / (growthData.length - 1)) * 100},${100 - (data.clients / maxClients) * 100}`
                ).join(' ')}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* AUM growth line */}
              <motion.polyline
                points={growthData.map((data, index) => 
                  `${(index / (growthData.length - 1)) * 100},${100 - (data.aum / maxAUM) * 100}`
                ).join(' ')}
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Data points */}
            {growthData.map((data, index) => (
              <motion.div
                key={data.year}
                className="absolute transform -translate-x-1/2"
                style={{ 
                  left: `${(index / (growthData.length - 1)) * 100}%`,
                  bottom: `${(data.clients / maxClients) * 100}%`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
              >
                <div className="w-3 h-3 bg-gold rounded-full border-2 border-white shadow-lg"></div>
              </motion.div>
            ))}

            {/* X-axis labels */}
            <div className="absolute -bottom-6 w-full flex justify-between text-xs text-charcoal/70">
              {growthData.map(data => (
                <span key={data.year}>{data.year}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-gold"></div>
            <span className="text-charcoal/70">Client Count</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-navy" style={{ backgroundImage: 'repeating-linear-gradient(to right, #1E3A8A 0, #1E3A8A 3px, transparent 3px, transparent 6px)' }}></div>
            <span className="text-charcoal/70">AUM ($M)</span>
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-4">
        <h4 className="font-semibold text-navy mb-4">Key Milestones</h4>
        {growthData.filter((_, index) => index % 2 === 0).map((data, index) => (
          <motion.div
            key={data.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="bg-navy text-white px-3 py-1 rounded-lg font-bold text-sm min-w-fit">
              {data.year}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h5 className="font-semibold text-navy">{data.milestone}</h5>
                <Award className="text-gold" size={16} />
              </div>
              <p className="text-charcoal/80 text-sm mb-2">{data.description}</p>
              <div className="flex items-center gap-4 text-xs text-charcoal/70">
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  <span>{data.clients} families</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={12} />
                  <span>${data.aum}M AUM</span>
                </div>
                <div className="bg-gold/20 text-gold px-2 py-1 rounded font-medium">
                  {data.highlight}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Growth Statistics */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <TrendingUp className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">940%</div>
          <div className="text-xs text-green-700">Client Growth</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <DollarSign className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">4100%</div>
          <div className="text-xs text-blue-700">AUM Growth</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Building className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">98%</div>
          <div className="text-xs text-gold/80">Retention Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <Globe className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">25+</div>
          <div className="text-xs text-navy/80">Countries</div>
        </motion.div>
      </div>
    </div>
  );
}