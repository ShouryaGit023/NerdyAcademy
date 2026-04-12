import { whyData } from '@/data/courseData';

const WhySection = () => (
  <section id="why" className="py-[80px] px-6 md:px-[60px] bg-primary relative noise-overlay">
    <div className="relative z-[1]">
      <span className="text-[0.95rem] tracking-[6px] uppercase text-foreground/65 mb-[14px] block">Why This Course?</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] text-foreground">
        BECAUSE <span className="text-outline">YOU'RE DONE</span><br />WATCHING.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-[60px]">
        {whyData.map((item, idx) => (
          <div
            key={item.num}
            className="relative p-[38px] border-l-[4px] reveal group transition-all duration-400 cursor-default overflow-hidden"
            style={{
              transitionDelay: `${idx * 0.05}s`,
              background: 'linear-gradient(135deg, hsl(0 100% 30%) 0%, hsl(0 100% 24%) 100%)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              borderLeftColor: 'rgba(255,255,255,0.3)',
              boxShadow: '0 8px 30px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.05)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                '0 15px 40px rgba(255,255,255,0.25), inset 0 0 35px rgba(255,255,255,0.15)';
              (e.currentTarget as HTMLDivElement).style.zIndex = '10';
              (e.currentTarget as HTMLDivElement).style.borderTopColor = 'rgba(255,255,255,0.4)';
              (e.currentTarget as HTMLDivElement).style.borderRightColor = 'rgba(255,255,255,0.4)';
              (e.currentTarget as HTMLDivElement).style.borderBottomColor = 'rgba(255,255,255,0.4)';
              (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                '0 8px 30px rgba(255,255,255,0.05), inset 0 0 20px rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLDivElement).style.zIndex = '1';
              (e.currentTarget as HTMLDivElement).style.borderTopColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLDivElement).style.borderRightColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLDivElement).style.borderBottomColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'rgba(255,255,255,0.3)';
            }}
          >
            {/* Glassmorphism inner layer */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[0.02] group-hover:bg-white/[0.08] transition-colors duration-400 pointer-events-none" />

            <div className="relative z-[1] h-full flex flex-col justify-center">
              <div className="font-heading text-6xl text-white/[0.15] group-hover:text-white/[0.35] group-hover:-translate-y-1 transition-all duration-400 leading-none mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">{item.num}</div>
              <h4 className="font-heading text-[1.6rem] tracking-[2px] mb-[10px] text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-400">{item.title}</h4>
              <p className="text-[0.9rem] leading-[1.8] text-white/80 group-hover:text-white transition-colors duration-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
