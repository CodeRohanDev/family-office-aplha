'use client';

import { useState } from 'react';
import { Linkedin, Mail, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Team Member Card Component
function TeamMemberCard({ member }: { member: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-[380px] sm:h-[420px] w-full perspective-1000 group">
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front Side - Modern Design */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-gray-100 group-hover:border-gold/30"
          onClick={() => setIsFlipped(true)}
        >
          {/* Modern Gradient Background */}
          <div className="relative h-48 sm:h-56 bg-gradient-to-br from-navy via-navy/90 to-charcoal overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gold/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gold/5 rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>

            {/* Profile Avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {member.image ? (
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-gold/20 shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gold/20 shadow-xl">
                    <span className="text-gold font-playfair text-3xl sm:text-4xl font-bold tracking-wide">
                      {member.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                )}
                {/* Glow effect */}
                <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 bg-gold/20 rounded-2xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Modern Info Section */}
          <div className="p-4 sm:p-6 text-center relative">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-navy leading-tight">
                {member.name}
              </h3>
              <div className="inline-block">
                <span className="bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  {member.title}
                </span>
              </div>

              {/* Modern CTA */}
              <div className="pt-2 sm:pt-4">
                <div className="inline-flex items-center gap-2 text-charcoal/60 text-xs sm:text-sm font-medium hover:text-gold transition-colors duration-300">
                  <span>Learn More</span>
                  <div className="w-1 h-1 bg-gold rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>

        {/* Back Side - Modern Design */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Modern Header */}
          <div className="relative bg-gradient-to-r from-navy to-charcoal p-4 sm:p-6 text-white">
            {/* Close Button */}
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 transition-all duration-200 border border-white/10"
            >
              <X className="text-white" size={16} />
            </button>

            {/* Header Content */}
            <div className="pr-10 sm:pr-12">
              <h3 className="font-playfair text-base sm:text-lg font-bold mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-gold/90 font-medium text-xs sm:text-sm tracking-wide">
                {member.title}
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold via-gold/50 to-transparent"></div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 h-[calc(100%-100px)] sm:h-[calc(100%-120px)] flex flex-col">
            {/* Bio Section */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="prose prose-sm max-w-none">
                <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* Contact Section */}
            {/* <div className="pt-4 sm:pt-6 border-t border-gray-100 mt-3 sm:mt-4">
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href={member.linkedin}
                  className="group/link flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-navy/5 hover:bg-navy rounded-xl transition-all duration-300 border border-navy/10 hover:border-navy"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="text-navy group-hover/link:text-white transition-colors duration-300" size={18} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="group/link flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gold/5 hover:bg-gold rounded-xl transition-all duration-300 border border-gold/20 hover:border-gold"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="text-gold group-hover/link:text-navy transition-colors duration-300" size={18} />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const teamMembers = [
    {
      name: 'Julia Valentine',
      title: 'CEO',
      bio: 'Julia Valentine is a solution-focused FinTech Advisor to boards and management teams with an MBA from Columbia Business School and undergraduate degree from NYU Stern. Throughout her executive career, Ms. Valentine has held leadership positions at JPMorgan Chase, D. E. Shaw and Mousse Partners, one of the largest family offices in the world. As a Vice President at JPMorgan Chase, Ms. Valentine led some of the bank\'s key technology projects, including the implementation of the global Equity Derivative portfolio into the Value-at-Risk system, the implementation of the Program Trading solution, and saving $4.5M annually on risk infrastructure through automation process re-engineering.',
      image: '/team/JuliaValentine.jpg',
      linkedin: 'https://www.alphamille.com/julia-valentine-bio',
      email: 'julia@foalpha.com'
    },
    {
      name: 'Tracy McWilliams',
      title: 'Co-Founder',
      bio: 'Tracy McWilliams is a co-founder of the Digital Evolution Institute and an accomplished investor and Board member to teams, technologies and firms that disrupt their industries. She holds an MBA from Columbia Business School and an undergraduate degree from NYU Stern. Ms. McWilliams is the founder, investor and CEO of Inspire Global Ventures (IGV) and General Partner of the IGV Transformative Technology Fund. She is also the investor and founder of Jaspy, a disruptive infrastructure and alternatives technology platform. Throughout her career, Tracy has demonstrated expertise in identifying and nurturing breakthrough technologies that inspire transformative problem-solving across multiple industries.',
      image: '/team/TracyMcWilliams.jpg',
      linkedin: 'https://www.digitalevolution.institute/team',
      email: 'tracy@foalpha.com'
    },
    {
      name: 'Michael Laido',
      title: 'CFO',
      bio: 'Michael Laido brings extensive finance and accounting expertise to our team. With years of experience in financial management and strategic planning, he has worked across various sectors including technology and wealth management. His background includes implementing financial systems and processes that enhance operational efficiency and support long-term growth strategies for high-net-worth families and institutional clients.',
      image: '/team/MichaelLaido.jpg',
      linkedin: '#',
      email: 'michael@foalpha.com'
    },
    {
      name: 'Phoebe Van Tran',
      title: 'Managing Partner',
      bio: 'Phoebe Van Tran is an accomplished finance professional with deep expertise in family office operations and wealth management. Her career spans multiple disciplines including investment management, financial planning, and technology implementation. She has extensive experience working with ultra-high-net-worth families, helping them navigate complex financial structures while leveraging cutting-edge technology solutions to optimize their wealth management strategies.',
      image: '/team/PhoebeVanTran.jpg',
      linkedin: '#',
      email: 'phoebe@foalpha.com'
    },
  ];

  const advisors = [
    {
      name: 'Grace Cassab',
      title: 'Senior Finance Advisor',
      image: '/team/GraceCassab.jpg'
    },
    {
      name: 'Mike Blogna',
      title: 'Technology Strategy Advisor',
      image: '/team/MikeBlogna.jpg'
    },
    {
      name: 'Caitlin Panasci',
      title: 'Family Office Operations Advisor',
      image: '/team/CaitlinPanasci.jpg'
    },
    {
      name: 'Jenny Trang Nguyen',
      title: 'Risk Management Advisor',
      image: '/team/JennyTrangNguyen.jpg'
    },
    {
      name: 'Brinkley Skye',
      title: 'Compliance & Regulatory Advisor',
      image: '/team/BrinkleySkye.jpg'
    }
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
              Our Team
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-offWhite max-w-3xl mx-auto px-4 leading-relaxed">
              Meet the experienced professionals dedicated to protecting and growing your family's wealth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Isabella Kennedy Special Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-offWhite/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-navy/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              Strategic Partnership
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              Strategic Leadership Excellence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold via-gold to-gold/50 mx-auto mb-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Isabella's Profile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gold/20 hover:shadow-3xl transition-all duration-500 max-w-md">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/team/IsabellaKennedy.jpg"
                      alt="Isabella Kennedy - Strategic Director"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-navy to-gold text-white px-6 py-2 rounded-full font-semibold shadow-lg text-sm">
                    Strategic Director
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-navy mb-2">
                    Isabella Kennedy
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gold font-semibold text-lg">Strategic Director at CHANEL</p>
                    <p className="text-charcoal/70 text-sm">& Strategic Advisor, Family Office Alpha</p>
                  </div>
                </div>

                {/* Education Badge */}
                <div className="bg-navy/5 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-4 h-4 bg-gold rounded-full mr-2"></div>
                    <span className="font-semibold text-navy text-sm">MBA, UCLA</span>
                  </div>
                  <p className="text-charcoal/80 text-xs">University of California, Los Angeles</p>
                </div>
              </div>
            </motion.div>

            {/* Professional Excellence */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Leadership Impact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-gold rounded-full"></div>
                  </div>
                  Strategic Leadership Impact
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Current Leadership Role</h4>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      As Strategic Director at CHANEL, Isabella oversees marketing expansion management,
                      driving innovation in luxury brand strategy and digital transformation initiatives
                      across global markets.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-navy/5 rounded-lg p-4 text-center">
                      <p className="text-2xl font-playfair font-bold text-gold mb-1">10+</p>
                      <p className="text-navy font-medium text-xs">Years Experience</p>
                    </div>
                    <div className="bg-gold/5 rounded-lg p-4 text-center">
                      <p className="text-2xl font-playfair font-bold text-navy mb-1">MBA</p>
                      <p className="text-charcoal/70 font-medium text-xs">UCLA Graduate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Partnership */}
              <div className="bg-gradient-to-r from-navy to-charcoal rounded-2xl p-8 text-white">
                <h3 className="font-playfair text-xl font-bold mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-gold rounded-full"></div>
                  </div>
                  Strategic Partnership
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Isabella brings her extensive experience in luxury brand management and strategic innovation
                  to Family Office Alpha, providing invaluable insights for high-net-worth families seeking
                  sophisticated wealth management solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-gold font-semibold text-sm">Strategic Planning</p>
                    <p className="text-white/70 text-xs">& Execution</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gold font-semibold text-sm">Digital Innovation</p>
                    <p className="text-white/70 text-xs">& Marketing</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gold font-semibold text-sm">Brand Management</p>
                    <p className="text-white/70 text-xs">Excellence</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-gold/5 to-navy/5 rounded-xl p-6 border-l-4 border-gold">
                <p className="text-charcoal/80 text-sm italic leading-relaxed mb-3">
                  "Leveraging strategic innovation to create seamless experiences that drive both luxury brand excellence and family office success."
                </p>
                <p className="text-navy font-semibold text-xs">— Isabella Kennedy, Strategic Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section - Modern Design */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-offWhite/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-navy/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-navy/5 text-navy px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              Strategic Excellence
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 sm:mb-6 leading-tight px-4">
              Our Advisory Board
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gold via-gold to-gold/50 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4">
              Distinguished industry leaders providing strategic guidance, deep expertise, and
              <span className="text-gold font-semibold"> decades of combined experience</span> across
              finance, technology, and family office operations.
            </p>
          </motion.div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Person Profile Card */}
                <div className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 border-2 border-gray-200 hover:border-gold/60 relative overflow-hidden h-72 sm:h-80">
                  {/* Profile Header Background */}
                  <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-r from-navy/15 to-gold/15 group-hover:from-navy/25 group-hover:to-gold/25 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Profile Avatar Section */}
                    <div className="flex flex-col items-center pt-3 sm:pt-4 mb-4 sm:mb-6">
                      {/* Profile Picture */}
                      <div className="relative mb-3 sm:mb-4">
                        {advisor.image ? (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl ring-4 ring-gold/40 group-hover:ring-gold/70 transition-all duration-500">
                            <img
                              src={advisor.image}
                              alt={advisor.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-navy/25 to-gold/25 rounded-full flex items-center justify-center group-hover:from-navy/40 group-hover:to-gold/40 transition-all duration-500 border-4 border-white shadow-xl group-hover:shadow-2xl ring-4 ring-gold/40 group-hover:ring-gold/70">
                            <span className="text-navy group-hover:text-gold font-playfair text-lg sm:text-xl font-bold transition-colors duration-300">
                              {advisor.name.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Name */}
                      <h3 className="font-playfair text-base sm:text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300 text-center leading-tight px-2">
                        {advisor.name}
                      </h3>

                      {/* Professional Badge */}
                      <div className="inline-flex items-center gap-1 bg-navy/15 group-hover:bg-gold/25 px-2 sm:px-3 py-1 rounded-full transition-all duration-300 mb-3 sm:mb-4 border border-navy/20 group-hover:border-gold/40">
                        <div className="w-2 h-2 bg-gold rounded-full group-hover:bg-gold animate-pulse"></div>
                        <span className="text-xs font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                          Advisor
                        </span>
                      </div>
                    </div>

                    {/* Experience/Bio Section */}
                    {/* <div className="flex-1 flex flex-col justify-center">
                      <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed text-center group-hover:text-charcoal transition-colors duration-300 px-2 font-medium">
                        {advisor.title}
                      </p>
                    </div> */}

                    {/* Profile Footer */}
                    <div className="pt-3 sm:pt-4 border-t-2 border-gray-200 group-hover:border-gold/50 transition-colors duration-300">
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-px h-6 sm:h-8 bg-gray-200 group-hover:bg-gold/30 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 lg:mt-20 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4 px-4">
                Join Our Network of Excellence
              </h3>
              <p className="text-charcoal/70 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                We're always seeking exceptional advisors who share our commitment to
                protecting and growing family wealth through innovative solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-navy to-charcoal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:from-gold hover:to-gold/80 hover:text-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <span>Explore Opportunities</span>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 sm:py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mb-3 sm:mb-4 px-4">Who We Are</h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">
                Decades of Finance, Accounting, and Technology Experience
              </h3>
              <p className="text-charcoal leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                We are a team with decades of finance, accounting, and technology experience. Our founders
                have managed their own family office, worked for one of the top 5 family offices globally
                by AUM, and implemented banking and technology solutions.
              </p>
              <p className="text-charcoal leading-relaxed text-sm sm:text-base">
                We simplify tasks like bill pay and accounting, freeing family offices to focus on
                investments and long-term wealth management. Our expertise spans traditional wealth
                management and cutting-edge cybersecurity solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-navy p-6 sm:p-8 rounded-xl text-white"
            >
              <h4 className="font-playfair text-lg sm:text-xl font-semibold text-gold mb-4 sm:mb-6">Our Commitment</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite text-sm sm:text-base">Continuous professional development and industry leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite text-sm sm:text-base">Maintaining the highest ethical and professional standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite text-sm sm:text-base">Delivering personalized solutions for each family's unique needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-offWhite text-sm sm:text-base">Staying ahead of emerging threats and opportunities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-offWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}