
import React from 'react';
import { MotionWrapper } from './MotionWrapper';
import { Check, CreditCard, Clock, ShieldCheck, Zap, Wallet } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Financing: React.FC = () => {
  const highlights = [
    {
      title: "0% Interest Plans Available",
      desc: "Pay over time with zero interest for 12–24 months on approved credit."
    },
    {
      title: "No Money Out of Pocket for 2+ Years",
      desc: "Some programs also allow you to defer payments — no upfront cost required."
    },
    {
      title: "Low Monthly Payments",
      desc: "Qualified homeowners can get a new tankless water heater for less than the price of a weekly cup of coffee."
    },
    {
      title: "Soft Credit Checks & Fast Approvals",
      desc: "Check your eligibility without impacting your credit score — most customers get a decision within minutes."
    },
    {
      title: "No Prepayment Penalties",
      desc: "Pay it off early if you want — you’re in control."
    }
  ];

  return (
    <section id="financing" className="py-32 px-6 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7">
            <MotionWrapper direction="right">
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Smart Solutions</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Flexible Financing</h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-12 font-light">
                At Everly Plumbing, we believe every homeowner deserves access to high-quality plumbing repairs and upgrades without the stress of unexpected costs. That’s why we offer flexible financing options through multiple trusted lenders who specialize in programs for all credit scores — so you can get the work you need now and pay over time in a way that works for you.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={200}>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Financing Highlights</h3>
              <div className="space-y-6 mb-16">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">{h.title}</h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            <MotionWrapper delay={400}>
              <div className="p-10 bg-neutral-50 rounded-[3rem] border border-neutral-100 mb-12">
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Designed to Fit Your Budget</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Whether you need to replace a failing water heater, reroute piping, or cover a sudden repair, we’re here to help. Our financing partners offer a variety of plans to suit different household budgets and project sizes — including options for customers with less-than-perfect credit.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  You’ll always receive clear, upfront terms, and we’ll walk you through the process so you can make the best decision for your home.
                </p>
              </div>
            </MotionWrapper>
          </div>

          {/* Side Column: How to Apply */}
          <div className="lg:col-span-5">
            <MotionWrapper direction="left" delay={600} className="sticky top-32">
              <div className="bg-neutral-900 text-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <h3 className="text-3xl font-bold mb-8 tracking-tight">How to Apply</h3>
                <p className="text-neutral-400 mb-10 leading-relaxed">
                  Ask your technician during a service call or call our office to get started. We’ll walk you through:
                </p>

                <div className="space-y-10 mb-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <ShieldCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-neutral-300">
                        A quick, secure application that can also be sent via text or email
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Wallet className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-neutral-300">
                        Personalized financing options tailored to your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-neutral-300">
                        Approval in just seconds in most cases — so your project doesn’t have to wait
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-neutral-400 text-sm mb-8 italic">
                    Get started today and let Everly Plumbing take the pressure off your plumbing and your budget.
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-900/20"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financing;
