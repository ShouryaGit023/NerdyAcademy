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
    title: 'Digital Marketing Foundations (AI-Enhanced)',
    goal: 'Build a complete foundation in Google, Meta, and HR marketing using AI',
    sessions: [
      { num: '01', title: 'Session 1', description: 'Google Docs, Sheets & Slides Automation' },
      { num: '02', title: 'Session 2', description: 'Google Ads + AI Copywriting' },
      { num: '03', title: 'Session 3', description: 'Google Analytics & Campaign Review' },
      { num: '04', title: 'Session 4', description: 'Meta Ads Manager Setup & Targeting' },
      { num: '05', title: 'Session 5', description: 'Instagram Boost vs Meta Ads Manager' },
      { num: '06', title: 'Session 6', description: 'Canva + AI (Magic Write, Magic Design, Brand Kit)' },
      { num: '07', title: 'Session 7', description: 'LinkedIn for Business & Employer Branding' },
      { num: '08', title: 'Session 8', description: 'Resume and Job Description via ChatGPT' },
      { num: '09', title: 'Session 9', description: 'Naukri, Indeed, Apna, LinkedIn Job Automation' },
    ],
  },
  {
    tab: 'SEM 2',
    title: 'AI in Finance & Entrepreneurship (AI-Enhanced)',
    goal: 'Understand finance, automation, and AI-driven business tools',
    sessions: [
      { num: '10', title: 'Session 10', description: 'Financial Literacy (Income, Expenses, Assets, Liabilities)' },
      { num: '11', title: 'Session 11', description: 'Automating Finance Reports using ChatGPT + Excel' },
      { num: '12', title: 'Session 12', description: 'Trading Basics + AI Stock Prediction Tools' },
      { num: '13', title: 'Session 13', description: 'Entrepreneurship with AI Idea Generation' },
      { num: '14', title: 'Session 14', description: 'Building Websites using AI (Durable, Framer, 10Web)' },
      { num: '15', title: 'Session 15', description: 'App Creation using AI Builders (Glide, Softr, Bubble)' },
      { num: '16', title: 'Session 16', description: 'WhatsApp Business API Setup (Wati / Twilio)' },
      { num: '17', title: 'Session 17', description: 'CRM & IVR System Automation for Businesses' },
      { num: '18', title: 'Session 18', description: 'Integration of Google Ads, WhatsApp, and Analytics' },
    ],
  },
  {
    tab: 'SEM 3',
    title: 'The World of Artificial Intelligence',
    goal: 'Master modern AI platforms and their business applications',
    sessions: [
      { num: '19', title: 'Session 19', description: 'Intro to Generative AI (Text, Image, Video, Voice)' },
      { num: '20', title: 'Session 20', description: 'ChatGPT, Gemini, Claude, Perplexity (Hands-on)' },
      { num: '21', title: 'Session 21', description: 'Midjourney, Leonardo, Ideogram for Visuals & Branding' },
      { num: '22', title: 'Session 22', description: 'Prompt Engineering — Writing Effective Prompts' },
      { num: '23', title: 'Session 23', description: 'AI Copywriting Tools — Copy.ai, Jasper, Predis.ai' },
      { num: '24', title: 'Session 24', description: 'Workflow Automation — Zapier, Make, Taskade, Relevance AI' },
      { num: '25', title: 'Session 25', description: 'AI Chatbots — Chatbase, Voiceflow, ManyChat' },
      { num: '26', title: 'Session 26', description: 'Creating Your Own AI Assistant' },
      { num: '27', title: 'Session 27', description: 'Business Dashboard Building (ChatGPT + Sheets Integration)' },
    ],
  },
  {
    tab: 'SEM 4',
    title: 'Career, Communication & Entrepreneurship',
    goal: 'Transform into a confident professional ready for job or business',
    sessions: [
      { num: '28', title: 'Session 28', description: 'Resume & Portfolio Building using AI' },
      { num: '29', title: 'Session 29', description: 'Elevator Pitch & Storytelling Practice' },
      { num: '30', title: 'Session 30', description: 'LinkedIn Optimization for Recruiters and Leads' },
      { num: '31', title: 'Session 31', description: 'Public Speaking with AI Tools' },
      { num: '32', title: 'Session 32', description: 'HR & Technical Mock Interviews' },
      { num: '33', title: 'Session 33', description: 'Pitch Deck Creation (Canva + ChatGPT + Slides)' },
      { num: '34', title: 'Session 34', description: 'Investor Presentation Skills & Storytelling' },
      { num: '35', title: 'Session 35', description: 'Grand Final Test (Project + VIVA)' },
      { num: '36', title: 'Session 36', description: 'Graduation Ceremony & Certificate Distribution' },
    ],
  },
];

export const faqData = [
  { q: 'Who is this course for?', a: 'Anyone who wants to upskill — entrepreneurs, job seekers, freelancers, students, or working professionals. No prior tech knowledge required.' },
  { q: 'Is this online or offline?', a: 'Both! You can attend live sessions online or at our classroom in Jaipur. Same content, same instructor.' },
  { q: 'How long is the course?', a: '3 months, 4 semesters, 35+ live sessions. Each session is hands-on and action-packed.' },
  { q: 'Do I get a certificate?', a: 'Yes. After completing all semesters, a Grand Final Project + VIVA, you receive a Nerdy Academy certificate.' },
  { q: 'What\'s the difference between Batch and 1:1?', a: 'Batch is a group session (₹20,000). 1:1 Personal is a private session with the instructor (₹55,000). Both cover the same curriculum.' },
  { q: 'Can I pay in installments?', a: 'Yes, we offer flexible payment options. Contact us for details.' },
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
    items: ['10x your sales', 'Smarter marketing systems', 'WhatsApp that sells', 'Automated business flows', 'Stronger finance control'],
  },
  {
    icon: '💼',
    title: 'Job Seekers',
    items: ['Learn what the job demands', 'Training that gets you hired', 'Marketing · Finance · HR', 'Mock interviews + VIVA', 'LinkedIn for recruiters'],
  },
  {
    icon: '⚡',
    title: 'Freelancers',
    items: ['Own your schedule', 'Boost your income', 'Work from anywhere', 'Build passive income streams', 'AI-powered services'],
  },
];
