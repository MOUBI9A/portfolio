
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="portfolio-container">
        <div className="max-w-3xl">
          <p className="text-portfolio-secondary mono mb-5 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Hamza El Moueddane.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            I build things for the web.
          </h2>
          <p className="text-lg text-portfolio-text mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
            I'm a software developer specializing in web development, C programming, and cybersecurity. 
            Currently focused on building secure and accessible digital experiences.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 border border-portfolio-secondary text-portfolio-secondary px-7 py-4 rounded hover:bg-portfolio-secondary/10 transition-all duration-300 mono"
            >
              Check out my work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
