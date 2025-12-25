import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface UndergroundsPageProps {
  onScheduleClick?: () => void;
}

const UndergroundsPage: React.FC<UndergroundsPageProps> = ({ onScheduleClick }) => {
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
          Underground Plumbing
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Undergrounds are the foundation of a clean, long-lasting plumbing system — literally. We install all water, drain, and sewer lines for new homes, precisely where you need them before the slab gets poured.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Overview Section */}
        <section className="py-12 border-t border-b border-neutral-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Built for Builders</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Whether you're building a single custom home or a full subdivision, we work with your schedule and coordinate directly with other trades to get undergrounds done fast, clean, and passed the first time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Fast turnaround on trench & set</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Flexible scheduling with concrete crews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Guaranteed inspection readiness</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 h-80 rounded-lg flex items-center justify-center">
              <span className="text-neutral-400">Underground Plumbing Visual</span>
            </div>
          </div>
        </section>

        {/* Services Include */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Underground Services Include</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Sewer, drain, and waste line installation',
              'Water line layout and pipe runs',
              'Trench digging & backfill coordination',
              'Stub-out placement for future fixtures',
              'Sleeve installation for concrete pours',
              'Pre-pour inspections & pressure testing',
              'Collaboration with site supervisors & city inspectors'
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-neutral-700">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Why Builders Choose Us</h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex gap-4 items-start">
              <span className="text-2xl">✅</span>
              <span>Licensed, bonded, and insured</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-2xl">✅</span>
              <span>Clear site plans, no guesswork</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-2xl">✅</span>
              <span>Clean, respectful jobsite presence</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Start?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Need undergrounds done right — so your homes start on time? Contact us for a builder quote or schedule a site walk.
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
              Request a Builder Quote
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UndergroundsPage;
