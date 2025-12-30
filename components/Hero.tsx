import React from 'react';

const MotionWrapper = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-8',
    none: '',
  };

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

const PHONE_NUMBER = '(210) 905-9520';

const Hero = ({ onScheduleClick = () => {} }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-neutral-900">
      {/* Background image with professional overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transform-gpu scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1920')`,
          filter: 'grayscale(100%) brightness(0.4)',
        }}
      />

      {/* Sophisticated gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(24,134,168,0.15) 50%, rgba(0,0,0,0.85) 100%)'
        }}
      />

      {/* Subtle accent glow */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(24,134,168,0.3) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-4xl px-6">
        <MotionWrapper delay={200}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">
            San Antonio's Premium
            <br />
            <span 
              style={{ 
                color: '#1886a8',
                textShadow: '0 0 40px rgba(24,134,168,0.4)'
              }}
            >
              Plumbing Standard.
            </span>
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={400}>
          <p className="text-base md:text-lg text-white font-normal mb-8 max-w-2xl mx-auto">
            Honest work. Fair prices. Every time.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={600} direction="none">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onScheduleClick}
              className="px-10 py-4 text-white text-lg font-semibold rounded-full transition-all hover:opacity-90 active:scale-95 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #1886a8 0%, #156b87 100%)',
                boxShadow: '0 8px 24px rgba(24,134,168,0.35)'
              }}
            >
              Schedule Service
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
              className="px-10 py-4 bg-white/5 text-white text-lg font-semibold rounded-full transition-all hover:bg-white/10 active:scale-95 backdrop-blur-sm"
              style={{
                border: '2px solid rgba(24,134,168,0.5)'
              }}
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </MotionWrapper>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div 
          className="w-[2px] h-10 relative overflow-hidden rounded-full"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(24,134,168,0.5))'
          }}
        >
          <div 
            className="absolute top-0 left-0 w-full h-1/2 animate-bounce-slow rounded-full"
            style={{ background: '#1886a8' }}
          />
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