import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface CameraInspectionPageProps {
  onScheduleClick?: () => void;
}

const CameraInspectionPage: React.FC<CameraInspectionPageProps> = ({ onScheduleClick }) => {
  const inspectionPhases = [
    {
      phase: 'Underground Plumbing',
      description: 'Before concrete is poured, we inspect the sewer lines to verify proper slope, clear flow, and clean connections. This ensures your home\'s foundation is poured over a fully functioning system.'
    },
    {
      phase: 'Rough-In & Top-Out',
      description: 'We perform additional camera sweeps to confirm that drains and vents remain clear and undamaged throughout the build, especially after other trades have worked nearby.'
    },
    {
      phase: 'Final Completion Walkthrough',
      description: 'Before turnover, we verify that all lines — from fixtures to main lines — are clean, watertight, and built to last.'
    }
  ];

  const benefits = [
    'Catch small problems before they become major repairs',
    'Confirm proper installation and drainage flow',
    'Provide video proof for inspections or homeowner records'
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
          🎥 Camera Inspections
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          At Everly Plumbing, we use state-of-the-art sewer and drain camera inspections at different phases of the new home construction process. From underground rough-in to final fixture connections, camera inspections give us eyes inside your system.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* What Is It */}
        <section className="py-12 border-t border-b border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-8">What Is a Camera Inspection?</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            A camera inspection involves feeding a high-resolution, waterproof camera into your home's drain or sewer line. As the camera travels through the piping, we see a live video feed on a monitor above ground. This allows our team to spot and document:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {['Blockages', 'Bellies or dips in the line', 'Misalignments', 'Construction debris', 'Damaged or poorly connected pipe sections'].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-neutral-50">
                <span className="text-2xl">🔍</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* When We Use */}
        <section className="py-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">When We Use Camera Inspections</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            We don't wait for problems — we actively inspect key plumbing phases with our camera systems, including:
          </p>
          <div className="space-y-6">
            {inspectionPhases.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.phase}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-12 bg-neutral-50 rounded-lg px-8 mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">🧠 Why It Matters</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Without a camera, plumbers have to guess. But with it, we're working with full visibility:
          </p>
          <ul className="space-y-4 text-neutral-700">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-2xl">✅</span>
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-neutral-700 leading-relaxed mt-8 pt-8 border-t border-neutral-200">
            We believe camera inspections aren't just a tool — they're a standard of quality that every new home deserves.
          </p>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center border-t border-neutral-200">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to See Inside?</h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule your build walkthrough or inspection today and we'll make sure what's beneath the surface is just as solid as what's on top.
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
              Schedule Inspection
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-6">
            Call us or ask your project manager about including a camera inspection on your next phase.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CameraInspectionPage;
