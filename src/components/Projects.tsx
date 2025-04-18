
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'MOUBI9A',
      description: 'A comprehensive platform for tracking and managing legal documents, featuring automated workflows and secure document storage.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/MOUBI9A/MOUBI9A',
      imageUrl: 'https://images.unsplash.com/photo-1568038968213-f5cb3151518d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      liveUrl: undefined
    },
    {
      title: 'CTF_Helper',
      description: 'A toolkit designed for Capture The Flag enthusiasts, providing utilities for common tasks like cryptography, steganography, and binary analysis.',
      technologies: ['Python', 'C', 'Bash', 'Cryptography'],
      githubUrl: 'https://github.com/MOUBI9A/CTF_Helper',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      reverse: true,
      liveUrl: undefined
    },
    {
      title: 'LIBFT_42',
      description: 'A personal implementation of the C standard library functions as part of the 42 Network curriculum, demonstrating low-level programming expertise.',
      technologies: ['C', 'Memory Management', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/MOUBI9A/42_Projects/tree/main/libft',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      liveUrl: undefined
    }
  ];

  // Add the 42 Projects workspace projects
  const projects42 = [
    {
      title: 'Libft',
      description: 'A personal implementation of the C standard library functions as part of the 42 Network curriculum.',
      technologies: ['C', 'Memory Management', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/MOUBI9A/42_Projects/tree/main/libft',
      liveUrl: undefined
    },
    {
      title: 'Get_Next_Line',
      description: 'A function that reads a file line by line, handling efficient memory management.',
      technologies: ['C', 'File I/O', 'Memory Management', 'Static Variables'],
      githubUrl: 'https://github.com/MOUBI9A/42_Projects/tree/main/get_next_line',
      liveUrl: undefined
    },
    {
      title: 'Printf',
      description: 'A recreation of the printf function with support for various format specifiers.',
      technologies: ['C', 'Variadic Functions', 'String Formatting'],
      githubUrl: 'https://github.com/MOUBI9A/42_Projects/tree/main/printf',
      liveUrl: undefined
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="portfolio-container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 flex items-center">
          <span className="text-portfolio-secondary mono mr-2">02.</span>
          <span>Projects I've Built</span>
          <span className="ml-4 h-px bg-portfolio-text/30 flex-grow hidden md:block"></span>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              reverse={project.reverse}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-8">42 School Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects42.map((project, index) => (
              <div 
                key={index} 
                className="bg-portfolio-card p-6 rounded-lg card-hover flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-secondary">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="flex gap-4">
                    <a href={project.githubUrl} className="text-portfolio-lightest hover:text-portfolio-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-portfolio-text mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="mono text-sm text-portfolio-text/70 flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com/MOUBI9A/42_Projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-secondary text-white rounded-md hover:bg-portfolio-secondary/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View All 42 Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
