
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-portfolio-text/70">
      <div className="portfolio-container">
        <SocialLinks />
        
        <div className="mt-6">
          <p className="mono text-sm">
            Designed & Built by Hamza El Moueddane
          </p>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
