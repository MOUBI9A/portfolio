
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Validate credentials
  const validateCredentials = (username: string, password: string) => {
    return username === 'admin' && password === 'admin123';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      const isValid = validateCredentials(username, password);
      
      if (isValid) {
        // Set the auth state in local storage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Show success toast
        toast({
          title: "Login successful!",
          description: "Welcome to the admin panel.",
          duration: 3000,
        });
        
        // Redirect to admin dashboard page
        navigate('/admin/dashboard');
      } else {
        // Show error toast
        toast({
          title: "Login failed!",
          description: "Invalid username or password. Use admin/admin123.",
          variant: "destructive",
          duration: 5000,
        });
      }
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-portfolio-primary flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-portfolio-card p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-portfolio-text">Admin Login</h1>
          <p className="text-portfolio-text/70 mt-2">Enter your credentials to access the admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-portfolio-text">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-portfolio-primary/50 border-portfolio-card text-portfolio-text"
              placeholder="admin"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-portfolio-text">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-portfolio-primary/50 border-portfolio-card text-portfolio-text"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <Button 
            variant="link" 
            onClick={() => navigate('/')} 
            className="text-portfolio-secondary"
            disabled={isLoading}
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
