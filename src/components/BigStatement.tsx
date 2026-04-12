const BigStatement = () => (
  <div className="bg-primary pt-[60px] pb-[20px] md:pt-[100px] md:pb-[40px] relative overflow-hidden flex flex-col items-center justify-center">
    
    <style>{`
      @keyframes marqueeLeft {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee-left {
        animation: marqueeLeft 20s linear infinite;
        display: flex;
        width: max-content;
      }
    `}</style>

    {/* Giant Background Text */}
    <div className="absolute font-heading text-[40vw] text-black/[0.04] top-20 md:top-[15%] left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none z-[0] mix-blend-overlay">
      DOING
    </div>

    {/* SINGLE Row Marquee */}
    <div className="w-full relative z-10 overflow-hidden flex">
      <div className="animate-marquee-left hover:[animation-play-state:paused] cursor-default">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-3 md:gap-10 md:px-5 font-heading text-[clamp(28px,8vw,140px)] tracking-[2px] md:tracking-[4px] leading-none">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">DOING IS GREATER</span>
            <span className="text-white mx-2 translate-y-[-5px] md:translate-y-[-10px] scale-[0.6] md:scale-75">▪</span>
            <span className="text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]" style={{ WebkitTextStroke: '2px white' }}>THAN THEORY</span>
            <span className="text-white mx-2 translate-y-[-5px] md:translate-y-[-10px] scale-[0.6] md:scale-75">▪</span>
          </div>
        ))}
      </div>
    </div>

    {/* The Moved Header Block */}
    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-[60px] mt-20 md:mt-32">
      <div className="flex items-center gap-4 mb-8 reveal">
        <div className="w-12 h-[3px] bg-white opacity-40" />
        <span className="text-[0.8rem] tracking-[6px] uppercase text-white font-bold opacity-70">The Nerdy Philosophy</span>
      </div>

      <div className="font-heading text-[clamp(35px,8vw,110px)] leading-[0.85] reveal drop-shadow-md">
        <span className="text-white mr-4 md:mr-6">BECAUSE</span> 
        <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>YOU'RE DONE</span><br />
        <span className="text-white block mt-2 md:mt-4">WATCHING.</span>
      </div>
    </div>

  </div>
);

export default BigStatement;
