'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart3, Brain, Globe, MessageCircle, Eye, Zap } from 'lucide-react';

export default function MarketSentimentAnalysis() {
  const sentimentData = [
    {
      market: 'US Equities',
      sentiment: 72,
      confidence: 85,
      trend: 'bullish',
      change: '+8%',
      volume: 'High',
      color: '#1E3A8A',
      indicators: [
        { name: 'Technical', score: 78, weight: 30 },
        { name: 'Fundamental', score: 69, weight: 25 },
        { name: 'News Sentiment', score: 74, weight: 20 },
        { name: 'Social Media', score: 68, weight: 15 },
        { name: 'Options Flow', score: 76, weight: 10 }
      ]
    },
    {
      market: 'Fixed Income',
      sentiment: 45,
      confidence: 78,
      trend: 'bearish',
      change: '-12%',
      volume: 'Medium',
      color: '#059669',
      indicators: [
        { name: 'Yield Curve', score: 42, weight: 35 },
        { name: 'Fed Policy', score: 38, weight: 30 },
        { name: 'Inflation Data', score: 51, weight: 20 },
        { name: 'Credit Spreads', score: 47, weight: 10 },
        { name: 'Duration Risk', score: 49, weight: 5 }
      ]
    },
    {
      market: 'Commodities',
      sentiment: 68,
      confidence: 72,
      trend: 'bullish',
      change: '+15%',
      volume: 'High',
      color: '#D4AF37',
      indicators: [
        { name: 'Supply/Demand', score: 75, weight: 40 },
        { name: 'Geopolitical', score: 71, weight: 25 },
        { name: 'Dollar Strength', score: 58, weight: 15 },
        { name: 'Inventory Levels', score: 69, weight: 15 },
        { name: 'Weather Patterns', score: 64, weight: 5 }
      ]
    },
    {
      market: 'Crypto Assets',
      sentiment: 58,
      confidence: 65,
      trend: 'neutral',
      change: '+3%',
      volume: 'Very High',
      color: '#7C3AED',
      indicators: [
        { name: 'Regulatory News', score: 52, weight: 30 },
        { name: 'Institutional Flow', score: 64, weight: 25 },
        { name: 'Technical Analysis', score: 61, weight: 20 },
        { name: 'Social Sentiment', score: 55, weight: 15 },
        { name: 'Network Activity', score: 58, weight: 10 }
      ]
    }
  ];

  const newsAnalysis = [
    {
      category: 'Economic Data',
      sentiment: 'positive',
      impact: 'high',
      articles: 247,
      keywords: ['GDP growth', 'employment', 'inflation decline', 'consumer spending']
    },
    {
      category: 'Central Bank Policy',
      sentiment: 'neutral',
      impact: 'very high',
      articles: 189,
      keywords: ['interest rates', 'monetary policy', 'quantitative easing', 'hawkish']
    },
    {
      category: 'Geopolitical Events',
      sentiment: 'negative',
      impact: 'medium',
      articles: 156,
      keywords: ['trade tensions', 'sanctions', 'conflict', 'diplomatic relations']
    },
    {
      category: 'Corporate Earnings',
      sentiment: 'positive',
      impact: 'high',
      articles: 312,
      keywords: ['beat estimates', 'revenue growth', 'guidance raised', 'margin expansion']
    }
  ];

  const socialSentiment = [
    { platform: 'Twitter/X', sentiment: 64, volume: 89, influence: 'High' },
    { platform: 'Reddit', sentiment: 58, volume: 72, influence: 'Medium' },
    { platform: 'LinkedIn', sentiment: 71, volume: 45, influence: 'High' },
    { platform: 'Financial Forums', sentiment: 69, volume: 56, influence: 'Very High' }
  ];

  const fearGreedIndex = {
    current: 68,
    label: 'Greed',
    components: [
      { name: 'Stock Price Momentum', value: 72 },
      { name: 'Stock Price Strength', value: 65 },
      { name: 'Stock Price Breadth', value: 71 },
      { name: 'Put/Call Ratio', value: 58 },
      { name: 'Junk Bond Demand', value: 69 },
      { name: 'Market Volatility', value: 74 },
      { name: 'Safe Haven Demand', value: 63 }
    ]
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50';
      case 'negative': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'very high': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getFearGreedColor = (value: number) => {
    if (value >= 75) return 'text-red-600';
    if (value >= 55) return 'text-orange-600';
    if (value >= 45) return 'text-yellow-600';
    if (value >= 25) return 'text-blue-600';
    return 'text-green-600';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Brain className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Market Sentiment Analysis</h3>
          <p className="text-charcoal/70 text-sm">AI-powered sentiment tracking across markets and news sources</p>
        </div>
      </div>

      {/* Market Sentiment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-navy mb-4">Market Sentiment Scores</h4>
          <div className="space-y-4">
            {sentimentData.map((market, index) => (
              <motion.div
                key={market.market}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: market.color }}
                    ></div>
                    <h5 className="font-semibold text-navy">{market.market}</h5>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <div 
                        className="text-lg font-bold"
                        style={{ color: market.color }}
                      >
                        {market.sentiment}
                      </div>
                      {market.trend === 'bullish' ? (
                        <TrendingUp className="text-green-600" size={16} />
                      ) : market.trend === 'bearish' ? (
                        <TrendingDown className="text-red-600" size={16} />
                      ) : (
                        <BarChart3 className="text-blue-600" size={16} />
                      )}
                    </div>
                    <div className={`text-xs font-medium ${
                      market.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {market.change}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <span className="text-charcoal/70">Confidence: </span>
                    <span className="font-bold text-navy">{market.confidence}%</span>
                  </div>
                  <div>
                    <span className="text-charcoal/70">Volume: </span>
                    <span className={`font-medium ${
                      market.volume === 'Very High' ? 'text-red-600' :
                      market.volume === 'High' ? 'text-orange-600' :
                      market.volume === 'Medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {market.volume}
                    </span>
                  </div>
                </div>

                {/* Sentiment Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: market.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${market.sentiment}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>

                {/* Indicator Breakdown */}
                <div className="space-y-1">
                  {market.indicators.slice(0, 3).map((indicator, idx) => (
                    <div key={indicator.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-charcoal/40 rounded-full"></div>
                        <span className="text-charcoal/70">{indicator.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 bg-gray-200 rounded-full h-1">
                          <motion.div
                            className="h-1 rounded-full"
                            style={{ backgroundColor: market.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${indicator.score}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                          />
                        </div>
                        <span className="font-medium text-navy w-6">{indicator.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fear & Greed Index */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-red-50 to-green-50 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
              <Eye size={16} />
              Fear & Greed Index
            </h4>
            
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`text-4xl font-bold mb-2 ${getFearGreedColor(fearGreedIndex.current)}`}
              >
                {fearGreedIndex.current}
              </motion.div>
              <div className={`text-lg font-semibold mb-2 ${getFearGreedColor(fearGreedIndex.current)}`}>
                {fearGreedIndex.label}
              </div>
              
              {/* Gauge Visualization */}
              <div className="relative w-32 h-16 mx-auto mb-4">
                <svg className="w-32 h-16">
                  <path
                    d="M 16 48 A 32 32 0 0 1 112 48"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M 16 48 A 32 32 0 0 1 112 48"
                    fill="none"
                    stroke={fearGreedIndex.current >= 75 ? '#DC2626' :
                           fearGreedIndex.current >= 55 ? '#EA580C' :
                           fearGreedIndex.current >= 45 ? '#EAB308' :
                           fearGreedIndex.current >= 25 ? '#3B82F6' : '#059669'}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${Math.PI * 32}`}
                    initial={{ strokeDashoffset: Math.PI * 32 }}
                    animate={{ strokeDashoffset: Math.PI * 32 * (1 - fearGreedIndex.current / 100) }}
                    transition={{ duration: 2 }}
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              {fearGreedIndex.components.slice(0, 4).map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-charcoal/70">{component.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className={`h-1.5 rounded-full ${getFearGreedColor(component.value).replace('text-', 'bg-')}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${component.value}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    <span className="font-medium text-navy w-6">{component.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media Sentiment */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
              <MessageCircle size={16} />
              Social Media Sentiment
            </h4>
            <div className="space-y-3">
              {socialSentiment.map((platform, index) => (
                <motion.div
                  key={platform.platform}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-charcoal">{platform.platform}</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      platform.influence === 'Very High' ? 'text-red-600 bg-red-50' :
                      platform.influence === 'High' ? 'text-orange-600 bg-orange-50' :
                      'text-blue-600 bg-blue-50'
                    }`}>
                      {platform.influence}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-charcoal/70">Sentiment</div>
                      <div className="font-bold text-navy">{platform.sentiment}%</div>
                    </div>
                    <div>
                      <div className="text-charcoal/70">Volume</div>
                      <div className="font-bold text-navy">{platform.volume}%</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Analysis */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-purple/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
          <Globe size={16} />
          News Sentiment Analysis
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {newsAnalysis.map((news, index) => (
            <motion.div
              key={news.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-navy">{news.category}</h5>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSentimentColor(news.sentiment)}`}>
                    {news.sentiment}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(news.impact)}`}>
                    {news.impact}
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-charcoal/70 mb-3">
                {news.articles} articles analyzed
              </div>
              
              <div className="flex flex-wrap gap-1">
                {news.keywords.map((keyword, idx) => (
                  <span 
                    key={idx}
                    className={`px-2 py-1 rounded text-xs ${
                      news.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                      news.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
          <Brain className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">63</div>
          <div className="text-xs text-blue-700">Avg Sentiment</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Globe className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">904</div>
          <div className="text-xs text-green-700">News Articles</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl"
        >
          <MessageCircle className="text-purple-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-purple-600">65%</div>
          <div className="text-xs text-purple-700">Social Sentiment</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Zap className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">75%</div>
          <div className="text-xs text-gold/80">Confidence</div>
        </motion.div>
      </div>
    </div>
  );
}