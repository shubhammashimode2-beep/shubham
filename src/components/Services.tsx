import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dumbbell,
  Flame,
  TrendingDown,
  Award,
  Zap,
  Users,
  Compass,
  Apple,
  ChevronRight,
  Sparkles,
  Check,
  X
} from "lucide-react";
import { GYM_SERVICES } from "../data";
import { GymService } from "../types";

// Dynamic Lucide icon registry mapping to guarantee flawless rendering
const ICON_REGISTRY: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Flame,
  TrendingDown,
  FlameKindling: Flame, // safe fallback
  Award,
  Zap,
  Users,
  Compass,
  Apple
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<GymService | null>(null);

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-red/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            What We Do Best
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white mt-3 tracking-tight">
            Elite <span className="text-primary-red">Fitness Services</span> We Offer
          </h2>
          <div className="w-16 h-1.5 bg-primary-red mx-auto mt-5 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            From modern weight training to targeted cardio setups, we provide everything needed in Latur to conquer fitness benchmarks under safe guided structures.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GYM_SERVICES.map((service, index) => {
            const IconComponent = ICON_REGISTRY[service.iconName] || Dumbbell;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-[#0f0f0f] border border-white/[0.04] p-8 rounded-2xl cursor-pointer hover:border-primary-red/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Neon Top Border Accent on hover */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-red to-red-600 w-0 group-hover:w-full transition-all duration-300" />
                
                {/* Content block */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 text-primary-red flex items-center justify-center group-hover:bg-primary-red group-hover:text-white group-hover:glow-red transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-lg sm:text-lg uppercase tracking-wider group-hover:text-primary-red transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mt-3.5 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet Benefits list preview */}
                  <ul className="mt-5 space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action footer */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-primary-red font-mono tracking-widest font-semibold uppercase group-hover:text-white transition-colors">
                  <span>Learn Strategy</span>
                  <div className="flex items-center space-x-1 group-hover:translate-x-1.5 transition-transform">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Lightbox Modal (For interactive review strategy) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
              {/* Backing wash */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative bg-[#0e0e0e] border border-white/10 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                {/* Glow bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary-red/40 via-primary-red to-primary-red/40" />
                
                {/* Main Body */}
                <div className="p-6 sm:p-8">
                  <header className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-red/10 border border-primary-red/30 text-primary-red flex items-center justify-center">
                        {(() => {
                          const IconComponent = ICON_REGISTRY[selectedService.iconName] || Dumbbell;
                          return <IconComponent className="h-6 w-6" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-primary-red uppercase font-semibold flex items-center">
                          <Sparkles className="h-3 w-3 mr-1.5" /> Core Service
                        </span>
                        <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl uppercase tracking-wider mt-1">
                          {selectedService.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                      id="close-service-modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </header>

                  <section className="mt-6">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
                      Overview
                    </h4>
                    <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                      {selectedService.description}
                    </p>
                  </section>

                  <section className="mt-8">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">
                      Core Advantages / Deliverables
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedService.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-white/[0.02] border border-white/[0.04] p-3 rounded-lg">
                          <Check className="h-4.5 w-4.5 text-primary-red mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-200">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <footer className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-xs text-gray-400 font-sans text-center sm:text-left flex-1">
                      Interested in <span className="text-white font-semibold">{selectedService.title}</span>? Get guidance today!
                    </div>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        // Navigate to contact
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto bg-primary-red hover:bg-red-700 text-white font-display font-bold text-xs uppercase px-5 py-3 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Inquire Custom Price
                    </button>
                  </footer>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
