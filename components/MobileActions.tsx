
import React from 'react';
import { PHONE_NUMBER } from '../constants';
import { Phone, Calendar } from 'lucide-react';

interface MobileActionsProps {
  onScheduleClick: () => void;
}

const MobileActions: React.FC<MobileActionsProps> = ({ onScheduleClick }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm animate-slide-up">
      <div className="bg-black/80 backdrop-blur-xl text-white rounded-2xl flex divide-x divide-white/10 shadow-2xl overflow-hidden p-1 border border-white/10">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 active:bg-white/10 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call Now</span>
        </a>
        <button 
          onClick={onScheduleClick}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 active:bg-white/10 transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Schedule</span>
        </button>
      </div>
      
      <style>{`
        @keyframes slide-up {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default MobileActions;
