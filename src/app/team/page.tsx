import { Linkedin, Mail, Award, Users, Globe, CheckCircle, Star, Building } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Michael Richardson',
      title: 'Founder & CEO',
      bio: 'Former Goldman Sachs Managing Director with 20+ years in wealth management and family office services. Expert in strategic planning and client relationship management.',
      image: '/team/michael.jpg',
      linkedin: '#',
      email: 'michael@familyofficealpha.com'
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Security Officer',
      bio: 'Cybersecurity veteran with extensive experience at NSA and leading tech companies. Specializes in threat assessment and security architecture for high-net-worth clients.',
      image: '/team/sarah.jpg',
      linkedin: '#',
      email: 'sarah@familyofficealpha.com'
    },
    {
      name: 'David Thompson',
      title: 'Managing Director, Wealth Advisory',
      bio: 'CFA charterholder with 15+ years at top-tier investment firms. Leads our investment strategy and portfolio management services for family offices.',
      image: '/team/david.jpg',
      linkedin: '#',
      email: 'david@familyofficealpha.com'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Director of Compliance',
      bio: 'Former regulatory attorney with deep expertise in family office compliance and governance. Ensures all operations meet the highest regulatory standards.',
      image: '/team/elena.jpg',
      linkedin: '#',
      email: 'elena@familyofficealpha.com'
    },
    {
      name: 'James Park',
      title: 'Senior Cybersecurity Analyst',
      bio: 'Certified Ethical Hacker and security consultant with expertise in penetration testing and incident response for financial institutions.',
      image: '/team/james.jpg',
      linkedin: '#',
      email: 'james@familyofficealpha.com'
    },
    {
      name: 'Amanda Foster',
      title: 'Client Relations Manager',
      bio: 'Relationship management specialist with a focus on high-net-worth client service. Ensures exceptional client experience and satisfaction.',
      image: '/team/amanda.jpg',
      linkedin: '#',
      email: 'amanda@familyofficealpha.com'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Our Team
            </h1>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-offWhite max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to protecting and growing your family's wealth
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Profile Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center">
                  <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-playfair text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-4">{member.title}</p>
                  <p className="text-charcoal text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-charcoal hover:text-gold transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-charcoal hover:text-gold transition-colors duration-200"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Leadership Philosophy</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-6">
                Experience Meets Innovation
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Our leadership team combines decades of experience in traditional wealth management 
                with cutting-edge expertise in cybersecurity and digital innovation. This unique 
                blend allows us to address both time-tested financial principles and modern security challenges.
              </p>
              <p className="text-charcoal leading-relaxed">
                We believe in building long-term relationships based on trust, transparency, and 
                exceptional service. Our team's diverse backgrounds in finance, technology, and 
                regulatory compliance ensure comprehensive solutions for every client need.
              </p>
            </div>
            
            <div className="bg-navy p-8 rounded-xl text-white">
              <h4 className="font-playfair text-xl font-semibold text-gold mb-6">Our Commitment</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite">Continuous professional development and industry leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite">Maintaining the highest ethical and professional standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite">Delivering personalized solutions for each family's unique needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite">Staying ahead of emerging threats and opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our growing team of professionals.
          </p>
          <a
            href="/contact"
            className="bg-gold text-navy px-8 py-4 rounded-xl font-semibold hover:bg-navy hover:text-white transition-all duration-300 inline-block"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}