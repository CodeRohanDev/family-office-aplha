import { Calendar, Users, Globe, Award, ExternalLink } from 'lucide-react';

export default function Activities() {
  const upcomingEvents = [
    {
      date: '2025-01-15',
      title: 'Cybersecurity MasterClass: Compliance & Technology',
      type: 'MasterClass',
      description: 'Comprehensive cybersecurity training covering compliance requirements, technology implementation, and reputation management for family offices.',
      time: '2:00 PM EST',
      registration: 'https://www.foalpha.com/videos'
    },
    {
      date: '2025-02-20',
      title: 'Athletes as Investors: Building Generational Wealth',
      type: 'Webinar',
      description: 'Focused on generational wealth and investment strategies specifically designed for professional athletes.',
      time: '3:00 PM EST',
      registration: 'https://www.foalpha.com/videos'
    }
  ];

  const pastEvents = [
    {
      date: '2024-09-30',
      title: 'Family Office Alpha for Athletes',
      type: 'Partnership Event',
      description: 'Partnership with 73 Holdings focusing on wealth management for professional athletes.',
      attendees: 120,
      recording: 'https://www.foalpha.com/videos'
    },
    {
      date: '2024-10-20',
      title: 'Family Office List MasterClass: Athletes & Family Offices',
      type: 'MasterClass',
      description: 'Hosted by Danielle Patterson, featuring Julia Valentine & Garrick Jones discussing family office strategies for athletes.',
      attendees: 200,
      recording: 'https://www.foalpha.com/videos'
    }
  ];

  const partnerships = [
    {
      name: '73 Holdings',
      description: 'Strategic partnership focusing on family office services for professional athletes, led by former NFL/CFL player Garrick Jones.',
      type: 'Strategic Partnership'
    },
    {
      name: 'Colley Intelligence',
      description: 'Advisory firm partnership for investigations, disputes, and risk management services.',
      type: 'Advisory Partnership'
    },
    {
      name: 'DiSC Personality Style Workshops',
      description: 'Collaboration to improve self-awareness and communication through personality assessment workshops.',
      type: 'Educational Partnership'
    }
  ];

  const keyTopics = [
    'Wealth management challenges for athletes',
    'Psychology of money & family patterns',
    'Goal setting and roadmaps to success',
    'Why and how to set up a family office',
    'Importance of cybersecurity for wealth protection'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Activities & Events
            </h1>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-offWhite max-w-3xl mx-auto">
              Stay connected with industry insights, educational events, and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Upcoming Events</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gold/10 p-3 rounded-lg">
                        <Calendar className="text-gold" size={24} />
                      </div>
                      <div>
                        <div className="text-gold font-semibold">{event.type}</div>
                        <div className="text-charcoal text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })} • {event.time}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">
                      {event.title}
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="lg:w-auto">
                    <a
                      href={event.registration}
                      className="bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 inline-flex items-center"
                    >
                      Register Now
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Past Events</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-offWhite rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-navy/10 p-2 rounded-lg">
                    <Users className="text-navy" size={20} />
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-sm">{event.type}</div>
                    <div className="text-charcoal text-xs">
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-navy mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal text-sm">
                    {event.attendees} attendees
                  </span>
                  <a
                    href={event.recording}
                    className="text-gold hover:text-navy font-medium text-sm"
                  >
                    View Recording →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Key Topics We Cover</h2>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our events and webinars cover the most critical topics facing family offices today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-offWhite p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-navy transition-colors"></div>
                  <span className="text-charcoal font-medium group-hover:text-navy transition-colors">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-white mb-4">Featured Partnerships</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-offWhite max-w-2xl mx-auto">
              Collaborating with industry leaders to provide comprehensive solutions for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div
                key={partnership.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-gold" size={24} />
                  <span className="text-gold text-sm font-medium">{partnership.type}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-white mb-4">
                  {partnership.name}
                </h3>
                <p className="text-offWhite leading-relaxed">
                  {partnership.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, event announcements, and industry updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-navy px-6 py-3 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}