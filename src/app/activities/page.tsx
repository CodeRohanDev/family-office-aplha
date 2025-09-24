'use client';

import { Calendar, Users, Globe, Award, ExternalLink, Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Activities() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const openVideoModal = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId('');
  };
  const upcomingEvents = [
    {
      date: '2025-01-15',
      title: 'Cybersecurity MasterClass: ROI, Technology & Governance',
      type: 'MasterClass',
      description: 'Comprehensive cybersecurity training covering ROI analysis, technology implementation, governance frameworks, and reputation management for family offices.',
      time: '2:00 PM EST',
      speakers: ['Julia Valentine', 'Christopher Hetner'],
      registration: 'ke5w1EeRHIk'
    },
    {
      date: '2025-02-20',
      title: 'Athlete Academy: Wealth Management & Financial Fitness',
      type: 'Academy Program',
      description: 'Comprehensive program teaching wealth management, family office creation, and financial fitness specifically designed for professional athletes.',
      time: '3:00 PM EST',
      speakers: ['Julia Valentine', 'Garrick Jones'],
      registration: 'k8T3QGuNqbE'
    },
    {
      date: '2025-03-15',
      title: 'Legacy Circle: Life After Sports Preparation',
      type: 'Workshop',
      description: 'Helping athletes prepare for life after sports with comprehensive wealth transition and legacy planning strategies.',
      time: '2:00 PM EST',
      speakers: ['Garrick Jones', 'Julia Valentine'],
      registration: 'vpgHmNJjD5o'
    }
  ];

  const pastEvents = [
    {
      date: '2024-10-18',
      title: 'Reputational & Financial Impact of Cyber Events',
      type: 'Webinar',
      description: 'In this webinar you\'ll learn how to measure the return on your investment in cybersecurity, and how to get the most out of your cybersecurity program for years to come. Hear from our CEO, Julia Valentine and our experts, Anthony Carter and Mike Wilkes, in this power hour webinar.',
      speakers: ['Julia Valentine', 'Anthony Carter', 'Mike Wilkes'],
      attendees: 175,
      recording: '1Q5JWi1gK3A',
      additionalLink: '1Q5JWi1gK3A'
    },
    {
      date: '2024-09-30',
      title: 'Family Office List MasterClass: Family Office Technology & Cybersecurity',
      type: 'MasterClass',
      description: 'Julia Valentine brings over 20 years of experience at top-tier firms, including JPMorgan, D.E. Shaw, and Mousse Partners, a prominent family office. She has also served as COO and CTO of a family office with $1.5 billion ...',
      speakers: ['Danielle Patterson', 'Julia Valentine'],
      attendees: 220,
      recording: 'ke5w1EeRHIk',
      additionalLink: 'ke5w1EeRHIk'
    },
    {
      date: '2024-09-30',
      title: 'Family Office Alpha for Athletes',
      type: 'Partnership Event',
      description: 'Partnership with 73 Holdings focusing on wealth management for professional athletes. Featured Garrick Jones (former NFL/CFL player, CEO of 73 Holdings) and Julia Valentine.',
      speakers: ['Julia Valentine', 'Garrick Jones'],
      attendees: 120,
      recording: 'k8T3QGuNqbE'
    },
    {
      date: '2024-10-20',
      title: 'Family Office List MasterClass: Athletes & Family Offices',
      type: 'MasterClass',
      description: 'Hosted by Danielle Patterson (CEO of Family Office List), featuring Julia Valentine & Garrick Jones discussing comprehensive family office strategies for professional athletes.',
      speakers: ['Danielle Patterson', 'Julia Valentine', 'Garrick Jones'],
      attendees: 200,
      recording: 'vpgHmNJjD5o'
    },
    {
      date: '2024-09-15',
      title: 'Cybersecurity Webinar: ROI & Business Continuity',
      type: 'Webinar',
      description: 'Deep dive into cybersecurity ROI analysis and how security investments prevent business disruption for family offices.',
      speakers: ['Julia Valentine', 'Christopher Hetner'],
      attendees: 150,
      recording: '1Q5JWi1gK3A'
    },
    {
      date: '2024-10-05',
      title: 'Technology & Governance in Family Offices',
      type: 'Webinar',
      description: 'Exploring the intersection of technology implementation and governance frameworks in modern family office operations.',
      speakers: ['Julia Valentine'],
      attendees: 180,
      recording: 'ke5w1EeRHIk'
    }
  ];

  const partnerships = [
    {
      name: '73 Holdings',
      description: 'Strategic partnership focusing on athlete-focused wealth programs, led by Garrick Jones (former NFL/CFL player). Collaborative programs include wealth management education and family office creation for professional athletes.',
      type: 'Strategic Partnership',
      focus: 'Athlete Wealth Management'
    },
    {
      name: 'Colley Intelligence',
      description: 'Advisory firm partnership specializing in corporate investigations, intelligence gathering, and litigation advisory services for high-net-worth families.',
      type: 'Advisory Partnership',
      focus: 'Risk Management & Investigations'
    },
    {
      name: 'Family Office List',
      description: 'Collaboration with Danielle Patterson (CEO) for events and training programs, including MasterClasses and educational content for family office professionals.',
      type: 'Educational Partnership',
      focus: 'Events & Training'
    },
    {
      name: 'Digital Evolution Institute',
      description: 'Partnership tied to Tracy McWilliams (Co-Founder), focusing on digital transformation and technology evolution in family office operations.',
      type: 'Technology Partnership',
      focus: 'Digital Innovation'
    },
    {
      name: 'AlphaMille',
      description: 'Technology Provider Guide partnership, creating comprehensive vendor lists and solutions across 13 categories of family office technology.',
      type: 'Research Partnership',
      focus: 'Technology Research'
    }
  ];

  const keyTopics = [
    'Wealth management challenges for athletes and high-net-worth families',
    'Psychology of money & family patterns across generations',
    'Goal setting and strategic roadmaps to financial success',
    'Why and how to set up a family office: governance and operations',
    'Cybersecurity ROI and business continuity for family offices',
    'Next-generation wealth transfer ($72 trillion over 25 years)',
    'Athlete wealth psychology and financial roadmap guidance',
    'Technology implementation and governance frameworks',
    'Digital transformation in family office operations',
    'Legacy planning and life-after-sports preparation'
  ];

  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              Activities & Events
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-offWhite max-w-3xl mx-auto px-4 leading-relaxed">
              Stay connected with industry insights, educational events, and strategic partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Upcoming Events</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="bg-gold/10 p-2.5 sm:p-3 rounded-lg w-fit">
                        <Calendar className="text-gold" size={20} />
                      </div>
                      <div>
                        <div className="text-gold font-semibold text-sm sm:text-base">{event.type}</div>
                        <div className="text-charcoal text-xs sm:text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })} • {event.time}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-charcoal leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {event.description}
                    </p>
                    {event.speakers && (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-medium text-navy">Speakers:</span>
                        <span className="text-xs sm:text-sm text-charcoal/70">{event.speakers.join(', ')}</span>
                      </div>
                    )}
                  </div>
                  <div className="lg:w-auto">
                    <button
                      onClick={() => openVideoModal(event.registration)}
                      className="bg-gold text-navy px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 inline-flex items-center text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      Watch Preview
                      <Play className="ml-2" size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Past Events</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-offWhite rounded-xl p-5 sm:p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="bg-navy/10 p-2 rounded-lg flex-shrink-0">
                    <Users className="text-navy" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-navy font-semibold text-xs sm:text-sm">{event.type}</div>
                    <div className="text-charcoal text-xs">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-base sm:text-lg font-semibold text-navy mb-2 sm:mb-3 leading-tight">
                  {event.title}
                </h3>
                <p className="text-charcoal/70 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                  {event.description}
                </p>
                {event.speakers && (
                  <div className="mb-2 sm:mb-3">
                    <span className="text-xs font-medium text-navy">Speakers: </span>
                    <span className="text-xs text-charcoal/70">{event.speakers.join(', ')}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-charcoal text-xs sm:text-sm">
                    {event.attendees} attendees
                  </span>
                  <button
                    onClick={() => openVideoModal(event.recording)}
                    className="text-gold hover:text-navy font-medium text-xs sm:text-sm whitespace-nowrap inline-flex items-center"
                  >
                    <Play className="mr-1" size={12} />
                    Watch Recording
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Key Topics We Cover</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
              Our events and webinars cover the most critical topics facing family offices today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {keyTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-offWhite p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-navy transition-colors"></div>
                  <span className="text-charcoal font-medium group-hover:text-navy transition-colors text-sm sm:text-base leading-relaxed">{topic}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">Featured Partnerships</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-offWhite max-w-2xl mx-auto px-4 text-sm sm:text-base">
              Collaborating with industry leaders to provide comprehensive solutions for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Globe className="text-gold flex-shrink-0" size={20} />
                  <div className="min-w-0 flex-1">
                    <span className="text-gold text-xs sm:text-sm font-medium block">{partnership.type}</span>
                    <span className="text-offWhite/70 text-xs">{partnership.focus}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
                  {partnership.name}
                </h3>
                <p className="text-offWhite leading-relaxed text-sm sm:text-base">
                  {partnership.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Publications & Research</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto px-4">
              Comprehensive research and publications to guide family office technology and strategy decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-offWhite rounded-2xl p-6 sm:p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">Technology Provider Guide</h3>
                <p className="text-base sm:text-lg text-charcoal/80 mb-4 sm:mb-6 leading-relaxed">
                  Sponsored by Family Office Alpha and written by AlphaMille, this comprehensive guide defines
                  13 categories of family office technology with detailed vendor lists and solutions.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-charcoal text-sm sm:text-base">13 comprehensive technology categories</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-charcoal text-sm sm:text-base">Extensive vendor analysis and recommendations</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                    <span className="text-charcoal text-sm sm:text-base">Strategic technology implementation guidance</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-6 sm:p-8 rounded-xl text-white">
                <h4 className="font-playfair text-lg sm:text-xl font-bold text-gold mb-3 sm:mb-4">Research Categories</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div>• Portfolio Management</div>
                    <div>• Risk Management</div>
                    <div>• Reporting & Analytics</div>
                    <div>• Document Management</div>
                    <div>• Communication Tools</div>
                    <div>• Cybersecurity Solutions</div>
                    <div>• Compliance Systems</div>
                  </div>
                  <div className="space-y-2">
                    <div>• CRM Platforms</div>
                    <div>• Accounting Software</div>
                    <div>• Investment Research</div>
                    <div>• Tax Management</div>
                    <div>• Estate Planning Tools</div>
                    <div>• Data Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6 px-4">
              Stay Informed
            </h2>
            <p className="text-lg sm:text-xl text-charcoal mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to our newsletter for the latest insights, event announcements, and industry updates.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold text-sm sm:text-base"
              />
              <button className="bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}