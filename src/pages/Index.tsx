
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Hamza El Moueddane | Portfolio";
    
    // Smooth scroll to hash on load
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-portfolio-primary text-portfolio-text">
      <Navbar />
      
      {/* Fixed side elements */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center z-30">
        <SocialLinks vertical />
      </div>
      
      <div className="hidden lg:block fixed right-8 bottom-0 z-30">
        <div className="flex flex-col items-center">
          <a 
            href="mailto:contact@hamzaelmoueddane.com" 
            className="mono text-sm text-portfolio-text writing-vertical-rl hover:text-portfolio-secondary transition-colors duration-300"
            style={{ writingMode: 'vertical-rl' }}
          >
            contact@hamzaelmoueddane.com
          </a>
          <div className="w-px h-24 bg-portfolio-text mt-6"></div>
        </div>
      </div>
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
