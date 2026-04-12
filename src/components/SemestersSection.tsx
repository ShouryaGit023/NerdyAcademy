import { useState } from 'react';
import { semesters } from '@/data/courseData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const SemestersSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="semesters" className="py-32 px-6 md:px-[60px] bg-[#080808]">
      <div className="relative z-[1] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-[0.8rem] tracking-[6px] uppercase text-primary font-black mb-[14px] block reveal">Full Curriculum</span>
            <h2 className="font-heading text-[clamp(42px,7vw,92px)] leading-[0.85] reveal text-white">
              4 SEMESTERS.<br />
              <span className="text-primary">36 SESSIONS.</span>
            </h2>
          </div>

          <div className="flex gap-3 flex-wrap reveal">
            {semesters.map((sem, idx) => (
              <button
                key={sem.tab}
                onClick={() => setActive(idx)}
                className={`font-heading text-lg tracking-[3px] px-8 py-4 border-2 transition-all duration-300 rounded-sm ${
                  active === idx
                    ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(255,10,10,0.3)]'
                    : 'bg-transparent text-white/30 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30'
                }`}
              >
                {sem.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="border-l-[8px] border-primary pl-10 mb-16 reveal text-white group">
          <div className="text-accent text-[0.9rem] tracking-[4px] font-black uppercase mb-2 opacity-80">
            {active === 0 && "Sessions 01 — 09"}
            {active === 1 && "Sessions 10 — 18"}
            {active === 2 && "Sessions 19 — 27"}
            {active === 3 && "Sessions 28 — 36"}
          </div>
          <h3 className="font-heading text-[2.5rem] md:text-[3.5rem] tracking-[2px] leading-tight mb-2 uppercase transition-all duration-500">
            {semesters[active].title}
          </h3>
          <p className="text-[1.1rem] text-white/50 font-bold uppercase tracking-[2px]">Objective: {semesters[active].goal}</p>
        </div>

        <Carousel
          key={active}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }) as any,
          ]}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4 pb-16">
            {semesters[active].sessions.map((session, idx) => (
              <CarouselItem key={`${active}-${idx}`} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex">
                <div 
                  className="bg-black/40 p-10 md:p-12 border-2 border-white/10 hover:border-accent transition-all duration-500 hover:-translate-y-3 group h-full relative overflow-hidden backdrop-blur-md rounded-2xl cursor-default min-h-[400px] flex flex-col justify-center w-full"
                >
                  {/* Watermark Number */}
                  <span className="font-heading text-8xl text-accent/[0.05] group-hover:text-accent/[0.12] leading-none absolute -top-4 -right-2 transition-all duration-500 pointer-events-none select-none">
                    {session.num}
                  </span>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-accent/60 font-heading text-2xl mb-4 group-hover:text-accent transition-colors">#{session.num}</div>
                      <h4 className="text-[0.9rem] tracking-[4px] uppercase text-accent font-black mb-10 flex items-center gap-4">
                        <div className="w-10 h-[2px] bg-accent/40 group-hover:w-full transition-all duration-700 rounded-full" />
                        {session.title}
                      </h4>
                    </div>
                    
                    <p className="text-[1.2rem] md:text-[1.35rem] text-white leading-[1.2] font-black uppercase tracking-[0.5px] group-hover:drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)] transition-all">
                      {session.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Manual Movement Arrows */}
          <div className="absolute -bottom-10 right-12 hidden md:flex gap-4">
            <CarouselPrevious className="static h-14 w-14 bg-white/5 border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300" />
            <CarouselNext className="static h-14 w-14 bg-white/5 border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SemestersSection;
