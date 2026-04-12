import { whyData } from '@/data/courseData';

const WhySection = () => (
  <section id="why" className="pt-[20px] pb-[100px] px-6 md:px-[60px] bg-primary relative noise-overlay">
    <div className="relative z-[1]">
      <div className="flex items-center gap-4 mb-8 reveal">
        <div className="w-12 h-[3px] bg-white opacity-40" />
        <span className="text-[0.8rem] tracking-[6px] uppercase text-white font-bold opacity-70">The Nerdy Philosophy</span>
      </div>

      <h2 className="font-heading text-[clamp(42px,7vw,92px)] leading-[0.85] mb-20 text-white reveal">
        BECAUSE <span className="text-black">YOU'RE DONE</span><br />WATCHING.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {whyData.map((item, idx) => (
          <div
            key={item.num}
            className="group relative p-12 border border-white/10 bg-black/20 hover:bg-black transition-all duration-500 hover:-translate-y-4 rounded-sm reveal overflow-hidden"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            {/* Background Number Glow */}
            <div className="absolute -top-6 -right-4 font-heading text-9xl text-white/[0.04] group-hover:text-white/[0.12] transition-all duration-700 pointer-events-none select-none">
              {item.num}
            </div>

            {/* Accent Line */}
            <div className="w-16 h-[2px] bg-white/30 group-hover:bg-accent group-hover:w-full transition-all duration-700 mb-8" />

            <div className="relative z-10">
              <h4 className="font-heading text-3xl tracking-[1px] leading-tight mb-4 text-white group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-[1rem] leading-[1.7] text-white/50 group-hover:text-white transition-colors font-medium">
                {item.desc}
              </p>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
