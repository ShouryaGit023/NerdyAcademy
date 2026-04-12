const PricingSection = () => (
  <section id="pricing" className="py-[120px] px-6 md:px-[60px] bg-background">
    <div className="flex items-center gap-4 mb-8 reveal">
      <div className="w-12 h-[3px] bg-primary" />
      <span className="text-[0.75rem] tracking-[6px] uppercase text-primary font-black">Transparent Pricing</span>
    </div>

    <h2 className="font-heading text-[clamp(40px,11vw,120px)] leading-[0.82] mb-12 reveal flex flex-col">
      <span className="text-white">HOW MUCH</span>
      <span className="text-primary">DOES IT</span>
      <span className="text-white">COST?</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mt-[60px]">
      {/* Batch */}
      <div className="bg-[#111] p-[40px_30px] md:p-[58px_48px] border-t-4 border-foreground/20 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
        <h3 className="font-heading text-[3rem] md:text-[4rem] text-white leading-none mb-2 uppercase">Group Batch</h3>
        <div className="font-heading text-[5rem] leading-none mb-[6px]">₹20,000</div>
        <div className="text-[0.6rem] tracking-[3px] text-foreground/35 mb-[38px]">PER STUDENT · 3 MONTHS</div>
        <ul className="list-none">
          {['All 4 semesters covered', '36 live sessions', 'Group learning environment', 'Quizzes & grading', '3 Certificates on completion', 'Online or classroom', '30 minutes/session of English'].map((f) => (
            <li key={f} className="text-[0.85rem] py-[11px] border-b border-white/[0.08] flex gap-3 text-foreground/70">
              <span className="text-foreground flex-shrink-0">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 bg-white/[0.06] p-[12px_18px] text-[0.62rem] tracking-[2px] text-foreground/40 leading-relaxed uppercase">
          NO DISCOUNTS, NO REFUNDS, PARTIAL PAYMENTS ARE ALLOWED
        </div>
      </div>

      {/* Featured - 1:1 */}
      <div className="bg-primary p-[40px_30px] md:p-[58px_48px] border-t-4 border-accent relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(217,0,0,0.35)]">
        <span className="bg-accent text-background text-[0.58rem] tracking-[4px] px-[14px] py-[5px] inline-block mb-[18px] font-bold">
          RECOMMENDED
        </span>
        <h3 className="font-heading text-[3rem] md:text-[4rem] text-white leading-none mb-2 uppercase">1:1 Personal</h3>
        <div className="font-heading text-[5rem] leading-none mb-[6px] text-foreground">₹55,000</div>
        <div className="text-[0.6rem] tracking-[3px] text-white/55 mb-[38px]">PER STUDENT · 3 MONTHS</div>
        <ul className="list-none">
          {['All Sessions are Private 1:1 sessions with Shrey','Everything in Batch +', 'Personalized pace & curriculum', 'Priority doubt resolution', 'Extra project reviews', 'Flexible scheduling','30 minutes/session of English'].map((f) => (
            <li key={f} className="text-[0.85rem] py-[11px] border-b border-white/20 flex gap-3 text-white/[0.88]">
              <span className="text-accent flex-shrink-0">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 bg-black/20 p-[12px_18px] text-[0.62rem] tracking-[1.5px] text-white/60 text-center uppercase">
          NO DISCOUNTS, NO REFUNDS, PARTIAL PAYMENTS ARE ALLOWED
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
