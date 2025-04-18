
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  vertical?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ vertical = false }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/MOUBI9A',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hamza-el-moueddane',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:contact@hamzaelmoueddane.com',
      icon: <Mail size={20} />
    }
  ];

  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} gap-6 items-center`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-text hover:text-portfolio-secondary transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
      {vertical && (
        <div className="w-px h-24 bg-portfolio-text"></div>
      )}
    </div>
  );
};

export default SocialLinks;
