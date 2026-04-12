const SignSection = () => (
  <section id="sign" className="py-[140px] px-6 md:px-[100px] bg-primary relative overflow-hidden noise-overlay min-h-[70vh] flex items-center">

    {/* Large BG Text */}
    <div className="absolute font-heading text-[30vw] md:text-[30vw] text-black/[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-[0] mix-blend-overlay">
      ENROLL
    </div>

    {/* Content Container */}
    <div className="relative z-[2] w-full max-w-[1400px] mx-auto flex justify-start items-center h-full">

      {/* Left side text block */}
      <div className="text-left w-full md:w-3/5 relative z-[2] group cursor-default">
        <div className="font-heading text-[clamp(50px,9vw,120px)] leading-[0.95] text-foreground mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:-skew-x-3">
          STOP SCROLLING.
        </div>
        <div className="font-heading text-[clamp(90px,15vw,180px)] leading-[0.9] text-outline-lg mb-8 animate-sign-pulse drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:translate-x-8 group-hover:scale-[1.03] origin-left group-hover:drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          START DOING.
        </div>
        <div className="font-condensed text-[clamp(14px,2vw,18px)] tracking-[5px] uppercase text-white/90 mb-[50px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:translate-x-12 group-hover:text-white group-hover:tracking-[8px]">
          Let us Spoon Feed You the AI Revolution.
        </div>
        <a
          href="#contact"
          className="bg-foreground text-background px-[50px] md:px-[60px] py-4 md:py-5 font-heading text-[1.2rem] md:text-[1.4rem] tracking-[4px] no-underline clip-skew btn-shine transition-all duration-500 ease-out inline-block shadow-[0_15px_30px_rgba(0,0,0,0.3)] group-hover:translate-x-16 group-hover:-rotate-1 hover:!scale-110 hover:!bg-white hover:!shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:!translate-x-20"
        >
          ENROLL NOW →
        </a>
      </div>

    </div>

    {/* Right side image anchored exactly to bottom */}
    {/* The image should be saved as 'public/spoon-baby.png' or the src below should be updated to match the uploaded file's path */}
    <div className="absolute bottom-0 right-[-10%] md:right-[-2%] z-[1] h-[95%] md:h-[90%] w-[80%] md:w-[60%] pointer-events-none flex items-end justify-end">
      <img
        src="/spoon-baby.png"
        alt="Baby with spoon"
        className="h-full w-auto object-contain object-bottom origin-bottom rotate-2 drop-shadow-[0_-5px_50px_rgba(0,0,0,0.5)]"
      />
    </div>

  </section>
);

export default SignSection;
