const Footer = () => (
  <footer className="bg-[#030303] pt-20 px-6 md:px-[60px] pb-10 border-t border-primary/15">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] mb-[60px]">
      {/* Logo + desc */}
      <div>
        <a href="#" className="font-heading text-[2.6rem] tracking-[5px] no-underline block mb-4 text-foreground hover:tracking-[8px] transition-all duration-400">
          NERDY<span className="text-primary">.</span>
        </a>
        <p className="text-[0.8rem] leading-[1.9] text-foreground/[0.28] max-w-[280px] mb-7">
          Online & classroom courses. Computer skills, communication skills & AI tools. We help people grow.
        </p>
        <div className="flex gap-2 flex-wrap">
          {[
            { href: 'https://www.instagram.com/nerdy.academy', label: '📸 NERDY.ACADEMY' },
            { href: 'https://www.instagram.com/nerdyskills', label: '📸 NERDYSKILLS' },
            { href: 'mailto:shreysuryamishra@gmail.com', label: '✉ EMAIL' },
            { href: 'https://www.thenerdyacademy.com', label: '🌐 WEBSITE' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-[14px] py-[9px] bg-primary/10 border border-primary/[0.22] no-underline text-[0.58rem] tracking-[2px] text-foreground/55 hover:bg-primary hover:text-white transition-all hover:-translate-y-[3px]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Navigate */}
      <div>
        <div className="font-heading text-[0.85rem] tracking-[5px] text-foreground/[0.22] mb-[22px] pb-3 border-b border-white/[0.05]">NAVIGATE</div>
        <ul className="list-none flex flex-col gap-[10px]">
          {[
            { href: '#for-who', label: "WHO IT'S FOR" },
            { href: '#roadmap', label: 'HOW IT WORKS' },
            { href: '#semesters', label: 'CURRICULUM' },
            { href: '#instructor', label: 'INSTRUCTOR' },
            { href: '#certificates', label: 'CERTIFICATES' },
            { href: '#pricing', label: 'PRICING' },
            { href: '#faq', label: 'FAQ' },
            { href: '#contact', label: 'CONTACT' },
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[0.7rem] tracking-[2px] text-foreground/[0.38] no-underline hover:text-primary transition-colors">
                → {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <div className="font-heading text-[0.85rem] tracking-[5px] text-foreground/[0.22] mb-[22px] pb-3 border-b border-white/[0.05]">CONTACT</div>

        <div className="mb-5">
          <div className="text-[0.5rem] tracking-[4px] text-foreground/[0.22] mb-[6px]">ADDRESS</div>
          <a href="https://maps.app.goo.gl/FRQ44RMezFmD2JBs6" target="_blank" rel="noopener noreferrer" className="font-heading text-[1rem] leading-[1.4] tracking-[1px] text-foreground/65 no-underline block hover:text-primary transition-colors">
            22 A, Street Number 4, beside 22 A,<br />
            Sector 2, Bhilai, Chhattisgarh 490001
          </a>
        </div>

        <div className="mb-5">
          <div className="text-[0.5rem] tracking-[4px] text-foreground/[0.22] mb-[6px]">PHONE</div>
          <a href="tel:8225855200" className="font-heading text-[1.3rem] tracking-[2px] text-primary no-underline block">8225855200</a>
          <a href="tel:7828399992" className="font-heading text-[1.3rem] tracking-[2px] text-primary no-underline block">7828399992</a>
        </div>

        <div className="mb-5">
          <div className="text-[0.5rem] tracking-[4px] text-foreground/[0.22] mb-[6px]">EMAIL</div>
          <a href="mailto:shreysuryamishra@gmail.com" className="font-heading text-base tracking-[2px] text-foreground/65 no-underline block hover:text-primary">
            shreysuryamishra@gmail.com
          </a>
        </div>

        <div className="mb-5">
          <div className="text-[0.5rem] tracking-[4px] text-foreground/[0.22] mb-[6px]">INSTAGRAM</div>
          <a href="https://www.instagram.com/nerdy.academy" target="_blank" rel="noopener noreferrer" className="font-heading text-base tracking-[2px] text-foreground/65 no-underline block hover:text-primary">
            @NERDY.ACADEMY
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-white/[0.05] pt-[26px] flex justify-between items-center flex-wrap gap-3">
      <div className="text-[0.55rem] tracking-[3px] text-foreground/15">© 2025 NERDY PRIVATE LIMITED · ALL RIGHTS RESERVED · STARTUP INDIA CERTIFIED</div>
      <div className="font-heading text-[1.8rem] tracking-[6px] text-primary/[0.22]">NERDY.</div>
    </div>
  </footer>
);

export default Footer;
