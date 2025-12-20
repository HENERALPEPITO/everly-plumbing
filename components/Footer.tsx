
import React from 'react';
import { PHONE_NUMBER, SOCIAL_LINKS } from '../constants';
import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Everly Plumbing</h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-md">
              The benchmark for residential and commercial plumbing in San Antonio. Combining legacy craftsmanship with modern engineering.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, link: SOCIAL_LINKS.instagram },
                { icon: <Facebook className="w-5 h-5" />, link: SOCIAL_LINKS.facebook },
                { icon: <Youtube className="w-5 h-5" />, link: SOCIAL_LINKS.youtube },
                { icon: <span className="font-bold text-xs">TIKTOK</span>, link: SOCIAL_LINKS.tiktok }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-neutral-500 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-neutral-300">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-neutral-500 uppercase tracking-widest text-xs">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="block text-2xl font-bold hover:text-blue-400 transition-colors"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-neutral-400">service@everlyplumbing.com</p>
              <p className="text-neutral-400">San Antonio, Texas</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 gap-4">
          <p>© 2024 Everly Plumbing. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span>License #882943</span>
            <span>Master Plumber Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
