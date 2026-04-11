import { forWhoCards } from '@/data/courseData';

const ForWhoSection = () => (
  <section id="for-who" className="py-[120px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Who Is This For?</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      BUILT FOR<br />
      <span className="text-primary">EVERYONE</span><br />
      WHO WANTS TO<br />UPSKILL.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] mt-[60px]">
      {forWhoCards.map((card, idx) => (
        <div
          key={card.title}
          className="bg-background p-[50px_38px] border-t-4 border-transparent hover:border-primary relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(217,0,0,0.18)] reveal"
          style={{ transitionDelay: `${idx * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.05] transition-opacity z-0" />
          <div className="relative z-[1]">
            <span className="text-5xl mb-[18px] block">{card.icon}</span>
            <h3 className="font-heading text-[2.2rem] tracking-[2px] mb-4 text-primary">{card.title}</h3>
            <ul className="list-none">
              {card.items.map((item) => (
                <li key={item} className="text-[0.85rem] text-foreground/65 py-2 border-b border-white/[0.07] flex items-center gap-[10px]">
                  <span className="text-primary flex-shrink-0">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ForWhoSection;
