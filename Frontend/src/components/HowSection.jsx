import React, { useEffect, useRef } from 'react';
import './sections.css';

const steps = [
  { title: 'Create a Trip', body: 'Start by creating a trip and adding your travel members. Payana keeps everything organized under one trip so everyone stays aligned from the beginning.' },
  { title: 'Add Expenses & Split Fairly', body: 'Log expenses by selecting who paid and who benefited. Choose equal, custom, or percentage splits — Payana handles the calculations for you.' },
  { title: 'Track Balances Transparently', body: 'Each member gets a clear ledger showing why they owe or are owed money. No confusion, no hidden math — everything is visible and easy to follow.' },
  { title: 'Settle with Confidence', body: 'When the trip ends, Payana calculates the minimum number of settlements needed. Settle quickly, fairly, and move on without awkward discussions.' }
];

export default function HowSection() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const cards = entry.target.querySelectorAll('.step-card');
          cards.forEach((c, i) => { c.style.transitionDelay = `${i * 110}ms`; });
        } else {
          entry.target.classList.remove('in-view');
          const cards = entry.target.querySelectorAll('.step-card');
          cards.forEach((c) => { c.style.transitionDelay = ''; });
        }
      });
    }, { threshold: 0.15 });

    io.observe(el);
    el.querySelectorAll('.step-card').forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section light" id="how" ref={ref} aria-label="How it works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps">
        {steps.map((s, i) => (
          <article key={s.title} className="step-card" tabIndex={0}>
            <div className="step-num">{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 
