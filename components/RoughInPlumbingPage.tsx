import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Layers, Droplets, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface RoughInPlumbingPageProps {
  onScheduleClick?: () => void;
}

const RoughInPlumbingPage: React.FC<RoughInPlumbingPageProps> = ({ onScheduleClick }) => {
  const steps = [
    {
      number: 1,
      title: 'Blueprint Review & Layout',
      description:
        'We review approved plans and mark exact pipe routes, fixture locations, and wall penetrations to ensure accuracy before installation begins.'
    },
    {
      number: 2,
      title: 'Drain, Waste & Vent (DWV)',
      description:
        'PVC or ABS piping is installed for all drains with proper slope and venting to ensure smooth flow and long-term reliability.'
    },
    {
      number: 3,
      title: 'Water Supply Rough-In',
      description:
        'PEX or copper water lines are run through framing, secured, pressure-tested, and labeled for efficient final connections.'
    },
    {
      number: 4,
      title: 'Pressure Testing',
      description:
        'We perform full system pressure testing to identify leaks or weaknesses before walls are closed.'
    },
    {
      number: 5,
      title: 'Inspection Approval',
      description:
        'All work is inspected and verified to meet local plumbing codes before moving to the next construction phase.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-neutral-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd85791?q=80&w=1600&auto=format&fit=crop"
          alt="Rough-in plumbing pipes inside framing"
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
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Rough-In Plumbing</h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl leading-relaxed">
            The structural backbone of your plumbing system — installed with precision before walls, drywall, or finishes go up.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Why Rough-In Matters</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Rough-in plumbing determines how your entire system performs long term. Proper alignment, venting, and pressure testing prevent leaks, drainage issues, and costly rework later on.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">Accurate pipe placement behind every wall</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">System-wide pressure and leak testing</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-neutral-700">Inspection-ready work the first time</span>
              </li>
            </ul>
          </div>
          <img
            src="https://imgs.search.brave.com/xTlIeOTmGfOmmt5Spxea1yGRx1-msEZXsHYiRt0mmJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wbHVt/YmluZy1wcm9mZXNz/aW9uYWwtcGx1bWJl/ci1yZXBhaXItc2Vy/dmljZS00NTc1NzIz/NC5qcGc"
            alt="PEX plumbing rough-in installation"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Our Rough-In Process</h2>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Our Quality Standards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <Layers className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Built to Last</h3>
            <p className="text-neutral-600">Correct pipe sizing, secure fastening, and clean routing.</p>
          </div>
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <Droplets className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Leak-Free Systems</h3>
            <p className="text-neutral-600">Full pressure tests ensure reliability before walls close.</p>
          </div>
          <div className="p-8 rounded-2xl border bg-white shadow-sm">
            <ShieldCheck className="w-8 h-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Code-Compliant</h3>
            <p className="text-neutral-600">All work meets or exceeds local plumbing code requirements.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Build It Right From the Start</h2>
          <p className="text-xl text-neutral-300 mb-10">
            Schedule a consultation and ensure your rough-in plumbing is done correctly from day one.
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
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoughInPlumbingPage;
