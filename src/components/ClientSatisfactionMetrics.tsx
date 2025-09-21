'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, Award, TrendingUp, Users } from 'lucide-react';

export default function ClientSatisfactionMetrics() {
  const satisfactionScores = [
    {
      category: 'Overall Satisfaction',
      score: 4.8,
      maxScore: 5.0,
      percentage: 96,
      responses: 48,
      trend: '+0.2',
      color: '#059669'
    },
    {
      category: 'Service Quality',
      score: 4.9,
      maxScore: 5.0,
      percentage: 98,
      responses: 48,
      trend: '+0.1',
      color: '#1E3A8A'
    },
    {
      category: 'Communication',
      score: 4.7,
      maxScore: 5.0,
      percentage: 94,
      responses: 48,
      trend: '+0.3',
      color: '#D4AF37'
    },
    {
      category: 'Security Confidence',
      score: 4.9,
      maxScore: 5.0,
      percentage: 98,
      responses: 48,
      trend: '0.0',
      color: '#7C3AED'
    }
  ];

  const npsData = {
    score: 85,
    promoters: 89,
    passives: 8,
    detractors: 3,
    responses: 48,
    industryAverage: 42
  };

  const feedbackCategories = [
    {
      category: 'Cybersecurity Expertise',
      mentions: 42,
      sentiment: 'positive',
      keywords: ['expert', 'secure', 'protected', 'advanced']
    },
    {
      category: 'Personalized Service',
      mentions: 38,
      sentiment: 'positive',
      keywords: ['personal', 'tailored', 'dedicated', 'responsive']
    },
    {
      category: 'Investment Performance',
      mentions: 35,
      sentiment: 'positive',
      keywords: ['returns', 'growth', 'outperform', 'consistent']
    },
    {
      category: 'Technology Platform',
      mentions: 28,
      sentiment: 'positive',
      keywords: ['user-friendly', 'innovative', 'reliable', 'efficient']
    }
  ];

  const testimonialHighlights = [
    {
      quote: "The cybersecurity expertise gives us complete peace of mind with our digital assets.",
      client: "Family Office Executive",
      rating: 5,
      category: "Security"
    },
    {
      quote: "Exceptional returns with personalized service that truly understands our family's needs.",
      client: "UHNW Family",
      rating: 5,
      category: "Performance"
    },
    {
      quote: "Their proactive approach to risk management has protected us through multiple market cycles.",
      client: "Multi-Generational Family",
      rating: 5,
      category: "Risk Management"
    }
  ];

  const serviceMetrics = [
    { metric: 'Response Time', value: '<2 hours', target: '<4 hours', status: 'exceeds' },
    { metric: 'Issue Resolution', value: '24 hours', target: '48 hours', status: 'exceeds' },
    { metric: 'Availability', value: '99.9%', target: '99.5%', status: 'exceeds' },
    { metric: 'Client Retention', value: '98%', target: '95%', status: 'exceeds' }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Star className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">Client Satisfaction Analytics</h3>
          <p className="text-charcoal/70 text-sm">Comprehensive client feedback and satisfaction metrics</p>
        </div>
      </div>

      {/* Satisfaction Scores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-navy mb-4">Satisfaction Ratings</h4>
          <div className="space-y-4">
            {satisfactionScores.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border"
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold text-navy">{item.category}</h5>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="font-bold text-navy">{item.score}</span>
                      <span className="text-charcoal/70">/{item.maxScore}</span>
                    </div>
                    <div className={`text-xs font-medium ${
                      item.trend.startsWith('+') ? 'text-green-600' : 
                      item.trend === '0.0' ? 'text-blue-600' : 'text-red-600'
                    }`}>
                      {item.trend.startsWith('+') ? '' : item.trend === '0.0' ? '' : ''}{item.trend}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-navy">{item.percentage}%</span>
                </div>

                <div className="text-xs text-charcoal/70">
                  Based on {item.responses} client responses
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NPS Score */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
              <ThumbsUp size={16} />
              Net Promoter Score (NPS)
            </h4>
            
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                {npsData.score}
              </motion.div>
              <div className="text-sm text-charcoal/70 mb-2">Excellent (Industry avg: {npsData.industryAverage})</div>
              <div className="text-xs text-charcoal/60">{npsData.responses} responses</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600">Promoters (9-10)</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${npsData.promoters}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-navy w-8">{npsData.promoters}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-yellow-600">Passives (7-8)</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-yellow-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${npsData.passives}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-navy w-8">{npsData.passives}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-red-600">Detractors (0-6)</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-red-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${npsData.detractors}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-navy w-8">{npsData.detractors}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Metrics */}
          <div className="bg-gradient-to-br from-navy/5 to-gold/5 p-4 rounded-xl">
            <h4 className="font-semibold text-navy mb-3">Service Level Metrics</h4>
            <div className="space-y-3">
              {serviceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-white rounded-lg"
                >
                  <span className="text-sm font-medium text-charcoal">{metric.metric}</span>
                  <div className="text-right">
                    <div className="font-bold text-navy">{metric.value}</div>
                    <div className="text-xs text-green-600">Target: {metric.target}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Analysis */}
      <div className="mb-6">
        <h4 className="font-semibold text-navy mb-4">Feedback Category Analysis</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {feedbackCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-navy">{category.category}</h5>
                <div className="flex items-center gap-2">
                  <MessageCircle className="text-green-600" size={16} />
                  <span className="font-bold text-navy">{category.mentions}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-2">
                {category.keywords.map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  className="h-1.5 bg-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(category.mentions / 50) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Highlights */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4">Client Testimonial Highlights</h4>
        <div className="space-y-4">
          {testimonialHighlights.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white rounded-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-charcoal/80 italic mb-2">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-navy">{testimonial.client}</div>
                      <div className="text-xs text-charcoal/70">{testimonial.category}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
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
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Star className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">4.8/5</div>
          <div className="text-xs text-green-700">Avg Rating</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <ThumbsUp className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">85</div>
          <div className="text-xs text-blue-700">NPS Score</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Award className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">98%</div>
          <div className="text-xs text-gold/80">Retention</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <Users className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">48</div>
          <div className="text-xs text-navy/80">Responses</div>
        </motion.div>
      </div>
    </div>
  );
}