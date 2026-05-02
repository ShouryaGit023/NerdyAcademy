import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, GraduationCap, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const Student = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Load saved progress for this specific user
      const savedProgress = localStorage.getItem(`progress_${parsedUser._id}`);
      if (savedProgress) {
        setCompletedModules(JSON.parse(savedProgress));
      }
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleModule = (id: string) => {
    let newCompleted: string[];
    if (completedModules.includes(id)) {
      newCompleted = completedModules.filter(m => m !== id);
    } else {
      newCompleted = [...completedModules, id];
    }
    
    setCompletedModules(newCompleted);
    if (user) {
      localStorage.setItem(`progress_${user._id}`, JSON.stringify(newCompleted));
    }
  };

  const progressPercentage = Math.round((completedModules.length / SYLLABUS.length) * 100);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl tracking-widest text-foreground">
              NERDY<span className="text-primary">.</span> ACADEMY
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70 hidden sm:inline-block">Welcome, {user.name}</span>
            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
              <LogOut className="h-5 w-5 text-white/70 hover:text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 md:px-6 py-8 mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            Student Portal
          </h2>
          <p className="text-muted-foreground mt-1 text-sm uppercase tracking-wider">
            Track your progress through the 4-semester curriculum
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 backdrop-blur-md">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{user.name}</h3>
            <p className="text-white/50 text-sm">@{user.username}</p>
          </div>
          <div className="text-right w-full sm:w-auto">
            <div className="text-3xl font-black text-primary clip-skew-sm inline-block px-4 py-2 bg-primary/10">
              {progressPercentage}%
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Course Completed</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium uppercase tracking-widest text-white/80">Overall Progress</span>
            <span className="text-xs text-white/50">{completedModules.length} of {SYLLABUS.length} Modules</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Syllabus Section */}
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-6 uppercase">Course Syllabus</h3>
          
          <div className="grid gap-4">
            {SYLLABUS.map((module) => {
              const isCompleted = completedModules.includes(module.id);
              return (
                <div 
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-4
                    ${isCompleted 
                      ? 'bg-primary/5 border-primary/30 shadow-[0_0_15px_rgba(206,255,0,0.05)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    ) : (
                      <Circle className="h-6 w-6 text-white/30" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${isCompleted ? 'text-white' : 'text-white/80'}`}>
                      {module.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Student;
