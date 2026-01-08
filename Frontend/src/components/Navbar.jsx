import React, { useEffect, useState } from 'react';
import './navbar.css';

export default function Navbar() {
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

  function scrollToId(id){
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector('.navbar')?.offsetHeight || 64;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navH - 12;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="nav-inner">
        <div className="logo-wrap">
          <img src="/src/assets/logo.svg" alt="Payana" className="brand-logo" />
          <div className="title-inline" aria-hidden={!scrolled}>
            <span className="payana-color"><span className="pa">PA</span><span className="ya">YA</span><span className="na">NA</span></span>
          </div>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Primary">
          <button className={`nav-btn ${active==='why'?'active':''}`} onClick={() => scrollToId('why')}>Why</button>
          <button className={`nav-btn ${active==='how'?'active':''}`} onClick={() => scrollToId('how')}>How</button>
          <button className={`nav-btn ${active==='features'?'active':''}`} onClick={() => scrollToId('features')}>Features</button>
          <button className="nav-btn login" aria-disabled>Login</button>
        </nav>
      </div>
    </header>
  );
} 
