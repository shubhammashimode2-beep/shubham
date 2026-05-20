import { motion } from "motion/react";
import { ArrowRight, Star, Dumbbell, Calendar, Phone } from "lucide-react";
import { IMAGES } from "../data";
import { useEffect, useState } from "react";

// Robust high-performance local counter component that supports decimal ratings
function AnimatedCounter({
  target,
  duration = 1500,
  suffix = "",
  decimals = 0
}: {
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * target;
      setCount(currentValue);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
}

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick, onContactClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background Image layer with subtle zoom animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="AB Health and Fitness Gym"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-60 filter contrast-[1.1] brightness-[0.7]"
          referrerPolicy="no-referrer"
          style={{ animationDuration: "12s" }}
        />
        {/* Gradients overlay to enhance readability of typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center">
        
        {/* Rating or Trust Indicator Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center space-x-2 bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full"
        >
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-500" />
            ))}
          </div>
          <span className="text-xs font-mono font-medium text-gray-200">
            4.8 ⭐ <span className="text-gray-400 font-sans font-normal">(363+ Google Reviews)</span>
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[40px] leading-[1.1] sm:text-6xl md:text-7xl uppercase text-white tracking-tight"
          >
            Transform Your <span className="text-primary-red glow-text-red">Body</span>, <br />
            Transform Your <span className="text-primary-red glow-text-red">Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 font-sans text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
          >
            “Sweat Now, Glow Later”
            <span className="block mt-1.5 font-sans font-medium text-base text-primary-red tracking-wide uppercase">
              Premium Fitness Experience in Latur, Maharashtra
            </span>
          </motion.p>
        </div>

        {/* Interactive CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onJoinClick}
            id="hero-join-now-btn"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-red hover:bg-red-700 text-white font-display font-extrabold text-sm uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-xl glow-red hover:scale-[1.03] cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button
            onClick={onTrialClick}
            id="hero-free-trial-btn"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-display font-extrabold text-sm uppercase px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer"
          >
            <Calendar className="h-4 w-4 text-primary-red" />
            <span>Book Free Trial</span>
          </button>

          <button
            onClick={onContactClick}
            id="hero-contact-us-btn"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white font-display font-bold text-sm uppercase px-7 py-4 rounded-xl transition-all duration-300 cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            <span>Contact Us</span>
          </button>
        </motion.div>

        {/* Stats Section with auto counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 w-full max-w-5xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
            <div className="absolute inset-x-0 -top-px h-[1px] bg-gradient-to-r from-transparent via-primary-red/50 to-transparent" />
            
            <div className="text-center group flex flex-col items-center justify-center">
              <div className="text-primary-red text-4.5xl sm:text-5xl font-display font-extrabold tracking-tight block">
                <AnimatedCounter target={363} suffix="+" />
              </div>
              <span className="text-xs uppercase tracking-[0.08em] font-sans text-gray-400 mt-2 block font-semibold group-hover:text-white transition-colors">
                Happy Members
              </span>
            </div>

            <div className="text-center group border-l border-white/10 flex flex-col items-center justify-center">
              <div className="text-amber-500 text-4.5xl sm:text-5xl font-display font-extrabold tracking-tight block">
                <AnimatedCounter target={4.8} decimals={1} suffix=" ⭐" />
              </div>
              <span className="text-xs uppercase tracking-[0.08em] font-sans text-gray-400 mt-2 block font-semibold group-hover:text-white transition-colors">
                Star Google Rating
              </span>
            </div>

            <div className="text-center group border-l border-white/10 flex flex-col items-center justify-center">
              <div className="text-primary-red text-4.5xl sm:text-5xl font-display font-extrabold tracking-tight block">
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <span className="text-xs uppercase tracking-[0.08em] font-sans text-gray-400 mt-2 block font-semibold group-hover:text-white transition-colors">
                Modern Machines
              </span>
            </div>

            <div className="text-center group border-l border-white/10 flex flex-col items-center justify-center">
              <div className="text-primary-red text-4.5xl sm:text-5xl font-display font-extrabold tracking-tight block">
                <AnimatedCounter target={8} suffix="+" />
              </div>
              <span className="text-xs uppercase tracking-[0.08em] font-sans text-gray-400 mt-2 block font-semibold group-hover:text-white transition-colors">
                Certified Trainers
              </span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Elegant visual separation overlay at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-dark-surface to-transparent pointer-events-none" />
    </section>
  );
}
