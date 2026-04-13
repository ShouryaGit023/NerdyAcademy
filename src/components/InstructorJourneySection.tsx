import React from 'react';

const JOURNEY_IMAGES = [
  "img209.jpg", "img215.jpg", "img221.jpg", "img301.jpg", "img233.jpg", 
  "img334.jpg", "img245.jpg", "img472.jpg", "img257.jpg", "img268.jpg", 
  "img279.jpg", "img290.jpg", "img227.jpg", "img312.jpg", "img323.jpg", 
  "img239.jpg", "img345.jpg", "img356.jpg", "img367.jpg", "img378.jpg", 
  "img389.jpg", "img419.jpg", "img424.jpg", "img431.jpg", "img440.jpg", 
  "img457.jpg", "img462.jpg", "img467.jpg", "img251.jpg", "img479.jpg", 
  "img484.jpg", "img491.jpg", "img501.jpg"
].map(img => `/images/author/${img}`);
const splitIndex = Math.ceil(JOURNEY_IMAGES.length / 2);
const ROW1_IMAGES = JOURNEY_IMAGES.slice(0, splitIndex);
const ROW2_IMAGES = JOURNEY_IMAGES.slice(splitIndex);

const MILESTONES = [
  { title: 'WARSAW, POLAND', desc: 'Economics · University of Warsaw · GEP' },
  { title: 'LONDON', desc: 'Digital Marketing · AME Trade' },
  { title: 'INDONESIA', desc: 'Represented India · UNESCO APEID Meet' },
  { title: 'TEDX', desc: 'Champion · Pandri 15' },
  { title: 'PICKLEBALL', desc: 'Ranked #12 India · WPC Bali · HK #3' },
  { title: 'FORMULA 4', desc: 'Racing driver — yes, for real' },
  { title: 'NERDY ACADEMY', desc: 'CEO · 13+ years mentoring' },
];

const InstructorJourneySection = () => {
  return (
    <section className="py-[120px] bg-background relative overflow-hidden flex flex-col items-center">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="px-6 md:px-[60px] text-center mb-16 w-full max-w-5xl mx-auto">
        <div className="inline-block px-8 py-2 bg-black text-white text-[1rem] tracking-[12px] uppercase mb-10 reveal font-black scale-y-110">
          MEET SHREY
        </div>
        <h2 className="font-heading text-[clamp(48px,10vw,110px)] leading-[0.8] mb-10 reveal italic tracking-[-2px]">
          THE <span className="text-primary">JOURNEY.</span>
        </h2>
        <div className="w-32 h-[4px] bg-primary mx-auto mb-12 reveal shadow-[0_4px_15px_rgba(255,0,0,0.3)]" />
        <p className="text-[1.3rem] md:text-[1.6rem] leading-[1.3] text-foreground font-black uppercase tracking-[-1px] reveal">
          From representing <span className="text-primary italic">India at UNESCO</span> and conquering the <span className="text-primary italic">Formula 4</span> racing tracks — witness the milestones of a true <span className="underline decoration-primary decoration-4 underline-offset-8">polymath.</span>
        </p>
      </div>

      <div className="w-full relative flex flex-col gap-4 overflow-hidden mask-horizontal">
        <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex gap-4 w-max animate-scroll-left">
          {[...ROW1_IMAGES, ...ROW1_IMAGES].map((src, idx) => (
            <div key={`row1-${idx}`} className="relative h-[240px] md:h-[320px] w-auto aspect-auto shrink-0 rounded-md overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
              <img 
                src={src} 
                alt={`Journey moment ${idx + 1}`}
                className="h-full w-auto object-cover transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex gap-4 w-max animate-scroll-right mt-2">
          {[...ROW2_IMAGES, ...ROW2_IMAGES].map((src, idx) => (
            <div key={`row2-${idx}`} className="relative h-[240px] md:h-[320px] w-auto aspect-auto shrink-0 rounded-md overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
              <img 
                src={src} 
                alt={`Journey moment ${idx + 1}`}
                className="h-full w-auto object-cover transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-24 reveal">
        {/* Milestone Carousel */}
        <div className="bg-[#050505] border-t border-white/10 overflow-hidden py-4">
          <div className="flex gap-4 w-max animate-scroll-left px-4">
            {[...MILESTONES, ...MILESTONES, ...MILESTONES].map((m, idx) => (
              <div 
                key={`milestone-${idx}`} 
                className="px-10 py-6 border border-white/10 bg-primary/20 hover:bg-primary/40 transition-colors min-w-[280px] flex flex-col justify-center rounded-sm"
              >
                <div className="text-accent font-heading text-[1.6rem] tracking-[2px] mb-2 font-black uppercase">
                  {m.title}
                </div>
                <div className="text-white text-[0.85rem] tracking-[1.5px] font-black uppercase opacity-100 whitespace-nowrap">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-primary border-t-4 border-primary">
          {[
            { label: 'YEARS EXP', val: '13+' },
            { label: 'COUNTRIES', val: '20+' },
            { label: 'INDIA PICKLEBALL', val: '#12' },
            { label: 'FORMULA RACER', val: 'F4' },
          ].map((stat, i) => (
            <div key={i} className="p-10 md:p-14 text-center border-r border-white/10 last:border-r-0 hover:bg-white/[0.05] transition-colors group">
               <div className="font-heading text-6xl md:text-7xl text-accent mb-2 group-hover:scale-110 transition-transform">
                 {stat.val}
               </div>
               <div className="text-[0.85rem] tracking-[5px] text-white/90 uppercase font-black">
                 {stat.label}
               </div>
            </div>
          ))}
        </div>

        {/* Work Map Section */}
        <div className="relative bg-black overflow-hidden min-h-[400px] md:min-h-[550px] flex items-center">
          {/* Map Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/author/Gemini_world.png" 
              alt="Work Map" 
              className="w-full h-full object-cover opacity-60 blur-[1px] scale-105"
              style={{ transform: 'translateY(30px) scale(1.05)' }}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center px-10 md:pl-24 py-16 md:py-0 max-w-4xl">
            <h4 className="font-heading text-[clamp(38px,8vw,92px)] leading-[0.8] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
              <span className="text-accent">LONDON</span> · WARSAW<br />
              MUMBAI · <span className="text-accent">BALI</span><br /><span className="text-accent">BHILAI </span>
              & <span className="text-accent italic">MORE.</span>
            </h4>
            <div className="mt-6 h-1.5 w-32 bg-primary rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorJourneySection;
