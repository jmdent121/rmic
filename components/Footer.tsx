
import React from 'react';
import { APP_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-oswald text-2xl font-bold text-orange-500 mb-6 uppercase tracking-wider">{APP_CONFIG.companyName}</h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              With a 40-year legacy of excellence in Kolkata, we provide top-tier industrial components across West Bengal and India. Trust, reliability, and precision are the pillars of our corporation.
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Order Booking</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">📍</span>
                <span>Strand Road, Kolkata, WB 700001</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">📞</span>
                <span>{APP_CONFIG.phone}</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✉️</span>
                <span>{APP_CONFIG.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {APP_CONFIG.companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
