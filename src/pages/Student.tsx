import { useState, useEffect } from 'react';
import { LogOut, ChevronDown, Calendar, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/config';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const Student = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  const [isMilestoneModalOpen, setIsMilestoneModalOpen] = useState(false);
  const [milestoneType, setMilestoneType] = useState('Topic Learned');
  const [milestoneStudent, setMilestoneStudent] = useState('');
  const [milestoneTitle, setMilestoneTitle] = useState('');
  const [milestoneDetails, setMilestoneDetails] = useState('');
  const [milestoneDate, setMilestoneDate] = useState('04-05-2026');
  const [milestoneScore, setMilestoneScore] = useState('');

  const [studentsList, setStudentsList] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalMilestones: 0,
    topicsLearned: 0,
    testsTaken: 0,
    averageScore: 0
  });

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleViewReportCard = (student: any) => {
    setSelectedStudent(student);
    setIsReportModalOpen(true);
  };

  const [selectedTimelineStudentId, setSelectedTimelineStudentId] = useState<string>('');

  const getTimelineEvents = () => {
    if (!selectedTimelineStudentId) return [];
    const student = studentsList.find(s => s._id === selectedTimelineStudentId);
    if (!student) return [];

    const topics = (student.topicsLearned || []).map((t: any) => ({
      ...t,
      eventType: 'topic',
      dateValue: new Date(t.date).getTime(),
      displayDate: new Date(t.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    }));

    const tests = (student.tests || []).map((t: any) => ({
      ...t,
      eventType: 'test',
      dateValue: new Date(t.dateAndTime).getTime(),
      displayDate: new Date(t.dateAndTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    }));

    return [...topics, ...tests].sort((a, b) => b.dateValue - a.dateValue);
  };

  const timelineEvents = getTimelineEvents();

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const studentsRes = await fetch(`${API_BASE_URL}/api/students`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (studentsRes.ok) {
        const data = await studentsRes.json();
        setStudentsList(data.filter((s: any) => s.role !== 'admin'));
      }

      const statsRes = await fetch(`${API_BASE_URL}/api/stats`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (statsRes.ok) {
        const data = await statsRes.json();
        setStats({
          totalMilestones: data.totalMilestones || 0,
          topicsLearned: data.topicsLearned || 0,
          testsTaken: data.testsTaken || 0,
          averageScore: data.averageScore || 0
        });
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (userData && token) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      if (parsedUser && parsedUser._id && !selectedTimelineStudentId) {
         setSelectedTimelineStudentId(parsedUser._id);
      }
      fetchDashboardData();
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSaveMilestone = async () => {
    if (!milestoneStudent || !milestoneTitle || !milestoneDetails || !milestoneDate) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/milestones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          studentId: milestoneStudent,
          type: milestoneType,
          title: milestoneTitle,
          details: milestoneDetails,
          score: milestoneType === 'Test / Quiz' ? Number(milestoneScore) : undefined,
          date: milestoneDate
        })
      });

      if (response.ok) {
        toast.success('Milestone saved successfully!');
        setIsMilestoneModalOpen(false);
        setMilestoneTitle('');
        setMilestoneDetails('');
        setMilestoneScore('');
        fetchDashboardData();
      } else {
        const errData = await response.json();
        toast.error(errData.message || 'Failed to save milestone');
      }
    } catch (error) {
      toast.error('Error connecting to server');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body selection:bg-primary/30 pb-20">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0a] border-b border-white/5">
         <div className="flex items-center">
            <h1 className="font-heading text-3xl tracking-widest text-white m-0 leading-none mt-1">
              NERDY ACADEMY<span className="text-primary">.</span>
            </h1>
         </div>
         <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] text-white/50">
            <button onClick={() => setIsMilestoneModalOpen(true)} className="hover:text-white transition-colors uppercase">
              + MILESTONE
            </button>
         </div>
         <div className="flex items-center gap-4">
            <button onClick={() => setIsMilestoneModalOpen(true)} className="bg-primary text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 hover:bg-primary/90 transition-colors uppercase hidden sm:block">
               + ADD MILESTONE
            </button>
            <button onClick={handleLogout} className="text-white/50 hover:text-white transition-colors p-2">
              <LogOut className="w-5 h-5" />
            </button>
         </div>
      </nav>

      <main className="pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           {/* HERO TEXT */}
           <div className="flex flex-col leading-[0.85]">
              <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[13rem] text-primary m-0 p-0">STUDENT</h1>
              <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[13rem] text-white m-0 p-0">LEARNING</h1>
              <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[13rem] text-primary m-0 p-0">JOURNEY.</h1>
           </div>
           <p className="mt-8 text-white/50 text-sm max-w-md leading-relaxed font-medium">
              Every topic, test, and homework — tracked and auto-saved. Data is shared across everyone using this link.
           </p>
        </div>

        {/* ACTIONS BAR */}
        <div className="mt-20 border-y border-white/5 bg-[#0d0d0d]">
           <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-wrap items-center justify-between py-4 gap-4">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/30">
                 + NEW
              </div>
              <div className="flex items-center gap-4">
                 <button onClick={() => setIsMilestoneModalOpen(true)} className="bg-primary text-white text-[10px] font-bold tracking-[0.2em] px-6 py-2 hover:bg-primary/90 transition-colors">
                    + MILESTONE
                 </button>
              </div>
           </div>
        </div>

        {/* STATS ROW */}
        <div className="border-b border-white/5 bg-[#0a0a0a]">
           <div className="container mx-auto px-6 md:px-12 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                 <div className="py-10 px-4 md:px-8 flex flex-col gap-4">
                    <span className="font-heading text-6xl text-white leading-none">{stats.totalMilestones}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">MILESTONES</span>
                 </div>
                 <div className="py-10 px-4 md:px-8 flex flex-col gap-4">
                    <span className="font-heading text-6xl text-white leading-none">{stats.topicsLearned}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">TOPICS LEARNED</span>
                 </div>
                 <div className="py-10 px-4 md:px-8 flex flex-col gap-4">
                    <span className="font-heading text-6xl text-white leading-none">{stats.testsTaken}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">TESTS TAKEN</span>
                 </div>
                 <div className="py-10 px-4 md:px-8 flex flex-col gap-4 justify-between">
                    {stats.averageScore > 0 ? (
                      <span className="font-heading text-6xl text-white leading-none">{stats.averageScore}</span>
                    ) : (
                      <div className="w-10 h-3 bg-primary mt-4"></div>
                    )}
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30">AVG SCORE</span>
                 </div>
              </div>
           </div>
        </div>

        {/* STUDENTS SECTION */}
        <div className="border-b border-white/5 bg-[#0d0d0d] py-12">
           <div className="container mx-auto px-6 md:px-12 max-w-7xl">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 mb-8 uppercase">
                 <span>STUDENTS DIRECTORY</span>
                 <div className="flex-1 h-px bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {studentsList.map(student => (
                    <div key={student._id} className="bg-[#111] border border-white/5 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-white/10 transition-colors">
                       <div>
                          <h3 className="text-white font-bold tracking-wider uppercase">{student.name}</h3>
                          <p className="text-white/40 text-xs mt-1">@{student.username}</p>
                       </div>
                       <div className="flex items-center gap-2">
                          <button 
                             onClick={() => handleViewReportCard(student)}
                             className="p-2 border border-white/10 text-white/50 hover:text-white hover:bg-white/5 transition-colors rounded"
                             title="View Report Card"
                          >
                             <Eye className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 ))}
                 {studentsList.length === 0 && (
                   <p className="text-white/30 text-sm italic">No students found.</p>
                 )}
              </div>
           </div>
        </div>

        {/* JOURNEY SECTION */}
        <div className="container mx-auto px-6 md:px-12 max-w-7xl mt-0">
           <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* SIDEBAR */}
              <div className="md:w-64 border-b md:border-b-0 md:border-r border-white/5 py-8 md:pt-16 md:pr-6">
                 <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-4">TIMELINE INDEX</div>
                 <div className="space-y-4">
                    <div className="relative">
                       <select 
                         className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                         value={selectedTimelineStudentId}
                         onChange={(e) => setSelectedTimelineStudentId(e.target.value)}
                       >
                          <option value="">Select a student...</option>
                          {studentsList.map(student => (
                            <option key={student._id} value={student._id}>
                              {student.name} {student._id === user?._id ? '(You)' : ''}
                            </option>
                          ))}
                       </select>
                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-white/50" />
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* TIMELINE CONTENT */}
              <div className="flex-1 pt-8 md:pt-16 md:pl-12 relative flex flex-col">
                 <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 mb-8 uppercase">
                   <span>JOURNEY</span>
                   <div className="flex-1 h-px bg-white/5"></div>
                 </div>
                 
                 <div className="relative flex-1 flex flex-col">
                    {/* Red Timeline Line */}
                    {timelineEvents.length > 0 && (
                      <div className="absolute left-6 md:left-0 top-2 bottom-0 w-px bg-primary/50 hidden md:block"></div>
                    )}
                    
                    {!selectedTimelineStudentId ? (
                      <div className="flex-1 flex flex-col items-center justify-center py-32 md:ml-4">
                         <h2 className="font-heading text-7xl md:text-9xl text-[#1a1a1a] select-none m-0 leading-none">SELECT</h2>
                         <p className="text-white/30 text-sm mt-4 font-medium">Please select a student to view their journey.</p>
                      </div>
                    ) : timelineEvents.length === 0 ? (
                      <div className="flex-1 flex flex-col items-center justify-center py-32 md:ml-4">
                         <h2 className="font-heading text-7xl md:text-9xl text-[#1a1a1a] select-none m-0 leading-none">EMPTY</h2>
                         <p className="text-white/30 text-sm mt-4 font-medium">No milestones yet.</p>
                      </div>
                    ) : (
                      <div className="space-y-8 md:ml-8 relative">
                        {timelineEvents.map((event, idx) => (
                          <div key={idx} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                             {/* Timeline Dot */}
                             <div className="hidden md:flex absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#111] border-2 border-primary z-10 group-hover:scale-125 transition-transform"></div>
                             
                             {/* Date Box */}
                             <div className="md:w-32 flex-shrink-0 pt-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase bg-white/5 px-3 py-1 rounded-full">
                                  {event.displayDate}
                                </span>
                             </div>

                             {/* Content Card */}
                             <div className="flex-1 bg-[#111] border border-white/5 p-6 hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                   <span className={`text-[10px] font-bold tracking-[0.2em] px-2 py-1 rounded uppercase ${event.eventType === 'test' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-400'}`}>
                                     {event.eventType === 'test' ? 'TEST / QUIZ' : 'TOPIC LEARNED'}
                                   </span>
                                   {event.eventType === 'test' && (
                                     <span className="text-white font-bold">{event.score}<span className="text-white/30 text-xs ml-1">/100</span></span>
                                   )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                                {event.eventType === 'test' && event.details && (
                                  <p className="text-sm text-white/60 leading-relaxed">{event.details}</p>
                                )}
                                {event.eventType === 'topic' && event.details && (
                                  <p className="text-sm text-white/60 leading-relaxed">{event.details}</p>
                                )}
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </main>
      {/* Add Milestone Modal */}
      <Dialog open={isMilestoneModalOpen} onOpenChange={setIsMilestoneModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#111] border-white/10 text-white p-0 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          <div className="p-8 pb-6 overflow-y-auto flex-1 custom-scrollbar">
            <DialogTitle className="font-heading text-4xl tracking-widest text-white uppercase m-0 leading-none mb-6">
              NEW MILESTONE
            </DialogTitle>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Student</Label>
                <div className="relative">
                   <select 
                     className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                     value={milestoneStudent}
                     onChange={(e) => setMilestoneStudent(e.target.value)}
                   >
                      <option value="" disabled>Select a student</option>
                      {studentsList.map(student => (
                        <option key={student._id} value={student._id}>
                          {student.name} (@{student.username})
                        </option>
                      ))}
                   </select>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-white/50" />
                   </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Type</Label>
                <div className="relative">
                   <select 
                     className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                     value={milestoneType}
                     onChange={(e) => setMilestoneType(e.target.value)}
                   >
                     <option value="Topic Learned">Topic Learned</option>
                     <option value="Test / Quiz">Test / Quiz</option>
                   </select>
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-white/50" />
                   </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Title</Label>
                <Input 
                  placeholder="e.g. Introduction to Algebra" 
                  className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md h-auto focus-visible:ring-primary focus-visible:border-primary placeholder:text-white/20"
                  value={milestoneTitle}
                  onChange={(e) => setMilestoneTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Details</Label>
                <textarea 
                  placeholder="What was covered, key observations..." 
                  className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md min-h-[100px] resize-y focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/20"
                  value={milestoneDetails}
                  onChange={(e) => setMilestoneDetails(e.target.value)}
                />
              </div>

              {milestoneType === 'Test / Quiz' && (
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Score (Out of 100)</Label>
                  <Input 
                    type="number"
                    className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md h-auto focus-visible:ring-primary focus-visible:border-primary"
                    value={milestoneScore}
                    onChange={(e) => setMilestoneScore(e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Date</Label>
                <div className="relative">
                   <Input 
                     type="text"
                     placeholder="04-05-2026"
                     className="w-full bg-[#0a0a0a] border border-white/10 text-white p-3 rounded-md h-auto focus-visible:ring-primary focus-visible:border-primary pr-10"
                     value={milestoneDate}
                     onChange={(e) => setMilestoneDate(e.target.value)}
                   />
                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Calendar className="w-4 h-4 text-white/20" />
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end p-6 border-t border-white/5 gap-4 bg-[#111] z-10">
            <button 
              type="button"
              onClick={() => setIsMilestoneModalOpen(false)}
              className="text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white uppercase px-6 py-3 border border-white/10 rounded hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="button"
              onClick={handleSaveMilestone}
              className="bg-primary hover:bg-primary/90 text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 uppercase rounded transition-colors"
            >
              Save Milestone
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Card Modal */}
      <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
        <DialogContent className="sm:max-w-[700px] bg-[#111] border-white/10 text-white p-0 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          {selectedStudent && (
            <div className="p-8 pb-6 overflow-y-auto flex-1 custom-scrollbar">
               <div className="flex items-start justify-between mb-10">
                  <div>
                     <DialogTitle className="font-heading text-5xl tracking-widest text-primary uppercase m-0 leading-none">
                       REPORT CARD
                     </DialogTitle>
                     <h2 className="text-2xl font-bold tracking-widest uppercase mt-4">{selectedStudent.name}</h2>
                     <p className="text-white/50 tracking-widest uppercase text-xs mt-1">@{selectedStudent.username}</p>
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase block mb-2">AVG SCORE</span>
                     <span className="font-heading text-6xl text-white leading-none">{selectedStudent.avgScore || 0}</span>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-[#0a0a0a] border border-white/5 p-6">
                     <span className="font-heading text-4xl text-white leading-none">{selectedStudent.milestones?.topicsCompleted || 0}</span>
                     <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mt-4">TOPICS LEARNED</p>
                  </div>
                  <div className="bg-[#0a0a0a] border border-white/5 p-6">
                     <span className="font-heading text-4xl text-white leading-none">{selectedStudent.milestones?.testsGiven || 0}</span>
                     <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mt-4">TESTS TAKEN</p>
                  </div>
               </div>

               <div className="mb-10">
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 mb-6 uppercase">
                     <span>TOPICS LOG</span>
                     <div className="flex-1 h-px bg-white/5"></div>
                  </div>
                  {selectedStudent.topicsLearned?.length > 0 ? (
                     <div className="space-y-3">
                        {selectedStudent.topicsLearned.map((topic: any, idx: number) => (
                           <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                              <span className="text-sm font-medium text-white">{topic.title}</span>
                              <span className="text-xs text-white/40">{new Date(topic.date).toLocaleDateString()}</span>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-sm text-white/30 italic">No topics logged yet.</p>
                  )}
               </div>

               <div>
                  <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 mb-6 uppercase">
                     <span>TESTS LOG</span>
                     <div className="flex-1 h-px bg-white/5"></div>
                  </div>
                  {selectedStudent.tests?.length > 0 ? (
                     <div className="space-y-3">
                        {selectedStudent.tests.map((test: any, idx: number) => (
                           <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                              <div>
                                 <span className="text-sm font-medium text-white block">{test.title}</span>
                                 <span className="text-xs text-white/40 mt-1 block">{new Date(test.dateAndTime).toLocaleDateString()}</span>
                              </div>
                              <div className="text-right">
                                 <span className="text-lg font-bold text-primary">{test.score}</span>
                                 <span className="text-[10px] text-white/30 ml-1 uppercase">/100</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-sm text-white/30 italic">No tests taken yet.</p>
                  )}
               </div>
            </div>
          )}
          <div className="flex items-center justify-end p-6 border-t border-white/5 gap-4 bg-[#111] z-10">
            <button 
              type="button"
              onClick={() => setIsReportModalOpen(false)}
              className="text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white uppercase px-6 py-3 border border-white/10 rounded hover:bg-white/5 transition-colors"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Student;
