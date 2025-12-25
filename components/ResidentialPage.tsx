import React from 'react';
import { X } from 'lucide-react';
import ServicesOverview from './ServicesOverview';
import Pricing from './Pricing';
import ContactForm from './ContactForm';
import { FormState } from '../types';

interface ResidentialPageProps {
  onScheduleClick?: (context: FormState) => void;
  showContactModal?: boolean;
  setShowContactModal?: (show: boolean) => void;
  formContext?: FormState;
}

const ResidentialPage: React.FC<ResidentialPageProps> = ({ 
  onScheduleClick, 
  showContactModal = false,
  setShowContactModal,
  formContext
}) => {
  const handleScheduleClick = (context: FormState) => {
    onScheduleClick?.(context);
  };

  const handleDetailClick = (serviceName: string) => {
    console.log('Service detail clicked:', serviceName);
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <header className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-bold">Residential Services</h1>
        <p className="text-neutral-600 mt-2">Our most requested residential plumbing services.</p>
      </header>

      <main>
        {/* <ServicesOverview onDetailClick={handleDetailClick} /> */}
        <Pricing onScheduleClick={handleScheduleClick} />
      </main>

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <button onClick={() => setShowContactModal?.(false)} className="absolute top-4 right-4 p-2 text-neutral-700 hover:bg-neutral-100 rounded-full" aria-label="Close modal"><X className="w-6 h-6" /></button>
            <ContactForm initialState={formContext || { type: 'general' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResidentialPage;
