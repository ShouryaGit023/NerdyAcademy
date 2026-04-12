const BigStatement = () => (
  <div className="bg-primary pt-32 pb-8 px-6 md:px-[60px] relative overflow-hidden">
    {/* Background Ghost Text - Lightened for better visibility of back content */}
    <div className="absolute font-heading text-[18vw] text-black/[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none uppercase">
      Practicality
    </div>

    <div className="flex justify-center relative z-10 mt-10 md:mt-12">
      <div className="border-4 border-black p-12 md:p-20 bg-primary/20 hover:bg-black group transition-all duration-500 max-w-4xl w-full text-center backdrop-blur-[2px]">
        <h2 className="font-heading text-[clamp(32px,7vw,88px)] leading-[0.85] tracking-[2px] text-black group-hover:text-primary transition-all">
          DOING IS GREATER<br />
          THAN THEORY
        </h2>
      </div>
    </div>
  </div>
);

export default BigStatement;
