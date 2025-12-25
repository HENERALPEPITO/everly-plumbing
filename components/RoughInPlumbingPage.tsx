import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface RoughInPlumbingPageProps {
  onScheduleClick?: () => void;
}

const RoughInPlumbingPage: React.FC<RoughInPlumbingPageProps> = ({ onScheduleClick }) => {
  const steps = [
    {
      number: 1,
      title: 'Blueprint Matching',
      description: 'We start by reviewing your approved floor plan and mechanical drawings. Every wall, every fixture, every pipe has its place — and we make sure it\'s exactly right before we cut a single hole.'
    },
    {
      number: 2,
      title: 'Drain & Waste Lines',
      description: 'We install PVC or ABS pipes for toilets, tubs, showers, sinks, and floor drains. Every pipe is precisely pitched for proper flow and tied into the main stack or sewer line.'
    },
    {
      number: 3,
      title: 'Venting',
      description: 'Proper venting is critical for system balance and odor control. We install vertical vent stacks through the framing and roofline to keep air flowing properly throughout your drain system.'
    },
    {
      number: 4,
      title: 'Water Supply Lines',
      description: 'PEX or copper piping is run through studs and joists, secured and pressure-tested. Hot and cold lines are routed to each fixture location and labeled for later connections.'
    },
    {
      number: 5,
      title: 'Code Compliance & Inspection',
      description: 'Before we cover anything, we perform a full pressure test and schedule your city or third-party rough-in inspection. We never move forward until everything passes — clean, secure, up to code.'
    }
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
          Rough-In Plumbing
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Rough-in is the first stage of your home's internal plumbing system — it's where the base of the skeleton of your water supply and drain lines is laid out before concrete is poured and walls, fixtures, or finishes are installed.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* What It Is */}
        <section className="py-12 border-t border-b border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            At this point, we don't install faucets or sinks — we install what goes under them.
          </p>
          <div className="bg-neutral-50 rounded-lg p-8">
            <p className="text-neutral-700 leading-relaxed">
              <strong>Why It Matters:</strong> Rough-in is where 95% of future plumbing issues are avoided. If this phase is done right, everything you build on top of it — drywall, tile, cabinetry — will function without hidden problems. Our team treats rough-in like it's the foundation of your home (because it is). We don't cut corners, and we don't move on until it's perfect.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-12">🔧 Our Rough-In Process</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Quality Standards</h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Full pressure testing before inspections</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Code compliance verification at every step</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Precise measurements and alignment</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Professional labeling for future trades</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation — we'll walk your plans and help you build it right from the beginning.
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
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RoughInPlumbingPage;
