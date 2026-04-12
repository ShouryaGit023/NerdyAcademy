const PricingSection = () => (
  <section id="pricing" className="py-[120px] px-6 md:px-[60px] bg-background">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Pricing</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      INVEST IN <span className="text-primary">YOURSELF.</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mt-[60px]">
      {/* Batch */}
      <div className="bg-[#111] p-[58px_48px] border-t-4 border-foreground/20 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
        <div className="absolute top-4 right-5 font-heading text-7xl text-white/[0.04] leading-none pointer-events-none">BATCH</div>
        <div className="text-[0.6rem] tracking-[5px] uppercase text-foreground/45 mb-[14px]">GROUP BATCH</div>
        <div className="font-heading text-[5rem] leading-none mb-[6px]">₹20,000</div>
        <div className="text-[0.6rem] tracking-[3px] text-foreground/35 mb-[38px]">PER STUDENT · 3 MONTHS</div>
        <ul className="list-none">
          {['All 4 semesters covered', '35+ live sessions', 'Group learning environment', 'Quizzes & grading', 'Certificate on completion', 'Online or classroom'].map((f) => (
            <li key={f} className="text-[0.85rem] py-[11px] border-b border-white/[0.08] flex gap-3 text-foreground/70">
              <span className="text-foreground flex-shrink-0">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 bg-white/[0.06] p-[12px_18px] text-[0.62rem] tracking-[2px] text-foreground/40 leading-relaxed uppercase">
          No discounts · No refunds · Partial payments are allowed
        </div>
      </div>

      {/* Featured - 1:1 */}
      <div className="bg-primary p-[58px_48px] border-t-4 border-accent relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(217,0,0,0.35)]">
        <div className="absolute top-4 right-5 font-heading text-7xl text-white/[0.04] leading-none pointer-events-none">1:1</div>
        <span className="bg-accent text-background text-[0.58rem] tracking-[4px] px-[14px] py-[5px] inline-block mb-[18px] font-bold">
          RECOMMENDED
        </span>
        <div className="text-[0.6rem] tracking-[5px] uppercase text-white/65 mb-[14px]">1:1 PERSONAL</div>
        <div className="font-heading text-[5rem] leading-none mb-[6px] text-foreground">₹55,000</div>
        <div className="text-[0.6rem] tracking-[3px] text-white/55 mb-[38px]">PER STUDENT · 3 MONTHS</div>
        <ul className="list-none">
          {['Everything in Batch', 'Private 1:1 sessions with Shrey', 'Personalized pace & curriculum', 'Priority doubt resolution', 'Extra project reviews', 'Flexible scheduling'].map((f) => (
            <li key={f} className="text-[0.85rem] py-[11px] border-b border-white/20 flex gap-3 text-white/[0.88]">
              <span className="text-accent flex-shrink-0">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 bg-black/20 p-[12px_18px] text-[0.62rem] tracking-[2px] text-white/50 leading-relaxed uppercase">
          No discounts · No refunds · Partial payments are allowed
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
