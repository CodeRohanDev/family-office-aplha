'use client';

import { motion } from 'framer-motion';
import { Leaf, Users, Building, Award, TrendingUp, Target } from 'lucide-react';

export default function ESGScorecard() {
  const esgMetrics = [
    {
      category: 'Environmental',
      score: 87,
      grade: 'A-',
      color: '#059669',
      icon: Leaf,
      subcategories: [
        { name: 'Carbon Footprint', score: 92, target: 95 },
        { name: 'Renewable Energy', score: 85, target: 90 },
        { name: 'Waste Reduction', score: 89, target: 85 },
        { name: 'Water Conservation', score: 82, target: 80 }
      ]
    },
    {
      category: 'Social',
      score: 94,
      grade: 'A+',
      color: '#1E3A8A',
      icon: Users,
      subcategories: [
        { name: 'Employee Satisfaction', score: 96, target: 90 },
        { name: 'Diversity & Inclusion', score: 91, target: 85 },
        { name: 'Community Impact', score: 98, target: 95 },
        { name: 'Client Protection', score: 92, target: 90 }
      ]
    },
    {
      category: 'Governance',
      score: 96,
      grade: 'A+',
      color: '#D4AF37',
      icon: Building,
      subcategories: [
        { name: 'Board Independence', score: 100, target: 95 },
        { name: 'Transparency', score: 94, target: 90 },
        { name: 'Risk Management', score: 98, target: 95 },
        { name: 'Compliance', score: 92, target: 90 }
      ]
    }
  ];

  const sustainabilityInitiatives = [
    {
      title: 'Carbon Neutral Operations',
      progress: 78,
      target: '2025',
      description: 'Achieving net-zero carbon emissions across all operations',
      impact: '45% reduction achieved'
    },
    {
      title: 'Sustainable Investment Framework',
      progress: 92,
      target: '2024',
      description: 'ESG integration in all investment decisions',
      impact: '$1.2B ESG-aligned AUM'
    },
    {
      title: 'Digital Transformation',
      progress: 85,
      target: '2024',
      description: 'Paperless operations and digital client services',
      impact: '67% paper reduction'
    },
    {
      title: 'Community Investment',
      progress: 100,
      target: 'Ongoing',
      description: 'Supporting financial literacy and cybersecurity education',
      impact: '5,000+ people trained'
    }
  ];

  const industryComparison = [
    { metric: 'Overall ESG Score', ourScore: 92, industry: 76, benchmark: 85 },
    { metric: 'Environmental Impact', ourScore: 87, industry: 72, benchmark: 80 },
    { metric: 'Social Responsibility', ourScore: 94, industry: 78, benchmark: 85 },
    { metric: 'Governance Standards', ourScore: 96, industry: 82, benchmark: 90 }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-50';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-navy/10 p-2 rounded-lg">
          <Leaf className="text-navy" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy">ESG Performance Scorecard</h3>
          <p className="text-charcoal/70 text-sm">Environmental, Social, and Governance impact metrics</p>
        </div>
      </div>

      {/* ESG Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {esgMetrics.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon 
                    className="text-current" 
                    style={{ color: category.color }}
                    size={20} 
                  />
                </div>
                <h4 className="font-semibold text-navy">{category.category}</h4>
              </div>
              <div className="text-right">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: category.color }}
                >
                  {category.score}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(category.grade)}`}>
                  {category.grade}
                </div>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke={category.color}
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - category.score / 100) }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-navy">{category.score}</span>
              </div>
            </div>

            {/* Subcategories */}
            <div className="space-y-2">
              {category.subcategories.map((sub, idx) => (
                <div key={sub.name} className="flex items-center justify-between text-sm">
                  <span className="text-charcoal/70">{sub.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="h-1.5 rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(sub.score / 100) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 + 0.5 }}
                      />
                    </div>
                    <span className="font-medium text-navy w-8">{sub.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sustainability Initiatives */}
      <div className="mb-6">
        <h4 className="font-semibold text-navy mb-4">Sustainability Initiatives</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sustainabilityInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h5 className="font-semibold text-navy mb-1">{initiative.title}</h5>
                  <p className="text-sm text-charcoal/70 mb-2">{initiative.description}</p>
                  <div className="text-xs text-green-600 font-medium">{initiative.impact}</div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-lg font-bold text-navy">{initiative.progress}%</div>
                  <div className="text-xs text-charcoal/70">Target: {initiative.target}</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${
                    initiative.progress >= 90 ? 'bg-green-500' :
                    initiative.progress >= 70 ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${initiative.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Comparison */}
      <div className="p-4 bg-gradient-to-r from-navy/5 to-gold/5 rounded-xl mb-6">
        <h4 className="font-semibold text-navy mb-4">Industry Benchmarking</h4>
        <div className="space-y-4">
          {industryComparison.map((comparison, index) => (
            <motion.div
              key={comparison.metric}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="font-medium text-charcoal w-1/3">{comparison.metric}</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-charcoal/70 w-16">Our Score</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-navy rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${comparison.ourScore}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm font-bold text-navy w-8">{comparison.ourScore}</span>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-xs text-charcoal/70 w-16">Industry</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gray-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${comparison.industry}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-charcoal w-8">{comparison.industry}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ESG Impact Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl"
        >
          <Leaf className="text-green-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-green-600">45%</div>
          <div className="text-xs text-green-700">Carbon Reduction</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl"
        >
          <Users className="text-blue-600 mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-blue-600">5,000+</div>
          <div className="text-xs text-blue-700">People Impacted</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center p-4 bg-gradient-to-b from-gold/20 to-gold/30 rounded-xl"
        >
          <Award className="text-gold mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-gold">A+</div>
          <div className="text-xs text-gold/80">ESG Rating</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center p-4 bg-gradient-to-b from-navy/20 to-navy/30 rounded-xl"
        >
          <Target className="text-navy mx-auto mb-2" size={20} />
          <div className="text-lg font-bold text-navy">92</div>
          <div className="text-xs text-navy/80">Overall Score</div>
        </motion.div>
      </div>
    </div>
  );
}