
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { SERVICE_DETAILS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ServiceStagesProps {
  onDetailClick: (serviceName: string) => void;
}

const ServiceStages: React.FC<ServiceStagesProps> = ({ onDetailClick }) => {
  const stages = Object.values(SERVICE_DETAILS);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <MotionWrapper className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Service Life-Cycle</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            From groundbreaking infrastructure to the final fixture installation, 
            Everly Plumbing defines every stage with engineering precision.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stages.map((stage, idx) => (
            <MotionWrapper 
              key={stage.title} 
              delay={idx * 100} 
              direction="up" 
              className="h-full"
            >
              <div 
                onClick={() => onDetailClick(stage.title)}
                className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden bg-neutral-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                {/* Background Image with Zoom Animation */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${stage.imageUrl}')` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter uppercase leading-tight">
                    {stage.title}
                  </h3>
                  
                  <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-blue-400 group-hover:text-white transition-colors">
                    <span className="relative">
                      {stage.description}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStages;
