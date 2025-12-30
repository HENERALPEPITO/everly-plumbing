import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { CONSTRUCTION_SERVICES } from '../constants';
import { Hammer, Ruler, Clock, DollarSign, BookOpen } from 'lucide-react';

interface ConstructionServicesProps {
  onQuoteRequest: () => void;
  onSiteWalkRequest: () => void;
}

// Map icon names to components
const iconComponents = {
  Clock,
  DollarSign,
  BookOpen,
  Hammer,
  Ruler
};

const ConstructionServices: React.FC<ConstructionServicesProps> = ({ onQuoteRequest, onSiteWalkRequest }) => {
  const services = [
    {
      ...CONSTRUCTION_SERVICES.dependable,
      buttonText: "Request Builder Quote",
      onClick: onQuoteRequest,
      buttonVariant: "primary" as const,
      bullets: [
        "Always on time, every time",
        "Clear, proactive communication",
        "No project delays"
      ]
    },
    {
      ...CONSTRUCTION_SERVICES.affordable,
      buttonText: "Get Competitive Quote",
      onClick: onQuoteRequest,
      buttonVariant: "outline" as const,
      bullets: [
        "Transparent, competitive pricing",
        "No hidden fees or surprises",
        "Budget-friendly for all trades"
      ]
    },
    {
      ...CONSTRUCTION_SERVICES.knowledgeable,
      buttonText: "Schedule a Site Walk",
      onClick: onSiteWalkRequest,
      buttonVariant: "outline" as const,
      bullets: [
        "Current with all codes & standards",
        "Right-first-time installations",
        "Reduced rework & warranty claims"
      ]
    }
  ];

  return (
    <section id="builders" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <MotionWrapper className="text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Builder Partnerships</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">New Home Construction</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">Why San Antonio builders choose Everly for their most ambitious underground and rough-in projects.</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            
            return (
              <MotionWrapper 
                key={service.title}
                delay={index * 100}
                className="p-12 bg-white rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-10 flex-grow">
                  {service.content}
                </p>
                <ul className="space-y-4 mb-12 text-sm text-neutral-500">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={service.onClick}
                  className={`inline-block px-8 py-4 font-bold rounded-full transition-all active:scale-95 ${
                    service.buttonVariant === 'primary' 
                      ? 'bg-black text-white hover:bg-neutral-800' 
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {service.buttonText}
                </button>
              </MotionWrapper>
            );
          })}
        </div>

  
      </div>
    </section>
  );
};

export default ConstructionServices;