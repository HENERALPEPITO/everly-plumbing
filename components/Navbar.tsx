import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PRICING_LIST, SERVICE_DETAILS } from '../constants';
import { Menu, X } from 'lucide-react';
import ContactForm from './ContactForm';
import NewHomeConstructionMegaMenu from './NewHomeConstructionMegaMenu';

interface NavbarProps {
  onScheduleClick?: () => void;
  showContactModal?: boolean;
  setShowContactModal?: (show: boolean) => void;
  formContext?: any;
  setFormContext?: (context: any) => void;
}

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'RESIDENTIAL SERVICE', href: '/residential' },
  { label: 'NEW HOME CONSTRUCTION', href: '/new-home-construction' },
  { label: 'FLEXIBLE FINANCING', href: '/flexible-financing' },
  { label: 'CONTACT US', href: '/contact-us' },
];

const Navbar: React.FC<NavbarProps> = ({ onScheduleClick, showContactModal = false, setShowContactModal, setFormContext }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<null | 'residential' | 'construction'>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setHoveredItem(null); setMobileOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleNavItemHoverEnter = (item: 'residential' | 'construction') => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredItem(item);
  };

  const handleNavItemHoverLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-100 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between gap-8">
          <div className="flex-none">
            <Link to="/" className="inline-flex items-center" aria-label="Everly Plumbing home">
              {/* Increased logo size */}
              <img 
                src="/everlyplumbing_logo.png" 
                alt="Everly Plumbing" 
                className="h-16 md:h-24 lg:h-28 object-contain transition-all duration-200" 
              />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                // For RESIDENTIAL SERVICE and NEW HOME, use hover to show modal
                if (item.label === 'RESIDENTIAL SERVICE') {
                  return (
                    <li 
                      key={item.label}
                      onMouseEnter={() => handleNavItemHoverEnter('residential')}
                      onMouseLeave={handleNavItemHoverLeave}
                    >
                      <Link to={item.href} className="group relative text-sm font-medium uppercase tracking-wider text-neutral-800 px-3 py-3 transition-colors hover:text-black whitespace-nowrap">
                        {item.label}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-[2px] bg-black transition-all group-hover:w-8" />
                      </Link>
                    </li>
                  );
                }

                if (item.label === 'NEW HOME CONSTRUCTION') {
                  return (
                    <li 
                      key={item.label}
                      onMouseEnter={() => handleNavItemHoverEnter('construction')}
                      onMouseLeave={handleNavItemHoverLeave}
                    >
                      <Link to={item.href} className="group relative text-sm font-medium uppercase tracking-wider text-neutral-800 px-3 py-3 transition-colors hover:text-black whitespace-nowrap">
                        {item.label}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-[2px] bg-black transition-all group-hover:w-8" />
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link to={item.href} className="group relative text-sm font-medium uppercase tracking-wider text-neutral-800 px-3 py-3 transition-colors hover:text-black whitespace-nowrap">
                      {item.label}
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-[2px] bg-black transition-all group-hover:w-8" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center flex-none lg:hidden">
            <button onClick={() => setMobileOpen(true)} className="p-2 text-neutral-800" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMobileOpen(false)} className="inline-flex items-center">
              {/* Increased mobile logo size */}
              <img src="/everlyplumbing_logo.png" alt="Everly Plumbing" className="h-14" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-neutral-800" aria-label="Close menu"><X className="w-6 h-6" /></button>
          </div>

          <nav className="mt-10 flex-1">
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.label === 'RESIDENTIAL SERVICE' ? (
                    <button onClick={() => { setMobileOpen(false); setHoveredItem('residential'); }} className="text-2xl font-bold text-neutral-900 uppercase tracking-tight">{item.label}</button>
                  ) : item.label === 'NEW HOME CONSTRUCTION' ? (
                    <button onClick={() => { setMobileOpen(false); setHoveredItem('construction'); }} className="text-2xl font-bold text-neutral-900 uppercase tracking-tight">{item.label}</button>
                  ) : item.label === 'CONTACT US' ? (
                    <button onClick={() => { setMobileOpen(false); setShowContactModal?.(true); }} className="text-2xl font-bold text-neutral-900 uppercase tracking-tight">{item.label}</button>
                  ) : (
                    <Link to={item.href} onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-neutral-900 uppercase tracking-tight">{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto">
            <button onClick={() => { setMobileOpen(false); setShowContactModal?.(true); }} className="w-full block text-center py-4 bg-black text-white rounded-full font-bold">Schedule Service</button>
          </div>
        </div>
      </div>

      {/* Mega Modal (residential / construction) - Desktop Hover */}
      {hoveredItem && (
        <div 
          className="hidden lg:block fixed top-24 left-0 right-0 z-40"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
            setHoveredItem(hoveredItem);
          }}
          onMouseLeave={() => {
            closeTimeoutRef.current = setTimeout(() => {
              setHoveredItem(null);
            }, 150);
          }}
        >
          <div className="mx-6 md:mx-10 bg-white rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {hoveredItem === 'residential' ? (
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {PRICING_LIST.map((p) => {
                    const sd = SERVICE_DETAILS[p.id];
                    const img = sd?.imageUrl ?? p.imageUrl ?? 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800';
                    return (
                      <div key={p.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                        <div className="h-40 w-full overflow-hidden bg-neutral-100">
                          <img src={img} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-sm font-bold">{p.title}</h4>
                            <span className="text-sm font-semibold">{p.price}</span>
                          </div>
                          <p className="mt-2 text-xs text-neutral-600">{p.description}</p>
                          <div className="mt-4 text-right">
                            <button onClick={() => { setFormContext?.({ type: 'service', serviceName: p.title, price: p.price }); setHoveredItem(null); setShowContactModal?.(true); }} className="inline-flex items-center px-3 py-1.5 bg-black text-white text-xs font-bold rounded-full hover:opacity-95">SCHEDULE</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <NewHomeConstructionMegaMenu onClose={() => setHoveredItem(null)} />
            )}
          </div>
        </div>
      )}

      {/* Mobile Mega Modal - Click Based */}
      {hoveredItem && mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex items-start md:items-center justify-center p-6 pt-20">
          <div className="absolute inset-0 bg-black/60" onClick={() => setHoveredItem(null)} />

          <div className="relative z-10 w-full max-w-[1100px] bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-lg font-bold uppercase">{hoveredItem === 'residential' ? 'Residential Services' : 'New Home Construction'}</h3>
              <button onClick={() => setHoveredItem(null)} className="p-2 text-neutral-700" aria-label="Close modal"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6">
              {hoveredItem === 'residential' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PRICING_LIST.map((p) => {
                    const sd = SERVICE_DETAILS[p.id];
                    const img = sd?.imageUrl ?? p.imageUrl ?? 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800';
                    return (
                      <div key={p.id} className="border rounded-lg overflow-hidden bg-white">
                        <div className="h-40 w-full overflow-hidden bg-neutral-100">
                          <img src={img} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-sm font-bold">{p.title}</h4>
                            <span className="text-sm font-semibold">{p.price}</span>
                          </div>
                          <p className="mt-2 text-xs text-neutral-600">{p.description}</p>
                          <div className="mt-4 text-right">
                            <button onClick={() => { setFormContext?.({ type: 'service', serviceName: p.title, price: p.price }); setHoveredItem(null); setMobileOpen(false); setShowContactModal?.(true); }} className="inline-flex items-center px-3 py-1.5 bg-black text-white text-xs font-bold rounded-full">SCHEDULE</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {Object.values(SERVICE_DETAILS).map((s) => (
                    <div key={s.title} className="flex gap-4 items-start">
                      <img src={s.imageUrl} alt={s.title} className="w-24 h-16 object-cover rounded" />
                      <div>
                        <h4 className="font-bold text-sm">{s.title}</h4>
                        <p className="text-xs text-neutral-600">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowContactModal?.(false)} className="absolute top-4 right-4 p-2 text-neutral-700 hover:bg-neutral-100 rounded-full" aria-label="Close modal"><X className="w-6 h-6" /></button>
            <div className="p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;