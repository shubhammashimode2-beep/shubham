import { Dumbbell, Instagram, Facebook, Youtube, Heart, CornerRightDown } from "lucide-react";

interface FooterProps {
  onNavClick: (sectId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinksLeft = [
    { name: "Home Dashboard", href: "hero" },
    { name: "About Gym Area", href: "about" },
    { name: "Our Services", href: "services" },
    { name: "Why Latur Prefers Us", href: "why-choose" }
  ];

  const quickLinksRight = [
    { name: "Gym Gallery", href: "gallery" },
    { name: "Membership Plans", href: "pricing" },
    { name: "BMI Calculator", href: "bmi" },
    { name: "Contact Desk", href: "contact" }
  ];

  return (
    <footer className="bg-black border-t border-white/5 py-16 relative overflow-hidden text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <div
              className="flex items-center space-x-2.5 cursor-pointer group w-fit"
              onClick={() => onNavClick("hero")}
            >
              <div className="bg-primary-red p-2 rounded-lg flex items-center justify-center text-white">
                <Dumbbell className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white block">
                  AB <span className="text-primary-red">HEALTH & FITNESS</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gray-500 block -mt-1">
                  Latur, India
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm font-sans">
              Experience the master benchmark of fitness training in Latur. We marry premium resistance steel with supportive, experienced coaching to deliver safe results.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-instagram"
                className="w-9 h-9 rounded-lg bg-[#0e0e0e] hover:bg-neutral-800 border border-white/5 text-gray-400 hover:text-primary-red flex items-center justify-center transition-all"
                aria-label="Instagram Page"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-facebook"
                className="w-9 h-9 rounded-lg bg-[#0e0e0e] hover:bg-neutral-800 border border-white/5 text-gray-400 hover:text-primary-red flex items-center justify-center transition-all"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-youtube"
                className="w-9 h-9 rounded-lg bg-[#0e0e0e] hover:bg-neutral-800 border border-white/5 text-gray-400 hover:text-primary-red flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mt-1 border-b border-white/5 pb-2">
              Quick Navigation
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2.5 text-xs">
                {quickLinksLeft.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => onNavClick(link.href)}
                      className="hover:text-primary-red transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5 text-xs">
                {quickLinksRight.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => onNavClick(link.href)}
                      className="hover:text-primary-red transition-colors text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Schedule details (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mt-1 border-b border-white/5 pb-2">
              Reception Coordinates
            </h4>
            
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block">Telephone Hotline</span>
                <a href="tel:+919766855604" className="text-white hover:text-primary-red font-mono transition-colors block mt-1 select-all font-semibold">
                  +91 97668 55604
                </a>
              </div>
              
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block">Open Hours</span>
                <p className="text-white block mt-1 font-semibold">
                  Daily (Mon - Sun)
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  We close at 11:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-white/5 my-8" />

        {/* Bottom row copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <div>
            &copy; {currentYear} <span className="text-white font-semibold uppercase font-display">AB HEALTH AND FITNESS</span> Latur. All rights reserved.
          </div>
          
          <div id="author-label" className="flex items-center space-x-1">
            <span>Formulated in Latur with</span>
            <Heart className="h-3 w-3 text-primary-red fill-primary-red animate-pulse" />
            <span>for Elite fitness</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
