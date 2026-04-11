const SignSection = () => (
  <section id="sign" className="py-[140px] px-6 md:px-[60px] bg-primary text-center relative overflow-hidden noise-overlay">
    <div className="absolute font-heading text-[30vw] text-black/[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">
      ENROLL
    </div>

    <div className="relative z-[1]">
      <div className="font-heading text-[clamp(40px,7vw,100px)] leading-[0.95] text-foreground mb-7">
        STOP SCROLLING.
      </div>
      <div className="font-heading text-[clamp(60px,12vw,160px)] leading-[0.9] text-outline-lg mb-12 animate-sign-pulse">
        START DOING.
      </div>
      <div className="font-condensed text-base tracking-[5px] uppercase text-white/65 mb-[50px]">
        Your future self will thank you for this decision.
      </div>
      <a
        href="#contact"
        className="bg-foreground text-background px-[60px] py-5 font-heading text-[1.4rem] tracking-[4px] no-underline clip-skew btn-shine hover:-translate-y-1 transition-transform inline-block"
      >
        ENROLL NOW →
      </a>
    </div>
  </section>
);

export default SignSection;
