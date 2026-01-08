import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface TopOutPlumbingPageProps {
  onScheduleClick?: () => void;
}

const TopOutPlumbingPage: React.FC<TopOutPlumbingPageProps> = ({ onScheduleClick }) => {
  const installations = [
    'Vertical drains for upstairs bathrooms',
    'Water supply lines to second-story fixtures',
    'Vent pipes through roof penetrations',
    'Shower valves and tub drops',
    'Washing machine boxes and hose bibs',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Spacer */}
      <div className="pt-20" />

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6">
        <Link
          to="/new-home-construction"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to New Home Construction
        </Link>
      </div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6">
              Top Out Plumbing
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-6">
              The second and final rough-in phase where supply, drain, and vent systems are completed through upper framing and roof penetrations — setting your home up for inspection and long-term reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:opacity-90 transition"
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
              <button
                onClick={onScheduleClick}
                className="inline-flex items-center px-6 py-3 border border-black rounded-full font-semibold hover:bg-neutral-50 transition"
              >
                Schedule Walkthrough
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Top-out plumbing installation showing vent stacks and supply lines"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <main className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Process Overview */}
        <section className="py-16 border-t border-neutral-200">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Happens During Top Out</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Once framing is complete and the initial rough-in is approved, our licensed plumbers return to finish all upper-level plumbing. Every pipe is secured, insulated where required, and routed precisely according to plan and code.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Valves are set, vents extend through the roof, and the system is prepared for pressure testing — ensuring smooth drywall, accurate fixture placement, and future serviceability.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8">
              <h3 className="font-semibold text-neutral-900 mb-4">Why This Stage Matters</h3>
              <ul className="space-y-4 text-neutral-700">
                <li>• Finalizes all vertical and overhead plumbing runs</li>
                <li>• Confirms alignment across multiple floors</li>
                <li>• Locks in locations before walls are closed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installations */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10">What We Install</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {installations.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              >
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pressure Testing */}
        <section className="py-16">
          <div className="bg-neutral-50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-6">Pressure Testing & Inspection</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              After top-out completion, the system is pressure-tested using air or water to verify integrity under load. This ensures there are zero leaks before insulation and drywall go in.
            </p>
            <p className="font-semibold text-neutral-900">
              This step protects your investment and keeps inspections moving forward without costly rework.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-neutral-200 text-center">
          <h2 className="text-3xl font-bold mb-6">Build It Right the First Time</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
            Questions about venting, inspections, or fixture placement? We’ll review your plans, walk the site, and ensure everything is ready for approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <button
              onClick={onScheduleClick}
              className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full font-semibold hover:bg-neutral-50 transition"
            >
              Schedule Top-Out Walkthrough
            </button>
          </div>
          <p className="text-sm text-neutral-500 mt-8">Precision above the slab.</p>
        </section>
      </main>
    </div>
  );
};

export default TopOutPlumbingPage;
