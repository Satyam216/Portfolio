'use client';
import { useEffect, useState } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.01 }
    );
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onHashNav = () => setOpen(false);
    window.addEventListener('hashchange', onHashNav);
    return () => window.removeEventListener('hashchange', onHashNav);
  }, [open]);

  return (
    <header className="navbar">
      <div className={`nav-inner nav ${open ? 'open' : ''}`}>
        {/* Logo text bigger, Next.js badge removed */}
        <div style={{ fontSize: '2.0rem', fontWeight: 700, letterSpacing: '0.6px' }}>
          Satyam Jain
        </div>

        <nav className="nav">
          <ul>
            {links.map(l => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? 'active' : ''}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button aria-label="Menu" className="burger" onClick={() => setOpen(v => !v)}>
          <span /> <span /> <span />
        </button>
      </div>
    </header>
  );
}
