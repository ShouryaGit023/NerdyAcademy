import { useState } from 'react';
import { semesters } from '@/data/courseData';

const SemestersSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="semesters" className="py-[120px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
      <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Full Curriculum</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
        4 SEMESTERS.<br />
        <span className="text-primary">35 SESSIONS.</span><br />
        ZERO PADDING.
      </h2>

      <div className="flex gap-[3px] mt-[50px] flex-wrap reveal">
        {semesters.map((sem, idx) => (
          <button
            key={sem.tab}
            onClick={() => setActive(idx)}
            className={`font-heading text-base tracking-[3px] px-7 py-[14px] border transition-all duration-200 ${
              active === idx
                ? 'bg-primary text-foreground border-primary'
                : 'bg-transparent text-foreground/35 border-foreground/10 hover:bg-primary hover:text-foreground hover:border-primary'
            }`}
          >
            {sem.tab}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <div className="border-l-[6px] border-primary pl-6 mb-10">
          <h3 className="font-heading text-[2.4rem] tracking-[2px] mb-[6px]">{semesters[active].title}</h3>
          <p className="text-[0.85rem] text-foreground/50">Goal: {semesters[active].goal}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3px]">
          {semesters[active].sessions.map((session) => (
            <div
              key={session.num}
              className="bg-[#111] p-7 border-t-[3px] border-transparent hover:border-accent hover:bg-[#161616] relative transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-heading text-5xl text-primary/[0.12] leading-none absolute top-[14px] right-[18px]">
                {session.num}
              </span>
              <h4 className="text-[0.65rem] tracking-[3px] uppercase text-primary mb-2">{session.title}</h4>
              <p className="text-[0.85rem] text-foreground/70 leading-[1.7]">{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemestersSection;
