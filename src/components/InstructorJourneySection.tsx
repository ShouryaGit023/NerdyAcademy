import React from 'react';

const JOURNEY_IMAGES = [
  "img209.jpg", "img215.jpg", "img221.jpg", "img227.jpg", "img233.jpg", 
  "img239.jpg", "img245.jpg", "img251.jpg", "img257.jpg", "img268.jpg", 
  "img279.jpg", "img290.jpg", "img301.jpg", "img312.jpg", "img323.jpg", 
  "img334.jpg", "img345.jpg", "img356.jpg", "img367.jpg", "img378.jpg", 
  "img389.jpg", "img419.jpg", "img424.jpg", "img431.jpg", "img440.jpg", 
  "img457.jpg", "img462.jpg", "img467.jpg", "img472.jpg", "img479.jpg", 
  "img484.jpg", "img491.jpg", "img501.jpg"
].map(img => `/images/author/${img}`);

const splitIndex = Math.ceil(JOURNEY_IMAGES.length / 2);
const ROW1_IMAGES = JOURNEY_IMAGES.slice(0, splitIndex);
const ROW2_IMAGES = JOURNEY_IMAGES.slice(splitIndex);

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

      <div className="px-6 md:px-[60px] text-center mb-12 w-full max-w-4xl mx-auto">
        <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">13+ Years of Experience</span>
        <h2 className="font-heading text-[clamp(32px,5vw,58px)] leading-[0.95] mb-6 reveal">
          THE <span className="text-primary">JOURNEY.</span>
        </h2>
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60 reveal">
          From representing India at UNESCO and conquering the Formula 4 racing tracks to leading digital marketing 
          in London — witness the milestones of a true polymath.
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
    </section>
  );
};

export default InstructorJourneySection;
