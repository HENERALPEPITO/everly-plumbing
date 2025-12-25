import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface FixtureInstallationPageProps {
  onScheduleClick?: () => void;
}

const FixtureInstallationPage: React.FC<FixtureInstallationPageProps> = ({ onScheduleClick }) => {
  const fixtures = [
    'Bathroom faucets, tub/shower valves, & trim kits',
    'Kitchen faucets, pot fillers, & disposals',
    'Toilets, bidets, and smart fixtures',
    'Laundry, utility, and garage sinks'
  ];

  const workflow = [
    'Pre-checks for missing or damaged components',
    'Hardware compatibility with rough-in dimensions',
    'Change order management (when specs evolve late)',
    'Trim-out walkthroughs and documentation'
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
          🚰 Fixture Installation — Where the Details Matter
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Fixtures are the finish line of your plumbing system — and how your customer experiences your work every single day. At Everly Plumbing, we install every faucet, toilet, shower trim, and tub with care, precision, and long-term durability in mind.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Intro */}
        <section className="py-12 border-t border-b border-neutral-200">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            We don't cut corners, we don't leave drips, and we don't sign off until everything is sealed, aligned, and clean.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <p className="text-neutral-900 font-semibold text-lg">
              By the time fixtures go in, every other trade has come through. Our job is to deliver a clean, complete result — even in a dynamic construction environment.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Approach to Finish Plumbing</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            We install:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {fixtures.map((fixture, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition">
                <span className="text-2xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">{fixture}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-neutral-700 leading-relaxed mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            All components are set level, sealed tight, and tested for function and finish. <strong>We treat finish plumbing like it's on display — because it is.</strong>
          </p>
        </section>

        {/* Coordination */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🪛 Coordinated for Your Workflow</h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            We'll work with your superintendents or punch-out teams to ensure fixture installation happens at the right time, in the right order, with the right parts on hand. Whether your fixtures are owner-supplied, builder-stocked, or spec-selected by plan, we handle:
          </p>
          <div className="space-y-4">
            {workflow.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 border-l-4 border-black rounded">
                <span className="text-2xl flex-shrink-0">→</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-neutral-700 leading-relaxed mt-8 font-semibold">
            We're not just your plumbers — we're your finish crew.
          </p>
        </section>

        {/* Quality Standards */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Quality Standards</h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Level installation on all fixtures</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Tight, watertight seals</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Full function testing</span>
            </li>
            <li className="flex gap-4 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Professional finish that showcases craftsmanship</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Finish Strong?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your fixture timeline, specifications, and quality expectations. Let's make sure your homes look and function perfectly.
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
              Discuss Your Project
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Clean installs. Complete handoffs.
          </p>
        </section>
      </main>
    </div>
  );
};

export default FixtureInstallationPage;
