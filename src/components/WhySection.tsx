import { whyData } from '@/data/courseData';

const WhySection = () => (
  <section id="why" className="pt-[20px] pb-[120px] px-6 md:px-[60px] bg-primary relative noise-overlay">
    <div className="relative z-[1] max-w-[1400px] mx-auto">
      
      {/* Red Cards (01-06) with updated white glows and dark-high-contrast tile backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-10">
        {whyData.map((item, idx) => (
          <div
            key={item.num}
            className="group relative p-[40px] border-[1px] border-white/30 rounded-2xl reveal overflow-hidden backdrop-blur-md bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_2px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.6),inset_0_2px_30px_rgba(255,255,255,0.25)] hover:border-white/60 hover:-translate-y-[6px] transition-all duration-500 ease-out cursor-default"
            style={{ transitionDelay: `${idx * 0.05}s` }}
          >
            {/* Dynamic Glass Highlight for extra "alive" feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Background Number Glow (brighter) */}
            <div className="absolute -top-4 -right-4 font-heading text-[8rem] text-white/[0.08] group-hover:text-white/[0.2] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-500 pointer-events-none select-none leading-none">
              {item.num}
            </div>

            {/* Accent Line dynamically expanding */}
            <div className="w-12 h-[3px] bg-white/50 group-hover:bg-white group-hover:w-20 transition-all duration-500 mb-8 rounded-full" />

            <div className="relative z-10 flex flex-col h-full justify-start">
              <h4 className="font-heading text-[1.8rem] tracking-[2px] leading-tight mb-4 text-white group-hover:drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)] transition-all duration-500">
                {item.title}
              </h4>
              <p className="text-[1.1rem] leading-[1.8] text-white/90 group-hover:text-white transition-colors duration-500 font-medium tracking-wide">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
