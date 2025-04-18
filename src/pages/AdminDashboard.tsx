
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdminProjects from "@/components/admin/AdminProjects";
import AdminSkills from "@/components/admin/AdminSkills";
import AdminContacts from "@/components/admin/AdminContacts";

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState<'projects' | 'skills' | 'contact'>('projects');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const authStatus = localStorage.getItem('isLoggedIn');
    if (authStatus !== 'true') {
      toast({
        title: "Authentication required",
        description: "Please login to access the admin panel",
        variant: "destructive",
      });
      navigate('/admin');
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    // Remove auth state from local storage
    localStorage.removeItem('isLoggedIn');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    // Redirect to login page
    navigate('/admin');
  };

  if (!isLoggedIn) {
    return null; // Don't render anything until auth check is complete
  }

  const renderActiveComponent = () => {
    switch(activePage) {
      case 'projects':
        return <AdminProjects />;
      case 'skills':
        return <AdminSkills />;
      case 'contact':
        return <AdminContacts />;
      default:
        return <AdminProjects />;
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-portfolio-text">Admin Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10"
          >
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-portfolio-card rounded-lg p-4 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-portfolio-text/20">Management</h2>
              <div className="space-y-2">
                <Button 
                  onClick={() => setActivePage('projects')}
                  variant={activePage === 'projects' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activePage === 'projects' ? 'bg-portfolio-secondary text-white' : 'text-portfolio-text'}`}
                >
                  Projects
                </Button>
                <Button 
                  onClick={() => setActivePage('skills')}
                  variant={activePage === 'skills' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activePage === 'skills' ? 'bg-portfolio-secondary text-white' : 'text-portfolio-text'}`}
                >
                  Skills
                </Button>
                <Button 
                  onClick={() => setActivePage('contact')}
                  variant={activePage === 'contact' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${activePage === 'contact' ? 'bg-portfolio-secondary text-white' : 'text-portfolio-text'}`}
                >
                  Contact Messages
                </Button>
              </div>
              <div className="mt-8 pt-4 border-t border-portfolio-text/20">
                <Button 
                  variant="link" 
                  onClick={() => navigate('/')} 
                  className="text-portfolio-secondary px-0"
                >
                  Back to Portfolio
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-portfolio-card p-6 rounded-lg min-h-[600px]">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
