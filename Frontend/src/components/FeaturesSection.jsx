import React, { useEffect, useRef } from 'react';
import './sections.css';

const features = [
  { title: 'Smart Expense Splitting', body: 'Split expenses the way you want — equal, custom amounts, or percentages. Payana automatically calculates fair shares based on who benefited.' },
  { title: 'Transparent Ledgers', body: 'Every user gets a clear ledger explaining exactly why they owe or are owed money. No hidden calculations, no confusion.' },
  { title: 'Minimum Settlements', body: 'Payana generates the minimum number of transactions needed to settle balances, saving time and avoiding unnecessary payments.' },
  { title: 'Trip Lifecycle Control', body: 'Trips move from planning to active and finally closed. Once a trip is closed, expenses are locked to keep records accurate.' },
  { title: 'Group-Focused Design', body: 'Built specifically for group travel, Payana keeps all members aligned with shared trips, expenses, and settlements in one place.' },
  { title: 'Privacy-First Location Sharing', body: 'Share live location only within a trip and only when you choose. Your privacy stays in your control.' }
];

export default function FeaturesSection() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const cards = entry.target.querySelectorAll('.feature-card');
          cards.forEach((c, i) => { c.style.transitionDelay = `${i * 80}ms`; });
        } else {
          entry.target.classList.remove('in-view');
          const cards = entry.target.querySelectorAll('.feature-card');
          cards.forEach((c) => { c.style.transitionDelay = ''; });
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    el.querySelectorAll('.feature-card').forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="features" ref={ref} aria-label="Key Features">
      <h2 className="section-title">Key Features</h2>
      <div className="features-grid">
        {features.map((f) => (
          <article className="feature-card" key={f.title} tabIndex={0}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 
