import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Camera, Shield, Video } from 'lucide-react';
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
    'Provide video proof for inspections or homeowner records',
    'Reduce future maintenance costs',
    'Ensure compliance with building codes',
    'Peace of mind with documented verification'
  ];

  const inspectionFeatures = [
    'Blockages',
    'Bellies or dips in the line',
    'Misalignments',
    'Construction debris',
    'Damaged pipe sections',
    'Root intrusions'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-neutral-50 border-b border-neutral-200 pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-black rounded-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-900">
                  Camera Inspections
                </h1>
              </div>
              <p className="text-neutral-600 max-w-3xl">
                Professional sewer and drain camera inspections throughout the new home construction process. 
                Advanced technology for complete system visibility and quality assurance.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/new-home-construction" 
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                Advanced Inspection Technology
              </h2>
              <div className="prose prose-lg text-neutral-600">
                <p className="mb-6">
                  At Everly Plumbing, we utilize state-of-the-art sewer and drain camera inspection systems 
                  throughout critical phases of new home construction. Our high-resolution, waterproof cameras 
                  provide real-time visibility inside your plumbing system, ensuring quality from underground 
                  rough-in to final fixture connections.
                </p>
              </div>
            </section>

            {/* Inspection Features */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Video className="w-6 h-6 text-neutral-700" />
                <h3 className="text-xl font-bold text-neutral-900">What We Detect</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {inspectionFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-neutral-700 font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inspection Phases */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-8">Critical Inspection Phases</h3>
              <div className="space-y-6">
                {inspectionPhases.map((phase, idx) => (
                  <div 
                    key={idx}
                    className="group relative overflow-hidden rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
                    <div className="p-6 pl-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-neutral-700">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 mb-2">
                            {phase.phase}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Benefits Card */}
            <div className="sticky top-24">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-neutral-700" />
                  <h3 className="text-xl font-bold text-neutral-900">Key Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-black text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Inspection</h3>
                <p className="text-neutral-300 mb-6 text-sm">
                  Professional camera inspections available at every construction phase. 
                  Contact us to schedule or discuss your project requirements.
                </p>
                
                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE_NUMBER}
                  </a>
                  
                  <button 
                    onClick={onScheduleClick}
                    className="w-full px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    Schedule Online
                  </button>
                </div>
                
                <p className="text-neutral-400 text-xs mt-6 text-center">
                  Next available inspection: Within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Testimonial/Value Section */}
        <section className="mt-16 pt-12 border-t border-neutral-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mb-6">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-neutral-700">Quality Assurance Standard</span>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Professional Verification for Lasting Quality
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="p-6">
                <div className="text-4xl font-bold text-black mb-3">100%</div>
                <p className="text-neutral-600">Visual verification of all plumbing lines</p>
              </div>
              
              <div className="p-6 border-x border-neutral-200">
                <div className="text-4xl font-bold text-black mb-3">HD</div>
                <p className="text-neutral-600">High-definition video documentation provided</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-black mb-3">24/7</div>
                <p className="text-neutral-600">Access to inspection reports and videos</p>
              </div>
            </div>
            
            <p className="text-neutral-600 mt-12 max-w-2xl mx-auto leading-relaxed">
              We believe camera inspections aren't just a tool — they're a professional standard 
              that ensures every new home receives the quality verification it deserves. 
              Complete documentation for builders, inspectors, and homeowners.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CameraInspectionPage;