
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

const AdminContacts = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [viewingMessage, setViewingMessage] = useState<ContactMessage | null>(null);

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('portfolio_contacts');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Sample messages for demo
      const sampleMessages = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Hello, I am impressed by your portfolio and would like to discuss a potential project opportunity with you. Please let me know when you would be available for a quick call.',
          date: new Date().toISOString(),
          read: false
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@company.com',
          message: 'Hi there! We are looking for a skilled developer for our upcoming project. Your work looks great, and I think you would be a perfect fit for our team. Would you be interested in learning more?',
          date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
          read: true
        }
      ];
      setMessages(sampleMessages);
      localStorage.setItem('portfolio_contacts', JSON.stringify(sampleMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('portfolio_contacts', JSON.stringify(messages));
    }
  }, [messages]);

  const markAsRead = (id: string) => {
    const updatedMessages = messages.map(message => {
      if (message.id === id) {
        return { ...message, read: true };
      }
      return message;
    });
    
    setMessages(updatedMessages);
  };

  const handleViewMessage = (message: ContactMessage) => {
    setViewingMessage(message);
    if (!message.read) {
      markAsRead(message.id);
    }
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(message => message.id !== id));
      
      toast({
        title: "Success",
        description: "Message deleted successfully!",
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Contact Messages</h2>
        <div className="text-sm text-portfolio-text/70">
          {messages.filter(m => !m.read).length} unread message(s)
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">No messages found</TableCell>
              </TableRow>
            ) : (
              messages.map((message) => (
                <TableRow key={message.id} className={!message.read ? "font-medium bg-portfolio-card/50" : ""}>
                  <TableCell>{!message.read && <span className="inline-block w-2 h-2 bg-portfolio-secondary rounded-full mr-2"></span>}{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{formatDate(message.date)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 px-2 py-0"
                            onClick={() => handleViewMessage(message)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                          <DialogHeader>
                            <DialogTitle>Message from {viewingMessage?.name}</DialogTitle>
                          </DialogHeader>
                          {viewingMessage && (
                            <div className="py-4">
                              <div className="flex justify-between items-center text-sm text-portfolio-text/70 mb-4">
                                <div>{viewingMessage.email}</div>
                                <div>{formatDate(viewingMessage.date)}</div>
                              </div>
                              <div className="bg-portfolio-primary/30 p-4 rounded-md whitespace-pre-wrap">
                                {viewingMessage.message}
                              </div>
                            </div>
                          )}
                          <DialogFooter>
                            <Button 
                              variant="outline" 
                              className="mr-auto"
                              onClick={() => handleDeleteMessage(viewingMessage?.id || '')}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                            <Button 
                              type="button" 
                              className="bg-portfolio-secondary text-white"
                              onClick={() => {
                                window.location.href = `mailto:${viewingMessage?.email}?subject=Re: Portfolio Contact`;
                              }}
                            >
                              Reply via Email
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-red-500 border-red-200 hover:bg-red-50"
                        onClick={() => handleDeleteMessage(message.id)}
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

export default AdminContacts;
