import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 3, label: 'Months', isText: false },
  { value: 4, label: 'Semesters', isText: false },
  { value: 65, label: 'Modules', isText: false },
  { value: '1:1', label: 'Live Sessions', isText: true },
];

const HeroSection = () => {
  const [counts, setCounts] = useState<(number | string)[]>(stats.map((s) => (s.isText ? s.value : 0)));
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, idx) => {
            if (stat.isText) return;
            const end = stat.value as number;
            let current = 0;
            const step = Math.max(20, 1200 / end);
            const timer = setInterval(() => {
              current += 1;
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = current;
                return next;
              });
              if (current >= end) {
                clearInterval(timer);
                setCounts((prev) => {
                  const next = [...prev];
                  next[idx] = end;
                  return next;
                });
              }
            }, step);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-background pt-[120px] pb-[60px] px-6 md:px-[60px]">
      {/* Background text */}
      <div className="absolute font-heading text-[clamp(120px,18vw,260px)] text-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none pointer-events-none animate-bgdrift">
        AI
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[820px]">
        <span className="inline-block bg-primary text-[0.65rem] tracking-[5px] uppercase px-5 py-2 mb-7 clip-skew-xs animate-slide-left">
          By Nerdy Academy
        </span>

        <h1 className="font-heading text-[clamp(60px,10vw,138px)] leading-[0.9] tracking-[2px] mb-[22px]">
          <span className="block text-primary overflow-hidden">
            <span className="block" style={{ animation: 'titleRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>ARTIFICIALLY</span>
          </span>
          <span className="block text-foreground overflow-hidden">
            <span className="block" style={{ animation: 'titleRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>INTELLIGENT</span>
          </span>
          <span className="block text-primary overflow-hidden">
            <span className="block" style={{ animation: 'titleRise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>COURSE.</span>
          </span>
        </h1>

        <p className="text-base tracking-[0.5px] text-foreground/65 mb-11 max-w-[480px] leading-[1.8] animate-slide-left" style={{ animationDelay: '0.2s' }}>
          3 months · 4 semesters · 65 modules of pure, brutal, hands-on learning. No fluff. No theory. Just doing.
        </p>

        <div ref={statsRef} className="flex gap-14 mb-12 animate-slide-left" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="group cursor-default">
              <div className="font-heading text-[3.5rem] text-primary leading-none transition-transform group-hover:scale-110 group-hover:text-foreground">
                {counts[i]}
              </div>
              <div className="text-[0.6rem] tracking-[4px] uppercase text-foreground/45">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 flex-wrap animate-slide-left" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="bg-primary text-foreground px-[50px] py-[18px] font-heading text-[1.2rem] tracking-[4px] no-underline clip-skew btn-shine hover:bg-[#ff1010] hover:-translate-y-[3px] transition-all inline-block">
            Enroll Now
          </a>
          <a href="#semesters" className="border-2 border-foreground text-foreground px-10 py-4 font-heading text-[1.2rem] tracking-[4px] no-underline hover:bg-foreground hover:text-background transition-all inline-block">
            View Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
