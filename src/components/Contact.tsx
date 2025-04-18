
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save the message to localStorage
    try {
      const newMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toISOString(),
        read: false
      };

      // Get existing messages or initialize empty array
      const existingMessagesJSON = localStorage.getItem('portfolio_contacts');
      const existingMessages = existingMessagesJSON ? JSON.parse(existingMessagesJSON) : [];
      
      // Add new message to array
      const updatedMessages = [newMessage, ...existingMessages];
      
      // Save back to localStorage
      localStorage.setItem('portfolio_contacts', JSON.stringify(updatedMessages));
      
      // Show success toast
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    } catch (error) {
      console.error('Error saving message:', error);
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="portfolio-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center">
          <span className="text-portfolio-secondary mono mr-2">03.</span>
          <span>Get In Touch</span>
        </h2>
        
        <p className="text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="bg-portfolio-card/30 backdrop-blur-sm p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-portfolio-lightest">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-portfolio-primary border-portfolio-text/30 text-portfolio-lightest"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-portfolio-lightest">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-portfolio-primary border-portfolio-text/30 text-portfolio-lightest"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-portfolio-lightest">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-portfolio-primary border-portfolio-text/30 text-portfolio-lightest h-40"
                placeholder="Your message..."
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-transparent border border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10 px-8 py-6 rounded mono"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
