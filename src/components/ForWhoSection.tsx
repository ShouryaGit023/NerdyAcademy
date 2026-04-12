import { forWhoCards } from '@/data/courseData';

const images = ['img68.jpg', 'img73.jpg', 'img79.jpg', 'img85.jpg', 'img91.jpg'];

const ForWhoSection = () => (
  <section id="for-who" className="py-[120px] px-6 md:px-[60px] relative overflow-hidden" style={{ background: '#0d0d0d' }}>
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/author/img227.jpg")' }}
    />

    <div className="relative z-[1]">
      <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Who Is This For?</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[18px] reveal">
        BUILT FOR<br />
        <span className="text-primary">EVERYONE</span><br />
        WHO WANTS TO<br />UPSKILL.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
        {forWhoCards.map((card, idx) => (
          <div
            key={card.title}
            className="group relative overflow-hidden border border-white/10 bg-black/30 reveal transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-[0_24px_60px_rgba(217,0,0,0.2)]"
            style={{ transitionDelay: `${idx * 0.12}s` }}
          >
            <div className="overflow-hidden">
              <img
                src={`/whoisthisfor/${images[idx % images.length]}`}
                alt={card.title}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 text-center relative z-[1] reveal">
      <p className="text-[0.8rem] tracking-[4px] uppercase text-foreground/35">
        Basically, anyone who wants to upskill.
      </p>
    </div>
  </section>
);

export default ForWhoSection;
