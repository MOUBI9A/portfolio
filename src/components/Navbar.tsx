import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-portfolio-primary/90 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="portfolio-container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-portfolio-secondary text-2xl font-bold mono">HEM.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link mono text-sm"
            >
              <span className="text-portfolio-secondary mr-1">{String(index + 1).padStart(2, '0')}.</span>
              {link.name}
            </a>
          ))}
          <a
            href="/resume"
            className="border border-portfolio-secondary text-portfolio-secondary px-4 py-2 rounded hover:bg-portfolio-secondary/10 transition-colors duration-300 mono text-sm"
          >
            Resume
          </a>
          
          {/* Admin Login Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="text-portfolio-secondary hover:text-portfolio-text hover:bg-portfolio-card"
            onClick={() => window.location.href = '/admin'}
          >
            <LogIn className="w-4 h-4 mr-2" />
            <span className="text-xs">Admin</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-secondary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-portfolio-primary/95 flex flex-col items-center justify-center">
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-6 right-6 text-portfolio-secondary"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link mono text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-portfolio-secondary mr-2">{String(index + 1).padStart(2, '0')}.</span>
                  {link.name}
                </a>
              ))}
              <a
                href="/resume"
                className="border border-portfolio-secondary text-portfolio-secondary px-6 py-3 rounded hover:bg-portfolio-secondary/10 transition-colors duration-300 mono"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
              
              {/* Admin Login Button for Mobile */}
              <Button 
                variant="ghost" 
                className="text-portfolio-secondary hover:text-portfolio-text hover:bg-portfolio-card"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '/admin';
                }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                <span>Admin</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
