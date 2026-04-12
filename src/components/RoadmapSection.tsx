import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roadmapSteps } from '@/data/courseData';
import { 
  Presentation, 
  Lightbulb, 
  MessageCircle, 
  ClipboardCheck, 
  Rocket 
} from 'lucide-react';

const icons = [
  Presentation,
  Lightbulb,
  MessageCircle,
  ClipboardCheck,
  Rocket
];

const RoadmapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Progress line animation
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );
    }

    // staggered items reveal
    const items = sectionRef.current?.querySelectorAll('.roadmap-item');
    items?.forEach((item) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="roadmap" ref={sectionRef} className="py-[160px] px-6 md:px-[60px] bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <span className="text-[0.65rem] tracking-[8px] uppercase text-primary mb-4 block animate-pulse">
          Learning Roadmap
        </span>
        <h2 className="font-heading text-[clamp(42px,8vw,90px)] leading-[0.9] mb-24">
          HOW <span className="text-primary text-outline-primary">IT</span> WORKS<span className="text-primary">.</span>
        </h2>

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <div 
              ref={lineRef}
              className="w-full h-full bg-primary origin-top shadow-[0_0_15px_rgba(255,0,0,0.5)]" 
            />
          </div>

          <div className="space-y-24">
            {roadmapSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={step.num} 
                  className={`roadmap-item flex flex-col md:flex-row items-center relative gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] group`}>
                    <div className={`bg-[#080808] p-10 border border-white/5 relative hover:border-primary/40 transition-all duration-500 hover:-translate-y-2`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex items-start gap-6">
                        <div className="flex flex-col items-center gap-4">
                          <span className="font-heading text-4xl text-primary leading-none">
                            0{step.num}
                          </span>
                          <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                            {(() => {
                              const Icon = icons[idx] || Rocket;
                              return <Icon size={24} />;
                            })()}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-heading text-[2rem] tracking-[1.5px] mb-4 text-white group-hover:text-primary transition-colors font-bold uppercase">
                            {step.title}
                          </h4>
                          <p className="text-[1.1rem] text-foreground/70 leading-[1.6] font-semibold">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[10%]" />
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Marker on the line */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
