import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/running-white.png" alt="GearUp Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold">GearUp</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your ultimate destination for premium sportswear and gear. Quality equipment for fitness enthusiasts, cyclists, and yoga practitioners.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@gearup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 8317403407<br></br>+91 6363021584</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/fitness" className="text-gray-300 hover:text-white transition-colors">
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/products/cycling" className="text-gray-300 hover:text-white transition-colors">
                  Cycling
                </Link>
              </li>
              <li>
                <Link to="/products/yoga" className="text-gray-300 hover:text-white transition-colors">
                  Yoga
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 GearUp. All rights reserved.| Thrishaa J & Agamya David | Built for college project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;