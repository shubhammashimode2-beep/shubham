import { motion } from "motion/react";
import { CheckCircle2, Trophy, Clock, Target } from "lucide-react";
import { IMAGES } from "../data";

export default function About() {
  const highlightPoints = [
    { title: "Spacious Gym Layout", text: "Generous footprint allowing members to complete heavy lifts, functional cardio, and stretches comfortably." },
    { title: "Hygienic Environment", text: "Disinfected surfaces, filtered fresh air systems, and immaculate lockers kept spotless round-the-clock." },
    { title: "Friendly Trainers", text: "Accessible certified coaching professionals always happy to jump on-floor, correct postures, and guide sets." },
    { title: "Cardio & Strength Equipment", text: "Premier dual stack pulley systems, high-speed speedway treadmills, climbmills, and heavy power racks." },
    { title: "Heavy Weight Training block", text: "Abundant iron plate loaded selections, calibrated barbells, and complete sets of precision dumbbells up to 40kg+." },
    { title: "Group Workout Sessions", text: "Inspiring physical class structures combining metabolic resistance training with dynamic community accountability." }
  ];

  const brandValues = [
    { icon: Trophy, title: "Elite Standard", text: "First-class equipment chosen to promote biological joint protection and robust performance tracking." },
    { icon: Clock, title: "Late Hour Access", text: "Open up to 11:00 PM to accommodate busy professionals and student shifts seamlessly." },
    { icon: Target, title: "Focused Atmosphere", text: "Ego-free floor space curated strictly to cultivate hard work, consistency, and positive results." }
  ];

  return (
    <section id="about" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Absolute Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-red/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-red-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Who We Are
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
              One of Latur's <span className="text-primary-red">Most Trusted</span> Fitness Landmarks
            </h2>
          </div>
          <div className="hidden md:block h-1 w-24 bg-primary-red mb-3" />
        </div>

        {/* Content Layout Grill */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium Interactive Showcase Card & Image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-3 border-l-3 border-primary-red rounded-tl-lg pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-3 border-r-3 border-primary-red rounded-br-lg pointer-events-none" />
            
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group">
              {/* Image generated earlier: gym_trainer_help */}
              <img
                src={IMAGES.trainerHelp}
                alt="AB Health And Fitness personal trainer help"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-70" />
              
              {/* Floating Glass Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/10 flex items-center space-x-4">
                <div className="bg-primary-red/20 p-2.5 rounded-lg border border-primary-red/50">
                  <CheckCircle2 className="h-5 w-5 text-primary-red" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-white text-sm uppercase tracking-wide">
                    Certified Personal Trainers
                  </h4>
                  <p className="text-xs text-gray-300">
                    Always present to correct postures and design schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-card with the rich Description Text */}
            <div className="mt-8 p-6 base-card bg-zinc-950 rounded-2xl border border-white/5 relative">
              <span className="font-serif italic font-medium text-4xl text-primary-red absolute top-3 left-4 opacity-15">“</span>
              <p className="font-sans text-gray-300 leading-relaxed text-base italic pl-4">
                AB HEALTH AND FITNESS is one of the most trusted gyms in Latur offering a motivating atmosphere, modern machines, expert trainers, and a clean workout environment for beginners and professionals.
              </p>
            </div>
          </div>

          {/* Right Column: Key highlight bullet points */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-primary-red rounded-full mr-3" />
              OUR COMPREHENSIVE OFFERING
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {highlightPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/40 p-5 rounded-xl border border-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-red mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h4 className="font-display font-bold text-gray-100 text-sm uppercase tracking-wide group-hover:text-primary-red transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1.5 leading-normal">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Row of Brand Values */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
              {brandValues.map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary-red/10 border border-primary-red/25 mb-2">
                      <IconComponent className="h-4.5 w-4.5 text-primary-red" />
                    </div>
                    <h5 className="font-display font-extrabold text-xs text-white uppercase tracking-wider block">
                      {value.title}
                    </h5>
                    <p className="text-[10px] text-gray-400 mt-1 leading-normal hidden sm:block">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
