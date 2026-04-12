import { AutoSlideshow } from '@/components/ui/auto-slideshow';

const CertificatesSection = () => (
  <section id="certificates" className="py-[120px] px-6 md:px-[60px] bg-primary">
    <span className="text-[0.65rem] tracking-[6px] uppercase text-white/65 mb-[14px] block reveal">Certifications</span>
    <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
      EARN <span className="text-accent">YOUR</span><br />CERTIFICATE.
    </h2>

    {/* TODO: Insert images of Shrey here that highlight the UN, Startup India, and specific course certificates */}
    <div className="w-full max-w-[900px] mx-auto mt-14 mb-[60px] aspect-[21/9] bg-black/40 border border-accent/20 relative overflow-hidden transition-all hover:border-accent/60">
      <AutoSlideshow 
        images={[
          { src: "https://via.placeholder.com/1200x500.png?text=UN+Certificate+Standard", alt: "UN Certificate" },
          { src: "https://via.placeholder.com/1200x500.png?text=Startup+India+Certified", alt: "Startup India Certificate" },
          { src: "https://via.placeholder.com/1200x500.png?text=Specific+Course+Certificates", alt: "Course Certificates" }
        ]} 
        imageClassName="opacity-80"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
      {[
        {
          title: 'Course Completion',
          items: ['Attend all 4 semesters', 'Complete all quizzes', 'Score above threshold', 'Submit all assignments'],
          accent: false,
        },
        {
          title: 'Grand Final Project',
          items: ['Build a real campaign', 'Present to jury', 'Defend your strategy', 'Use all AI tools taught'],
          accent: false,
        },
        {
          title: 'VIVA Examination',
          items: ['Oral examination', 'Concept application', 'Real-time problem solving', 'Industry scenario questions'],
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
