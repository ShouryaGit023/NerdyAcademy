const InstructorSection = () => (
  <section id="instructor" className="py-[120px] px-6 md:px-[60px] bg-background relative overflow-hidden">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">The Instructor</span>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-[60px]">
      <div className="reveal-left">
        <div className="relative overflow-hidden border border-primary/25 aspect-[4/5]">
          {/* TODO: Replace this dummy image with the photo of Shrey (for the 'Not a guide, a guru' section copy) */}
          <img
            src="/images/author/img239.jpg"
            alt="Shrey Surya Mishra"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/[0.98] via-background/70 to-transparent p-[30px_30px_28px]">
            <div className="font-heading text-[2rem] tracking-[3px] text-primary mb-1 uppercase">Shrey Surya Mishra</div>
            <div className="text-[0.65rem] tracking-[4px] text-foreground/45 uppercase">President & CEO at Nerdy Academy</div>
          </div>
        </div>
        <div className="bg-primary py-5 px-7 mt-[3px] clip-skew text-center">
          <p className="font-heading text-[1.5rem] tracking-[3px]">NOT A GUIDE, A GURU.</p>
        </div>
      </div>

      <div className="reveal-right">
        <h3 className="font-heading text-[clamp(32px,5vw,58px)] leading-[0.95] mb-6">
          MEET <span className="text-primary">SHREY.</span>
        </h3>
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60 mb-6">
          DPS Bhilai Scholar and NIT Raipur Graduate (Engineering), Shrey also studied Economics at the University of Warsaw in Poland. He previously led Digital Marketing at AME Trade in London, UK.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="text-xs tracking-widest text-primary uppercase mb-2">Achievements</div>
            <ul className="list-none space-y-2">
              <li className="text-[0.8rem] text-foreground/80 flex gap-2">
                <span className="text-primary">✦</span>
                Represented India at UNESCO APEID (Indonesia)
              </li>
              <li className="text-[0.8rem] text-foreground/80 flex gap-2">
                <span className="text-primary">✦</span>
                TEDx Champion & Speaker
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-widest text-primary uppercase mb-2">Sports & Hobbies</div>
            <ul className="list-none space-y-2">
              <li className="text-[0.8rem] text-foreground/80 flex gap-2">
                <span className="text-primary">✦</span>
                Formula 4 Racer
              </li>
              <li className="text-[0.8rem] text-foreground/80 flex gap-2">
                <span className="text-primary">✦</span>
                Pro Pickleball Player
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[0.9rem] leading-[1.9] text-foreground/60">
          His teaching method is simple: you don't watch — you do. Every session is live, interactive, and project-based. No pre-recorded fluff.
        </p>

        <ul className="list-none mt-7">
          {[
            'Live demonstrations — not slides',
            'You build during the session',
            'Quizzes after every topic',
            'Grading-based progression',
            'Grand final project + VIVA',
          ].map((item) => (
            <li key={item} className="text-[0.85rem] tracking-[1px] py-[13px] border-b border-white/[0.07] flex items-center gap-[14px] text-foreground/80">
              <span className="w-2 h-2 bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default InstructorSection;
