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
          🔥 Gas Line Installation — Built for Safety and Performance
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Every home has different gas needs, so we build custom systems to fit your layout and appliance setup. Our installations are built to meet — and often exceed — local code.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* What We Install */}
        <section className="py-12 border-t border-b border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-8">What We Install</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Common gas line installations we handle:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {gasApplications.map((app, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition">
                <span className="text-2xl flex-shrink-0">🔥</span>
                <span className="text-neutral-700">{app}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-600 leading-relaxed mt-8">
            We use black iron or CSST (corrugated stainless steel tubing) depending on the layout and access. Every system is fully pressure-tested before inspection.
          </p>
        </section>

        {/* Installation Process */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">⚙️ Our Gas Installation Process</h2>
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
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">🛡️ Safety Above All</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Gas is efficient and convenient — but only when it's installed properly. We take zero shortcuts when it comes to pressure, joints, ventilation, and testing.
          </p>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Licensed and insured for all gas work</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Trained in all current gas codes</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Full pressure testing and leak detection</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Proper ventilation and safety margins</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Install?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Have a question about sizing, routing, or appliance types? We're happy to walk you through the details and help you plan your system from the ground up.
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
              Schedule Site Visit
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Confidence in every connection.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GasLineInstallationPage;
