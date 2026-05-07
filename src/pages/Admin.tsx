import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Plus, LogOut, Loader2, ChevronDown, Calendar, Eye, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '@/config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Admin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentUsername, setNewStudentUsername] = useState('');

  const getTodayFormatted = () => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
  };

  const [isMilestoneModalOpen, setIsMilestoneModalOpen] = useState(false);
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(null);
  const [milestoneType, setMilestoneType] = useState('Topic Learned');
  const [milestoneStudent, setMilestoneStudent] = useState('');
  const [milestoneTitle, setMilestoneTitle] = useState('');
  const [milestoneDetails, setMilestoneDetails] = useState('');
  const [milestoneDate, setMilestoneDate] = useState(getTodayFormatted());
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

  const [selectedTimelineStudentId, setSelectedTimelineStudentId] = useState<string>('');

  const getTimelineEvents = () => {
    if (!selectedTimelineStudentId) return [];
    const student = studentsList.find(s => s._id === selectedTimelineStudentId);
    if (!student) return [];

    const topics = (student.topicsLearned || []).map((t: any) => ({
      ...t,
      eventType: 'topic',
      dateValue: new Date(t.date).getTime(),
      displayDate: new Date(t.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }));

    const tests = (student.tests || []).map((t: any) => ({
      ...t,
      eventType: 'test',
      dateValue: new Date(t.dateAndTime).getTime(),
      displayDate: new Date(t.dateAndTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }));

    const homeworks = (student.homeworks || []).map((h: any) => ({
      ...h,
      eventType: 'homework',
      dateValue: new Date(h.date).getTime(),
      displayDate: new Date(h.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }));

    const notes = (student.notes || []).map((n: any) => ({
      ...n,
      eventType: 'note',
      dateValue: new Date(n.date).getTime(),
      displayDate: new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }));

    return [...topics, ...tests, ...homeworks, ...notes].sort((a, b) => b.dateValue - a.dateValue);
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
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
    } else {
      fetchDashboardData();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
      } else {
        toast.error(data.message || 'Failed to add student');
      }
    } catch (error) {
      toast.error('Could not connect to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenNewMilestoneModal = () => {
    setEditingMilestoneId(null);
    setMilestoneType('Topic Learned');
    setMilestoneStudent('');
    setMilestoneTitle('');
    setMilestoneDetails('');
    setMilestoneScore('');
    setMilestoneDate(getTodayFormatted());
    setIsMilestoneModalOpen(true);
  };

  const handleSaveMilestone = async () => {
    if (!milestoneStudent || !milestoneTitle || !milestoneDetails || !milestoneDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (milestoneType === 'Test / Quiz') {
      if (milestoneScore === '' || milestoneScore === null || milestoneScore === undefined) {
        toast.error('Please enter a score');
        return;
      }
      const scoreNum = Number(milestoneScore);
      if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
        toast.error('Score must be between 0 and 100');
        return;
      }
    }

    try {
      const token = localStorage.getItem('token');
      const method = editingMilestoneId ? 'PUT' : 'POST';
      const body: any = {
        studentId: milestoneStudent,
        type: milestoneType,
        title: milestoneTitle,
        details: milestoneDetails,
        score: milestoneType === 'Test / Quiz' ? Number(milestoneScore) : undefined,
        date: milestoneDate
      };
      if (editingMilestoneId) {
        body.milestoneId = editingMilestoneId;
      }

      const response = await fetch(`${API_BASE_URL}/api/milestones`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        toast.success(editingMilestoneId ? 'Milestone updated successfully!' : 'Milestone saved successfully!');
        setIsMilestoneModalOpen(false);
        setEditingMilestoneId(null);
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

  const handleEditMilestone = (event: any) => {
    setEditingMilestoneId(event._id);
    setMilestoneStudent(selectedTimelineStudentId);
    
    let typeDisplay = 'Topic Learned';
    if (event.eventType === 'test') typeDisplay = 'Test / Quiz';
    else if (event.eventType === 'homework') typeDisplay = 'Homework';
    else if (event.eventType === 'note') typeDisplay = 'Note';
    
    setMilestoneType(typeDisplay);
    setMilestoneTitle(event.title);
    setMilestoneDetails(event.details || '');
    setMilestoneScore(event.score ? event.score.toString() : '');

    const d = new Date(event.dateValue);
    const formattedDate = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
    setMilestoneDate(formattedDate);
    setIsMilestoneModalOpen(true);
  };

  const handleDeleteMilestone = async (milestoneId: string, type: string) => {
    if (!window.confirm('Are you sure you want to delete this milestone?')) return;
    try {
      const token = localStorage.getItem('token');
      
      let backendType = 'Topic Learned';
      if (type === 'test') backendType = 'Test / Quiz';
      else if (type === 'homework') backendType = 'Homework';
      else if (type === 'note') backendType = 'Note';

      const response = await fetch(`${API_BASE_URL}/api/milestones/${selectedTimelineStudentId}/${encodeURIComponent(backendType)}/${milestoneId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        toast.success('Milestone deleted successfully');
        fetchDashboardData();
      } else {
        const errData = await response.json();
        toast.error(errData.message || 'Failed to delete milestone');
      }
    } catch (error) {
      toast.error('Error connecting to server');
    }
  };


  const handleViewReportCard = (student: any) => {
    setSelectedStudent(student);
    setIsReportModalOpen(true);
  };

  const handleDeleteStudent = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/admin/students/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        toast.success('Student deleted successfully');
        if (selectedTimelineStudentId === id) {
          setSelectedTimelineStudentId('');
        }
        fetchDashboardData();
      } else {
        const errData = await response.json();
        toast.error(errData.message || 'Failed to delete student');
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
          <button onClick={handleAddStudent} className="hover:text-white transition-colors uppercase">
            + STUDENT
          </button>
          <button onClick={handleOpenNewMilestoneModal} className="hover:text-white transition-colors uppercase">
            + MILESTONE
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleOpenNewMilestoneModal} className="bg-primary text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 hover:bg-primary/90 transition-colors uppercase hidden sm:block">
            + ADD MILESTONE
          </button>
          <button onClick={handleLogout} className="text-white/50 hover:text-white transition-colors p-2">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <main className="pt-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
          {/* DYNAMIC HERO TEXT */}
          <div className="flex flex-col leading-[0.85]">
            <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[11rem] text-primary m-0 p-0 uppercase">
              {selectedTimelineStudentId 
                ? `${studentsList.find(s => s._id === selectedTimelineStudentId)?.name || 'STUDENT'}'S` 
                : "STUDENTS'"}
            </h1>
            <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[11rem] text-white m-0 p-0 uppercase">LEARNING</h1>
            <h1 className="font-heading text-[6rem] md:text-[9rem] lg:text-[11rem] text-primary m-0 p-0 uppercase">JOURNEY<span className="text-white">.</span></h1>
          </div>
          <p className="mt-8 text-white/50 text-sm max-w-md leading-relaxed font-medium">
            Every topic, test, and homework — tracked and auto-saved. Data is shared across everyone using this link.
          </p>
        </div>

        {/* STUDENT TABS BAR */}
        <div className="bg-[#0d0d0d] border-y border-white/5 sticky top-[73px] z-40">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between py-3 gap-6">
            <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {studentsList.map(student => (
                <button
                  key={student._id}
                  onClick={() => setSelectedTimelineStudentId(student._id)}
                  className={`px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-all border ${selectedTimelineStudentId === student._id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30'
                    }`}
                >
                  {student.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              {selectedTimelineStudentId && (
                <button
                  onClick={() => handleDeleteStudent(selectedTimelineStudentId)}
                  className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase bg-red-600/10 text-red-500 border border-red-600/20 hover:bg-red-600 hover:text-white transition-all flex items-center gap-1 md:gap-2"
                >
                  <Trash2 className="w-3 h-3" />
                  <span className="hidden sm:inline">DELETE</span>
                </button>
              )}
              <button
                onClick={handleAddStudent}
                className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 border border-white/10 hover:text-white transition-colors whitespace-nowrap"
              >
                + STUDENT
              </button>
              <button
                onClick={handleOpenNewMilestoneModal}
                className="px-3 md:px-4 py-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase bg-primary text-white hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                + MILESTONE
              </button>
            </div>
          </div>
        </div>

        {/* SELECTED STUDENT STATS */}
        <div className="bg-[#0a0a0a] border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            {selectedTimelineStudentId ? (
              (() => {
                const student = studentsList.find(s => s._id === selectedTimelineStudentId);
                if (!student) return null;

                const totalMilestones = (student.topicsLearned?.length || 0) + (student.tests?.length || 0) + (student.homeworks?.length || 0) + (student.notes?.length || 0);

                return (
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                    <div className="py-12 px-4 md:px-8 flex flex-col gap-4">
                      <span className="font-heading text-8xl text-white leading-none">{totalMilestones}</span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">MILESTONES</span>
                    </div>
                    <div className="py-12 px-4 md:px-8 flex flex-col gap-4">
                      <span className="font-heading text-8xl text-white leading-none">{student.topicsLearned?.length || 0}</span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">TOPICS LEARNED</span>
                    </div>
                    <div className="py-12 px-4 md:px-8 flex flex-col gap-4">
                      <span className="font-heading text-8xl text-white leading-none">{student.tests?.length || 0}</span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">TESTS TAKEN</span>
                    </div>
                    <div className="py-12 px-4 md:px-8 flex flex-col gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading text-8xl text-primary leading-none">{student.avgScore || 0}</span>
                        <span className="font-heading text-4xl text-primary/50">%</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">AVG SCORE</span>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="py-20 text-center">
                <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">Select a student to view stats</p>
              </div>
            )}
          </div>
        </div>

        {/* JOURNEY SECTION */}
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row min-h-[600px]">
            {/* SIDEBAR TIMELINE INDEX */}
            <div className="md:w-72 border-b md:border-b-0 md:border-r border-white/5 py-12 md:pr-8">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-8 border-b border-white/5 pb-4">
                TIMELINE INDEX
              </div>

              <div className="space-y-6 max-h-[600px] overflow-y-auto no-scrollbar pr-2">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      event.eventType === 'test' ? 'bg-blue-500' : 
                      event.eventType === 'homework' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]' :
                      event.eventType === 'note' ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' :
                      'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-[11px] font-bold text-white/70 group-hover:text-white transition-colors truncate uppercase tracking-wider">
                          {event.title}
                        </h4>
                        <span className="text-[9px] text-white/20 shrink-0 uppercase font-medium">
                          {new Date(event.dateValue).toLocaleDateString('en-GB', { month: 'short' })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {timelineEvents.length === 0 && (
                  <p className="text-[10px] text-white/20 uppercase font-bold italic">No events recorded</p>
                )}
              </div>
            </div>

            {/* MAIN TIMELINE CONTENT */}
            <div className="flex-1 pt-12 md:pl-16 relative">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 mb-12 uppercase">
                <span>{selectedTimelineStudentId ? studentsList.find(s => s._id === selectedTimelineStudentId)?.name + "'S JOURNEY" : 'JOURNEY'}</span>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>

              <div className="relative">
                {!selectedTimelineStudentId ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-32">
                    <h2 className="font-heading text-8xl text-white/5 select-none m-0 leading-none">SELECT</h2>
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase mt-4">Please select a student above</p>
                  </div>
                ) : timelineEvents.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-32">
                    <h2 className="font-heading text-8xl text-white/5 select-none m-0 leading-none">EMPTY</h2>
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase mt-4">No milestones yet</p>
                  </div>
                ) : (
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[7.5px] top-4 bottom-4 w-px bg-primary/20"></div>

                    <div className="space-y-10">
                      {timelineEvents.map((event, idx) => (
                        <div key={idx} className="relative pl-10 group">
                          {/* Dot */}
                          <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 z-10 group-hover:scale-125 transition-all duration-300 ${
                            event.eventType === 'test' ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]' : 
                            event.eventType === 'homework' ? 'border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]' :
                            event.eventType === 'note' ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]' :
                            'border-primary shadow-[0_0_10px_rgba(255,51,51,0.4)]'
                          }`}></div>

                          {/* Card */}
                          <div className={`bg-[#111] border-l-4 p-8 relative overflow-hidden ${
                            event.eventType === 'test' ? 'border-blue-500' : 
                            event.eventType === 'homework' ? 'border-yellow-500' :
                            event.eventType === 'note' ? 'border-purple-500' :
                            'border-green-500'
                          }`}>
                            {/* Decorative background label */}
                            <div className="absolute top-4 right-8 text-[8px] font-black tracking-[0.3em] text-white/5 uppercase select-none">
                              NERDY ACADEMY RECORDS
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                              <div className="flex items-center gap-3">
                                <span className={`text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1 border ${
                                  event.eventType === 'test' ? 'border-blue-500/20 bg-blue-500/5 text-blue-500' : 
                                  event.eventType === 'homework' ? 'border-yellow-500/20 bg-yellow-500/5 text-yellow-500' :
                                  event.eventType === 'note' ? 'border-purple-500/20 bg-purple-500/5 text-purple-500' :
                                  'border-green-500/20 bg-green-500/5 text-green-500'
                                }`}>
                                  {event.eventType === 'test' ? 'TEST / QUIZ' : 
                                   event.eventType === 'homework' ? 'HOMEWORK' :
                                   event.eventType === 'note' ? 'PERSONAL NOTE' :
                                   'TOPIC LEARNED'}
                                </span>
                                <div className="flex items-center gap-2 text-white/30">
                                  <Calendar className="w-3 h-3" />
                                  <span className="text-[9px] font-bold tracking-widest uppercase">{event.displayDate}</span>
                                </div>
                              </div>
                            </div>

                            <h3 className="font-heading text-4xl text-white uppercase mb-4 leading-tight tracking-wide">{event.title}</h3>

                            {event.details && (
                              <p className="text-sm text-white/40 leading-relaxed font-medium mb-8 max-w-3xl italic">
                                {event.details}
                              </p>
                            )}

                            {event.eventType === 'test' && (
                              <div className="bg-black/40 border border-white/5 p-6 mt-4 mb-8">
                                <div className="flex items-end gap-4 mb-4">
                                  <span className={`font-heading text-7xl leading-none ${event.score >= 80 ? 'text-green-500' : event.score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {event.score}
                                  </span>
                                  <div className="pb-1">
                                    <p className="text-[9px] font-black tracking-[0.2em] text-white/30 uppercase mb-1">SCORE SECURED</p>
                                    <p className={`text-[10px] font-bold tracking-widest uppercase ${event.score >= 80 ? 'text-green-500/50' : event.score >= 50 ? 'text-yellow-500/50' : 'text-red-500/50'}`}>
                                      {event.score >= 80 ? 'DISTINCTION' : event.score >= 50 ? 'SATISFACTORY' : 'REQUIRES ATTENTION'}
                                    </p>
                                  </div>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full transition-all duration-1000 ${event.score >= 80 ? 'bg-green-500' : event.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${event.score}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}

                            <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                              <button onClick={() => handleEditMilestone(event)} className="text-[9px] font-bold tracking-widest text-white/30 hover:text-white uppercase px-6 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">EDIT</button>
                              <button onClick={() => handleDeleteMilestone(event._id, event.eventType)} className="text-[9px] font-bold tracking-widest text-white/30 hover:text-red-500 uppercase px-6 py-2 border border-white/10 bg-white/5 hover:bg-red-500/5 transition-all">DELETE</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
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
                    placeholder="Enter students full name"
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
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest px-8"
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
      {/* Add Milestone Modal */}
      <Dialog open={isMilestoneModalOpen} onOpenChange={setIsMilestoneModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#111] border-white/10 text-white p-0 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          <div className="p-8 pb-6 overflow-y-auto flex-1 custom-scrollbar">
            <DialogTitle className="font-heading text-4xl tracking-widest text-white uppercase m-0 leading-none mb-6">
              {editingMilestoneId ? 'EDIT MILESTONE' : 'NEW MILESTONE'}
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
                    <option value="Homework">Homework</option>
                    <option value="Note">Note</option>
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
                    min="0"
                    max="100"
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
              onClick={() => {
                setIsMilestoneModalOpen(false);
                setEditingMilestoneId(null);
                setMilestoneTitle('');
                setMilestoneDetails('');
                setMilestoneScore('');
              }}
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

export default Admin;
