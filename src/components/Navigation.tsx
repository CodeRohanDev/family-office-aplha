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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-2">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-24 h-24 sm:w-26 sm:h-26 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Family Office Alpha Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-2 xl:px-4 py-2 font-medium transition-all duration-300 rounded-lg group text-sm xl:text-base ${isActive
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
          </div>

          {/* Right Section */}
          <div className="flex items-center flex-shrink-0">
            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="bg-navy text-white px-3 xl:px-6 py-2.5 font-semibold hover:bg-gold hover:text-navy transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm xl:text-base whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-charcoal hover:text-gold hover:bg-gold/5 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
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

            {/* Contact Button - Mobile */}
            <Link
              href="/contact"
              className="block mx-4 mt-4 bg-navy text-white px-4 py-3 font-semibold hover:bg-gold hover:text-navy transition-all duration-300 shadow-md text-center rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;