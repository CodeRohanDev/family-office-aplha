import { Linkedin, Mail, Award, Users, Globe, CheckCircle, Star, Building } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Julia Valentine',
      title: 'CEO',
      bio: 'FinTech Advisor with leadership experience at JPMorgan Chase, D. E. Shaw, and Mousse Partners. Expertise in technology & operations assessment, cloud strategy & cybersecurity, digital transformation, ML/AI, RPA, blockchain, data management & governance. MBA – Columbia University; B.Sc. Economics & Finance – NYU Stern, magna cum laude.',
      image: '/team/julia.jpg',
      linkedin: 'https://www.alphamille.com/julia-valentine-bio',
      email: 'julia@foalpha.com'
    },
    {
      name: 'Tracy McWilliams',
      title: 'Co-Founder',
      bio: 'Investor and board member, co-founder of Digital Evolution Institute. Founder & CEO of Inspire Global Ventures (IGV). General Partner of the IGV Transformative Technology Fund.',
      image: '/team/tracy.jpg',
      linkedin: 'https://www.digitalevolution.institute/team',
      email: 'tracy@foalpha.com'
    },
    {
      name: 'Michael Laido',
      title: 'CFO',
      bio: 'Experienced financial executive with expertise in family office operations, financial planning, and strategic management.',
      image: '/team/michael.jpg',
      linkedin: '#',
      email: 'michael@foalpha.com'
    },
    {
      name: 'Phoebe Van Tran',
      title: 'Managing Partner',
      bio: 'Strategic leader with extensive experience in wealth management and family office operations.',
      image: '/team/phoebe.jpg',
      linkedin: '#',
      email: 'phoebe@foalpha.com'
    },
    {
      name: 'Holly Nelson',
      title: 'Strategic Director',
      bio: 'Strategic planning and operations expert focused on family office excellence and client service.',
      image: '/team/holly.jpg',
      linkedin: '#',
      email: 'holly@foalpha.com'
    },
    {
      name: 'Eva van Basten',
      title: 'Vice President',
      bio: 'Senior executive with expertise in client relations and family office management.',
      image: '/team/eva.jpg',
      linkedin: '#',
      email: 'eva@foalpha.com'
    }
  ];

  const advisors = [
    { name: 'Grace Cassab', title: 'Advisor' },
    { name: 'Mike Blogna', title: 'Advisor' },
    { name: 'Caitlin Panasci', title: 'Advisor' },
    { name: 'Jenny Trang Nguyen', title: 'Advisor' },
    { name: 'Brinkley Skye', title: 'Advisor' }
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

      {/* Advisors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Our Advisory Board</h2>
            <div className="section-divider mx-auto mb-8"></div>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Distinguished advisors providing strategic guidance and industry expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={advisor.name}
                className="bg-offWhite p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                  <span className="text-gold font-playfair text-xl font-bold">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {advisor.name}
                </h3>
                <p className="text-charcoal/70 text-sm">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Who We Are</h2>
            <div className="section-divider mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-6">
                Decades of Finance, Accounting, and Technology Experience
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                We are a team with decades of finance, accounting, and technology experience. Our founders 
                have managed their own family office, worked for one of the top 5 family offices globally 
                by AUM, and implemented banking and technology solutions.
              </p>
              <p className="text-charcoal leading-relaxed">
                We simplify tasks like bill pay and accounting, freeing family offices to focus on 
                investments and long-term wealth management. Our expertise spans traditional wealth 
                management and cutting-edge cybersecurity solutions.
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