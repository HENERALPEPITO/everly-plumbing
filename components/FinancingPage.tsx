import React from 'react';
import Financing from './Financing';
import ContactForm from './ContactForm';

const FinancingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        {/* <h1 className="text-3xl font-bold">Flexible Financing</h1> */}
        {/* <p className="text-neutral-600 mt-2">Options to make projects more affordable.</p> */}
      </header>

      <main>
        <Financing />
        <section id="contact">
          <ContactForm initialState={{ type: 'general' }} />
        </section>
      </main>
    </div>
  );
};

export default FinancingPage;
