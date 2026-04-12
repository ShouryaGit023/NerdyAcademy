const SpokenEnglishSection = () => (
  <section id="spoken" className="py-[160px] px-6 md:px-[60px] bg-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8 reveal">
        <div className="w-8 h-[2px] bg-primary"></div>
        <span className="text-[0.65rem] tracking-[6px] uppercase text-primary font-bold">
          BONUS INCLUDED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end">
        {/* Left Content */}
        <div className="reveal-left">
          <h2 className="font-heading text-[clamp(35px,8vw,95px)] leading-[0.85] text-white mb-12">
            DO WE LEARN<br />
            <span className="text-primary">SPOKEN</span><br />
            ENGLISH TOO?
          </h2>

          <div className="flex items-start gap-8 mb-10">
            <div className="relative">
              <span className="font-heading text-[clamp(50px,12vw,140px)] leading-[0.7] text-primary">
                YES.
              </span>
              <div className="absolute -bottom-2 right-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(255,0,0,0.8)] animate-pulse"></div>
            </div>
            
            <div className="pt-2">
              <div className="font-heading text-[1.4rem] tracking-[1px] text-white leading-tight">
                30 MINS/SESH
              </div>
              <div className="text-[0.65rem] tracking-[4px] uppercase text-white/40 mt-1">
                OF SPOKEN ENGLISH<br />
                EVERY SESSION · 1:1 ONLY
              </div>
            </div>
          </div>

          <p className="text-[1rem] leading-[1.6] text-white/40 max-w-lg font-medium">
            Every 1:1 session includes 30 minutes of structured spoken English practice. 
            Communication is the career skill no one teaches — until now.
          </p>
        </div>

        {/* Right Content - Features Card */}
        <div className="reveal-right">
          <div className="bg-[#080808] p-12 lg:p-16 border-l-[3px] border-primary relative group">
            {/* Subtle glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="font-heading text-[1.1rem] tracking-[3px] text-primary mb-12 uppercase">
              WHAT YOU PRACTICE:
            </div>
            
            <ul className="space-y-8 relative z-10">
              {[
                'Elevator pitches & storytelling',
                'Professional vocabulary & diction',
                'Interview & presentation confidence',
                'Real-time correction & feedback',
              ].map((item) => (
                <li key={item} className="pb-6 border-b border-white/5 flex gap-5 items-center group/item hover:translate-x-2 transition-transform cursor-default">
                  <span className="text-primary text-xl font-light transform scale-x-150 group-hover/item:scale-x-[1.8] transition-transform">→</span>
                  <span className="text-[1.1rem] text-white/70 group-hover/item:text-white transition-colors font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SpokenEnglishSection;
