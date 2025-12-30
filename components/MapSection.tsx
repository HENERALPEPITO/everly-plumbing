import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { MAP_LINK } from '../constants';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper className="text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Strategic Location</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Serving San Antonio and Austin and everything in between</h2>
          <p className="text-xl text-neutral-600 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Our specialized fleet is dispatched from our central hub, ensuring rapid arrival across Bexar County. Experience the premium standard of Everly Plumbing at your doorstep.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-full font-bold hover:gap-6 transition-all group shadow-xl"
            >
              Get Directions <Navigation className="w-4 h-4 ml-3 group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white border-2 border-neutral-100 text-neutral-900 rounded-full font-bold hover:bg-neutral-50 transition-all shadow-sm"
            >
              View on Google Maps <ExternalLink className="w-4 h-4 ml-3" />
            </a>
          </div> */}
        </MotionWrapper>
      </div>
    </section>
  );
};

export default MapSection;