import React, { useEffect, useState } from 'react';
import './navbar.css';

export default function Navbar({ setActiveView }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const sections = ['why','how','features'];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.25) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(id){
    setActiveView(id); // Switch to single section view
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0 });
  }

  function handleLogoClick(){
    setActiveView(null); // Return to full page view
    window.scrollTo({ top: 0 });
    window.history.replaceState(null, '', '/');
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="nav-inner">
        <div className="logo-wrap">
          <button className="logo-btn" onClick={handleLogoClick} aria-label="Go home">
            <img src="/src/assets/logo.svg" alt="Payana" className="brand-logo" />
          </button>
          <div className="title-inline" aria-hidden={!scrolled}>
            <span className="payana-color"><span className="pa">PA</span><span className="ya">YA</span><span className="na">NA</span></span>
          </div>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Primary">
          <button className={`nav-btn ${active==='why'?'active':''}`} onClick={() => handleNavClick('why')}>Why</button>
          <button className={`nav-btn ${active==='how'?'active':''}`} onClick={() => handleNavClick('how')}>How</button>
          <button className={`nav-btn ${active==='features'?'active':''}`} onClick={() => handleNavClick('features')}>Features</button>
          <button className="nav-btn login" onClick={() => setActiveView('login')}>Login</button>
        </nav>
      </div>
    </header>
  );
} 
