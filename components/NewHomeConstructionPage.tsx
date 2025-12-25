import React from 'react';
import ConstructionServices from './ConstructionServices';
import ServiceStages from './ServiceStages';
import ContactForm from './ContactForm';
import { SERVICE_DETAILS } from '../constants';

const NewHomeConstructionPage: React.FC = () => {
  const handleQuoteRequest = () => {
  };

  const handleSiteWalkRequest = () => {
  };

  const handleDetailClick = (serviceName: string) => {
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <header className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-bold">New Home Construction</h1>
        <p className="text-neutral-600 mt-2">End-to-end plumbing for new builds.</p>
      </header>

      <main>
        
        <ConstructionServices onQuoteRequest={handleQuoteRequest} onSiteWalkRequest={handleSiteWalkRequest} />
        <ServiceStages onDetailClick={handleDetailClick} />

        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(SERVICE_DETAILS).map((s) => (
              <div key={s.title} className="border rounded-lg overflow-hidden p-4">
                <img src={s.imageUrl} alt={s.title} className="w-full h-36 object-cover mb-3" />
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-neutral-600">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <ContactForm initialState={{ type: 'general' }} />
        </section>
      </main>
    </div>
  );
};

export default NewHomeConstructionPage;
