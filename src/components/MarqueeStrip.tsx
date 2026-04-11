const marqueeText = 'AI ✦ SKILLS ✦ CAREERS ✦ MARKETING ✦ FINANCE ✦ ENTREPRENEURSHIP ✦ AUTOMATION ✦ LIVE SESSIONS ✦ CERTIFICATES ✦';

const MarqueeStrip = () => (
  <div className="bg-primary py-4 overflow-hidden border-t-[3px] border-t-white/15 border-b-[3px] border-b-black/25 group">
    <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
      {[0, 1].map((i) => (
        <span key={i} className="font-heading text-[1.3rem] tracking-[6px] px-10 text-foreground">
          {marqueeText}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
