// Semester curriculum data
export interface Session {
  num: string;
  title: string;
  description: string;
}

export interface Semester {
  tab: string;
  title: string;
  goal: string;
  sessions: Session[];
}

export const semesters: Semester[] = [
  {
    tab: 'SEM 1',
<<<<<<< HEAD
    title: 'MARKETING DIGITAL FOUNDATIONS (AI-ENHANCED)',
=======
    title: 'SEMESTER 1- DIGITAL MARKETING FOUNDATIONS (AI-ENHANCED)',
>>>>>>> 3a6e8d9c44f0fb280be0ac0cf3cec62054a6c751
    goal: 'Build a complete foundation in Google, Meta, and HR marketing using AI',
    sessions: [
      { num: '01', title: 'SESSION 1', description: 'Google Docs, Sheets & Slides Automation' },
      { num: '02', title: 'SESSION 2', description: 'Google Ads + AI Copywriting' },
      { num: '03', title: 'SESSION 3', description: 'Google Analytics & Campaign Review' },
      { num: '04', title: 'SESSION 4', description: 'Meta Ads Manager Setup & Targeting' },
      { num: '05', title: 'SESSION 5', description: 'Instagram Boost vs Meta Ads Manager' },
      { num: '06', title: 'SESSION 6', description: 'LinkedIn for Business & Employer Branding' },
      { num: '07', title: 'SESSION 7', description: 'Resume and Job Description via ChatGPT' },
      { num: '08', title: 'SESSION 8', description: 'Canva + AI (Magic Write, Magic Design, Brand Kit)' },
      { num: '09', title: 'SESSION 9', description: 'Naukri, Indeed, Apna, LinkedIn Job Automation' },
    ],
  },
  {
    tab: 'SEM 2',
<<<<<<< HEAD
    title: 'AI IN FINANCE & ENTREPRENEURSHIP (AI-ENHANCED)',
=======
    title: 'SEMESTER 2- AI IN FINANCE & ENTREPENURSHIP (AI-ENHANCED)',
>>>>>>> 3a6e8d9c44f0fb280be0ac0cf3cec62054a6c751
    goal: 'Understand finance, automation, and AI-driven business tools',
    sessions: [
      { num: '10', title: 'SESSION 10', description: 'Financial Literacy (Income, Expenses, Assets, Liabilities)' },
      { num: '11', title: 'SESSION 11', description: 'Automating Finance Reports using ChatGPT + Excel' },
      { num: '12', title: 'SESSION 12', description: 'Trading Basics + AI Stock Prediction Tools' },
      { num: '13', title: 'SESSION 13', description: 'Entrepreneurship with AI Idea Generation' },
      { num: '14', title: 'SESSION 14', description: 'Building Websites using AI (Durable, Framer, 10Web)' },
      { num: '15', title: 'SESSION 15', description: 'App Creation using AI Builders (Glide, Softr, Bubble)' },
      { num: '16', title: 'SESSION 16', description: 'WhatsApp Business API Setup (Wati / Twilio)' },
      { num: '17', title: 'SESSION 17', description: 'CRM & IVR System Automation for Businesses' },
      { num: '18', title: 'SESSION 18', description: 'Integration of Google Ads, WhatsApp, and Analytics' },
    ],
  },
  {
    tab: 'SEM 3',
<<<<<<< HEAD
    title: 'THE WORLD OF ARTIFICIAL INTELLIGENCE',
    goal: 'Master modern AI platforms and their business applications',
=======
    title: 'SEMESTER 3- THE WORLD OF ARTIFICIAL INTELLIGENCE',
    goal: 'Master modern AI platforms and their business applications.',
>>>>>>> 3a6e8d9c44f0fb280be0ac0cf3cec62054a6c751
    sessions: [
      { num: '19', title: 'SESSION 19', description: 'Introduction to Generative AI (Text, Image, Video, Voice)' },
      { num: '20', title: 'SESSION 20', description: 'ChatGPT, Gemini, Claude, Perplexity (Hands-on Practice)' },
      { num: '21', title: 'SESSION 21', description: 'Midjourney, Leonardo, Ideogram for Visuals & Branding' },
      { num: '22', title: 'SESSION 22', description: 'Prompt Engineering - Writing Effective Prompts' },
      { num: '23', title: 'SESSION 23', description: 'AI Copywriting Tools - Copy.ai, Jasper, Predis.ai' },
      { num: '24', title: 'SESSION 24', description: 'Workflow Automation - Zapier, Make, Taskade, Relevance AI' },
      { num: '25', title: 'SESSION 25', description: 'AI Chatbots - Chatbase, Voiceflow, ManyChat' },
      { num: '26', title: 'SESSION 26', description: 'Creating Your Own AI Assistant' },
      { num: '27', title: 'SESSION 27', description: 'Business Dashboard Building (ChatGPT + Sheets Integration)' },
    ],
  },
  {
    tab: 'SEM 4',
<<<<<<< HEAD
    title: 'CAREER, COMMUNICATION & ENTREPRENEURSHIP',
    goal: 'Transform into a confident professional ready for job or business',
=======
    title: 'SEMESTER 4- CAREER, COMMUNICATION & ENTREPRENEURSHIP',
    goal: 'Transform into a confident professional ready for job or business.',
>>>>>>> 3a6e8d9c44f0fb280be0ac0cf3cec62054a6c751
    sessions: [
      { num: '28', title: 'SESSION 28', description: 'Resume & Portfolio building using AI' },
      { num: '29', title: 'SESSION 29', description: 'Elevator Pitch & Story telling Practice' },
      { num: '30', title: 'SESSION 30', description: 'LINKEDIN Optimization for Recruiters and Leads' },
      { num: '31', title: 'SESSION 31', description: 'Public Speaking with AI Tools' },
      { num: '32', title: 'SESSION 32', description: 'HR & Technical Mock Interviews' },
      { num: '33', title: 'SESSION 33', description: 'Pitch Deck Creation (Canva + ChatGPT + Slides)' },
      { num: '34', title: 'SESSION 34', description: 'Investor Presentation Skills & Storytelling' },
      { num: '35', title: 'SESSION 35', description: 'GRAND FINAL TEST (PROJECT + VIVA)' },
      { num: '36', title: 'SESSION 36', description: 'Graduation Ceremony & Certificate Distribution' },
    ],
  },
];

export const faqData = [
  { q: 'What is Nerdy Academy anyway?', a: 'Nerdy Academy offers online and classroom courses. We teach computer and communication skills. We help people grow.' },
  { q: 'Is this online or offline?', a: 'Both! You can attend live sessions online or at our classroom in Jaipur. Same content, same instructor.' },
  { q: 'How long is the course?', a: '3 months, 4 semesters, 36 live sessions. Each session is hands-on and action-packed.' },
  { q: 'Do I get a certificate?', a: 'Yes. After completing all semesters, a Grand Final Project + VIVA, you receive a Nerdy Academy certificate.' },
  { q: 'What\'s the difference between Batch and 1:1?', a: 'Rs 20000 for classroom/online batches and Rs. 55,000 for one to one online/classroom learning. Both cover the same curriculum.' },
  { q: 'Can I pay in installments?', a: 'No, partial payments are not allowed, and we do not offer discounts or refunds.' },
];

export const whyData = [
  { num: '01', title: 'Live 1:1 Interaction', desc: 'No pre-recorded lectures. Every session is live, personal, and built around your doubts.' },
  { num: '02', title: 'Doing Over Watching', desc: 'You create campaigns, build projects, and launch systems — during the session, not after it.' },
  { num: '03', title: 'Quizzes & Grading', desc: 'We test after every topic. Your score decides whether we move forward or level up the concept.' },
  { num: '04', title: 'AI-Enhanced Learning', desc: 'Every semester integrates the latest AI tools — ChatGPT, Midjourney, Zapier, Claude, and more.' },
  { num: '05', title: 'Certificate + VIVA', desc: 'A Grand Final Project + VIVA exam. Then a Graduation Ceremony. You earn that certificate.' },
  { num: '06', title: 'Designed for Results', desc: 'Marketing · Finance · AI · Career. All four semesters build one unstoppable professional.' },
];

export const roadmapSteps = [
  { num: 1, title: 'Shrey Explains', desc: 'Every concept is introduced with live demonstrations — not slides, not theory dumps. You watch it happen in real time.' },
  { num: 2, title: 'You Create Instantly', desc: 'We guide you to build your own campaigns and projects during the session itself. Doing it cements it.' },
  { num: 3, title: 'Doubts Demolished', desc: 'You voice your concerns immediately. We give you solutions on the spot. No waiting, no forums.' },
  { num: 4, title: 'Quiz & Test', desc: 'After every topic — a quiz. We score you, identify gaps, and either reinforce or advance.' },
  { num: 5, title: 'Grade, Repeat, Level Up', desc: 'Your grade drives the next session. Sub-par? We revisit. Crushing it? We level up immediately.' },
];

export const forWhoCards = [
  {
    icon: '🚀',
    title: 'Entrepreneurs',
    items: ['10X SALES, SMARTER MARKETING.', 'STRONGER FINANCE.', 'WhatsApp THAT SELLS.', 'AUTOMATED SYSTEMS.'],
  },
  {
    icon: '💼',
    title: 'Job Seekers',
    items: ['LEARN WHAT THE JOB DEMANDS.', 'TRAINING THAT HELPS YOU GET HIRED.'],
  },
  {
    icon: '⚡',
    title: 'Freelancers',
    items: ['OWN YOUR SCHEDULE.', 'BOOST YOUR INCOME.', 'WORK FROM ANYWHERE.', 'PASSIVE INCOME.'],
  },
  {
    icon: '🎓',
    title: 'Students',
    items: ['LAUNCH YOUR CAREER.', 'LEARN INDUSTRY SKILLS.', 'BUILD YOUR NETWORK.'],
  },
];
