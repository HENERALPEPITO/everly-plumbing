import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface WaterHeaterInstallationPageProps {
  onScheduleClick?: () => void;
}

const WaterHeaterInstallationPage: React.FC<WaterHeaterInstallationPageProps> = ({ onScheduleClick }) => {
  const heaterTypes = [
    {
      type: 'Tank Water Heaters',
      icon: '🔹',
      features: [
        'Traditional units that store and heat a large volume of water',
        'Lower upfront cost',
        'Simple install & maintenance',
        'Available in gas or electric',
        'Typically 40–80 gallon tanks'
      ]
    },
    {
      type: 'Tankless Water Heaters',
      icon: '🔹',
      features: [
        'Heats water on demand as you need it',
        'Endless hot water',
        'Compact wall-mounted design',
        'Energy efficient',
        'Higher initial cost but lower long-term energy usage'
      ]
    }
  ];

  const includes = [
    'Proper sizing & fuel type review',
    'Drain pan & pressure relief valve installation',
    'Gas or electric connections',
    'Expansion tank if required by code',
    'Haul-away of old unit (if applicable)',
    'City permits & inspection scheduling'
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
          💧 Water Heater Installation — Built for Everyday Comfort
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Hot water isn't a luxury — it's a necessity. Whether you're replacing an old unit or installing a brand new system in your custom build, Everly Plumbing delivers professional water heater installations that are safe, efficient, and designed to last.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Overview */}
        <section className="py-12 border-t border-b border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed">
            We install all major types and brands — and we'll help you choose the system that best fits your home, your water usage, and your budget.
          </p>
        </section>

        {/* Tank vs Tankless */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Tank vs. Tankless — What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {heaterTypes.map((heater, idx) => (
              <div key={idx} className="p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">{heater.icon}</span>
                  {heater.type}
                </h3>
                <ul className="space-y-3">
                  {heater.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100 text-center">
            <p className="text-neutral-900 font-semibold">
              Not sure what's right? We'll help you compare.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🔧 What's Included in Our Installations</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Whether we're swapping out a failed tank or installing a whole-home tankless system, every water heater install from Everly Plumbing includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition">
                <span className="text-2xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-neutral-700 mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            Every connection is leak-tested. Every system is tested under load. <strong>We don't just install it — we verify it.</strong>
          </p>
        </section>

        {/* Built for Builders */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🏗️ Built for Builders</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We work directly with general contractors, production builders, and project managers to meet your schedule and code requirements — without delays or callbacks. Whether you're standardizing a single model across multiple homes or customizing units per plan, we can scale accordingly.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {['Builder-supplied or Everly-supplied units', 'Gas, electric, or hybrid systems', 'Local inspection offices and energy code guidelines'].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="text-2xl">→</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-700 leading-relaxed">
            Our team installs, tests, and signs off with full documentation for your file set.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">📋 Timeline & Coordination</h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We understand builder timelines. Our team works proactively to meet framing milestones, inspection windows, and final walk deadlines.
          </p>
          <div className="space-y-4">
            {[
              'Need early installation for energy testing?',
              'Prefer to trim water heaters during final punch?',
              'Schedule conflicts with other trades?'
            ].map((scenario, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 border-l-4 border-black">
                <span className="text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">{scenario}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-neutral-700 mt-8 font-semibold">
            We'll match your workflow and stay flexible when schedules shift. We'll coordinate with your supers, framers, and inspectors to keep everything moving.
          </p>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us to get a free quote or speak with a tech about your needs.
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
              Request Free Quote
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Hot water, handled right.
          </p>
        </section>
      </main>
    </div>
  );
};

export default WaterHeaterInstallationPage;
