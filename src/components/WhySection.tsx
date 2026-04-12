import { whyData } from '@/data/courseData';

const WhySection = () => (
  <section id="why" className="py-[120px] px-6 md:px-[60px] bg-primary relative noise-overlay">
    <div className="relative z-[1]">
      <span className="text-[0.7rem] tracking-[6px] uppercase text-white/40 mb-[14px] block">THE NERDY PHILOSOPHY</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.9] mb-[18px] text-white">
        WHY <span className="text-black">NERDY?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {whyData.map((item, idx) => (
          <div
            key={item.num}
            className="bg-black/20 p-12 border border-white/10 hover:border-accent hover:bg-black transition-all duration-500 hover:-translate-y-3 group reveal relative overflow-hidden"
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            <div className="absolute -top-4 -right-2 font-heading text-8xl text-white/[0.04] group-hover:text-accent/10 transition-colors pointer-events-none select-none">
              {item.num}
            </div>
            
            <div className="w-14 h-1 bg-accent mb-8 group-hover:w-full transition-all duration-700" />
            
            <h4 className="font-heading text-[1.85rem] tracking-[1.5px] leading-tight mb-4 text-white group-hover:text-accent transition-colors">
              {item.title}
            </h4>
            
            <p className="text-[0.95rem] leading-[1.8] text-white/50 font-medium group-hover:text-white/80 transition-colors">
              {item.desc}
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
