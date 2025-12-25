import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Shield } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface WarrantyPageProps {
  onScheduleClick?: () => void;
}

const WarrantyPage: React.FC<WarrantyPageProps> = ({ onScheduleClick }) => {
  const warrantyIncludes = [
    '2-year workmanship warranty (standard with all jobs)',
    'Manufacturer-backed product warranties on all major fixtures and water heaters',
    'Rapid response to post-close service requests',
    'Direct communication with builders and homeowners',
    'Full documentation for warranty records'
  ];

  const preventionMeasures = [
    'Camera inspections during underground and top-out phases',
    'Full system pressure testing before inspections',
    'Labeling, photo documentation, and builder walkthroughs',
    'Tight coordination with trim crews and project managers'
  ];

  const postCloseServices = [
    'Rapid response to service requests',
    'Direct communication with both builder and buyer',
    'Manufacturer claim handling and paperwork',
    'Warranty program design for your community'
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
          🛠️ Our Warranty Promise
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          We're not in the business of passing the buck. Our warranty program is built to protect your homes, streamline claims, and ensure your customers have peace of mind long after closing.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Coverage */}
        <section className="py-12 border-t border-b border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Coverage</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            All Everly new construction plumbing installs include:
          </p>
          <div className="space-y-3">
            {warrantyIncludes.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Part Claims */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Part Claims & Manufacturer Support</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <strong>Need help with a part claim or product defect?</strong> We'll work with the vendor directly and handle the paperwork so you don't have to.
          </p>
        </section>

        {/* Prevention First */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🔍 Why You'll Need Us Less</h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            We design and install every system to minimize the need for warranty calls in the first place. How we prevent warranty issues:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {preventionMeasures.map((measure, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-200">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{measure}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-neutral-900 font-semibold mt-8 p-6 bg-neutral-100 rounded-lg">
            These steps catch issues early — not after closing. Warranty service is important, but avoiding warranty issues is better.
          </p>
        </section>

        {/* Post-Close */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">✅ Post-Close Support When You Need It</h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            We know the handoff from builder to homeowner is a critical one. Our team is available to:
          </p>
          <ul className="space-y-4 text-neutral-700">
            {postCloseServices.map((service, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">→</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Build Trust */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Built on Trust</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For Builders</h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Our warranty program supports your reputation and reduces post-construction callbacks. We handle the heavy lifting on claims and maintenance, so you can focus on building.
              </p>
              <p className="text-neutral-600 text-sm">
                Standardize your warranty terms across your portfolio or customize by community.
              </p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-lg bg-blue-50">
              <h3 className="text-2xl font-bold mb-4">For Homeowners</h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                A 2-year workmanship warranty on all Everly installs — no surprises, no fine print. We stand behind every connection and every fixture we touch.
              </p>
              <p className="text-neutral-600 text-sm">
                Professional, responsive service when issues arise.
              </p>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="py-12 border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Tailored Programs</h2>
          <p className="text-neutral-700 leading-relaxed">
            Need a warranty program tailored to your specific community, builder model, or customer expectations? <strong>We'll help you design it.</strong> Let's create a warranty strategy that protects your homes and builds homeowner confidence.
          </p>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Questions About Warranty?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us to review your warranty options, customize a program for your needs, or discuss any post-close service requests.
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
              Learn More About Coverage
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Built clean. Backed strong.
          </p>
        </section>
      </main>
    </div>
  );
};

export default WarrantyPage;
