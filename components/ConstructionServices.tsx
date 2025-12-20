
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { CONSTRUCTION_SERVICES } from '../constants';
import { Hammer, Ruler } from 'lucide-react';

interface ConstructionServicesProps {
  onQuoteRequest: () => void;
  onSiteWalkRequest: () => void;
}

const ConstructionServices: React.FC<ConstructionServicesProps> = ({ onQuoteRequest, onSiteWalkRequest }) => {
  return (
    <section id="builders" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <MotionWrapper className="text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Builder Partnerships</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">New Build Excellence</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">Why San Antonio builders choose Everly for their most ambitious underground and rough-in projects.</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <MotionWrapper className="p-12 bg-white rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col">
             <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
               <Hammer className="w-8 h-8" />
             </div>
             <h3 className="text-3xl font-bold mb-6">{CONSTRUCTION_SERVICES.underground.title}</h3>
             <p className="text-lg text-neutral-600 leading-relaxed mb-10 flex-grow">
               {CONSTRUCTION_SERVICES.underground.content}
             </p>
             <ul className="space-y-4 mb-12 text-sm text-neutral-500">
               <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 Precision site grading and excavation
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 High-density polyethylene materials
               </li>
             </ul>
             <button 
                onClick={onQuoteRequest}
                className="inline-block px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transition-all active:scale-95"
              >
                Request Builder Quote
              </button>
          </MotionWrapper>

          <MotionWrapper delay={200} className="p-12 bg-white rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col">
             <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
               <Ruler className="w-8 h-8" />
             </div>
             <h3 className="text-3xl font-bold mb-6">{CONSTRUCTION_SERVICES.roughIn.title}</h3>
             <p className="text-lg text-neutral-600 leading-relaxed mb-10 flex-grow">
               {CONSTRUCTION_SERVICES.roughIn.content}
             </p>
             <ul className="space-y-4 mb-12 text-sm text-neutral-500">
               <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 Architectural plan adherence
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 Licensed journeyman oversight
               </li>
             </ul>
             <button 
                onClick={onSiteWalkRequest}
                className="inline-block px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all active:scale-95"
              >
                Schedule a Site Walk
              </button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ConstructionServices;
