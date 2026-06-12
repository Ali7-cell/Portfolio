import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-b border-[rgba(124,77,255,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-white touch-manipulation"
          >
          Muhammad <span className="text-[#7c4dff]">Ali</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#7c4dff] bg-[rgba(124,77,255,0.1)]'
                    : 'text-[#a0a0b8] hover:text-white hover:bg-[rgba(124,77,255,0.05)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-[rgba(124,77,255,0.1)] transition-colors duration-200 touch-manipulation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Down Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{
          background: 'rgba(10,10,15,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(124,77,255,0.15)',
        }}
      >
        <div className="flex flex-col py-3 px-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-200 touch-manipulation ${
                activeSection === link.href.slice(1)
                  ? 'text-[#7c4dff] bg-[rgba(124,77,255,0.1)]'
                  : 'text-[#c0c0d0] hover:text-white hover:bg-[rgba(124,77,255,0.07)]'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
              }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-[#7c4dff]'
                    : 'bg-[rgba(124,77,255,0.3)]'
                }`}
              />
              {link.label}
            </a>
          ))}
          {/* Mobile CTA */}
          <div className="mt-3 mb-2 pt-3 border-t border-[rgba(124,77,255,0.1)] flex gap-3">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="flex-1 py-3 text-center bg-[#7c4dff] text-white font-semibold rounded-full text-sm touch-manipulation"
            >
              Get In Touch
            </a>
            <a
              href="/assets/images/muhammad_ali_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 py-3 text-center border border-[rgba(124,77,255,0.35)] text-white font-semibold rounded-full text-sm touch-manipulation"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
