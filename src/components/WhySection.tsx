import { whyData } from '@/data/courseData';

const WhySection = () => (
  <section id="why" className="py-[120px] px-6 md:px-[60px] bg-primary relative noise-overlay">
    <div className="relative z-[1]">
      <span className="text-[0.65rem] tracking-[6px] uppercase text-foreground/65 mb-[14px] block">Why This Course?</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] text-foreground">
        BECAUSE <span className="text-outline">YOU'RE DONE</span><br />WATCHING.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-[60px]">
        {whyData.map((item, idx) => (
          <div
            key={item.num}
            className="bg-black/30 p-[38px] border-l-4 border-white/15 hover:border-accent hover:bg-black/50 transition-all duration-300 hover:translate-x-[6px] reveal"
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            <div className="font-heading text-6xl text-white/[0.08] leading-none mb-2">{item.num}</div>
            <h4 className="font-heading text-[1.6rem] tracking-[2px] mb-[10px]">{item.title}</h4>
            <p className="text-[0.9rem] leading-[1.8] text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
