const ActionQuoteSection = () => (
  <section className="py-[80px] px-6 md:px-[60px] bg-background relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
    </div>

    <div className="relative z-[1] max-w-[900px] reveal">
      {/* Vertical bar accent */}
      <div className="flex gap-6 md:gap-10 items-stretch">
        <div className="w-[4px] flex-shrink-0 bg-gradient-to-b from-primary via-primary/60 to-transparent rounded-full" />

        <div className="flex flex-col gap-[28px]">
          {/* Line 1 — dominant, confident */}
          <div>
            <p className="font-heading text-[clamp(28px,5.5vw,72px)] leading-[0.92] tracking-[2px] uppercase text-white">
              DOING.{' '}
              <span className="text-white">MAKING.</span>{' '}
              <span className="text-white">CHANGING</span>{' '}
              <span className="text-white/50 text-[clamp(20px,3.5vw,48px)]">—</span>
            </p>
            <p className="font-heading text-[clamp(18px,3vw,42px)] leading-[1] tracking-[3px] uppercase mt-1">
              <span className="text-white/50 font-condensed font-bold">THESE ARE </span>
              <span className="text-white relative inline-block">
                OUR VERBS.
                {/* Gradient underline */}
                <span className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-primary/40 rounded-full" />
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-[60px] h-[1px] bg-white/15" />

          {/* Line 2 — faded, rejected philosophy */}
          <div className="opacity-40">
            <p className="font-heading text-[clamp(20px,3.5vw,52px)] leading-[0.92] tracking-[2px] uppercase text-white/70">
              RECORDING.{' '}
              <span
                className="text-outline-sm"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}
              >
                LISTENING.
              </span>{' '}
              <span
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}
                className="font-heading text-[clamp(20px,3.5vw,52px)] uppercase"
              >
                THINKING
              </span>{' '}
              <span className="text-white/30">—</span>
            </p>
            <p className="font-heading text-[clamp(14px,2vw,30px)] leading-[1] tracking-[3px] uppercase mt-1 text-white/40">
              THESE ARE NOT OUR VERBS.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ActionQuoteSection;
