import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface GasLineInstallationPageProps {
  onScheduleClick?: () => void;
}

const GasLineInstallationPage: React.FC<GasLineInstallationPageProps> = ({ onScheduleClick }) => {
  const gasApplications = [
    'Tankless or tank-style water heaters',
    'Gas cooktops and ovens',
    'Clothes dryers',
    'Fireplaces (indoor or patio)',
    'Outdoor kitchens and BBQ stub-outs'
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Planning & Permits',
      description: 'We coordinate with your builder and utility provider to lay out your system and pull the proper permits.'
    },
    {
      number: 2,
      title: 'Trenching or Routing',
      description: 'For underground systems, we trench and sleeve gas lines with protective material. For interior runs, we route through walls and attics with approved materials.'
    },
    {
      number: 3,
      title: 'Appliance Stub-Outs',
      description: 'Each appliance gets its own shut-off valve and properly sized connector — no guessing.'
    },
    {
      number: 4,
      title: 'Pressure Testing & Inspection',
      description: 'We perform a full leak test using gauges and hold pressure during inspection to confirm integrity.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Spacer */}
      <div className="pt-20" />

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6">
        <Link to="/new-home-construction" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition">
          <ArrowLeft className="w-4 h-4" />
          Back to New Home Construction
        </Link>
      </div>

      {/* Header Section */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6">
          Gas Line Installation — Built for Safety and Performance
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed mb-6">
          Every home has different gas needs, so we build custom systems to fit your layout and appliance setup. Our installations meet — and often exceed — local code.
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
            Schedule Site Visit
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-10">
        {/* What We Install */}
        <section className="py-16 border-t border-neutral-200">
          <h2 className="text-3xl font-bold mb-10">What We Install</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Common gas line installations we handle:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {gasApplications.map((app, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <span className="text-neutral-700">{app}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-600 leading-relaxed mt-8">
            We use black iron or CSST depending on the layout and access. Every system is fully pressure-tested before inspection.
          </p>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Our Gas Installation Process</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Installed once. Checked twice.
          </p>
          <div className="space-y-6">
            {processSteps.map((step) => (
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

        {/* Safety First */}
        <section className="py-16 bg-neutral-50 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold mb-6">Safety Above All</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Gas is efficient and convenient — only when installed properly. We take zero shortcuts with pressure, joints, ventilation, and testing.
          </p>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              Licensed and insured for all gas work
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              Trained in all current gas codes
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              Full pressure testing and leak detection
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              Proper ventilation and safety margins
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-neutral-200 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Install?</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
            Questions about sizing, routing, or appliance types? We’ll walk you through the details and plan your system from the ground up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <button
              onClick={onScheduleClick}
              className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full font-semibold hover:bg-neutral-50 transition"
            >
              Schedule Site Visit
            </button>
          </div>
          <p className="text-sm text-neutral-500 mt-8">Confidence in every connection.</p>
        </section>
      </main>
    </div>
  );
};

export default GasLineInstallationPage;
