'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/company-profile', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/activities', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/10'
        : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Family Office Alpha Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300">
                Family Office Alpha
              </span>
              <span className="text-xs text-charcoal/60 font-medium tracking-wide">
                WEALTH • SECURITY • EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${isActive
                      ? 'text-gold bg-gold/5'
                      : 'text-charcoal hover:text-gold hover:bg-gold/5'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-gold hover:bg-gold/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="py-4 space-y-2 border-t border-gold/10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
                      ? 'text-gold bg-gold/10 border-l-4 border-gold'
                      : 'text-charcoal hover:text-gold hover:bg-gold/5'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gold/10 mt-4">
              <Link
                href="/contact"
                className="block w-full bg-navy text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;