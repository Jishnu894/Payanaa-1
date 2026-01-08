import React, { useEffect, useRef } from 'react';
import './sections.css';

const cards = [
  {
    title: 'Clear & Fair Expense Sharing',
    body: 'Payana removes confusion from group trips by clearly showing who paid, who benefited, and who owes what. Every expense is transparent, so there are no awkward conversations or hidden calculations.'
  },
  {
    title: 'Built for Real Group Travel',
    body: 'From planning to settling expenses, Payana is designed around how real groups travel. Trips have a clear lifecycle, expenses are locked when trips end, and everyone stays on the same page throughout the journey.'
  },
  {
    title: 'Simple, Transparent, Trustworthy',
    body: 'Payana focuses on clarity over complexity. With easy-to-understand ledgers and fair settlements, users always know where their money stands, making group travel stress-free and trustworthy.'
  }
];

export default function WhySection() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add in-view to section so titles + cards animate together
          entry.target.classList.add('in-view');
          // stagger child cards
          const cards = entry.target.querySelectorAll('.card');
          cards.forEach((c, i) => { c.style.transitionDelay = `${i * 120}ms`; });
        } else {
          entry.target.classList.remove('in-view');
          const cards = entry.target.querySelectorAll('.card');
          cards.forEach((c) => { c.style.transitionDelay = ''; });
        }
      });
    }, { threshold: 0.15 });

    // observe the section itself and cards for fine-grained intersections
    io.observe(el);
    el.querySelectorAll('.card').forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="why" ref={ref} aria-label="Why Payana">
      <h2 className="section-title">Why Payana</h2>
      <div className="cards">
        {cards.map((c) => (
          <article key={c.title} className="card" tabIndex={0}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 
