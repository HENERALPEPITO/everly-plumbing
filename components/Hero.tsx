
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { PHONE_NUMBER } from '../constants';

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-neutral-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform-gpu scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />

      {/* Dark gradient overlay to ensure contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-4xl px-6">
        <MotionWrapper delay={200}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">
            San Antonio's Premium
            <br />
            <span className="text-blue-400">Plumbing Standard.</span>
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={400}>
          <p className="text-base md:text-lg text-white/90 font-normal mb-8 max-w-2xl mx-auto">
            Honest work. Fair prices. Every time.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={600} direction="none">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onScheduleClick}
              className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-full transition-all hover:opacity-95 active:scale-95 shadow-lg"
            >
              Schedule Service
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="px-10 py-4 bg-white/10 text-white text-lg font-semibold rounded-full border border-white/20 transition-all hover:bg-white/20 active:scale-95"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </MotionWrapper>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-[2px] h-10 bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce-slow" />
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(100%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
