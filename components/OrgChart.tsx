
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { ORG_CHART_DATA } from '../constants';
import { OrgRole } from '../types';

const RoleNode: React.FC<{ role: any; level: number }> = ({ role, level }) => {
  return (
    <div className="flex flex-col items-center">
      <MotionWrapper delay={level * 150} className="w-full px-4">
        <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center relative z-10 w-64 mx-auto group">
          <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 rounded-2xl transition-colors duration-500 -z-10" />
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-1">{role.role}</h4>
          <p className="text-base font-bold text-neutral-800 leading-tight">{role.name}</p>
        </div>
      </MotionWrapper>

      {role.subordinates && (
        <div className="flex flex-col items-center mt-8">
          <div className="w-[1px] h-8 bg-neutral-200" />
          <div className="flex gap-4 md:gap-12 relative">
             {/* Horizontal connector line */}
            {role.subordinates.length > 1 && (
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-neutral-200" />
            )}
            
            {role.subordinates.map((sub: any, i: number) => (
              <div key={i} className="flex flex-col items-center">
                 <div className="w-[1px] h-8 bg-neutral-200" />
                 <RoleNode role={sub} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const OrgChart: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-neutral-50 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <MotionWrapper className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Organizational Excellence</h2>
          <p className="text-neutral-500 text-lg">Every project is backed by a specialized team of industry leaders.</p>
        </MotionWrapper>
        
        <div className="min-w-[1000px] flex justify-center pb-24">
          <RoleNode role={ORG_CHART_DATA} level={0} />
        </div>
      </div>
    </section>
  );
};

export default OrgChart;
