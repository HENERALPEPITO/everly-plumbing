import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import MapSection from './MapSection';

const ContactPage: React.FC = () => {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-neutral-600 mt-2">Get in touch or schedule a service.</p>
      </header>

      <main>
        <section id="contact" className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
          <ContactForm initialState={{ type: 'general' }} />
        </section>
        <MapSection />
      </main>
    </div>
  );
};

export default ContactPage;
