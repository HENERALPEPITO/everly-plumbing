
import React from 'react';
import { X, CheckCircle, Phone, Calendar } from 'lucide-react';
import { ServiceDetail } from '../types';
import { PHONE_NUMBER } from '../constants';

interface DetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (serviceName: string, price: string) => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ service, isOpen, onClose, onSchedule }) => {
  if (!service) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      
      <div className={`relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-black/10 rounded-full transition-colors backdrop-blur-md">
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Image Side */}
          <div className="lg:w-2/5 h-64 lg:h-auto relative">
            <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{service.category}</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-3/5 p-8 md:p-12 lg:overflow-y-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">{service.title}</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10 font-light">
              {service.longDescription}
            </p>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-neutral-800">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onSchedule(service.title, "Quote")}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-2xl font-bold hover:bg-neutral-800 transition-all active:scale-95"
              >
                <Calendar className="w-5 h-5" /> Schedule Service
              </button>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-blue-50 text-blue-700 rounded-2xl font-bold hover:bg-blue-100 transition-all"
              >
                <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
