'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function GeographicDistribution() {
  const regions = [
    {
      name: 'North America',
      countries: ['United States', 'Canada'],
      clients: 31,
      aum: 1260, // in millions
      percentage: 60,
      growth: '+8%',
      color: '#1E3A8A',
      lightColor: '#DBEAFE'
    },
    {
      name: 'Europe',
      countries: ['United Kingdom', 'Switzerland', 'Germany', 'France'],
      clients: 13,
      aum: 525,
      percentage: 25,
      growth: '+12%',
      color: '#D4AF37',
      lightColor: '#FEF3C7'
    },
    {
      name: 'Asia-Pacific',
      countries: ['Singapore', 'Hong Kong', 'Australia'],
      clients: 6,
      aum: 252,
      percentage: 12,
      growth: '+25%',
      color: '#059669',
      lightColor: '#D1FAE5'
    },
    {
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia'],
      clients: 2,
      aum: 63,
      percentage: 3,
      growth: '+50%',
      color: '#7C3AED',
      lightColor: '#EDE9FE'
    }
  ];

  const topCountries = [
    { name: 'United States', clients: 28, aum: 1120, flag: '🇺🇸' },
    { name: 'United Kingdom', clients: 7, aum: 294, flag: '🇬🇧' },
    { name: 'Switzerland', clients: 4, aum: 168, flag: '🇨🇭' },
    { name: 'Singapore', clients: 3, aum: 126, flag: '🇸🇬' },
    { name: 'Canada', clients: 3, aum: 140, flag: '🇨🇦' },
  ];

  const timeZones = [
    { zone: 'EST (New York)', time: '09:00', status: 'active', clients: 28 },
    { zone: 'GMT (London)', time: '14:00', status: 'active', clients: 7 },
    { zone: 'CET (Zurich)', time: '15:00', status: 'active', clients: 4 },
    { zone: 'SGT (Singapore)', time: '22:00', status: 'monitoring', clients: 3 },
    { zone: 'AEST (Sydney)', time: '00:00', status: 'monitoring', clients: 2 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Globe className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Global Client Distribution</h3>
          <p className="text-charcoal/70 text-sm">Worldwide presence across 25+ countries and multiple time zones</p>
        </div>
      </div>

      {/* Regional Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Regional Breakdown */}
        <div>
          <h4 className="font-semibold text-navy mb-4">Regional Distribution</h4>
          <div className="space-y-3">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-xl border hover:shadow-md transition-shadow"
                style={{ backgroundColor: region.lightColor }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-navy">{region.name}</h5>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold" style={{ color: region.color }}>
                      {region.percentage}%
                    </span>
                    <span className="text-xs text-green-600 font-medium">{region.growth}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users size={14} style={{ color: region.color }} />
                      <span className="text-charcoal/80">{region.clients} families</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} style={{ color: region.color }} />
                      <span className="text-charcoal/80">${region.aum}M</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: region.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${region.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                <div className="text-xs text-charcoal/70">
                  Countries: {region.countries.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-4 rounded-xl">
          <h4 className="font-semibold text-navy mb-4">Global Presence Map</h4>
          
          {/* Simplified World Map */}
          <div className="relative bg-blue-50 rounded-xl p-4 h-64 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">🌍</div>
            </div>
            
            {/* Regional Markers */}
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                className="absolute"
                style={{
                  left: region.name === 'North America' ? '20%' :
                        region.name === 'Europe' ? '50%' :
                        region.name === 'Asia-Pacific' ? '75%' : '60%',
                  top: region.name === 'North America' ? '30%' :
                       region.name === 'Europe' ? '25%' :
                       region.name === 'Asia-Pacific' ? '40%' : '50%'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"
                  style={{ backgroundColor: region.color }}
                  title={`${region.name}: ${region.clients} families, $${region.aum}M AUM`}
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-navy whitespace-nowrap">
                  {region.clients}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top Countries */}
          <div className="mt-4">
            <h5 className="font-medium text-navy mb-3">Top Countries by AUM</h5>
            <div className="space-y-2">
              {topCountries.slice(0, 3).map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.flag}</span>
                    <span className="font-medium text-charcoal">{country.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-navy">${country.aum}M</div>
                    <div className="text-xs text-charcoal/70">{country.clients} families</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Time Zone Coverage */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <MapPin size={16} />
          24/7 Global Coverage
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {timeZones.map((tz, index) => (
            <motion.div
              key={tz.zone}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-3 rounded-lg text-center ${
                tz.status === 'active' ? 'bg-green-100 border-green-300' : 'bg-blue-100 border-blue-300'
              } border`}
            >
              <div className={`text-lg font-bold ${
                tz.status === 'active' ? 'text-green-600' : 'text-blue-600'
              }`}>
                {tz.time}
              </div>
              <div className="text-xs text-charcoal/70 mb-1">{tz.zone}</div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                tz.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
              }`}>
                {tz.status === 'active' ? 'Active' : 'Monitoring'}
              </div>
              <div className="text-xs text-charcoal/60 mt-1">{tz.clients} clients</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <Globe className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">25+</div>
          <div className="text-xs text-blue-700">Countries</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Users className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">52</div>
          <div className="text-xs text-green-700">Global Families</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <TrendingUp className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">15%</div>
          <div className="text-xs text-gold/80">Avg Growth</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <MapPin className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">5</div>
          <div className="text-xs text-navy/80">Time Zones</div>
        </motion.div>
      </div>
    </div>
  );
}