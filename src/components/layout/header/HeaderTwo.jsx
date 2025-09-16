import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import navData from '../../../data/navbar/navbar.json';
import MenuItem from './navbar/MenuItem';
import logoImg from '/images/logo.png';
import SocialLinks from '../../ui/sociallinks/SocialLinks';

export default function HeaderTwo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <nav
      className={`navigation_v2 ${isSticky ? 'sticky' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="navigation_v2_inr">
          <div className="header_v2_logo">
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

          <div className="header_social_v2">
            <SocialLinks />
          </div>

          <div className={`nav_navwrap ${mobileOpen ? 'open' : ''}`}>
            <ul className="nav_navbar">
              {navData.map((item) => (
                <MenuItem key={item.id || item.title} item={item} depth={1} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
