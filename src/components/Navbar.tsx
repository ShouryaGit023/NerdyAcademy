import { useScrollProgress } from '@/hooks/useScrollProgress';

const navLinks = [
  { href: '#for-who', label: "Who's It For" },
  { href: '#semesters', label: 'Curriculum' },
  { href: '#instructor', label: 'Instructor' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  const { progress, navSolid } = useScrollProgress();

  return (
    <>
      <div id="nav-progress" style={{ width: `${progress}%` }} />
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-[60px] py-[18px] border-b border-primary/25 backdrop-blur-xl"
        style={{ background: navSolid ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.9)' }}
      >
        <a href="#" className="font-heading text-[2rem] tracking-[4px] text-foreground no-underline hover:tracking-[7px] transition-all duration-400">
          NERDY<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.7rem] tracking-[3px] uppercase text-foreground/55 no-underline hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary text-foreground px-6 py-[10px] font-bold text-[0.7rem] tracking-[3px] uppercase no-underline clip-skew-sm"
            >
              Enroll Now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
