import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Dumbbell, MessageSquareIcon } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Why Us", href: "why-choose" },
    { name: "Gallery", href: "gallery" },
    { name: "Plans", href: "pricing" },
    { name: "BMI", href: "bmi" },
    { name: "Contact", href: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2.5 cursor-pointer group"
              onClick={() => handleLinkClick("hero")}
            >
              <div className="bg-primary-red p-2 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Dumbbell className="h-6.5 w-6.5 text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  AB <span className="text-primary-red">HEALTH & FITNESS</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-400 block -mt-1">
                  Latur, India
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.href}
                    id={`nav-desktop-${link.href}`}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-4 py-2 font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary-red font-semibold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary-red"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Call To Action Button Block */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="tel:+919766855604"
                id="header-call-btn"
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-primary-red text-gray-300 hover:text-white text-xs font-mono transition-all duration-300 bg-white/[0.02]"
              >
                <Phone className="h-3.5 w-3.5 text-primary-red" />
                <span>+91 97668 55604</span>
              </a>
              <button
                onClick={() => handleLinkClick("contact")}
                id="header-cta-btn"
                className="bg-primary-red hover:bg-red-700 text-white font-display font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition-all duration-300 glow-red hover:scale-[1.02]"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="https://wa.me/919766855604"
                target="_blank"
                rel="noreferrer"
                id="mobile-nav-whatsapp"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg text-white block sm:hidden"
              >
                <MessageSquareIcon className="h-4.5 w-4.5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                id="mobile-nav-toggle"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              id="mobile-nav-container"
              className="lg:hidden bg-black/95 border-b border-white/[0.08]"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.href}
                      id={`nav-mobile-${link.href}`}
                      onClick={() => handleLinkClick(link.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-sans font-medium text-base transition-all ${
                        isActive
                          ? "bg-primary-red/10 text-primary-red border-l-3 border-primary-red"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-white/[0.08] flex flex-col space-y-3 px-4">
                  <a
                    href="tel:+919766855604"
                    id="mobile-nav-call"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg border border-white/10 text-gray-300 text-sm font-semibold"
                  >
                    <Phone className="h-4 w-4 text-primary-red" />
                    <span>Call +91 97668 55604</span>
                  </a>
                  <button
                    onClick={() => handleLinkClick("contact")}
                    id="mobile-nav-join"
                    className="w-full bg-primary-red text-center py-3 rounded-lg text-white font-display font-bold uppercase text-sm glow-red"
                  >
                    Book A Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
