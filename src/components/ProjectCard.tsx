
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  reverse = false
}) => {
  return (
    <div className="relative grid md:grid-cols-12 gap-4 md:gap-10 mb-16">
      {/* Project Image */}
      <a 
        href={liveUrl || githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={cn(
          "md:col-span-7 block relative rounded-lg overflow-hidden",
          reverse ? "md:col-start-6" : "md:col-start-1"
        )}
      >
        <div className="absolute inset-0 bg-portfolio-primary/50 hover:bg-transparent transition-colors duration-300"></div>
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          style={{ minHeight: "300px" }}
        />
      </a>

      {/* Project Info */}
      <div 
        className={cn(
          "md:col-span-7 md:absolute md:h-full md:flex md:flex-col md:justify-center",
          reverse ? "md:left-0" : "md:right-0"
        )}
      >
        <div className={cn(
          "bg-portfolio-card/30 backdrop-blur-sm p-6 rounded-lg",
          reverse ? "md:text-left" : "md:text-right"
        )}>
          <p className="text-portfolio-secondary mono mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          
          <div className="mb-5">{description}</div>
          
          <ul className={cn(
            "flex flex-wrap gap-x-4 gap-y-2 mb-6 mono text-sm",
            reverse ? "md:justify-start" : "md:justify-end"
          )}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          
          <div className={cn(
            "flex gap-4",
            reverse ? "md:justify-start" : "md:justify-end"
          )}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-lightest hover:text-portfolio-secondary transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-lightest hover:text-portfolio-secondary transition-colors"
                aria-label="Live Project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
