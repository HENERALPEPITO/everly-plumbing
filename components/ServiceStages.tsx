// ServiceStages.tsx - Replaced with 3-tile design

import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { Clock, DollarSign, BookOpen } from 'lucide-react';

interface ServiceStagesProps {
  onDetailClick: (serviceName: string) => void;
}

const ServiceStages: React.FC<ServiceStagesProps> = ({ onDetailClick }) => {
  const valueProps = [
    {
      title: "Dependable",
      content: "When you call, we answer—and we show up on time. Whether it's an emergency or a planned install, you can count on us to be there when it matters most.",
      icon: Clock,
      color: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Affordable",
      content: "We believe quality plumbing shouldn't come with a luxury price tag. We don't even charge a service fee for an onsite diagnosis no matter when you need us. Our honest pricing means no surprises and great value for your money.",
      icon: DollarSign,
      color: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Knowledgeable",
      content: "From tricky leaks to complete replacements, we bring years of know-how to every job. We explain your options clearly and recommend the right fix—not just the most expensive one.",
      icon: BookOpen,
      color: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <MotionWrapper className="text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Residential Service</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Homeowners Choose Everly</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Three simple promises that make your plumbing experience stress-free and reliable.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((value, index) => (
            <MotionWrapper 
              key={value.title}
              delay={index * 100}
              className="p-12 bg-neutral-50 rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col group"
            >
              <div className={`w-16 h-16 ${value.color} rounded-3xl flex items-center justify-center ${value.textColor} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">{value.title}</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {value.content}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStages;