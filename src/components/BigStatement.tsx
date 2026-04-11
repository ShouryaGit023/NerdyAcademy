const BigStatement = () => (
  <div className="bg-primary py-20 px-6 md:px-[60px] text-center relative overflow-hidden">
    <div className="absolute font-heading text-[28vw] text-black/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
      DOING
    </div>
    <h2 className="font-heading text-[clamp(22px,4.5vw,62px)] tracking-[4px] relative z-[1] md:whitespace-nowrap">
      THEORY <span className="text-background mx-[14px]">›</span> <span className="text-outline">DOING</span>
      &nbsp;·&nbsp;
      THEORY <span className="text-background mx-[14px]">›</span> <span className="text-outline">DOING</span>
      &nbsp;·&nbsp;
      THEORY <span className="text-background mx-[14px]">›</span> <span className="text-outline">DOING</span>
    </h2>
  </div>
);

export default BigStatement;
