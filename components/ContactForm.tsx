
import React, { useEffect } from 'react';
import { MotionWrapper } from './MotionWrapper';
import { PHONE_NUMBER, SOCIAL_LINKS } from '../constants';
import { Instagram, Facebook, Youtube, Phone, Send, Info } from 'lucide-react';
import { FormState } from '../types';

interface ContactFormProps {
  initialState?: FormState;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialState }) => {
  const [focused, setFocused] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  
  const [formType, setFormType] = React.useState<FormState>(initialState || { type: 'general' });

  useEffect(() => {
    if (initialState) {
      setFormType(initialState);
      setSubmitted(false);
    }
  }, [initialState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const InputField = ({ label, id, type = "text", value = "", readOnly = false, placeholder = " " }: { label: string, id: string, type?: string, value?: string, readOnly?: boolean, placeholder?: string }) => (
    <div className="relative mb-6 group">
      <input
        type={type}
        id={id}
        required
        defaultValue={value}
        readOnly={readOnly}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        placeholder={placeholder}
        className={`w-full px-5 pt-6 pb-2 rounded-2xl bg-neutral-50 border transition-all duration-300 outline-none peer
          ${readOnly ? 'bg-neutral-100 cursor-not-allowed text-neutral-500' : ''}
          ${focused === id ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-neutral-200'}
        `}
      />
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-300 pointer-events-none text-neutral-400
          ${focused === id || placeholder !== " " ? '-translate-y-3 text-[10px] text-blue-500 font-bold' : 'top-4 text-sm'}
          peer-focus:-translate-y-3 peer-focus:text-[10px] peer-focus:text-blue-500
          peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-blue-500
        `}
      >
        {label}
      </label>
    </div>
  );

  const getHeader = () => {
    if (formType.type === 'builder') return "Request Builder Quote";
    if (formType.type === 'sitewalk') return "Schedule a Site Walk";
    if (formType.type === 'service') return `Schedule ${formType.serviceName}`;
    return "Let's solve it.";
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <MotionWrapper direction="right">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter transition-all duration-500">
            {getHeader()}
          </h2>
          <p className="text-xl text-neutral-500 mb-12 font-light">
            {formType.type.includes('builder') 
              ? "Expert project management for new construction and commercial infrastructure."
              : "San Antonio's most trusted engineering-led plumbing team. Use the form to the right or reach us directly."}
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold mb-4">Direct Line</h4>
              <a href={`tel:${PHONE_NUMBER}`} className="text-4xl font-bold hover:text-blue-600 transition-colors flex items-center gap-4">
                <Phone className="w-8 h-8 text-blue-500" /> {PHONE_NUMBER}
              </a>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold mb-4">Social Ecosystem</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: SOCIAL_LINKS.instagram },
                  { icon: <Facebook className="w-5 h-5" />, href: SOCIAL_LINKS.facebook },
                  { icon: <Youtube className="w-5 h-5" />, href: SOCIAL_LINKS.youtube }
                ].map((s, idx) => (
                  <a key={idx} href={s.href} target="_blank" className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper direction="left">
          <div className="bg-white border border-neutral-100 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="py-24 text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Transmitted</h3>
                <p className="text-neutral-500">A service coordinator will call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} key={formType.serviceName || 'form'}>
                {formType.type === 'service' && (
                  <div className="flex gap-4 mb-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <Info className="w-5 h-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-1">Service Selection</p>
                      <p className="text-sm text-blue-700">{formType.serviceName} — Starting at {formType.price}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <InputField label={formType.type.includes('builder') ? "Company Name" : "Full Name"} id="name" />
                  <InputField label="Phone Number" id="phone" type="tel" />
                </div>

                <InputField label="Email Address" id="email" type="email" />
                
                {formType.type === 'builder' ? (
                   <>
                     <InputField label="Project Address" id="address" />
                     <InputField label="Project Type" id="project_type" value="Underground Plumbing" readOnly />
                   </>
                ) : formType.type === 'sitewalk' ? (
                  <>
                     <InputField label="Site Address" id="address" />
                     <InputField label="Request Type" id="project_type" value="Rough-In Site Walk" readOnly />
                  </>
                ) : (
                   <InputField label="Service Type" id="project" value={formType.serviceName || "General Plumbing Service"} readOnly />
                )}

                <div className="relative mb-8">
                  <textarea 
                    placeholder=" "
                    required
                    className="w-full h-32 px-5 py-5 rounded-2xl bg-neutral-50 border border-neutral-200 outline-none focus:border-blue-500 transition-all peer"
                  ></textarea>
                  <label className="absolute left-5 top-4 text-sm text-neutral-400 transition-all peer-focus:-translate-y-3 peer-focus:text-[10px] peer-focus:text-blue-500 peer-focus:font-bold">Project Details & Location</label>
                </div>

                <button className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all active:scale-95 shadow-xl">
                  {formType.type === 'builder' ? "Request Builder Quote" : "Confirm Schedule Request"}
                </button>
              </form>
            )}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ContactForm;
