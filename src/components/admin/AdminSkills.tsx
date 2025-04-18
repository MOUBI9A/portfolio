
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
}

const AdminSkills = () => {
  const { toast } = useToast();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSkill, setNewSkill] = useState<Omit<Skill, 'id'>>({
    name: '',
    category: '',
    proficiency: 80,
    icon: '',
  });

  // Load skills from localStorage
  useEffect(() => {
    const savedSkills = localStorage.getItem('portfolio_skills');
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    } else {
      // Default skills
      const defaultSkills = [
        {
          id: '1',
          name: 'JavaScript',
          category: 'Frontend',
          proficiency: 90,
          icon: 'js'
        },
        {
          id: '2',
          name: 'React',
          category: 'Frontend',
          proficiency: 85,
          icon: 'react'
        },
        {
          id: '3',
          name: 'Node.js',
          category: 'Backend',
          proficiency: 80,
          icon: 'node'
        }
      ];
      setSkills(defaultSkills);
      localStorage.setItem('portfolio_skills', JSON.stringify(defaultSkills));
    }
  }, []);

  // Save skills to localStorage whenever they change
  useEffect(() => {
    if (skills.length > 0) {
      localStorage.setItem('portfolio_skills', JSON.stringify(skills));
    }
  }, [skills]);

  const handleAddSkill = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const skillToAdd = {
      ...newSkill,
      id
    };
    
    setSkills([...skills, skillToAdd]);
    setNewSkill({
      name: '',
      category: '',
      proficiency: 80,
      icon: '',
    });
    setIsDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Skill added successfully!",
    });
  };

  const handleUpdateSkill = () => {
    if (!editingSkill) return;
    
    const updatedSkills = skills.map(skill => {
      if (skill.id === editingSkill.id) {
        return editingSkill;
      }
      return skill;
    });
    
    setSkills(updatedSkills);
    setEditingSkill(null);
    
    toast({
      title: "Success",
      description: "Skill updated successfully!",
    });
  };

  const handleDeleteSkill = (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      setSkills(skills.filter(skill => skill.id !== id));
      
      toast({
        title: "Success",
        description: "Skill deleted successfully!",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'proficiency') {
      const proficiencyValue = parseInt(value);
      if (editingSkill) {
        setEditingSkill({ ...editingSkill, [name]: proficiencyValue });
      } else {
        setNewSkill({ ...newSkill, [name]: proficiencyValue });
      }
    } else {
      if (editingSkill) {
        setEditingSkill({ ...editingSkill, [name]: value });
      } else {
        setNewSkill({ ...newSkill, [name]: value });
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Skills</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-portfolio-secondary text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Skill
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="name">Skill Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  value={newSkill.name} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category">Category</label>
                <Input 
                  id="category" 
                  name="category" 
                  value={newSkill.category} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  placeholder="Frontend, Backend, DevOps, etc."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="proficiency">Proficiency (0-100)</label>
                <Input 
                  id="proficiency" 
                  name="proficiency" 
                  type="number" 
                  min="0" 
                  max="100"
                  value={newSkill.proficiency} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="icon">Icon (optional)</label>
                <Input 
                  id="icon" 
                  name="icon" 
                  value={newSkill.icon || ''} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  placeholder="Icon identifier or URL"
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-portfolio-secondary text-white"
                onClick={handleAddSkill}
              >
                Add Skill
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Skill Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Proficiency</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">No skills found</TableCell>
              </TableRow>
            ) : (
              skills.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell className="font-medium">{skill.name}</TableCell>
                  <TableCell>{skill.category}</TableCell>
                  <TableCell>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-portfolio-secondary h-2.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{skill.proficiency}%</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => setEditingSkill(skill)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Skill</DialogTitle>
                          </DialogHeader>
                          {editingSkill && (
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <label htmlFor="edit-name">Skill Name</label>
                                <Input 
                                  id="edit-name" 
                                  name="name" 
                                  value={editingSkill.name} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-category">Category</label>
                                <Input 
                                  id="edit-category" 
                                  name="category" 
                                  value={editingSkill.category} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-proficiency">Proficiency (0-100)</label>
                                <Input 
                                  id="edit-proficiency" 
                                  name="proficiency" 
                                  type="number" 
                                  min="0" 
                                  max="100"
                                  value={editingSkill.proficiency} 
                                  onChange={handleInputChange}
                                  className="col-span-3" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="edit-icon">Icon (optional)</label>
                                <Input 
                                  id="edit-icon" 
                                  name="icon" 
                                  value={editingSkill.icon || ''} 
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
                              onClick={handleUpdateSkill}
                            >
                              Update Skill
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                        onClick={() => handleDeleteSkill(skill.id)}
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

export default AdminSkills;
