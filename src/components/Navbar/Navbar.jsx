import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import './Navbar.css';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Join', href: '#why-join' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    // Delay scroll until after the mobile menu collapse animation finishes (350ms)
    // so the layout shift doesn't disrupt scrollIntoView targeting.
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 360);
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logo} alt="Futurix logo" className="nav__logo" />
        </a>

        <nav className="nav__links">
          {LINKS.map((link) => (
            <button key={link.href} className="nav__link" onClick={() => handleNav(link.href)}>
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          <span className={open ? 'nav__burger-line open' : 'nav__burger-line'} />
          <span className={open ? 'nav__burger-line open' : 'nav__burger-line'} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          >
            {LINKS.map((link) => (
              <button key={link.href} className="nav__mobile-link" onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
