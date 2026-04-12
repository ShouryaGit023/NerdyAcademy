import { useState, useEffect } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Menu, X } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);

  // Close nav when clicking a link
  const closeNav = () => setIsOpen(false);

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div id="nav-progress" style={{ width: `${progress}%` }} />
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-4 md:px-6 lg:px-[60px] py-[15px] md:py-[18px] border-b border-primary/25 backdrop-blur-xl"
        style={{ background: navSolid ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.9)' }}
      >
        <a href="#" className="font-heading text-[2rem] md:text-[2.4rem] tracking-[5px] text-foreground no-underline hover:tracking-[8px] transition-all duration-400 z-50">
          NERDY<span className="text-primary">.</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground z-50 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-9 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.7rem] lg:text-[0.8rem] tracking-[2px] lg:tracking-[3px] font-bold uppercase text-foreground/70 no-underline hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary text-foreground px-6 lg:px-8 py-[10px] lg:py-[13px] font-black text-[0.7rem] lg:text-[0.8rem] tracking-[2px] lg:tracking-[3px] uppercase no-underline clip-skew-sm"
            >
              Enroll Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 w-full h-dvh bg-black transition-transform duration-300 ease-in-out md:hidden z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Inner Container to handle centering and padding */}
          <div className="flex flex-col justify-between items-center h-full py-20 px-6">

            {/* Close Button - Positioned absolutely so it doesn't push the list down */}
            <button
              onClick={closeNav}
              className="absolute top-6 right-6 text-white text-3xl p-2"
            >
              ✕
            </button>

            <ul className="flex flex-col gap-8 items-center text-center list-none w-full">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <a
                    href={link.href}
                    onClick={closeNav}
                    className="text-[1.25rem] tracking-[3px] font-bold uppercase text-white no-underline hover:text-primary transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Bottom Section - Keeps the button at the bottom area */}
            <div className="w-full flex justify-center pb-10">
              <a
                href="#contact"
                onClick={closeNav}
                className="bg-primary text-black px-12 py-5 font-black text-[1.1rem] tracking-[4px] uppercase no-underline clip-skew-sm block text-center w-full max-w-[300px]"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

