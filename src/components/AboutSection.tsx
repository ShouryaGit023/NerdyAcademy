

const AboutSection = () => (
  <section id="about" className="py-[120px] px-6 md:px-[60px]" style={{ background: '#0d0d0d' }}>
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">About Nerdy</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      WE DON'T JUST <span className="text-primary">TEACH.</span><br />WE TRANSFORM.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-10">
      <div className="reveal-left">
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60 mb-[18px]">
          Nerdy Academy is a Startup India certified education company based in Bhilai. We believe in learning by doing — not watching. Every module is designed to create immediate, measurable impact.
        </p>
        <p className="text-[0.9rem] leading-[1.9] text-foreground/60">
          From AI tools to digital marketing, finance to career building — we cover what matters in the real world. No academic padding. No useless theory.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[3px] reveal-right">
        {[
          { num: '500+', label: 'Students Trained' },
          { num: '₹5Cr+', label: 'Ad Budget Managed' },
          { num: '2500+', label: 'Live Sessions' },
          { num: '100%', label: 'Hands-On' },
        ].map((tile) => (
          <div key={tile.label} className="bg-[#111] p-[30px] text-center">
            <div className="font-heading text-[2.5rem] text-primary mb-2">{tile.num}</div>
            <div className="text-[0.6rem] tracking-[3px] uppercase text-foreground/45">{tile.label}</div>
          </div>
        ))}
      </div>


    </div>
  </section>
);

export default AboutSection;
