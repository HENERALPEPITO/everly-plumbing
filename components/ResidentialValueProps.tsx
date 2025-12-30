import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { Clock, DollarSign, BookOpen } from 'lucide-react';

interface ResidentialValuePropsProps {
  onContactRequest: () => void;
  onQuoteRequest: () => void;
}

const ResidentialValueProps: React.FC<ResidentialValuePropsProps> = ({ onContactRequest, onQuoteRequest }) => {
  const valueProps = [
    {
      title: "Dependable",
      content: "When you call, we answer—and we show up on time. Whether it's an emergency or a planned install, you can count on us to be there when it matters most.",
      icon: Clock,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      buttonText: "Emergency Service",
      buttonVariant: "primary" as const,
      onClick: onContactRequest,
      bullets: [
        "24/7 Emergency Response",
        "On-Time Guarantee",
        "Clear Communication"
      ]
    },
    {
      title: "Affordable",
      content: "We believe quality plumbing shouldn't come with a luxury price tag. We don't even charge a service fee for an onsite diagnosis no matter when you need us. Our honest pricing means no surprises and great value for your money.",
      icon: DollarSign,
      color: "bg-green-50",
      textColor: "text-green-600",
      buttonText: "Get Free Quote",
      buttonVariant: "outline" as const,
      onClick: onQuoteRequest,
      bullets: [
        "No Hidden Fees",
        "Free Onsite Diagnosis",
        "Transparent Pricing"
      ]
    },
    {
      title: "Knowledgeable",
      content: "From tricky leaks to complete replacements, we bring years of know-how to every job. We explain your options clearly and recommend the right fix—not just the most expensive one.",
      icon: BookOpen,
      color: "bg-purple-50",
      textColor: "text-purple-600",
      buttonText: "Ask Our Experts",
      buttonVariant: "outline" as const,
      onClick: onContactRequest,
      bullets: [
        "Years of Experience",
        "Honest Recommendations",
        "Right Solution, First Time"
      ]
    }
  ];

  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <MotionWrapper className="text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Promise to You</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Homeowners Trust Everly</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Quality plumbing service shouldn't be complicated. That's why we built our residential services on three simple principles.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((value, index) => (
            <MotionWrapper 
              key={value.title}
              delay={index * 100}
              className="p-12 bg-white rounded-[3rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col group"
            >
              <div className={`w-16 h-16 ${value.color} rounded-3xl flex items-center justify-center ${value.textColor} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">{value.title}</h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-10 flex-grow">
                {value.content}
              </p>
              
              <ul className="space-y-4 mb-12">
                {value.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-center gap-3 text-neutral-600">
                    <div className={`w-2 h-2 rounded-full ${value.textColor.replace('text-', 'bg-')}`} />
                    <span className="text-sm font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-neutral-100">
                <button 
                  onClick={value.onClick}
                  className={`w-full px-8 py-4 font-bold rounded-full transition-all active:scale-95 ${
                    value.buttonVariant === 'primary' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  {value.buttonText}
                </button>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper delay={300} className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-[2rem] p-12 border border-blue-100">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our team is ready to assist you with any plumbing emergency. We respond within 60 minutes and provide honest, upfront pricing before any work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={onContactRequest}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95"
              >
                Call Now: (210) 905-9520
              </button>
              <button 
                onClick={onQuoteRequest}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all active:scale-95"
              >
                Get Free Diagnosis
              </button>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ResidentialValueProps;