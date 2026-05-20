import { useState } from "react";
import { Check, Info, Sparkles, HelpCircle } from "lucide-react";
import { PRICING_PLANS } from "../data";

interface PricingProps {
  onJoinClick: (planName: string) => void;
}

export default function Pricing({ onJoinClick }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Price conversion computation helper
  const getDisplayPrice = (planId: string, basePriceStr: string) => {
    // Extract base number from "₹1,199"
    const numberPart = parseInt(basePriceStr.replace(/[^0-9]/g, ""), 10);
    
    if (billingCycle === "annual") {
      // Annual discount: 20% off monthly price, compiled annual average
      const discountedMonthly = Math.floor(numberPart * 0.8);
      return `₹${discountedMonthly.toLocaleString("en-IN")}`;
    }
    return basePriceStr;
  };

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative colored glow spots */}
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-primary-red/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            Membership Packages
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white mt-3 tracking-tight">
            Choose Your <span className="text-primary-red">Power tier</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            Choose standard access packages or go Elite with personal coaching support. Clear value structures with zero hidden fees.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-[#111111] border border-white/5 p-1 rounded-xl flex items-center shadow-inner relative">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-primary-red text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-primary-red text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Annual Program</span>
              <span className="bg-white/15 text-[9px] text-white font-sans px-1.5 py-0.5 rounded-full uppercase font-bold tracking-normal">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#0d0d0d] p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                plan.isPopular
                  ? "border-primary-red/50 shadow-2xl scale-100 md:scale-105 bg-[#121212] z-10"
                  : "border-white/[0.04] hover:border-white/10"
              }`}
            >
              {/* Strategic Neon Top glow for Popular */}
              {plan.isPopular && (
                <>
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary-red" />
                  <span className="absolute top-5 right-5 bg-primary-red text-white text-[9px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full flex items-center tracking-wider shadow">
                    <Sparkles className="h-3 w-3 mr-1" /> Best Value
                  </span>
                </>
              )}

              {/* Top part */}
              <div>
                <span className="text-gray-400 font-mono text-[11px] uppercase tracking-widest font-bold">
                  {plan.name}
                </span>

                <h3 className="font-display font-black text-white text-3xl sm:text-4.5xl tracking-tight mt-4 flex items-baseline">
                  <span>{getDisplayPrice(plan.id, plan.price)}</span>
                  <span className="text-xs text-gray-400 font-sans font-normal ml-1.5 uppercase">
                    {plan.period}
                  </span>
                </h3>

                {billingCycle === "annual" && (
                  <span className="text-[10px] font-mono text-green-500 font-bold uppercase block mt-1.5">
                    Billed annually as ₹{(parseInt(plan.price.replace(/[^0-9]/g, ""), 10) * 0.8 * 12).toLocaleString("en-IN")}
                  </span>
                )}

                <p className="text-xs text-gray-400 mt-4 leading-relaxed min-h-10">
                  {plan.description}
                </p>

                {/* Separator */}
                <div className="h-[1px] w-full bg-white/5 my-6" />

                {/* Features list */}
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">
                  What's Included
                </h4>
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-primary-red/10 border border-primary-red/30 p-0.5 rounded-full mr-3 shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary-red" />
                      </div>
                      <span className="text-xs text-gray-300 leading-normal font-sans">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onJoinClick(plan.name)}
                id={`plan-cta-join-${plan.id}`}
                className={`w-full py-4 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] cursor-pointer text-center ${
                  plan.isPopular
                    ? "bg-primary-red text-white shadow-lg glow-red hover:bg-red-700"
                    : "bg-white/10 hover:bg-white/15 border border-white/20 text-white hover:border-white/40"
                }`}
              >
                Inquire & Book Now
              </button>

            </div>
          ))}
        </div>

        {/* Extra Note Block */}
        <div className="mt-16 text-center max-w-xl mx-auto flex items-center justify-center space-x-2.5 p-4 rounded-xl bg-white/[0.01] border border-white/[0.04]">
          <Info className="h-4.5 w-4.5 text-primary-red shrink-0" />
          <span className="text-[11px] text-gray-400 font-sans">
            Need customized corporate passes or separate group sessions? Contact AB reception desk directly for customized offers.
          </span>
        </div>

      </div>
    </section>
  );
}
