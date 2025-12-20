
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { ALL_SERVICES } from '../constants';
import { Wrench, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  onDetailClick: (serviceName: string) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onDetailClick }) => {
  return (
    <section id="services-overview" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper className="mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Capability</span>
          {/* phrase 'Standard & Elite Solutions' fully deleted as requested */}
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service, idx) => (
            <MotionWrapper key={service} delay={idx * 50} direction="up">
              <div 
                onClick={() => onDetailClick(service)}
                className="group p-8 border border-neutral-100 rounded-3xl bg-neutral-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed flex-grow">
                  Precision service for {service.toLowerCase()}, ensuring peak efficiency and long-term reliability.
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-blue-600 transition-colors mt-auto">
                  View Detail <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
