import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, HardHat, Ruler, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface UndergroundsPageProps {
  onScheduleClick?: () => void;
}

const UndergroundsPage: React.FC<UndergroundsPageProps> = ({ onScheduleClick }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-neutral-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop"
          alt="Underground plumbing installation"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <Link
            to="/new-home-construction"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to New Home Construction
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Underground Plumbing
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl leading-relaxed">
            Precision-installed water, drain, and sewer lines that set the foundation for reliable, code-compliant new home construction.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Built Right Before the Slab Is Poured
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Underground plumbing is one of the most critical stages of new home construction. We ensure every pipe, stub-out, and sleeve is placed exactly according to plan minimizing delays, rework, and inspection issues.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">Accurate layout based on approved site plans</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">Clean trenching and coordinated backfill</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">Ready-for-inspection installs the first time</span>
              </li>
            </ul>
          </div>
          <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
            alt="Plumbing trenches before concrete pour"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            Our Underground Services Include
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Sewer, drain, and waste line installation',
              'Domestic water line routing and sizing',
              'Trenching and coordination with excavation crews',
              'Accurate stub-outs for all future fixtures',
              'Sleeves and penetrations for concrete pours',
              'Pressure testing and pre-pour inspections',
              'Coordination with builders, supers, and inspectors'
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <span className="text-neutral-700 leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-12">
          Why Builders Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <HardHat className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Builder-Focused</h3>
            <p className="text-neutral-600">
              We understand schedules, inspections, and the importance of hitting slab dates.
            </p>
          </div>
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <Ruler className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Precision Install</h3>
            <p className="text-neutral-600">
              Clean layouts, correct elevations, and zero guesswork.
            </p>
          </div>
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <ShieldCheck className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Fully Licensed & Insured</h3>
            <p className="text-neutral-600">
              Professional, compliant, and accountable on every jobsite.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Get Your Undergrounds Done Right
          </h2>
          <p className="text-xl text-neutral-300 mb-10">
            Partner with a plumbing team that understands new construction timelines and delivers inspection-ready work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black rounded-full font-semibold hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <button
              onClick={onScheduleClick}
              className="inline-flex items-center justify-center px-10 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Request a Builder Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UndergroundsPage;
