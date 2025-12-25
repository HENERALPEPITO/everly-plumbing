
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ResidentialPage from './components/ResidentialPage';
import NewHomeConstructionPage from './components/NewHomeConstructionPage';
import FinancingPage from './components/FinancingPage';
import ContactPage from './components/ContactPage';
import UndergroundsPage from './components/UndergroundsPage';
import RoughInPlumbingPage from './components/RoughInPlumbingPage';
import TopOutPlumbingPage from './components/TopOutPlumbingPage';
import GasLineInstallationPage from './components/GasLineInstallationPage';
import WaterHeaterInstallationPage from './components/WaterHeaterInstallationPage';
import FixtureInstallationPage from './components/FixtureInstallationPage';
import CameraInspectionPage from './components/CameraInspectionPage';
import WarrantyPage from './components/WarrantyPage';

const App: React.FC = () => {
  const [formContext, setFormContext] = useState<FormState>({ type: 'general' });
  const [selectedDetail, setSelectedDetail] = useState<ServiceDetail | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleScheduleClick = (context: FormState) => {
    setFormContext(context);
    setShowContactModal(true);
  };

  const handleScrollToForm = (context: FormState) => {
    handleScheduleClick(context);
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
    handleScheduleClick({ type: 'service', serviceName: name, price: price });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar 
          onScheduleClick={() => handleScheduleClick({ type: 'general' })} 
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
          formContext={formContext}
        />

        <Routes>
          <Route path="/" element={(
            <main>
              <section id="home">
                <Hero onScheduleClick={() => handleScheduleClick({ type: 'general' })} />
              </section>

              {/* <ServicesOverview onDetailClick={handleOpenDetail} /> */}
              <Pricing onScheduleClick={handleScrollToForm} />
              <Financing />

              <ConstructionServices 
                onQuoteRequest={() => handleScheduleClick({ type: 'builder' })} 
                onSiteWalkRequest={() => handleScheduleClick({ type: 'sitewalk' })}
              />

              <ServiceStages onDetailClick={handleOpenDetail} />
              <OrgChart />
              <Reviews />
              <MapSection />
            </main>
          )} />

          <Route path="/residential" element={<ResidentialPage onScheduleClick={handleScrollToForm} showContactModal={showContactModal} setShowContactModal={setShowContactModal} formContext={formContext} />} />
          <Route path="/new-home-construction" element={<NewHomeConstructionPage />} />
          <Route path="/new-home/undergrounds" element={<UndergroundsPage />} />
          <Route path="/new-home/rough-in-plumbing" element={<RoughInPlumbingPage />} />
          <Route path="/new-home/top-out-plumbing" element={<TopOutPlumbingPage />} />
          <Route path="/new-home/gas-line-installation" element={<GasLineInstallationPage />} />
          <Route path="/new-home/water-heater-installation" element={<WaterHeaterInstallationPage />} />
          <Route path="/new-home/fixture-installation" element={<FixtureInstallationPage />} />
          <Route path="/new-home/camera-inspection" element={<CameraInspectionPage />} />
          <Route path="/new-home/warranty" element={<WarrantyPage />} />
          <Route path="/flexible-financing" element={<FinancingPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>

        <Footer />
        <MobileActions onScheduleClick={() => handleScheduleClick({ type: 'general' })} />

        <DetailModal 
          service={selectedDetail} 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)} 
          onSchedule={handleScheduleFromDetail}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
