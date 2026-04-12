

const CertificatesSection = () => (
  <section id="certificates" className="py-[120px] px-6 md:px-[60px] bg-primary">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-white/65 mb-[14px] block reveal">Certifications</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      EARN <span className="text-accent">YOUR</span><br />CERTIFICATE.
    </h2>



    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
      {[
        {
          title: 'UN Certified',
          items: ['Recognized learning standards', 'Structured evaluation & grading'],
          accent: false,
        },
        {
          title: 'Startup India Certified',
          items: ['Government-recognized startup', 'Career & business credibility'],
          accent: false,
        },
        {
          title: 'Nerdy Academy Certificate',
          items: ['Merit-based evaluation', 'Final score clearly mentioned'],
          accent: true,
        },
      ].map((cert) => (
        <div
          key={cert.title}
          className={`bg-black/[0.35] p-[40px_28px] border-b-4 transition-transform duration-300 hover:-translate-y-[6px] ${
            cert.accent ? 'border-foreground' : 'border-accent'
          }`}
        >
          <div className={`font-heading text-[1.7rem] mb-4 ${cert.accent ? 'text-foreground' : 'text-accent'}`}>
            {cert.title}
          </div>
          <ul className="list-none">
            {cert.items.map((item) => (
              <li key={item} className="text-[0.85rem] text-white/[0.78] py-2 border-b border-white/10 flex gap-[10px] items-start">
                <span className={`flex-shrink-0 ${cert.accent ? 'text-foreground' : 'text-accent'}`}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-10 bg-black/30 p-[28px_36px] flex items-center gap-7 flex-wrap">
      <span className="font-heading text-[1.2rem] tracking-[3px] text-accent flex-shrink-0">TOPICS COVERED:</span>
      {['MARKETING', 'FINANCE', 'AI TOOLS', 'CAREER', 'COMMUNICATION', 'ENTREPRENEURSHIP'].map((tag) => (
        <span key={tag} className="bg-white/[0.13] px-4 py-[7px] text-[0.65rem] tracking-[3px] uppercase">
          {tag}
        </span>
      ))}
    </div>
  </section>
);

export default CertificatesSection;
