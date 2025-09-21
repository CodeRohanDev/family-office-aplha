'use client';

import { motion } from 'framer-motion';
import { BarChart3, Shield, TrendingUp, Activity } from 'lucide-react';
import SecurityDashboard from './SecurityDashboard';
import PortfolioRadarChart from './PortfolioRadarChart';
import InteractiveMetrics from './InteractiveMetrics';
import AssetAllocationDonut from './AssetAllocationDonut';
import RiskMetricsGauge from './RiskMetricsGauge';
import PortfolioComposition from './PortfolioComposition';
import ClientGrowthTimeline from './ClientGrowthTimeline';
import ComplianceMatrix from './ComplianceMatrix';
import GeographicDistribution from './GeographicDistribution';
import MarketTrendChart from './MarketTrendChart';
import NetworkTopology from './NetworkTopology';
import CybersecurityThreatMap from './CybersecurityThreatMap';
import ESGScorecard from './ESGScorecard';
import ClientSatisfactionMetrics from './ClientSatisfactionMetrics';
import TechnologyInnovationDashboard from './TechnologyInnovationDashboard';
import OperationalEfficiencyMatrix from './OperationalEfficiencyMatrix';
import MarketSentimentAnalysis from './MarketSentimentAnalysis';
import BusinessIntelligenceDashboard from './BusinessIntelligenceDashboard';

export default function ChartsSection() {
  return (
    <section id="charts-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 px-4">
            Real-Time Analytics & Security
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
            Advanced visualization tools providing comprehensive insights into portfolio performance and cybersecurity infrastructure.
          </p>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {[
            { icon: TrendingUp, label: 'Portfolio Growth', value: '+25.4%', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: Shield, label: 'Security Score', value: '100%', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Activity, label: 'Active Monitoring', value: '24/7', color: 'text-gold', bg: 'bg-yellow-50' },
            { icon: BarChart3, label: 'Risk Level', value: 'Low', color: 'text-navy', bg: 'bg-navy/5' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${metric.bg} p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-3">
                <metric.icon className={metric.color} size={24} />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-charcoal/70 text-xs sm:text-sm font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Metrics - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <InteractiveMetrics />
        </motion.div>

        {/* First Row - Portfolio Analytics */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <PortfolioRadarChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <AssetAllocationDonut />
          </motion.div>
        </div>

        {/* Second Row - Security & Risk */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <SecurityDashboard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <RiskMetricsGauge />
          </motion.div>
        </div>

        {/* Third Row - Performance Analysis */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <PortfolioComposition />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <MarketTrendChart />
          </motion.div>
        </div>

        {/* Fourth Row - Growth & Compliance */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <ClientGrowthTimeline />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <ComplianceMatrix />
          </motion.div>
        </div>

        {/* Fifth Row - Global & Network */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <GeographicDistribution />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <NetworkTopology />
          </motion.div>
        </div>

        {/* Sixth Row - Cybersecurity & ESG */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <CybersecurityThreatMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <ESGScorecard />
          </motion.div>
        </div>

        {/* Seventh Row - Client Satisfaction & Technology */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <ClientSatisfactionMetrics />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <TechnologyInnovationDashboard />
          </motion.div>
        </div>

        {/* Eighth Row - Operations & Market Analysis */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <OperationalEfficiencyMatrix />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            viewport={{ once: true }}
          >
            <MarketSentimentAnalysis />
          </motion.div>
        </div>

        {/* Ninth Row - Business Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          viewport={{ once: true }}
        >
          <BusinessIntelligenceDashboard />
        </motion.div>

        {/* Additional Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-4">
                Performance Insights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Consistent Outperformance</div>
                    <div className="text-sm text-charcoal/70">Portfolio has outperformed market benchmarks by an average of 5.8% annually</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Risk-Adjusted Returns</div>
                    <div className="text-sm text-charcoal/70">Optimal Sharpe ratio of 1.8 with controlled volatility measures</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Diversification Benefits</div>
                    <div className="text-sm text-charcoal/70">Multi-asset strategy reducing correlation risk across market cycles</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-4">
                Security Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Zero Breach Record</div>
                    <div className="text-sm text-charcoal/70">15+ years of maintaining perfect cybersecurity track record</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Advanced Threat Detection</div>
                    <div className="text-sm text-charcoal/70">AI-powered monitoring systems with real-time threat intelligence</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-charcoal">Continuous Monitoring</div>
                    <div className="text-sm text-charcoal/70">24/7 security operations center with instant incident response</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}