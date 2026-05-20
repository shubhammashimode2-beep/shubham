import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // List of unique categories
  const categories = [
    { value: "all", label: "All Areas" },
    { value: "interior", label: "Gym Interior" },
    { value: "weights", label: "Weight Lifting" },
    { value: "cardio", label: "Cardio Zone" },
    { value: "group", label: "Group Practice" }
  ];

  // Filtered list based on active category selection
  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (imageIndex: number) => {
    // Find the matching index in global gallery items so next/prev works flawlessly
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-dark-surface relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Explore Our Floor
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
              Our Premium <span className="text-primary-red">Gym Gallery</span>
            </h2>
          </div>

          {/* Interactive Category Filter Menu */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`gallery-filter-${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-primary-red border-primary-red text-white glow-red"
                    : "bg-zinc-950 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid Display */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Find index inside master list to sync index inside lightbox
              const globalIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => openLightbox(globalIndex)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 aspect-[4/3] sm:aspect-square md:aspect-[4/3]"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />
                  
                  {/* Floating labels */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white border border-white/10 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="h-4 w-4 text-primary-red" />
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-primary-red block mb-1">
                        {item.category === "weights" ? "Weights Area" : item.category === "cardio" ? "Cardio Deck" : item.category === "group" ? "Group session" : "Interior layout"}
                      </span>
                      <h4 className="font-display font-extrabold text-white text-base uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Carousel */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
              {/* Backing wash */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Central Box */}
              <div className="relative max-w-5xl w-full z-10 flex flex-col items-center justify-center">
                
                {/* Header Info Row */}
                <div className="w-full flex items-center justify-between text-white mb-4 px-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4.5 w-4.5 text-primary-red" />
                    <span className="font-display font-bold uppercase text-sm tracking-wide">
                      {GALLERY_ITEMS[lightboxIndex].title}
                    </span>
                  </div>
                  <button
                    onClick={closeLightbox}
                    id="close-lightbox-btn"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Main Action Block with Navigation arrows overlay */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center shadow-2xl">
                  
                  {/* Left toggle button */}
                  <button
                    onClick={handlePrev}
                    id="lightbox-prev-btn"
                    className="absolute left-4 z-20 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-white hover:border-primary-red transition-all scale-95 hover:scale-100 cursor-pointer"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                    alt={GALLERY_ITEMS[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />

                  {/* Right toggle button */}
                  <button
                    onClick={handleNext}
                    id="lightbox-next-btn"
                    className="absolute right-4 z-20 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 text-white hover:border-primary-red transition-all scale-95 hover:scale-100 cursor-pointer"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Indicator Label */}
                <span className="mt-4 font-mono text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Showroom Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>

              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
