const InstructorSection = () => (
  <section id="instructor" className="py-[120px] px-6 md:px-[60px] bg-background relative overflow-hidden">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">The Instructor</span>

    <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 md:gap-20 items-start mt-[60px]">
      <div className="reveal-left mx-auto md:mx-0 w-full max-w-[420px]">
        <div className="relative overflow-hidden border border-primary/25">
          {/* TODO: Replace this dummy image with the photo of Shrey (for the 'Not a guide, a guru' section copy) */}
          <img
            src="/images/author/img209.jpg"
            alt="Shrey Surya Mishra"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/[0.98] via-background/70 to-transparent p-[30px_30px_28px]">
            <div className="font-heading text-[2rem] tracking-[3px] text-white mb-1 uppercase">Shrey Surya Mishra</div>
            <div className="text-[0.65rem] tracking-[4px] text-foreground/45 uppercase">President & CEO at Nerdy Academy</div>
          </div>
        </div>
        <div className="bg-primary py-7 px-10 mt-[3px] clip-skew text-center shadow-[10px_10px_0_rgba(255,10,10,0.2)]">
          <p className="font-heading text-[2rem] tracking-[4px] leading-none text-white font-black">NOT A GUIDE,<br />A GURU.</p>
        </div>
      </div>

      <div className="reveal-right">
        <h3 className="font-heading text-[clamp(48px,8vw,110px)] leading-[0.8] mb-10 tracking-[-2px]">
          MEET <span className="text-primary italic">SHREY.</span>
        </h3>
        <p className="text-[1.1rem] md:text-[1.35rem] leading-[1.5] text-foreground font-semibold mb-10 uppercase tracking-[0.5px]">
          DPS Bhilai Scholar and NIT Raipur Graduate (Engineering), Shrey also studied Economics at the University of Warsaw in Poland. He previously led Digital Marketing at AME Trade in London, UK.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { cat: 'ACHIEVEMENT', text: 'Represented India at UNESCO APEID' },
            { cat: 'ACHIEVEMENT', text: 'TEDx Champion' },
            { cat: 'SPORT', text: 'Formula 4 Racing Driver' },
            { cat: 'SPORT', text: 'Pro Pickleball Player (#12 India)' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border-2 border-white/10 p-6 md:p-8 rounded-2xl hover:border-accent transition-all group hover:-translate-y-2 duration-500">
               <div className="text-primary text-[0.7rem] tracking-[4px] font-black uppercase mb-3 flex items-center gap-2">
                 <div className="w-4 h-[2px] bg-primary group-hover:w-10 transition-all" />
                 {item.cat}
               </div>
               <p className="text-white text-[1.1rem] md:text-[1.3rem] font-black leading-[1.2] uppercase tracking-[0.5px]">
                 {item.text}
               </p>
            </div>
          ))}
        </div>

        <p className="text-[1.1rem] md:text-[1.3rem] leading-[1.4] text-foreground font-black uppercase mb-10">
          His teaching method is simple: <span className="bg-primary px-2 text-white">YOU DON'T WATCH — YOU DO.</span> EVERY SESSION IS LIVE, INTERACTIVE, AND PROJECT-BASED. NO PRE-RECORDED FLUFF.
        </p>
 
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mt-7">
          {[
            'Live demonstrations — not slides',
            'You build during the session',
            'Quizzes after every topic',
            'Grading-based progression',
            'Grand final project + VIVA',
          ].map((item) => (
            <li key={item} className="text-[1rem] tracking-[1.5px] py-[15px] border-b border-white/[0.1] flex items-center gap-[14px] text-foreground font-black uppercase">
              <span className="w-3 h-3 bg-primary flex-shrink-0 rotate-45" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default InstructorSection;
