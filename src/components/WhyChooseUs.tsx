import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  CreditCard,
  Clock,
  Grid
} from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

// Type-safe registry map for correct compiled render
const ICON_POOL: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  ShieldCheck,
  Hearthandshake: CheckCircle2, // safe premium substitute
  Sparkles,
  VolumeX: Zap, // active energetic vibe fallback
  CreditCard,
  Clock,
  Grid
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-24 bg-dark-surface relative overflow-hidden text-white">
      {/* Visual background atmospheric lights */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-primary-red/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-96 h-96 bg-red-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            The AB Health Edge
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mt-3">
            Why Latur <span className="text-primary-red">Prefers Us</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red mt-5 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            We aren't just another gym; we are a dedicated athletic breeding ground pairing pure iron with uncompromised hygiene and a warm, supportive community.
          </p>
        </div>

        {/* Feature Highlights Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => {
            const IconComponent = ICON_POOL[feature.iconName] || Zap;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative bg-[#111111]/90 p-6 rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-primary-red/30 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Micro Ambient Glow behind card */}
                <div className="absolute inset-x-0 -bottom-12 h-16 bg-primary-red/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Card Top Icon Indicator */}
                <div>
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900 border border-white/5 text-primary-red mb-5 group-hover:bg-primary-red group-hover:text-white group-hover:scale-105 group-hover:glow-red transition-all duration-300">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>

                  <h3 className="font-display font-bold text-gray-100 text-sm sm:text-base uppercase tracking-wider group-hover:text-primary-red transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Side highlight accent */}
                <div className="absolute top-0 right-0 h-full w-[2px] bg-primary-red scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Highlight Quote Card */}
        <div className="mt-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 sm:p-10 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-full bg-red-600/[0.03] skew-x-12 pointer-events-none" />
          
          <div className="max-w-2xl text-center sm:text-left">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wide text-white">
              Ready to claim your free fitness trial?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
              Step onto the gym floor for a complimentary session to experience our state-of-the-art machines and clean, spacious environment firsthand.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            id="whyus-trial-cta"
            className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 font-display font-extrabold text-xs uppercase px-7 py-3.5 rounded-xl transition-all duration-200 shrink-0 hover:scale-[1.03] shadow-lg cursor-pointer"
          >
            Claim Free Trial
          </button>
        </div>

      </div>
    </section>
  );
}
