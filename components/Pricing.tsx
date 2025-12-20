
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { PRICING_LIST } from '../constants';
import { FormState } from '../types';

interface PricingProps {
  onScheduleClick: (context: FormState) => void;
}

const Pricing: React.FC<PricingProps> = ({ onScheduleClick }) => {
  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Transparent Pricing</h2>
          <p className="text-neutral-500 text-lg">Defined rates for premium San Antonio plumbing service.</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_LIST.map((card, idx) => (
            <MotionWrapper key={card.title} delay={idx * 50}>
              <div className="group h-full p-8 rounded-3xl border border-neutral-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">{card.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{card.price}</span>
                  <span className="text-neutral-400 text-xs font-medium">starting</span>
                </div>
                <p className="text-neutral-500 text-sm mb-8 leading-relaxed flex-grow">
                  {card.description}
                </p>
                <button 
                  onClick={() => onScheduleClick({ type: 'service', serviceName: card.title, price: card.price })} 
                  className="w-full py-3 text-center rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white group-hover:shadow-md"
                >
                  Schedule
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
