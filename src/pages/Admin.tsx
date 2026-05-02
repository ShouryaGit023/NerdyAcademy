import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Plus, Search, Trash2, LogOut, GraduationCap, Loader2, Eye, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '@/config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SYLLABUS = [
  { id: 'm1', title: 'Semester 1: Introduction to AI & Prompt Engineering' },
  { id: 'm2', title: 'Semester 1: Applied Data Analytics & Visualization' },
  { id: 'm3', title: 'Semester 2: Advanced Machine Learning Models' },
  { id: 'm4', title: 'Semester 2: Neural Networks & Deep Learning' },
  { id: 'm5', title: 'Semester 3: Generative AI & LLM Applications' },
  { id: 'm6', title: 'Semester 3: Growth Marketing & AI Automation' },
  { id: 'm7', title: 'Semester 4: Career Prep & Financial Planning' },
  { id: 'm8', title: 'Semester 4: Capstone Project Defense' },
];

const Admin = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState<any[]>([]);

  // View progress state
  const [viewingStudent, setViewingStudent] = useState<any>(null);
  const [viewProgressModalOpen, setViewProgressModalOpen] = useState(false);
  const [studentProgress, setStudentProgress] = useState<string[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/auth');
          return;
        }
        const response = await fetch(`${API_BASE_URL}/api/admin/students`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        }
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };
    fetchStudents();
  }, [navigate]);
  
  // New student form state
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentUsername, setNewStudentUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    // Implement actual logout logic here (clear token, etc.)
    navigate('/');
  };

  const handleAddStudent = () => {
    setNewStudentName('');
    setNewStudentUsername('');
    setIsModalOpen(true);
  };

  const handleAddStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentUsername) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/admin/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: newStudentName,
          username: newStudentUsername
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Student added successfully!');
        setIsModalOpen(false);
        setNewStudentName('');
        setNewStudentUsername('');
        setNewStudentUsername('');
        setStudents(prev => [{
          _id: data.student?._id || Date.now().toString(),
          name: data.student?.name || newStudentName,
          username: data.student?.username || newStudentUsername,
          role: 'student',
          createdAt: new Date().toISOString()
        }, ...prev]);
      } else {
        toast.error(data.message || 'Failed to add student');
      }
    } catch (error) {
      toast.error('Could not connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteStudent = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/admin/students/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setStudents(prev => prev.filter(s => s._id !== id));
        toast.success("Student deleted successfully");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to delete student");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  const handleViewProgress = (student: any) => {
    setViewingStudent(student);
    setStudentProgress(student.completedModules || []);
    setViewProgressModalOpen(true);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.username?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl tracking-widest text-foreground">
              NERDY<span className="text-primary">.</span> ADMIN
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
              <LogOut className="h-5 w-5 text-white/70 hover:text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 md:px-6 py-8 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              Student Details
            </h2>
            <p className="text-muted-foreground mt-1 text-sm uppercase tracking-wider">
              Manage enrollments and student profiles
            </p>
          </div>

          <Button 
            onClick={handleAddStudent}
            className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest clip-skew-sm shrink-0"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Student
          </Button>
        </div>

        {/* Filters/Search Bar */}
        <div className="flex items-center space-x-2 mb-6 bg-black/40 border border-white/10 p-2 rounded-lg max-w-md backdrop-blur-md">
          <Search className="h-5 w-5 text-muted-foreground ml-2" />
          <input
            type="text"
            placeholder="Search students..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30 px-2 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Student Data Table Container */}
        <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Contact</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Enrolled</th>
                  <th scope="col" className="px-6 py-4 text-right font-medium tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student._id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 text-white/70">
                        {student.username}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
                          Nerdy Core
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-500/10 text-green-400 ring-green-500/20">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/50">
                        {student.createdAt ? new Date(student.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewProgress(student)}
                            className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                            title="View Progress"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteStudent(student._id)}
                            className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                            title="Delete Student"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-white/50">
                      No students found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Student Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#0a0a0a] border-white/10 text-white backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-widest uppercase flex items-center gap-2">
              <Plus className="h-6 w-6 text-primary" />
              Add New Student
            </DialogTitle>
            <DialogDescription className="text-white/50 uppercase tracking-wider text-[10px] mt-2">
              Fill in the credentials to enroll a new student into Nerdy Academy.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAddStudentSubmit}>
            <div className="grid gap-6 py-6 border-y border-white/5 my-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter student's full name" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white/70">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="Assign a unique username" 
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-primary h-12"
                    value={newStudentUsername}
                    onChange={(e) => setNewStudentUsername(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <p className="text-[10px] text-white/40 italic uppercase tracking-widest mt-2">
                  * Password will be automatically set to the common academy password.
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-4">
              <Button 
                type="button"
                variant="ghost"
                onClick={() => setIsModalOpen(false)}
                className="text-white/50 hover:text-white hover:bg-white/5 uppercase tracking-widest text-xs"
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest clip-skew-sm px-8"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  'Add Student'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* View Progress Modal */}
      <Dialog open={viewProgressModalOpen} onOpenChange={setViewProgressModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#0a0a0a] border-white/10 text-white backdrop-blur-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold tracking-widest uppercase flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              Student Progress
            </DialogTitle>
            <DialogDescription className="text-white/50 uppercase tracking-wider text-[10px] mt-2">
              Viewing progress for {viewingStudent?.name} (@{viewingStudent?.username})
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium uppercase tracking-widest text-white/80">Overall Progress</span>
                <span className="text-xs text-white/50">{studentProgress.length} of {SYLLABUS.length} Modules</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${Math.round((studentProgress.length / SYLLABUS.length) * 100)}%` }}
                />
              </div>
            </div>

            <div className="grid gap-3">
              {SYLLABUS.map((module) => {
                const isCompleted = studentProgress.includes(module.id);
                return (
                  <div 
                    key={module.id}
                    className={`p-3 rounded-xl border flex items-center gap-3
                      ${isCompleted 
                        ? 'bg-primary/5 border-primary/30' 
                        : 'bg-white/5 border-white/10'
                      }`}
                  >
                    <div className="shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-white/30" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${isCompleted ? 'text-white' : 'text-white/70'}`}>
                        {module.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <Button 
              onClick={() => setViewProgressModalOpen(false)}
              className="bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest clip-skew-sm px-8"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
