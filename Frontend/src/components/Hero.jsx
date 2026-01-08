import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Payana hero">
      <div className="hero-inner">
        <h1 className="brand">
          <span className="pa">PA</span><span className="ya">YA</span><span className="na">NA</span>
        </h1>
        <p className="tagline">Payana helps you plan trips, organize itineraries, and pack effortlessly — all in one place.</p>
        <div className="hero-cta">
          <button className="primary-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}
