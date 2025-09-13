import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Flipside Specialties</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in commercial construction supplies, serving Houston
              and beyond with quality architectural products and unmatched service.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/division8" className="block text-gray-400 hover:text-white transition-colors">Division 8</Link>
              <Link to="/division10" className="block text-gray-400 hover:text-white transition-colors">Division 10</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Building className="h-5 w-5 mr-2" />
                <span>5829 W Sam Houston Pkwy N #906, Houston, TX 77041</span>
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>832.844.2521</span>
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a 
                  href="mailto:info@flipsidespecialties.com"
                  className="hover:text-white transition-colors"
                >
                  info@flipsidespecialties.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Flipside Specialties. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;