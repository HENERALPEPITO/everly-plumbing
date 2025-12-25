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
    'Washing machine boxes and hose bibs'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-6">
        <Link to="/new-home-construction" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to New Home Construction
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 md:px-10 py-12">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          Top Out Plumbing — Stage Two Explained
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Top-out plumbing (also called "stack out") is the second and final stage of rough-in, where we finish running all supply, drain, and vent piping through the upper framing and out through the roof. This is the phase where everything starts to take shape.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Overview */}
        <section className="py-12 border-t border-b border-neutral-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">What Happens During Top Out</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Top-out begins once the walls are framed and underground/first-floor plumbing is complete. Our licensed team comes in to finish all upper-level pipe runs. We secure, insulate, and protect all pipes per code — and label every run for easy access later.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Shower valves are installed, vent pipes poke through the roof, and your system is pressurized for testing. Done right, it sets the stage for clean drywall, flawless tile work, and long-term reliability.
              </p>
            </div>
            <div className="bg-neutral-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-neutral-400">Top-Out Plumbing Visual</span>
            </div>
          </div>
        </section>

        {/* We Install */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">✅ We Install</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {installations.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pressure & Inspection */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">💨 Pressure & Inspection</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Once the top-out is complete, we pressure test the system and prep for your inspection. We use air or water pressure to confirm there are no leaks, even under load. This step protects your home and ensures you don't have to revisit closed walls later.
          </p>
          <p className="text-lg font-semibold text-neutral-900">
            You only get one chance to build the skeleton of your home. We make it count.
          </p>
        </section>

        {/* Why It's Critical */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🛠️ Why It's Critical</h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start p-4 border-l-4 border-black">
              <span className="text-xl">→</span>
              <span>Ensures your drains and vents align perfectly across floors</span>
            </li>
            <li className="flex gap-4 items-start p-4 border-l-4 border-black">
              <span className="text-xl">→</span>
              <span>Prevents fixture misalignment or awkward installs later</span>
            </li>
            <li className="flex gap-4 items-start p-4 border-l-4 border-black">
              <span className="text-xl">→</span>
              <span>Protects your investment by catching issues before insulation and drywall</span>
            </li>
            <li className="flex gap-4 items-start p-4 border-l-4 border-black">
              <span className="text-xl">→</span>
              <span>Keeps inspectors happy — and projects moving forward</span>
            </li>
          </ul>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-neutral-900 font-semibold">
              Top-out isn't just "the next step" — it's a major checkpoint for the integrity of your home's plumbing system.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Build It Right</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Have questions about venting, inspection timelines, or fixture prep? We're here to walk your project, review plans, and get your system pressure-tested and signed off without delay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <button onClick={onScheduleClick} className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full font-semibold hover:bg-neutral-50 transition">
              Schedule Top-Out Walkthrough
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Precision above the slab.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TopOutPlumbingPage;
