
import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services-overview' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Financing', href: '#financing' },
    { label: 'Builders', href: '#builders' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-10 
          ${isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-neutral-100 shadow-sm' 
            : 'py-6 bg-transparent text-white'
          }
        `}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              EVERLY PLUMBING<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-10 flex-[2]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`relative group text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300
                  ${isScrolled ? 'text-neutral-600 hover:text-black' : 'text-white/80 hover:text-white'}
                `}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className={`hidden xl:flex items-center gap-2 text-sm font-medium tracking-tight transition-opacity hover:opacity-70
                ${isScrolled ? 'text-neutral-500' : 'text-white/70'}
              `}
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_NUMBER}
            </a>

            <button 
              onClick={onScheduleClick}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-lg
                ${isScrolled 
                  ? 'bg-black text-white hover:bg-neutral-800 shadow-neutral-200' 
                  : 'bg-white text-black hover:bg-neutral-100 shadow-black/20'
                }
              `}
            >
              Schedule Service
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-1 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[110] bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-xl font-bold tracking-tighter text-black">
              EVERLY PLUMBING<span className="text-blue-500">.</span>
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-black hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                style={{ 
                  transitionDelay: `${idx * 50 + 100}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0
                }}
                className="text-4xl font-bold tracking-tight text-neutral-900 transition-all duration-500 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto border-t border-neutral-100 pt-10">
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-4">Direct Support</p>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
              className="text-2xl font-bold text-black mb-10 block"
            >
              {PHONE_NUMBER}
            </a>
            
            <button
              onClick={() => { setIsOpen(false); onScheduleClick(); }}
              className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg transition-transform active:scale-[0.98] shadow-2xl shadow-neutral-300"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
