import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import navData from '../../../data/navbar/navbaronepage.json';
import logoImg from '/images/logo.png';

export default function HeaderOnePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState(navData[0]?.id || '');

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 81) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // One Page Nav Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = navData[0]?.id;
      navData.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            current = item.id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // first run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`navigation_onepage ${isSticky ? 'sticky' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="navigation_onepage_inr">
          <div className="header_onepage_logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
            <button
              className={`nav_hamburger ${mobileOpen ? 'open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className={`nav_navwrap ${mobileOpen ? 'open' : ''}`}>
            <ul className="nav_navbar">
              {navData.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav_link ${active === item.id ? 'is-active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    aria-current={active === item.id ? 'true' : 'false'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
