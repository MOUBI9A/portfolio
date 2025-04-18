
import React from 'react';

const About = () => {
  const skills = [
    'C', 'Python', 'JavaScript (ES6+)', 'TypeScript',
    'React', 'Shell Scripting', 'HTML & CSS',
    'Git & GitHub', 'Docker', 'Cybersecurity',
    'Problem Solving', 'CI/CD'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="portfolio-container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 flex items-center">
          <span className="text-portfolio-secondary mono mr-2">01.</span>
          <span>About Me</span>
          <span className="ml-4 h-px bg-portfolio-text/30 flex-grow hidden md:block"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm Hamza, a passionate developer with a background in software engineering and cybersecurity. 
                I enjoy creating things that live on the internet and solving complex problems.
              </p>
              <p>
                I studied at the <a href="https://1337.ma" target="_blank" rel="noopener noreferrer" className="text-portfolio-secondary hover:underline">42 Network (1337-Med)</a> coding school, 
                where I developed a solid foundation in C programming, algorithms, and software architecture through project-based learning.
              </p>
              <p>
                My journey in tech has allowed me to work on various projects, from low-level programming challenges to 
                web applications and cybersecurity tools. I'm particularly interested in building secure, efficient, and user-friendly software solutions.
              </p>
              <p>
                When I'm not coding, you might find me participating in CTF challenges, exploring new technologies, 
                or working on my research interests in natural oils extraction.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-portfolio-lightest">Languages I speak:</h3>
              <p>English, French, Arabic</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-portfolio-lightest">My Skills</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-portfolio-secondary mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
            
            <div className="mt-12 relative max-w-xs mx-auto">
              <div className="relative z-10 rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Hamza El Moueddane" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute border-2 border-portfolio-secondary rounded-md -top-4 -right-4 w-full h-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
