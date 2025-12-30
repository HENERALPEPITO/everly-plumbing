
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, MAP_LINK } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper className="text-center mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Verified Reputation</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Dont just take our word for it here’s what our customers have to say</h2>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-neutral-500 text-lg">Verified customer feedback directly from our community.</p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <MotionWrapper key={idx} delay={idx * 150} direction="up">
              <div className="h-full bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 flex flex-col hover:bg-white hover:shadow-2xl transition-all duration-700 group">
                <Quote className="w-10 h-10 text-blue-100 mb-6 group-hover:text-blue-500 transition-colors duration-500" />
                <p className="text-lg text-neutral-700 leading-relaxed mb-10 italic">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-neutral-900">{review.name}</h4>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-blue-600">{review.rating.toFixed(1)}</span>
                    <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col items-center">
          <a 
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Read All Reviews on Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
