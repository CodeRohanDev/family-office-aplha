import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Family Office Alpha
            </h3>
            <p className="text-offWhite mb-4 max-w-md">
              Professional family office and cybersecurity advisory services for 
              high-net-worth families and institutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-offWhite hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-offWhite hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/company-profile" className="text-offWhite hover:text-gold transition-colors">Company Profile</Link></li>
              <li><Link href="/services" className="text-offWhite hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-offWhite hover:text-gold transition-colors">Team</Link></li>
              <li><Link href="/activities" className="text-offWhite hover:text-gold transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gold" />
                <span className="text-offWhite">info@familyofficealpha.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold" />
                <span className="text-offWhite">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-gold" />
                <span className="text-offWhite">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-offWhite">
            © 2024 Family Office Alpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;