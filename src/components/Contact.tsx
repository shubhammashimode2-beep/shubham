import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Map,
  X,
  PhoneCall
} from "lucide-react";
import { ContactFormMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormMessage>({
    fullName: "",
    phoneNumber: "",
    email: "",
    selectedPlan: "Standard Plan",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API network latency of 1s
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessAlert(true);
      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        selectedPlan: "Standard Plan",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Visual glowing light points */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary-red/5 filter blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            Start Your Transformation
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white mt-3 tracking-tight">
            Connect <span className="text-primary-red">With Us</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            Have questions about pricing, coaches, or layout schedules? Complete our quick inquiry sheet below. Let's make it happen!
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Info & Directions (5cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Quick action buttons row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href="tel:+919766855604"
                id="contact-action-call"
                className="flex flex-col items-center justify-center p-4 bg-[#0c0c0c] hover:bg-[#141414] border border-white/5 rounded-2xl text-center group transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-primary-red/10 border border-primary-red/30 flex items-center justify-center text-primary-red mb-2.5 group-hover:scale-105 transition-transform">
                  <PhoneCall className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Call Now</span>
                <span className="text-xs text-white mt-1 select-all">+91 97668 55604</span>
              </a>

              <a
                href="https://wa.me/919766855604?text=Hi!+I'm+inquiring+about+AB+Health+and+Fitness+memberships."
                target="_blank"
                rel="noreferrer"
                id="contact-action-whatsapp"
                className="flex flex-col items-center justify-center p-4 bg-[#0c0c0c] hover:bg-[#141414] border border-white/5 rounded-2xl text-center group transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-2.5 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">WhatsApp Us</span>
                <span className="text-xs text-white mt-1">Chat Support</span>
              </a>

              <a
                href="https://maps.google.com/?q=AB+HEALTH+AND+FITNESS+Ausa+Road,+Adarsh+Colony,+Latur,+Maharashtra+413531"
                target="_blank"
                rel="noreferrer"
                id="contact-action-directions"
                className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-4 bg-[#0c0c0c] hover:bg-[#141414] border border-white/5 rounded-2xl text-center group transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 mb-2.5 group-hover:scale-105 transition-transform">
                  <Map className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Directions</span>
                <span className="text-xs text-white mt-1">Get Directions</span>
              </a>
            </div>

            {/* Structured info cells */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] p-6 sm:p-8 rounded-2xl flex flex-col space-y-6">
              
              {/* Box Header */}
              <h3 className="font-display font-medium text-white text-base uppercase tracking-wider border-b border-white/5 pb-3">
                Business Coordinates
              </h3>

              {/* Geo location */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red/10 border border-primary-red/30 p-2 text-primary-red rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase text-gray-400 tracking-wider">
                    Our Location Address
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 leading-relaxed">
                    Ausa Road, Adarsh Colony, Latur, Maharashtra 413531
                  </p>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mt-1 font-bold">
                    Code: 9HP6+R9 Latur
                  </span>
                </div>
              </div>

              {/* Call Details */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red/10 border border-primary-red/30 p-2 text-primary-red rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase text-gray-400 tracking-wider">
                    Telephone Channels
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 leading-relaxed font-mono">
                    +91 97668 55604
                  </p>
                  <p className="text-[10px] font-sans text-gray-500 mt-0.5 leading-normal">
                    Call directly during training or support slots.
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-red/10 border border-primary-red/30 p-2 text-primary-red rounded-xl shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase text-gray-400 tracking-wider">
                    Operational Slots
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 leading-relaxed">
                    Open Daily — Closes at 11:00 PM
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">
                    Locker slots and coaches are occupied up to closing.
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Box Frame Embed */}
            <div className="overflow-hidden rounded-2xl border border-white/5 shadow-inner h-60 relative w-full bg-zinc-950">
              <iframe
                title="Google Maps Embed AB HEALTH AND FITNESS Latur"
                src="https://maps.google.com/maps?q=AB%20HEALTH%20AND%20FITNESS%20Ausa%20Road,%20Adarsh%20Colony,%20Latur,%20Maharashtra%20413531&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale filter contrast-[1.1] opacity-75 focus:outline-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Contact sheet form (7cols) */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/[0.04] shadow-2xl relative">
            <h3 className="font-display font-extrabold text-white text-base uppercase tracking-wider mb-2 flex items-center">
              <span className="w-1.5 h-5 bg-primary-red rounded-full mr-3" />
              SAY HELLO — BOOK YOUR SLOT
            </h3>
            <p className="text-xs text-gray-400 leading-normal mb-8">
              Fill up the quick registration forms below. Our on-duty reception coordinator will call you back within 2 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" id="gym-contact-form">
              
              {/* Full Name field */}
              <div>
                <label htmlFor="fullName" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Full Name / Username
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Anand Deshmukh"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-[#181818] border border-white/5 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-sans transition-all"
                />
              </div>

              {/* Contact numbers row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-[#181818] border border-white/5 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-mono transition-all"
                  />
                </div>

                {/* Email (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. mail@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#181818] border border-white/5 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-sans transition-all"
                  />
                </div>
              </div>

              {/* Target Plan selector */}
              <div>
                <label htmlFor="selectedPlan" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Select Target Workout Plan
                </label>
                <select
                  id="selectedPlan"
                  name="selectedPlan"
                  value={formData.selectedPlan}
                  onChange={handleInputChange}
                  className="w-full bg-[#181818] border border-white/5 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red cursor-pointer transition-all"
                >
                  <option value="Basic Plan">Basic Plan (Self Training access)</option>
                  <option value="Standard Plan">Standard Plan (Trainer assistance)</option>
                  <option value="Premium Plan">Premium Plan (1-on-1 personal coach)</option>
                  <option value="Free Trial">Free Trial Request (1 complimentary visit)</option>
                </select>
              </div>

              {/* Message block */}
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Your Fitness Goal or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="e.g., I want to lose weight and maintain proper posture. Let me know when should I visit..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#181818] border border-white/5 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red font-sans transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit triggers wrapper */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-red hover:bg-red-700 text-white font-display font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-xl glow-red disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Transmitting Grid...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Fitness Inquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* SUCCESS MODAL TRIGGER ALERT */}
      {showSuccessAlert && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
          {/* Backing wash */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowSuccessAlert(false)} />

          <div className="relative bg-[#0d0d0d] border border-green-500/30 p-8 rounded-2xl max-w-md w-full text-center shadow-2xl z-10">
            <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mx-auto mb-5 shadow-lg">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h4 className="font-display font-black text-white text-xl uppercase tracking-wider">
              INQUIRY RECEIVED!
            </h4>
            <p className="text-xs text-gray-300 mt-3 leading-relaxed">
              Congratulations on taking the first step. Your training and slot choices have been locked inside our calendar. Our coordinator will contact you shortly during working hours to proceed.
            </p>

            <button
              onClick={() => setShowSuccessAlert(false)}
              className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white text-xs font-display font-bold uppercase rounded-lg transition-colors cursor-pointer"
            >
              Back To Website
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
