
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Pricing from './components/Pricing';
import Financing from './components/Financing';
import ConstructionServices from './components/ConstructionServices';
import ServiceStages from './components/ServiceStages';
import OrgChart from './components/OrgChart';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import MobileActions from './components/MobileActions';
import DetailModal from './components/DetailModal';
import { FormState, ServiceDetail } from './types';
import { SERVICE_DETAILS } from './constants';

const App: React.FC = () => {
  const [formContext, setFormContext] = useState<FormState>({ type: 'general' });
  const [selectedDetail, setSelectedDetail] = useState<ServiceDetail | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleScrollToForm = (context: FormState) => {
    setFormContext(context);
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetail = (serviceName: string) => {
    const detail = SERVICE_DETAILS[serviceName];
    if (detail) {
      setSelectedDetail(detail);
      setIsDetailOpen(true);
    }
  };

  const handleScheduleFromDetail = (name: string, price: string) => {
    setIsDetailOpen(false);
    handleScrollToForm({ type: 'service', serviceName: name, price: price });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onScheduleClick={() => handleScrollToForm({ type: 'general' })} />
      
      <main>
        {/* HOME SECTION */}
        <section id="home">
          <Hero onScheduleClick={() => handleScrollToForm({ type: 'general' })} />
        </section>

        {/* SERVICES OVERVIEW */}
        <ServicesOverview onDetailClick={handleOpenDetail} />
        
        {/* PRICING SECTION */}
        <Pricing onScheduleClick={handleScrollToForm} />
        
        {/* FINANCING SECTION */}
        <Financing />
        
        {/* BUILDERS SECTION */}
        <ConstructionServices 
          onQuoteRequest={() => handleScrollToForm({ type: 'builder' })} 
          onSiteWalkRequest={() => handleScrollToForm({ type: 'sitewalk' })}
        />
        
        {/* SERVICE LIFE-CYCLE GRID */}
        <ServiceStages onDetailClick={handleOpenDetail} />
        
        {/* ABOUT SECTION */}
        <OrgChart />

        {/* REVIEWS SECTION */}
        <Reviews />
        
        {/* CONTACT SECTION */}
        <ContactForm initialState={formContext} />
        
        {/* MAP SECTION */}
        <MapSection />
      </main>

      <Footer />
      <MobileActions onScheduleClick={() => handleScrollToForm({ type: 'general' })} />
      
      <DetailModal 
        service={selectedDetail} 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        onSchedule={handleScheduleFromDetail}
      />
    </div>
  );
};

export default App;
