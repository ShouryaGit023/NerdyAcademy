import { roadmapSteps } from '@/data/courseData';

const RoadmapSection = () => (
  <section id="roadmap" className="py-[120px] px-6 md:px-[60px] bg-background">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Learning Roadmap</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      HOW <span className="text-primary">IT</span> WORKS.
    </h2>

    <div className="relative mt-20">
      {/* Center line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-1/2" />

      {roadmapSteps.map((step, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <div key={step.num} className={`flex flex-col md:flex-row gap-[60px] items-start mb-20 relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className={`flex-1 max-w-full md:max-w-[420px] bg-[#111] p-[34px] border-b-[3px] border-primary ${isEven ? 'md:ml-auto reveal-right' : 'md:mr-auto reveal-left'} ml-[60px] md:ml-0`}>
              <h4 className="font-heading text-[1.5rem] tracking-[2px] mb-[10px] text-primary">{step.title}</h4>
              <p className="text-[0.9rem] text-foreground/60 leading-[1.8]">{step.desc}</p>
            </div>
            <div className="hidden md:flex flex-1" />
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-[6px] w-12 h-12 bg-primary rounded-full flex items-center justify-center font-heading text-[1.4rem] z-[2] border-[3px] border-background flex-shrink-0">
              {step.num}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default RoadmapSection;
