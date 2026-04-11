const SpokenEnglishSection = () => (
  <section id="spoken" className="py-[120px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Bonus Module</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      SPOKEN <span className="text-primary">ENGLISH</span><br />INCLUDED.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-[60px]">
      <div className="reveal-left">
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60 mb-6">
          Communication is the multiplier. Every technical skill becomes 10x more powerful when you can present, pitch, and persuade in fluent English.
        </p>
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60">
          That's why every Nerdy Academy student gets spoken English training as part of the course — no extra cost.
        </p>
      </div>
      <div className="reveal-right">
        <div className="bg-[#111] p-12 border-l-[6px] border-primary">
          <div className="font-heading text-[1.3rem] tracking-[3px] mb-6 text-primary">WHAT YOU'LL LEARN</div>
          <ul className="list-none">
            {[
              'Fluent conversation skills',
              'Business English vocabulary',
              'Presentation confidence',
              'Interview communication',
              'Email & professional writing',
              'Public speaking fundamentals',
            ].map((item) => (
              <li key={item} className="py-[13px] border-b border-white/[0.07] text-[0.9rem] text-foreground/70 flex gap-3 items-start">
                <span className="text-primary flex-shrink-0">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SpokenEnglishSection;
