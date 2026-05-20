import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import BMICalculator from "./components/BMICalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Dynamic automatic intersection observer to sync sticky headers beautifully
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "services",
      "why-choose",
      "gallery",
      "pricing",
      "bmi",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // focus on middle portion of screen
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth navigation scroll with offsets to account for sticky navbar height
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -76; // Accommodate standard sticky navbar height
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: yPosition,
        behavior: "smooth"
      });
      
      // Update local state directly for responsive highlight feedbacks
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-dark-surface min-h-screen font-sans selection:bg-primary-red selection:text-white antialiased text-gray-200">
      
      {/* Sticky Top Interactive Navigation Bar */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections flow */}
      <main id="main-content-flow">
        
        {/* 1. Hero Landing Block */}
        <Hero
          onJoinClick={() => handleNavClick("contact")}
          onTrialClick={() => handleNavClick("contact")}
          onContactClick={() => handleNavClick("contact")}
        />

        {/* 2. About Detailed Description Card */}
        <About />

        {/* 3. Dynamic Services cards */}
        <Services />

        {/* 4. Why Latur Prefers Us (Benefits block) */}
        <WhyChooseUs />

        {/* 5. Custom client scrolling Testimonials */}
        <Testimonials />

        {/* 6. Grid gallery with Lightbox view */}
        <Gallery />

        {/* 7. Membership price tiers card selection */}
        <Pricing onJoinClick={(planName) => handleNavClick("contact")} />

        {/* 8. Interactive range/slider BMI analytics */}
        <BMICalculator />

        {/* 9. Contact form, directions map structure */}
        <Contact />

      </main>

      {/* 10. Sleek Dark Footer coordinates */}
      <Footer onNavClick={handleNavClick} />

    </div>
  );
}
