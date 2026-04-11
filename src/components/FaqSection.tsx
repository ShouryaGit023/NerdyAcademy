import { useState } from 'react';
import { faqData } from '@/data/courseData';

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-[120px] px-6 md:px-[60px] bg-background">
      <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">FAQ</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
        GOT <span className="text-primary">QUESTIONS?</span>
      </h2>

      <div className="max-w-[800px] mt-[60px]">
        {faqData.map((item, idx) => (
          <div key={idx} className="border-b border-white/[0.08] hover:bg-primary/[0.04] transition-colors">
            <div
              onClick={() => toggle(idx)}
              className="flex justify-between items-center py-[22px] cursor-pointer font-heading text-[1.2rem] tracking-[2px] text-foreground hover:text-primary transition-colors"
            >
              {item.q}
              <span className={`text-primary text-[1.2rem] flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-400 text-[0.9rem] leading-[1.9] text-foreground/60 ${
                openIdx === idx ? 'max-h-[200px] pb-6' : 'max-h-0'
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
