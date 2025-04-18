import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from 'lucide-react';

const ResumePage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('fullstack');
  const [loading, setLoading] = useState<boolean>(true);

  // Resume options with more details
  const resumeOptions = [
    { 
      id: 'fullstack', 
      title: 'Fullstack Developer',
      description: 'Focus on full-stack web development skills including React, Node.js, and database technologies.',
      filename: '/resumes/fullstack.pdf' 
    },
    { 
      id: 'cpp', 
      title: 'C++ Developer',
      description: 'Emphasis on C++, systems programming, algorithms and data structures.',
      filename: '/resumes/cpp.pdf' 
    }
  ];

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedRole]);

  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
    setLoading(true);
  };

  const currentResume = resumeOptions.find(option => option.id === selectedRole);

  return (
    <div className="resume-page container mx-auto py-12 px-4 md:px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Professional Resume</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Select the resume that best matches your interest to learn more about my professional experience and skills.
        </p>
      </motion.div>

      <Card className="mb-8 border border-portfolio-card/50 bg-portfolio-card/10 backdrop-blur-sm shadow-xl">
        <CardContent className="p-6 sm:p-8">
          <Tabs defaultValue={selectedRole} onValueChange={handleRoleChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-2 mb-8">
              {resumeOptions.map((option) => (
                <TabsTrigger 
                  key={option.id} 
                  value={option.id}
                  className="text-base sm:text-lg mono tracking-wide"
                >
                  {option.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {resumeOptions.map((option) => (
              <TabsContent key={option.id} value={option.id} className="mt-0">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold mb-3 text-portfolio-lightest mono">{option.title}</h2>
                  <p className="text-portfolio-text max-w-2xl mx-auto">{option.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="resume-actions flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button
              variant="default"
              size="lg"
              className="bg-portfolio-secondary text-white hover:bg-portfolio-secondary/90 backdrop-blur-sm shadow-lg"
              asChild
            >
              <a href={currentResume?.filename} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10 backdrop-blur-sm"
              asChild
            >
              <a href={currentResume?.filename} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Open in New Tab
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="resume-viewer-container relative rounded-xl overflow-hidden border border-portfolio-card/50 bg-portfolio-card/10 backdrop-blur-sm shadow-xl"
      >
        {loading ? (
          <div className="flex items-center justify-center h-[600px] md:h-[800px] bg-transparent">
            <div className="animate-pulse flex flex-col items-center">
              <FileText size={48} className="text-portfolio-secondary mb-4" />
              <div className="h-4 w-48 bg-portfolio-secondary/20 rounded-lg"></div>
            </div>
          </div>
        ) : (
          <object
            data={currentResume?.filename}
            type="application/pdf"
            className="w-full h-[600px] md:h-[800px]"
            aria-label={`${currentResume?.title} Resume`}
          >
            <div className="flex flex-col items-center justify-center h-[600px] md:h-[800px] bg-transparent p-4 text-center">
              <p className="text-lg text-portfolio-secondary mb-4">Unable to display PDF.</p>
              <p className="mb-4 text-portfolio-text">Your browser might not support PDF embedding or the file may be missing.</p>
              <Button 
                variant="default"
                size="lg"
                className="bg-portfolio-secondary text-white hover:bg-portfolio-secondary/90 backdrop-blur-sm shadow-lg"
                asChild
              >
                <a href={currentResume?.filename} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume Instead
                </a>
              </Button>
            </div>
          </object>
        )}
      </motion.div>
    </div>
  );
};

export default ResumePage;