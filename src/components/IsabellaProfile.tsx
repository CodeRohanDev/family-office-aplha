'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Star, Award, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const IsabellaProfile = () => {
    const achievements = [
        { icon: Award, label: 'Strategic Leadership', value: 'CHANEL Marketing Expansion' },
        { icon: TrendingUp, label: 'Digital Innovation', value: '10+ Years Experience' },
        { icon: Users, label: 'Team Excellence', value: 'Cross-functional Leadership' },
        { icon: Star, label: 'Global Impact', value: 'Luxury Brand Management' }
    ];

    const expertise = [
        'Strategic Planning & Execution',
        'Digital Marketing Innovation',
        'User Experience Design',
        'Brand Management',
        'Cross-functional Leadership',
        'Market Expansion Strategy'
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-offWhite to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 sm:mb-6 px-4">
                        Strategic Leadership Excellence
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4">
                        Meet the strategic minds driving innovation across luxury brands and family office excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gold/10 hover:shadow-3xl transition-all duration-500">
                            {/* Profile Image */}
                            <div className="relative mb-6">
                                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/team/IsabellaKennedy.jpg"
                                        alt="Isabella Kennedy - Strategic Director"
                                        width={400}
                                        height={320}
                                        className="w-full h-full object-cover object-center"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-navy to-gold text-white px-6 py-2 rounded-full font-semibold shadow-lg text-sm text-center">
                                    Strategic Director
                                </div>
                            </div>

                            {/* Name and Title */}
                            <div className="text-center mb-6">
                                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-navy mb-2">
                                    Isabella Kennedy
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-gold font-semibold text-lg">Strategic Director at CHANEL</p>
                                    <p className="text-charcoal/70 text-sm">& Strategic Advisor, Family Office Alpha</p>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-navy/5 rounded-xl p-4 mb-6">
                                <div className="flex items-center mb-2">
                                    <GraduationCap className="text-gold mr-2" size={18} />
                                    <span className="font-semibold text-navy text-sm">Education</span>
                                </div>
                                <p className="text-charcoal/80 text-sm">MBA, University of California, Los Angeles</p>
                            </div>

                            {/* Quote */}
                            <div className="bg-gradient-to-r from-gold/5 to-navy/5 rounded-xl p-4 border-l-4 border-gold">
                                <p className="text-charcoal/80 text-sm italic leading-relaxed">
                                    "Leveraging strategic innovation to create seamless experiences that drive both luxury brand excellence and family office success."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Excellence */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Achievements Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/10"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-gradient-to-br from-navy/10 to-gold/10 p-3 rounded-xl flex-shrink-0">
                                            <achievement.icon className="text-navy" size={24} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-semibold text-navy mb-1 text-sm sm:text-base">{achievement.label}</h4>
                                            <p className="text-charcoal/70 text-xs sm:text-sm">{achievement.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Professional Impact */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10">
                            <h3 className="font-playfair text-2xl font-bold text-navy mb-6">Professional Impact</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-navy mb-4 flex items-center">
                                        <Star className="text-gold mr-2" size={18} />
                                        Current Leadership Role
                                    </h4>
                                    <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                                        As Strategic Director at CHANEL, Isabella oversees marketing expansion management,
                                        driving innovation in luxury brand strategy and digital transformation initiatives.
                                    </p>
                                    <div className="bg-navy/5 rounded-lg p-3">
                                        <p className="text-navy font-medium text-sm">10+ Years in Strategic Leadership</p>
                                        <p className="text-charcoal/70 text-xs">Product Management • Digital Strategy • Marketing</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-navy mb-4 flex items-center">
                                        <Award className="text-gold mr-2" size={18} />
                                        Core Expertise
                                    </h4>
                                    <div className="space-y-2">
                                        {expertise.map((skill, index) => (
                                            <div key={skill} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                                                <span className="text-charcoal/80 text-sm">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collaboration Statement */}
                        <div className="bg-gradient-to-r from-navy to-charcoal rounded-2xl p-8 text-white">
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="bg-gold/20 p-3 rounded-xl flex-shrink-0">
                                    <Users className="text-gold" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-xl font-bold mb-3">Strategic Partnership</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        Isabella brings her extensive experience in luxury brand management and strategic innovation
                                        to Family Office Alpha, providing invaluable insights for high-net-worth families seeking
                                        sophisticated wealth management solutions with cutting-edge digital strategies.
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Button */}
                            <div className="text-center">
                                <Link
                                    href="/team"
                                    className="bg-gold text-navy px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all duration-300 inline-flex items-center group text-sm sm:text-base shadow-lg"
                                >
                                    Meet Our Full Team
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IsabellaProfile;