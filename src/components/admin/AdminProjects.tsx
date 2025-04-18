
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  reverse?: boolean;
}

const AdminProjects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    imageUrl: '',
  });

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Default projects
      const defaultProjects = [
        {
          id: '1',
          title: 'MOUBI9A',
          description: 'A comprehensive platform for tracking and managing legal documents.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          githubUrl: 'https://github.com/MOUBI9A/MOUBI9A',
          imageUrl: 'https://images.unsplash.com/photo-1568038968213-f5cb3151518d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }
  }, [projects]);

  const handleAddProject = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const projectToAdd = {
      ...newProject,
      id,
      technologies: newProject.technologies instanceof Array 
        ? newProject.technologies 
        : newProject.technologies.split(',').map(tech => tech.trim())
    };
    
    setProjects([...projects, projectToAdd]);
    setNewProject({
      title: '',
      description: '',
      technologies: [],
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
    });
    setIsDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Project added successfully!",
    });
  };

  const handleUpdateProject = () => {
    if (!editingProject) return;
    
    const updatedProjects = projects.map(project => {
      if (project.id === editingProject.id) {
        return {
          ...editingProject,
          technologies: editingProject.technologies instanceof Array 
            ? editingProject.technologies 
            : typeof editingProject.technologies === 'string'
              ? editingProject.technologies.split(',').map(tech => tech.trim())
              : []
        };
      }
      return project;
    });
    
    setProjects(updatedProjects);
    setEditingProject(null);
    
    toast({
      title: "Success",
      description: "Project updated successfully!",
    });
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
      
      toast({
        title: "Success",
        description: "Project deleted successfully!",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editingProject) {
      setEditingProject({ ...editingProject, [name]: value });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (editingProject) {
      setEditingProject({ ...editingProject, technologies: value.split(',').map(tech => tech.trim()) });
    } else {
      setNewProject({ ...newProject, technologies: value.split(',').map(tech => tech.trim()) });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-portfolio-secondary text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title">Title</label>
                <Input 
                  id="title" 
                  name="title" 
                  value={newProject.title} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description">Description</label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={newProject.description} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="technologies">Technologies (comma separated)</label>
                <Input 
                  id="technologies" 
                  name="technologies" 
                  value={Array.isArray(newProject.technologies) ? newProject.technologies.join(', ') : newProject.technologies} 
                  onChange={handleTechnologiesChange}
                  className="col-span-3" 
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="githubUrl">GitHub URL</label>
                <Input 
                  id="githubUrl" 
                  name="githubUrl" 
                  value={newProject.githubUrl} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="liveUrl">Live URL (optional)</label>
                <Input 
                  id="liveUrl" 
                  name="liveUrl" 
                  value={newProject.liveUrl || ''} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="imageUrl">Image URL (optional)</label>
                <Input 
                  id="imageUrl" 
                  name="imageUrl" 
                  value={newProject.imageUrl || ''} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-portfolio-secondary text-white"
                onClick={handleAddProject}
              >
                Add Project
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Technologies</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">No projects found</TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="max-w-xs truncate">{project.description}</TableCell>
                  <TableCell>{Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => setEditingProject(project)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                          <DialogHeader>
                            <DialogTitle>Edit Project</DialogTitle>
                          </DialogHeader>
                          {editingProject && (
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <label htmlFor="edit-title">Title</label>
                                <Input 
                                  id="edit-title" 
                                  name="title" 
                                  value={editingProject.title} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-description">Description</label>
                                <Textarea 
                                  id="edit-description" 
                                  name="description" 
                                  value={editingProject.description} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-technologies">Technologies (comma separated)</label>
                                <Input 
                                  id="edit-technologies" 
                                  name="technologies" 
                                  value={Array.isArray(editingProject.technologies) ? editingProject.technologies.join(', ') : editingProject.technologies} 
                                  onChange={handleTechnologiesChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-githubUrl">GitHub URL</label>
                                <Input 
                                  id="edit-githubUrl" 
                                  name="githubUrl" 
                                  value={editingProject.githubUrl} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-liveUrl">Live URL (optional)</label>
                                <Input 
                                  id="edit-liveUrl" 
                                  name="liveUrl" 
                                  value={editingProject.liveUrl || ''} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-imageUrl">Image URL (optional)</label>
                                <Input 
                                  id="edit-imageUrl" 
                                  name="imageUrl" 
                                  value={editingProject.imageUrl || ''} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                            </div>
                          )}
                          <DialogFooter>
                            <Button 
                              type="submit" 
                              className="bg-portfolio-secondary text-white"
                              onClick={handleUpdateProject}
                            >
                              Update Project
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProjects;
