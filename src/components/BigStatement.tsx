const BigStatement = () => (
  <div className="bg-primary py-32 px-6 md:px-[60px] relative overflow-hidden">
    {/* Background Ghost Text - Lightened for better visibility of back content */}
    <div className="absolute font-heading text-[18vw] text-black/[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none uppercase">
      Practicality
    </div>

    <div className="flex flex-col md:flex-row gap-6 relative z-10 justify-center">
      {/* Left Box */}
      <div className="border-4 border-black p-10 md:p-16 bg-primary/20 hover:bg-black group transition-all duration-500 flex-1 text-center backdrop-blur-[2px]">
        <h2 className="font-heading text-[clamp(28px,5.5vw,68px)] leading-[0.9] tracking-[2px] text-black group-hover:text-primary transition-all">
          DOING IS GREATER<br />
          THAN THEORY
        </h2>
      </div>

      {/* Right Box */}
      <div className="border-4 border-black p-10 md:p-16 bg-primary/20 hover:bg-black group transition-all duration-500 flex-1 text-center backdrop-blur-[2px]">
        <h2 className="font-heading text-[clamp(28px,5.5vw,68px)] leading-[0.9] tracking-[2px] text-black group-hover:text-primary transition-all uppercase">
          BECAUSE YOU'RE DONE<br />
          WATCHING.
        </h2>
      </div>
    </div>
  </div>
);

export default BigStatement;
