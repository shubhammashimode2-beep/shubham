import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  // Safe duplicate helper for infinite scrolling carousel logic
  const doubleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute left-10 top-1/4 w-80 h-80 bg-red-600/5 filter blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            Success & Feedback
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white mt-3 tracking-tight">
            Loved By <span className="text-primary-red">Our Members</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            See what Latur residents say about our motivating workout environment, helpful coaching staff, and modern premium machine layouts.
          </p>
        </div>

        {/* Featured Showcase grid - showing 3 top reviews in highlight style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-950 p-6 rounded-2xl border border-white/5 relative flex flex-col justify-between group hover:border-primary-red/25 transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-primary-red shadow-lg group-hover:scale-105 transition-transform">
                <MessageSquare className="h-4.5 w-4.5" />
              </div>

              <div>
                {/* Score Stars */}
                <div className="flex items-center text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-500 stroke-amber-500" />
                  ))}
                </div>

                {/* Review Text block */}
                <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  “{testimonial.text}”
                </p>
              </div>

              {/* Profile layout */}
              <div className="mt-8 flex items-center space-x-3.5 border-t border-white/5 pt-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-gray-100 text-xs sm:text-sm tracking-wide">
                    {testimonial.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500 block mt-0.5">
                    {testimonial.role} • {testimonial.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Smooth Scrolling Marquee Area with the duplicated sliding reviews */}
        <div className="mt-12 relative w-full overflow-hidden">
          {/* Masking left-right borders to smoothly fade testimonials in out */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-6 w-[200%] sm:w-[300%] animate-infinite-scroll">
            {doubleTestimonials.map((testimonial, keyId) => (
              <div
                key={`${testimonial.id}-marquee-${keyId}`}
                className="w-[280px] sm:w-[340px] shrink-0 bg-[#0c0c0c] border border-white/5 p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center text-amber-400 space-x-0.5 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 stroke-transparent" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 leading-normal italic line-clamp-2">
                    “{testimonial.text}”
                  </p>
                </div>

                <div className="mt-4 flex items-center space-x-3 border-t border-white/5 pt-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-display font-bold text-gray-300 text-[11px] uppercase tracking-wider">
                      {testimonial.name}
                    </h5>
                    <span className="text-[9px] font-sans text-gray-500 block">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
